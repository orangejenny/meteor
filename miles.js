Days = new Mongo.Collection("days")

if (Meteor.isClient) {
  Template.body.helpers({
    days: function() {
		return Days.find({});
	 },
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
