//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBxfWq3Xd7nhp4YCpz9M7F5Mpl9bX4U1n4",
      authDomain: "kwitter-prac.firebaseapp.com",
      databaseURL: "https://kwitter-prac-default-rtdb.firebaseio.com",
      projectId: "kwitter-prac",
      storageBucket: "kwitter-prac.appspot.com",
      messagingSenderId: "562320549270",
      appId: "1:562320549270:web:c2070d2262a3f693cfa9b7",
 };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     user_name = localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

     function addRoom() {
           room_name = document.getElementById("room_name").value;
           firebase.database().ref("/").child(room_name).update({
           purpose : "adding room name"      
           });
           localStorage.setItem("room_name",room_name);
           window.location = "kwitter_page.html";

     }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log ("Room Name - " + room_name);
      row = "<div class = 'room_name' id =" + room_name + "onclick = 'redirectToRoomName(this.id)'>#"  + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row; 
      });});}
getData();
function redirectToRoomName(name){
      console.log (name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
} 

function logout() {
 localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
localStorage.removeItem("index.html");
} 
