import { Component } from '@angular/core';

/**
 * Interface that defines the structure of the side navigation toggle state
 */
interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // The title of the application (used for testing or branding purposes)
  title: string = 'sidenav';

  // Boolean indicating whether the side navigation is collapsed
  isSideNavCollapsed: boolean = false;

  // Variable to store the current screen width
  screenWidth: number = 0;

  /**
   * Handles the toggle event from the sidenav component
   * @param data - Contains the current screen width and collapsed state of the sidenav
   */
  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth; // Update the screen width
    this.isSideNavCollapsed = data.collapsed; // Update the collapsed state
  }
}
