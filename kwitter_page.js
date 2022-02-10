//YOUR FIREBASE LINKS
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
room_name=localStorage.getItem("room_name");
userName=localStorage.getItem("userID");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();


function send(){
      message=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            message:message,
            name:userName,
            like:0
      });
      document.getElementById("msg").value=""
}