function validateform() {
  var name = document.getElementById("name").value;
  var message = document.getElementById("message").value;
  var email = document.getElementById("email").value;

  if (name == null || name == "") {
    alert("Name can't be blank");
  } else if (email == null || email == "") {
    alert("Email can't be blank");
  } else if (message == null || message == "") {
    alert("message can't be blank");
  }
}
