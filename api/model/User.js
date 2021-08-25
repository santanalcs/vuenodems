const db = require('../db/conexao');

module.exports = class User{
    static getAll(callback){
       return db.query("SELECT * FROM user", callback);
    }

    static findId(id, callback){
        return db.query("SELECT * FROM user WHERE id=?",
        [id], callback);
    }

    static add(dados, callback){
        return db.query("INSERT INTO user (name, email, adress, city, uf) VALUES(?,?,?,?,?)",
        [
            dados.name, 
            dados.email, 
            dados.adress, 
            dados.city, 
            dados.uf
        ], callback);
    }

    static edit(dados, callback){
        return db.query("UPDATE user SET name=?, email=?, adress=?, city=?, uf=? WHERE id=?",
        [
            dados.name, 
            dados.email, 
            dados.adress, 
            dados.city, 
            dados.uf,
            dados.id
        ], callback);
    }

    static delete(id, callback){
        return db.query("DELETE FROM user WHERE id=?",
        [id], callback);
    }
}