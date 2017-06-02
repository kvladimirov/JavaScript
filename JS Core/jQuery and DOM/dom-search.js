function domSearch(selector, bool){
    let container = $(selector);
    container.attr('class', 'items-control');
    let divAddControls = $("<div class='add-controls'></div>");
    let labelAddControls = $("<label>Enter text: </label>");
    let input = $('<input>');
    let addBtn = $('<a class="button" style="display: inline-block">Add</a>');

    labelAddControls.append(input);
    divAddControls
        .append(labelAddControls)
        .append(addBtn);
    container.append(divAddControls);

    let divSearchControls = $('<div class="search-controls"></div>');
    let labelSearchControls = $('<label>Search:</label>');
    labelSearchControls.on('input', function(){
        search();
    });

    let inputSearchControls = $('<input>');

    labelSearchControls.append(inputSearchControls);
    divSearchControls.append(labelSearchControls);
    container.append(divSearchControls);

    let divResultControls = $('<div class="result-controls"></div>');
    let ul = $('<ul class="items-list"></ul>');
    divResultControls.append(ul);
    container.append(divResultControls);

    addBtn.on('click', function(){
        let text = input.val();
        let li = $('<li class="list-item"></li>');
        let delBtn = $('<a class="button">X</a>');
        delBtn.click({li: li}, deleteItem);

        let strong = $("<strong></strong>");
        strong.text(text);

        li.append(delBtn);
        li.append(strong);
        ul.append(li);
    });

    function deleteItem(ev){
        ev.data.li.remove();
        search();
    }

    function search(){
        let searchVal;
        if(bool){
            searchVal = inputSearchControls.val();
        } else {
            searchVal = inputSearchControls.val().toLowerCase();
        }

        let allLi = $('.items-list li').each((index, item)=>{

            if(bool) {
                if (item.textContent.indexOf(searchVal) !== -1) {
                    $(item).css('display', '')
                } else {
                    $(item).css('display', 'none')
                }
            } else{
                if (item.textContent.toLowerCase().indexOf(searchVal) !== -1) {
                    $(item).css('display', '')
                } else {
                    $(item).css('display', 'none')
                }
            }
        })
    }
}
