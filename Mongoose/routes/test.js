const Employee = require('../models/Employee');
const Company = require('../models/Company');
const JDate = require('jalali-date');
const tools = require('../tools/date');

// Company.findOne({ name: "mokhaberat" }, (err, company) => {
//     if (err) return console.log("something went wrong");
//     Employee.find({ company: company._id }).populate('company', { name: 1, _id: 0 }).exec((err, employees) => {
//         if (err) return console.log("something went wrong");
//         console.log(employees);
//     })
// });

// Company.find({}, { CreationDate: 1, name: 1, _id: 0 }, (err, companies) => {
//     if (err) return console.log("something went wrong");
//     companies = companies.filter(company => {
//         if (tools.calculateAge(company.CreationDate) < 1)
//             return company
//     })
//     console.log(companies);
// });

// Company.findOne({ name: "mokhaberat" }, (err, company) => {
//     if (err) return console.log("something went wrong");
//     Employee.findOne({ company: company._id, isManager: true }, { first_name: 1, last_name: 1, _id: 0 }, (err, employee) => {
//         if (err) return console.log("something went wrong");
//         console.log(employee);
//     })
// });

// Employee.find({ age: { "$gte": 20, "$lte": 30 } }, { _id: 0 }).populate('company', { name: 1, _id: 0 }).exec((err, employees) => {
//     if (err) return console.log("something went wrong");
//     console.log(employees);
// })

// Employee.find({ isManager: true }).populate('company', { name: 1, _id: 0 }).exec((err, employees) => {
//     if (err) return console.log("something went wrong");
//     console.log(employees)
// })

Employee.find({ isManager: true }, { first_name: 1, last_name: 1, _id: 0 }).populate('company', { name: 1, _id: 0 }).exec((err, managers) => {
    if (err) return console.log("something went wrong");
    console.log(managers);
});

// Company.updateMany({}, { state: "tehran", city: "tehran" }, { new: true, runValidators: true }, (err, result) => {
//     if (err) return console.log("something went wrong");
//     console.log(result);
// })