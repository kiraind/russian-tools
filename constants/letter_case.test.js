const LETTER_CASE = require('./letter_case.js')
const {
    LOWER,
    UPPER,
    NONE,
} = LETTER_CASE

test('throws TypeError on an invalid type', () => {
    expect(
        () => LETTER_CASE.from(234)
    ).toThrow(TypeError)
})

test('defines letter ё case as LOWER', () => {
    expect(
        LETTER_CASE.from('ё')
    ).toBe(LOWER)
})

test('defines letter Ж case as UPPER', () => {
    expect(
        LETTER_CASE.from('Ж')
    ).toBe(UPPER)
})

test('defines char + case as NONE', () => {
    expect(
        LETTER_CASE.from('+')
    ).toBe(NONE)
})