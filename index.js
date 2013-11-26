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
    Object.prototype.assignPath = function(keyPath, value) {
        _assignPath(this,keyPath,value)
    }

    var _assignPath = function(obj,keyPath,value) {
        lastKeyIndex = keyPath.length-1;
        for (var i = 0; i < lastKeyIndex; ++ i) {
            key = keyPath[i];
            if (!(key in obj))
                obj[key] = {}
            obj = obj[key];
        }
        obj[keyPath[lastKeyIndex]] = value;
    }
}
