Template.homepage.helpers({
	posts: function () {
		console.log(Posts.findOne(), Posts.find().count());
		return Posts.find();
	}
});