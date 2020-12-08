const mongoose = require('mongoose');

const EmployerSchema = mongoose.Schema({
    name: String,
    status: String,
    contactPerson: String,
    website: String,
    phone: String,
    address: String,
    note: String
});

const Employer = mongoose.model('Employer', EmployerSchema);
module.exports = Employer;