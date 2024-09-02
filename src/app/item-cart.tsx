"use client";

import { IconButton, Stack, Typography, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";

export default function ItemCart({
  itemname,
  itemPrice,
  itemImage,
  count,
  handleIncrement,
  handleDecrement,
}: {
  itemname: string;
  itemPrice: number;
  itemImage: string;
  count: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
}) {
  const totalPrice = count * itemPrice;
  
  // ฟอร์แมตราคาด้วยคอมม่า
  const formattedItemPrice = itemPrice.toLocaleString();
  const formattedTotalPrice = totalPrice.toLocaleString();

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={3}>
        <img src={itemImage} alt={itemname} style={{ width: "100%", height: "auto" }} />
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h6">{itemname}</Typography>
        <Typography variant="body1">{formattedItemPrice} บาท</Typography>
      </Grid>
      <Grid item xs={3}>
        <Stack direction="row" spacing={2} alignItems="center">
          <IconButton onClick={handleDecrement}>
            <RemoveIcon />
          </IconButton>
          <Typography variant="h6">{count}</Typography>
          <IconButton onClick={handleIncrement}>
            <AddIcon />
          </IconButton>
          <Typography variant="h6">{formattedTotalPrice} บาท</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}
