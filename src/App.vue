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

        <MurphyMenu />
    <MurphyFab/>
  </ion-app>
</template>

<script setup lang="ts">
import MurphyFab from '@/components/MurphyFab.vue';
import { IonApp, IonRouterOutlet } from '@ionic/vue';
</script>

<style>
/* CSS */



.headerlogo{
max-height: 2.5rem;
background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898;
background-blend-mode: multiply,multiply;
padding: 0.15rem .5rem;
border-radius: 3px;
}

</style>