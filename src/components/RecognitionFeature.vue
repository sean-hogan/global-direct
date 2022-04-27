<template>
<div class="top-ten-feature section bg-grey">
    <div class="container px-5 py-5">

   
    <div class="row g-5 p-5">
        <div class="feature col" data-aos="fade" data-aos-duration="500" data-aos-once="true" data-aos-offset="50">
            <div class="card pt-3 px-2 h-100">
                <div class="card-body text-center">
                    <iframe style="border: 0px; margin: 0px; padding: 0px; backgroundcolor: transparent;" src="https://cdn.yoshki.com/iframe/54732.html" frameborder="0" scrolling="no" width="150" height="166" tabindex="-1"></iframe>
                    <span class="visually-hidden">Higher Learning Commission Accredidation Badge</span>
                    <h3 class="mt-3">REGIONALLY ACCREDITED</h3>
                    <p><a href="/about/our-university/accreditation">Regional accreditation</a> by the Higher Learning Commission (HLC) means your degree comes from a top quality, trusted university.</p>

                </div>
            </div><!--end card-->
        </div><!--end col-->

        <div class="feature col" data-aos="fade" data-aos-delay="100" data-aos-duration="500" data-aos-once="true" data-aos-offset="50">
            <div class="card pt-3 px-2 h-100">
                <div class="card-body text-center">
                    <img alt="" src="https://images.prismic.io/csug/5b159c75-3648-4061-9d92-33c417758049_rec_BestColleges.com-School-of-Distinction-Gold.png?auto=compress,format" style="width:auto; height:166px">
                    <span class="visually-hidden">Best Colleges Schools of Distinction Gold Badge</span>

                    <h3 class="mt-3">“GOLD SCHOOL” OF DISTINCTION</h3>
                        <p>In  <a target="_blank" rel="noopener" href="https://www.bestcolleges.com/features/schools-of-distinction/">Best Colleges&rsquo;</a> Schools of Distinction standings, CSU Global earns one of only 15 gold rankings, out of more than 2,000 online degree programs.</p>
                </div>
            </div><!--end card-->
        </div><!--end col-->

        <div class="feature col" data-aos="fade" data-aos-delay="200" data-aos-duration="500" data-aos-once="true" data-aos-offset="50">
            <div class="card pt-3 px-2 h-100">
                <div class="card-body text-center">
                    <img alt="" src="https://images.prismic.io/csug/0079edd7-7884-457d-aae4-138355fe0ff5_rec_Best-Health-Degrees-badge-10-31-19-06.png?auto=compress,format" style="width:auto; height:166px">
                    <span class="visually-hidden">15 Best Online Master’s in Healthcare Administration Badge</span>

                    <h3 class="mt-3">CSU GLOBAL RANKED #2 BEST ONLINE MASTER'S IN HEALTHCARE ADMINISTRATION</h3><p>#2 of 15 Best Online Master’s in Healthcare Administration for 2020, <a target="_blank" rel="noopener" href="https://www.besthealthdegrees.com/best-online-mha-programs">Best Health Degrees</a>.</p>
                </div>
            </div><!--end card-->
        </div><!--end col-->

    </div><!--end row-->
    </div><!--end container-->
    </div><!--end section-->
</template>

<script>
export default {
    name: 'RecognitionFeature',
  props: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.top-ten-feature .card {
    line-height:1.7rem;
    transition: .3s box-shadow;
    box-shadow: 0 4px 8px rgba(0,0,0,.06);
}
.top-ten-feature .card h3 {
    font-size: 16px;
    font-weight: 600;
    letter-spacing: .5px;
    color: #9e1831;
}

.top-ten-feature .card a {
    color: #9e1831;
}

.top-ten-feature .card:hover {
    box-shadow: 2px 5px 30px #999;
}

.feature-col {
    border-left: 1px solid #48afea;
    line-height:1.5em;
    font-size: 30px;
}
</style>
