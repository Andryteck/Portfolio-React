const buttonsRus = [
    {
        content: ['ё', 'Ё'],
        row: 0,
        classNames: ['key-common', 'changeable'],
        keyCode: 192
    },
    {
        content: ['1', '!'],
        classNames: ['key-common', 'changeable'],
        row: 0,
        keyCode: 49
    },
    {
        content: ['2', '\"'],
        classNames: ['key-common', 'changeable'],
        row: 0,
        keyCode: 50
    },
    {
        content: ['3', '№'],
        classNames: ['key-common', 'changeable'],
        row: 0,
        keyCode: 51
    },
    {
        content: ['4', ';'],
        classNames: ['key-common', 'changeable'],
        row: 0,
        keyCode: 52
    },
    {
        content: ['5', '%'],
        classNames: ['key-common', 'changeable'],
        row: 0,
        keyCode: 53
    },
    {
        content: ['6', ':'],
        classNames: ['key-common', 'changeable'],
        row: 0,
        keyCode: 54
    },
    {
        content: ['7', '?'],
        classNames: ['key-common', 'changeable'],
        row: 0,
        keyCode: 55
    },
    {
        content: ['8', '*'],
        classNames: ['key-common', 'changeable'],
        row: 0,
        keyCode: 56
    },
    {
        content: ['9', '('],
        classNames: ['key-common', 'changeable'],
        row: 0,
        keyCode: 57
    },
    {
        content: ['0', ')'],
        classNames: ['key-common', 'changeable'],
        row: 0,
        keyCode: 48
    },
    {
        content: ['-', '_'],
        classNames: ['key-common', 'changeable'],
        row: 0,
        keyCode: 189
    },
    {
        content: ['=', '+'],
        classNames: ['key-common', 'changeable'],
        row: 0,
        keyCode: 187
    },
    {
        content: ['Backspace'],
        classNames: ['key-common', 'backspace'],
        row: 0,
        keyCode: 8
    },
    {
        content: ['Tab'],
        classNames: ['key-common', 'tab'],
        row: 1,
        keyCode: 9
    },
    {
        content: ['й', 'Й'],
        classNames: ['key-common', 'changeable'],
        row: 1,
        keyCode: 81
    },
    {
        content: ['ц', 'Ц'],
        classNames: ['key-common', 'changeable'],
        row: 1,
        keyCode: 87
    },
    {
        content: ['у', 'У'],
        classNames: ['key-common', 'changeable'],
        row: 1,
        keyCode: 69
    },
    {
        content: ['к', 'К'],
        classNames: ['key-common', 'changeable'],
        row: 1,
        keyCode: 82
    },
    {
        content: ['е', 'Е'],
        classNames: ['key-common', 'changeable'],
        row: 1,
        keyCode: 84
    },
    {
        content: ['н', 'Н'],
        classNames: ['key-common', 'changeable'],
        row: 1,
        keyCode: 89
    },
    {
        content: ['г', 'Г'],
        classNames: ['key-common', 'changeable'],
        row: 1,
        keyCode: 85
    },
    {
        content: ['ш', 'Ш'],
        classNames: ['key-common', 'changeable'],
        row: 1,
        keyCode: 73
    },
    {
        content: ['щ', 'Щ'],
        classNames: ['key-common', 'changeable'],
        row: 1,
        keyCode: 79
    },
    {
        content: ['з', 'З'],
        classNames: ['key-common', 'changeable'],
        row: 1,
        keyCode: 80
    },
    {
        content: ['х', 'Х'],
        classNames: ['key-common', 'changeable'],
        row: 1,
        keyCode: 219
    },
    {
        content: ['ъ', 'Ъ'],
        classNames: ['key-common', 'changeable'],
        row: 1,
        keyCode: 221
    },
    {
        content: ['\\', '/'],
        classNames: ['key-common', 'changeable'],
        row: 1,
        keyCode: 220
    },
    {
        content: ['CapsLock'],
        classNames: ['key-common', 'capslock'],
        row: 2,
        keyCode: 20
    },
    {
        content: ['ф', 'Ф'],
        classNames: ['key-common', 'changeable'],
        row: 2,
        keyCode: 65
    },
    {
        content: ['ы', 'Ы'],
        classNames: ['key-common', 'changeable'],
        row: 2,
        keyCode: 83
    },
    {
        content: ['в', 'В'],
        classNames: ['key-common', 'changeable'],
        row: 2,
        keyCode: 68
    },
    {
        content: ['а', 'А'],
        classNames: ['key-common', 'changeable'],
        row: 2,
        keyCode: 70
    },
    {
        content: ['п', 'П'],
        classNames: ['key-common', 'changeable'],
        row: 2,
        keyCode: 71
    },
    {
        content: ['р', 'Р'],
        classNames: ['key-common', 'changeable'],
        row: 2,
        keyCode: 72
    },
    {
        content: ['о', 'О'],
        classNames: ['key-common', 'changeable'],
        row: 2,
        keyCode: 74
    },
    {
        content: ['л', 'Л'],
        classNames: ['key-common', 'changeable'],
        row: 2,
        keyCode: 75
    },
    {
        content: ['д', 'Д'],
        classNames: ['key-common', 'changeable'],
        row: 2,
        keyCode: 76
    },
    {
        content: ['ж', 'Ж'],
        classNames: ['key-common', 'changeable'],
        row: 2,
        keyCode: 186
    },
    {
        content: ['э', 'Э'],
        classNames: ['key-common', 'changeable'],
        row: 2,
        keyCode: 222
    },
    {
        content: ['Enter'],
        classNames: ['key-common', 'enter'],
        row: 2,
        keyCode: 13
    },
    {
        content: ['Shift'],
        classNames: ['key-common', 'shift-left'],
        row: 3,
        keyCode: 16
    },
    {
        content: ['я', 'Я'],
        classNames: ['key-common', 'changeable'],
        row: 3,
        keyCode: 90
    },
    {
        content: ['ч', 'Ч'],
        classNames: ['key-common', 'changeable'],
        row: 3,
        keyCode: 88
    },
    {
        content: ['с', 'С'],
        classNames: ['key-common', 'changeable'],
        row: 3,
        keyCode: 67
    },
    {
        content: ['м', 'М'],
        classNames: ['key-common', 'changeable'],
        row: 3,
        keyCode: 86
    },
    {
        content: ['и', 'И'],
        classNames: ['key-common', 'changeable'],
        row: 3,
        keyCode: 66
    },
    {
        content: ['т', 'Т'],
        classNames: ['key-common', 'changeable'],
        row: 3,
        keyCode: 78
    },
    {
        content: ['ь', 'Ь'],
        classNames: ['key-common', 'changeable'],
        row: 3,
        keyCode: 77
    },
    {
        content: ['б', 'Б'],
        classNames: ['key-common', 'changeable'],
        row: 3,
        keyCode: 188
    },
    {
        content: ['ю', 'Ю'],
        classNames: ['key-common', 'changeable'],
        row: 3,
        keyCode: 190
    },
    {
        content: ['.', ','],
        classNames: ['key-common', 'changeable'],
        row: 3,
        keyCode: 191
    },
    {
        content: ['↑'],
        classNames: ['key-common', 'arrow-up'],
        row: 3,
        keyCode: 38
    },
    {
        content: ['Shift'],
        classNames: ['key-common', 'shift-right'],
        row: 3,
        keyCode: 16
    },
    {
        content: ['Ctrl'],
        classNames: ['key-common', 'ctrl-left'],
        row: 4,
        keyCode: 17
    },
    {
        content: ['Win'],
        classNames: ['key-common', 'win'],
        row: 4,
        keyCode: 91
    },
    {
        content: ['Alt'],
        classNames: ['key-common', 'alt-left'],
        row: 4,
        keyCode: 18
    },
    {
        content: [' '],
        classNames: ['key-common', 'space'],
        row: 4,
        keyCode: 32
    },
    {
        content: ['Alt'],
        classNames: ['key-common', 'alt-right'],
        row: 4,
        keyCode: 18
    },
    {
        content: ['←'],
        classNames: ['key-common', 'arrow-left'],
        row: 4,
        keyCode: 37
    },
    {
        content: ['↓'],
        classNames: ['key-common', 'arrow-down'],
        row: 4,
        keyCode: 40
    },
    {
        content: ['→'],
        classNames: ['key-common', 'arrow-right'],
        row: 4,
        keyCode: 39
    },
    {
        content: ['Ctrl'],
        classNames: ['key-common', 'ctrl-right'],
        row: 4,
        keyCode: 17
    }
];

const regular = ['ё', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del',
    'Caps', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
    'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '∧', 'Shift',
    'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '<', '∨', '>', 'Ctrl'
]

const wrapper = document.createElement('div');
document.body.append(wrapper);
wrapper.classList.add('wrapper');

const textarea = document.createElement('textarea');
wrapper.append(textarea);
textarea.classList.add('textarea');

const keys = document.createElement('div');
wrapper.append(keys);
keys.classList.add('keys');


for (let i = 0; i < regular.length ; i++ ){
    const button = document.createElement('div');
    keys.append(button);
    button.classList.add('button');
    button.id = 'buttonId';
    const space = document.querySelector();
    space.id = 'spaceId';
    const buttonValue = document.createElement('span');
    button.append(buttonValue);
    buttonValue.innerHTML = regular[i];
}




