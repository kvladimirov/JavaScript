class HomeView{
    constructor(mainContentSelecter, wrapperSelector){
        this._mainContentSelector = mainContentSelecter;
        this._wrapperSelector = wrapperSelector;
    }

    showGuestPage(sideBarData, mainData){
        let _that = this;
        $.get('templates/welcome-guest.html', function (template) {
            let renderedTemplate = Mustache.render(template, null);

            $(_that._wrapperSelector).html(renderedTemplate);

            $.get('templates/posts.html', function (template) {
                let blogPosts = {
                    blogPosts:mainData
                };
                
                let renderedPosts = Mustache.render(template, blogPosts);
                $('.articles').html(renderedPosts);
            });

            $.get('templates/recent-posts.html', function (template) {
                let recentPosts = {
                    recentPosts:sideBarData
                };
                console.log(recentPosts);

                let renderedPosts = Mustache.render(template, recentPosts);
                $('.recent-posts').html(renderedPosts);
            })
        });
        
    }

    showUserPage(sideBarData, mainData){
        let _that = this;
        $.get('templates/welcome-user.html', function (template) {
            let renderedTemplate = Mustache.render(template, null);

            $(_that._wrapperSelector).html(renderedTemplate);

            $.get('templates/posts.html', function (template) {
                let blogPosts = {
                    blogPosts:mainData
                };

                let renderedPosts = Mustache.render(template, blogPosts);
                $('.articles').html(renderedPosts);
            });

            $.get('templates/recent-posts.html', function (template) {
                let recentPosts = {
                    recentPosts:sideBarData
                };
                console.log(recentPosts);

                let renderedPosts = Mustache.render(template, recentPosts);
                $('.recent-posts').html(renderedPosts);
            })
        });
    }
}
