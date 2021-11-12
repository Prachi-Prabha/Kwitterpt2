//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBxfWq3Xd7nhp4YCpz9M7F5Mpl9bX4U1n4",
      authDomain: "kwitter-prac.firebaseapp.com",
      databaseURL: "https://kwitter-prac-default-rtdb.firebaseio.com",
      projectId: "kwitter-prac",
      storageBucket: "kwitter-prac.appspot.com",
      messagingSenderId: "562320549270",
      appId: "1:562320549270:web:c2070d2262a3f693cfa9b7",
 };
 user_name = localStorage.getItem("user_name");
 room_name = localStorage.getItem("room_name");
 function send() {
       msg = document.getElementById("msg").value;
       firebase.database.ref(room_name).push({
             name:user_name,
             message:msg,
             like:0
       });
       document.getElementById("msg").value = "";


 }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout() {
 localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
localStorage.removeItem("index.html");
} 
