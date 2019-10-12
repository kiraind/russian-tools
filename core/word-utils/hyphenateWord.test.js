const hyphenateWord = require('./hyphenateWord.js')

// console.log(
//     hyphenateWord('СПбГУГА')
// )

test('abbreviation СПбГУГА to not divide', () => {
    expect(
        hyphenateWord('СПбГУГА')
    ).toEqual(
        [ 'СПбГУГА' ]
    )
})

test('name Алексей to divide', () => {
    expect(
        hyphenateWord('Алексей')
    ).toEqual(
        [ 'Алек', 'сей' ]
    )
})

test('word никотинамидадениндинуклеотидфосфат to divide', () => {
    expect(
        hyphenateWord('никотинамидадениндинуклеотидфосфат')
    ).toEqual(
        [
            'ни',
            'ко',
            'ти',
            'на',
            'ми',
            'да',
            'де',
            'нин',
            'ди',
            'нук',
            'ле',
            'о',
            'тид',
            'фо',
            'с',
            'фат',
        ]
    )
})

test('word Кто-нибудь to divide', () => {
    expect(
        hyphenateWord('Кто-нибудь')
    ).toEqual(
        [ 'Кто', '-', 'ни', 'будь' ]
    )
})

test('word АНИМЕ with !skipCapsed to divide', () => {
    expect(
        hyphenateWord('АНИМЕ', { skipCapsed: false })
    ).toEqual(
        [ 'АНИ', 'МЕ' ]
    )
})