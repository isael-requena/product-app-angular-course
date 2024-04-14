import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { IloginFormValues } from '../../../../interfaces/form.interface';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent implements OnInit {
  @Output() onSubmitEmitter = new EventEmitter<IloginFormValues>();
  public loginForm: FormGroup = new FormGroup({});

  /**
   * Ciclo de vida cuando se inicia el componente
   */
  ngOnInit(): void {
    try {
      this.loginForm = new FormGroup({
        username: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required])
      })
    } catch (error) {
      console.error(error);
    }
  }

  public onSubmit = () => {
    try {
      this.onSubmitEmitter.emit(this.loginForm.value)
    } catch (error) {
      console.error(error)
    }
  }
}
