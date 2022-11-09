//import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
//import our database connection from config.js
const sequelize = require("../config/connection");
//import bcrypt to hash password
const bcrypt = require("bcrypt");

//Initialize User model by extending off Sequelize's Model class
class User extends Model {
    //method to run on instance data (per user) to check password
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}



module.exports - User;