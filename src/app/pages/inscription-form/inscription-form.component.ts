import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormArray,  FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ExplorateurService } from '../../services/explorateur/explorateur.service';
//import { AlertService, UserService } from '../_services';

@Component({
  selector: 'app-inscription-form',
  templateUrl: './inscription-form.component.html',
  styleUrls: ['./inscription-form.component.css']
})
export class InscriptionFormComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private explorateurService: ExplorateurService)
        /*private userService: UserService,
        private alertService: AlertService)*/ { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            username: ['', Validators.required, Validators.minLength(2)],
            email: ['', Validators.required, Validators.email],
            password: ['', [Validators.required]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
       /* add(username: string, email: string, password: string) : void {
          username = username.trim();
          email = email.trim();
          password = password.trim();
          if(!name && !email) {return;}
          this.explorateurService.addExplorateur({username, email, password} as Explorateur)
          .subscribe(token => localStorage.Authorization = "Bearer " + token)
        }*/

        /*this.userService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });*/
    }
}

