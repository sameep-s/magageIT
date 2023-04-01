export function deepCopyObj(obj) {
    if (typeof obj !== 'object') return obj;

    let copyObj = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        let value = obj[key];
        copyObj[key] = deepCopyObj(value);
    }

    return copyObj;
}