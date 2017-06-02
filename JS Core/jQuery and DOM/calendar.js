function calendar ([day,month,year]) {
    let monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    let result = `<table>\n<caption>${monthNames[month-1]} ${year}</caption>\n`;

    let days = ["Mon","Tue","Wed","Thu","Fri","Sat", "Sun"];

    result += '<tr>';
    for (x of days){
        result += `<th>${x}</th>`
    }
    result +='</tr>\n';

    let firstDayMonth = new Date(year,month-1,0);
    let startDayOfWeek = firstDayMonth.getDay();
    let lastDayMonth = new Date(year, month,0);
    let startDayCalendar = 0;
    let endDayCalendar = lastDayMonth.getDate();
    let rowCalendar = Math.ceil((startDayOfWeek + endDayCalendar)/7);


    for (let i = 1; i <= rowCalendar; i++){
        result += '  <tr>';
        for (let j = 0; j < 7; j++) {
            if(i == 1 && j < startDayOfWeek){
                startDayCalendar = '';
            }else {
                startDayCalendar++;
            }

            if (startDayCalendar == day){
                result += `<td class="today">${startDayCalendar}</td>`;
            }else if (startDayCalendar > endDayCalendar){
                result += `<td></td>`;
            }else {
                result += `<td>${startDayCalendar}</td>`;
            }
        }

        result += '</tr>\n';
    }

    result+='</table>';
    $('#content').append(result);
    //console.log(result);
}
//calendar([28,12,2016]);