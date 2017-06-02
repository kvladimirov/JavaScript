let BaseElement = require('./baseElement.js');

class Article extends BaseElement{
    constructor(title, content){
        super();
        this.title = title;
        this.content = content;
        let date = new Date();
        this.timestamp = date.getTime();
    }

    getElementString(){
        return `<div class="article">
    <div class="article-title">${this.title}</div>
    <p>${this.content}</p></div>`;
    }
}

module.exports = Article;