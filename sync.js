function register() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("registering here");
      resolve();
    }, 1000);
  });
}

function login() {
  console.log("login here");
}

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("getData here");
      resolve();
    }, 6000);
  });
}

function DisplayData() {
  console.log("DisplayData here");
}

async function main() {
  await register();
  login();
  await getData();
  DisplayData();
}

main();
