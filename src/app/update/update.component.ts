import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ReturnStatement } from '@angular/compiler';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../common.service';
import {  FormGroup,FormControl } from '@angular/forms';

 
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit  {
  alert: boolean = false;

 

  editStudent = new FormGroup({
    id: new FormControl(''), // Update control name to 'id'
    Name: new FormControl(''), // Keep 'Name'
    Address: new FormControl(''), // Keep 'Address'
    Mobile: new FormControl(''), // Keep 'Mobile'
    Email: new FormControl(''), // Keep 'Email'
  });
  
 

  constructor(private student:CommonService, private router:ActivatedRoute) { }

 

  ngOnInit(): void {

    this.student.getCurrentData(this.router.snapshot.params['id']).subscribe(
      (result: any) => {
        this.editStudent.setValue({
          id: result['id'], // Use square brackets to access properties
          Name: result['Name'],
          Address: result['Address'],
          Mobile: result['Mobile'],
          Email: result['Email'],
        });
      },
    );
    }    

 

  updateStudent() {

    Swal.fire({

      title: 'Confirm Update',

      text: 'Are you sure you want to update this Student?',

      icon: 'question',

      showCancelButton: true,

      confirmButtonText: 'Yes, update it!',

      cancelButtonText: 'No, cancel'

    }).then((result: any) => {

      if (result.isConfirmed) {

        this.student.updateStudent(this.router.snapshot.params['id'], this.editStudent.value).subscribe((result) => {

          console.log(result, 'Data updated successfully');

          this.alert = true;

        });

      }

    });

  }

 

  closeAlert() {

    this.alert = false;

  }

}

   


