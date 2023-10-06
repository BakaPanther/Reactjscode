import Header from "./header";
import Carousels from "./carousel";
import ProductType from "./products-types";
import Footer from "./footer";
import { Card } from "reactstrap";
import { useEffect } from "react";
import { useState } from "react";
const loaisanpham = [
  {
    'ten': 'loai san pham 1',
    'list': [
      {
        'img': 'images/chuotg102.jpg',
        'ten': 'Chuột G102',
        'gia': 200000,
      },
      {
        'img': 'images/chuotg304.jpg',
        'ten': 'Chuột G304',
        'gia': 200000,
      },
      {
        'img': 'images/chuotg502.jpg',
        'ten': 'Chuột G502',
        'gia': 200000,
      },
    ]

  },
  {
    'ten': 'loai san pham 2',
    'list': [
      {
        'img': 'images/banphimcoDareu.jpg',
        'ten': 'Bàn phím cơ Dareu',
        'gia': 200000,
      },
      {
        'img': 'images/banphimcoMSI.jpg',
        'ten': 'Bàn phím cơ MSI',
        'gia': 200000,
      },
      {
        'img': 'images/banphimcoROG.jpg',
        'ten': 'Bàn phím cơ ROG',
        'gia': 200000,
      },
    ]

  },
]
function Index() {
  // const [Dsloaisp,setDsloaisp]= useState([]);
  // useEffect(()=>{
  //   fetch('http://localhost:9000/get-data.php')
  //   .then(res=>res.json())
  //   .then(json=>setDsloaisp(json));
  // },[])
  const dsLSP = loaisanpham.map((items) => {
    return (
      <ProductType data={items} />
    )
  })
  return (
    <>
      <Header />
      <div className='carousels'>
        <Carousels />
      </div>
      <div>{dsLSP}</div>

      <Footer />
    </>
  );
}
export default Index