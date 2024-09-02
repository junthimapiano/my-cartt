"use client";

import React, { useState } from "react";
import { Stack, Typography } from "@mui/material";
import ItemCart from "./item-cart";

export default function Home() {
  const [items, setItems] = useState([
    { itemname: "iPhone 15", imageurl: "/iphone-15-finish-select-202309-6-1inch_FMT_WHH.jpg", price: 35900, quantity: 1 },
    { itemname: "iPhone 15 Pro", imageurl: "/iphone-15-pro-finish-select-202309-6-1inch.jpg", price: 35900, quantity: 1 },
    { itemname: "iPad Pro", imageurl: "/ipadpro.jpg", price: 29900, quantity: 1 },
    { itemname: "iPad Air", imageurl: "/padmini.jpg", price: 20900, quantity: 1 },
    { itemname: "iPad mini", imageurl: "/padmini.jpg", price: 17900, quantity: 1 },
    { itemname: "MacBook Air", imageurl: "/macair.png", price: 36900, quantity: 1 },
    { itemname: "MacBook Pro", imageurl: "/mac pro.jpg", price: 46900, quantity: 1 },
    { itemname: "iMac", imageurl: "/imac.jpeg", price: 46900, quantity: 1 },
    { itemname: "Mac mini", imageurl: "/macmini.jpg", price: 20900, quantity: 1 },
    { itemname: "Mac Studio", imageurl: "/macs.jpg", price: 75900, quantity: 1 },
  ]);

  // ฟังก์ชันในการเพิ่มจำนวนสินค้า
  const handleIncrement = (index: number) => {
    const newItems = [...items];
    newItems[index].quantity += 1;
    setItems(newItems);
  };

  // ฟังก์ชันในการลดจำนวนสินค้า
  const handleDecrement = (index: number) => {
    const newItems = [...items];
    if (newItems[index].quantity > 0) {
      newItems[index].quantity -= 1;
      setItems(newItems);
    }
  };

  // คำนวณราคารวมทั้งหมดและจำนวนรวมของสินค้าทั้งหมด
  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);

  // ฟอร์แมตราคาด้วยคอมม่า
  const formattedTotalPrice = totalPrice.toLocaleString();
  const formattedTotalQuantity = totalQuantity.toLocaleString();

  return (
    <div>
      <h1>Shopping Cart</h1>
      {items.map((item, index) => (
        <ItemCart
          key={index}
          itemname={item.itemname}
          itemPrice={item.price}
          itemImage={item.imageurl}
          count={item.quantity}
          handleIncrement={() => handleIncrement(index)}
          handleDecrement={() => handleDecrement(index)}
        />
      ))}
      <Stack direction="row" spacing={2}>
        <Typography variant="h5">จำนวนรวม</Typography>
        <Typography variant="h5">{formattedTotalQuantity} รายการ</Typography>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Typography variant="h5">ราคารวม</Typography>
        <Typography variant="h5">{formattedTotalPrice} บาท</Typography>
      </Stack>
    </div>
  );
}
