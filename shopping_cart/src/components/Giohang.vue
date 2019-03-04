<template>
  <!-- eslint-disable -->
  <div class="super_container_inner">
    <div class="super_overlay"></div>
    <!-- Cart -->
    <div class="cart_section" style="margin-top: 100px;">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="cart_container">
              <!-- Cart Bar -->
              <div class="cart_bar">
                <ul
                  class="cart_bar_list item_list d-flex flex-row align-items-center justify-content-end"
                >
                  <li class="mr-auto">Sản phẩm</li>
                  <li>Giá</li>
                  <li>Giá gốc</li>
                  <li>Số lượng</li>
                </ul>
              </div>

              <!-- Cart Items -->
              <div class="cart_items">
                <ul v-for="item in giohang.orders" v-bind:key="item.id" class="cart_items_list">
                  <!-- Cart Item -->
                  <li
                    class="cart_item item_list d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-end justify-content-start"
                  >
                    <div
                      class="product d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start mr-auto"
                    >
                      <div>
                        <div class="cart_image">
                          <img :src="item.images_url[0]" alt>
                        </div>
                      </div>
                      <div class="product_name_container">
                        <div class="product_name">
                          <a href="javascript:;">{{item.title}}</a>
                        </div>
                      </div>
                    </div>

                    <div class="product_price product_text">{{item.discount}}đ</div>
                    <div class="product_total product_text">{{item.price}}đ</div>
                    <div class="product_quantity_container">
                      <div class="product_quantity ml-lg-auto mr-lg-auto text-center">
                        <span class="product_text product_num">{{item.quantity}}</span>
                        <div
                          v-on:click="soluong(item.id,'-')"
                          class="qty_sub qty_button trans_200 text-center"
                        >
                          <span>-</span>
                        </div>
                        <div
                          v-on:click="soluong(item.id,'+')"
                          class="qty_add qty_button trans_200 text-center"
                        >
                          <span>+</span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <!-- Cart Buttons -->
              <div class="cart_buttons d-flex flex-row align-items-start justify-content-start">
                <div class="product_name">Tổng tiền: {{giohang.total_price}}đ</div>
                <div
                  class="cart_buttons_inner ml-sm-auto d-flex flex-row align-items-start justify-content-start flex-wrap"
                >
                  <div class="button button_clear trans_200">
                    <a v-on:click="xoagiohang" href="javascript:;">XóaGiỏHàng</a>
                  </div>
                  <div class="button button_continue trans_200">
                    <router-link to="/lienhe" href="javascript:;">Thanhtoán</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      giohang: {}
    };
  },
  mounted() {
    this.xemgiohang();
  },
  methods: {
    xemgiohang: async function() {
      this.giohang = await BotBanHang.order.getCart();
      var soluong = await this.giohang.total_quantity;
      this.$emit("soluong", soluong);
    },
    soluong: async function(id, tanggiam) {
      await this.giohang.orders.forEach(element => {
        if (element.id == id) {
          if (tanggiam == "+") {
            element.quantity++;
          } else {
            if (element.quantity >= 2) element.quantity--;
          }
        }
      });
      var updatecart = await BotBanHang.order.updateCart({
        orders: this.giohang.orders
      });
      this.xemgiohang()
      var soluong = await BotBanHang.order.getCart();
      soluong = await soluong.total_quantity;
      this.$emit("soluong", soluong);
    },
    xoagiohang: async function() {
      var response = await BotBanHang.order.updateCart({
        orders: []
      });
      this.$swal("Đã xóa giỏ hàng!");
      this.xemgiohang();
      var soluong = await BotBanHang.order.getCart();
      soluong = await soluong.total_quantity;
      this.$emit("soluong", soluong);
    }
  }
};
</script>

<style>
</style>
