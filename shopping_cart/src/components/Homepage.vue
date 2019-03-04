<template>
  <section>
    <div class="super_container">
      <Header @search="truyensearch" :soluong="soluong"></Header>
      <router-view :search="search" @soluong="truyensoluong"></router-view>
      <Footer></Footer>
    </div>
  </section>
</template>

<script>
/* eslint-disable */
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      search: [],
      soluong: ""
    };
  },
  methods: {
    async truyensearch(value) {
      this.search = await value;
    },
    async truyensoluong(value) {
      this.soluong = await value;
    }
  }
};
</script>

<style>
</style>
