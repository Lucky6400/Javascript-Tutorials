/**
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */
const checkIfInstanceOf = function (obj, classFunction) {
    return obj !== null && obj !== undefined && typeof classFunction === 'function' && Object(obj) instanceof classFunction
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */