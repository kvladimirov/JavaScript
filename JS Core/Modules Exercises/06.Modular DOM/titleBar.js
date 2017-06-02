let BaseElement = require('./baseElement.js');

class TitleBar extends BaseElement{
    constructor(title){
        super();
        this._title = title;
        this.links = [];
    }

    addLink(href, name){
        let link = `<a class="menu-link" href="${href}">${name}</a>`;
        this.links.push(link);
    }

    getElementString(){
        let linkStr = '';
        for(let link of this.links){
            linkStr += link;
        }
        return `<header class="header">
    <div><span class="title">${this._title}</span></div>
    <div>
        <nav class="menu">
        ${linkStr}
        </nav>
    </div>
</header>`;
    }
}

module.exports = TitleBar;