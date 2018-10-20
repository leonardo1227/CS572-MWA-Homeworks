import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { DbService } from '../service/db.service';

@Component({
  selector: 'singup',
  // template:``
  templateUrl: './singup.component.html'
  //styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  singupForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private dbService: DbService) {

    this.singupForm = formBuilder.group({
      'userData': formBuilder.group(
        {
          'firstName': ['', Validators.required],
          'lastName': ['', Validators.required],
          'email': ['', [Validators.required, Validators.email, this.verifyEmailAsync]],
          'password': [''],
          'passwordConfirmation': [''],
          'acceptTerms': [false]
        }
      )
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.singupForm);
  }

  verifyEmailAsync(email: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      this.dbService.verifyEmailUnique(email.value);
      let subscription = this.dbService.verifyEmailUniqueEmitter.subscribe(
        response => {
          if (JSON.parse(response).exists == true) {
            console.log('EXIST')
            resolve({ 'invalid': true });
          } else {
            console.log('OK')
            resolve(null);
          }
        },
        err => console.error(err)
      );
    })
    return promise;
  }

  /*
    asyncExampleValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(
      (resolve, reject) => {
        setTimeout(() => {
          if (control.value === 'Example') {
            resolve({ 'invalid': true });
          } else {
            resolve(null);
          }
        }, 3000);
      }
    );
    return promise;
  }
  */

}
