const express = require('express');
const app = express();

const mongojs = require('mongojs');
const db = mongojs('todo', [ 'tasks' ]);

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

app.post('/tasks', function(req, res) {
    const name = req.body.name;
    const price = req.body.price;

    db.tasks.insert({ name, price, status: 0 }, function(err, data) {
        return res.json(data);
    });
});

app.patch('/tasks/:id', function(req, res) {
    const id = req.params.id;

    db.tasks.find({ _id: mongojs.ObjectId(id) }, function(err, data) {
        const status = +!data[0].status;

        db.tasks.update(
            { _id: mongojs.ObjectId(id) },
            { $set: { status } },
            { multi: false },
            function(err, data) {
                return res.json(data);
            }
        );
    });
});

app.put('/tasks/:id', function(req, res) {
    const id = req.params.id;
    const name = req.body.name;
    const price = req.body.price;

    db.tasks.update(
        { _id: mongojs.ObjectId(id) },
        { $set: { name, price } },
        { multi: false },
        function(err, data) {
            return res.json(data);
        }
    );
});

app.delete('/tasks', function(req, res) {
    db.tasks.remove({ status: 1 }, function(err, data) {
        return res.json(data);
    });
});

app.delete('/tasks/:id', function(req, res) {
    const id = req.params.id;
    db.tasks.remove({ _id: mongojs.ObjectId(id) }, function(err, data) {
        return res.json(data);
    });
});

app.get('/tasks', function(req, res) {
    db.tasks.find(function(err, data) {
        return res.json(data);
    });
});

app.get('/tasks/:id', function(req, res) {
    const id = req.params.id;
    db.tasks.find({ _id: mongojs.ObjectId(id) }, function(err, data) {
        return res.json(data);
    });
});

app.listen(8000, function() {
    console.log('API running at 8000');
});
