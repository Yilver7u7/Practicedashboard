import { Component, Input } from '@angular/core';

/**
 * BodyComponent is responsible for rendering the main content area
 */
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  /**
   * Input property to determine if the side navigation is collapsed.
   * Default is false, meaning the side navigation is expanded.
   */
  @Input() collapsed: boolean = false;

  /**
   * Input property to capture the screen width.
   * Default is 0, and it is expected to be updated when the window resizes.
   */
  @Input() screenWidth: number = 0;

  /**
   * Determines the CSS class to apply to the body element based on the state
   * of the collapsed side navigation and the screen width.
   *
   * @returns {string} - The appropriate CSS class.
   */
  getBodyClass(): string {
     let styleClass: string = '';

    // Check if the side navigation is collapsed and apply the appropriate styles.
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'body-trimmed';  // Apply 'body-trimmed' class for wide screens with collapsed nav
    } else if (this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = 'body-md-screen';  // Apply 'body-md-screen' class for mobile or medium screens
    }

    return styleClass;
  }
}
