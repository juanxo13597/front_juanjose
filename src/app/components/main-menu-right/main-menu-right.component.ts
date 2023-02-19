import { user } from '../../app.model';
import { AuthService } from './../../auth/services/auth.service';
import { Component } from '@angular/core';

/** menu derecho */
@Component({
  selector: 'app-main-menu-right',
  templateUrl: './main-menu-right.component.html',
  styleUrls: ['./main-menu-right.component.scss'],
})
export class MainMenuRightComponent {
  /** user */
  user: user = { id: 0, name: '', email: '', updated_at: '', created_at: '' };

  /** constructor */
  constructor(private AuthService: AuthService) {
    this.AuthService.user$.subscribe((res) => {
      this.user = res;
    });
  }

  /** logout */
  logout(): void {
    this.AuthService.logout();
  }
}
