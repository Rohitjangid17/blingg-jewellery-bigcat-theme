import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  openMenu: boolean = false;

  onMenuOpen(openMenu: boolean) {
    this.openMenu = openMenu;
    return openMenu;
  }

  onMenuClose(closeMenu: boolean) {
    this.openMenu = closeMenu;
    return closeMenu;
  }
}
