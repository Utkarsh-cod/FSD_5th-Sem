function register() {
  console.log("registering here");
}
function login() {
  console.log("login here");
}
function getData() {
  console.log("getData here");
}
function DisplayData() {
  console.log("DisplayData here");
}
function waitforinput(delay) {
  const ct = Date.now();
  const end = ct + delay;
  while (Date.now() < end) {}
}
register();
login();
getData();
DisplayData();
waitforinput(2000);