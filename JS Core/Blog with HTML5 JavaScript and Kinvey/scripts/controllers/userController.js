class UserController{
    constructor (userView, requester, baseUrl, appKey){
        this._userView = userView;
        this._requester = requester;
        this._appKey = appKey;
        this._baseServiceUrl = baseUrl + "/user/" + appKey +"/";
    }

    showLoginPage(isLoggedIn){
        this._userView.showLoginPage(isLoggedIn);
    }

    showRegisterPage(isLoggedIn){
        this._userView.showRegisterPage(isLoggedIn);
    }

    register(data){
        if(data.username.length < 6 ){
            showPopup('error', 'The username should be at least 6 symbols.');
            return;
        }

        if(data.fullname.length < 6) {
            showPopup('error', 'The fullname should be at least 6 symbols.');
            return;
        }

        if(data.password != data.confirmPassword){
            showPopup('error', 'Passwords do not match.');
            return;
        }
        if(data.password.length < 4){
            showPopup('error','The password should be at least 5 symbols.');
            return;
        }

        delete data['confirmPassword'];

        this._requester.post(this._baseServiceUrl, data,
            function successCallback(response){
                showPopup('success','Registration is successful.');
                redirectUrl('#/login');
            },
            function errorCallback(response) {
                showPopup('error', 'Registration failed.');
            }
        );
    }

    login(data){
        let requestUrl = this._baseServiceUrl+"login"
        this._requester.post(requestUrl,data,
            function successCallback(response){
                sessionStorage.setItem('username',response.username);
                sessionStorage.setItem('_authToken',response._kmd.authtoken);
                sessionStorage.setItem('fullName',response.fullname);

                showPopup('success','Login is successful.');
                redirectUrl('#/');
            },
            function errorCallback(response) {
                showPopup('error', 'Login failed.');
            }
        );
    }

    logout(){
        sessionStorage.clear();
        redirectUrl('#/');
    }
}
