/*
 * Given an object, an array of properties and a value,
 * recursively create single property objects if needed, and assign the value
 * to the last property created.
 *
 * EG:
 * var myObj = {}
 * myObj.assignPath(['a','b','c'],'hello');
 * > { a : { b: {c: 'hello' } } }
 * myObj.assignPath(['a','b','d'],'goodbye');
 * > { a : { b: {c: 'hello', d: 'goodbye' } } }
 */
if (!Object.prototype.assignPath) {
    Object.prototype.assignPath = function(keyPath, value, append) {
        append = append || false;
        _assignPath(this,keyPath,value, append);
    }

    var _assignPath = function(obj,keyPath,value,append) {
        lastKeyIndex = keyPath.length-1;
        for (var i = 0; i < lastKeyIndex; ++ i) {
            key = keyPath[i];
            if (!(key in obj))
                obj[key] = {}
            obj = obj[key];
        }
        if (append) {
            if (Object.prototype.toString.call(obj[keyPath[lastKeyIndex]]) === '[object Array]') {
                obj[keyPath[lastKeyIndex]].push(value);
            }
            else {
                obj[keyPath[lastKeyIndex]] = [value];
            }
        }
        else {
            obj[keyPath[lastKeyIndex]] = value;
        }
    }
}
