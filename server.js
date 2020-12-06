const app = require('./api/app');
const { port } = require('./api/config');


app.listen(port, '0.0.0.0', (e) => {
    if (e) {
        throw new Error('Internal Server Error');
    }
    console.log("Test API running on port:" + port);
});