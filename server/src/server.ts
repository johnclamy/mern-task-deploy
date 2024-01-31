import app from "./app";
import env from "./utils/validateEnv";
import mongoose from "mongoose";

const PORT = env.PORT;

mongoose
  .connect(env.MONGODB_URI)
  .then(() => {
    console.log("Mongoose connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(console.error);
