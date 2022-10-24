const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema(
  {
    customerName: {
        type: String,
        required: [true, 'A loan must have a customerName'],
        trim: true,
        maxlength: [50, 'A customerName must have less or equal then 50 characters'],
        minlength: [3, 'A course name must have more or equal then 3 characters']
     
    },
    phoneNumber: {
        type: String,
        required: [true, 'A loan must have Phone Number'],
        trim: true,
        maxlength: [10, 'A instructor  must have less or equal then 10 characters']
    },
    address: {
        type: String,
        required: [true, 'A loan must have address'],
        maxlength: [100, 'Address must have less or equal then 100 characters'],
    },
    loanAmount: {
        type: Number,
        required: [true, 'A loan must have a intrusctor  name'],
        trim: true
    },
    Interest: {
        type: Number,
        required: [true, 'A loan must have a intrusctor  name'],
        trim: true,
        max: [1, 'A Interest  must have less or equal then 1'],
        min: [0.01, 'A Interest  must have more or equal then 0.01']
    },
    loanTermYears: {
        type: Number,
        required: [true, 'A loan must have a loanTermYears'],
        trim: true,
        min: [1, 'A loan  must have more or equal than 1']
    },
    loanType: {
        type: String
    },
    description: {
        type: String,
        trim: true,
        maxlength: [200, 'A loan must have less or equal then 40 characters'],
    },
    
});
const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;