import { Component } from '@angular/core';


import { CommonService } from '../common.service';

import { Router } from '@angular/router';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 // alert:boolean = false;

 email:string ='';

 password:string ='';



 constructor(private router:Router) { }



 ngOnInit(): void {

  

   }



  

   logIn() {

     if (this.email === "admin@gmail.com" && this.password === "Admin@123") {

       Swal.fire({

         icon: 'success',

         title: 'Login Successful',

         text: 'Redirecting to the list page...',

         showConfirmButton: true,

       }).then((result) => {

         if (result.isConfirmed) {

           this.router.navigate(["./list"]);

         }

       });

     } else {

       Swal.fire({

         icon: 'error',

         title: 'Invalid Login',

         text: 'Please enter valid details.',

       });

     }

   }

 }
