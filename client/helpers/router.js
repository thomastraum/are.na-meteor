

HomePageController = RouteController.extend({

});

Router.map(function() {
	//------------------------------------------------------------------------------ SHOWCASE
	this.route('home', {
		path: '/',
		// controller: HomePageController
		template:'homepage',
		onBeforeAction:function () {
			if (!PostHandle.ready()){
				getPosts(Posts, PostsQuery, PostHandle);
			}
			this.next();
		},
		subscriptions: function () {
			return PostHandle;
		},
		data: function () {
			var posts = Posts.find({},{sort:{date:-1}});

			return {
				posts: posts
			}
		}
	});

});