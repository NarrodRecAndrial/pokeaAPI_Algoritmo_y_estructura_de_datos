import { getData } from "./controllers/controller";

const main = async () => {
    const data = await getData(3);
    console.log(data);          
};

main();
