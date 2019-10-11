/**
 * Enum of animacy variants
 * Перечисление для одушевленности
 * @readonly
 * @enum {number}
 */
const ANIMACY = {
    /** Одушевленное */
    ANIMATE:    0,

    /** Недушевленное */
    INANIMATE:  1,

    /** Не применимо */
    /* см. ru.wikipedia.org/wiki/Pluralia_tantum */
    NONE:       3,
}

module.exports = ANIMACY