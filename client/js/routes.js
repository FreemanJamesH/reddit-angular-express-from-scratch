app.config(function($routeProvider){

  $routeProvider

  .when('/', {
    templateUrl: "../partials/main.html",
    controller: "MainController"
  })

  .when('/signup', {
    templateUrl: '../partials/signup.html',
    controller: "SignupController"
  })

  .when('/users', {
    template: '<h1>Users<h1>',
    controller: "SignupController"
  })

})
