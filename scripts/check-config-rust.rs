// Parse documentation examples without starting Rift or connecting to the desktop.
use rift_wm::common::config::Config;

fn main() {
    for filename in std::env::args().skip(1) {
        let config = Config::read(std::path::Path::new(&filename))
            .unwrap_or_else(|error| panic!("{filename}: {error}"));
        let issues = config.validate();
        assert!(issues.is_empty(), "{filename}: {issues:?}");
    }
}
