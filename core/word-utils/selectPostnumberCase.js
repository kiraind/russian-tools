/**
 * Selects from array correct word form to follow a number
 * Выбирает из массива правильную форму слова для отображения после числа
 * @param {number} number число
 * @param {[string, string, string]} words варианты слов для разных классов 
 * @returns {string}
 */
function selectPostnumberCase(number, [ type1, type2, type5 ]) {
    // E. g.
    // type1 человек,  чашка 
    // type2 человека, чашки
    // type5 человек,  чашек

    const mod100 = number % 100

    if(10 <= mod100 && mod100 <= 20) {
        return type5
    }

    const mod10 = number % 10

    if(mod10 === 0 || (5 <= mod10 && mod10 <= 9) ) {
        // 0, 5, 6, 7, 8, 9
        return type5
    } else if(mod10 === 1) {
        // 1
        return type1
    } else {
        // 2, 3, 4
        return type2
    }
}

module.exports = selectPostnumberCase