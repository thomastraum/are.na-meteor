

Meteor.methods({
	getPosts: function (params) {		
		var apiurl = "http://api.are.na/v2/channels/random-access-memory/contents?page=1&per=40"
		this.unblock();
		return Meteor.http.call("GET", apiurl); 
	}
});
