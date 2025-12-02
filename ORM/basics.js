import { Sequelize, DataTypes } from "sequelize";

const db = new Sequelize("users", "root", "softsuave", {
  host: "localhost",
  dialect: "mysql",
});

const User = db.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING,
  email: DataTypes.STRING,
});

const Admin = db.define("Admin", {
  admin_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  admin_name: DataTypes.STRING,
  admin_email: DataTypes.STRING,
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: "id",
    },
  },
});


User.hasMany(Admin, { foreignKey: "userId" });
Admin.belongsTo(User, { foreignKey: "userId" });

await db.sync({ alter: true });
console.log("Database Synced ");

const user = await User.create({
  name: "naveen",
  email: "naveen@example.com",
});

await Admin.create({
  admin_name: "naveen",
  admin_email: "naveen@gmail.com",
  userId: 1,
});

console.log("Records inserted ");



// import {Sequelize,DataTypes} from "sequelize"

// const db = new Sequelize("object", "root", "softsuave", {
//   host: "localhost",
//   dialect: "mysql",
// });

// const User = db.define("User", {
//     id:{
//       type:DataTypes.INTEGER,
//       primaryKey:true,
//       autoIncrement:true
//     },
//     name: DataTypes.STRING,
//     email: DataTypes.STRING,
//   });
// const Admin=db.define("Admin",{
//   admin_id:{
//     type:DataTypes.INTEGER,
//     primaryKey:true,
//     autoIncrement:true
//   },
//   admin_name:DataTypes.STRING,
//   admin_email:DataTypes.STRING,
//   id:{
//     foreignKey:true,
//     type:DataTypes.INTEGER,
//     references:{
//       model:User,
//       key:"id"
//     }
//   }
// })
  
  
//   await User.create({
//     name: "naveen",
//     email: "naveen@example.com"
//   });

//   await Admin.create({
//     id:101,
//     admin_name:"naveen",
//     admin_email:"naveen@gmail.com",
//     id:1
//   })

//   await User.create({
//     name:"Naveen Kumar P",
//     email:"naveen@gmail.com"
//   })

  
//   (async () => {
//     await db.sync(); 
//     console.log("Database synched!");
//   })();



 