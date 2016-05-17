app.config(function($routeProvider) {

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
    controller: "ProfileController",
    resolve: {
      currentUser: function($http, $location, signupService) {
        if (localStorage.getItem('token')) {
          var token = localStorage.getItem('token');
          console.log(token);
          const config = {
            headers: {
              'Authorization': 'Bearer ' + token
            }
          }
          signupService.getSingleUser(config)
            .then(function(response) {
              console.log(response.data)
            })
        }
      }
    }
  })

})
