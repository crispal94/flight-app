<template>
  <v-container>
    <v-card class="mx-auto" color="grey-lighten-3" max-width="400"> </v-card>
    <v-row>
      <v-col cols="12">
        <v-card-text class="px-0">
          <v-text-field
            :loading="loading"
            density="compact"
            variant="solo"
            label="Search templates"
            append-inner-icon="mdi-magnify"
            single-line
            hide-details
            @click:append-inner="onClick"
          ></v-text-field>
        </v-card-text>
      </v-col>
      <v-col
        v-for="flight in flights"
        :key="flight.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-card flat class="border">
          <v-img
            class="align-end text-white"
            src="https://images.pexels.com/photos/3760564/pexels-photo-3760564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          >
            <v-card-title> Airline: {{ flight.airline }}</v-card-title>
          </v-img>

          <v-card-subtitle class="pt-3"
            ><span class="font-weight-bold">Flight duration:</span>
            {{ flight.duration }}</v-card-subtitle
          >

          <v-card-text>
            <div>
              <span class="font-weight-bold">Price:</span> ${{ flight.price }}
            </div>

            <div>
              <span class="font-weight-bold">Scales:</span>
              {{ flight.stops }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useFlightStore } from "../store/flightStore";

export default {
  setup() {
    const flightStore = useFlightStore();

    return {
      flights: flightStore.flights,
    };
  },
  data: () => ({
    loaded: false,
    loading: false,
  }),

  methods: {
    onClick() {
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
        this.loaded = true;
      }, 2000);
    },
  },
};
</script>
