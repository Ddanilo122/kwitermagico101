// Configuração do Firebase de seu aplicativo
//ADICIONE OS LINKS DO FIREBASE AQUI
const firebaseConfig = {
    apiKey: "AIzaSyB-DWfLpk0tE4sehIq-v2G_g702KX28JII",
    authDomain: "kwister001.firebaseapp.com",
    databaseURL: "https://kwister001-default-rtdb.firebaseio.com",
    projectId: "kwister001",
    storageBucket: "kwister001.appspot.com",
    messagingSenderId: "146228650639",
    appId: "1:146228650639:web:7e498844783972e08e46fa"
  };

// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    Armazene o nome de usuário em localStorage

    Programe window.location para que o usuário possa navegar até a página chat_room.html.
    */
   localStorage.setItem('user_name',user_name)
   window.location='chat_room.html'
}



