//deepcopy，不考虑循环引用的情况
function cloneObj(from) {
    return Object.keys(from)
        .reduce((obj, key) => (obj[key] = clone(from[key]), obj), {});
}
function cloneArr(from) {
    return from.map((n) => clone(n));
}

export function clone(from) {
    if (from instanceof Array) {
        return cloneArr(from);
    } else if (from instanceof Object) {
        return cloneObj(from);
    } else {
        return (from);
    }
}