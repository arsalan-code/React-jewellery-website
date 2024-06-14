const express = require ('express')
const mongoose = require('mongoose')
const cors = require('cors')
const nodemon=require('nodemon')
const userQuery=require('./contact')
const employeeModel = require('./Employees') 
const favModel = require('./favourite')
const addModel= require('./address')
const cartModel= require('./addtocard')
const app = express()
const { MongoClient } = require('mongodb');
app.use(express.json())
app.use(cors())
const url = 'mongodb://localhost:27017';
const dbName = 'registeration';
mongoose.connect('mongodb://localhost:27017/registeration')

// ................Registaration Api...................
app.post('/Reg', async (req, res) => {
    const { name, email, password } = req.body
    try {
        const user = await employeeModel.findOne({ email })
        if (user) {
            return res.status(400).send({
                success: false,
                message: "user Allready exist"
            })
        }
        const newuser = new employeeModel({
            name,
            email,
            password
        })
        await newuser.save()
        res.status(200).send({
            success: true,
            message: "Registration successfully"
        })
    } catch (error) {

        res.status(200).send({
            success: false,
            error: error,
            message: error.message
        })

    }
});
// ................Registaration Api end...................


// ................LogIn Api...................
app.post('/log', async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await employeeModel.findOne({ email: email, password: password })
        if (user)   {
            if (user.password === user.password)
                return res.status(200).send({
                    success: true,
                    message: "LogIn Successfully",
                    id:user._id
                })
        }
        else {
            res.status(400).send({
                success: false,
                message: "user not found"

            })
        }

    } catch (error) {

        res.status(400).send({
            success: false,
            error: error,
            message: error.message
        })
    }
});
// ................LogIn Api End...................

<<<<<<< Updated upstream

// .......Contact API............. 
app.post('/contact',async(req, res)=>{
=======
        // .......Contact API............. 
        app.post('/contact',async(req, res)=>{
>>>>>>> Stashed changes
            const {name, email, msg}=req.body

            const data1={
                name:name, 
                email:email,
                msg:msg
            }
            await userQuery.insertMany([data1])
        })


// ................Profile Api...................
app.post('/getProfile', async (req, res) => {
    const { email} = req.body
    try {
        const user = await employeeModel.findOne({email})
        if (user) {
            return res.status(200).send({
                success: true,
                message: "successfully get profile",
                data:user
        })
    }  
   
    } catch (error) {
        res.status(200).send({
            success: false,
            error: error,
            message: error.message
        })
    }
});
app.post('/getmyprofile', async function (req, res) {
    const {email} = req.body
    try {
        const client = await MongoClient.connect(url);
        const db = client.db(dbName );
        const result = await db.collection('employees').findOne({email});
        res.send(result);
        client.close();
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send('Internal Server Error');
    }
});
// ................Profile Api End...................

// ................Catagery Api End..................
    app.post('/getallcategories', async function (req, res) {
        try {
            const client = await MongoClient.connect(url);
            const db = client.db(dbName );
            const result = await db.collection('category').find({}).toArray();
            res.send(result);
            client.close();
        } catch (err) {
            console.error('Error:', err);
            res.status(500).send('Internal Server Error');
        }
    });
// ................Catagery Api End...................

// .............SubCatagery Api End...................
app.post('/getallsubcategories', async function (req, res) {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db(dbName );
        const result = await db.collection('subcategories').find({}).toArray();
        res.send(result);
        client.close();
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send('Internal Server Error');
    }
});
// ................SubCatagery Api End...................//

//  ................subCatageriesbyallcatagery Api End...................
app.post('/getsubcatbycatid', async function (req, res) {
    const {cat_id} = req.body
    try {
        const client = await MongoClient.connect(url);
        const db = client.db(dbName );
        const result = await db.collection('subcategories').find({cat_id}).toArray();
        res.send(result);
        client.close();
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send('Internal Server Error');
    }
});
// ................subCatageriesbyallcatagery........ 
//  ................Product Api start...................
app.post('/getproduct', async function (req, res) {
    const {cat_id}=req.body
    try {
        const client = await MongoClient.connect(url);
        const db = client.db(dbName );
        const result = await db.collection('product').find({}).toArray();
        res.send(result);
        client.close();
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send('Internal Server Error');
    }
});
app.post('/getproductbyid', async function (req, res) {
    const {id} = req.body
    try {
        const client = await MongoClient.connect(url);
        const db = client.db(dbName );
        const result = await db.collection('product').findOne({id});
        res.send(result);
        client.close();
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send('Internal Server Error');
    }
});
// ..........................Product Api End..........................


// ..........................getmyfavourites Api start..........................
app.post('/getmyfavourites', async function (req, res) {
    const {user_name}=req.body
    try {
        const client = await MongoClient.connect(url);
        const db = client.db(dbName );
        const result = await db.collection('favourites').find({user_name}).toArray();
        res.send(result);
        client.close();
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send('Internal Server Error');
    }
});



// ..........................getmyfavourites Api End..........................

// ..........................setfavourites Api start..........................


// ..........................setfavourites Api End..........................
app.post('/setfavourites', async (req, res) => {
    const {user_name,product_id} = req.body
    try {
        const user = await favModel.findOne({user_name, product_id})
        if (user) {
            await user.deleteOne()
            return res.status(200).send({
                success: true,
                message: "favourites successfully"
            })
        }
        const newfev = new favModel({
            user_name,
            product_id  
        })
        await newfev.save()
        res.status(200).send({
            success: true,
            message: "favourites successfully"
        })
    } catch (error) {

        res.status(400).send({
            success: false,
            error: error,
            message: error.message
        })
    }
});
// ..........................setfavourites Api End..........................

// ..........................setAddress Api start............................
app.post('/getaddress', async function (req, res) {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db(dbName );
        const result = await db.collection('addresses').find({}).toArray();
        res.send(result);
        client.close();
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/setaddresses', async (req, res) => {
    const {id,address,city,state,landmark,pincode} = req.body
    try {
        const user = await addModel.findOne({id})
        if (user) {
            await user.updateOne({address,city,state,landmark,pincode})
            return res.status(200).send({
                success: true,
                message: "address is update"
            })
        }
        const newadd = new addModel({
            id,
            address,
            city,
            state,
            landmark,
            pincode 
        })
        await newadd.save()
        res.status(200).send({
            success: true,
            message: "address is submited"
        })
    } catch (error) {

        res.status(400).send({
            success: false,
            error: error,
            message: error.message
        })
    }
});
// ..........................setAddress  Api End..........................

// ..........................setAddtocart  Api start..........................
app.post('/setaddtocart', async (req, res) => {
    const {user_id,product_id,status,quantity,price,discount,total_price,cuponcode} = req.body
    try {
        const user = await cartModel.findOne({user_id})
        if (user) {
            // await user.updateOne({address,city,state,landmark,pincode})
            return res.status(200).send({
                success: true,
                message: "add to cart"
            })
        }
        const newcart= new cartModel({
            user_id,
            product_id,
            status, 
            quantity,
            price,
            discount,
            total_price,
            cuponcode
        })
        await newcart.save()
        res.status(200).send({
            success: true,
            message: "add to cart"
        })
    } catch (error) {

        res.status(400).send({
            success: false,
            error: error,
            message: error.message
        })
    }
});

app.get('/getaddtocart', async function (req, res) {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db(dbName );
        const result = await db.collection('addtocarts').find({}).toArray();
        res.send(result);
        client.close();
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/deleteaddtocart', async (req, res) => {
    const {user_name,product_id,status} = req.body
    try {
        const user = await cartModel.findOne({user_name})
        if (user) {
            await user.deleteOne({user_name,product_id})
            return res.status(200).send({
                success: true,
                message: "delete added cart"
            })
        }
        const newcart= new cartModel({
            user_name,
            product_id,
            status 
        })
        await newcart.save()
        res.status(200).send({
            success: true,
            message: "delete added cart"
        })
    } catch (error) {
        
        res.status(400).send({
            success: false,
            error: error,
            message: error.message
            
        })
    }
});
// ..........................setAddtocart  Api End..........................

app.listen(5000, () =>{
    console.log("port is running on 5000")
});