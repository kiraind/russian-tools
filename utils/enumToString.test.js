const CASE = require('./../constants/case.js')
const enumToString = require('./enumToString.js')

test('gets readable accusative case value', () => {
    expect(
        enumToString(CASE, CASE.ACCUSATIVE)
    ).toBe('ACCUSATIVE')
})

test('throws error on invalid case value', () => {
    expect(
        () => enumToString(CASE, 10)
    ).toThrow('no such value in enum')
})