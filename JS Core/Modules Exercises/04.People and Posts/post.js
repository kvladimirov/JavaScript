class Post{
    constructor(title, body, author){
        this.title = title;
        this.body = body;
        this.author = author;
    }

    addToSelector(selector){
        let div = $('<div>');
        div.addClass('post ' + this.author);
        let h3 = $(`<h3 class="title">${this.title}</h3>`);
        let bodyParagraph = $(`<p class="body">${this.body}</p>`);
        let authorParagraph = $(`<p class="author">${this.author}</p>`);
        div.append(h3).append(bodyParagraph).append(authorParagraph);

        $(selector).append(div);
    }
}

module.exports = Post;