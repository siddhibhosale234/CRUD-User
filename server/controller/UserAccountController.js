const UserAccount = require('../model/UserAccount')

//addUserAccount
const userAccountData = async(req,res)=>{
    try{
    const userData = await UserAccount.create(req.body)
    if (userData) {
  return res.status(200).json({ Message: "data added succesfully", Success: true });
}
    return res.status(400).json({Message:"some error occured"})
    }
    catch (error) {
  return res.status(500).json({ Message: error.message, Success: false });
}
}

//getUserAccount
const allUserAccountList = async(req,res)=>{
    try{
    const UserDataList = await UserAccount.find()
    
    if(UserDataList){
        return res.status(200).json({Message:"data fetched succesfully",UserDataList}) 
    }
    return res.status(400).json({Message:"some error occurred"})
    }
    catch(error){
        return res.status(500).json({Message:error.message})
    }
}

//deleteUserAccount
const deleteUserAccount = async(req,res)=>{
    try{
    const deleteUser = await UserAccount.findByIdAndDelete(req.params.id)
    if(deleteUser){
        res.status(200).json({Message:"data deleted successfully",Success:true})
    }
    return res.status(400).json({Message:"some error occurred"})
    }
    catch(error){
        return res.status(500).json({Message:error.message})
    }
}

//updateUserAccount
const updateUserAccount = async(req,res)=>{
    try{
    const updateUser = await UserAccount.findByIdAndUpdate(req.params.id,req.body,{new:true})
    if(updateUser){
        res.status(200).json({Message:"data updated successfully"})
    }
    return res.status(400).json({Message:"some error occurred"})
    }
    catch(error){
        return res.status(500).json({Message:error.message})
    }
}
module.exports = {userAccountData,allUserAccountList,deleteUserAccount,updateUserAccount}