<template>
  <div>
    <!-- Top Header -->
    <b-navbar v-if="topHeaderDisplay" id="firstNav" align-v="center">
      <b-col cols="3"></b-col>
      <b-col class="text-center" cols="8">
        <h6 class="text-white">جشنواره تابستانه دیجیکالا</h6>
      </b-col>
      <b-col>
        <b-img
          @click="topHeaderDisplayHandler"
          :src="Ximg"
          style="width: 10px; height: 10px; cursor: pointer"
        ></b-img>
      </b-col>
    </b-navbar>
    <!-- Main Header -->
    <b-navbar id="mainHeader" toggleable="lg" type="dark">
      <b-navbar-nav>
        <b-nav-item href="#">
          <span id="shoppingcard">
            <b-img :src="ShopingCard" style="margin-bottom: 2px"></b-img>
          </span>
        </b-nav-item>
        <div class="mt-2">
          <a href="#" class="text-dark font-weight-bold ml-1">
            <b-img :src="Telephone"></b-img>
            <span class="text-secondary">041</span>35564126
          </a>
        </div>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto" style="cursor: pointer; margin-right: 85px">
        <b-nav-item class="mr-5">
          <b-img :src="ArrowLeft" style="width: 14px; height: 14px"> </b-img>
          <span class="mr-1 text-dark">دسته بندی</span>
          <b-img :src="Menu" style="width: 24px; height: 24px"> </b-img>
        </b-nav-item>
        <b-navbar-brand class="ml-3 text-secondary" href="#">
          BRAND LOGO
        </b-navbar-brand>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      topHeaderDisplay: true,
    }
  },
  computed: {
    Ximg() {
      return require('../static/Union1.png')
    },
    ArrowLeft() {
      return require('../static/arrow-left.png')
    },
    Menu() {
      return require('../static/menu.png')
    },
    ShopingCard() {
      return require('../static/shopping-cart.png')
    },
    Telephone() {
      return require('../static/Telephone.png')
    },
  },
  methods: {
    topHeaderDisplayHandler() {
      this.topHeaderDisplay = false
    },
  },
}
</script>

<style scoped>
#firstNav {
  background-image: url('static/NoPath7.png');
  background-size: cover;
  height: 50px;
}
#mainHeader {
  height: 112px;
  padding-left: 250px;
}
h6.text-white {
  margin-right: 265px;
}
#shoppingcard {
  border: 0.5px solid #f5f5f5;
  border-radius: 8px;
  padding: 10px;
}
</style>
