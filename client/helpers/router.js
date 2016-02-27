

HomePageController = RouteController.extend({

});



Router.map(function() {
	//------------------------------------------------------------------------------ SHOWCASE
	this.route('home', {
		path: '/',
		// controller: HomePageController
		template:'homepage',
		subscriptions: function () {
			return Meteor.subscribe('getArenaPosts');
		},
		action: function () {
			if (this.ready()) {
				this.render();
			} else {
				this.render('Loading');
			}
		}
	});

});