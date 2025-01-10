<template>
  <ion-page>
    <ion-content>
      <ion-grid class="vertical-align-grid">
        <ion-row>
          <ion-col class="main_text_content">
            <ion-toolbar>
              <h1 class="pagetitlehach">Send a Referral</h1>
            </ion-toolbar>
            <br>
            <p>Fill out the details below and send!</p>

            <div v-if="user_namo">
              <ion-input
                v-model="customer_namo"
                placeholder="Add Customer Name"
              ></ion-input>
              <div v-if="showErrors && !customer_namo.trim()" class="error-message">
                Customer name is required.
              </div>

              <ion-input
                v-model="customer_mailo"
                placeholder="Customer Email"
              ></ion-input>
              <div v-if="showErrors && !isEmailValid(customer_mailo)" class="error-message">
                Please enter a valid email address.
              </div>

              <ion-input
                v-model="customer_phone"
                placeholder="Customer Phone Number"
              ></ion-input>
              <div v-if="showErrors && !isPhoneValid(customer_phone)" class="error-message">
                Phone number must be at least 7 digits.
              </div>

              <ion-textarea
                v-model="customer_sitch"
                placeholder="Customer Issue or Details"
              ></ion-textarea>
              <!-- <div v-if="showErrors && !customer_sitch.trim()" class="error-message">
                Issue details are required.
              </div> -->

              <br>
              <br>
              <ion-button
                color="success"
                :disabled="!isFormValid()"
                @click="handleSendEmail"
              >
                Send
              </ion-button>
            </div>

            <div v-else>
              Please make sure your name and email are added first - go to the
              settings page.
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonInput, IonTextarea, IonGrid } from "@ionic/vue";
import { sendEmail } from '@/emailService';
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";

let customer_namo = ref("");
let customer_mailo = ref("");
let customer_phone = ref("");
let customer_sitch = ref("");

let user_namo = ref("");
let user_mailo = ref("");
let user_phono= ref("");
let user_companyo = ref("");
const router = useRouter();
let showErrors = ref(true); 

// Validation functions
const isEmailValid = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isPhoneValid = (phone: string): boolean => {
  return phone.trim().length >= 7;
};

const isFormValid = (): boolean => {
  return (
    !!customer_namo.value.trim() &&
    isEmailValid(customer_mailo.value) &&
    isPhoneValid(customer_phone.value) &&
    !!customer_sitch.value.trim()
  );
};

async function handleSendEmail() {
  if (isFormValid()) {
    try {
      const emailData = {
        to: "paul@murphyla.ie",
        subject: "Murphy Loss Assessors - New App Referral - " + customer_namo.value,
        htmlContent: `
          <p><strong>Contact Name:</strong> ${customer_namo.value}</p>
          <p><strong>Contact Email:</strong> ${customer_mailo.value}</p>
          <p><strong>Contact Phone:</strong> ${customer_phone.value}</p>
          <p><strong>Contact Issue:</strong> ${customer_sitch.value}</p>
          <hr>
          <p><strong>Referrer:</strong> ${user_namo.value}</p>
          <p><strong>Referrer's email:</strong> ${user_mailo.value}</p>
          <p><strong>Referrer's phone:</strong> ${user_phono.value}</p>
          <p><strong>Referrer's company:</strong> ${user_companyo.value}</p>
        `,
      };
      // Assuming `sendEmail` is an existing service
      await sendEmail(emailData);
      router.push("/tabs/email_sent");
customer_namo = ref("");
customer_mailo = ref("");
customer_phone = ref("");
customer_sitch = ref("");
    } catch (error) {
      alert(error);
    }
  } else {
    showErrors.value = true; // Show errors if the form is invalid
  }
}

onMounted(() => {
  user_namo.value = localStorage.getItem("userName") || "No name given";
  user_mailo.value = localStorage.getItem("userEmail") || "No email given";
  user_phono.value = localStorage.getItem("userPhone") || "No phone Number given";
  user_companyo.value = localStorage.getItem("userCompany") || "No company given";
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

.vertical-align-grid {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.innerrow {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}


.error-message {
  color: #007591;
  font-size: 12px;
  margin-top: 4px;
  font-style: italic;
}

textarea{
  border-top: 1px solid #777;
}
</style>
