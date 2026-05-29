import React, { useState } from "react";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    price: 20,
    category: "Air Purifying",
    image: "https://images.unsplash.com/photo-1545241047-6083a3684587"
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 25,
    category: "Air Purifying",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735"
  },
  {
    id: 3,
    name: "Aloe Vera",
    price: 15,
    category: "Medicinal",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
  },
  {
    id: 4,
    name: "Spider Plant",
    price: 18,
    category: "Decorative",
    image: "https://images.unsplash.com/photo-1483794344563-d27a8d18014e"
  },
  {
    id: 5,
    name: "ZZ Plant",
    price: 30,
    category: "Indoor",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b"
  },
  {
    id: 6,
    name: "Money Plant",
    price: 22,
    category: "Indoor",
    image: "https://images.unsplash.com/photo-1463320726281-696a485928c7"
  }
];

function ProductList() {
  const [cartCount, setCartCount] = useState(0);
  const [addedItems, setAddedItems] = useState([]);

  const handleAddToCart = (id) => {
    setCartCount(cartCount + 1);
    setAddedItems([...addedItems, id]);
  };

  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "15px",
          background: "#4CAF50",
          color: "white"
        }}
      >
        <h2>Paradise Nursery</h2>

        <div>
          <span style={{ marginRight: "20px" }}>Home</span>
          <span style={{ marginRight: "20px" }}>Plants</span>
          <span>🛒 Cart ({cartCount})</span>
        </div>
      </nav>

      <h1 style={{ textAlign: "center", margin: "20px" }}>
        Plant Collection
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
          padding: "20px"
        }}
      >
        {plants.map((plant) => (
          <div
            key={plant.id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              textAlign: "center"
            }}
          >
            <img
              src={plant.image}
              alt={plant.name}
              width="200"
              height="200"
            />

            <h3>{plant.name}</h3>

            <p>{plant.category}</p>

            <h4>${plant.price}</h4>

            <button
              disabled={addedItems.includes(plant.id)}
              onClick={() => handleAddToCart(plant.id)}
            >
              {addedItems.includes(plant.id)
                ? "Added"
                : "Add To Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;