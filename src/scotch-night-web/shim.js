// Only needed until jest/jsdom update to deal with React16 in a nicer manner
global.requestAnimationFrame = (callback) => {
    setTimeout(callback, 0);
};