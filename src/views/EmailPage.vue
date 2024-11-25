<template>
  <ion-page>
    <ion-content>
      <ion-grid class="vertical-align-grid">


        <ion-row>
          <ion-col class="main_text_content">
            <ion-toolbar>
        <ion-title>Send a Referral</ion-title>
      </ion-toolbar><br>
      <p>Send us your referral and Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo enim illo exercitationem accusantium facilis qui alias odit, harum necessitatibus laudantium quo, quam est dolorem assumenda rerum perspiciatis fuga adipisci iusto.</p>
            <ion-item>Your name: {{ user_namo }}</ion-item><br>
            <ion-item>Your email: {{ user_mailo }}</ion-item><br>
            <ion-input v-model="customer_namo" placeholder="Customer name"></ion-input><br>
            <ion-input v-model="customer_mailo" placeholder="Customer email"></ion-input><br>
            <ion-textarea v-model="customer_sitch" placeholder="Customer Issue or details"></ion-textarea>
            <br>
            <ion-button @click="sendTestEmail">Send Referral</ion-button>
          </ion-col>
        </ion-row>



      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonTextarea, IonInput, IonGrid } from '@ionic/vue';
import EmailContent from '@/components/ExploreContainer.vue';
import { sendEmail } from '@/emailService';
import { ref,onMounted } from 'vue';

let customer_namo = ref('');
let customer_mailo = ref('');
let customer_sitch = ref('');

let user_namo = ref('');
let user_mailo = ref('');
// Define a reactive variable
const name = ref(''); // Initial empty value
async function sendTestEmail() {
  try {
    const emailData = {
      to: 'info@doublemarvellous.com', // Recipient's email
      subject: 'Murphy Loss Assessors - New Contact - '+customer_namo.value+'',
      htmlContent: '<p><strong>Contact Name:</strong> '+customer_namo.value+'</p><p><strong>Contact Email:</strong> '+customer_mailo.value+'</p><p><strong>Contact issue:</strong> '+customer_sitch.value+'</p>',
    };
    const response = await sendEmail(emailData);
    console.log('Email response:', response);
     console.log(name);
  } catch (error) {
    console.error('Failed to send email:', error);
  }
}


onMounted(() => {
  user_namo.value = localStorage.getItem('userName') || '';
  user_mailo.value = localStorage.getItem('userEmail') || '';
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

.main_text_content{
  max-width: 450px;
}
</style>