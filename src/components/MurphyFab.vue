<template>
  <ion-fab slot="fixed" vertical="bottom" horizontal="end">
    <ion-fab-button href="/tabs/email">
      <ion-icon :icon="add"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</template>

<script lang="ts">
  import { IonFab, IonFabButton, IonIcon } from '@ionic/vue';
  import { add } from 'ionicons/icons';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonFab, IonFabButton, IonIcon },
    setup() {
      return { add };
    },
  });
</script>

