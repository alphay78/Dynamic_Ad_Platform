// import type { Trip, Bus } from "./types";

// export function mapTripsToBuses(trips: Trip[]): Bus[] {
//   return trips.map((trip) => {
//     // Compose amenities array from booleans
//     const amenities = [];
//     if (trip.bus.amenities.hasWifi) amenities.push("WiFi");
//     if (trip.bus.amenities.hasAC) amenities.push("AC");
//     if (trip.bus.amenities.hasRestroom) amenities.push("Restroom");
//     if (trip.bus.amenities.hasRefreshment) amenities.push("Refreshment");

//     return {
//       id: trip.tripGuid, // use tripGuid as id
//       carrierName: trip.busCarrier.displayName,
//       busNumber: trip.bus.plateNumber, // assuming busNumber same as plateNumber or unknown
//       plateNumber: trip.bus.plateNumber,
//       origin: trip.tripRoute.origin.name,
//       destination: trip.tripRoute.destination.name,
//       departureDate: trip.departureDate,
//       busType: "", // no busType info available, leave empty or add if known
//       departureTime: "", // no explicit departureTime, you can parse if you have it separately
//       arrivalTime: "", // same as above
//       totalSeats: 0, // no totalSeats info in Trip; add if available
//       amenities,
//       availableSeats: parseInt(trip.seatAvailability.availableSeats) || 0,
//       price: trip.travelPrice,
//     };
//   });
// }
