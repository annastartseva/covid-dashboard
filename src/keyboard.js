import { searchProcess } from './search';

const language = {
  ru: [
    {
      small: 'CapsLock',
      shift: 'CapsLock',
      code: 'CapsLock',
    },
    {
      small: 'ё',
      shift: 'Ё',
      code: 'Backquote',
    },
    {
      small: '1',
      shift: '!',
      code: 'Digit1',
    },
    {
      small: '2',
      shift: '"',
      code: 'Digit2',
    },
    {
      small: '3',
      shift: '№',
      code: 'Digit3',
    },
    {
      small: '4',
      shift: ';',
      code: 'Digit4',
    },
    {
      small: '5',
      shift: '%',
      code: 'Digit5',
    },
    {
      small: '6',
      shift: ':',
      code: 'Digit6',
    },
    {
      small: '7',
      shift: '?',
      code: 'Digit7',
    },
    {
      small: '8',
      shift: '*',
      code: 'Digit8',
    },
    {
      small: '9',
      shift: '(',
      code: 'Digit9',
    },
    {
      small: '0',
      shift: ')',
      code: 'Digit0',
    },
    {
      small: '-',
      shift: '_',
      code: 'Minus',
    },
    {
      small: '=',
      shift: '+',
      code: 'Equal',
    },
    {
      small: 'Backspace',
      shift: null,
      code: 'Backspace',
    },
    {
      small: 'й',
      shift: 'Й',
      code: 'KeyQ',
    },
    {
      small: 'ц',
      shift: 'Ц',
      code: 'KeyW',
    },
    {
      small: 'у',
      shift: 'У',
      code: 'KeyE',
    },
    {
      small: 'к',
      shift: 'К',
      code: 'KeyR',
    },
    {
      small: 'е',
      shift: 'Е',
      code: 'KeyT',
    },
    {
      small: 'н',
      shift: 'Н',
      code: 'KeyY',
    },
    {
      small: 'г',
      shift: 'Г',
      code: 'KeyU',
    },
    {
      small: 'ш',
      shift: 'Ш',
      code: 'KeyI',
    },
    {
      small: 'щ',
      shift: 'Щ',
      code: 'KeyO',
    },
    {
      small: 'з',
      shift: 'З',
      code: 'KeyP',
    },
    {
      small: 'х',
      shift: 'Х',
      code: 'BracketLeft',
    },
    {
      small: 'ъ',
      shift: 'Ъ',
      code: 'BracketRight',
    },
    {
      small: 'Enter',
      shift: null,
      code: 'Enter',
    },
    {
      small: 'ф',
      shift: 'Ф',
      code: 'KeyA',
    },
    {
      small: 'ы',
      shift: 'Ы',
      code: 'KeyS',
    },
    {
      small: 'в',
      shift: 'В',
      code: 'KeyD',
    },
    {
      small: 'а',
      shift: 'А',
      code: 'KeyF',
    },
    {
      small: 'п',
      shift: 'П',
      code: 'KeyG',
    },
    {
      small: 'р',
      shift: 'Р',
      code: 'KeyH',
    },
    {
      small: 'о',
      shift: 'О',
      code: 'KeyJ',
    },
    {
      small: 'л',
      shift: 'Л',
      code: 'KeyK',
    },
    {
      small: 'д',
      shift: 'Д',
      code: 'KeyL',
    },
    {
      small: 'ж',
      shift: 'Ж',
      code: 'Semicolon',
    },
    {
      small: 'э',
      shift: 'Э',
      code: 'Quote',
    },
    {
      small: '\\',
      shift: '/',
      code: 'Backslash',
    },
    {
      small: 'Shift',
      shift: null,
      code: 'ShiftLeft',
    },
    {
      small: '/',
      shift: '|',
      code: 'IntlBackslash',
    },
    {
      small: 'я',
      shift: 'Я',
      code: 'KeyZ',
    },
    {
      small: 'ч',
      shift: 'Ч',
      code: 'KeyX',
    },
    {
      small: 'с',
      shift: 'С',
      code: 'KeyC',
    },
    {
      small: 'м',
      shift: 'М',
      code: 'KeyV',
    },
    {
      small: 'и',
      shift: 'И',
      code: 'KeyB',
    },
    {
      small: 'т',
      shift: 'Т',
      code: 'KeyN',
    },
    {
      small: 'ь',
      shift: 'Ь',
      code: 'KeyM',
    },
    {
      small: 'б',
      shift: 'Б',
      code: 'Comma',
    },
    {
      small: 'ю',
      shift: 'Ю',
      code: 'Period',
    },
    {
      small: '.',
      shift: ',',
      code: 'Slash',
    },
    {
      small: 'Voice',
      shift: 'Voice',
      code: 'Voice',
    },
    {
      small: 'Sound off',
      shift: 'Sound',
      code: 'Sound',
    },
    {
      small: ' ',
      shift: null,
      code: 'Space',
    },
    {
      small: '&larr;',
      shift: null,
      code: 'ArrowLeft',
    },
    {
      small: '&uarr;',
      shift: null,
      code: 'ArrowUp',
    },
    {
      small: '&darr;',
      shift: null,
      code: 'ArrowDown',
    },
    {
      small: '&rarr;',
      shift: null,
      code: 'ArrowRight',
    },
    {
      small: 'Ru',
      shift: 'Ru',
      code: 'Lang',
    },
  ],
  en: [
    {
      small: '`',
      shift: '~',
      code: 'Backquote',
    },
    {
      small: '1',
      shift: '!',
      code: 'Digit1',
    },
    {
      small: '2',
      shift: '@',
      code: 'Digit2',
    },
    {
      small: '3',
      shift: '#',
      code: 'Digit3',
    },
    {
      small: '4',
      shift: '$',
      code: 'Digit4',
    },
    {
      small: '5',
      shift: '%',
      code: 'Digit5',
    },
    {
      small: '6',
      shift: '^',
      code: 'Digit6',
    },
    {
      small: '7',
      shift: '&',
      code: 'Digit7',
    },
    {
      small: '8',
      shift: '*',
      code: 'Digit8',
    },
    {
      small: '9',
      shift: '(',
      code: 'Digit9',
    },
    {
      small: '0',
      shift: ')',
      code: 'Digit0',
    },
    {
      small: '-',
      shift: '_',
      code: 'Minus',
    },
    {
      small: '=',
      shift: '+',
      code: 'Equal',
    },
    {
      small: 'Backspace',
      shift: null,
      code: 'Backspace',
    },
    {
      small: 'q',
      shift: 'Q',
      code: 'KeyQ',
    },
    {
      small: 'w',
      shift: 'W',
      code: 'KeyW',
    },
    {
      small: 'e',
      shift: 'E',
      code: 'KeyE',
    },
    {
      small: 'r',
      shift: 'R',
      code: 'KeyR',
    },
    {
      small: 't',
      shift: 'T',
      code: 'KeyT',
    },
    {
      small: 'y',
      shift: 'Y',
      code: 'KeyY',
    },
    {
      small: 'u',
      shift: 'U',
      code: 'KeyU',
    },
    {
      small: 'i',
      shift: 'I',
      code: 'KeyI',
    },
    {
      small: 'o',
      shift: 'O',
      code: 'KeyO',
    },
    {
      small: 'p',
      shift: 'P',
      code: 'KeyP',
    },
    {
      small: '[',
      shift: '{',
      code: 'BracketLeft',
    },
    {
      small: ']',
      shift: '}',
      code: 'BracketRight',
    },
    {
      small: 'Enter',
      shift: null,
      code: 'Enter',
    },
    {
      small: 'CapsLock',
      shift: null,
      code: 'CapsLock',
    },
    {
      small: 'a',
      shift: 'A',
      code: 'KeyA',
    },
    {
      small: 's',
      shift: 'S',
      code: 'KeyS',
    },
    {
      small: 'd',
      shift: 'D',
      code: 'KeyD',
    },
    {
      small: 'f',
      shift: 'F',
      code: 'KeyF',
    },
    {
      small: 'g',
      shift: 'G',
      code: 'KeyG',
    },
    {
      small: 'h',
      shift: 'H',
      code: 'KeyH',
    },
    {
      small: 'j',
      shift: 'J',
      code: 'KeyJ',
    },
    {
      small: 'k',
      shift: 'K',
      code: 'KeyK',
    },
    {
      small: 'l',
      shift: 'L',
      code: 'KeyL',
    },
    {
      small: ';',
      shift: ':',
      code: 'Semicolon',
    },
    {
      small: "'",
      shift: '"',
      code: 'Quote',
    },
    {
      small: '\\',
      shift: '|',
      code: 'Backslash',
    },
    {
      small: 'Shift',
      shift: null,
      code: 'ShiftLeft',
    },
    {
      small: '<',
      shift: '>',
      code: 'IntlBackslash',
    },
    {
      small: 'z',
      shift: 'Z',
      code: 'KeyZ',
    },
    {
      small: 'x',
      shift: 'X',
      code: 'KeyX',
    },
    {
      small: 'c',
      shift: 'C',
      code: 'KeyC',
    },
    {
      small: 'v',
      shift: 'V',
      code: 'KeyV',
    },
    {
      small: 'b',
      shift: 'B',
      code: 'KeyB',
    },
    {
      small: 'n',
      shift: 'N',
      code: 'KeyN',
    },
    {
      small: 'm',
      shift: 'M',
      code: 'KeyM',
    },
    {
      small: ',',
      shift: '<',
      code: 'Comma',
    },
    {
      small: '.',
      shift: '>',
      code: 'Period',
    },
    {
      small: '/',
      shift: '?',
      code: 'Slash',
    },
    {
      small: 'Voice',
      shift: 'Voice',
      code: 'Voice',
    },
    {
      small: 'Sound off',
      shift: 'Sound',
      code: 'Sound',
    },
    {
      small: ' ',
      shift: null,
      code: 'Space',
    },
    {
      small: '&larr;',
      shift: null,
      code: 'ArrowLeft',
    },
    {
      small: '&uarr;',
      shift: null,
      code: 'ArrowUp',
    },
    {
      small: '&darr;',
      shift: null,
      code: 'ArrowDown',
    },
    {
      small: '&rarr;',
      shift: null,
      code: 'ArrowRight',
    },
    {
      small: 'En',
      shift: 'En',
      code: 'Lang',
    },
  ],
};

// window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// const recognition = new SpeechRecognition();

let printPermission = true;

const set = (name, value) => window.localStorage.setItem(name, JSON.stringify(value));

const get = (name) => {
  if (window.localStorage.getItem(name) === null) {
    set('kbLang', 'en');
    return get('kbLang');
  }
  if (window.localStorage.getItem(name) !== null) {
    return JSON.parse(window.localStorage.getItem(name));
  }
  return null;
};

const rowsOrder = [
  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal'],
  ['KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backspace'],
  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Backslash', 'Enter'],
  ['ShiftLeft', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'Voice'],
  ['Lang', 'Sound', 'Space', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],
];

const lang = get('kbLang');

function create(el, classNames, child, parent, ...dataAttr) {
  let element = null;
  try {
    element = document.createElement(el);
  } catch (error) {
    throw new Error('Unable to create HTMLElement! Give a proper tag name');
  }

  if (classNames) element.classList.add(...classNames.split(' '));

  if (child && Array.isArray(child)) {
    child.forEach((childElement) => childElement && element.appendChild(childElement));
  } else if (child && typeof child === 'object') {
    element.appendChild(child);
  } else if (child && typeof child === 'string') {
    element.innerHTML = child;
  }

  if (parent) {
    parent.appendChild(element);
  }

  if (dataAttr.length) {
    dataAttr.forEach(([attrName, attrValue]) => {
      if (attrValue === '') {
        element.setAttribute(attrName, '');
      }
      if (attrName.match(/value|id|placeholder|cols|rows/)) {
        element.setAttribute(attrName, attrValue);
      } else {
        element.dataset[attrName] = attrValue;
      }
    });
  }
  return element;
}

class Key {
  constructor({ small, shift, code }) {
    this.code = code;
    this.small = small;
    this.shift = shift;
    this.isFnKey = Boolean(small.match(/Ctrl|arr|Shift|Back|Enter|Caps|Lang|Sound off/));

    if (shift && shift.match(/[^a-zA-Zа-яА-ЯёЁ0-9]/)) {
      this.sub = create('div', 'sub', this.shift);
    } else {
      this.sub = create('div', 'sub', '');
    }

    this.letter = create('div', 'letter', small);
    this.div = create('div', 'keyboard__key', [this.sub, this.letter], null, ['code', this.code]);
  }
}

const keyboardWrapper = create('div', 'keyboard__wrapper',
  [create('button', 'power', 'Turn On/Off'),
    create('audio', 'audio', null, null, ['audio', '1'])]);

// const createAudio = () => {
//   for (let i = 1; i <= 6; i += 1) {
//     const audio = document.createElement('audio');
//     audio.src = `./assets/audio/${i}.wav`;
//     audio.setAttribute('class', 'audio');
//     document.querySelector('.keyboard__wrapper').appendChild(audio);
//   }
// };

class Keyboard {
  constructor(orderOfRows) {
    this.orderOfRows = orderOfRows;
    this.keysPressed = {};
    this.isCaps = false;
    this.isSound = false;
    this.isVoice = false;
    this.state = false;
  }

  init(langCode) {
    this.keyBase = language[langCode];
    console.log("Checkout:", document.querySelector('#search__field'));
    
    this.output = document.querySelector('#search__field');
    // this.output = create('textarea', 'output', null, keyboardWrapper,
    //   ['placeholder', 'Print here'],
    //   ['rows', 5],
    //   ['cols', 50]);
    this.container = create('div', 'keyboard', null, keyboardWrapper, ['language', langCode]);
    document.querySelector('main').appendChild(keyboardWrapper);
    return this;
  }

  generateLayout() {
    this.keyButtons = [];
    this.orderOfRows.forEach((row, i) => {
      const rowElement = create('div', 'keyboard__row', null, this.container, ['row', i + 1]);
      rowElement.style.gridTemplateColumns = `repeat(${row.length}, 1fr)`;
      row.forEach((code) => {
        const keyObj = this.keyBase.find((key) => key.code === code);
        if (keyObj) {
          const keyButton = new Key(keyObj);
          this.keyButtons.push(keyButton);
          rowElement.appendChild(keyButton.div);
        }
      });
    });

    document.addEventListener('keydown', this.handleEvent);
    document.addEventListener('keyup', this.handleEvent);
    document.addEventListener('mousedown', this.preHandleEvent);
    document.addEventListener('mouseup', this.preHandleEvent);
  }

  preHandleEvent = (e) => {
    e.stopPropagation();
    const keyDiv = e.target.closest('.keyboard__key');
    if (!keyDiv) return;
    const { dataset: { code } } = keyDiv;
    keyDiv.addEventListener('mouseleave', this.resetButtonState);
    this.handleEvent({ code, type: e.type });
  };

  handleEvent = (e) => {
    if (e.stopPropagation) e.stopPropagation();
    const { code, type } = e;
    const keyObj = this.keyButtons.find((key) => key.code === code);
    if (!keyObj) return;
    this.output.focus();

    if (type.match(/keydown|mousedown/)) {
      if (!type.match(/mouse/) && !code.match(/Shift/) && !code.match(/Arrow/)) e.preventDefault();

      if (this.container.dataset.language === 'en' && keyObj.shift !== null && (keyObj.shift.match(/[~`a-zA-Z]/g) || keyObj.code.match(/Digit1|Digit2|Digit3|Digit4|Digit5|Digit6|Digit7|Digit8|Digit9|Digit0|Minus|Equal|BracketLeft|BracketRight|Semicolon|Quote|Backslash|Comma|Period|Slash|Lang|Voice/))) {
        // document.querySelector('body > main > audio:nth-child(9)').currentTime = 0;
        // document.querySelector('body > main > audio:nth-child(9)').play();
      } else if (this.container.dataset.language === 'ru' && keyObj.shift !== null && (keyObj.shift.match(/[а-яА-ЯёЁ0-9]/g) || keyObj.code.match(/Digit1|Digit2|Digit3|Digit4|Digit5|Digit6|Digit7|Digit8|Digit9|Digit0|Minus|Equal|BracketLeft|BracketRight|Semicolon|Quote|Backslash|Comma|Period|Slash|Lang|Voice/))) {
        // document.querySelector('body > main > audio:nth-child(10)').currentTime = 0;
        // document.querySelector('body > main > audio:nth-child(10)').play();
      }

      if (code.match(/Caps/) && e.repeat) return;

      if (code.match(/Lang/)) this.switchLanguage();

      keyObj.div.classList.add('active');

      if (code.match(/Voice/) && !this.isVoice) {
        this.isVoice = true;
        keyObj.div.classList.add('active');
      } else if (code.match(/Voice/) && this.isVoice) {
        this.isVoice = false;
        keyObj.div.classList.remove('active');
      }

      if (code.match(/Voice/) && !this.state) {
        this.voiceInput(true);
        this.state = true;
        recognition.start();
      } else if (code.match(/Voice/) && this.state) {
        this.voiceInput(false);
        this.state = false;
      }

      if (code.match(/Sound/) && !this.isSound) {
        for (let i = 0; i <= 6; i += 1) {
          document.getElementsByClassName('audio')[i].muted = true;
        }
        this.isSound = true;
        keyObj.div.classList.add('active');
      } else if (code.match(/Sound/) && this.isSound) {
        for (let i = 0; i <= 6; i += 1) {
          document.getElementsByClassName('audio')[i].muted = false;
        }
        this.isSound = false;
        keyObj.div.classList.remove('active');
      }

      if (code.match(/Caps/) && !this.isCaps) {
        // document.querySelector('body > main > audio:nth-child(5)').currentTime = 0;
        // document.querySelector('body > main > audio:nth-child(5)').play();
        this.isCaps = true;
        this.switchUpperCase(true, code);
      } else if (code.match(/Caps/) && this.isCaps) {
        // document.querySelector('body > main > audio:nth-child(5)').currentTime = 0;
        // document.querySelector('body > main > audio:nth-child(5)').play();
        this.isCaps = false;
        this.switchUpperCase(false, code);
        keyObj.div.classList.remove('active');
      }

      if (code.match(/Shift/) && !this.shiftKey) {
        // document.querySelector('body > main > audio:nth-child(6)').currentTime = 0;
        // document.querySelector('body > main > audio:nth-child(6)').play();
        this.shiftKey = true;
        this.switchUpperCase(true, code);
      } else if (code.match(/Shift/) && this.shiftKey) {
        // document.querySelector('body > main > audio:nth-child(6)').currentTime = 0;
        // document.querySelector('body > main > audio:nth-child(6)').play();
        this.shiftKey = false;
        this.switchUpperCase(false, code);
        keyObj.div.classList.remove('active');
      }

      if (!this.isCaps) {
        this.printToOutput(keyObj, this.shiftKey ? keyObj.shift : keyObj.small, e.type);
      } else if (this.isCaps) {
        if (this.shiftKey) {
          this.printToOutput(keyObj, keyObj.sub.innerHTML ? keyObj.shift : keyObj.small, e.type);
        } else {
          this.printToOutput(keyObj, !keyObj.sub.innerHTML ? keyObj.shift : keyObj.small, e.type);
        }
      }
      this.keysPressed[keyObj.code] = keyObj;
    } else if (e.type.match(/keyup|mouseup/)) {
      this.resetPressedButtons(code);
      if (!code.match(/Caps/) && !code.match(/Shift/) && !code.match(/Sound/) && !code.match(/Voice/)) keyObj.div.classList.remove('active');
    }
  }

  resetButtonState = ({ target: { dataset: { code } } }) => {
    this.resetPressedButtons(code);
    this.output.focus();
  }

  resetPressedButtons = (targetCode) => {
    if (!this.keysPressed[targetCode]) return;
    if (targetCode !== 'CapsLock' && targetCode !== 'ShiftLeft' && targetCode !== 'Sound' && targetCode !== 'Voice') this.keysPressed[targetCode].div.classList.remove('active');
    this.keysPressed[targetCode].div.removeEventListener('mouseleave', this.resetButtonState);
    delete this.keysPressed[targetCode];
  }

  switchUpperCase(isTrue, code) {
    if (isTrue) {
      this.keyButtons.forEach((button) => {
        if (button.sub) {
          if (code === 'ShiftLeft') {
            button.sub.classList.add('sub-active');
            button.letter.classList.add('sub-inactive');
          }
        }
        if (!button.isFnKey && this.isCaps && !this.shiftKey && !button.sub.innerHTML) {
          button.letter.innerHTML = button.shift;
        } else if (!button.isFnKey && code === 'ShiftLeft' && !this.shiftKey) {
          button.letter.innerHTML = button.small;
        } else if (!button.isFnKey && !button.sub.innerHTML && this.isCaps) {
          if (this.shiftKey) {
            button.letter.innerHTML = button.small;
          } else if (!this.shiftKey) {
            button.letter.innerHTML = button.shift;
          }
        } else if (!button.isFnKey && !button.sub.innerHTML) {
          button.letter.innerHTML = button.shift;
        }
      });
    } else {
      this.keyButtons.forEach((button) => {
        if (button.sub.innerHTML && !button.isFnKey && code === 'ShiftLeft') {
          button.sub.classList.remove('sub-active');
          button.letter.classList.remove('sub-inactive');
          if (!this.isCaps) {
            button.letter.innerHTML = button.small;
          } else {
            button.letter.innerHTML = button.small;
          }
        } if (button.sub.innerHTML && !button.isFnKey && code === 'CapsLock') {
          if (!this.shiftKey && !button.sub.innerHTML) {
            button.letter.innerHTML = button.shift;
          } else {
            button.letter.innerHTML = button.small;
          }
        } else if (!button.sub.innerHTML && !button.isFnKey && code === 'ShiftLeft') {
          if (this.isCaps) {
            button.letter.innerHTML = button.shift;
          } else {
            button.letter.innerHTML = button.small;
          }
        } else if (!button.isFnKey && code === 'CapsLock') {
          if (this.shiftKey) {
            button.letter.innerHTML = button.shift;
          } else {
            button.letter.innerHTML = button.small;
          }
        }
      });
    }
  }

  switchLanguage = () => {
    if (this.container.dataset.language === 'en') {
      this.keyBase = language.ru;
      this.container.dataset.language = 'ru';
    } else if (this.container.dataset.language === 'ru') {
      this.keyBase = language.en;
      this.container.dataset.language = 'en';
    }
    set('kbLang', this.container.dataset.language);

    this.keyButtons.forEach((button) => {
      const keyObj = this.keyBase.find((key) => key.code === button.code);
      if (!keyObj) return;
      button.shift = keyObj.shift;
      button.small = keyObj.small;
      if (keyObj.shift && keyObj.shift.match(/[^a-zA-Zа-яА-ЯёЁ0-9]/g)) {
        button.sub.innerHTML = keyObj.shift;
      } else {
        button.sub.innerHTML = '';
      }
      button.letter.innerHTML = keyObj.small;
    });
    if (this.isCaps || this.shiftKey) this.switchUpperCase(true);
  }

  printToOutput(keyObj, symbol, type) {
    if (printPermission === true) {
      let cursorPos = this.output.selectionStart;
      let left = this.output.value.slice(0, cursorPos);
      let right = this.output.value.slice(cursorPos);
      const textHandlers = {
        ArrowLeft: () => {
          if (type === 'mousedown') {
            if (this.container.dataset.language === 'en') {
              // document.querySelector('body > main > audio:nth-child(9)').currentTime = 0;
              // document.querySelector('body > main > audio:nth-child(9)').play();
            } else if (this.container.dataset.language === 'ru') {
              // document.querySelector('body > main > audio:nth-child(10)').currentTime = 0;
              // document.querySelector('body > main > audio:nth-child(10)').play();
            }
            cursorPos = cursorPos - 1 >= 0 ? cursorPos - 1 : 0;
            this.output.setSelectionRange(cursorPos, cursorPos);
          }
        },
        ArrowRight: () => {
          if (type === 'mousedown') {
            if (this.container.dataset.language === 'en') {
              // document.querySelector('body > main > audio:nth-child(9)').currentTime = 0;
              // document.querySelector('body > main > audio:nth-child(9)').play();
            } else if (this.container.dataset.language === 'ru') {
              // document.querySelector('body > main > audio:nth-child(10)').currentTime = 0;
              // document.querySelector('body > main > audio:nth-child(10)').play();
            }
            cursorPos += 1;
            this.output.setSelectionRange(cursorPos, cursorPos);
          }
        },
        ArrowUp: () => {
          if (this.container.dataset.language === 'en') {
            // document.querySelector('body > main > audio:nth-child(9)').currentTime = 0;
            // document.querySelector('body > main > audio:nth-child(9)').play();
          } else if (this.container.dataset.language === 'ru') {
            // document.querySelector('body > main > audio:nth-child(10)').currentTime = 0;
            // document.querySelector('body > main > audio:nth-child(10)').play();
          }
        },
        ArrowDown: () => {
          if (this.container.dataset.language === 'en') {
            // document.querySelector('body > main > audio:nth-child(9)').currentTime = 0;
            // document.querySelector('body > main > audio:nth-child(9)').play();
          } else if (this.container.dataset.language === 'ru') {
            // document.querySelector('body > main > audio:nth-child(10)').currentTime = 0;
            // document.querySelector('body > main > audio:nth-child(10)').play();
          }
        },
        Enter: () => {
          // document.querySelector('body > main > audio:nth-child(8)').currentTime = 0;
          // document.querySelector('body > main > audio:nth-child(8)').play();
          this.output.value = `${left}\n${right}`;
          cursorPos += 1;
          this.output.setSelectionRange(cursorPos, cursorPos);
        },
        Backspace: () => {
          // document.querySelector('body > main > audio:nth-child(7)').currentTime = 0;
          // document.querySelector('body > main > audio:nth-child(7)').play();
          if (this.output.selectionStart !== this.output.selectionEnd
            && this.output.selectionEnd === this.output.value.length) {
            this.output.value = `${left.slice(0, this.output.selectionStart)}`;
          } else if (this.output.selectionStart !== this.output.selectionEnd
            && this.output.selectionEnd !== this.output.value.length) {
            left = this.output.value.slice(0, this.output.selectionEnd);
            right = this.output.value.slice(this.output.selectionEnd);
            this.output.value = `${left.slice(0, this.output.selectionStart)}${right}`;
          } else if (left !== '') {
            this.output.value = `${left.slice(0, -1)}${right}`;
            cursorPos -= 1;
          }
          this.output.setSelectionRange(cursorPos, cursorPos);
        },
        Space: () => {
          if (this.container.dataset.language === 'en') {
            // document.querySelector('body > main > audio:nth-child(9)').currentTime = 0;
            // document.querySelector('body > main > audio:nth-child(9)').play();
          } else if (this.container.dataset.language === 'ru') {
            // document.querySelector('body > main > audio:nth-child(10)').currentTime = 0;
            // document.querySelector('body > main > audio:nth-child(10)').play();
          }
          this.output.value = `${left} ${right}`;
          cursorPos += 1;
          this.output.setSelectionRange(cursorPos, cursorPos);
        },
      };
      if (textHandlers[keyObj.code]) textHandlers[keyObj.code]();
      else if (!keyObj.isFnKey && keyObj.code !== 'Lang' && keyObj.code !== 'Sound' && keyObj.code !== 'CapsLock' && keyObj.code !== 'Shift' && keyObj.code !== 'Voice') {
        cursorPos += 1;
        this.output.value = `${left}${symbol || ''}${right}`;
        this.output.setSelectionRange(cursorPos, cursorPos);
      }
    }
  }

  // voiceInput = () => {
  //   if (this.container.dataset.language === 'ru') {
  //     recognition.lang = 'ru-RU';
  //   } else if (this.container.dataset.language === 'en') {
  //     recognition.lang = 'en-US';
  //   }

  //   recognition.interimResults = true;
  //   recognition.continuous = true;

  //   // recognition.addEventListener('result', (e) => {
  //   //   const transcript = Array.from(e.results)
  //   //     .map((result) => result[0])
  //   //     .map((result) => result.transcript)
  //   //     .join('');

  //   //   if (e.results[0].isFinal) {
  //   //     this.output.value = `${transcript}`;
  //   //   }
  //   // });

  //   // recognition.onend = function () {
  //   //   recognition.start();
  //   // };

  //   // if (this.state === true) {
  //   //   recognition.stop();
  //   //   recognition.onend = null;
  //   // }
  // }
}

new Keyboard(rowsOrder).init(lang).generateLayout();

// createAudio();

// const turnOnOff = () => {
//   if (printPermission === true && document.getElementsByClassName('output')[0].disabled !== true) {
//     document.getElementsByClassName('output')[0].setAttribute('disabled', '');
//     printPermission = false;
//     for (let i = 0; i <= 6; i += 1) {
//       document.getElementsByClassName('audio')[i].muted = true;
//     }
//   } else {
//     document.getElementsByClassName('output')[0].removeAttribute('disabled');
//     printPermission = true;
//     for (let i = 0; i <= 6; i += 1) {
//       document.getElementsByClassName('audio')[i].muted = false;
//     }
//   }
//   document.getElementsByClassName('keyboard')[0].classList.toggle('turnOff');
// };

// document.getElementsByClassName('power')[0].addEventListener('click', turnOnOff);
