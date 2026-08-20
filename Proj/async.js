function register() {
    setTimeout(() => {
  console.log("registering here");
}, 1000);
}
function login() {
  console.log("login here");
}
function getData() {
    setTimeout(() => {
  console.log("getData here");
}, 6000);
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
