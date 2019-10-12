const LETTER_SOUND_TYPE = require('russian-tools/constants/letter_sound_type.js')
const {
    VOICELESS_CONSONANT,
    MODIFIER,
    NONE,
} = LETTER_SOUND_TYPE

test('gets letter Ф sound type VOICELESS_CONSONANT', () => {
    expect(
        LETTER_SOUND_TYPE.from('Ф')
    ).toBe(VOICELESS_CONSONANT)
})

test('gets letter ь sound type MODIFIER', () => {
    expect(
        LETTER_SOUND_TYPE.from('ь')
    ).toBe(MODIFIER)
})

test('gets char 4 no sound type', () => {
    expect(
        LETTER_SOUND_TYPE.from('4')
    ).toBe(NONE)
})

test('throws TypeError on an invalid type', () => {
    expect(
        () => LETTER_SOUND_TYPE.from(234)
    ).toThrow(TypeError)
})