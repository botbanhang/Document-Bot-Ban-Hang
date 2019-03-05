# Tài liệu event webhook BOT BÁN HÀNG
## Khách hàng mới
- Trả về thông tin khách hàng mới tương tác với page(bấm vào nút bắt đầu)
- Response example
```json
  { 
    "event": "client:new", //event name
    "data": {
      "id": "2215616798496070", // client id
      "first_name": "Cường",   
      "last_name": "Nguyễn", 
      "gender": "male" 
    } 
  }
```
## Cập nhật khách hàng
- On development
## Đơn hàng mới
- Trả về thông tin đơn hàng mới được tạo
- Response example
```json
  { 
    "event": "order:new",  // envent name 
    "data": { 
      "idorder": "1278295", // id đơn hàng
      "orders": [ // thông tin đơn hàng 
        {
          "id":"5c7b77887bce6d001244ec89",
          "title":"Sáng da bằng nhũ tương",
          "price":"475000",
          "discount":"0",
          "images_url":[
            "https://media.botbanhang.vn/uploads/5b9736ad54d5555160df33f8/3b397d77-62f0-41dc-b28e-6e949fa99947.jpg"
          ],
          "quantity":1
        }
      ],
      "status": "order",  // trạng thái đơn hàng   
      "note": "đây là ghi chú", // ghi chú đơn hàng    
      "client": { // thông tin người mua
        "first_name": "TriÂn",        
        "last_name": "HộpThư",        
        "psid": "2874888275870129",        
        "gender": "male" 
      },     
      "total_cost": "495000",     
      "total_quantity": "0",     
      "ship": { // địa chỉ giao hàng
        "name": "Trần Hùng",        
        "email": "tranhun@gmail.com",        
        "phone": "0344559823",        
        "address": "TINHTUTONG - Lê Chân - Hải Phòng",        
        "province": "Hải Phòng",        
        "district": "Lê Chân" 
      } 
    } 
  }
```
## Sản phẩm mới
- Trả về thông tin sản phẩm mới được tạo ra
- Response example 
```json
  { 
    "event": "category:new", // event name 
    "data": { 
      "id": "5c7ea4bcaa5c99001118e04f", // id của sản phẩm
      "title": "tieudesanpham" // tiêu đề sản phẩm
    } 
  }

```
## Danh mục mới
- Trả về thông tin danh mục mới được tạo ra
- Response example 
```json
  { 
    "event": "category:new", // event name 
    "data": { 
      "id": "5c7ea7387d81870011918db9", // id của danh mục
      "title": "tên danh mục" // tên của danh mục
    } 
  }

```
## Cập nhật sản phẩm
- Trả về thông tin sản phẩm mới được cập nhật
- Response example
```json
  { 
    "event": "category:update", // event name
    "data": { 
      "id": "5c7ea4bcaa5c99001118e04f", // id của sản phẩm
      "title": "ten san pham" // tiêu đề của sản phẩm 
    } 
  }

```
## Cập nhật danh mục
- Trả về thông tin danh mục mới được cập nhật
- Response example
```json
  { 
    "event": "category:update", // event name
    "data": { 
      "id": "5c7ea7387d81870011918db9", // id của danh mục
      "title": "ten danh muc" // tiêu đề của danh mục 
    } 
  }

```
## Xoá sản phẩm
- Trả về thông tin sản phẩm bị xóa
- Response example
```json
  { 
    "event": "category:remove", // event name
    "data": { 
      "id": "5c7ea669baa7f200115730f9", // id của sản phẩm
      "title": "ten san pham"  // tiêu đề của sản phẩm 
    } 
  }

```
## Xoá danh mục
- Trả về thông tin danh mục bị xóa
- Response example
```json
  { 
    "event": "category:remove", // event name
    "data": { 
      "id": "5c7ea7387d81870011918db9", // id của danh mục
      "title": "ten danh muc" // tiêu đề của danh mục
    } 
  }

```
## Kích hoạt thu hút
- Trả về thông tin thu hút khách hàng(backlink) được kích hoạt
- Response example
```json
  { 
    "event": "backlink:active", // event name
    "data": { 
      "backlink": "8C1kTrp0X", // backlink ref
      "client": "2874888275870129", // client id   
      "is_new_client": false // check new client true - false
    } 
  }
```