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