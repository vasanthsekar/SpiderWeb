import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map, filter } from 'rxjs/operators';

import { Query, Course } from './types';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CourseService {
  courseListener = new Subject<string>();

  constructor(private apollo: Apollo) { }

  getAllCourses(searchTerm: String) {
    return this.apollo.watchQuery<Query>({
      pollInterval: 500,
      query: gql`
        query allCourses($searchTerm: String) {
          allCourses(searchTerm: $searchTerm) {
            employeeNumber
            employeeName
            deputeCountry
            deputeBranch
            employeeSector
            workLocation
            parentIouId
            parentIouName
            childIouId
            childIouName
            designation
            primaryProjectNumber
            primaryProjectName
            customerName
            largeCustomer
            employeeStatus
            deliveryUnit
            primaryRoleName
            wbtTrainingBranch
            trainingDescription
            deliveryType
            courseCategory
            courseName
            courseID
            courseStartDate
            courseDateMarkedComplete
            courseCompletionStatus
            courseScore
            learningHours
          }
        }
      `,
      variables: {
        searchTerm: searchTerm
      }
    })
      .valueChanges
      .pipe(
        map(result => result.data.allCourses)
      );
  }  
}
