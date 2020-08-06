import React from 'react'

import  ExampleComponent  from 'masspa-eorder-product'
import 'masspa-eorder-product/dist/index.css'

const App = () => {
  return <ExampleComponent 
  price={"900.000 đ"} 
  sku={"SDFG"} 
  stars = {4} 
  featureList = {["Tên sản phẩm: Tai nghe Inpod i12 TWS Bluetooth 5.0 cho iPhone và Android kèm Hộp sạc", "Model: i12 TWS- Kết nối: Bluetooth 5.0","Hỗ trợ: HSP/HFP/A2DP/AVRCP/SPP","Nút chạm cảm ứng","Dải tần: 40Hz – 20KHz","Khoảng cách kết nối: ≥10m"]} 
  madeIn = {"China"} title="Tai nghe Inpod i12 TWS Bluetooth 5.0 cho iPhone và Android kèm Hộp sạc - Hàng nhập khẩu" />
}

export default App
