const LETTER_CASE = require('./../../constants/letter_case.js')
const SOUND_TYPE = require('./../../constants/letter_sound_type.js')

/**
 * @param {number} n
 */
Array.prototype.repeat = function(n) {
    const newArray = []

    for(let i = 0; i < n; i++) {
        newArray.push(...this)
    }

    return newArray
}

/**
 * Guesses word's division for hyphenating
 * Угадывает разделение слова для переноса
 * @param {string} word
 * @returns {Array<string>}
 */
function hyphenateWord(
    word,
    {
        skipCapsed=true,
    }={}
) {
    const raw_chars = word.split('')

    const casesMap = raw_chars.map(LETTER_CASE.from)
    const chars = raw_chars.map(char => char.toLowerCase())

    const upper_count = casesMap.reduce(
        (count, l_case) => count + +(l_case === LETTER_CASE.UPPER),
        0
    )

    // if more that half are uppercase it's probably an abbreviation
    if(skipCapsed && upper_count > word.length / 2) {
        return [ word ]
    }

    const sound_types = chars.map(SOUND_TYPE.from)
    const allowed = [ true ].repeat(chars.length - 1)

    // find left syllable
    for(let i = 0; i < chars.length; i++) {
        if(sound_types[i] === SOUND_TYPE.VOWEL) {
            break
        } else {
            // no syllables
            if(i === chars.length - 1) {
                return [ word ]
            }
            allowed[i] = false
        }
    }

    // find right syllable
    for(let i = chars.length - 1; i >= 0; i--) {
        if(sound_types[i] === SOUND_TYPE.VOWEL) {
            break
        } else {
            allowed[i - 1] = false
        }
    }

    // handle pairs
    for(let i = 0; i < allowed.length; i++) {
        // const left  = letters[i]
        const right = chars[i + 1]
        
        const leftType  = sound_types[i]
        const rightType = sound_types[i + 1]

        if(
            // left cons. right modif.
            (leftType === SOUND_TYPE.VOICED_CONSONANT || leftType === SOUND_TYPE.VOICELESS_CONSONANT) &&
            rightType === SOUND_TYPE.MODIFIER
        ) {
            allowed[i] = false
        } else if(
            // left cons. right vowel.
            (leftType === SOUND_TYPE.VOICED_CONSONANT || leftType === SOUND_TYPE.VOICELESS_CONSONANT) &&
            rightType === SOUND_TYPE.VOWEL
        ) {
            allowed[i] = false
        } else if(
            // left is first of right is last
            i === 0 || i === allowed.length -1
        ) {
            allowed[i] = false
        } else if(
            // left cons. right й
            (leftType === SOUND_TYPE.VOICED_CONSONANT || leftType === SOUND_TYPE.VOICELESS_CONSONANT) &&
            right === 'й'
        ) {
            allowed[i] = false
        } else if(
            // left v.cons.
            rightType === SOUND_TYPE.VOICED_CONSONANT &&
            sound_types[i + 2] !== SOUND_TYPE.VOWEL
        ) {
            allowed[i] = false
        }
    }

    const res = [
        raw_chars[0]
    ]

    res.addToLast = function(str) {
        const len = this.length

        if(len === 0) {
            this[0] = str
        } else {
            this[len-1] += str
        }
    }

    for(let i = 0; i < allowed.length; i++) {
        if(allowed[i]) {
            res.push(raw_chars[i + 1])
        } else {
            res.addToLast(raw_chars[i + 1])
        }
    }

    delete res.addToLast

    return res
}

module.exports = hyphenateWord