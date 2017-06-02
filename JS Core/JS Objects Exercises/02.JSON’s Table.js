function table(input) {

    let html = '<table>\n';

    for(let i = 0; i < input.length; i++){
        let currentObject = JSON.parse(input[i]);
        html += '    <tr>\n';
        html += `     <td>${htmlEscape(currentObject.name)}</td>\n`;
        html += `     <td>${htmlEscape(currentObject.position)}</td>\n`;
        html += `     <td>${htmlEscape(currentObject.salary)}</td>\n`;
        html += '    <tr>\n';
    }

    html += '</table>';
    return html;

    function htmlEscape(text) {
        text = new String(text);
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}
console.log(table(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']));