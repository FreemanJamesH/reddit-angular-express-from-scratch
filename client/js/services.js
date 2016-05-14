app.service('dbService', function($http){

 this.getPeeps = function(){
   return $http.get('http://localhost:3000/');
}


})
