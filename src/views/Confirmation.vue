<template>
    <ConfirmationBanner />
  <main id="main-content" class="confirmation">
    <ConfirmationContent />
  </main>
</template>


<script>
// @ is an alias to /src
import ConfirmationBanner from '@/components/ConfirmationBanner.vue'
import ConfirmationContent from '@/components/ConfirmationContent.vue'

export default {
  name: 'Confirmation',
  components: {
    ConfirmationBanner,
    ConfirmationContent,
      },
      mounted() {
        document.title = 'CSU Global Direct' + ' | ' + 'Confirmation'
      },
}
</script>


