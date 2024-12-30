<template>

<ion-page>
    <ion-content>
      <ion-grid class="vertical-align-grid">

  <ion-row>
<ion-col class="main_text_content"> 
  <ion-toolbar>
              <h1 class="pagetitlehach">About</h1>
            </ion-toolbar><br>
  <p>Murphy Loss Assessors Ltd are <strong>Claims Consultants</strong>.
We help Residential and commercial customers with all insurance claims including:</p>
<ul>
  <li>Fire Damage</li>
  <li>Water Damage</li>
    <li>Storm Damage</li>
      <li>Theft</li>
        <li>Impact Damage</li>
          <li>Oil Leaks</li>
            <li>Business Interruption</li>
</ul>
<p class="hotcallout">We negotiate the <span>best settlements</span></p>
<p class="inlinelink"><ion-icon :icon="navigateOutline" size="large" color="primary"></ion-icon>&nbsp;<a href="https://murphyla.ie/">https://murphyla.ie/</a></p>
</ion-col>

  </ion-row>

  <ion-row>
  <ion-col>
      <ion-button @click="gotoEmail" color="murphla">Send Referral</ion-button>
</ion-col>
</ion-row>

</ion-grid>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton } from '@ionic/vue';
import { personCircleOutline, mailOutline, navigateOutline, callOutline, businessOutline } from 'ionicons/icons';
import { useRouter } from 'vue-router';

const router = useRouter();

function gotoEmail() {
  router.push('/tabs/email');
}
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

p.hotcallout span{
color: #007591;
font-weight: 600;
}

.inlinelink{
  display: flex;
  align-items: center;
  justify-content: center;
  .icon-large{
    background: #fff;
    border-radius: 3px;
  }
  a{
    color: #007591;
    text-decoration: none;
  }
}

.sendrefbutt{
  color: #fff;
}
</style>