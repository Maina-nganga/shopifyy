import React, { useEffect, useState, useCallback } from "react"
import { useLocation } from "react-router-dom"
import { GridIcon, ListIcon } from "lucide-react"
import ProductCard from "../Components/ProductCard/productcard"

const categoryMap = {
  accessories: ["accessories", "jewelery", "jewelry"],
  clothing: ["clothing", "men's clothing", "women's clothing"],
  home: ["home", "home & kitchen", "kitchen"],
  electronics: ["electronics"],
}

const Products = () => {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)

  const categoryParam = queryParams.get("category")
  const searchTermParam = queryParams.get("search")

  const [category] = useState(categoryParam || "")
  const [sortBy, setSortBy] = useState("featured")
  const [viewMode, setViewMode] = useState("grid")
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [priceRange] = useState([0, 300])

  // ✅ Proper rating extractor for FakeStore API
  const getRating = (product) => {
    if (!product?.rating) return 0

    if (typeof product.rating === "object") {
      return product.rating.rate || 0
    }

    return product.rating || 0
  }

  // ✅ Fixed dependency (added categoryMap)
  const matchesCategory = useCallback(
    (product, cat) => {
      if (!cat) return true

      const prodCat = (product.category || "").toLowerCase()
      const normalized = cat.toLowerCase()

      if (prodCat === normalized || prodCat.includes(normalized)) {
        return true
      }

      const mapped = categoryMap[normalized]
      if (mapped && mapped.some((m) => prodCat.includes(m))) {
        return true
      }

      return false
    },
    []
  )

  // ✅ Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products")

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()

        const productsToSet = Array.isArray(data)
          ? data
          : Array.isArray(data.products)
          ? data.products
          : []

        setProducts(productsToSet)
      } catch (error) {
        console.error("Error fetching products:", error)
      }
    }

    fetchProducts()
  }, [])

  // ✅ Filtering + Sorting
  useEffect(() => {
    if (!Array.isArray(products)) {
      setFilteredProducts([])
      return
    }

    let currentProducts = categoryParam
      ? products.filter((product) =>
          matchesCategory(product, categoryParam)
        )
      : products

    if (searchTermParam) {
      currentProducts = currentProducts.filter((product) =>
        product.title
          ?.toLowerCase()
          .includes(searchTermParam.toLowerCase())
      )
    }

    currentProducts = currentProducts.filter(
      (product) =>
        product.price >= priceRange[0] &&
        product.price <= priceRange[1]
    )

    const sortedProducts = [...currentProducts]

    switch (sortBy) {
      case "price-low-high":
        sortedProducts.sort((a, b) => a.price - b.price)
        break
      case "price-high-low":
        sortedProducts.sort((a, b) => b.price - a.price)
        break
      case "rating":
        sortedProducts.sort(
          (a, b) => getRating(b) - getRating(a)
        )
        break
      default:
        break
    }

    setFilteredProducts(sortedProducts)
  }, [
    products,
    categoryParam,
    searchTermParam,
    priceRange,
    sortBy,
    matchesCategory,
  ])

  const handleSortChange = (e) => {
    setSortBy(e.target.value)
  }

  return (
    <div className="bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 pb-3 border-b border-gray-200">
              <div className="mb-3 sm:mb-0">
                <h1 className="text-2xl font-bold text-gray-900">
                  {category
                    ? category.charAt(0).toUpperCase() + category.slice(1)
                    : searchTermParam
                    ? `Search Results for "${searchTermParam}"`
                    : "All Products"}
                </h1>

                <p className="text-gray-500 text-sm mt-1">
                  {filteredProducts.length} products
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <select
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
                    onClick={() => setViewMode("grid")}
                    className={`p-2 ${
                      viewMode === "grid"
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-500"
                    }`}
                  >
                    <GridIcon className="h-5 w-5" />
                  </button>

                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 ${
                      viewMode === "list"
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-500"
                    }`}
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
            ) : viewMode === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
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
