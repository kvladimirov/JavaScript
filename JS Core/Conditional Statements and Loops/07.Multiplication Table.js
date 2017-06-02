function multiplicationTable(input) {
    let n = Number(input[0]);
    console.log('<table border="1">');

    for(let i = 0; i <= n; i++){
        let html = ' <tr>';
        for (let j = 0; j <= n; j++){
            if(j == 0 && i == 0){
                html += `<th>x</th>`;
            }
            else if(j == 0){
                html += `<th>${i}</th>`
            }
            else if(i == 0 && j > 0){
                html += `<th>${j}</th>`
            }
            else if(i > 0){
                html += `<td>${j*i}</td>`;
            }
        }
        html += '</tr>';
        console.log(html);
    }
    console.log(`</table>`)
}
multiplicationTable(['6']);