import { connect } from "mongoose";
import { MONGODB_URI } from "../sources/config";
console.log(MONGODB_URI);

 (async () => {
    try {
        const db = await connect(MONGODB_URI, {family:4})
        console.log(`DB conectada en ${db.connection.name}`);
    } catch (error) {
        console.log(error);
    }
    
})() 