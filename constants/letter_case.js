/**
 * Enum of letter cases
 * Перечисление для регистра буквы
 * @readonly
 * @enum {number}
 */
const LETTER_CASE = {
    /** Заглавная буква */
    UPPER:  0,

    /** Строчная буквы */
    LOWER:  1,

    /** Не буква */
    NONE:   2,
}

/**
 * 
 * @param {string} char
 */
LETTER_CASE.from = char => {
    if(typeof char !== 'string') {
        throw new TypeError('char argument must be a string')
    }

    if(char.toLowerCase() === char.toUpperCase()) {
        return LETTER_CASE.NONE
    } else if(char.toLowerCase() === char) {
        return LETTER_CASE.LOWER
    } else {
        return LETTER_CASE.UPPER
    }
}

module.exports = LETTER_CASE