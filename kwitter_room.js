var firebaseConfig = {
      apiKey: "AIzaSyD7nHGBtEjBGftscuAMJtYX0t48Pkb5onc",
      authDomain: "kwitter-b6fe2.firebaseapp.com",
      databaseURL: "https://kwitter-b6fe2-default-rtdb.firebaseio.com",
      projectId: "kwitter-b6fe2",
      storageBucket: "kwitter-b6fe2.appspot.com",
      messagingSenderId: "169172741385",
      appId: "1:169172741385:web:8984eac8385049403df7d8",
      measurementId: "G-5TZ7SFDYGG"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
var userName=localStorage.getItem("userID");
document.getElementById("welcome_message").innerHTML="Welcome "+userName+"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();


function add_room(){
      room_name=document.getElementById("room_new_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding_roomname"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}

function redirectToRoomName(name){
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html"
}