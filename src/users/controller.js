const pool = require("../../db");
const queries = require("./queries")

const getUsers = (req, res) => {
    pool.query(queries.getUsers, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getUsersById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getUsersById, [id], (error, results) => {
            if (error) throw error;
            res.status(200).json(results.rows);
    });
}

const addUsers = (req, res) => {
    const { name, email, password, is_admin, absences } = req.body;    

    // check if email is already in the database
    pool.query(queries.checkEmailExists, [email], (error, results) => {
        if (results.rows.length) {
            res.send("Email already exists.");
            return;
        }

        // add user to db 
        pool.query(queries.addUser,
            [name, email, password, is_admin, absences], 
            (error, results) => {
            if (error) throw error;
            res.status(201).send("User added successfully");
         }
        );
    });
};

const removeUsers = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getUsersById, [id], (error, results) =>{
        const noUserfound = !results.rows.length;
        if (noUserfound) {
            res.send("User does not exist");
        }

        pool.query(queries.removeUsers, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("User removed successfully.");
        });
    });
};

const updateUsers = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;

    pool.query(queries.getUsersById, [id], (error, results) => {
        const noUserfound = !results.rows.length;
        if (noUserfound) {
            res.send("User does not exist in the database");
        }

        pool.query(queries.updateUsers, [name, id], (error, results) => {
            if (error) throw error;
            res.status(200).send("User updated succesfully");
        });
    });
};

module.exports = {
    getUsers,
    getUsersById,
    addUsers,
    removeUsers,
    updateUsers,
};