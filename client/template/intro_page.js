Template.header.helpers({
	login: function() {
		if (Meteor.userId()) {
			return true;
		} else {
			return false;
		}
	},
	username : "hello",
});
