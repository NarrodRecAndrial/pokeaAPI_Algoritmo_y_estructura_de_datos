"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = require("./controllers/controller");
const main = async () => {
    const data = await (0, controller_1.getData)(3);
    console.log(data);
};
main();
