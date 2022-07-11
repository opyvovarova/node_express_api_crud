import express from 'express';

const router = express.Router();

const users = [
  {
    "firstName": "Olga",
    "lastName": "Pyvovarova",
    "age": 35 
  }
];

//all routes in here are starting with /users
router.get('/', (req, res) => {

  console.log(users);

  res.send('Hello');
});

export default router;