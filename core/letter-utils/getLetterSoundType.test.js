const {
    VOICELESS_CONSONANT,
    MODIFIER,
    NONE,
} = require('russian-tools/constants/letter_sound_type.js')
const getLetterSoundType = require('./getLetterSoundType.js')

test('gets letter Ф sound type VOICELESS_CONSONANT', () => {
    expect(
        getLetterSoundType('Ф')
    ).toBe(VOICELESS_CONSONANT)
})

test('gets letter ь sound type MODIFIER', () => {
    expect(
        getLetterSoundType('ь')
    ).toBe(MODIFIER)
})

test('gets char 4 no sound type', () => {
    expect(
        getLetterSoundType('4')
    ).toBe(NONE)
})

test('throws TypeError on an invalid type', () => {
    expect(
        () => getLetterSoundType(234)
    ).toThrow(TypeError)
})