const express = require("express");
const path = require("path");

let app = express();

let PORT = process.env.PORT || 3200;

let reservationsList = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/////--------------------------

app.get("/", function (request, response) {
    response.sendFile(path.join(__dirname, "homepage.html"));
});

app.get("/make-reservation", function (request, response) {
    response.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/view-reservations", function (request, response) {
    response.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/reservations", function (request, response) {
    return response.json(reservationsList);
});

////---------------------------

app.post("/api/reservation", function (request, response) {
    let newReservation = request.body;
    console.log(newReservation);
    reservationsList.push(newReservation);
    response.json(newReservation);
});

app.listen(PORT, function () {
    console.log("Server working on port: " + PORT);
})