<template>
    <RFIConfirmationBanner />
  <main id="main-content" class="confirmation">
    <RFIConfirmationContent />
  </main>
</template>


<script>
// @ is an alias to /src
import RFIConfirmationBanner from '@/components/RFIConfirmationBanner.vue'
import RFIConfirmationContent from '@/components/RFIConfirmationContent.vue'

export default {
  name: 'RFIConfirmation',
  components: {
    RFIConfirmationBanner,
    RFIConfirmationContent,
      },
      mounted() {
        document.title = 'CSU Global Direct' + ' | ' + 'Confirmation'
      },
}
</script>


