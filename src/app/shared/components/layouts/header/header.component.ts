import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public router: Router = inject(Router)
  
  public logout = () => {
    window.localStorage.removeItem('userdata');
    this.router.navigate(['/login']);
  }
}
