if (Meteor.isClient) {
  Template.body.helpers({
    days: [
		{
			day: '2014-05-06',
			notes: 'Decent pre-work run. Go out for longer in the morning?',
			workouts: [
				{
					activity: 'running',
					time: 1696,
					distance: 3.3,
					unit: 'mi',
				},
			],
		},
		{
			day: '2014-05-05',
			notes: 'Started out decently, then tanked on the last 2k. Do another, at a steady 2:08.0.',
			workouts: [
				{
					activity: 'erging',
					time: 1540,
					distance: 6,
					unit: 'km',
				},
			],
		},
    ]
  });

  /*Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });*/
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
