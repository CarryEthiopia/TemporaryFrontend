// FetchedData.jsx
export const dashboardStats = {
  deliveries: 50000,
  active: 247,
  success: 98,
  earnings: 125000,
};

export const travelers = [
  {
    name: "John Doe",
    departure: "Adama",
    destination: "Addis Ababa",
    rating: 4.5,
    flightTime: "2024-12-30T10:00:00Z",
    profileImage:
      "https://www.perfocal.com/blog/content/images/size/w960/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
  },
  // ... other travelers
];

export const cancelledDeliveries = [
  {
    travelerName: "John Doe",
    travelDestination: "Paris",
    deliveryId: "343YH3454",
    cancelledOn: "25/06/2023",
    items: ["iPhone XR", "HP Laptop", "Hand Fan"],
  },
  // ... other cancelled deliveries
];

export const deliveredDeliveries = [
  {
    travelerName: "John Doe",
    isVerified: true,
    status: "active",
    route: "Dubai-Ethiopia",
    date: "17-11-2024",
    deliveryId: "343YH3454",
    items: ["iPhone XR", "HP Laptop", "Hand Fan"],
    stats: {
      delivered: 128,
      completion: 97,
      rating: 90,
    },
  },
  // ... other delivered deliveries
];

export const processDeliveries = [
  {
    travelerName: "John Doe",
    travelDestination: "Paris",
    deliveryId: "343YH3454",
    items: ["iPhone XR", "HP Laptop", "Hand Fan"],
  },
  // ... other process deliveries
];

export const profileData = {
  name: "John Doe",
  email: "john.doe@example.com",
  settings: {
    notifications: true,
    theme: "light",
  },
};

// Add any other data that needs to be centralized
