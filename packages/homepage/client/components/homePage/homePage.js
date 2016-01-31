
Router.route('/', {
  name: 'homeRoute',
  template: 'homePage'
});


// counter starts at 0
Session.setDefault('counter', 0);

Template.homePage.helpers({
  counter: function () {
    return Session.get('counter');
  }
});

Template.homePage.events({
  'click button': function () {
    // increment the counter when button is clicked
    Session.set('counter', Session.get('counter') + 1);
  }
});
