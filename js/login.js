firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    //user is logged in
  //  document.getElementById('login').style.display = "none";
  //  document.getElementById('user').style.display = "block";
     window.location.href = "data.html";
  } else {
    //user is logged out
    //document.getElementById('login').style.display = "block";
    //document.getElementById('user').style.display = "none";

       window.location.href = "index.html";
  }
});

function login(){

  var useremail= document.getElementById('email').value;
  var userpass= document.getElementById('password').value;




  firebase.auth().signInWithEmailAndPassword(useremail, userpass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...

  window.alert("Error :"+ error.message);
});


}
function logout(){
  firebase.auth().signOut();
}
