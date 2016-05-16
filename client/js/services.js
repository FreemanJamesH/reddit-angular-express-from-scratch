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
      console.log('Service received this obj: Username: ' + obj.username + ' Email: ' + obj.email + ' Password:' + obj.password);
      return $http.post('http://localhost:3000/signup', obj).then(function(response){
         return response
      })
   }

})
