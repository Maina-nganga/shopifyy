import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  ShoppingCartIcon,
  HeartIcon,
  StarIcon,
  TruckIcon,
  ShieldIcon,
  ArrowLeftIcon,
} from 'lucide-react'
import Button from '../Components/Button/Button'
import { getProductById } from '../data/data'
import { useCart } from '../Context/CartContext'

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const product = getProductById(id)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('description')

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Product not found</h2>
        <p className="mt-2 text-gray-600">
          The product you're looking for doesn't exist or has been removed.
        </p>
        <button
          onClick={() => navigate('/products')}
          className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
        >
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Back to Products
        </button>
      </div>
    )
  }

  const handleQuantityChange = (e) => setQuantity(parseInt(e.target.value))
  const handleAddToCart = () => addToCart(product, quantity)

  return (
    <div className="bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
       
        <nav className="flex mb-8 text-gray-500" aria-label="Breadcrumb">
          <button onClick={() => navigate('/')} className="hover:text-gray-700">Home</button>
          <span className="mx-2">/</span>
          <button onClick={() => navigate('/products')} className="hover:text-gray-700">Products</button>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">{product.name}</span>
        </nav>

       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
       
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain"
              style={{ maxHeight: '500px' }}
            />
          </div>

      
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>

            
            <div className="flex items-center mt-3">
              {Array(5).fill().map((_, i) => (
                <StarIcon
                  key={i}
                  className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill="currentColor"
                />
              ))}
              <span className="ml-2 text-gray-600">{product.reviews} reviews</span>
            </div>

          
            <p className="text-3xl text-gray-900 mt-6">{product.price.toFixed(2)}</p>
            <p className="text-base text-gray-700 mt-4">{product.description}</p>

            
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Features:</h3>
              <ul className="mt-2 space-y-2">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-green-500 mr-2">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

           
            <p className={`mt-4 text-sm font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </p>
            <div className="mt-4">
              <label className="mr-4 text-sm font-medium text-gray-700">Quantity</label>
              <select
                value={quantity}
                onChange={handleQuantityChange}
                className="rounded-md border border-gray-300 py-1.5 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
              >
                {[...Array(10).keys()].map(i => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>

            
            <div className="mt-6 flex flex-col space-y-4">
              <Button onClick={handleAddToCart} fullWidth disabled={!product.inStock}>
                <ShoppingCartIcon className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              <Button variant="secondary" fullWidth>
                <HeartIcon className="h-5 w-5 mr-2" />
                Add to Wishlist
              </Button>
            </div>

           
            <div className="mt-6 border-t border-gray-200 pt-6 flex space-x-6 text-sm text-gray-500">
              <div className="flex items-center"><TruckIcon className="h-5 w-5 mr-1" />Free shipping over 50</div>
              <div className="flex items-center"><ShieldIcon className="h-5 w-5 mr-1" />2-year warranty</div>
            </div>
          </div>
        </div>

       
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              {['description','reviews','shipping'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                    ${activeTab === tab
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
                  `}
                >
                  {tab === 'description' ? 'Description' : tab === 'reviews' ? 'Reviews' : 'Shipping & Returns'}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-6">
            {activeTab === 'description' && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Product Description</h3>
                <p className="text-gray-700">{product.description}</p>
                <h4 className="text-lg font-medium text-gray-900 mt-6 mb-3">Specifications</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {product.features.map((f,i) => <li key={i}>{f}</li>)}
                </ul>
              </div>
            )}
            {activeTab === 'reviews' && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Customer Reviews</h3>
                <p className="text-gray-700">Sample reviews content here...</p>
              </div>
            )}
            {activeTab === 'shipping' && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Shipping & Returns</h3>
                <p className="text-gray-700">Shipping and return info here...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
