import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { FilterIcon, GridIcon, ListIcon } from 'lucide-react'
import ProductCard from '../Components/ProductCard/productcard'


const Products = () => {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const categoryParam = queryParams.get('category')
  const searchTermParam = queryParams.get('search');

  const [category, setCategory] = useState(categoryParam || '')
  const [sortBy, setSortBy] = useState('featured')
  const [viewMode, setViewMode] = useState('grid')
  const [products, setProducts] = useState([]) 
  const [filteredProducts, setFilteredProducts] = useState([])
  const [priceRange, setPriceRange] = useState([0, 300])
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://mp1a9cfd9f00c2aaadeb.free.beeceptor.com/');
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
        setProducts(productsToSet); 
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []); 

  useEffect(() => {
    if (!Array.isArray(products)) {
      setFilteredProducts([]);
      return;
    }

    let currentProducts = categoryParam
      ? products.filter(product => product.category === categoryParam)
      : products

    if (searchTermParam) {
      currentProducts = currentProducts.filter(product =>
        product.name.toLowerCase().includes(searchTermParam.toLowerCase())
      );
    }

    currentProducts = currentProducts.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    )

    switch (sortBy) {
      case 'price-low-high':
        currentProducts.sort((a, b) => a.price - b.price)
        break
      case 'price-high-low':
        currentProducts.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        currentProducts.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    setFilteredProducts(currentProducts)
  }, [products, categoryParam, sortBy, priceRange]) 

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
    const params = new URLSearchParams(location.search)

    if (e.target.value) {
      params.set('category', e.target.value)
    } else {
      params.delete('category')
    }

    window.history.replaceState(
      {},
      '',
      `${location.pathname}?${params.toString()}`
    )

    if (!Array.isArray(products)) {
      setFilteredProducts([]);
      return;
    }

    if (e.target.value) {
      setFilteredProducts(products.filter(product => product.category === e.target.value))
    } else {
      let productsToFilter = products;
      if (searchTermParam) {
        productsToFilter = products.filter(product =>
          product.name.toLowerCase().includes(searchTermParam.toLowerCase())
        );
      }
      setFilteredProducts(productsToFilter)
    }
  }

  const handleSortChange = (e) => {
    setSortBy(e.target.value)
  }

  const handlePriceChange = (e, index) => {
    const newRange = [...priceRange]
    newRange[index] = parseInt(e.target.value)
    setPriceRange(newRange)
  }

  const toggleFilters = () => {
    setShowFilters(!showFilters)
  }

  return (
    <div className="bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-6">
        
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-20">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Filters
              </h2>

            
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-2">
                  Category
                </h3>
                <select
                  value={category}
                  onChange={handleCategoryChange}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 
                             focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 
                             sm:text-sm rounded-md"
                >
                  <option value="">All Categories</option>
                  <option value="electronics">Electronics</option>
                  <option value="clothing">Clothing</option>
                  <option value="home">Home & Kitchen</option>
                  <option value="accessories">Accessories</option>
                </select>
              </div>

           
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-2">
                  Price Range
                </h3>
                <div className="mt-2 space-y-4">
                  <div>
                    <label className="block text-xs text-gray-500">
                      Min Price: ${priceRange[0]}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="300"
                      value={priceRange[0]}
                      onChange={(e) => handlePriceChange(e, 0)}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500">
                      Max Price: ${priceRange[1]}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="300"
                      value={priceRange[1]}
                      onChange={(e) => handlePriceChange(e, 1)}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </div>
              </div>

         
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-2">
                  Availability
                </h3>
                <div className="flex items-center space-x-2">
                  <input
                    id="instock"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="instock" className="text-sm text-gray-700">
                    In Stock
                  </label>
                </div>
              </div>
            </div>
          </div>

     
          <div className="flex-1">
  
            <div className="md:hidden mb-4">
              <button
                onClick={toggleFilters}
                className="flex items-center text-sm text-gray-700 bg-white 
                           border border-gray-300 rounded-md px-4 py-2"
              >
                <FilterIcon className="h-4 w-4 mr-2" />
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </button>
            </div>

            {showFilters && (
              <div className="md:hidden mb-6 bg-white p-4 border border-gray-200 rounded-md">
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">
                    Category
                  </h3>
                  <select
                    value={category}
                    onChange={handleCategoryChange}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 
                               focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 
                               sm:text-sm rounded-md"
                  >
                    <option value="">All Categories</option>
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="home">Home & Kitchen</option>
                    <option value="accessories">Accessories</option>
                  </select>
                </div>
              </div>
            )}

     
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 pb-3 border-b border-gray-200">
              <div className="mb-3 sm:mb-0">
                <h1 className="text-2xl font-bold text-gray-900">
                  {category
                    ? `${category.charAt(0).toUpperCase() + category.slice(1)}`
                    : searchTermParam ? `Search Results for "${searchTermParam}"` : 'All Products'}
                </h1>
                <p className="text-gray-500 text-sm mt-1">
                  {filteredProducts.length} products
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <select
                  id="sort"
                  value={sortBy}
                  onChange={handleSortChange}
                  className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 
                             focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 
                             sm:text-sm rounded-md"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>

                <div className="hidden sm:flex border border-gray-300 rounded-md">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${
                      viewMode === 'grid'
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-500'
                    }`}
                    aria-label="Grid view"
                  >
                    <GridIcon className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${
                      viewMode === 'list'
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-500'
                    }`}
                    aria-label="List view"
                  >
                    <ListIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

         
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600">
                  No products found. Try adjusting your filters.
                </p>
              </div>
            ) : viewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex flex-col sm:flex-row border border-gray-200 
                               rounded-lg overflow-hidden bg-white shadow-sm 
                               hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="sm:w-48 h-48">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="flex-1 p-4 flex flex-col">
                      <h3 className="text-lg font-medium text-gray-900">
                        {product.name}
                      </h3>
                      <div className="flex items-center mt-1">
                        <div className="flex items-center">
                          {Array(5)
                            .fill()
                            .map((_, i) => (
                              <span
                                key={i}
                                className={
                                  i < Math.floor(product.rating)
                                    ? 'text-yellow-400'
                                    : 'text-gray-300'
                                }
                              >
                                ★
                              </span>
                            ))}
                        </div>
                        <span className="ml-1 text-sm text-gray-500">
                          {product.reviews} reviews
                        </span>
                      </div>
                      <p className="text-gray-500 mt-2 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="mt-auto flex items-center justify-between">
                        <p className="text-xl font-semibold text-gray-900">
                          {product.price.toFixed(2)}
                        </p>
                        <button
                          className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 
                                     transition-colors duration-200"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
