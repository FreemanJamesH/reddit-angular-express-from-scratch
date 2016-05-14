app.controller('MainController', function($scope, dbService, $http){

// its good to set the variable in the .then of the function so that the data will be available by the time you set the variablewre
 dbService.getPeeps().then(function(response){
    console.log('response in controller', response);
   $scope.message = response.data;
 })

})
