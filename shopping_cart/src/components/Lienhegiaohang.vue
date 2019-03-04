<template>
  <!-- eslint-disable -->
  <section>
    <div class="checkout">
      <div class="container">
        <div class="row">
          <!-- Billing -->
          <div class="col-lg-6">
            <div class="billing">
              <div class="checkout_title">Thông tin liên hệ</div>
              <div class="checkout_form_container">
                <div id="checkout_form" class="checkout_form">
                  <div class="row">
                    <div class="col-lg-12">
                      <ul>
                        <li
                          v-for="item in lienhe"
                          v-bind:key="item.id"
                          class="shipping_option d-flex flex-row align-items-center justify-content-start"
                        >
                          <label class="radio_container">
                            <input
                              v-on:change="chonlienhe(item)"
                              type="radio"
                              id="radio_3"
                              name="payment_radio"
                              class="payment_radio"
                            >
                            <span class="radio_mark"></span>
                            <span class="radio_text">
                              {{item.name}} - {{item.tel}}
                              <br>
                              Địa chỉ: {{item.address}} - {{item.district}} - {{item.province}}
                            </span>
                            <span v-on:click="xoadiachi(item.id)">
                              <i class="fa fa-trash"></i>
                            </span>
                          </label>
                        </li>

                        <li
                          class="shipping_option d-flex flex-row align-items-center justify-content-start"
                        >
                          <label class="radio_container">
                            <input
                              v-on:click="anhien = true"
                              type="radio"
                              id="radio_3"
                              name="payment_radio"
                              class="payment_radio"
                            >
                            <span class="radio_mark"></span>
                            <span class="radio_text">Thông tin khác</span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div v-if="anhien">
                    <div>
                      <!-- Company -->
                      <input
                        v-model="lienhemoi.name"
                        type="text"
                        id="checkout_company"
                        placeholder="Họ tên"
                        class="checkout_input"
                      >
                    </div>
                    <div>
                      <!-- Company -->
                      <input
                        v-model="lienhemoi.email"
                        type="text"
                        id="checkout_company"
                        placeholder="Email"
                        class="checkout_input"
                      >
                    </div>
                    <div>
                      <!-- Company -->
                      <input
                        v-model="lienhemoi.tel"
                        type="text"
                        id="checkout_company"
                        placeholder="Số điện thoại"
                        class="checkout_input"
                      >
                    </div>
                    <div>
                      <!-- Company -->
                      <input
                        v-model="lienhemoi.address"
                        type="text"
                        id="checkout_company"
                        placeholder="Địa chỉ"
                        class="checkout_input"
                      >
                    </div>
                    <div>Mã tỉnh
                      <!-- Country -->
                      <select
                        v-model="lienhemoi.province.code"
                        v-on:change="gethuyen"
                        name="Tỉnh"
                        id="checkout_country"
                        class="dropdown_item_select checkout_input"
                        require="required"
                      >
                        <option
                          v-for="item in tinh"
                          v-bind:key="item.code"
                          v-bind:value="item.code"
                        >{{item.name}}</option>
                      </select>
                    </div>
                    <div v-if="anhienhuyen()">Mã huyện
                      <!-- Country -->
                      <select
                        v-model="lienhemoi.district.code"
                        name="Thành phố"
                        id="checkout_country"
                        class="dropdown_item_select checkout_input"
                        require="required"
                      >
                        <option
                          v-for="item in huyen"
                          v-bind:key="item.code"
                          v-bind:value="item.code"
                        >{{item.name}}</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Cart Total -->
          <div class="col-lg-6 cart_col">
            <div class="cart_total">
              <div class="cart_extra_content cart_extra_total">
                <div class="checkout_title">Tổng đơn</div>
                <ul class="cart_extra_total_list">
                  <li class="d-flex flex-row align-items-center justify-content-start">
                    <div class="cart_extra_total_title">Tổng sản phẩm</div>
                    <div class="cart_extra_total_value ml-auto">{{giohang.total_quantity}}</div>
                  </li>
                  <li class="d-flex flex-row align-items-center justify-content-start">
                    <div class="cart_extra_total_title">Tổng cộng</div>
                    <div class="cart_extra_total_value ml-auto">{{giohang.total_price}}đ</div>
                  </li>
                </ul>
                <div class="payment_options">
                  <div class="checkout_title">Hình thức thanh toán</div>
                  <ul>
                    <li
                      class="shipping_option d-flex flex-row align-items-center justify-content-start"
                    >
                      <label class="radio_container">
                        <input
                          type="radio"
                          id="radio_3"
                          name="payment_radio"
                          class="payment_radio"
                          checked
                        >
                        <span class="radio_mark"></span>
                        <span class="radio_text">Thanh toán khi nhận hàng</span>
                      </label>
                    </li>
                  </ul>
                </div>
                <div class="cart_text">
                  <p>Quý khách sẽ thanh toán bằng tiền mặt khi giao hàng cho quý khách</p>
                </div>
                <div class="checkout_button trans_200">
                  <a v-on:click="dathang" href="javascript:;">Đặt hàng</a>
                </div>
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
      anhien: true,
      lienhemoi: {
        id: "",
        name: "",
        email: "",
        tel: "",
        address: "",
        province: {
          code: "",
          name: "Tỉnh thành"
        },
        district: {
          code: "",
          name: "Quận huyện"
        }
      },

      giohang: {},
      lienhe: {},

      tinh: [],
      huyen: []
    };
  },
  mounted() {
    this.xemgiohang();
    this.xemthongtinlienhe();
    this.gettinh();
  },
  methods: {
    xemthongtinlienhe: async function() {
      this.lienhe = await BotBanHang.user.getContacts();
    },
    xemgiohang: async function() {
      this.giohang = await BotBanHang.order.getCart();
      var soluong = await this.giohang.total_quantity;
      this.$emit("soluong", soluong);
    },
    async gettinh() {
      this.tinh = await BotBanHang.geo.getProvince();
    },
    anhienhuyen() {
      if (this.lienhemoi.province.code != "") return true;
      else return false;
    },
    async gethuyen() {
      this.huyen = await BotBanHang.geo.getDistrict(
        this.lienhemoi.province.code
      );
    },
    chonlienhe(thongtin) {
      this.anhien = false;
      this.lienhemoi = {
        id: thongtin.id,
        name: thongtin.name,
        email: thongtin.email,
        tel: thongtin.tel,
        address: thongtin.address,
        province: {
          code: thongtin.province,
          name: ""
        },
        district: {
          code: thongtin.district,
          name: ""
        }
      };
    },
    async xoadiachi(id) {
      await BotBanHang.user.removeContact(id);
      this.xemthongtinlienhe();
    },
    async dathang() {
      if (this.anhien == false) {
        await BotBanHang.order.checkout({
          order: { id: this.giohang.id }, // ID của giỏ hàng

          contact: this.lienhemoi.id, // ID thông tin người mua
          name_ship: this.lienhemoi.name,
          tel_ship: this.lienhemoi.tel,
          address_ship: this.lienhemoi.address,
          province_ship: this.lienhemoi.province.code,
          district_ship: this.lienhemoi.district.code,
          email: this.lienhemoi.email,
          note: ""
        });
      } else {
        var contacmoi = await BotBanHang.user.addContact({
          name: this.lienhemoi.name,
          email: this.lienhemoi.email,
          tel: this.lienhemoi.tel,
          address: this.lienhemoi.address,
          province: this.lienhemoi.province.code,
          district: this.lienhemoi.district.code
        });
        await BotBanHang.order.checkout({
          order: { id: this.giohang.id }, // ID của giỏ hàng

          contact: contacmoi.id, // ID thông tin người mua
          name_ship: this.lienhemoi.name,
          tel_ship: this.lienhemoi.tel,
          address_ship: this.lienhemoi.address,
          province_ship: this.lienhemoi.province.code,
          district_ship: this.lienhemoi.district.code,
          email: this.lienhemoi.email,
          note: ""
        });
      }
      this.$swal("Đã đặt hàng!");
      this.$router.push("/sanpham");
    }
  }
};
</script>

<style>
</style>
