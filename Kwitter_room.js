function Logout(){
    window.location="index.html";
}

var firebaseConfig = {
    apiKey: "AIzaSyA3g0tUSohV_KC88kqSR4COyRipfqmPgME",
    authDomain: "kwitterapphw-1ccbb.firebaseapp.com",
    databaseURL: "https://kwitterapphw-1ccbb-default-rtdb.firebaseio.com",
    projectId: "kwitterapphw-1ccbb",
    storageBucket: "kwitterapphw-1ccbb.appspot.com",
    messagingSenderId: "995481129044",
    appId: "1:995481129044:web:b3756bcc4d9fa9fd0d5dc1"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


username=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+username+"!";


function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("room_name"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML=row;
//End code
});});}
getData();


function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location="Kwitter_page.html";
}


function addRoom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        shoe:"lace"
    });
    localStorage.setItem("room_name", room_name);
    window.location="Kwitter_page.html"
}