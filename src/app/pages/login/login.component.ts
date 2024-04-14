import { Component } from '@angular/core';
import { LoginFormComponent } from '../../components/layouts/login-form/login-form.component';
import { IloginFormValues } from '../../../interfaces/form.interface';
import { Router } from '@angular/router';
import { ModalMessageComponent } from '../../shared/components/modal/modal-message/modal-message.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginFormComponent, ModalMessageComponent],
  providers: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  /**
   * Store the error message to show in the modal
   */
  public errorMessage: string = '';

  constructor(
    public _router: Router
  ) {}

  /**
   * On login values, it validates
   * @param loginValues form login values
   */
  public validateLogin = (loginValues: IloginFormValues) => {
    try {
      if (loginValues.username.trim().toUpperCase() === 'ISAEL' && loginValues.password === '123456') {
        // Store user data
        window.localStorage.setItem('userdata', JSON.stringify(loginValues))
        
        this._router.navigate(['home']);
      }
      else this.errorMessage =  'Username and Password invalid';
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Function to close the error modal
   */
  public closeErrorMessage = () => this.errorMessage = '';

}
