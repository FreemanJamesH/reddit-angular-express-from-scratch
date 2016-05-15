app.controller('MainController', function($scope, dbService, $http){

$scope.vm = {};

// its good to set the variable in the .then of the function so that the data will be available by the time you set the variable
 dbService.getPosts().then(function(response){
    console.log('response in controller', response);
   $scope.vm.posts = response.data;
 })


$scope.submit = function(title, author, image, description){
   var obj = {title: title, user_id: 3, image_src: image, description:description}
   console.log(dbService.submitPost(obj))

}

})
