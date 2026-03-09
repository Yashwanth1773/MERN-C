exports.getUsers=(req,res)=>{
    res.send("Get all users")
}
exports.getuserById=(req,res)=>{
    res.send("get user by id")
}
exports.createUser=(req,res)=>{
    res.json({
        message:"user created sucessfully"
    })
}
exports.updateUser=(req,res)=>{
    res.json({
        message:"user updated sucessfully"
    })
}
exports.deleteUser=(req,res)=>{
    res.json({
        message:"user deleted sucessfully"
    })
}