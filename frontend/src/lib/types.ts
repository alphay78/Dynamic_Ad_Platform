// export interface Bus {
//   id: string;
//   carrierName: string;
//   busNumber: string;
//   plateNumber: string;
//   origin: string;
//   destination: string;
//   departureDate: string;
//   busType: string;
//   departureTime: string;
//   arrivalTime: string;
//   totalSeats: number;
//   amenities: string[]; 
//   availableSeats: number;
//   price: number;
// }

// export interface Route {
//   id: string;
//   from: string;
//   to: string;
//   distance: number;
//   estimatedDuration: string;
// }

// export interface Booking {
//   id: string;
//   busId: string;
//   userId: string;
//   from: string;
//   to: string;
//   departureDate: string;
//   seatNumbers: string[];
//   totalPrice: number;
//   status: "confirmed" | "pending" | "cancelled";
//   createdAt: string;
// }

// export interface PassengerData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   dateOfBirth: string;
//   gender: "male" | "female" | "other";
// }

// export interface BookingFormData {
//   passengers: PassengerData[];
//   emergencyContact: {
//     name: string;
//     phone: string;
//   };
// }

// src/lib/types.ts

export interface Bus {
  id: string;
  carrierName: string;
  busNumber: string;
  plateNumber: string;
  origin: string;
  destination: string;
  departureDate: string;
  busType: string;
  departureTime: string;
  arrivalTime: string;
  totalSeats: number;
  amenities: string[]; // e.g. ["WiFi", "AC"]
  availableSeats: number;
  price: number;
}
export interface Trip {
  tripGuid: string;
  busCarrier: {
    displayName: string;
  };
  tripRoute: {
    origin: {
      name: string;
      region: { name: string };
      city: { name: string };
      address: string;
    };
    estimatedTravelTime?: string;
    destination: {
      name: string;
      region: { name: string };
      city: { name: string };
      address: string;
    };
  };
  departureDate: string; // e.g. "Wednesday, August 6, 2025"
  departureTime?: string;
  arrivalTime?: string;
  bus: {
    plateNumber: string;
    amenities: {
      hasWifi: boolean;
      hasAC: boolean;
      hasRestroom: boolean;
      hasRefreshment: boolean;
    };
  };
  drops?: Array<{
    station: {
      name: string;
    };
  }>;
  pickUp?: Record<string, any>; // unclear structure, you can type better if known
  seatAvailability?: {
    bookedSeats: string; // e.g. "15 seats booked"
    availableSeats: string; // e.g. "45 seats left"
  };
  travelPrice: number;
  lastModified?: string;
}





