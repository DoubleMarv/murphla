<template>
<ion-page>
    <ion-content>
<ion-grid class="vertical-align-grid">
  <ion-row class="innerrow">
<ion-col class="main_text_content has_centered_text">
    <img class="middlelogo" src="@/assets/images/logo.png" alt="Logo" />
    <p class="bigpee">Welcome back {{ savedNamo }}</p><hr class="whitehr">
    <p class="smallpee"> Not you?<br> Go to <a href="/tabs/details" class="murphyblue">settings</a> to add your name and email.</p>
</ion-col>

  </ion-row>
<ion-row>
</ion-row>
</ion-grid>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import { ref, onMounted } from 'vue';
let savedNamo = ref('');
let savedEmailo = ref('');

// Load saved values on mount
onMounted(() => {
  savedNamo.value = localStorage.getItem('userName') || '';
  savedEmailo.value = localStorage.getItem('userEmail') || '';
});


</script>
<style>
/* CSS */

.middlelogo{
max-height: 6rem;
background: #007591;
padding: 0.5rem 1rem;
border-radius: 3px;
}


.full-height {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}


.whitehr{
  background-color: #fff;
}
.vertical-align-grid{
height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.bigpee{
  font-size: 1.1rem;
}
.smallpee{
  font-size: .9rem;
}
.murphyblue{
  color: #007591;
  text-decoration: none;
}

.innerrow{
     display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
}

</style>