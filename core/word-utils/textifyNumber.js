const GENDER = require('../../constants/gender.js')
const CASE   = require('../../constants/case.js')

const selectPostnumberCase = require('./selectPostnumberCase.js')

const orders = [
    ['', '', ''],
    ['тысяча', 'тысячи', 'тысяч'],
    ['миллион', 'миллиона', 'миллионов'],
    ['миллиард', 'миллиарда', 'миллиардов'],
]

const numbers = [
    'ноль',
    'один',
    'два',
    'три',
    'четыре',
    'пять',
    'шесть',
    'семь',
    'восемь',
    'девять',
]

const decimgap = [
    'десять',
    'одиннадцать',
    'двенадцать',
    'тринадцать',
    'четырнадцать',
    'пятнадцать',
    'шестнадцать',
    'семнадцать',
    'восемнадцать',
    'девятнадцать',
]

const decimas = [
    '',
    'десять',
    'двадцать',
    'тридцать',
    'сорок',
    'пятьдесят',
    'шестьдесят',
    'семьдесят',
    'восемьдесят',
    'девяносто',
]

const hundreeds = [
    '',
    'сто',
    'двести',
    'триста',
    'четыреста',
    'пятьсот',
    'шестьсот',
    'семьсот',
    'восемьсот',
    'девятьсот',
]

function getTriple(number, gender=GENDER.MASCULINE) {
    let str = ''

    const singl = number % 10
    const decad = Math.floor(number / 10) % 10
    const hundr = Math.floor(number / 100) % 10

    let finished = false

    if(hundr !== 0) {
        str += hundreeds[hundr] + ' '
    }
    if(decad !== 0) {
        if(decad === 1) {
            str += decimgap[singl]
            finished = true
        } else {
            str += decimas[decad] + ' '
        }
    }
    if(singl !== 0 && !finished) {
        if(gender === GENDER.FEMININE && singl === 1) {
            str += 'одна'
        } else if(gender === GENDER.FEMININE && singl === 2) {
            str += 'две'
        } else {
            str += numbers[singl]
        }
    }

    return str.trim()
}

/**
 * Converts whole number to it's text form
 * Конвертирует целое число в текстовый вид
 * @param {number} number 
 * @param {number} gr_case 
 */
function textifyNumber(number, gr_case=CASE.NOMINATIVE) {
    if(gr_case !== CASE.NOMINATIVE) {
        throw new Error('textifyNumber not in NOMINATIVE is not implemented yet')
    }

    let str = ''

    if(number < 0) {
        str += 'минус '
        number = -number
    } else if(number === 0) {
        return 'ноль'
    }

    const triples = []
    while(number > 0) {
        triples.push(number % 1000)
        number = Math.floor(number / 1000)
    }

    const parts = []

    for(let order = 0; order < triples.length; order += 1) {
        const value = triples[order]

        if(value !== 0) {
            parts.push(
                (
                    getTriple(
                        value,
                        order === 1 ? GENDER.FEMININE : GENDER.MASCULINE
                    ) + ' ' +
                    selectPostnumberCase(value, orders[order])
                ).trim()
            )
        }
    }

    return str + parts.reverse().join(' ')
}

module.exports = textifyNumber