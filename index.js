const ANIMACY           = require('./constants/animacy.js')
const CASE              = require('./constants/case.js')
const GENDER            = require('./constants/gender.js')
const LETTER_SOUND_TYPE = require('./constants/letter_sound_type.js')
const NUMBER            = require('./constants/number.js')

const letter_utils = require('./core/letter-utils/index.js')

module.exports = {
    ANIMACY,
    CASE,
    GENDER,
    LETTER_SOUND_TYPE,
    NUMBER,

    letter_utils,
}