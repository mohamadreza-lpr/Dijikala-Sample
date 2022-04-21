<template>
  <div>
    <section class="firstSection">
      <b-row class="justify-content-center">
        <b-col cols="8" style="height: 400px">
          <SliderSection />
        </b-col>
        <b-col cols="4">
          <ProductColumn />
        </b-col>
      </b-row>
      <b-row>
        <b-col class="mr-3 pt-4 secondSection">
          <b-row>
            <b-col>
              <b-img :src="ArrowLeftImg"></b-img>
              <span> صفحه جشنواره </span>
            </b-col>
            <b-col class="text-right">
              <span> جشنواره تابستانه استارموبو با جوایز و تخفیف ویژه </span>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </section>
  </div>
</template>

<script>
import SliderSection from '@/components/SliderSection.vue'
import ProductColumn from '@/components/ProductColumn.vue'
export default {
  name: 'IndexPage',
  component: {
    SliderSection,
    ProductColumn,
  },
  computed: {
    ArrowLeftImg() {
      return require('@/static/arrow/arrow-left.png')
    },
  },
}
</script>

<style scoped>
.firstSection {
  max-width: 1200px;
  height: 510px;
  /* border: 1px solid #ccc; */
  margin: 0px auto;
}
.secondSection {
  height: 80px;
  border-radius: 10px;
  background-image: url('@/static/NoPath12.png');
  background-size: cover;
  color: aliceblue;
}
.aa {
  text-align: right;
}
</style>
