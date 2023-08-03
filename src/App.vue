<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="Flights App"></v-app-bar>

    <v-navigation-drawer>
      <v-card class="mx-auto" max-width="300">
        <v-list density="compact">
          <v-list-item v-for="(item, i) in items" :key="i" :value="item" :to="item.route">
            <template #prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>

            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px">
      <RouterView />
    </v-main>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: 'Flight Search',
        route: '/flight-search',
        icon: 'mdi-magnify',
      },
      {
        title: 'Flight Tickets',
        route: '/flight-tickets',
        icon: 'mdi-airplane',
      },
    ],
  }),
}
</script>
