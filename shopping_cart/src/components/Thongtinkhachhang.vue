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
              {{thongtin.avatar}}
              <img src="../assets/images/product_image_1.jpg">
            </div>

            <!-- Product Info -->
            <div class="col-lg-6 product_col">
              <div class="product_info">
                <div class="product_name">{{thongtin.name}}</div>
                <p>Giới tính: {{thongtin.gender}}</p>
                <div class="product_category">
                  Địa chỉ:
                  <a href="category.html">{{thongtin.address}}</a>
                </div>
                <p>Số điện thoại: {{thongtin.phone}}</p>
              </div>
            </div>
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
    this.thongtinkhachhang();
  },
  methods: {
    thongtinkhachhang: async function() {
      this.thongtin = await BotBanHang.user.me();
    }
  }
};
</script>

<style>
</style>
