const app = require("./index");
const connectDb = require("./database/db");


app.listen(process.env.SERVER_PORT, async() => {
    await connectDb();
    console.log(`Server is running on port ${process.env.SERVER_PORT}`);
})