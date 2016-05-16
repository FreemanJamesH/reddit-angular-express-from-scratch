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

})
