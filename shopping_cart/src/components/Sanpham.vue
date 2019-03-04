<template>
  <section>
    <div class="super_container_inner">
      <div class="super_overlay"></div>
      <div class="products">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 offset-lg-3">
              <div class="section_title text-center">Danh mục</div>
            </div>
          </div>
          <!-- danh mục -->
          <div class="row page_nav_row">
            <div class="col">
              <div class="page_nav">
                <ul class="d-flex flex-row align-items-start justify-content-center">
                  <li>
                    <a v-on:click="hienthi('', 0)" href="javascript:;">Tất cả sản phẩm</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="row page_nav_row">
            <div class="col">
              <div class="page_nav">
                <ul class="d-flex flex-row align-items-start justify-content-center">
                  <span v-for="item in danhmuc" v-bind:key="item.id">
                    <li v-for="item2 in item.subCategories" v-bind:key="item2.id">
                      <a v-on:click="hienthi(item2.id, 0)" href="#">{{item2.title}}</a>
                    </li>
                  </span>
                </ul>
              </div>
            </div>
          </div>
          <!-- sản phẩm -->
          <div class="row products_row">
            <!-- Product -->
            <div
              height="50"
              v-for="item in sanpham"
              v-bind:key="item.id"
              class="col-xl-4 col-md-6 col-12"
            >
              <div class="product">
                <div class="product_image">
                  <img v-bind:src="item.images_url[0]" alt>
                </div>
                <div class="product_content">
                  <div class="product_info d-flex flex-row align-items-start justify-content-start">
                    <div>
                      <div>
                        <div style="overflow: hidden;" class="product_name">
                          <a href="javascript:;">{{item.title}}</a>
                        </div>
                      </div>
                    </div>
                    <div class="ml-auto text-right">
                      <div class="rating_r rating_r_4 home_item_rating">
                        Giá gốc: {{item.price}}
                        <span>{{item.symbol}}</span>
                      </div>
                      <div class="product_price text-right">
                        {{item.discount}}
                        <span>{{item.symbol}}</span>
                      </div>
                    </div>
                  </div>
                  <div class="product_buttons">
                    <div class="text-right d-flex flex-row align-items-start justify-content-start">
                      <div
                        v-on:click="themvaogiohang(item)"
                        class="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center"
                      >
                        <div>
                          <div>
                            <img src="../assets/images/cart.svg" class="svg" alt>
                            <div>+</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- xem thêm -->
          <div class="row load_more_row">
            <div class="col">
              <div class="button load_more ml-auto mr-auto">
                <a v-on:click="xemthem(iddanhmuc)" href="javascript:;">Xem thêm</a>
              </div>
            </div>
          </div>
          <!-- test gui kb -->
          <div class="row">
            <div class="col">
              <div class="button load_more ml-auto mr-auto">
                <a v-on:click="guikb()" href="javascript:;">guikb</a>
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
  props: ["search"],
  data() {
    return {
      skip: 0,
      danhmuc: [],
      iddanhmuc: "",
      sanpham: []
    };
  },
  watch: {
    search: function(newval, oldval) {
      this.hienthi("", 0, newval);
    }
  },
  mounted: async function() {
    await this.laydanhmuc();
    await this.hienthi("", 0, "");
    await this.getcart();
  },
  methods: {
    //test gui kb
    async guikb() {
      var chay = await BotBanHang.user.activeFlow({
        flow: "5c7b77887bce6d001244ec95"
      });
      console.log("guikb", chay);
    },

    getcart: async function() {
      var soluong = await BotBanHang.order.getCart();
      soluong = await soluong.total_quantity;
      this.$emit("soluong", soluong);
    },
    laydanhmuc: async function() {
      this.danhmuc = await BotBanHang.category.getCategory();
    },
    hienthi: async function(id, skip, search) {
      this.skip = await 0;
      this.iddanhmuc = await id;
      this.sanpham = await BotBanHang.category.getListProduct({
        parent: id,
        limit: "6",
        skip: skip,
        search: search || ""
      });
    },
    xemthem: async function(id) {
      this.skip += await 6;
      let response = await BotBanHang.category.getListProduct({
        parent: id,
        limit: "6",
        skip: this.skip,
        search: this.search || ""
      });
      response.forEach(element => {
        this.sanpham.push(element);
      });
    },
    themvaogiohang: async function(item) {
      var flag = await true;
      var getcart = await BotBanHang.order.getCart();
      var neworders = await getcart.orders;
      neworders.forEach(element => {
        if (element.id == item.id) {
          this.$swal("Đã thêm vào giỏ hàng!");
          flag = false;
          return;
        }
      });
      if (flag == true) {
        await neworders.push({
          id: item.id,
          title: item.title,
          price: item.price,
          discount: item.discount,
          images_url: item.images_url,
          quantity: 1
        });
        var updatecart = await BotBanHang.order.updateCart({
          orders: neworders
        });
        this.$swal("Đã thêm vào giỏ hàng!");
      }
      var soluong = await BotBanHang.order.getCart();
      soluong = await soluong.total_quantity;
      this.$emit("soluong", soluong);
    }
  }
};
</script>

<style>
</style>
