<script setup></script>

<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12" sm="6">
        <v-sheet class="ma-2 pa-2">
          <v-text-field label="From" variant="underlined"></v-text-field>
        </v-sheet>
      </v-col>
      <v-col cols="12" sm="6">
        <v-sheet class="ma-2 pa-2">
          <v-text-field label="To" variant="underlined"></v-text-field>
        </v-sheet>
      </v-col>
      <v-col cols="12" sm="6">
        <v-sheet class="ma-2 pa-2">
          <v-text-field
            label="Departure Date"
            variant="underlined"
            type="date"
          ></v-text-field>
        </v-sheet>
      </v-col>
      <v-col cols="12" sm="6">
        <v-sheet class="ma-2 pa-2">
          <v-text-field
            label="Return Date"
            variant="underlined"
            type="date"
          ></v-text-field>
        </v-sheet>
      </v-col>
      <v-col cols="12" sm="6" class="ma-2">
        <v-btn
          class="dx-flex justify-center"
          prepend-icon="mdi-magnify"
          variant="tonal"
        >
          Search
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
