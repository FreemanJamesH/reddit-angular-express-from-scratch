app.service('dbService', function($http){

 this.getPosts = function(){
   return $http.get('http://localhost:3000/');
}


})
