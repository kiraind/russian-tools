const hypnenateWord = require('../word-utils/hyphenateWord.js')

const nbsp         = '&nbsp;'
const hypnen_place = '&shy;'

const TYPES = {
    WORD: 0,
    CHAR: 1,
}

/**
 * 
 * @param {string} text 
 */
function prepareParagraph(text) {
    // console.log(text)

    const tokens = []
    
    let insideWord = false
    let currentWord = ''

    for(let i = 0; i < text.length; i += 1) {
        const char = text[i]

        const isWordPart = /^[А-Яа-яЁёA-Za-z0-9\-]$/.test(char)

        if(!insideWord) {
            if(isWordPart) {
                insideWord = true
                currentWord += char
            } else {
                // nope

                tokens.push({
                    type: TYPES.CHAR,
                    str: char,
                })
            }
        } else {
            // if inside word
            if(isWordPart) {
                currentWord += char
            } else {
                insideWord = false
                
                tokens.push({
                    type: TYPES.WORD,
                    str: currentWord,
                })
                currentWord = ''

                // todo process char

                tokens.push({
                    type: TYPES.CHAR,
                    str: char,
                })
            }
        }
    }

    // remove double spaces
    for(let i = 0; i < tokens.length; i += 1) {

        while(tokens[i].str === ' ' && tokens[i + 1].str === ' ') {
            tokens.splice(i + 1, 1)
        }
    }

    // insert nbsp after single-letter words
    for(let i = 1; i < tokens.length; i += 1) {
        if(
            tokens[i - 1].type === TYPES.WORD &&
            tokens[i - 1].str.length === 1    &&
            tokens[i].str === ' '
        ) {
            tokens[i].str = nbsp
        }
    }

    // hypnenate words
    for(let i = 0; i < tokens.length; i += 1) {
        if(
            tokens[i].type === TYPES.WORD
        ) {
            tokens[i].str = hypnenateWord( tokens[i].str ).join(hypnen_place)
        }
    }

    return tokens
        .map(token => token.str)
        .join('')
}

module.exports = prepareParagraph