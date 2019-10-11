/**
 * Function thas returns readable value of numerical enum
 * @param {object} enumObj 
 * @param {number} value 
 */
function enumToString(enumObj, value) {
    for(let str in enumObj) {
        if(enumObj[str] === value) {
            return str
        }
    }

    throw new Error('no such value in enum')
}

module.exports = enumToString