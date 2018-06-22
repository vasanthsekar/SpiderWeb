import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = [`
    type Course {
        employeeNumber: String
        employeeName: String
        deputeCountry : String
        deputeBranch: String
        employeeSector : String
        workLocation : String
        parentIouId : String
        parentIouName: String
        childIouId : String
        childIouName: String
        designation : String
        primaryProjectNumber: String
        primaryProjectName : String
        customerName : String
        largeCustomer : String
        employeeStatus : String
        deliveryUnit : String
        primaryRoleName: String 
        wbtTrainingBranch : String
        trainingDescription: String 
        deliveryType : String
        courseCategory : String
        courseName : String
        courseID : String
        courseStartDate: String 
        courseDateMarkedComplete : String
        courseCompletionStatus : String
        courseScore : String
        learningHours: String
    }
    type Query {
        allCourses(searchTerm: String): [Course]
        course(employeeNumber: String!): Course
    }
    type Mutation {
        addCourse(employeeNumber: String,employeeName: String,deputeCountry: String,deputeBranch: String,employeeSector: String,workLocation: String,parentIouId: String,parentIouName: String,childIouId: String,childIouName: String,designation: String,primaryProjectNumber: String,primaryProjectName: String,customerName: String,largeCustomer: String,employeeStatus: String,deliveryUnit: String,primaryRoleName: String,wbtTrainingBranch: String,trainingDescription: String,deliveryType: String,courseCategory: String,courseName: String,courseID: String,courseStartDate: String,courseDateMarkedComplete: String,courseCompletionStatus: String,courseScore : Int,learningHours: Int): Course
    }
`];

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;