function register(callback) {
    setTimeout(() => {
        console.log("registering here");
        callback();
    }, 1000);
}

function login(callback) {
    setTimeout(() => {
        console.log("login here");
        callback();
    }, 1000);
}

function getData(callback) {
    setTimeout(() => {
        console.log("getData here");
        callback();
    }, 6000);
}

function DisplayData() {
    console.log("DisplayData here");
}
register(() => {
    login(() => {
        getData(() => {
            DisplayData();
        });
    });
});