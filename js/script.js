'use strict';

const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.draw = function() {
        let identificator = (this.selector).slice(1);
        if (this.selector.charAt(0) === '.') {
            let div = document.createElement('div');
            div.classList.add(identificator);
            div.style.cssText = `width: ${this.width}px;height: ${this.height}px;background-color: ${this.bg};font-size: ${this.fontSize}px;`;
            div.innerText = 'Lesson15 div';
            document.body.appendChild(div);

        } else if (this.selector.charAt(0) === '#') {
            let p = document.createElement('p');
            p.setAttribute("id", identificator);
            p.style.cssText = `width: ${this.width}px;height: ${this.height}px;background-color: ${this.bg};font-size: ${this.fontSize}px;`;
            p.innerText = 'Lesson15 p'
            document.body.appendChild(p);
        }
    }
} 

const item1 = new DomElement('.block1', 150, 300, 'purple', 10);
item1.draw();

// const item2 = new DomElement('#best5', 400, 600, 'red', 20);
// item2.draw();