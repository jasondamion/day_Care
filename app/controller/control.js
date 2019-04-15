var Orm = require('../config/Orm');
var express = require('express');
var router = express.Router();
var axios = require("../../node_modules/axios")


// // List children
// router.get('/child/list', function (req, res) {
//   var query = "localhost:3000/child/list/";
//   axios.get(query)
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });
// });


// //List Records
// router.get('/child/records', function (req, res) {
// res.redirect('/');
// res.json(Orm.listRecords());
// });

// // Retrieve child info
// router.get('/child/retrieve/:childName', function (req, res) {
//   res.redirect('/');
//   res.json(Orm.retrieve(childName));
//   });

//   // Clock In
// router.post('/child/clockin/:childName/:guardianName', function (req, res) {
//   res.redirect('/');
//   res.json(Orm.clock_in(childName,guardianName));
// });
// //Clock Out
// router.put('/child/clockout/:childName', function(req, res) {
// res.redirect('/');
// res.json(Orm.clock_out(childName));
// });

// // Add child
// router.post('/child/add/:childName/:guardianName/:email/:phone', function (req, res) {
//   res.redirect('/');
//   res.json(Orm.add(childName,guardianName,email,phone));
// });

// // Delete child
// router.delete('/child/delete/:childName', function (req, res) {
// res.redirect('/');
// res.json(Orm.deleted(childName));
// });

// // Export router
// // =============================================================================
// module.exports = router;

//How to make an api so I can use axios to get the object.
//What does this.(id) stand for in handlebars and how to make the button make a card for each child.
//How to put the route parameters as the values in the form for adding a child