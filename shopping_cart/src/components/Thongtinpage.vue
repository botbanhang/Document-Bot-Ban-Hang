<template>
  <!-- eslint-disable -->
  <section>
    <div class="super_container_inner">
      <div class="super_overlay"></div>

      <div class="product">
        <div class="container">
          <div class="row">
            <!-- Product Image -->
            <div class="col-lg-6">
              <h2>Liên hệ với chúng tôi trên facebook:</h2>
            </div>

            <!-- Product Info -->
            <div class="col-lg-6 product_col">
              <div class="product_info">
                <div class="product_name">
                  <a v-bind:href="'https://facebook.com/' + thongtin.pageid">{{thongtin.name}}</a>
                </div>
                <p>{{thongtin.textFreeShip}}</p>
              </div>
            </div>
            <div style="min-height: 25rem"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      thongtin: {}
    };
  },
  mounted() {
    this.thongtinpage();
  },
  methods: {
    thongtinpage: async function() {
      this.thongtin = await BotBanHang.page.getPage();
    }
  }
};
</script>

<style>
</style>
