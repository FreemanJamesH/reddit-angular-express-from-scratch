app.controller('MainController', function($scope, postService, $http) {

  $scope.vm = {};

  $scope.getPosts = function() {
    postService.getPosts().then(function(response) {
      $scope.vm.posts = response.data;
    })
  }
  $scope.getPosts();


  $scope.submit = function(title, author, image, description) {
    var obj = {
      title: title,
      user_id: 3,
      image_src: image,
      description: description
    }
    postService.submitPost(obj).then(function(returnedData) {
      $scope.vm.posts.push(returnedData)
    })
  }

  $scope.delete = function(postID) {
    var obj = {};
    obj.id = postID;
    postService.delete(obj).then(function(response) {
      $scope.getPosts();
    })
  }
})

app.controller('SignupController', function($scope, $http, $window, $location, signupService){

  $scope.vm = {};

  $scope.getUsers = function(){
    signupService.getUsers().then(function(results){
      $scope.vm.users = results.data;
    })
  }

  $scope.getUsers();

  $scope.submit = function(username, email, password){
    var obj = {
      username: username,
      email: email,
      password: password
    }
    signupService.signup(obj).then(function(response){
      $window.localStorage.setItem('token', response.data.token);
      $location.path('/')
    })
  }


})
