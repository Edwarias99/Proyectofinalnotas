import mongoose from "mongoose";
import {MongoClient} from "mongodb";

const MONGODB_URI = "mongodb+srv://edwarias99:PassBD1234@cluster0.doj0xzd.mongodb.net/?retryWrites=true&w=majority";

try {

  MongoClient.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    // Si no hay un error, mostrar un mensaje de éxito y realizar operaciones con la base de datos
    console.log("Conectado a la base de datos");
   
    client.db("test").collection("users").insertOne({name: "Juan", age: 25}, function(err, result) {
      
      if (err) {
        console.error(err);
      }
      
      else {
        console.log(result);
      }
      // Cerrar la conexión con la base de datos
      client.close();
    });
  });
} catch (error) {
  console.error(error);
}

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected");
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose is disconnected");
});
