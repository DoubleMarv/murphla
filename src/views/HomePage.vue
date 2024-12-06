<template>

<ion-page>
    <ion-content>
      <ion-grid class="vertical-align-grid">

  <ion-row>
<ion-col class="main_text_content"> 
  <ion-toolbar>
        <ion-title>About Murphy Loss Assessors</ion-title>
      </ion-toolbar><br>
  <p><strong>Murphy Loss Assessors</strong> are specialists in business interruption claims for Covid 19. Free insurance policy review. We will advise if you should submit a Covid 19 business interruption claim.</p>
<p>We negotiate the best settlement of any property, contents or business interruption claim</p>
</ion-col>

  </ion-row>
</ion-grid>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton } from '@ionic/vue';
// import { ref, onMounted } from 'vue';


// const name = ref('');
// const savedName = ref('');
// const savedEmail = ref('');


// onMounted(() => {
//   savedName.value = localStorage.getItem('userName') || ''; 
//   savedEmail.value = localStorage.getItem('userEmail') || ''; 
// });
</script>


<style>
/* CSS */

.ion-page .toolbar-md{
  transform: translateY(70px);
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

.main_text_content{
  max-width: 350px;
}

</style>