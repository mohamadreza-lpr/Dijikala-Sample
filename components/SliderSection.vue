<template>
  <div>
        <b-carousel
          v-model="slide"
          :interval="0"
          id="carousel-1"
          controls
          indicators
          background="#ababab"
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Text slides with image -->

          <b-carousel-slide :img-src="SliderImg1">
            <b-row id="sliderImg1" class="justify-content-end">
              <p class="mt-1 font-weight-bold">
                بررسی انواع آیفون در گروه فنی استارموبو
              </p>
              <p style="font-size: 15px">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است
              </p>
            </b-row>
          </b-carousel-slide>

          <!-- Slides with custom text -->
          <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
            <h1>Hello world!</h1>
          </b-carousel-slide>

          <!-- Slides with image only -->
          <b-carousel-slide
            img-src="https://picsum.photos/1024/480/?image=58"
          ></b-carousel-slide>

          <!-- Slides with img slot -->
          <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
          <b-carousel-slide>
            <template #img>
              <img
                class="d-block img-fluid w-100"
                width="1024"
                height="480"
                src="https://picsum.photos/1024/480/?image=55"
                alt="image slot"
              />
            </template>
          </b-carousel-slide>

          <!-- Slide with blank fluid image to maintain slide aspect ratio -->
          <b-carousel-slide
            caption="Blank Image"
            img-blank
            img-alt="Blank image"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse eros felis, tincidunt a tincidunt eget, convallis vel
              est. Ut pellentesque ut lacus vel interdum.
            </p>
          </b-carousel-slide>
        </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    }
  },
  computed: {
    SliderImg1() {
      return require('../static/NoPath11.png')
    },
  },
  methods: {
    // onSlideStart(slide) {
    //   this.sliding = true
    // },
    // onSlideEnd(slide) {
    //   this.sliding = false
    // },
  },
}
</script>

<style scoped>
#sliderImg1 {
  height: 98px;
  filter: opacity(70%);
  backdrop-filter: blur(90px);
  border-radius: 10px;
  padding: 0 2px;
}
#sliderImg1 p {
  color: black;
}
#carousel-1 {
  border-radius: 10px;
  overflow: hidden;
}
</style>
