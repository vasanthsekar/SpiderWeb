import mongoose from 'mongoose';
import uuid from 'uuid';

const Schema = mongoose.Schema;

const courseSchema = new Schema({
    id: { type: String, default: uuid.v1 },
    employeeNumber: String,
    employeeName: String,
    deputeCountry : String,
    deputeBranch: String,
    employeeSector : String,
    workLocation : String,
    parentIouId : String,
    parentIouName: String,
    childIouId : String,
    childIouName: String,
    designation : String,
    primaryProjectNumber: String,
    primaryProjectName : String,
    customerName : String,
    largeCustomer : String,
    employeeStatus : String,
    deliveryUnit : String,
    primaryRoleName: String,
    wbtTrainingBranch : String,
    trainingDescription: String ,
    deliveryType : String,
    courseCategory : String,
    courseName : String,
    courseID : String,
    courseStartDate: String ,
    courseDateMarkedComplete : String,
    courseCompletionStatus : String,
    courseScore : String,
    learningHours: String
});

courseSchema.index({'$**': 'text'});

const model = mongoose.model('spider', courseSchema, 'spiderData');
export default model;