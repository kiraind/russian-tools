/**
 * Enum of probable sound type of a letter
 * Перечисление для вероятного вида звука буквы
 * @readonly
 * @enum {number}
 */
const LETTER_SOUND_TYPE = {
    /** Гласный звук */
    VOWEL:                  0,

    /** Звонкий согласный звук */
    VOICED_CONSONANT:       1,

    /** Глухой согласный звук */
    VOICELESS_CONSONANT:    2,

    /** Модификатор (ъ, ь) */
    MODIFIER:               3,

    /** Дефис */
    HYPNEN:                 4,

    /** Не буква */
    NONE:                   5,
}

module.exports = LETTER_SOUND_TYPE