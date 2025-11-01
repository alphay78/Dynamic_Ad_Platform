// import type { Bus } from "./types"

// // Mock data for buses
// // const busesData: Bus[] = [
// //   {
// //     id: "bus-001",
// //     carrierName: "Selam Bus",
// //     busNumber: "SB-1234",
// //     busType: "Luxury",
// //     departureTime: "06:30",
// //     arrivalTime: "12:45",
// //     price: 35,
// //     availableSeats: 24,
// //     totalSeats: 45,
// //     amenities: ["wifi", "refreshments", "entertainment"],
// //   },
// //   {
// //     id: "bus-002",
// //     carrierName: "Sky Bus",
// //     busNumber: "SKY-5678",
// //     busType: "Standard",
// //     departureTime: "07:15",
// //     arrivalTime: "13:30",
// //     price: 25,
// //     availableSeats: 12,
// //     totalSeats: 50,
// //     amenities: ["wifi", "air-conditioning"],
// //   },
// //   {
// //     id: "bus-003",
// //     carrierName: "Abay Bus",
// //     busNumber: "AB-9012",
// //     busType: "VIP",
// //     departureTime: "08:00",
// //     arrivalTime: "14:15",
// //     price: 45,
// //     availableSeats: 8,
// //     totalSeats: 35,
// //     amenities: ["wifi", "refreshments", "entertainment", "power-outlets"],
// //   },
// //   {
// //     id: "bus-004",
// //     carrierName: "Ethio Bus",
// //     busNumber: "EB-3456",
// //     busType: "Standard",
// //     departureTime: "09:30",
// //     arrivalTime: "15:45",
// //     price: 28,
// //     availableSeats: 20,
// //     totalSeats: 50,
// //     amenities: ["air-conditioning"],
// //   },
// //   {
// //     id: "bus-005",
// //     carrierName: "Golden Bus",
// //     busNumber: "GB-7890",
// //     busType: "Luxury",
// //     departureTime: "10:15",
// //     arrivalTime: "16:30",
// //     price: 40,
// //     availableSeats: 15,
// //     totalSeats: 40,
// //     amenities: ["wifi", "refreshments", "entertainment", "power-outlets"],
// //   },
// //   {
// //     id: "bus-006",
// //     carrierName: "Selam Bus",
// //     busNumber: "SB-2345",
// //     busType: "Standard",
// //     departureTime: "12:00",
// //     arrivalTime: "18:15",
// //     price: 30,
// //     availableSeats: 25,
// //     totalSeats: 50,
// //     amenities: ["wifi", "air-conditioning"],
// //   },
// //   {
// //     id: "bus-007",
// //     carrierName: "Sky Bus",
// //     busNumber: "SKY-6789",
// //     busType: "VIP",
// //     departureTime: "14:30",
// //     arrivalTime: "20:45",
// //     price: 50,
// //     availableSeats: 5,
// //     totalSeats: 35,
// //     amenities: ["wifi", "refreshments", "entertainment", "power-outlets"],
// //   },
// //   {
// //     id: "bus-008",
// //     carrierName: "Abay Bus",
// //     busNumber: "AB-0123",
// //     busType: "Standard",
// //     departureTime: "16:15",
// //     arrivalTime: "22:30",
// //     price: 32,
// //     availableSeats: 18,
// //     totalSeats: 50,
// //     amenities: ["wifi", "air-conditioning"],
// //   },
// // ]

// // Function to simulate fetching buses based on route
// export async function fetchBuses(from: string, to: string): Promise<Bus[]> {
//   // Simulate API delay
//   await new Promise((resolve) => setTimeout(resolve, 1500))

//   // In a real application, this would filter based on the actual route
//   // For now, we'll just return all buses
//   return busesData
// }

// // Function to get a specific bus by ID
// export async function getBusById(id: string): Promise<Bus | undefined> {
//   // Simulate API delay
//   await new Promise((resolve) => setTimeout(resolve, 800))

//   return busesData.find((bus) => bus.id === id)
// }
