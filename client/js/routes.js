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
    templateUrl: '../partials/users.html',
    controller: "SignupController"
  })

  .when('/profile', {
    templateUrl: '../partials/profile.html',
    controller: "ProfileController"
  })

})
