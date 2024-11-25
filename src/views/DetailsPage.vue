<template>
  <ion-page>

    <ion-content>
      
      <ion-grid class="vertical-align-grid">
        <ion-row>
          <ion-col class="main_text_content">
            <ion-toolbar>
        <ion-title>Your Details</ion-title>
      </ion-toolbar><br>
      <p>We want to know who sends us referrals and Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo enim illo exercitationem accusantium facilis qui alias odit, harum necessitatibus laudantium quo, quam est dolorem assumenda rerum perspiciatis fuga adipisci iusto.</p>

            <ion-item>Your name: {{ savedNamo }}</ion-item><br>
            <ion-item>Your email: {{ savedEmailo }}</ion-item><br>
            <ion-input v-model="namo" placeholder="Type your name"></ion-input><br>
            <ion-input v-model="mailo" placeholder="Type your email"></ion-input><br>
            <br>
            <ion-button @click="saveNameAndEmail">Save my details</ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput } from '@ionic/vue';
import { ref, onMounted } from 'vue';

// Reactive variables for input and saved values
let namo = ref('');
let mailo = ref('');

let savedNamo = ref('');
let savedEmailo = ref('');

// Save name function
function saveName() {
  console.log('Saving name:', namo.value); // Debug log
  localStorage.setItem('userName', namo.value);
  savedNamo.value = namo.value;
}

// Save email function
function saveEmail() {
  console.log('Saving email:', mailo.value); // Debug log
  localStorage.setItem('userEmail', mailo.value);
  savedEmailo.value = mailo.value;
}

// Save both name and email
function saveNameAndEmail() {
  console.log('Before save:'); // Debug log
  console.log('Name:', namo.value);
  console.log('Email:', mailo.value);

  if (namo.value.trim() && mailo.value.trim()) {
    saveName();
    saveEmail();
  } else {
    alert('Both fields must be filled out.');
  }
}

// Load saved values on mount
onMounted(() => {
  savedNamo.value = localStorage.getItem('userName') || '';
  savedEmailo.value = localStorage.getItem('userEmail') || '';
});
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
  max-width: 450px;
}
</style>