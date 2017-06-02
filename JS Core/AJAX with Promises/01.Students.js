$(function () {
    let base64 = btoa("guest:guest");
    let authHeaders = {"Authorization": "Basic " + base64,"Content-Type": 'application/json'};
    let btnAdd = $('#addStudent');
    btnAdd.click(addStudentToList);

    function loadError(err) {
        conosle.log('error');
    }

    function generateStudents() {
        let getStudents = {
            method: "GET",
            url: 'https://baas.kinvey.com/appdata/kid_BJXTsSi-e/students',
            headers: authHeaders
        };
        $.ajax(getStudents).then(loadSuccessStudents).catch(loadError);
    }
    generateStudents();
    function loadSuccessStudents(data) {
        $('table').empty();
        let students = [];
        let table = $(`<table id="results">
    <tr>
        <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Faculty Number</th>
        <th>Grade</th>
    </tr>
</table>`);
        for(let singleStudent of data){
            students.push(singleStudent);
        }
        students.sort((a,b) => a['ID'] - b['ID']);

        for(let student of students){
            let tr = $('<tr>');
            tr.append(`<td>${student.ID}</td>`)
                .append(`<td>${student.FirstName}</td>`)
                .append(`<td>${student.LastName}</td>`)
                .append(`<td>${student.FacultyNumber}</td>`)
                .append(`<td>${student.Grade}</td>`);
            table.append(tr);
        }
        $('body').prepend(table);
    }

    function addStudentToList() {
        let addStudent = {
            method: "POST",
            url: 'https://baas.kinvey.com/appdata/kid_BJXTsSi-e/students',
            headers: authHeaders,
            data: JSON.stringify({
                ID: Number($('#id-student').val()),
                FirstName: $('#firstName').val(),
                LastName: $('#lastName').val(),
                FacultyNumber: $('#facultyNumber').val(),
                Grade: Number($('#grade').val())
            })
        };
        $.ajax(addStudent).then(generateStudents).catch();

    }
})