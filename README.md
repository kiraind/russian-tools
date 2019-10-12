# russian-tools
JS-библиотека с готовыми алгоритмами работы с русским языком

## Установка

```shell
npm i @kiraind/russian-tools
```

## Работа со словами

### hyphenateWord

Функция делит слово на массив из его частей по правилам переноса, игнорируя аббревиатуры

```javascript
const { hyphenateWord } = require('@kiraind/russian-tools').word_utils

const text = 'Эй дружок СПбГУГА ответь'

const hypnenated = text
    .split(' ') // [ 'Эй', 'дружок', 'СПбГУГА', 'ответь' ]
    .map(
        word => hyphenateWord(word).join('&shy;')
    )           // [ 'Эй', 'дру&shy;жок', 'СПбГУГА', 'от&shy;веть' ]
    .join(' ')  // 'Эй дру&shy;жок СПбГУГА от&shy;веть'
```

### selectPostnumberCase

Функция выбирает из массива правильную форму слова для отображения после числа

```javascript
const { selectPostnumberCase } = require('@kiraind/russian-tools').word_utils

selectPostnumberCase(113,  [ 'машина', 'машины', 'машин' ])  // машин
selectPostnumberCase(5321, [ 'рубль', 'рубля', 'рублей' ])   // рубль
```
