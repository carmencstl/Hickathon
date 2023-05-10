const getUsers = "SELECT * FROM users";
const getUsersById = "SELECT * FROM users WHERE id = $1"; 
const checkEmailExists = "SELECT s FROM users s WHERE s.email = $1";
const addUser = 
    "INSERT INTO users (name, email, password, is_admin, absences) VALUES ($1, $2, $3, $4, $5)";
const removeUsers = "DELETE FROM users WHERE id = $1";
const updateUsers = "UPDATE users SET name = $1 WHERE id = $2"; 

module.exports = {
    getUsers,
    getUsersById,
    checkEmailExists,
    addUser,
    removeUsers,
    updateUsers,
};