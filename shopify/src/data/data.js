export const products = [
    {
      id: 1,
      name: "Wireless Noise Cancelling Headphones",
      price: 249.99,
      category: "electronics",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      description: "Experience premium sound quality with these wireless noise cancelling headphones. Perfect for travel, work, or relaxation.",
      features: [
        "Active noise cancellation technology",
        "30-hour battery life",
        "Comfortable over-ear design",
        "High-resolution audio",
        "Built-in microphone for calls"
      ],
      rating: 4.8,
      reviews: 245,
      inStock: true
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 199.99,
      category: "electronics",
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      description: "Track your fitness goals with this advanced smart watch. Monitor your heart rate, sleep patterns, and activity levels throughout the day.",
      features: [
        "Heart rate monitoring",
        "Sleep tracking",
        "Water resistant up to 50m",
        "7-day battery life",
        "GPS tracking"
      ],
      rating: 4.6,
      reviews: 189,
      inStock: true
    },
    {
      id: 3,
      name: "Men's Classic Oxford Shirt",
      price: 59.99,
      category: "clothing",
      image: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      description: "A timeless classic, this oxford shirt is perfect for any occasion. Made from premium cotton for comfort and durability.",
      features: [
        "100% premium cotton",
        "Button-down collar",
        "Regular fit",
        "Machine washable",
        "Available in multiple colors"
      ],
      rating: 4.5,
      reviews: 132,
      inStock: true
    },
    {
      id: 4,
      name: "Professional Blender",
      price: 129.99,
      category: "home",
      image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      description: "A powerful blender for all your kitchen needs. From smoothies to soups, this blender can handle it all with its high-performance motor.",
      features: [
        "1000-watt motor",
        "Variable speed control",
        "Pulse function",
        "64 oz container",
        "Dishwasher-safe parts"
      ],
      rating: 4.7,
      reviews: 215,
      inStock: true
    },
    {
      id: 5,
      name: "Leather Crossbody Bag",
      price: 89.99,
      category: "accessories",
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      description: "A stylish and practical leather crossbody bag. Perfect for everyday use with enough room for all your essentials.",
      features: [
        "Genuine leather",
        "Adjustable shoulder strap",
        "Multiple compartments",
        "Secure zipper closure",
        "Interior pockets"
      ],
      rating: 4.4,
      reviews: 98,
      inStock: true
    },
    {
      id: 6,
      name: "Wireless Bluetooth Speaker",
      price: 79.99,
      category: "electronics",
      image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      description: "Enjoy your music anywhere with this portable Bluetooth speaker. Features rich sound and deep bass in a compact design.",
      features: [
        "10-hour battery life",
        "Waterproof design",
        "Built-in microphone",
        "Bluetooth 5.0",
        "Easy pairing with devices"
      ],
      rating: 4.3,
      reviews: 156,
      inStock: true
    },
    {
      id: 7,
      name: "Women's Running Shoes",
      price: 119.99,
      category: "clothing",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      description: "Lightweight and responsive running shoes designed for comfort and performance. Perfect for daily runs or marathon training.",
      features: [
        "Breathable mesh upper",
        "Responsive cushioning",
        "Durable rubber outsole",
        "Reflective details",
        "Heel support system"
      ],
      rating: 4.6,
      reviews: 203,
      inStock: true
    },
    {
      id: 8,
      name: "Smart Home Security Camera",
      price: 149.99,
      category: "electronics",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      description: "Keep your home safe with this smart security camera. Features motion detection, night vision, and two-way audio.",
      features: [
        "1080p HD video",
        "Night vision",
        "Two-way audio",
        "Motion detection alerts",
        "Cloud storage option"
      ],
      rating: 4.5,
      reviews: 176,
      inStock: true
    }
  ];
  export const getProductById = (id) => {
    return products.find(product => product.id === parseInt(id));
  };
  export const getProductsByCategory = (category) => {
    if (!category) return products;
    return products.filter(product => product.category === category);
  };
  export const getFeaturedProducts = () => {
    return products.slice(0, 4);
  };