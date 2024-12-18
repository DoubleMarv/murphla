<template>
  <ion-page>
    <ion-content>
      <ion-grid class="vertical-align-grid">


        <ion-row>
          <ion-col class="main_text_content">
            <ion-toolbar>
        <ion-title>Send a Referral</ion-title>
      </ion-toolbar><br>
  <p>Send us your referral and Lorem ipsum dolor sit amet consectetur adipisicing elit. s laudantium quo</p>
<div v-if="user_namo">
  <ion-input v-model="customer_namo" placeholder="Add Customer name"></ion-input><br>
            <ion-input v-model="customer_mailo" placeholder="Customer email"></ion-input><br>
            <ion-textarea v-model="customer_phone" placeholder="Customer Phone Number"></ion-textarea>
            <ion-textarea v-model="customer_sitch" placeholder="Customer Issue or details"></ion-textarea>
            <br>
            <br>
            <ion-button color="success" @click="sendTestEmail">Send Referral</ion-button>
</div>
<div v-else>
  Please make sure your name and email are added first - go to the settings page.
</div>
          </ion-col>
        </ion-row>



      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonTextarea, IonInput, IonGrid } from '@ionic/vue';
import { personCircleOutline } from 'ionicons/icons';
import { mailOutline } from 'ionicons/icons';
import { sendEmail } from '@/emailService';
import { useRouter } from 'vue-router';
import { ref,onMounted } from 'vue';

let customer_namo = ref('');
let customer_mailo = ref('');
let customer_sitch = ref('');
let customer_phone = ref('');


let user_namo = ref('');
let user_mailo = ref('');
const router = useRouter();
const name = ref(''); 

async function sendTestEmail() {
  try {
    const emailData = {
      to: 'info@doublemarvellous.com', // Recipient's email
      subject: 'Murphy Loss Assessors - New Contact - '+customer_namo.value+'',
      htmlContent: '<p><strong>Contact Name:</strong> '+customer_namo.value+'</p><p><strong>Contact Email:</strong> '+customer_mailo.value+'</p><p><strong>Contact phone:</strong> '+customer_phone.value+'</p><p><strong>Contact issue:</strong> '+customer_sitch.value+'</p>',
    };
    const response = await sendEmail(emailData);
    router.push('/tabs/email_sent');
  } catch (error) {
   alert(error);
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
  max-width: 350px;
  width: 100%;
}
</style>