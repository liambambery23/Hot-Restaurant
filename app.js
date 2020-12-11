const express = require("express");
const path = require("path");

let app = express();

let PORT = process.env.PORT || 3200;

let reservationsList = [];
let waitList = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/////--------------------------

app.get("/", function (request, response) {
    response.sendFile(path.join(__dirname, "homepage.html"));
});

app.get("/reserve", function (request, response) {
    response.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function (request, response) {
    response.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/waitlist", function (request, response) {
    return response.json(waitList);
});

app.get("/api/tables", function (request, response) {
    return response.json(reservationsList);
});

////---------------------------

app.post("/api/reservation", function (request, response) {
    let newReservation = request.body;
    if(reservationsList.length >4){
        waitList.push(newReservation);
        console.log(newReservation);
        return response.json(false);
    } else {
        reservationsList.push(newReservation);
        console.log(newReservation);
        return response.json(true);
    }
});

app.listen(PORT, function () {
    console.log("Server working on port: " + PORT);
})