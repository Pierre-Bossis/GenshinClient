import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerFormGroup!: FormGroup

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.registerFormGroup = this.formBuilder.group({
      username: ['',Validators.required],
      email: ['', Validators.required],
      motDePasse: ['', Validators.required],
      confirmMdp : [null, Validators.required]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  onSubmit() {
    this.authService.register(this.registerFormGroup.value)
  }


  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('motDePasse')?.value;
    const confirmPassword = formGroup.get('confirmMdp')?.value;

    if (password !== confirmPassword) {
      formGroup.get('confirmMdp')?.setErrors({ mismatch: true });
    } else {
      formGroup.get('confirmMdp')?.setErrors(null);
    }
  }
}
