import { app } from "./app.js";
import { sequelize } from "./database/database.js";
import { Comment } from "./models/comment.js";
import { Pet } from "./models/pet.js";
import { Report } from "./models/report.js";
import { User } from "./models/user.js";

const main = async () => {
  try {
    await sequelize.sync();

    // const user = await User.create({
    //   first_name: "sebastian",
    //   password: "holi",
    //   email: "sebas_23_1999@outlook.com",
    //   phone: "913580946",
    //   identification: "72043622",
    //   last_name: "garcia",
    // });
    // const pet = await Pet.create({
    //   name: "benito",
    //   age: 5,
    //   breed: "chitzu",
    //   color: "white",
    // });
    // const r = await Report.create({
    //   pet_id: pet.id,
    //   user_id: user.id,
    //   last_seen: Date.now(),
    //   report_message: "Se perdio :c",
    // });

    // const comment = await Comment.create({
    //   user_id: user.id,
    //   message: "holi",
    //   report_id: r.id,
    // });
    // console.log(comment)

    // user.addPet(pet);
    // console.log(r);
    console.log("Connection with database has been established");
    app.listen(5000);
    console.log("server is listening on port ", 5000);
  } catch (error) {
    console.error("Unable to connect to database", error);
  }
};
main();
