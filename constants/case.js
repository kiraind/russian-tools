/**
 * Enum of language cases
 * Перечисление для падежей
 * @readonly
 * @enum {number}
 */
const CASE = {
    /** Именительный падеж */
    NOMINATIVE:     0,

    /** Родительный падеж */
    GENITIVE:       1,

    /** Дательный падеж */
    DATIVE:         2,

    /** Винительный падеж */
    ACCUSATIVE:     3,

    /** Творительный падеж */
    INSTRUMENTAL:   4,

    /** Предложный падеж */
    PREPOSITIONAL:  5,
}

module.exports = CASE