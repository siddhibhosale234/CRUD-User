const express = require('express');
const { userAccountData, allUserAccountList, deleteUserAccount, updateUserAccount } = require('../controller/UserAccountController');
const routes = express.Router();

routes.post('/addUser',userAccountData);
routes.get('/getUsers',allUserAccountList)
routes.delete('/deleteUser/:id',deleteUserAccount)
routes.put('/updateUser/:id',updateUserAccount)
module.exports = routes