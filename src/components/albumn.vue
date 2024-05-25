<script lang="ts" setup>
import albumn_card from './albumn_card.vue'
import axios from "axios";
import { onMounted, ref} from "vue";

interface card {
  name: string,
  pic: string,
  last_update: string,
  created: string,
  file_count: number
}

const albumn_cards = ref<card[]>([]);
onMounted(async () => {
  try {
    const response = await axios.get("https://script.google.com/macros/s/AKfycbzic3VXCrlQjelTHwtY0jtVl1H1lQoi45zn0u5zClskTtJhUWH4mRahJW8dn8Fs30ze/exec?name=cos");
    albumn_cards.value = response.data;
  } catch (error:any) {
    if (error.request.status == 503) {
      setTimeout(() => {
        console.error(error);
      }, 100);
    } else {
      console.error(error);
    }
  }
});
</script>




<template>
  <div>
    <div class="container_fluid">
      <div class="row justify-content-around">
        <p>{{albumn_cards}}</p>
        <albumn_card v-for="(card, cardIndex) in albumn_cards" :key="cardIndex"
                     :created="card.created"
                     :image_url="card.pic"
                     :title="card.name"
                     :update_date="card.last_update" v-bind:file_count="card.file_count"/>
      </div>


    </div>


  </div>


</template>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
}

.col-sm-4 {
  padding: 0 12px;
}

@media screen and (max-width: 1360px) {
  .col-sm-4 {
    flex: 40%;
    max-width: 100%;


  }
}

@media screen and (max-width: 800px) {
  .col-sm-4 {
    flex: 100%;
    max-width: 100%;


  }
}
</style>

