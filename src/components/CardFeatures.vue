<template>
<div class="features section bg-grey">
    <div class="container px-5 py-5">
        <div class="text-center header">
        <h2 class="my-5">Online Education Isn’t Another Thing We Do, It’s All We Do</h2>
        <p>Learn your way, on your time. Future-facing programs built with purpose for a superior online learning experience and your individual career success.</p>
        </div>
    <div class="row g-5 p-5">
        <div class="feature col">
            <div class="card pt-3 px-2 h-100">
                <div class="card-body">
                    <h3>OPTIMIZED FOR ONLINE</h3>
                    <p>Not all online education is the same. See what makes CSU Global’s experience different.</p>
                        <ul class="">
                        <li><a href="/">What makes a dynamic online education?</a></li>
                        <li><a href="/">What should I know about learning online?</a></li>
                        <li><a href="/">How to be a successful online student?</a></li>
                        <li><a href="/">GI Bill approved schools for military students active duty, veterans, and their families</a></li>
                        </ul>
                </div>
            </div><!--end card-->
        </div><!--end col-->

        <div class="feature col">
            <div class="card pt-3 px-2 h-100">
                <div class="card-body">
                    <h3>LEARNING TAILORED TO YOU</h3>
                    <p>Your career path requires more than just access to materials. We understand your specific needs</p>
                        <ul>
                        <li><a href="/">Customized and personalized learning paths</a></li>
                        <li><a href="/">Free and low-cost non-credit options based on your specific career needs and personal interests through Global Learn</a></li>
                        </ul>
                </div>
            </div><!--end card-->
        </div><!--end col-->

        <div class="feature col">
            <div class="card pt-3 px-2 h-100">
                <div class="card-body">
                    <h3>EXPERTS WITH PROVEN RESULTS</h3>
                    <p>Our data-driven methods help students succeed and ensure faculty and higher education can evolve.</p>
                        <ul>
                        <li><a href="/">How we work to ensure value and return on your educational investment</a></li>
                        <li><a href="/">Sharing what we learn in online faculty and course development best practices</a></li>
                        </ul>
                </div>
            </div><!--end card-->
        </div><!--end col-->

    </div><!--end row-->
    </div><!--end container-->
    </div><!--end section-->
</template>

<script>
export default {
    name: 'CardFeatures',
  props: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.feature .card {
    line-height:1.7rem;
    transition: .3s box-shadow;
    box-shadow: 0 4px 8px rgba(0,0,0,.06);
}

.feature .card:hover {
    box-shadow: 2px 5px 30px #999;
}

.feature .card h3 {
    letter-spacing: 1px;
    font-size: 18px;
    font-weight: 700;
}

.feature .card h3:after {
    content: "";
    display: block;
    margin-top:20px;
    margin-bottom: 20px;
    position: relative;
    width: 60px;
    height: 5px;
    background-color: #18c9b9;
}

.feature .card li a {
    text-decoration: none;
    color:#9e1831;
}

.feature .card li a:hover {
    color:#333;
}


</style>
