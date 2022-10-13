var firebaseConfig = {
      apiKey: "AIzaSyA6FlVQJJZbNVIHxMAwI231RUkKVjxvFnA",
      authDomain: "kwitter-3eeb1.firebaseapp.com",
      databaseURL: "https://kwitter-3eeb1-default-rtdb.firebaseio.com",
      projectId: "kwitter-3eeb1",
      storageBucket: "kwitter-3eeb1.appspot.com",
      messagingSenderId: "465766886906",
      appId: "1:465766886906:web:7ec6a6ed2ef40318f5c843"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML +=row;
      //End code
      });});}
      getData();
function addroom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}