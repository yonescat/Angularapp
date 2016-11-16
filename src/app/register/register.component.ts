import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'ndp-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  email: FormControl;
  username: FormControl;
  password: FormControl;
  passwordConfirm: FormControl;
  passwordGroup: FormGroup;

constructor(private authService: AuthService, private fb: FormBuilder) {
    this.email = new FormControl('', [Validators.required]);
    this.username = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]);
    this.passwordConfirm = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]);

    this.passwordGroup = fb.group(
      {
        password: this.password,
        passwordConfirm: this.passwordConfirm
      },
      { validator: this.passwordMatchValidator }
    );

    this.registerForm = fb.group({
      email: this.email,
      username: this.username,
      passwordGroup: this.passwordGroup
    });
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('passwordConfirm').value
      ? null : { 'mismatch': true };
}

  ngOnInit() {
  }

  submit() {
    console.log('saving register form data@' + this.registerForm.value);
    let value = this.registerForm.value;
    let data = {
      firstName: value.firstName,
      lastName: value.lastName,
      username: value.username,
      password: value.passwordGroup.password
    };
    // Not yet available in D8.2
    // Todo : implement when D8.3 is stable.
    //this.authService.attempAuth('register', data);
  }
}
