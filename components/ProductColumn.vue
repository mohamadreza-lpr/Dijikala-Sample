<template>
  <div>
    <b-row align-v="center" class="product text-right mt-2" v-for="product in Products" :key="product.index">
      <b-col class="d-flex flex-column" cols="9">
        <b-col>
          <h6>{{ product.title }}</h6>
        </b-col>

        <b-col>
          <span class="mr-1 spanColor text-secondary">
              {{ product.description }}
          </span>
        </b-col>
      </b-col>
      <b-col class="text-center" cols="3">
          <b-img class="bg-img p-2" :src="product.image"></b-img>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.Products)
  },
  computed: {
    Products() {
      return this.$store.state.products
    },
  },
}
</script>

<style scoped>
.product {
  height: 113px;
  /* border: 1px solid rgb(0, 0, 0); */
  border-radius: 10px;
  box-shadow: 1px 1px 5px #ccc;
  margin: 0px 30px;
}
.product:hover{
    background-color: #0066FF;
    color:aliceblue
}
.product:hover span{
    color: #B4D1FF;
}
.bg-img{
    background-color: #4E92FF;
    border-radius: 10px;
}
</style>
