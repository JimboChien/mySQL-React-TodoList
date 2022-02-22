const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();

app.use(cors());
app.use(express.json());



//#region Task API
app.get('/tasks', (req, res) => {
    const TASK_QUERY = "select * from tasks";
    db.query(TASK_QUERY, (err, response) => {
        if (err) {
            console.log(err);
        } else {
            res.send(response);
        }
    });
});

app.post('/addTask', (req, res) => {
    const title = req.body.title;
    const description = req.body.description;

    const ADD_QUERY = `insert into tasks (title, description) values ('${title}', '${description}')`

    db.query(ADD_QUERY, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send('success add task');
        }
    });
    
});

app.delete('/deleteTask/:taskid', (req, res) => {
    const DELETE_QUERY = `delete from tasks where (taskid=${req.params.taskid})`
    
    db.query(DELETE_QUERY, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result);
        }
    });
});

//#endregion

app.listen(3001, () => {
    console.log('server is running on port 3001!');
});