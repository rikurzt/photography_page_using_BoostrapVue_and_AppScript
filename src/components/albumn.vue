<script setup lang="ts">

import Albumn_card from "./albumn_card.vue";

import axios from "axios";
import {defineComponent} from "vue";

interface Albumn {
  id: string;
  name:string;
  image_id:string;
}
interface albumn_id {
  id: string;
}

defineComponent({
  name: 'Albumn_select',
  data() {
    return {
      images: [] as Albumn[],
      photo_ids:[] as albumn_id[]
    };

  },
  async mounted() {
    await this.postRequest()
  },
  computed: {
    columns(): Albumn[][] {
      const columns: Albumn[][] = [[], [], []];

      this.photo_ids.forEach((photo_id,index) =>{
        this.images.push({src:"https://lh3.google.com/u/7/d/"+photo_id.id,height:1})
      });
      columns[index%4].push(image);
      return columns;
    }
  },
  methods:{
    postRequest(){
      axios.get("https://script.google.com/macros/s/AKfycbyrG720TP1U9rnoyny_5ZUJQXj8BwZ5G-pl0o4CHUS5i3XA5wEW1Kdn7Nnm5lNdqDAv/exec?id=10Dks7QAUd8iNZ7XhcezilzfjWpGNhgaD")
          .then((res: any) => {
            res = JSON.stringify(res.data)
            res = JSON.parse(res)
            this.photo_ids = res;

          })
          // Manage errors if
          .catch(error => {
            if (error.request.status == 503) {
              setTimeout(() => {
                console.error(error);
              }, 0.1);
            }
          })
    },
  }
});



</script>

<template>
  <div>
    <div class="container_fluid">
      <div class="row">
        <div class="column" v-for="(columnImages, columnIndex) in columns" :key="columnIndex">
          <albumn_card  v-for="(columnImages, columnIndex) in images "title="test" text="test" image_url="https://lh3.google.com/u/7/d/1eiLdj2E0FwqlNSKnDF96S0_4K3EoB2GA=w1825-h970-iv1" update_date ="2024-5-5" created ="2024-5-4" />
        </div>


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

.column {
  flex: 25%;
  max-width: 50%;
  padding: 0 4px;
}
</style>