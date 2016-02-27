

// Meteor.publish('getArenaPosts');

Meteor.publish('getArenaPosts', function(query) {  
	var self = this;
	try {
		var response = HTTP.get('http://api.are.na/v2/channels/random-access-memory/contents?page=1&per=40', {
			params: {
				q: query
			}
		});

		_.each(response.data.contents, function(item) {
			// console.log(item);
			// Posts.insert(item);
			self.added('arenaPosts', item.id, item);
		});

		self.ready();

	} catch(error) {
		console.log(error);
	}
});