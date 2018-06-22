import mongoose from 'mongoose';
import courseModel from './models/course';

const resolvers = {
    Query: {
        allCourses: (root, {searchTerm}) => {
            if (searchTerm !== '')
                return courseModel.find({ $text: { $search: searchTerm } }).sort({employeeNumber: 'desc'});
            else
                return courseModel.find().sort({employeeNumber: 'desc'});
        },
        course: (root, {id}) => {
            return courseModel.findOne({courseID: id});
        }
    },
    Mutation: {
        addCourse: (root, {employeeNumber, employeeName, deputeCountry, deputeBranch, employeeSector, workLocation, parentIouId, parentIouName, childIouId, childIouName, designation, primaryProjectNumber, primaryProjectName, customerName, largeCustomer, employeeStatus, deliveryUnit, primaryRoleName, wbtTrainingBranch, trainingDescription, deliveryType, courseCategory, courseName, courseID, courseStartDate, courseDateMarkedComplete, courseCompletionStatus, courseScore, learningHours }) => {
            const course = new courseModel({employeeNumber: employeeNumber, employeeName: employeeName, deputeCountry: deputeCountry, deputeBranch: deputeBranch, employeeSector: employeeSector, workLocation: workLocation, parentIouId: parentIouId, parentIouName: parentIouName, childIouId: childIouId, childIouName: childIouName, designation: designation, primaryProjectNumber: primaryProjectNumber, primaryProjectName: primaryProjectName, customerName: customerName, largeCustomer: largeCustomer, employeeStatus: employeeStatus, deliveryUnit: deliveryUnit, primaryRoleName: primaryRoleName, wbtTrainingBranch: wbtTrainingBranch, trainingDescription: trainingDescription, deliveryType: deliveryType, courseCategory: courseCategory, courseName: courseName, courseID: courseID, courseStartDate: courseStartDate, courseDateMarkedComplete: courseDateMarkedComplete, courseCompletionStatus: courseCompletionStatus, courseScore: courseScore, learningHours: learningHours});
            return course.save();
        }
    }
}

export default resolvers;