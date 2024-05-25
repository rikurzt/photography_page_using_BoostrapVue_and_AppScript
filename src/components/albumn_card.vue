<script lang="ts" setup>


defineProps<{ title: string, image_url: string, file_count: number, update_date: string, created: string }>()


</script>

<template>
  <div class="col-md-4">
    <div class="profile-card-6"><img class="img img-responsive" v-bind:src="image_url">
      <div class="profile-name">
        {{ title }}Esdfsfsdf
      </div>

      <div class="profile-overview">
        <div class="profile-overview">
          <div class="row">
            <div class="col-xs-4">
              <h3>{{ file_count }}</h3>
              <p>Files</p>
            </div>
            <div class="col-xs-4">
              <h3>{{ update_date }}</h3>
              <p>Last Update</p>
            </div>
            <div class="col-xs-4">
              <h3>{{ created }}</h3>
              <p>Cteated</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<style scoped>

h1,
h2,
h3,
h4,
h5,
h6,
div,
input,
p,
a {
  font-family: "Open Sans";
  margin: 0px;
}

a,
a:hover,
a:focus {
  color: inherit;
}

.container-fluid,
.container {
  max-width: 1200px;
}

.row {
  display: flex;
  justify-content: flex-start;
}

.col-md-4 {
  padding: 0 12px;
}

.col-xs-4 {
  flex: 1;
}

.profile-card-6 {
  max-width: 400px;
  max-height: 300px;
  border-radius: 5px;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  margin: 10px auto;
  cursor: pointer;
}

.profile-card-6 img {
  width: 100%;
  height: 100%;
  margin-top: 8px;
  vertical-align: middle;
  border-radius: 5px;
  opacity: 1;
  cursor: pointer;
  transition: all 0.15s linear;
}

.profile-card-6 .profile-name {
  width: 20%;
  height: 20%;
  position: absolute;
  top: 6px;
  left: 0px;
  font-size: 25px;
  font-weight: bold;
  color: #FFF;
  padding: 20px 20px;
  background: linear-gradient(140deg, rgba(0, 0, 0, 0.4) 50%, rgba(255, 255, 0, 0) 50%);
  transition: all 0.15s linear;
}

.profile-card-6 .profile-position {
  position: absolute;
  color: rgba(255, 255, 255, 0.4);
  left: 30px;
  top: 100px;
  transition: all 0.15s linear;
}

.profile-card-6 .profile-overview {
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 50%, rgba(255, 255, 0, 0));
  color: #FFF;
  padding: 50px 0px 20px 0px;
  transition: all 0.15s linear;
}

.profile-card-6 .profile-overview h3 {
  font-weight: bold;
}

.profile-card-6 .profile-overview p {
  color: rgba(255, 255, 255, 0.7);
}

.profile-card-6:hover img {
  filter: brightness(80%);
}

.profile-card-6:hover .profile-name {
  padding-left: 25px;
  padding-top: 20px;
}

.profile-card-6:hover .profile-position {
  left: 40px;
}

.profile-card-6:hover .profile-overview {
  padding-bottom: 25px;
}
</style>