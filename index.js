"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1["default"].config();
var path_1 = __importDefault(require("path"));
var cors = __importDefault(require("cors"));
var food_router_1 = __importDefault(require("./routers/food.router"));
var user_router_1 = __importDefault(require("./routers/user.router"));
var order_router_1 = __importDefault(require("./routers/order.router"));
var database_config_1 = require("./configs/database.config");
var express_1 = __importDefault(require("express"));
(0, database_config_1.dbConnect)();
// Configuracion del server
var app = (0, express_1["default"])();
app.use(express_1["default"].json()); // Acepte peticiones de JSON
app.use(cors["default"]());

// Final de configuracion del server
// http://localhost:5000/api/foods ES MI RUTA PADRE
app.use("/api/foods", food_router_1["default"]); // foodRouter, Rutas hijas y controladores
app.use("/api/users", user_router_1["default"]);
app.use("/api/orders", order_router_1["default"]);
app.use(express_1["default"].static('public'));
app.get('*', function (req, res) {
    // res.sendFile(path_1["default"].join(__dirname, 'public', 'index.html'));
    res.send({ Hola: 'Hola Mundo'});
});
// Puerto en el que va correr mi servidor
// process.env.PORT Asigname el puerto que tengas libre en el HOST
var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log("Website served on http://localhost:" + port);
}); // Final
