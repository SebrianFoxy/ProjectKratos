var MongoClient = require('mongodb').MongoClient

const uri = "mongodb://localhost:27017/"
const client = new MongoClient(uri)
async function run() {
try {
await client.connect();
var database = client.db("Kratos");
database.dropDatabase()
database = client.db("Kratos");
const cats = database.collection("GoW");
const result = await cats.insertOne({name:"Kratos"});
console.log(`${result} documents were inserted`);
} finally {
await client.close();
}
}
run()
