const express = require("express");
const {users} = require("../data/users.json");

const router = express.Router();

const {UserModel, BookModel } = require("../models");
const { getAllUsers, getSingleUserById, addNewUser, updateUserById, deleteUser, getSubscriptionDetailsById } = require("../controllers/user-controller");


/**
 * Route: /users
 * Method: GET
 * Description: Get all users
 * Access: Public
 * Parmaters: None
 */
// router.get("/",(req, res)=>{
//     res.status(200).json({
//         success: true,
//         data: users
//     })
// })


router.get("/",getAllUsers)



/**
 * Route: /users/:id
 * Method: GET
 * Description: Get single user by ID
 * Access: Public
 * Parmaters: Id
 */
// router.get("/:id",(req, res)=>{
//     const {id} = req.params;

//     const user = users.find((each)=> each.id === id);
//     if(!user){
//         return res.status(404).json({
//             success: false,
//             message: "User Not Found"
//         })
//     }

//     return res.status(200).json({
//         success: true,
//         data: user
//     })
// })

router.get("/:id", getSingleUserById)

/**
 * Route: /users
 * Method: POST
 * Description: Create a New User
 * Access: Public
 * Parmaters: None
 */
// router.post('/', (req, res)=>{
//     const {id, name, surname, email, subscriptionType, subscriptionDate} = req.body;

//     const user = users.find((each)=> each.id === id);

//     if(user){
//         return res.status(404).json({
//             success: false,
//             message: "User Exists With The Given Id"
//         })
//     }
//     users.push({
//         id,
//         name,
//         surname,
//         email,
//         subscriptionType,
//         subscriptionDate
//     });
//     return res.status(201).json({
//         success: true,
//         data: users
//     })
// })

router.post('/', addNewUser)

/**
 * Route: /users/:id
 * Method: PUT
 * Description: Updating a user by ID
 * Access: Public
 * Parmaters: Id
 */
// router.put('/:id', (req, res)=> {
//     const {id} = req.params;
//     const {data} = req.body;

//      const user = users.find((each)=> each.id === id);
//     if(!user){
//         return res.status(404).json({
//             success: false,
//             message: "User Not Found"
//         })
//     };

//     const updateUser = users.map((each)=> {
//         if(each.id === id){
//             return {
//                 ...each,
//                 ...data,
//             }
//         }
//         return each;
//     })
//     return res.status(200).json({
//         success: true,
//         data: updateUser
//     })
// })


router.put('/:id', updateUserById)


/**
 * Route: /users/:id
 * Method: DELETE
 * Description: Deleting a user by ID
 * Access: Public
 * Parmaters: Id
 */
// router.delete("/:id", (req,res)=>{
//       const {id} = req.params;

//      const user = users.find((each)=> each.id === id);
//     if(!user){
//         return res.status(404).json({
//             success: false,
//             message: "User Not Found"
//         })
//     };

//     const index = users.indexOf(user);
//     users.splice(index, 1);

//     return res.status(200).json({
//         success: true,
//         data: users
//     })
// })


router.delete("/:id", deleteUser)

/**
 * Route: /users/subscription-details/:id
 * Method: GET
 * Description: Get all subscription details by ID
 * Access: Public
 * Parmaters: Id
 */
// router.get("/subscription-details/:id", (req, res)=>{
//     const {id} = req.params;

//     const user = users.find((each)=> each.id === id);

//     if(!user)
//         return res.status(404).json({
//     success: false,
//     message: "User Not Found",
// });


// const getDateInDays = (data = "") => {
//     let date;
//     if(data === ""){
//         date = new Date();
//     }else{
//         date = new Date(data)
//     }
//     let days = Math.floor(date / (1000 * 60 * 60 * 24));
//     return days;

// }

// const subscriptionType = (date) => {
//     if(user.subscriptionType === "Basic"){
//         date = date + 90
//     }else  if(user.subscriptionType === "Standard"){
//         date = date + 180
//     }else  if(user.subscriptionType === "Premium"){
//         date = date + 365
//     }
//     return date;
// }

// // Jan 1, 1970 UTC // milliseconds
// let retrunDate = getDateInDays(user.returnDate);
// let currentDate = getDateInDays();
// let subscriptionDate = getDateInDays(user.subscriptionDate);
// let subscriptionExpiration = subscriptionType(subscriptionDate);

// const data = {
//     ...user,
//     subscriptionExpired: subscriptionExpiration < currentDate,
//     daysLeftForExpiration: 
//     subscriptionExpiration <= currentDate ? 0 : subscriptionExpiration - currentDate,
//     fine: retrunDate < currentDate ? subscriptionExpiration <= currentDate ? 200 : 100 : 0
// }

// return res.status(200).json({
//     success: true,
//     data,
// })

// })


router.get("/subscription-details/:id", getSubscriptionDetailsById)



module.exports = router