/**
 * Interface representing a navigation item in the sidenav
 */
export interface NavItem {
  routeLink: string;
  icon: string;
  label: string;
}

/**
 * Array of navigation items for the sidenav
 */
export const navbarData: NavItem[] = [
  { routeLink: 'dashboard', icon: 'fal fa-home', label: 'Dashboard' },
  { routeLink: 'products', icon: 'fal fa-box-open', label: 'Products' },
  { routeLink: 'statistics', icon: 'fal fa-chart-bar', label: 'Statistics' },
  { routeLink: 'coupens', icon: 'fal fa-tags', label: 'Coupens' },
  { routeLink: 'pages', icon: 'fal fa-file', label: 'Pages' },
  { routeLink: 'media', icon: 'fal fa-camera', label: 'Media' },
  { routeLink: 'settings', icon: 'fal fa-cog', label: 'Settings' },
];
