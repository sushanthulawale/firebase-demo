import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
courses$;
author$;

constructor(private db: AngularFireDatabase) {
    db.list('/courses').valueChanges()
     .subscribe( courses => {
       this.courses$ = courses;
      console.log(this.courses$);
    });

    db.object('/Authors/1').snapshotChanges()
     .subscribe( author => {
       this.author$ = author;
      console.log(this.author$);
    });
 }

add(course: HTMLInputElement){
   this.db.list('/courses').push(course.value);
   course.value = '';
 }

update(index){
   debugger;
   this.db.list('/courses/' + '3').update('3',
    'Course5');
 }

delete(course){
  debugger;
  console.log(course);
  this.db.object('/courses/' + '-M7SYtM7hE2c4vpRPHNu').remove()
  .then(x => console.log('Removed'));
  }
}
