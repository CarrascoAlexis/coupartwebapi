const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = process.env.PORT || 5100;

const config = require('./config')

const db = mysql.createConnection(config.db)

// Connection to database
db.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL database');
});

app.use(express.json())


/*

    PATIENTS

*/
// List all patients
app.get('/patients', (req, res) => {
    db.query('SELECT * FROM patients', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});
// Get patient by ID
app.get('/patients/:id', (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM patients WHERE id = ?', [id], (err, results) => {
        if (err) throw err;
        res.json(results)
    });
})
// Get patient by first name
app.get('/patients/firstname/:name', (req, res) => {
    const { name } = req.params;
    db.query('SELECT * FROM patients WHERE first_name = ?', [name], (err, results) => {
        if (err) throw err;
        res.json(results)
    });
})
// Get patient by past name
app.get('/patients/lastname/:name', (req, res) => {
    const { name } = req.params;
    db.query('SELECT * FROM patients WHERE lastname_name = ?', [name], (err, results) => {
        if (err) throw err;
        res.json(results)
    });
})


/*

    RECIEPES

*/
// List all reciepes
app.get('/reciepes', (req, res) => {
    db.query('SELECT * FROM reciepes', (err, results) => {
        if (err) throw err;
        res.json(results);
    })
})


/*

    ALLERGENS

*/
// List all allergens
app.get('/allergens', (req, res) => {
    db.query('SELECT * FROM allergens', (err, results) => {
        if (err) throw err;
        res.json(results);
    })
})
// Get allergen by id
app.get('/allergens/:id', (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM allergens WHERE id = ?', [id], (err, results) => {
        if (err) throw err;
        res.json(results);
    })
})
// Get allergen by name
app.get('/allergens/name/:name', (req, res) => {
    const { name } = req.params;
    db.query('SELECT * FROM allergens WHERE name = ?', [name],  (err, results) => {
        if (err) throw err;
        res.json(results);
    })
})
// Create allergen
app.post("/allergens/create", (req, res) => {
    const data = req.body;
    db.query('INSERT INTO allergens SET ?', data, (err, results) => {
        if(err) throw err;
        res.json(results)
    })
})
app.post("allergens/delete/:id")


/*

    DIETS

*/
// List all diets
app.get('/diets', (req, res) => {
    db.query('SELECT * FROM diets', (err, results) => {
        if (err) throw err;
        res.json(results);
    })
})
// Get diet by id
app.get('/diets/:id', (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM diets WHERE id = ?', [id], (err, results) => {
        if (err) throw err;
        res.json(results);
    })
})
// Get diet by name 
app.get('/diets/name/:name', (req, res) => {
    const { name } = req.params;
    db.query('SELECT * FROM diets WHERE name = ?', [name],  (err, results) => {
        if (err) throw err;
        res.json(results);
    })
})


// API Main page (useless)
app.get('/', (req, res) => {
    res.json("coucou")
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});