class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    addToSelector(selector){
        let mainDiv = $('<div>');
        mainDiv.addClass('person '+this.name);
        let nameParagraph = $(`<p class="name">${this.name}</p>`);
        let ageParagraph = $(`<p class="age">${this.age}</p>`);
        let postsDiv = $('<div>');
        postsDiv.addClass('posts ' + this.name);
        mainDiv.append(nameParagraph).append(ageParagraph).append(postsDiv);
        $(selector).append(mainDiv);
    }
}

module.exports = Person;