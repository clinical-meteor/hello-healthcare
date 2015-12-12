// add tests to this file using the Nightwatch.js API
// http://nightwatchjs.org/api

module.exports = {
  "new user should be able to register on desktop" : function (client) {
    client
      .url("http://localhost:3000/sign-in")
      .resizeWindow(1024, 768)
      .verify.elementPresent("#entrySignIn")
      .verify.elementPresent("#signInPageEmailInput")
      .verify.elementPresent("#signInPagePasswordInput")
      .verify.elementPresent("#signInToAppButton")

      .setValue("#signInPageEmailInput", 'house@test.org')
      .setValue("#signInPagePasswordInput", 'house@test.org')
      .click("#signInToAppButton")

      .verify.elementPresent("#mainPanel");
  },
  'company logo should display on sign-in page' : function (client) {

  },
  'user should be able to request to create new account' : function (client) {

  },
  'guest should be notified if username already exists' : function (client) {

  },
  'guest should be notified if passwords do not match' : function (client) {

  },
  'guest should be notified if email is not correctly formatted' : function (client) {

  },
  'when new user fills out form and registers, new user should get created' : function (client) {

  },
  'when user signs in with username and password, should redirect to home page' : function (client) {

  },
  'user should be able to request reset password email' : function (client) {

  },
  'existing user should be able to sign in on desktop' : function (client) {

  },
  'existing user should be able to sign in on tablet' : function (client) {

  },
  'existing user should be able to sign in on phone' : function (client) {

  },
  'new user should be able to register on tablet' : function (client) {

  },
  after: function (client){
    client.end();
  }
};
