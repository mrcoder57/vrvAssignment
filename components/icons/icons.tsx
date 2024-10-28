import React from "react";
interface iconProps {
  stroke: string;
}

// Icon components
export const DashboardIcon: React.FC<iconProps> = ({ stroke }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={25}
  >
    <path
      d="M12 7V12L13.5 14.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ProductsIcon: React.FC<iconProps> = ({ stroke }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={55}
  >
    <path
      d="M3 7L12 3L21 7L12 11L3 7Z M12 11V21M3 17L12 21L21 17"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const FavoritesIcon: React.FC<iconProps> = ({ stroke }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={25}
  >
    <path
      d="M12 21C12 21 5 14.5 5 9.5C5 7 6.5 5.5 9 5.5C10.5 5.5 12 7 12 7C12 7 13.5 5.5 15 5.5C17.5 5.5 19 7 19 9.5C19 14.5 12 21 12 21Z"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const OrderListIcon: React.FC<iconProps> = ({ stroke }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={25}
  >
    <path
      d="M8 6H21M8 12H21M8 18H21M3 6H4M3 12H4M3 18H4"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ProductStocksIcon: React.FC<iconProps> = ({ stroke }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={25}
  >
    <path
      d="M3 12H21M8 6H21M8 18H21"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const SettingsIcon = ({ stroke = "#000000" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={25}
  >
    <path
      d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.4 15C19.6 15.7 19.8 16.4 19.8 17.1C19.8 17.8 19.6 18.5 19.4 19.2L21.3 21.1C21.5 21.3 21.5 21.7 21.3 21.9L19.9 23.3C19.7 23.5 19.3 23.5 19.1 23.3L17.2 21.4C16.5 21.6 15.8 21.8 15 21.8C14.2 21.8 13.5 21.6 12.8 21.4L10.9 23.3C10.7 23.5 10.3 23.5 10.1 23.3L8.7 21.9C8.5 21.7 8.5 21.3 8.7 21.1L10.6 19.2C10.3 18.5 10.1 17.8 10.1 17C10.1 16.2 10.3 15.5 10.6 14.8L8.7 12.9C8.5 12.7 8.5 12.3 8.7 12.1L10.1 10.7C10.3 10.5 10.7 10.5 10.9 10.7L12.8 12.6C13.5 12.4 14.2 12.2 15 12.2C15.8 12.2 16.5 12.4 17.2 12.6L19.1 10.7C19.3 10.5 19.7 10.5 19.9 10.7L21.3 12.1C21.5 12.3 21.5 12.7 21.3 12.9L19.4 14.8C19.6 15.5 19.8 16.2 19.8 17C19.8 17.8 19.6 18.5 19.4 19.2L19.4 15Z"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Navigation items array with icons
export const dashboardNavs = [
  { name: "Dashboard", Icon: DashboardIcon,link:"/" },
  { name: "Products", Icon: ProductsIcon,link:"/products" },
  { name: "Favorites", Icon: FavoritesIcon,link:"/favorites" },
  { name: "Order List", Icon: OrderListIcon,link:"/orders" },
  { name: "Product Stocks", Icon: ProductStocksIcon,link:"/stocks" },
];
