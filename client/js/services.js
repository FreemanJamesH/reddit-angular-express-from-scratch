app.service('postService', function($http){

 this.getPosts = function(){
   return $http.get('http://localhost:3000/');
}

this.submitPost = function(obj){
   return $http.post('http://localhost:3000/', obj).then(function(res){
      return res.data
   })
}

this.delete = function(obj){
   return $http.post('http://localhost:3000/delete', obj).then(function(response){
      return response;
   })
}


});

app.service('signupService', function($http){

   this.getUsers = function(){
      return $http.get('http://localhost:3000/users')
   }

   this.signup = function(obj){
      return $http.post('http://localhost:3000/signup', obj).then(function(response){
         return response
      })
   }

   this.getSingleUser = function(obj){
      return $http.get('http://localhost:3000/user', obj).then(function(response){
         return response
      })
   }

})
