<template>
  <section>
    <header class="header">
      <div class="header_overlay"></div>
      <div class="header_content d-flex flex-row align-items-center justify-content-start">
        <div class="logo">
          <router-link to="/sanpham">
            <div class="d-flex flex-row align-items-center justify-content-start">
              <div>
                <img src="https://botbanhang.vn/fav.png" alt>
              </div>
              <div>BBH Shop SDK</div>
            </div>
          </router-link>
        </div>
        <div class="header_right d-flex flex-row align-items-center justify-content-start ml-auto">
          <div class="header_search">
            <div id="header_search_form">
              <input
                v-on:keyup.enter="$emit('search', search)"
                v-model="search"
                type="text"
                class="search_input"
              >
              <button v-on:click="$emit('search', search)" class="header_search_button">
                <img src="../../assets/images/search.png" alt>
              </button>
            </div>
          </div>

          <div class="menu_search" style="margin-top: 44px;">
            <div id="menu_search_form" class="menu_search_form">
              <input
                v-on:keyup.enter="$emit('search', search)"
                v-model="search"
                type="text"
                class="search_input"
              >
              <button v-on:click="$emit('search', search)" class="menu_search_button">
                <img src="../../assets/images/search.png" alt>
              </button>
            </div>
          </div>
          <div class="user">
            <router-link to="/giohang">
              <div>
                <img src="../../assets/images/cart.svg">
                <div>{{soluong}}</div>
              </div>
            </router-link>
          </div>
          <div class="cart">
            <router-link to="/thongtin">
              <div>
                <img class="svg" src="../../assets/images/user.svg">
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </header>
  </section>
</template>

<script>
/* eslint-disable */
export default {
  props: ["soluong"],
  data() {
    return {
      search: ""
    };
  }
};
</script>

<style>
</style>
