<template lang="html">
  <div
    class="con-vs-card-actions"
  >
    <slot/>
  </div>
</template>

<script>
import color from '../../utils/color.js'
export default {
  name:'VsCardActions'
}
</script>

<style lang="stylus" scoped>
  .con-vs-card-actions
    display flex
    justify-content flex-end
    align-items center
    padding 5px; 
</style>
