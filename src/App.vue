<template>
  <ion-app>
    <!-- Main Side Menu -->
  <ion-header class="main_heado">
    <ion-toolbar>
      <ion-title><img class="headerlogo" src="@/assets/images/logo.png" alt="Logo" /></ion-title>
    </ion-toolbar>
  </ion-header>

    <!-- Main Content Area -->
    <ion-router-outlet id="main-content"></ion-router-outlet>

    <MurphyFab/>
  </ion-app>
</template>

<script setup lang="ts">
import MurphyFab from '@/components/MurphyFab.vue';
import { IonApp, IonRouterOutlet } from '@ionic/vue';
</script>

<style>
/* CSS */

.main_heado .title-default{
  background: #007591;
}


.headerlogo{
  max-height: 3.5rem;
  padding: 0.5rem;
}

</style>