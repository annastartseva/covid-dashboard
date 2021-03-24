import { searchProcess } from './search';
import { language, rowsOrder } from './keyboardConstants';

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
    this.isFnKey = Boolean(small.match(/Ctrl|arr|Shift|Back|Enter|Caps|Lang/));

    if (shift && shift.match(/[^a-zA-Zа-яА-ЯёЁ0-9]/)) {
      this.sub = create('div', 'sub', this.shift);
    } else {
      this.sub = create('div', 'sub', '');
    }

    this.letter = create('div', 'letter', small);
    this.div = create('div', 'keyboard__key', [this.sub, this.letter], null, ['code', this.code]);
  }
}

const keyboardWrapper = create('div', 'keyboard__wrapper');

class Keyboard {
  constructor(orderOfRows) {
    this.orderOfRows = orderOfRows;
    this.keysPressed = {};
    this.isCaps = false;
    this.state = false;
  }

  init(langCode) {
    this.keyBase = language[langCode];

    this.output = document.querySelector('#search__field');
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

      if (code.match(/Caps/) && e.repeat) return;

      if (code.match(/Lang/)) this.switchLanguage();

      keyObj.div.classList.add('active');

      if (code.match(/Caps/) && !this.isCaps) {
        this.isCaps = true;
        this.switchUpperCase(true, code);
      } else if (code.match(/Caps/) && this.isCaps) {
        this.isCaps = false;
        this.switchUpperCase(false, code);
        keyObj.div.classList.remove('active');
      }

      if (code.match(/Shift/) && !this.shiftKey) {
        this.shiftKey = true;
        this.switchUpperCase(true, code);
      } else if (code.match(/Shift/) && this.shiftKey) {
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
      if (!code.match(/Caps/) && !code.match(/Shift/)) keyObj.div.classList.remove('active');
    }
  }

  resetButtonState = ({ target: { dataset: { code } } }) => {
    this.resetPressedButtons(code);
    this.output.focus();
  }

  resetPressedButtons = (targetCode) => {
    if (!this.keysPressed[targetCode]) return;
    if (targetCode !== 'CapsLock' && targetCode !== 'ShiftLeft') this.keysPressed[targetCode].div.classList.remove('active');
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
            cursorPos = cursorPos - 1 >= 0 ? cursorPos - 1 : 0;
            this.output.setSelectionRange(cursorPos, cursorPos);
          }
        },
        ArrowRight: () => {
          if (type === 'mousedown') {
            cursorPos += 1;
            this.output.setSelectionRange(cursorPos, cursorPos);
          }
        },
        Enter: () => {
          this.output.value = `${left}\n${right}`;
          cursorPos += 1;
          this.output.setSelectionRange(cursorPos, cursorPos);
        },
        Backspace: () => {
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
          searchProcess();
          document.querySelector('.keyboard').classList.remove('off');
          document.querySelector('.keyboard').classList.add('on');
        },
        Space: () => {
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
          this.output.value = `${left} ${right}`;
          cursorPos += 1;
          this.output.setSelectionRange(cursorPos, cursorPos);
          document.querySelector('.keyboard').classList.remove('off');
          document.querySelector('.keyboard').classList.add('on');
        },
      };
      if (textHandlers[keyObj.code]) textHandlers[keyObj.code]();
      else if (!keyObj.isFnKey && keyObj.code !== 'Lang' && keyObj.code !== 'CapsLock' && keyObj.code !== 'Shift') {
        cursorPos += 1;
        this.output.value = `${left}${symbol || ''}${right}`;
        this.output.setSelectionRange(cursorPos, cursorPos);
        searchProcess(null, this.output.value);
      }
    }
  }
}

new Keyboard(rowsOrder).init(lang).generateLayout();
