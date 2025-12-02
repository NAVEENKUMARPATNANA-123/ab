import { DataTypes, Model, Sequelize } from "sequelize";
import express from "express";

const app = express();

app.use(express.json());

const db = new Sequelize("object", "root", "softsuave", {
  host: "localhost",
  dialect: "mysql",
});

class Product extends Model {}

Product.init(
  {
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: DataTypes.STRING, 
  },
  {
    sequelize: db,
    modelName: "Product",
    tableName: "product",
  }
);


class Bill extends Model {}

Bill.init(
  {
    bill_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    bill_amount: DataTypes.INTEGER,
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Product,
        key: "product_id",
      },
    },
  },
  {
    sequelize: db,
    modelName: "Bill",
    tableName: "bill",
  }
);

Product.hasMany(Bill, { foreignKey: "product_id" });
Bill.belongsTo(Product, { foreignKey: "product_id" });


await db.sync({ alter: true });
console.log("Database Synced");

await Product.create({
  product_name: "Laptop",
});

await Bill.create({
  bill_amount: 52000,
  product_id: 2,
});


app.get("/products", async (req, res) => {
  const prod = await Product.findAll({ include: Bill });
  res.send(prod);
});

app.post("/addproduct", async (req, res) => {
    try {
      const { product_name } = req.body;
  
      const product = await Product.create({ product_name });
      res.json({ message: "Product Added", product });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
 
  app.get("/bill", async (req, res) => {
    const bil = await Bill.findAll();
    res.json(bil);
  });



  app.get('/bill-details',async(req,res)=>{
    const bills = await Bill.findAll({
        attributes: [
            [Sequelize.fn("COUNT", Sequelize.col("product_id")), "total_bills"]
          ]
    })
    res.json(bills)
  })

  app.get('/products-details',async(req,res)=>{
    const products= await Product.findAll({
        attributes:[['product_name','product name']]
    })
    res.json(products)
  })

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

console.log("Records Inserted");
