// Import model (database)
const {Check} = require('../models/check.model')

//  Define functions
// 1. Get all registers
const getAllRegister = async (req, res)=>{
    try{
        // Await for server response
        const checks = await Check.findAll();

        res.status(200).json({
            status:'success',
            checks
        });
    } catch (error) {
        console.log(error);
    }
};

// 2. Get check by iId
const getRegisterById = async (req,res)=>{
    // received from client side
    const {id} = req.params;

    // Finding the firs coincidence
    const checks = await Check.findOne({where:{id}});

    // Validating if the record exists in the db
    if(!checks){
        return res.status(404).json({
            status:'error',
            message:'Check not found'
        })
    }

    res.status(200).json({
        status:'success',
        checks
    })
};

// 3. Check In
const checkIn = async (req, res)=>{
    try {
        const {entranceTime, exitTime, status} = req.body
        const newCheckIn = await Check.create({
            entranceTime,
            exitTime,
            status
        });

        res.status(200).json({
            status:'success',
            newCheckIn,
            message:'Welcome'
        });
    } catch (error) {
        console.log(error);
    }
};

// 4. Check Out
const checkOut = async (req, res)=>{
    const {id} = req.params;
    const {exitTime} = req.params;

    const checks = await Check.findOne({where: {id}});

    if(!checks){
        return res.status(404).json({
            status:'Error',
            message:'Check not found'
        })
    }

    await checks.update({exitTime, status:'Out'});

    res.status(201).json({
        status:'Success'
    })
};

// 5. Cancel a check
const cancelCheck = async (req, res)=>{
    const {id} = req.params;

    const checks = await Check.findOne({where: {id}});

    if(!checks){
        return res.status(404).json({
            status:'Error',
            message:'Check not found'
        })
    }

    await checks.update({status: 'cancelled'});

    res.status(201).json({
        status:'success'
    })
};

// Export controllers
module.exports = {
    getAllRegister,
    getRegisterById,
    checkIn,
    checkOut,
    cancelCheck
};