const app = require('./src/app');


app.listeners(3000, () =>{
    console.log("app is running on port 3000");
})