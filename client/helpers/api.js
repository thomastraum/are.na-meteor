
getPosts = function(collection, params, handle ) {

	Meteor.call("getPosts", params, function(err, results) {
		if (err) {
			throwError(err.message);
			console.log(err);
		} else {
			var posts = EJSON.parse( results.content ).contents;
			for (var i = 0; i < posts.length; i++) {
				// only add if it doesnt exist yet
				// if(!collection.findOne( {"ID":posts[i].ID })) {
					collection.insert(posts[i]);
				// }
			};
			handle.isReady();
		}
	});
}