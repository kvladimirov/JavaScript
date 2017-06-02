function calendar ([day,month,year]) {
 let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
 let result = '<table>\n<tr>';
 for (x of days){
 result += `<th>${x}</th>`
 }
 result+='</tr>\n';
 let inputDate = new Date(year,month-1,day);
 let firstDay = new Date(year,month-1,1);
 let firstDate = firstDay.setDate(firstDay.getDate() - firstDay.getDay());
 let lastDay = new Date(year, month,0);
 let lastDate = lastDay.setDate(lastDay.getDate() + (7-(lastDay.getDay()+1))%7);
 for (let dm = new Date(firstDate); dm <=new Date(lastDate); dm.setDate(dm.getDate()+1)){
 if (dm.getDay()==0)
 result+='  <tr>';
 if (dm.getMonth()<inputDate.getMonth()&&Math.abs(dm.getMonth()-inputDate.getMonth())!=11)
 result+=`<td class="prev-month">${dm.getDate()}</td>`;
 else if (dm.getMonth()>inputDate.getMonth()&&Math.abs(dm.getMonth()-inputDate.getMonth())!=11)
 result+=`<td class="next-month">${dm.getDate()}</td>`;
 else if (dm.getDate()==inputDate.getDate())
 result+=`<td class="today">${dm.getDate()}</td>`;
 else if (Math.abs(dm.getMonth()-inputDate.getMonth())==11&&dm.getMonth()>inputDate.getMonth())
 result+=`<td class="prev-month">${dm.getDate()}</td>`;
 else if (Math.abs(dm.getMonth()-inputDate.getMonth())==11&&dm.getMonth()<inputDate.getMonth())
 result+=`<td class="next-month">${dm.getDate()}</td>`;
 else
 result+=`<td>${dm.getDate()}</td>`;
 if (dm.getDay()==6)
 result+='</tr>\n'
 }
 result+='</table>';
 return result;
 }
 console.log(calendar(["24", "12", "2012"]));