<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="Flights App"></v-app-bar>

    <v-navigation-drawer>
      <v-card class="mx-auto" max-width="300">
        <v-list density="compact">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :value="item"
            :title="item.title"
            :to="item.route"
          >
          </v-list-item>
        </v-list>
      </v-card>
    </v-navigation-drawer>

    <v-main
      class="d-flex align-center justify-center"
      style="min-height: 300px"
    >
      <RouterView />
    </v-main>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: "Flight Search",
        route: "/flight-search",
      },
      {
        title: "Flight Tickets",
        route: "/flight-tickets",
      },
    ],
  }),
};
</script>
