function validate() {
    let username = $('#username').val();
    let email = $('#email').val();
    let password = $('#password').val();
    let confirmPassword = $('#confirm-password').val();
    let companyNumber = $('#companyNumber').val();
    let usernameReg = /^[\w+]{3,20}$/;
    let passwordReg =  /^[a-zA-Z0-9_]{5,15}$/;
    let emailReg = /([\w+]+)(@)([\w+]+)(\.)[\w+]/;
    let companyReg = /\b[1-9][0-9][0-9][0-9]\b/;
    let isValid = false;



    $('#company').change(function () {
        if ($('#company').attr('checked', 'checked')) {
            $('#companyInfo').attr('style', 'display-inline');
        }
        if ($('#company').not(':checked').length) {
            $('#companyInfo').attr('style', 'display:none');
        }
    });

    $("#submit").on('click', function (event) {
        validate();
        event.preventDefault();
    });

    function validate() {

        if (!usernameReg.test(username)) {
            $('#username').css('border', '2px solid red');
            isValid = false;
        } else {
            $('#username').css('border', 'none');
            isValid = true;

        }

        if (!emailReg.test(email)) {
            $('#email').css('border', '2px solid red');
            isValid = false;
        } else {
            $('#email').css('border', 'none');
            isValid = true;
        }

        if (passwordReg.test(password) && password === confirmPassword) {
            $('#password').css('border', 'none');
            $('#confirm-password').css('border', 'none');
            isValid = true;


        } else {
            $('#password').css('border', '2px solid red');
            $('#confirm-password').css('border', '2px solid red');
            isValid = false;
        }

        // if (!passwordReg.test(confirmPassword)) {
        //     $('input#confirm-password').attr('style', 'border-color: red;');
        // } else {
        //     $('input#confirm-password').removeAttr('style');
        // }

        // if (password != confirmPassword){
        //     $('input#confirm-password').attr('style', 'border-color: red;');
        //     $('input#password').attr('style', 'border-color: red;');
        // }

        if ($('#company').is(':checked')) {
            if (!companyReg.test(companyNumber)) {
                $('#companyNumber').css('border', '2px solid red');
                isValid = false;
            } else {
                $('#companyNumber').css('border', 'none');
                isValid = true;
            }
        }
        if(isValid){
            $('#valid').show();
        }
    };
}

// function validate(){
//
//     let username = $('#username');
//     let email = $('#email');
//     let password = $('#password');
//     let confirmPassword = $('#confirm-password');
//     let companyCheckBox = $('#company');
//     let companyInfoField = $('#companyInfo');
//     let companyNumber = $('#companyNumber');
//     let namePattern = /\b[A-Za-z]{3,20}\b/g;
//     let passPattern = /\b\w{5,15}\b/g;
//     let emailPattern = /^.*@.*?\..*?$/;
//     let isValid = false;
//
//
//     companyCheckBox.on('change', function () {
//         //$('#valid').css('display', 'none')
//         if (companyCheckBox.is(':checked')) {
//             companyInfoField.css('display', 'block');
//         } else {
//             companyInfoField.css('display', 'none');
//         }
//     });
//
//     $('#submit').on('click', function(ev){
//         validate();
//         //console.log(isValid)
//         ev.preventDefault();
//     });
//
//     function validate() {
//         if (!username.val().match(namePattern)) {
//             username.css('border', '2px solid red')
//             isValid = false
//         } else {
//             username.css('border', 'none')
//             isValid = true
//         }
//
//         if (!email.val().match(emailPattern)) {
//             email.css('border', '2px solid red');
//             isValid = false;
//         } else {
//             email.css('border', 'none');
//             isValid = true;
//         }
//
//         if (password.val().match(passPattern)
//             && confirmPassword.val() == password.val()) {
//             password.css('border', 'none');
//             confirmPassword.css('border', 'none')
//             isValid = true;
//         } else {
//             password.css('border', '2px solid red')
//             confirmPassword.css('border', '2px solid red')
//             isValid = false;
//         }
//
//
//         if(companyCheckBox.is(':checked')){
//             if(Number(companyNumber.val()) >= 1000
//                 && Number(companyNumber.val() <= 9999)){
//                 companyNumber.css('border', 'none');
//                 isValid = true
//             } else {
//                 companyNumber.css('border', '2px solid red');
//                 isValid = false
//             }
//         }
//
//         if(isValid) {
//             $('#valid').show()
//         }
//     }
// }