export function popRandom (array) {
    let i = (Math.random() * array.length) | 0;
    return array.splice(i, 1)[0];
};