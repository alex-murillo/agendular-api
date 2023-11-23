// Incluir BD al proyecto (dev06)
const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");

function getConnection() {
    const dbFile = "./database.db";

    if (!fs.existsSync(dbFile)) {
        const db = new sqlite3.Database(dbFile);

        // Configuración de las tablas de la BD de SQLite
        db.serialize(() => {
            db.run("CREATE TABLE dailies (date TEXT, note TEXT, emotion TEXT)");
        });

        return db;
    } else {
        // Si la BD existe, solo crea la instancia
        return new sqlite3.Database(dbFile);
    }
}

module.exports = getConnection;
