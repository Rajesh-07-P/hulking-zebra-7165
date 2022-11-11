import { Box, Heading, Image } from "@chakra-ui/react";

let valuepicks = [
  {
    src: "https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC3-Men-banner1-11Oct2022.jpg",
    type: "T-Shirts",
    value: "Upto 50% Off",
  },
  {
    src: "https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC3-Men-banner2-11Oct2022.jpg",
    type: "Casual Shirts",
    value: "Upto 50% Off",
  },
  {
    src: "https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC3-Men-banner3-27Oct2022.jpg",
    type: "Sweatshirts",
    value: "Upto 50% Off",
  },
  {
    src: "https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC3-Men-banner4-27Oct2022.jpg",
    type: "Jackets",
    value: "Upto 50% Off",
  },
  {
    src: "https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC3-Men-banner5-11Oct2022.jpg",
    type: "Watches",
    value: "Under ₹3999",
  },
  {
    src: "https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC3-Men-banner6-11Oct2022.jpg",
    type: "Footwear",
    value: "Under ₹2999",
  },
];

let winter=[
    {
        src:'https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC4-Men-banner1-08Nov2022.jpg',
        value:'From ₹599'
    },
    {
        src:'https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC4-Men-banner2-08Nov2022.jpg',
        value:'From ₹1199'
    },
    {
        src:'https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC4-Men-banner3-08Nov2022.jpg',
        value:'From ₹899'
    },
    {
        src:'https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC4-Men-banner4-08Nov2022.jpg',
        value:'From ₹899'
    },
    {
        src:'https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC4-Men-banner5-08Nov2022.jpg',
        value:'From ₹1999'
    },
    {
        src:'https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC4-Men-banner6-08Nov2022.jpg',
        value:'From ₹599'
    },
];

let bigbrands=[
    {
        src:'https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner1-men-Desktop-19Oct2022.png',
        value:'Upto 40% Off'
    },
    {
        src:'https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner2-men-Desktop-02Sep2022.jpg',
        value:'Upto 40% Off'
    },
    {
        src:'https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner3-men-Desktop-02Sep2022.jpg',
        value:'Upto 50% Off'
    },
    {
        src:'https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner4-men-Desktop-31Aug2022.jpg',
        value:'Upto 50% Off'
    },
    {
        src:'https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner6-men-Desktop-31Aug2022.jpg',
        value:'Upto 50% Off'
    },
    {
        src:'https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner5-men-Desktop-31Aug2022.jpg',
        value:'Upto 50% Off'
    },
    {
        src:'https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner7-men-Desktop-16Sep2022.png',
        value:'Upto 50% Off'
    },
    {
        src:'https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner8-men-Desktop-16Sep2022.jpg',
        value:'Upto 50% Off'
    },
    {
        src:'https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner9-men-Desktop-16Sep2022.jpg',
        value:'Upto 50% Off'
    },
    {
        src:'https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner10-men-Desktop-16Sep2022.jpg',
        value:'Upto 40% Off'
    },
    {
        src:'https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner11-men-Desktop-23Sep2022.jpg',
        value:'Flat 15% Off'
    },
    {
        src:'https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner12-men-Desktop-16Sep2022.jpg',
        value:'Upto 50% Off'
    },
];

let category=[
    {
        src:'https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-1-Desktop-Men-24Aug2022.jpg',
        value:'From ₹299'
    },
    {
        src:'https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-2-Desktop-Men-24Aug2022.jpg',
        value:'From ₹699'
    },
    {
        src:'https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-3-Desktop-Men-24Aug2022.jpg',
        value:'From ₹699'
    },
    {
        src:'https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-4-Desktop-Men-24Aug2022.jpg',
        value:'From ₹999'
    },
    {
        src:'https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-5-Desktop-Men-24Aug2022.jpg',
        value:'From ₹1495'
    },
    {
        src:'https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-6-Desktop-Men-24Aug2022.jpg',
        value:'From ₹499'
    },
    {
        src:'https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-7-Desktop-Men-24Aug2022.jpg',
        value:'Up To 50% Off'
    },
    {
        src:'https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-8-Desktop-Men-24Aug2022.jpg',
        value:'From ₹999'
    },
    {
        src:'https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-9-Desktop-Men-24Aug2022.jpg',
        value:'From ₹599'
    },
    {
        src:'https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-10-Desktop-Men-24Aug2022.jpg',
        value:'From ₹199'
    },
    {
        src:'https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-11-Desktop-Men-24Aug2022.jpg',
        value:'From ₹399'
    },
    {
        src:'https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-12-Desktop-Men-24Aug2022.jpg',
        value:'From ₹499'
    },
]

let trending=[
  {
    src:'https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC1-Men-categorybanner1-22Oct2022.jpg',
    value:'Up To 50% Off',
  },
  {
    src:'https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC1-Men-categorybanner2-22Oct2022.jpg',
    value:'Up To 50% Off',
  },
  {
    src:'https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC1-Men-categorybanner3-22Oct2022.jpg',
    value:'Up To 30% Off',
  },
  {
    src:'https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC1-Men-categorybanner4-22Oct2022.jpg',
    value:'Up To 40% Off',
  },
  {
    src:'https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC1-Men-categorybanner5-22Oct2022.jpg',
    value:'Up To 50% Off',
  },
  {
    src:'https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC1-Men-categorybanner6-27Oct2022.jpg',
    value:'Starting ₹299',
  },
  {
    src:'https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC1-Men-categorybanner7-22Oct2022.jpg',
    value:'Up To 50% Off',
  },
  {
    src:'https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC1-Men-categorybanner8-22Oct2022.jpg',
    value:'Up To 50% Off',
  },
  {
    src:'https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC1-Men-categorybanner9-22Oct2022.jpg',
    value:'Up To 30% Off',
  },
  {
    src:'https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC1-Men-categorybanner10-22Oct2022.jpg',
    value:'Up To 30% Off',
  },
  {
    src:'https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC1-Men-categorybanner11-22Oct2022.jpg',
    value:'Up To 50% Off',
  },
  {
    src:'https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC1-Men-categorybanner12-22Oct2022.jpg',
    value:'Up To 30% Off',
  },
]

let toppicks=[
  {
    src:'https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-3modularblock-1-oneBythree-21June2022.jpg',
  },
  {
    src:'https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-3modularblock-2-oneBythree-21June2022.jpg',
  },
  {
    src:'https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-3modularblock-3-oneBythree-21June2022.jpg',
  },
];

let wintertrends=[
  {
    src:'https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-MEN-11modularblock-oneBythree-A-Men-09Sep2022.jpg'
  },
  {
    src:'https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-MEN-11modularblock-oneBythree-B-Men-10Oct2022.jpg'
  },
  {
    src:'https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-MEN-11modularblock-oneBythree-C-Men-10Oct2022.jpg'
  },
]

let mostlovedones=[
  {
    src:'https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-3modblck-1-oneBythreeA-07Sep2022.jpg'
  },
  {
    src:'https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-3modblck-2-oneBythreeA-24June20221.jpg'
  },
  {
    src:'https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-3modblck-3-oneBythreeA-24June2022.jpg'
  },
];
let highlights=[
  {
    src:'https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-4modularblock-1-oneBythree-24June2022.jpg'
  },
  {
    src:'https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-4modularblock-2-oneBythree-19July2022.jpg'
  },
  {
    src:'https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-4modularblock-3-oneBythree-24June2022.gif'
  },
];
let trendsetters=[
  {
    src:'https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-2modularblock-1-oneBythree-07Oct2022.jpg'
  },
  {
    src:'https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-2modularblock-2-oneBythree-16Sep2022.jpg'
  },
  {
    src:'https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-2modularblock-3-oneBythree-16Sep2022.jpg'
  },
];
let activewardrobe=[
  {
    src:'https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-15modularblock-1-oneBythree-16Sep2022.jpg'
  },
  {
    src:'https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-15modularblock-2-oneBythree-16Sep2022.jpg'
  },
  {
    src:'https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-15modularblock-3-oneBythree-16Sep2022.jpg'
  },
];



export default function HomeMidSection() {
  return (
    <>
      <div style={{ maxWidth: "1200px", margin: "auto" }}>
        <div style={{ marginTop: "80px" }}>
          <img
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-12modblock-oneBythree-A-Men-03Nov2022.jpg"
            alt=""
            style={{ width: "100%" }}
          />
        </div>
        <div style={{ fontSize: "24px", fontWeight: "600", textAlign: "left" }}>
          <h2 style={{ fontWeight: "lighter" }}>Value Picks</h2>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
            marginBottom: "30px",
            paddingBottom: "30px",
            flexWrap:'wrap',
          }}
        >
          {valuepicks.map((elem) => {
            return (
              <div style={{ width: "190px" }}>
                <img src={elem.src} alt="" style={{ width: "100%" }} />
                <div>
                  <p style={{fontSize:'18px' , fontWeight:'500'}}>{elem.value}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ fontSize: "24px", fontWeight: "600", textAlign: "left" }}>
          <h2 style={{ fontWeight: "lighter" }}>Winterwear Essentials</h2>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
            marginBottom: "30px",
            paddingBottom: "30px",
          }}
        >
          {winter.map((elem) => {
            return (
              <div style={{ width: "190px" }}>
                <img src={elem.src} alt="" style={{ width: "100%" }} />
                <div>
                  <p style={{fontSize:'18px' , fontWeight:'500'}}>{elem.value}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ fontSize: "24px", fontWeight: "600", textAlign: "left" }}>
          <h2 style={{ fontWeight: "lighter" }}>Big Brands. Big Discounts</h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6,1fr)",
            justifyContent: "space-around",
            boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
            marginBottom: "30px",
            paddingBottom: "30px",
          }}
        >
          {bigbrands.map((elem) => {
            return (
              <div style={{ width: "190px" }}>
                <img src={elem.src} alt="" style={{ width: "100%" }} />
                <div>
                  <p style={{fontSize:'18px' , fontWeight:'500'}}>{elem.value}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ marginTop: "80px" }}>
          <img
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-13modblock-oneBythree-A-menstripbanner-07Nov2022A.png"
            alt=""
            style={{ width: "100%" }}
          />
        </div>
        <div style={{ marginTop: "80px" }}>
          <img
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-men-9modblock-StripBanner2-D-07Nov2022.jpg"
            alt=""
            style={{ width: "100%" }}
          />
        </div>
        <div style={{ marginTop: "80px" }}>
          <img
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-men-8modblock-oneBythree-D-07Nov2022.jpg"
            alt=""
            style={{ width: "100%" }}
          />
        </div>
        <div style={{ fontSize: "24px", fontWeight: "600", textAlign: "left" }}>
          <h2 style={{ fontWeight: "lighter" }}>Shop By Category</h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6,1fr)",
            justifyContent: "space-around",
            boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
            marginBottom: "30px",
            paddingBottom: "30px",
          }}
        >
          {category.map((elem) => {
            return (
              <div style={{ width: "190px" }}>
                <img src={elem.src} alt="" style={{ width: "100%" }} />
                <div>
                  <p style={{fontSize:'18px' , fontWeight:'500'}}>{elem.value}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ fontSize: "24px", fontWeight: "600", textAlign: "left" }}>
          <h2 style={{ fontWeight: "lighter" }}>Top Trending Brands</h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6,1fr)",
            justifyContent: "space-around",
            boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
            marginBottom: "30px",
            paddingBottom: "30px",
          }}
        >
          {trending.map((elem) => {
            return (
              <div style={{ width: "190px" }}>
                <img src={elem.src} alt="" style={{ width: "100%" }} />
                <div>
                  <p style={{fontSize:'18px' , fontWeight:'500'}}>{elem.value}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ fontSize: "24px", fontWeight: "600", textAlign: "left" }}>
          <h2 style={{ fontWeight: "lighter" }}>Flash Sale for Today</h2>
        </div>
        <div style={{ marginTop: "30px" }}>
          <img
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-MEN-modularblock7-oneBythree-A-Men-04Nov2022.jpg"
            alt=""
            style={{ width: "100%" }}
          />
        </div>
        <div style={{ fontSize: "24px", fontWeight: "600", textAlign: "left" }}>
          <h2 style={{ fontWeight: "lighter" }}>Top Picks</h2>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
            marginBottom: "30px",
            paddingBottom: "30px",
          }}
        >
          {toppicks.map((elem) => {
            return (
              <div style={{ width: "380px" }}>
                <img src={elem.src} alt="" style={{ width: "100%" }} />
              </div>
            );
          })}
        </div>
        <div style={{ fontSize: "24px", fontWeight: "600", textAlign: "left" }}>
          <h2 style={{ fontWeight: "lighter" }}>Winter Trends</h2>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
            marginBottom: "30px",
            paddingBottom: "30px",
          }}
        >
          {wintertrends.map((elem) => {
            return (
              <div style={{ width: "380px" }}>
                <img src={elem.src} alt="" style={{ width: "100%" }} />
              </div>
            );
          })}
        </div>
        <div style={{ fontSize: "24px", fontWeight: "600", textAlign: "left" }}>
          <h2 style={{ fontWeight: "lighter" }}>Most Loved Styles</h2>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
            marginBottom: "30px",
            paddingBottom: "30px",
          }}
        >
          {mostlovedones.map((elem) => {
            return (
              <div style={{ width: "380px" }}>
                <img src={elem.src} alt="" style={{ width: "100%" }} />
              </div>
            );
          })}
        </div>
        <div style={{ fontSize: "24px", fontWeight: "600", textAlign: "left" }}>
          <h2 style={{ fontWeight: "lighter" }}>Highlights of the Day</h2>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
            marginBottom: "30px",
            paddingBottom: "30px",
          }}
        >
          {highlights.map((elem) => {
            return (
              <div style={{ width: "380px" }}>
                <img src={elem.src} alt="" style={{ width: "100%" }} />
              </div>
            );
          })}
        </div>
        <div style={{ fontSize: "24px", fontWeight: "600", textAlign: "left" }}>
          <h2 style={{ fontWeight: "lighter" }}>Trendsetters</h2>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
            marginBottom: "30px",
            paddingBottom: "30px",
          }}
        >
          {trendsetters.map((elem) => {
            return (
              <div style={{ width: "380px" }}>
                <img src={elem.src} alt="" style={{ width: "100%" }} />
              </div>
            );
          })}
        </div>
        <div style={{ fontSize: "24px", fontWeight: "600", textAlign: "left" }}>
          <h2 style={{ fontWeight: "lighter" }}>Active Wardrobe</h2>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
            marginBottom: "30px",
            paddingBottom: "30px",
          }}
        >
          {activewardrobe.map((elem) => {
            return (
              <div style={{ width: "380px" }}>
                <img src={elem.src} alt="" style={{ width: "100%" }} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
