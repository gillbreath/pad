<template>
        <ion-fab vertical="bottom" horizontal="center" slot="fixed">
          <ion-fab-button @click="takePhoto()">
            <ion-icon :icon="cameraIcon"></ion-icon>
          </ion-fab-button>
        </ion-fab>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

  const takePhoto = async () => {
    const photo = await Camera.getPhoto({
      resulttype: CameraResultType.uri,
      source: CameraSource.camera,
      quality: 100,
    });
  };
  import { camera as cameraIcon, trash, close } from 'ionicons/icons';
import {
  IonPage,
  IonHeader,
  IonFab,
  IonFabButton,
  IonIcon,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
} from '@ionic/vue';
</script>
