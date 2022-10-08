function showMessage(){
  const message = document.getElementsByClassName("message-meteo")[0];
  if (message.style.display === "none" || message.style.display === "") {
    message.style.display = "block";
  } else {
    message.style.display = "none";
  }
}
