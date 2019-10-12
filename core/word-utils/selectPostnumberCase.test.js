const selectPostnumberCase = require('./selectPostnumberCase.js')

test('select correct form for `10 машин`', () => {
    expect(
        selectPostnumberCase(10, [ 'машина', 'машины', 'машин' ])
    ).toBe(
        'машин'
    )
})

test('select correct form for `0 машин`', () => {
    expect(
        selectPostnumberCase(0, [ 'машина', 'машины', 'машин' ])
    ).toBe(
        'машин'
    )
})

test('select correct form for `113 машин`', () => {
    expect(
        selectPostnumberCase(113, [ 'машина', 'машины', 'машин' ])
    ).toBe(
        'машин'
    )
})

test('select correct form for `122 машины`', () => {
    expect(
        selectPostnumberCase(122, [ 'машина', 'машины', 'машин' ])
    ).toBe(
        'машины'
    )
})

test('select correct form for `5321 машина`', () => {
    expect(
        selectPostnumberCase(5321, [ 'машина', 'машины', 'машин' ])
    ).toBe(
        'машина'
    )
})