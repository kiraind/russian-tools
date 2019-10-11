/**
 * Enum of noun genders
 * Перечисление для родов существительных
 * @readonly
 * @enum {number}
 */
const GENDER = {
    /** Средний род */
    NEUTRAL:    0,

    /** Мужской род */
    MASCULINE:  1,

    /** Женский род */
    FEMININE:   2,

    /** Не применимо */
    /* см. ru.wikipedia.org/wiki/Pluralia_tantum */
    NONE:       3,
}

module.exports = GENDER