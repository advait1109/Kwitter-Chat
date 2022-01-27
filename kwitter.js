function login_click()
{
    var userID=document.getElementById("login_input").value;
    localStorage.setItem("userID",userID);
    window.location="kwitter_room.html";
}