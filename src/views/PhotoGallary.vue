<template>
  <div>
    <h1>{{ title }}</h1>
    <div class="container-fluid" ref="gallery" >
      <div class="row">
        <div v-for="(columnImages, columnIndex) in columns" :key="columnIndex" class="column">
          <img v-for="(image, imageIndex) in columnImages" :key="imageIndex" :src="image.src" class="img-fluid"/>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts" setup>

  defineProps<{ title: string, id: string }>()

</script>

<script lang="ts">
import {defineComponent} from 'vue';
import axios from "axios";


interface Image {
  src: string;
  height: number;
}

interface photo_id {
  id: string;
}

export default defineComponent({
  name: 'ImageGallery',
  data() {
    return {
      images: [] as Image[],
      photo_ids: [] as photo_id[],
      show: true
    };

  },
  async mounted() {
    this.showLoading()
    await this.postRequest()
  },
  computed: {
    columns(): Image[][] {
      const columns: Image[][] = [[], [], []];
      const columnHeights: number[] = [0, 0, 0];
      this.photo_ids.forEach((photo_id) => {
        this.images.push({src: "https://lh3.google.com/u/7/d/" + photo_id.id, height: 1})

      });
      this.images.forEach((image) => {
        const minHeightIndex = columnHeights.reduce((minIdx, height, idx, heights) => height < heights[minIdx] ? idx : minIdx, 0);
        columns[minHeightIndex].push(image);
        columnHeights[minHeightIndex] += image.height;
      });
      this.show = false;
      return columns;
    }
  },
  methods: {
    postRequest() {
      this.show = true;
      axios.get("https://script.google.com/macros/s/AKfycbyrG720TP1U9rnoyny_5ZUJQXj8BwZ5G-pl0o4CHUS5i3XA5wEW1Kdn7Nnm5lNdqDAv/exec?id="+this.id)
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
    showLoading(){
      let loader = this.$loading.show({
        container: <object>this.$refs.gallery,
      });
      setTimeout(() => {
        loader.hide();
      },3000)
    }
    /*
    getImageHeight(url: string): Promise<number> {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img.height);
        img.onerror = reject;
        img.src = url;
      });
    }*/
  }
});
</script>

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

.column img {
  width: 100%;
  margin-top: 8px;
  vertical-align: middle;
  border-radius: 5px;
  opacity: 1;
  cursor: pointer;
  transition: all 0.15s linear;
}

.column img:hover {
  filter: brightness(70%);
}

@media screen and (max-width: 800px) {
  .column {
    flex: 45%;
    max-width: 50%;


  }
}

@media screen and (max-width: 600px) {
  .column {

    flex: 100%;
    max-width: 100%;
  }

  .column img {
    filter: grayscale(0) brightness(1);
  }
}
</style>
