/* eslint-disable */ 
import Vue from 'vue'
import Router from 'vue-router'
// import components
import Homepage from '@/components/Homepage'
import Sanpham from '@/components/Sanpham'
import Thongtinkhachhang from '@/components/Thongtinkhachhang'
import Thongtinpage from '@/components/Thongtinpage'
import Giohang from '@/components/Giohang'
import Lienhegiaohang from '@/components/Lienhegiaohang'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage,
      redirect: '/sanpham',
      children: [
        {
          path: 'sanpham',
          name: 'Sản phẩm',
          component: Sanpham
        },
        {
          path: 'thongtin',
          name: 'Thông tin',
          component: Thongtinkhachhang
        },
        {
          path: 'thongtinpage',
          name: 'Thông tin page',
          component: Thongtinpage
        },
        {
          path: 'giohang',
          name: 'Giỏ hàng',
          component: Giohang
        },
        {
          path: 'lienhe',
          name: 'Liên hệ',
          component: Lienhegiaohang
        }
      ]
    }
  ]
})

function hasQueryParams(route) {
  return !!Object.keys(route.query).length
}

router.beforeEach((to, from, next) => {
  if (!hasQueryParams(to) && hasQueryParams(from)) {
    next({ name: to.name, query: from.query });
  } else {
    next()
  }
})

export default router