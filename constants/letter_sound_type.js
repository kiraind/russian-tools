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

/**
 * Guesses LETTER_SOUND_TYPE from char
 * Угадывает LETTER_SOUND_TYPE по символу
 * @param {string} letter 1-char string with letter
 * @returns {number}
 */
LETTER_SOUND_TYPE.from = function(letter) {
    if(typeof letter !== 'string') {
        throw new TypeError('letter argument must be a string')
    }

    const type = map[ letter.toLowerCase() ]

    if(type !== undefined) {
        return type
    } else {
        return NONE
    }
}

module.exports = LETTER_SOUND_TYPE

const {
    VOWEL,
    VOICED_CONSONANT,
    VOICELESS_CONSONANT,
    MODIFIER,
    HYPNEN,
    NONE,
} = LETTER_SOUND_TYPE

const map = {
    'а': VOWEL, 
    'б': VOICED_CONSONANT, 
    'в': VOICED_CONSONANT, 
    'г': VOICED_CONSONANT, 
    'д': VOICED_CONSONANT, 
    'е': VOWEL, 
    'ё': VOWEL, 
    'ж': VOICED_CONSONANT, 
    'з': VOICED_CONSONANT, 
    'и': VOWEL, 
    'й': VOICED_CONSONANT, 
    'к': VOICED_CONSONANT, 
    'л': VOICED_CONSONANT, 
    'м': VOICED_CONSONANT, 
    'н': VOICED_CONSONANT, 
    'о': VOWEL, 
    'п': VOICELESS_CONSONANT, 
    'р': VOICED_CONSONANT, 
    'с': VOICELESS_CONSONANT, 
    'т': VOICELESS_CONSONANT, 
    'у': VOWEL, 
    'ф': VOICELESS_CONSONANT, 
    'х': VOICELESS_CONSONANT, 
    'ц': VOICELESS_CONSONANT, 
    'ч': VOICELESS_CONSONANT, 
    'ш': VOICELESS_CONSONANT, 
    'щ': VOICELESS_CONSONANT, 
    'ъ': MODIFIER, 
    'ы': VOWEL, 
    'ь': MODIFIER, 
    'э': VOWEL, 
    'ю': VOWEL, 
    'я': VOWEL,

    '-': HYPNEN,
}