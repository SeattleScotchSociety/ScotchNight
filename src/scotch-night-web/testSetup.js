class MockMap {
    setOptions() { };
    addListener() { };
    setCenter() { };
    setZoom() { };
};

window.google = {
    maps: {
        places: {
            Autocomplete: class { }
        },
        Map: MockMap,
        addListener: () => { }
    },
    addListener: () => { }
};