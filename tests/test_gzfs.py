from pathlib import Path
import json
import pytest

from ghidriff import get_parser, GhidraDiffEngine, VersionTrackingDiff

SYMBOLS_DIR = 'symbols'
BINS_DIR = 'bins'
PROG_OPTIONS_DIR = 'prog_options'

BASE_ADDR_HEX = "0x2f000"
BASE_ADDR_DEC = "192512"


@pytest.mark.forked
def test_gzfs_exist(shared_datadir: Path):
    """
    Tests end to end diff of CVE
    runs forked because each jpype jvm can only be initialized 1x
    """

    test_name = 'test_gzfs_exist'
    output_path = shared_datadir / test_name
    output_path.mkdir(exist_ok=True, parents=True)
    symbols_path = shared_datadir / SYMBOLS_DIR
    bins_path = shared_datadir / BINS_DIR
    ghidra_project_path = output_path / 'ghidra_projects'
    ghidra_project_path.mkdir(exist_ok=True, parents=True)

    # setup bins
    old_bin_path = bins_path / 'afd.sys.x64.10.0.22621.1028'
    new_bin_path = bins_path / 'afd.sys.x64.10.0.22621.1415'

    assert old_bin_path.exists()
    assert new_bin_path.exists()

    parser = get_parser()

    GhidraDiffEngine.add_ghidra_args_to_parser(parser)

    args = parser.parse_args([
        '-s',
        str(symbols_path),
        str(old_bin_path.absolute()),
        str(new_bin_path.absolute()),
        '-p',
        str(ghidra_project_path.absolute()),
    ])

    engine_log_path = output_path / parser.get_default('log_path')

    binary_paths = args.old + [bin for sublist in args.new for bin in sublist]

    binary_paths = [Path(path) for path in binary_paths]

    if any([not path.exists() for path in binary_paths]):
        missing_bins = [f'{path.name}' for path in binary_paths if not path.exists()]
        raise FileNotFoundError(f"Missing Bins: {' '.join(missing_bins)}")

    project_name = f'{args.project_name}-{binary_paths[0].name}-{binary_paths[-1].name}'

    DiffEngine: GhidraDiffEngine = VersionTrackingDiff

    d: GhidraDiffEngine = DiffEngine(args=args,
                                     verbose=True,
                                     threaded=args.threaded,
                                     max_ram_percent=args.max_ram_percent,
                                     print_jvm_flags=args.print_flags,
                                     jvm_args=args.jvm_args,
                                     force_analysis=args.force_analysis,
                                     force_diff=args.force_diff,
                                     verbose_analysis=args.va,
                                     no_symbols=args.no_symbols,
                                     engine_log_path=engine_log_path,
                                     engine_log_level=args.log_level,
                                     engine_file_log_level=args.file_log_level,
                                     base_address=args.base_address
                                     )

    gzfs_path: Path = output_path / parser.get_default('gzfs_path')

    d.setup_project(binary_paths, args.project_location, project_name, args.symbols_path, gzfs_path)

    d.analyze_project()

    assert (gzfs_path.exists())
    count = len([file for file in gzfs_path.iterdir()])
    assert (count == 2)
