<template>
<ion-page>
<ion-content>
<ion-grid class="vertical-align-grid">
<ion-row>
<ion-col class="main_text_content"> 
<ion-toolbar class="max_width_threefiddy">
<h1 class="pagetitlehach">About</h1>
</ion-toolbar>
<p class="max_width_threefiddy">Murphy Loss Assessors Ltd are <strong>Claims Consultants</strong>.
We help Residential and commercial customers with all insurance claims including:</p>
<ul class="max_width_threefiddy">
<li>Fire Damage</li>
<li>Water Damage</li>
<li>Storm Damage</li>
<li>Theft</li>
<li>Impact Damage</li>
<li>Oil Leaks</li>
<li>Business Interruption</li>
</ul>
<p class="hotcallout">We negotiate the <span>best settlements</span></p>
</ion-col>
</ion-row>
</ion-grid>

</ion-content>
</ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonToolbar, IonContent,IonFab, IonFabButton, IonIcon } from '@ionic/vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function gotoEmail() {
router.push('/tabs/email');
}
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

.flexage{
  display: flex;
flex-direction: column;
align-items: center;
justify-content: center;  
}

.smallfab{
  width: 40px; 
  height: 40px;
  pointer-events: none;
}

.innerrow{
display: flex;
flex-direction: column;
align-items: center;
justify-content: center; 
}

p.hotcallout span{
color: #ffffff;
font-weight: 500;
text-decoration: underline;
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

.main_text_content{
  text-align: center;
  ul{
    margin: 0;
    padding: 0;
    li{
      list-style-type: none;
      margin-bottom: 1rem;
      font-size: 1rem;
      padding: 2px;
    }

    li:nth-child(odd) {
  background-color: #6c6a75; /* Light gray */
  color: #fff;
  font-weight: 500;
}

/* Style for even <li> elements */
li:nth-child(even) {
  background-color: #007591; /* Blue */
  color: white;
  font-weight: 500;
}

  }
}

.bordo{
  border: 2px solid #e5e5e5;
  padding: 0.5rem;
  .rightalign{
    text-align: right
  }
}

</style>