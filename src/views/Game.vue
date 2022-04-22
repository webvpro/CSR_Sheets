<template>
    <div class="container relative w-full h-full" >
        <DiceCanvas />
        <div class="absolute inset-0 z-20">
        <h1>Th9ing</h1>
        </div>
    </div>
</template>
<script>
import { toRefs, reactive } from 'vue'
import { useAuthState } from '@/modules/firebase'
import DiceCanvas from '@/components/canvas/dice.vue'

export default {
  components: {
    DiceCanvas
  },

  setup() {
    const state = reactive({
        games:[],
        loading: false,
        openForm: false,
        game: {},
        error: null,
    });  
    const { user } = useAuthState()
     
    
    return {
      user,
      ...toRefs(state),
    }
  },
}
</script>