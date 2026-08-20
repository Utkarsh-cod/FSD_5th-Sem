function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Register here");
      resolve();
    }, 2000);
  });
}

function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Login here");
      resolve();
    }, 1000);
  });
}

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("GetData here");
      resolve();
    }, 3000);
  });
}

function DisplayData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("DisplayData here");
      resolve();
    }, 1000);
  });
}

async function test() {
  try {
    await register();
    await login();
    await getData();
    await DisplayData();
  } catch (err) {
    console.log("Error:", err);
  }
}

test();
