<template>
<section class="calendar-embed section my-5" aria-labelledby="calendar-header">
    <div class="container">
        <div class="row justify-content-center">

<div class="header text-center mb-4" data-aos="fade" data-aos-duration="500" data-aos-once="true" data-aos-offset="50">
    <h2 id="calendar-header">CSU Global Direct Calendar</h2>
</div>
<div class="h4 d-flex mb-5 g-0" data-aos="fade" data-aos-duration="500" data-aos-once="true" data-aos-offset="50">

    <div class="col text-center">
    <i class="h1 bi bi-lightning"></i>
    <br />No Wait to Get Started
    </div>

    <div class="col text-center">
    <i class="h1 bi bi-calendar2-check"></i>
    <br />Classes Start Every Four Weeks
    </div>

    <div class="col text-center">
    <i class="h1 bi bi-bank"></i>
    <br />Earn Transferable College Credit<sup @click="showModal" aria-hidden="true"><i class="bi bi-info-circle-fill ms-2"></i></sup>
    <span class="visually-hidden">
        CSU Global Direct courses are accredited through the <a class="link-success" href="https://www.hlcommission.org/" target="_blank">Higher Learning Commission</a>.
        We recommend that you also check with your selected institution regarding the transfer credit.
    </span>
    </div>

</div>
<!-- <div class="lead col-sm-8 mb-5">At CSU Global, classes start every 4 weeks, which means you don’t have to wait to start earning college credits towards your degree or wait to fulfill your prerequisites for a graduate program.</div> -->

  <div ref="calendarEmbed" class="border">   
  </div><!--End embed wrap-->
  <div class="visually-hidden">
      <table>
  <tr>
    <th>Term</th>
    <th>Start Date</th>
    <th>End Date</th>
  </tr>

  <tr>
    <td>Spring C</td>
    <td>May 16, 2022</td>
    <td>July 10, 2022</td>
  </tr>
  <tr>
    <td>Spring D</td>
    <td>June 13, 2022</td>
    <td>August 7, 2022</td>
  </tr>
  <tr>
    <td>Fall A</td>
    <td>July 18, 2022</td>
    <td>September 11, 2022</td>
  </tr>
  <tr>
    <td>Fall B</td>
    <td>August 15, 2022</td>
    <td>October 9, 2022</td>
  </tr>
  <tr>
    <td>Fall C</td>
    <td>September 12, 2022</td>
    <td>November 6, 2022</td>
  </tr>
  <tr>
    <td>Fall D</td>
    <td>October 10, 2022</td>
    <td>December 4, 2022</td>
  </tr>

</table>
  </div>

        </div><!--end row-->
    </div><!--end contain-->
</section><!--end section-->

<!-- Modal -->
<div class="modal fade" id="transferableCreditModal" tabindex="-1" aria-labelledby="transferableCreditModal" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content px-4 pb-2">
      <div class="modal-header border-0 pb-1">
        <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
      </div>
<p class="pt-3">
CSU Global Direct courses are accredited through the <a class="link-success" href="https://www.hlcommission.org/" target="_blank">Higher Learning Commission</a>.</p>

<p class="pt-3">
We recommend that you also check with your selected institution regarding the transfer credit.</p>


    </div>
  </div>
</div><!---end modal-->



</template>

<script>
import { Modal } from 'bootstrap';


export default {
  name: 'CalendarEmbed',
  mounted() {
    let scriptEl = document.createElement('script');
    scriptEl.setAttribute('src', 'https://e.infogram.com/js/dist/embed.js?F4H');
    scriptEl.setAttribute('id', 'infogram_0__/MK1o0hPk1HGoQr9deg6w');
    console.log(scriptEl);
    this.$refs.calendarEmbed.appendChild(scriptEl);
},
    methods:{
        showModal(){
            this.myModal = new Modal(document.getElementById('transferableCreditModal'), {})
            this.myModal.show()
        },
        closeModal(){
            this.myModal.hide()
        },
    }
}
</script>

<!-- Add "scoped" sugar to limit CSS to this component only -->
<style scoped lang="scss">
.bi-info-circle-fill {
    font-size:.8rem;
    cursor:pointer;
}
</style>
