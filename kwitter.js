function addUser()
{
    var username = document.getElementById("username");
    localStorage.setItem("username",username);
    window.location= "kwitter_room.html";
}
