
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyD1__FNmuEvVAD-GDgpRx5XIQvRDp07bxo",
      authDomain: "kwitter-app-9563c.firebaseapp.com",
      databaseURL: "https://kwitter-app-9563c-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-9563c",
      storageBucket: "kwitter-app-9563c.appspot.com",
      messagingSenderId: "467861243228",
      appId: "1:467861243228:web:ccd00b77a6c6d64caeed99",
      measurementId: "G-EXJRQXD7QB"
    };
  const app = initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

  function addRoom()
  {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
          purpose : "adding room"
      });
      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

