import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CommonService } from '../common.service';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  alert:boolean = false;

  createUser = new FormGroup({

    name: new FormControl('', [Validators.required]),

    password: new FormControl('', [

      Validators.required,

      Validators.minLength(8),

      Validators.pattern('^[a-zA-Z0-9!@#$%^&*()_+\\-=\\[\\]{};:\'",.<>\\/?]+$') // Custom pattern validation

    ]),

    email: new FormControl('', [Validators.required, Validators.email])

  })

  constructor(private bags:CommonService) { }

 

 

  ngOnInit(): void {

  }

 

 

regUser() {

  if (this.createUser.invalid) {

    // Display validation error

    Swal.fire({

      icon: 'error',

      title: 'Validation Error',

      text: 'Please fill in all required fields and ensure password has at least 8 characters and email format.'

    });

    this.alert = false; // Hide any existing alerts

    return;

  }

 

  console.log(this.createUser.value);

  this.bags.createUser(this.createUser.value).subscribe((result) => {

    this.alert = true;

    this.createUser.reset({});

    console.log('Data created successfully', result);

 

    // Show SweetAlert2 success popup

    Swal.fire({

      icon: 'success',

      title: 'Success',

      text: 'Data created successfully!',

      timer: 2000 // Automatically close after 2 seconds

    });

  });

 

}

 

}