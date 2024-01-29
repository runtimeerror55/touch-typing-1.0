







  var provider = new firebase.auth.GoogleAuthProvider();
  



function googleSignin() {
  
   
    firebase.auth().signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;

      
       var logout = document.querySelector("#logout")
       var login = document.querySelector("#login")
      
       login.style.display = "none";
       logout.style.display = "block";
    
      
   }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    
      console.log(error.code)
      console.log(error.message)
   });
}

function googleSignout() {
   firebase.auth().signOut()
  
   .then(function() {
      console.log('Signout Succesfull')
       var logout = document.querySelector("#logout")
       var login = document.querySelector("#login")
      
       login.style.display = "block";
       logout.style.display = "none";
   }, function(error) {
      console.log('Signout Failed')  
   });
}






firebase.auth().onAuthStateChanged(user => {

  if(user) {
  
      var logout = document.querySelector("#logout")
       var login = document.querySelector("#login")
      
       login.style.display = "none"
       logout.style.display = "block"

   
    
  }

  else {
    console.log("user signed out")
     var logout = document.querySelector("#logout")
       var login = document.querySelector("#login")
      
       login.style.display = "block";
       logout.style.display = "none";
       
      
  }
})

