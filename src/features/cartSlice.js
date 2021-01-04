import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     basket: [
//         //  {
//         //     id: "125",
//         //     tiles:
//         //         "New Apple iPad Pro (12.9-inch, Wi-Fi + Cellular, 128GB) - Space Gray (4th Generation) with AppleCare+ Bundle",
//         //     image:
//         //         "https://cdn.tgdd.vn/Products/Images/522/221775/ipad-pro-12-9-inch-wifi-128gb-2020-xam-400x460-1-400x460.png",
//         //     price: 968.1,
//         //     ratting: 5,
//         //     },
//         //     {
//         //     id: "125",
//         //     tiles:
//         //         "New Apple iPad Pro (12.9-inch, Wi-Fi + Cellular, 128GB) - Space Gray (4th Generation) with AppleCare+ Bundle",
//         //     image:
//         //         "https://cdn.tgdd.vn/Products/Images/522/221775/ipad-pro-12-9-inch-wifi-128gb-2020-xam-400x460-1-400x460.png",
//         //     price: 968.1,
//         //     ratting: 5,
//         //     },
//     ],
//     user: null,
// }


export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalAmount: 0,
    totalCart: 0,
  },
  reducers: {
    addCard: (state, action) => {
      const newItem = action.payload;
      // console.log("redux",action.payload)
      const idx = state.cartItems.findIndex(
        (x) => x.id === newItem.id
      );
      if (idx < 0) {
        // not existed in cart
        state.cartItems.push(newItem);
      } else {
        // existed in cart
        state.cartItems[idx].quantity += newItem.quantity;
      }
      state.totalAmount += newItem.price * newItem.quantity;

      state.totalCart += newItem.quantity
    },
  },
});

export const { addCard, } = cartSlice.actions;

export const selectCartItem = (state) => state.cart;

// export const selectAmount = (state) => state.card.totalAmount;

export default cartSlice.reducer;
