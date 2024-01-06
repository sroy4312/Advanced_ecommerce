const app = require('./index.js');
const connectdb = require('./database/database.js');

const port = process.env.SERVER_PORT;

app.listen(port, async() => {
    await connectdb();
    console.log(`Server running on port ${port}`);
})