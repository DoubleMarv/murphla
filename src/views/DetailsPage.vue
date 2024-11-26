<template>
  <ion-page>

    <ion-content>
      
      <ion-grid class="vertical-align-grid">
        <ion-row>
          <ion-col class="main_text_content">
            <ion-toolbar>
        <ion-title>Your Details</ion-title>
      </ion-toolbar>
<br>
      <div v-if="savedNamo"></div>
            <div v-else>
              <ion-input v-model="namo" placeholder="Type your name"></ion-input><br>
            </div>

            <div v-if="savedEmailo"></div>
            <div v-else>
              <ion-input v-model="mailo" placeholder="Type your email"></ion-input><br>
            </div>

            <ion-item v-if="savedNamo">
              <ion-icon :icon="personCircleOutline" size="large" color="primary"></ion-icon>&nbsp;{{ savedNamo }}
            </ion-item>
            <br>
            <ion-item v-if="savedEmailo"><ion-icon :icon="mailOutline" size="large" color="primary"></ion-icon>&nbsp;{{ savedEmailo }}
            </ion-item>
            <br>

            <div v-if="savedEmailo">
              <ion-button color="warning" @click="removeNameAndEmail">Clear my details</ion-button>
            </div>
            <div v-else>
              <ion-button color="tertiary" @click="saveNameAndEmail">Save my details</ion-button>
            </div>
      <p>We want to know who sends us referrals and Lorem ipsum dolor sit ametrerum perspiciatis fuga adipisci iusto.</p>           

          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonToolbar, IonTitle, IonContent, IonInput } from '@ionic/vue';
import { personCircleOutline } from 'ionicons/icons';
import { mailOutline } from 'ionicons/icons';
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

function removeNameAndEmail() {
  localStorage.clear();
  window.location.reload();
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
  max-width: 350px;
}

.icon-large{
width: 2rem;
height: 2rem;
}
</style>