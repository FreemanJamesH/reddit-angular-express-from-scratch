app.service('dbService', function($http){

 this.getPosts = function(){
   return $http.get('http://localhost:3000/');
}

this.submitPost = function(obj){
   return $http.post('http://localhost:3000/', obj).then(function(res){
      return res.data
   })
}

this.delete = function(obj){
   console.log('This is the delete service. Request received. Trying to delete postID: ' + obj.id);
   return $http.post('http://localhost:3000/delete', obj).then(function(response){
      return response;
   })
}


})
