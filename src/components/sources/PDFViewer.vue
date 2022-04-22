<template>
  <VuePdf v-for="page in numOfPages" :key="page"
    :src="pdfSrc" :page="page"
    enableTextSelection enableAnnotations
  />
</template>
<script>
  import { onMounted,  ref } from 'vue';
  import { VuePdf, createLoadingTask } from 'vue3-pdfjs/esm';
  

  export default {
    components: { VuePdf },
    setup() {
      const pdfSrc = ref('https://firebasestorage.googleapis.com/v0/b/ttrpgoverlays.appspot.com/o/TTRPG%2FMCG%2FCypher_System_Rulebook%20(1).pdf?alt=media&token=8c15b6ee-6247-4d20-b21a-63073b3d8ba2')
      const numOfPages = ref(0)
       onMounted(() => {
      const loadingTask = createLoadingTask(pdfSrc.value)
      loadingTask.promise.then((pdf) => {
        numOfPages.value = pdf.numPages
      })
    })
    return {
      pdfSrc,
      numOfPages
    }
    },
  }

</script>