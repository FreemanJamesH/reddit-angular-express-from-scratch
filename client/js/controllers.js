app.controller('MainController', function($scope, dbService, $http) {

  $scope.vm = {};

  $scope.getPosts = function() {
    dbService.getPosts().then(function(response) {
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
    dbService.submitPost(obj).then(function(returnedData) {
      $scope.vm.posts.push(returnedData)
    })
  }

  $scope.delete = function(postID) {
    var obj = {};
    obj.id = postID;
    dbService.delete(obj).then(function(response) {
      $scope.getPosts();
    })
  }



})
