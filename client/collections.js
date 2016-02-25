
Session.set('PostsReady', false);

Posts = new Meteor.Collection(null);

PostsQuery = {
	type:'tt_works',
	work_categories:'all'
};

PostHandle = {
	isReady: function () {
		Session.set('PostsReady', 'loaded');
	},
	ready: function () {
		return Session.equals('PostsReady', 'loaded');
	}
};
