import { Component, Output, EventEmitter, OnInit, HostListener } from '@angular/core';
import { navbarData, NavItem } from './nav-data';

/**
 * Interface for toggling the side navigation state
 */
interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter<SideNavToggle>();

  collapsed = false; // Indicates if the sidenav is collapsed or not
  screenWidth = 0;   // Holds the current screen width
  navData: NavItem[] = navbarData; // Holds the navigation items

  /**
   * Listener for window resize events to handle responsiveness
   */
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.emitToggleState(); // Emit updated state
    }
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth; // Initialize screen width
  }

  /**
   * Toggles the collapsed state of the sidenav
   */
  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.emitToggleState(); // Emit updated state
  }

  /**
   * Closes the sidenav (sets it to the expanded state)
   */
  closeSidenav(): void {
    this.collapsed = false;
    this.emitToggleState(); // Emit updated state
  }

  /**
   * Emits the current collapsed state and screen width
   */
  private emitToggleState(): void {
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }
}
