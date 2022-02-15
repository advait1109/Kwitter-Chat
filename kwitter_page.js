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
console.log(message_data)
user_name=message_data['name'];
message_user=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+user_name+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message_user+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='update_like(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'> like: "+like+"</span> </button> <hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
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
function update_like(message_id){
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      });
}