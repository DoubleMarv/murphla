<template>
  <ion-page>

    <ion-content>
      
      <ion-grid class="vertical-align-grid">
        <ion-row>
          <ion-col class="main_text_content">
            <ion-toolbar>
              <h1 class="pagetitlehach">Your Details</h1>
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

            <div v-if="savedPhono"></div>
            <div v-else>
            <ion-input v-model="phono" placeholder="Type your phone"></ion-input><br>
            </div>

            <div v-if="savedCompanyo"></div>
            <div v-else>
            <ion-input v-model="companyo" placeholder="Type your company name"></ion-input><br>
            </div>



            <ion-item v-if="savedNamo">
              <ion-icon :icon="personCircleOutline" size="large" color="primary"></ion-icon>&nbsp;{{ savedNamo }}
            </ion-item>
            <br>
            <ion-item v-if="savedEmailo">
              <ion-icon :icon="mailOutline" size="large" color="primary"></ion-icon>&nbsp;{{ savedEmailo }}
            </ion-item>
            <br>
            <ion-item v-if="savedPhono">
              <ion-icon :icon="callOutline" size="large" color="primary"></ion-icon>&nbsp;{{ savedPhono }}
            </ion-item>
            <br>
            <ion-item v-if="savedCompanyo">
              <ion-icon :icon="businessOutline" size="large" color="primary"></ion-icon>&nbsp;{{ savedCompanyo }}
            </ion-item>
            <br>

            <div v-if="savedEmailo">
              <ion-button color="warning" @click="removeAllDetails" class="ion-color ion-color-warning ios button button-solid ion-activatable ion-focusable clearbutt">Clear</ion-button>
            </div>
            <div v-else>
              <ion-button color="tertiary" @click="saveAllDetails" :disabled="!namo || !mailo || !phono">Save my details</ion-button> <ion-button color="warning" @click="removeAllDetails" class="ion-color ion-color-warning ios button button-solid ion-activatable ion-focusable clearbutt">Clear</ion-button>
            </div>
      <p>This allows us know who sends us referrals. </p>           
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonToolbar, IonTitle, IonContent, IonInput } from '@ionic/vue';
import { personCircleOutline, mailOutline, callOutline, businessOutline } from 'ionicons/icons';
import { ref, onMounted } from 'vue';

// Reactive variables for input and saved values
let namo = ref('');
let mailo = ref('');
let phono = ref('');
let companyo = ref('');

let savedNamo = ref('');
let savedEmailo = ref('');
let savedPhono = ref('');
let savedCompanyo = ref('');

let showerror = ref(false);
// Save name function
function saveName() {
  console.log('Saving name:', namo.value); // Debug log
  localStorage.setItem('userName', namo.value);
  savedNamo.value = namo.value;
}

// Save email function
function saveEmail() {
  let passedval = mailo.value;
  if(passedval.includes("@")){
    console.log('Saving email:', mailo.value); // Debug log
  localStorage.setItem('userEmail', mailo.value);
  savedEmailo.value = mailo.value;
  } else{
    showerror = true;
  }
}


function savePhone() {
  if (phono.value.trim().length >= 7) { // Basic phone validation
    console.log('Saving phone:', phono.value);
    localStorage.setItem('userPhone', phono.value);
    savedPhono.value = phono.value;
  } else {
    alert('Phone number must be at least 7 digits.');
  }
}

function saveCompany() {
    console.log('Saving company:', companyo.value);
    localStorage.setItem('userCompany', companyo.value);
    savedCompanyo.value = companyo.value;
  
}


// Save both name and email
function saveAllDetails() {
  if (namo.value.trim() && mailo.value.includes('@') && phono.value.trim()) {
    saveName();
    saveEmail();
    savePhone();
    saveCompany();
    showerror = false;
  } else {
    alert('Please fill out all fields correctly');
    showerror = true;
  }
}

function removeAllDetails() {
  localStorage.clear();
  window.location.reload();
}

// Load saved values on mount
onMounted(() => {
  savedNamo.value = localStorage.getItem('userName') || '';
  savedEmailo.value = localStorage.getItem('userEmail') || '';
  savedPhono.value = localStorage.getItem('userPhone') || '';
  savedCompanyo.value = localStorage.getItem('userCompany') || '';
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


.icon-large{
width: 2rem;
height: 2rem;
}

.clearbutt{
  font-size: 90%;
}
</style>