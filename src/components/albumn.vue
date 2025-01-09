

<script lang="ts">
import {defineComponent} from "vue";
import axios from "axios";
import { ref} from "vue";
import Albumn_card from "./albumn_card.vue";



interface card {
  id:string,
  name: string,
  pic: string,
  last_update: string,
  created: string,
  file_count: number
}


export default defineComponent({
  name: 'Albumn',
  components: {Albumn_card},
  data(){
    return{
      albumn_cards:ref<card[]>([]),
    }
  },
  setup(){

  },
  mounted() {
    this.showLoading()
    this.postRequest()
  },
  methods: {
    async postRequest() {
      try {
        const response = await axios.get("https://script.google.com/macros/s/AKfycbzic3VXCrlQjelTHwtY0jtVl1H1lQoi45zn0u5zClskTtJhUWH4mRahJW8dn8Fs30ze/exec?name=cos");
        this.albumn_cards = response.data;
      } catch (error: any) {
        if (error.request.status == 503) {
          setTimeout(() => {
            console.error(error);
          }, 100);
        } else {
          console.error(error);
        }
      }
    },
    showLoading(){
      let loader = this.$loading.show({
        container: <object>this.$refs.container,
      });
      setTimeout(() => {
        loader.hide();
      },3000)
    }

  }

})

</script>
<template>
  <div>
      <div class="container_fluid" ref="container"  >
        <div class="row justify-content-around">
          <p>{{albumn_cards}}</p>
          <albumn_card v-for="(card, cardIndex) in albumn_cards" :key="cardIndex"
                       :created="card.created"
                       :image_url="card.pic"
                       :title="card.name"
                       :update_date="card.last_update" v-bind:file_count="card.file_count" :id="card.id"/>
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

