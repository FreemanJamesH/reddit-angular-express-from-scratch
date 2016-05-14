app.service('dbService', function($http){

// var dbService = {}

 this.getPeeps = function(){

  return $http.get('http://localhost:3000/');

}

// return dbService

})
