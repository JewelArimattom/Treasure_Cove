import React, { useState, useMemo } from 'react';
import { Star, Filter, Grid, List, Search, ShoppingCart, Eye, Heart } from 'lucide-react';
import { products } from '../data/products';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { toast } from 'react-hot-toast';

// Map products to include the first image as main image
const productsWithImage = products.map(product => ({
  ...product,
  image: product.images[0] // Using the first image from the images array
}));

// Generate categories dynamically from products
const categoryCounts = productsWithImage.reduce((acc, product) => {
  acc[product.category] = (acc[product.category] || 0) + 1;
  return acc;
}, {});

const categoryIcons = {
  "Pirate Weapons": "⚔️",
  "Treasure Maps": "🗺️",
  "Ship Equipment": "⚓",
  "Pirate Attire": "👑",
  "Rum & Provisions": "🍷",
  "Jewelry & Gold": "💎"
};

const categories = Object.entries(categoryCounts).map(([name, count]) => ({
  name,
  icon: categoryIcons[name] || "📦",
  count
}));

const ProductCard = ({ product, viewMode, onAddToCart, onViewDetails, onWishlist }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={`${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-lg shadow-lg border border-amber-200 p-4 flex gap-4 hover:shadow-xl transition-all duration-300 hover:border-amber-400">
        <div className="w-24 h-24 flex-shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-bold text-gray-800 hover:text-amber-700 cursor-pointer">
              {product.name}
            </h3>
            <div className="text-right">
              <p className="text-2xl font-bold text-amber-700">${product.price}</p>
              <span className="text-sm text-gray-500">{product.category}</span>
            </div>
          </div>
          <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex">{renderStars(product.rating)}</div>
              <span className="text-sm text-gray-500">({product.reviews})</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => onWishlist(product)}
                className="p-2 text-gray-500 hover:text-red-500 transition-colors"
              >
                <Heart size={18} />
              </button>
              <button
                onClick={() => onViewDetails(product)}
                className="p-2 text-gray-500 hover:text-amber-600 transition-colors"
              >
                <Eye size={18} />
              </button>
              <button
                onClick={() => onAddToCart(product)}
                className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors flex items-center gap-2"
              >
                <ShoppingCart size={16} />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg border border-amber-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-amber-400 hover:-translate-y-1">
      <div className="relative group">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.featured && (
          <div className="absolute top-2 left-2 bg-amber-500 text-white px-2 py-1 rounded text-xs font-bold">
            FEATURED
          </div>
        )}
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => onWishlist(product)}
            className="bg-white p-2 rounded-full shadow-md hover:bg-red-50 transition-colors"
          >
            <Heart size={16} className="text-gray-600 hover:text-red-500" />
          </button>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <button
            onClick={() => onViewDetails(product)}
            className="bg-amber-600 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-amber-700"
          >
            <Eye size={16} className="inline mr-2" />
            Quick View
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-bold text-gray-800 hover:text-amber-700 cursor-pointer line-clamp-2">
            {product.name}
          </h3>
          <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full whitespace-nowrap ml-2">
            {product.category}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center mb-3">
          <div className="flex">{renderStars(product.rating)}</div>
          <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
        </div>
        
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold text-amber-700">${product.price}</p>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors flex items-center gap-2"
          >
            <ShoppingCart size={16} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductListPage = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [showFilters, setShowFilters] = useState(false);
  const [wishlist, setWishlist] = useState([]);

  const filteredProducts = useMemo(() => {
    let filtered = productsWithImage;

    // Category filter
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Price range filter
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'reviews':
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
      default:
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
  }, [selectedCategory, sortBy, searchTerm, priceRange]);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success('Added to cart!', {
      icon: '🏴‍☠️',
      duration: 2000
    });
  };

  const handleWishlist = (product) => {
    setWishlist(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        toast.success('Removed from wishlist!', {
          icon: '💔',
          duration: 2000
        });
        return prev.filter(item => item.id !== product.id);
      }
      toast.success('Added to wishlist!', {
        icon: '❤️',
        duration: 2000
      });
      return [...prev, product];
    });
  };

  const handleViewDetails = (product) => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-900 via-red-900 to-amber-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-4xl font-bold font-pirate">⚓ Pirate's Treasure Trove</h1>
            <div className="flex items-center gap-4">
              <div className="bg-red-800 px-3 py-1 rounded-full text-sm font-pirate">
                Wishlist ({wishlist.length})
              </div>
            </div>
          </div>
          <p className="text-amber-100 text-lg font-pirate">Discover authentic pirate treasures from the golden age of piracy</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Controls */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border border-amber-200">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search for pirate treasures..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-800 rounded-lg hover:bg-amber-200 transition-colors"
              >
                <Filter size={20} />
                Filters
              </button>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="reviews">Most Reviews</option>
              </select>
              
              <div className="flex bg-gray-100 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-l-lg transition-colors ${
                    viewMode === 'grid' ? 'bg-amber-600 text-white' : 'text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-r-lg transition-colors ${
                    viewMode === 'list' ? 'bg-amber-600 text-white' : 'text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <List size={20} />
                </button>
              </div>
            </div>
          </div>
          
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Category Filter */}
                <div>
                  <h3 className="font-semibold text-gray-700 mb-3">Category</h3>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value="All"
                        checked={selectedCategory === 'All'}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="text-amber-600 focus:ring-amber-500"
                      />
                      <span className="ml-2">All Categories</span>
                    </label>
                    {categories.map((category) => (
                      <label key={category.name} className="flex items-center">
                        <input
                          type="radio"
                          name="category"
                          value={category.name}
                          checked={selectedCategory === category.name}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="text-amber-600 focus:ring-amber-500"
                        />
                        <span className="ml-2">
                          {category.icon} {category.name} ({category.count})
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Price Range */}
                <div>
                  <h3 className="font-semibold text-gray-700 mb-3">Price Range</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">$0</span>
                      <input
                        type="range"
                        min="0"
                        max="500"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                        className="flex-1"
                      />
                      <span className="text-sm">$500</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Up to ${priceRange[1]}
                    </p>
                  </div>
                </div>
                
                {/* Results Count */}
                <div>
                  <h3 className="font-semibold text-gray-700 mb-3">Results</h3>
                  <p className="text-lg font-bold text-amber-700">
                    {filteredProducts.length} treasures found
                  </p>
                  <p className="text-sm text-gray-600">
                    {selectedCategory !== 'All' && `in ${selectedCategory}`}
                    {searchTerm && ` matching "${searchTerm}"`}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Products Grid/List */}
        {filteredProducts.length > 0 ? (
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1'
          }`}>
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                viewMode={viewMode}
                onAddToCart={handleAddToCart}
                onViewDetails={handleViewDetails}
                onWishlist={handleWishlist}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🏴‍☠️</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2 font-pirate">No treasures found!</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search or filters to discover more pirate treasures.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchTerm('');
                setPriceRange([0, 500]);
              }}
              className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors font-pirate"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductListPage;