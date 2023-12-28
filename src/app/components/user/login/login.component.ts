import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginFormGroup!: FormGroup

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.loginFormGroup = this.formBuilder.group({
      email: ['', Validators.required],
      motDePasse: ['', Validators.required],
    })
  }

  onSubmit() {
    this.authService.login(this.loginFormGroup.value)
  }
}
