import { defineStore } from "pinia";

export const useFlightStore = defineStore("flight", {
  state: () => ({
    flights: [
      {
        id: 1,
        price: 200,
        airline: "American Airline",
        stops: 1,
        duration: "3h 30m",
      },
      {
        id: 3,
        price: 300,
        airline: "Latam Airline",
        stops: 0,
        duration: "2h 15m",
      },
      {
        id: 4,
        price: 500,
        airline: "JetBlue Airline",
        stops: 2,
        duration: "4h 30m",
      },
      {
        id: 5,
        price: 450,
        airline: "Spirit Airline",
        stops: 3,
        duration: "2h 30m",
      },
    ],
  }),
});
