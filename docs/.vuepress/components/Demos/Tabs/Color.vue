<template lang="html">
  <div class="">
    <vs-tabs :vs-color="colorx">
      <vs-tab @click="colorx = 'success'" vs-label="Success">
        <div class="con-tab-ejemplo">
          Success
        </div>
      </vs-tab>
      <vs-tab @click="colorx = 'danger'" vs-label="Danger">
        <div class="con-tab-ejemplo">
          Danger
        </div>
      </vs-tab>
      <vs-tab @click="colorx = 'warning'" vs-label="Warning">
        <div class="con-tab-ejemplo">
          Warning
        </div>
      </vs-tab>
      <vs-tab @click="colorx = 'dark'" vs-label="Dark">
        <div class="con-tab-ejemplo">
          Dark
        </div>
      </vs-tab>
        <vs-tab @click="colorx = 'rgb(16, 233, 179)'" vs-label="RGB | HEX">
        <div class="con-tab-ejemplo">
          RGB | HEX
        </div>
      </vs-tab>
    </vs-tabs>
  </div>
</template>

<script>
export default {
  data:()=>({
    colorx:'success'
  }),
}
</script>

<style lang="css">
</style>
