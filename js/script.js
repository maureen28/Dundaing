var firebaseConfig = {
    apiKey: "AIzaSyAnbygRPn7zJldJwsP5MGxRfpVVI2fs3hw",
    authDomain: "dundaing-7e4c1.firebaseapp.com",
    databaseURL: "https://dundaing-7e4c1.firebaseio.com",
    projectId: "dundaing-7e4c1",
    storageBucket: "dundaing-7e4c1.appspot.com",
    messagingSenderId: "854521057123",
    appId: "1:854521057123:web:3ab4b7ba301ce94d340d56",
    measurementId: "G-Z8RCEXF2CL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  // Get a reference to the database service
  var database = firebase.database();

  //event listener for form sumbit
document.getElementById("contact-form").addEventListener("submit", submitForm);

function submitForm(event){
    event.preventDefault();
    //getting the form input values
    var name = getInputs("name");
    var email = getInputs("email");
    var message = getInputs("message");

    saveMessage(name,email,message);
document.querySelector(".alert-message").style.display = "block";
//alert message
setTimeout(function(){
    document.querySelector(".alert-message").style.display = "none";
},3000);
document.getElementById("contact-form").reset()
}


//reference message collection
var messagesRef  = firebase.database().ref("messages")

//function to replace getElementbyId()
function getInputs(id){
    return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(name,email,message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        message: message
    })
}