import { Sequelize,DataTypes,Model } from "sequelize";
import express from "express";

const app = express();

const db = new Sequelize("object", "root", "softsuave", {
    host: "localhost",
    dialect: "mysql",
  });

  class Student extends Model {}

  Student.init({
    student_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    student_name:DataTypes.STRING,
},{
    tableName:"student",
    sequelize:db

  })

    class Teacher extends Model {}

    Teacher.init({
    teacher_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
        teacher_name:DataTypes.STRING,
    },
    { 
        tableName:"teacher",
        sequelize:db
    })

    class Marks extends Model{}

    Marks.init({
        marks_id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        subject:DataTypes.STRING,
        score:DataTypes.INTEGER
    },
{
        tableName:"marks",
        sequelize:db
})
    
Teacher.hasMany(Student,{foreignKey:'teacher_id'}); 
Student.belongsTo(Teacher,{foreignKey:'teacher_id'});//one 2 many

Student.hasOne(Marks,{foreignKey:'student_id'});
Marks.belongsTo(Student,{foreignKey:'student_id'}); //one 2 one

await db.sync({alter:true});
console.log("Database Synced");

