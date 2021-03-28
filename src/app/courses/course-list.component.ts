import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Course } from './course';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit {

    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                //https://place-hold.it/70x70?text=Forms&italic=true
                imageurl: '/assets/images/forms.png',
                price: 99.99,
                code: 'XPS-8796',
                duration: 120,
                rating: 4.5,
                releasedate: 'November, 2, 2019'
            },
            {
                id: 2,
                name: 'Angular: HTTP',
                imageurl: '/assets/images/http.png',
                price: 45.99,
                code: 'LKS-1094',
                duration: 80,
                rating: 3.8,
                releasedate: 'December, 4, 2019'
            }
        ]
    };


}