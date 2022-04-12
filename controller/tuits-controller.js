// import posts from "./tuits/tuits.js";
// let tuits = posts;
import * as tuitsDao from "tuits/tuits-dao.js";

const tuitsController = (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

const createTuit = async (req, res) => {
    const newTuit = req.body;

    //newTuit._id = (new Date()).getTime()+'';
    // newTuit.likes = 0;
    // newTuit.dislikes = 0;
    // newTuit.postedBy = {};
    // newTuit.postedBy.username = "Jose";
    // newTuit.handle = "Fiction";
    // newTuit.stats = {};
    // newTuit.stats.comments = 0;
    // newTuit.stats.retuits = 0;
    // newTuit.stats.likes = 0;
    // newTuit.logoImage = "../../tuiter/images/elon.jpg";
    // tuits.push(newTuit);
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);

}
const findAllTuits = async (req, res) => {
    const tuits = await tuitsDao.findAllTuits()
    res.json(tuits);
}
const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updatedTuit);
    //tuits = tuits.map(t => t._id === tuitdIdToUpdate ? updatedTuit : t);
    res.sendStatus(status);
}
const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
    //tuits = tuits.filter(t => t._id !== tuitdIdToDelete);
    res.sendStatus(status);
}

// export default (app) => {
//     app.post('/api/tuits', createTuit);
//     app.get('/api/tuits', findAllTuits);
//     app.put('/api/tuits/:tid', updateTuit);
//     app.delete('/api/tuits/:tid', deleteTuit);
// }
export default tuitsController;