function tableBuilder(selector) {
    $(selector).empty();
    function htmlEscape(text) {
        text = new String(text);
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
    return {
        createTable: function (columnNames) {
            let table = $('<table class="myTable">');
            let tr = $('<tr>');

            for(let columnName of columnNames){
                let th = $(`<th>${htmlEscape(columnName)}</th>`);
                tr.append(th);
            }
            tr.append('<th>Action</th>');

            table.append(tr);
            $(selector).append(table);
        },
        fillData: function (dataRows) {
            let table = $('.myTable');
            for(let row of dataRows){
                let tr = $('<tr>');
                let deleteBtn = $(`<td><button>Delete</button></td>`).click(deleteRow);
                for(let singleInfo of row){
                    let td = $(`<td>${htmlEscape(singleInfo)}</td>`);
                    tr.append(td);
                }
                tr.append(deleteBtn);
                table.append(tr);
            }
            function deleteRow() {
                let row = $(this).parent();
                row.remove();
            }
        }
    }
}
