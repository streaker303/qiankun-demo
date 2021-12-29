<template>
  <div class="home">
    我是main-store中的commonData <span>{{commonData}}</span><br>
    我是main-store中的name <span>{{commonObj.name}}</span><br>
    我是main-store中的age <span>{{commonObj.age}}</span><br>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  computed:{
    ...mapState([
      'commonData',
      'commonObj',
    ])
  },
  data() {
    return {}
  }
}
</script>
<style scoped>
.home span{
  color: deepskyblue;
  font-weight: bold;
}
</style>
