const express = require("express");
const router = express.Router();
const employeeRouter = require('./employee');
const companyRouter = require('./company');
// const test = require('./test');

router.use('/employees', employeeRouter);
router.use('/companies', companyRouter)



module.exports = router;