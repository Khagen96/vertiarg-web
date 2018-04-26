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


  }
  function logout(){
    firebase.auth().signOut();
    window.alert("its working");
  }
