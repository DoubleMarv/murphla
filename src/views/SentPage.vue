<template>
  <ion-page>
    <ion-content>
      <ion-grid class="vertical-align-grid">
        <ion-row>
            <ion-col class="main_text_content">
            <p>Thanks {{ user_namo }}, we have passed that info on!</p>
          </ion-col>
        </ion-row>
<ion-row>
  <ion-col>
      <ion-button @click="gotoHome" color="murphla">Home</ion-button>
</ion-col>
</ion-row>


      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonGrid } from '@ionic/vue';
import { useRouter } from 'vue-router';
import { ref,onMounted } from 'vue';

let user_namo = ref('');
const router = useRouter();

function gotoHome() {
  router.push('/tabs/home');
}

onMounted(() => {
  user_namo.value = localStorage.getItem('userName') || '';
});

</script>

<style>
/* CSS */

:root {
    --ion-font-family: 'Roboto', sans-serif;
    --ion-color-murphla: #007591;
    --ion-color-murphla-rgb: 0, 117, 145;
    --ion-color-murphla-contrast: #fff;
    --ion-color-murphla-contrast-rgb: 145, 28, 0;
    --ion-color-murphla-shade: #035569;
    --ion-color-murphla-tint: #0d94b6;
  }


.ion-color-murphla {
    --ion-color-base: var(--ion-color-murphla);
    --ion-color-base-rgb: var(--ion-color-murphla-rgb);
    --ion-color-contrast: var(--ion-color-murphla-contrast);
    --ion-color-contrast-rgb: var(--ion-color-murphla-contrast-rgb);
    --ion-color-shade: var(--ion-color-murphla-shade);
    --ion-color-tint: var(--ion-color-murphla-tint);
  }

.full-height {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.vertical-align-grid{
height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}


.innerrow{
     display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
}

</style>