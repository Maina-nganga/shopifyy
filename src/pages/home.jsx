import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ProductCard from '../Components/ProductCard/productcard'
import Button from '../Components/Button/Button'

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([])

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await fetch('https://mp1a9cfd9f00c2aaadeb.free.beeceptor.com/'); // Fetch 4 products for featured
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        let productsToSet = [];
        if (Array.isArray(data)) {
          productsToSet = data;
        } else if (data && Array.isArray(data.products)) {
          productsToSet = data.products;
        }
        setFeaturedProducts(productsToSet);
      } catch (error) {
        console.error("Error fetching featured products:", error);
      }
    };

    fetchFeaturedProducts();
  }, []);

  

  return (
    <div className="w-full">
      
      <section className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Shop the Latest Trends
              </h1>
              <p className="text-xl mb-8">
                Discover amazing products at unbeatable prices. Quality meets
                affordability.
              </p>
              <div className="flex space-x-4">
                <Link to="/products">
                  <Button variant="secondary" size="large">
                    Shop Now
                  </Button>
                </Link>
                <Link to="/products?category=electronics">
                  <Button size="large">Explore Electronics</Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-10">
              <img
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1000&q=80"
                alt="Shopping Banner"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Shop by Category
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                category: 'Electronics',
                image:
                  'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1000&q=80',
              },
              {
                category: 'Clothing',
                image:
                  'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1000&q=80',
              },
              {
                category: 'Home & Kitchen',
                image:
                  'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=1000&q=80',
              },
              {
                category: 'Accessories',
                image:
                  'https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd?auto=format&fit=crop&w=1000&q=80',
              },
            ].map(({ category, image }) => (
              <Link
                key={category}
                to={`/products?category=${category.toLowerCase()}`}
                className="group"
              >
                <div className="relative overflow-hidden rounded-lg shadow-md h-64">
                  <img
                    src={image}
                    alt={category}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
                    <h3 className="text-white text-xl font-bold">{category}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Link
              to="/products"
              className="text-indigo-600 hover:text-indigo-800 flex items-center"
            >
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Special Offer</h2>
              <p className="text-xl mb-6">
                Get 20% off on selected items this week!
              </p>
              <Link to="/products">
                <Button variant="primary" size="large">
                  Shop the Sale
                </Button>
              </Link>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white text-gray-800 rounded-lg p-8 max-w-md">
                <h3 className="text-2xl font-bold mb-2">Limited Time Offer</h3>
                <p className="mb-4">
                  Use code <span className="font-bold">SPECIAL20</span> at
                  checkout
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-gray-100 p-3 rounded">
                    <span className="block text-3xl font-bold">20%</span>
                    <span className="text-sm">Discount</span>
                  </div>
                  <div className="bg-gray-100 p-3 rounded">
                    <span className="block text-3xl font-bold">7</span>
                    <span className="text-sm">Days Left</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-600 mb-8">
              Stay updated with the latest products and special offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
