const helloController = (app) => {
    app.get('/hello', (req, res) => {
        res.send('Hello World!')
    });
}
export default helloController;