const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://arielnicolasla:mMjnHpx3MGzygHHh@apitodb.gilslnx.mongodb.net/?retryWrites=true&w=majority&appName=APIToDB";
const client = new MongoClient(uri);
let db;
let conn;
async function run() {
  try {
      conn = await client.connect();
      db = conn.db("Pokemon");
      
      } catch (e) {
          console.error(e);
      
  } finally {
      return db
      
  }
}
async function getAll() {
    var cursor ;
    try {
        const database = await run();
        const poke = database.collection("Pokemon");
        cursor = await poke.find().sort({ _id: 1 }).toArray();

        if ((await poke.countDocuments()) === 0) {
            console.log("No documents found!");
        }
    } catch(e) {
        console.log(e);
    } finally {
        conn.close();
        return cursor;
    }
}
module.exports = { getAll };
