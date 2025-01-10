<template>
  <ion-fab slot="fixed" vertical="bottom" horizontal="end">
    <ion-fab-button @click="gotoEmailPage" color="murphla">
      <ion-icon :icon="add"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</template>

<script lang="ts">
import { IonFab, IonFabButton, IonIcon } from '@ionic/vue';
import { add } from 'ionicons/icons';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: { IonFab, IonFabButton, IonIcon },
  setup() {
    const router = useRouter();

    function gotoEmailPage() {
      router.push('/tabs/email');
    }

    return { add, gotoEmailPage };
  },
});
</script>

