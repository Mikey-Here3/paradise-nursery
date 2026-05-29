import React, { useState } from "react";

function CartItem() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Snake Plant",
      price: 20,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1545241047-6083a3684587",
    },
    {
      id: 2,
      name: "Peace Lily",
      price: 25,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
    },
  ]);

  const increaseQuantity = (id) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setItems(
      items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const cartTotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const checkout = () => {
    alert("Coming Soon");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shopping Cart</h1>

      {items.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            marginBottom: "15px",
          }}
        >
          <img
            src={item.image}
            alt={item.name}
            width="150"
          />

          <h2>{item.name}</h2>

          <p>Unit Price: ${item.price}</p>

          <button
            onClick={() => decreaseQuantity(item.id)}
          >
            -
          </button>

          <span style={{ margin: "10px" }}>
            {item.quantity}
          </span>

          <button
            onClick={() => increaseQuantity(item.id)}
          >
            +
          </button>

          <p>
            Item Total: $
            {item.price * item.quantity}
          </p>

          <button
            onClick={() => deleteItem(item.id)}
          >
            Delete Item
          </button>
        </div>
      ))}

      <h2>Total Cart Amount: ${cartTotal}</h2>

      <button
        onClick={checkout}
        style={{
          marginRight: "10px",
        }}
      >
        Checkout
      </button>

      <button>
        Continue Shopping
      </button>
    </div>
  );
}

export default CartItem;