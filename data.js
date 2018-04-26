firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    //user is logged in
  //  document.getElementById('login').style.display = "none";
  //  document.getElementById('user').style.display = "block";
     window.location.href = "data.html";
     var user=firebase.auth().currentUser();
     if(user!=null){
       var email_id=user.email;
       document.getElementById("user_para").innerHTML="Welcome User"+email;


     }


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
