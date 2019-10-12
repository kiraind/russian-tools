const textifyNumber = require('./textifyNumber.js')

test('convert 0 as `ноль`', () => {
    expect(
        textifyNumber(0)
    ).toEqual(
        'ноль'
    )
})

test('convert -10 as `минус десять`', () => {
    expect(
        textifyNumber(-10)
    ).toEqual(
        'минус десять'
    )
})

test('convert 100014 as `сто тысяч четырнадцать`', () => {
    expect(
        textifyNumber(100014)
    ).toEqual(
        'сто тысяч четырнадцать'
    )
})

test('convert 1488 as `одна тысяча четыреста восемьдесят восемь`', () => {
    expect(
        textifyNumber(1488)
    ).toEqual(
        'одна тысяча четыреста восемьдесят восемь'
    )
})

test('convert 420 as `четыреста двадцать`', () => {
    expect(
        textifyNumber(420)
    ).toEqual(
        'четыреста двадцать'
    )
})

test('convert 69000 as `шестьдесят девять тысяч`', () => {
    expect(
        textifyNumber(69000)
    ).toEqual(
        'шестьдесят девять тысяч'
    )
})

test('convert 7654321 as ``', () => {
    expect(
        textifyNumber(7654321)
    ).toEqual(
        'семь миллионов шестьсот пятьдесят четыре тысячи триста двадцать один'
    )
})
