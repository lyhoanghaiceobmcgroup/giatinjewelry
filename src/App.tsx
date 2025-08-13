import React, { useState } from 'react';
import { Search, User, Heart, ShoppingBag, Phone, MapPin, Video, Truck, Shield, MessageCircle, Diamond, RotateCcw, ChevronRight, Play } from 'lucide-react';

function App() {
  const [isEngagementDropdownOpen, setIsEngagementDropdownOpen] = useState(false);
  const [isWeddingDropdownOpen, setIsWeddingDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        {/* Single header bar */}
        <div className="px-4 py-3">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/* Left side - Contact info */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">1.415.426.2781</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Stores</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  <div className="w-4 h-4 border border-gray-400 rounded flex items-center justify-center">
                    <Video className="w-2.5 h-2.5 text-gray-600" />
                  </div>
                  <span className="text-sm text-gray-600">Virtual Appointment</span>
                </div>
              </div>
            </div>
            
            {/* Center - Logo */}
            <div className="flex items-center">
              <h1 className="text-xl font-normal tracking-[0.15em] text-gray-900" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>GIA TÍN JEWELRY</h1>
              <div className="ml-1 text-gray-400">|</div>
              <span className="ml-2 text-sm text-gray-600 font-light" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>20 Years of Yes</span>
            </div>
            
            {/* Right side - Icons and VND */}
            <div className="flex items-center space-x-4">
              <Search className="w-4 h-4 cursor-pointer hover:text-gray-800 text-gray-600" />
              <User className="w-4 h-4 cursor-pointer hover:text-gray-800 text-gray-600" />
              <Heart className="w-4 h-4 cursor-pointer hover:text-gray-800 text-gray-600" />
              <ShoppingBag className="w-4 h-4 cursor-pointer hover:text-gray-800 text-gray-600" />
              <div className="flex items-center space-x-1">
                <span className="w-4 h-4 text-red-500 text-xs">🇻🇳</span>
                <span className="text-sm text-gray-900 font-medium">VND</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <div className="border-t border-gray-100 px-4 py-3 relative">
          <nav className="max-w-7xl mx-auto flex justify-center items-center space-x-12 text-sm font-normal text-gray-700 tracking-wide">
            <div 
              className="relative"
              onMouseEnter={() => setIsEngagementDropdownOpen(true)}
              onMouseLeave={() => setIsEngagementDropdownOpen(false)}
            >
              <a href="#" className="hover:text-gray-900 transition-colors">
                ENGAGEMENT RINGS
              </a>
              
              {/* Dropdown Menu */}
              {isEngagementDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 w-screen bg-white border-t border-gray-200 shadow-lg z-50" style={{marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)'}}>
                    <div className="w-full grid grid-cols-4 gap-8 px-4 py-8">
                    {/* Design Your Own Engagement Ring */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-4 tracking-wide">DESIGN YOUR OWN ENGAGEMENT RING</h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li><a href="#" className="hover:text-gray-900 transition-colors flex items-center"><span className="mr-2">💍</span>Start with a Setting</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors flex items-center"><span className="mr-2">💎</span>Start with a Natural Diamond</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors flex items-center"><span className="mr-2">🔬</span>Start with a Lab Grown Diamond</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors flex items-center"><span className="mr-2">💠</span>Start with a Gemstone</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors flex items-center"><span className="mr-2">💒</span>Start with a Bridal Set</a></li>
                      </ul>
                      
                      <h4 className="text-sm font-semibold text-gray-900 mb-3 mt-6 tracking-wide">SHOP BY SHAPE</h4>
                      <div className="grid grid-cols-3 gap-2 text-xs text-gray-600">
                        <a href="#" className="hover:text-gray-900 transition-colors">Oval</a>
                        <a href="#" className="hover:text-gray-900 transition-colors">Marquise</a>
                        <a href="#" className="hover:text-gray-900 transition-colors">Emerald</a>
                        <a href="#" className="hover:text-gray-900 transition-colors">Radiant</a>
                        <a href="#" className="hover:text-gray-900 transition-colors">Round</a>
                        <a href="#" className="hover:text-gray-900 transition-colors">Cushion</a>
                        <a href="#" className="hover:text-gray-900 transition-colors">Pear</a>
                        <a href="#" className="hover:text-gray-900 transition-colors">Princess</a>
                        <a href="#" className="hover:text-gray-900 transition-colors">Asscher</a>
                        <a href="#" className="hover:text-gray-900 transition-colors">Heart</a>
                      </div>
                      <a href="#" className="text-xs text-teal-600 hover:text-teal-800 transition-colors mt-2 inline-block">Shop All Engagement Rings &gt;</a>
                    </div>
                    
                    {/* Engagement Ring Styles */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-4 tracking-wide">ENGAGEMENT RING STYLES</h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Solitaire</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Three Stone</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Nature Inspired</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Hidden Halo</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Halo</a></li>
                      </ul>
                      
                      <h4 className="text-sm font-semibold text-gray-900 mb-3 mt-6 tracking-wide">GEMSTONE ENGAGEMENT RINGS</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Moissanite</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Sapphire</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Emerald</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Aquamarine</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Morganite</a></li>
                      </ul>
                    </div>
                    
                    {/* Featured */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-4 tracking-wide">FEATURED</h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Ready to Ship Engagement Rings</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Top 20 Engagement Rings</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Signature Collections</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">20th Anniversary Collection</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Men's Engagement Rings</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Custom Engagement Rings</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Petite Collection</a></li>
                      </ul>
                    </div>
                    
                    {/* The Brilliant Earth Difference */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-4 tracking-wide">THE BRILLIANT EARTH DIFFERENCE</h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li><a href="#" className="hover:text-gray-900 transition-colors">We've Got You Covered</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Diamond Transparency</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Responsibly Gold</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">20 Years of Diamond Innovation</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Our Mission</a></li>
                      </ul>
                      
                      <h4 className="text-sm font-semibold text-gray-900 mb-3 mt-6 tracking-wide">ENGAGEMENT RING GUIDES</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Engagement Ring Style Guide</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">How Much to Spend on an Engagement Ring</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Is Platinum Better Than Gold?</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Free Ring Sizer</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">2024 Engagement Ring Trends</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div 
              className="relative"
              onMouseEnter={() => setIsWeddingDropdownOpen(true)}
              onMouseLeave={() => setIsWeddingDropdownOpen(false)}
            >
              <a href="#" className="hover:text-gray-900 transition-colors">
                WEDDING RINGS
              </a>
              
              {/* Wedding Rings Dropdown Menu */}
              {isWeddingDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 w-screen bg-white border-t border-gray-200 shadow-lg z-50" style={{marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)'}}>
                    <div className="w-full grid grid-cols-4 gap-8 px-4 py-8">
                    {/* Women's Wedding Rings */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-4 tracking-wide">WOMEN</h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Women's Wedding Rings</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Find My Matching Wedding Ring</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Design Your Own Ring Stack</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Diamond Rings</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Wedding Ring Sets</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Eternity Rings</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Anniversary Rings</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Curved Rings</a></li>
                      </ul>
                      <a href="#" className="text-xs text-teal-600 hover:text-teal-800 transition-colors mt-2 inline-block">Shop All Wedding Rings &gt;</a>
                    </div>
                    
                    {/* Men's Wedding Rings */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-4 tracking-wide">MEN</h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Men's Wedding Bands</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Classic Bands</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Men's Engagement Rings</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Customize Your Own Ring</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Diamond Bands</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Matte Bands</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Hammered Bands</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Men's Jewelry</a></li>
                      </ul>
                    </div>
                    
                    {/* Women's by Metal & Featured */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-4 tracking-wide">WOMEN'S BY METAL</h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Platinum</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Yellow Gold</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">White Gold</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Rose Gold</a></li>
                      </ul>
                      
                      <h4 className="text-sm font-semibold text-gray-900 mb-3 mt-6 tracking-wide">MEN'S BY METAL</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Platinum</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Yellow Gold</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">White Gold</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Tungsten</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Tantalum</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Rose Gold</a></li>
                      </ul>
                    </div>
                    
                    {/* Featured & Wedding Band Guides */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-4 tracking-wide">FEATURED</h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Top 20 Women's Rings</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Top 20 Men's Bands</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Couple Rings</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Gender Neutral Rings</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Signature Collections</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">20th Anniversary Collection</a></li>
                      </ul>
                      
                      <h4 className="text-sm font-semibold text-gray-900 mb-3 mt-6 tracking-wide">WEDDING BAND GUIDES</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Women's Wedding Band Style Guide</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Men's Wedding Band Style Guide</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Ring Engraving Guide</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">2025 Wedding Ring Trends</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Wedding Ring Budget Guide</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <a href="#" className="hover:text-gray-900 transition-colors">DIAMONDS</a>
            <a href="#" className="hover:text-gray-900 transition-colors">GEMSTONES</a>
            <a href="#" className="hover:text-gray-900 transition-colors">JEWELRY</a>
            <a href="#" className="hover:text-gray-900 transition-colors">GIFTS</a>
            <a href="#" className="hover:text-gray-900 transition-colors">ABOUT</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="grid md:grid-cols-2">
          {/* Easy Yes */}
          <div className="relative h-96 md:h-[500px] bg-cover bg-center" style={{
            backgroundImage: 'url("/HeroSection/1.webp")'
          }}>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
              <h2 className="text-4xl md:text-6xl font-light mb-8 tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>Easy Yes</h2>
              <button className="bg-white text-gray-900 px-8 py-3 text-sm font-normal tracking-wide hover:bg-gray-100 transition-colors">
                Shop Engagement Rings
              </button>
            </div>
          </div>
          
          {/* All Stacked Up */}
          <div className="relative h-96 md:h-[500px] bg-cover bg-center" style={{
            backgroundImage: 'url("/HeroSection/2.webp")'
          }}>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
              <h2 className="text-4xl md:text-6xl font-light text-gray-800 mb-8 tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>All Stacked Up</h2>
              <button className="bg-teal-800 text-white px-8 py-3 text-sm font-normal tracking-wide hover:bg-teal-900 transition-colors">
                Shop Wedding Rings
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Jewelry by Category */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light text-gray-900 mb-4 tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>Shop Jewelry by Category</h2>
          <p className="text-gray-600 mb-12 font-light">Thoughtfully designed collections for the big day and every day.</p>
          
          <div className="grid grid-cols-6 gap-6">
            {[
              { name: 'Engagement Rings', image: '/ShopJewelrybyCategory/1.JPG', hoverImage: '/ShopJewelrybyCategory/1a.JPG' },
              { name: "Women's Wedding Rings", image: '/ShopJewelrybyCategory/2.JPG', hoverImage: '/ShopJewelrybyCategory/2a.jpg' },
              { name: "Men's Wedding Rings", image: '/ShopJewelrybyCategory/3.JPG', hoverImage: '/ShopJewelrybyCategory/3a.JPG' },
              { name: 'Gemstone Rings', image: '/ShopJewelrybyCategory/4.JPG', hoverImage: '/ShopJewelrybyCategory/4a.JPG' },
              { name: 'Fine Jewelry', image: '/ShopJewelrybyCategory/5.JPG', hoverImage: '/ShopJewelrybyCategory/5a.JPG' },
              { name: 'Best Sellers', image: '/ShopJewelrybyCategory/6.JPG', hoverImage: '/ShopJewelrybyCategory/6a.JPG' }
            ].map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="h-80 md:h-96 bg-gray-100 rounded-lg mb-4 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                  />
                  <img 
                    src={item.hoverImage} 
                    alt={item.name}
                    className="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </div>
                <h3 className="font-normal text-gray-900 group-hover:text-gray-600 transition-colors text-sm">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop Diamonds by Shape */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>Shop Diamonds by Shape</h2>
              <div className="flex justify-center mb-8">
                <img 
                  id="main-diamond-image"
                  src="/Shop Diamonds by Shape/BIG.webp" 
                  alt="Diamond Ring"
                  className="w-48 h-48 object-cover"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-5 gap-6">
              {[
                { name: 'Oval', image: '/Shop Diamonds by Shape/1.webp' },
                { name: 'Round', image: '/Shop Diamonds by Shape/2.webp' },
                { name: 'Emerald', image: '/Shop Diamonds by Shape/3.webp' },
                { name: 'Marquise', image: '/Shop Diamonds by Shape/4.webp' },
                { name: 'Radiant', image: '/Shop Diamonds by Shape/5.webp' },
                { name: 'Pear', image: '/Shop Diamonds by Shape/6.webp' },
                { name: 'Elongated Cushion', image: '/Shop Diamonds by Shape/7.webp' },
                { name: 'Cushion', image: '/Shop Diamonds by Shape/8.webp' },
                { name: 'Princess', image: '/Shop Diamonds by Shape/9.webp' },
                { name: 'Asscher', image: '/Shop Diamonds by Shape/10.jpeg' }
              ].map((shape, index) => (
                <div 
                  key={index} 
                  className="text-center group cursor-pointer"
                  onMouseEnter={() => {
                    const mainImage = document.getElementById('main-diamond-image');
                    if (mainImage) mainImage.src = shape.image;
                  }}
                  onMouseLeave={() => {
                    const mainImage = document.getElementById('main-diamond-image');
                    if (mainImage) mainImage.src = '/Shop Diamonds by Shape/BIG.webp';
                  }}
                >
                  <div className="w-16 h-16 mx-auto bg-white rounded-full shadow-lg mb-3 flex items-center justify-center group-hover:shadow-xl transition-shadow overflow-hidden">
                    <img 
                      src={shape.image}
                      alt={shape.name}
                      className="w-12 h-12 object-cover rounded-full"
                    />
                  </div>
                  <p className="text-xs text-gray-700 group-hover:text-gray-900 transition-colors font-light">{shape.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Engagement Rings */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light text-gray-900 mb-4 tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>Popular Engagement Rings</h2>
          <p className="text-gray-600 mb-12 font-light">Artistry and craftsmanship in every detail.</p>
          
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              { name: 'Solitaire Rings', image: '/Popular Engagement Rings/1.avif' },
              { name: 'Nature Inspired Rings', image: '/Popular Engagement Rings/2.avif' },
              { name: 'Three Stone Rings', image: '/Popular Engagement Rings/3.avif' },
              { name: 'Bridal Sets', image: '/Popular Engagement Rings/4.avif' }
            ].map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="h-64 bg-gray-100 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-normal text-gray-900 group-hover:text-gray-600 transition-colors">{item.name}</h3>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-light text-gray-900 mb-8 text-center tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>Our Must-Have Rings</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative">
                <div className="absolute top-8 left-8 z-10">
                  <button className="bg-gray-900 text-white px-6 py-2 text-sm font-normal tracking-wide hover:bg-gray-800 transition-colors">
                    Shop Now
                  </button>
                </div>
                <div className="h-96 bg-gray-100 rounded-lg overflow-hidden">
                  <img 
                    src="/Our Must-Have Rings/1.webp" 
                    alt="Must-Have Rings"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-44 bg-gray-100 rounded-lg overflow-hidden">
                    <img 
                      src="/Our Must-Have Rings/2.webp" 
                      alt="Eternity Rings"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-sm font-normal text-gray-900 mb-1">Eternity Rings</h4>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-44 bg-gray-100 rounded-lg overflow-hidden">
                    <img 
                      src="/Our Must-Have Rings/3.webp" 
                      alt="Simple Rings"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-sm font-normal text-gray-900 mb-1">Simple Rings</h4>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-44 bg-gray-100 rounded-lg overflow-hidden">
                    <img 
                      src="/Our Must-Have Rings/4.webp" 
                      alt="Curved Rings"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-sm font-normal text-gray-900 mb-1">Curved Rings</h4>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-44 bg-gray-100 rounded-lg overflow-hidden">
                    <img 
                      src="/Our Must-Have Rings/5.webp" 
                      alt="Bezel Rings"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-sm font-normal text-gray-900 mb-1">Bezel Rings</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 20 Years of Yes */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light text-gray-900 mb-12 tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>20 Years of Yes</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Signature Collections */}
            <div className="relative h-96 rounded-lg overflow-hidden text-white" style={{
              backgroundImage: 'url("/20 Years of Yes/2.webp")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-2xl font-light mb-2 tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>Signature Collections</h3>
                <p className="text-sm mb-6 opacity-90 font-light">The smallest details make the biggest impact.</p>
                <button className="border border-white px-6 py-2 text-sm font-normal tracking-wide hover:bg-white hover:text-gray-900 transition-colors">
                  Shop Now
                </button>
              </div>
            </div>
            
            {/* Pacific Green Lab Diamonds */}
            <div className="relative h-96 rounded-lg overflow-hidden text-white" style={{
              backgroundImage: 'url("/20 Years of Yes/3.webp")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-2xl font-light mb-2 tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>Pacific Green Lab Diamonds</h3>
                <p className="text-sm mb-6 opacity-90 font-light">A new and exclusive color.</p>
                <button className="border border-white px-6 py-2 text-sm font-normal tracking-wide hover:bg-white hover:text-gray-900 transition-colors">
                  Shop Now
                </button>
              </div>
            </div>
            
            {/* 20th Anniversary Collection */}
            <div className="relative h-96 rounded-lg overflow-hidden text-white" style={{
              backgroundImage: 'url("/20 Years of Yes/assets2F5f1f4f3a446943da9da61d9fa5466411.webp")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-2xl font-light mb-2 tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>20th Anniversary Collection</h3>
                <p className="text-sm mb-6 opacity-90 font-light">Celebrating two decades of design excellence.</p>
                <button className="border border-white px-6 py-2 text-sm font-normal tracking-wide hover:bg-white hover:text-gray-900 transition-colors">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We're Here for You, In Person and Online */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="h-96 rounded-lg overflow-hidden">
              <img 
                src="/below 20 years/1.jpg" 
                alt="Jewelry Store Interior"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-6 tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>We're Here for You, In Person and Online</h2>
              <p className="text-gray-700 mb-8 font-light">Whether it's at a store near you or online, we curate your appointment just for you.</p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="border border-gray-900 px-8 py-3 text-gray-900 font-normal tracking-wide hover:bg-gray-900 hover:text-white transition-colors">
                  Visit a Showroom
                </button>
                <button className="border border-gray-900 px-8 py-3 text-gray-900 font-normal tracking-wide hover:bg-gray-900 hover:text-white transition-colors">
                  Book a Virtual Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* We've Got You Covered */}
      <section className="py-16 px-4 bg-teal-800 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light text-center mb-12 tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>We've Got You Covered</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 border-2 border-white rounded-full flex items-center justify-center">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-sm font-normal tracking-wide mb-2">FREE SHIPPING & RETURNS</h3>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 border-2 border-white rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-sm font-normal tracking-wide mb-2">FREE LIFETIME WARRANTY</h3>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 border-2 border-white rounded-full flex items-center justify-center">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="text-sm font-normal tracking-wide mb-2">24/7 CUSTOMER SUPPORT</h3>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 border-2 border-white rounded-full flex items-center justify-center">
                <Diamond className="w-8 h-8" />
              </div>
              <h3 className="text-sm font-normal tracking-wide mb-2">LIFETIME DIAMOND UPGRADE</h3>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 border-2 border-white rounded-full flex items-center justify-center">
                <RotateCcw className="w-8 h-8" />
              </div>
              <h3 className="text-sm font-normal tracking-wide mb-2">FREE 60-DAY RESIZING</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="h-96 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg overflow-hidden">
              <img 
                src="/We've Got You Covered/1.jpg" 
                alt="Mission Image"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <p className="text-sm text-gray-600 mb-4 font-light tracking-wide">20 YEARS OF OUR MISSION</p>
              <p className="text-lg text-gray-800 mb-8 font-light leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                From our pioneering diamond standards to our unmatched transparency, we're redefining what it means to design, craft, and experience jewelry that makes a real difference.
              </p>
              <button className="text-gray-800 font-normal tracking-wide hover:text-gray-600 transition-colors border-b border-gray-800 hover:border-gray-600 mb-8">
                Learn More
              </button>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img 
                    src="/We've Got You Covered/2.jpg" 
                    alt="Mission Image 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img 
                    src="/We've Got You Covered/3.jpg" 
                    alt="Mission Image 3"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img 
                    src="/We've Got You Covered/4.jpg" 
                    alt="Mission Image 4"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Inspired */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-light text-gray-900 tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>Get Inspired</h2>
            <button className="text-gray-800 font-normal tracking-wide hover:text-gray-600 transition-colors border-b border-gray-800 hover:border-gray-600">
              Shop Instagram
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {[
              { image: '/Get Inspired/1.JPG', hasVideo: false },
              { image: '/Get Inspired/2.JPG', hasVideo: true },
              { image: '/Get Inspired/3.JPG', hasVideo: true },
              { image: '/Get Inspired/4.JPG', hasVideo: false, hasShopNow: true },
              { image: '/Get Inspired/5.JPG', hasVideo: true },
              { image: '/Get Inspired/6.JPG', hasVideo: true }
            ].map((item, index) => (
              <div key={index} className="relative group cursor-pointer">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={`Instagram post ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {item.hasVideo && (
                  <div className="absolute top-2 right-2">
                    <Play className="w-4 h-4 text-white" />
                  </div>
                )}
                {item.hasShopNow && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                    <button className="bg-white text-gray-900 px-4 py-2 text-sm font-normal tracking-wide hover:bg-gray-100 transition-colors">
                      Shop Now
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 px-4 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8 text-center">
            {/* About */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4 tracking-wide">ABOUT</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Our Mission</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Responsible Sourcing</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Sustainability Goals</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">How We Give Back</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Our People</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Brilliant Earth Reviews</a></li>
              </ul>
              
              <h3 className="text-sm font-semibold text-gray-900 mb-4 mt-6 tracking-wide">EDUCATION</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">4 C's of Diamond Guide</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Lab Grown Diamond Guide</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Moissanite vs. Diamond Guide</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Free Ring Sizer + Ring Size Chart</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Investor Relations</a></li>
              </ul>
            </div>

            {/* Orders */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4 tracking-wide">ORDERS</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Track Your Order</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Free 30 Day Returns</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Free Shipping Both Ways</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Free Lifetime Warranty</a></li>
              </ul>
              
              <h3 className="text-sm font-semibold text-gray-900 mb-4 mt-6 tracking-wide">CUSTOMER SERVICE</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">We've Got You Covered</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Lifetime Diamond Upgrade</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Promo Codes & Offers</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Refer a Friend</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Accessibility</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Accessibility Info</a></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4 tracking-wide">CONTACT US</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Live Chat</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Book Appointment</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Stores</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Email Us</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">1.415.426.2781</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Affiliates</a></li>
              </ul>
            </div>

            {/* Sign Up */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4 tracking-wide">SIGN UP</h3>
              <p className="text-sm text-gray-600 mb-4">Email me updates and offers</p>
              <div className="flex justify-center mb-6">
                <input 
                  type="email" 
                  placeholder="Your Email Address"
                  className="flex-1 px-3 py-2 border border-gray-300 text-sm focus:outline-none focus:border-gray-500"
                />
                <button className="bg-gray-900 text-white px-4 py-2 hover:bg-gray-800 transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              
              <div className="flex justify-center space-x-3">
                <a href="https://www.facebook.com/share/15yL8zhFHo/?mibextid=wwXlfr" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Bottom Footer */}
          <div className="border-t border-gray-200 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
              <div className="flex flex-wrap items-center gap-4 mb-4 md:mb-0">
                <span>©2025 Brilliant Earth, LLC</span>
                <a href="#" className="hover:text-gray-700">Terms & Conditions</a>
                <a href="#" className="hover:text-gray-700">Privacy Policy</a>
                <a href="#" className="hover:text-gray-700">Interest-Based Ads</a>
                <a href="#" className="hover:text-gray-700">Do Not Sell or Share My Personal Information</a>
                <a href="#" className="hover:text-gray-700">CA Transparency Act</a>
                <a href="#" className="hover:text-gray-700">CPRA</a>
                <a href="#" className="hover:text-gray-700">Site Map</a>
              </div>
              <div className="flex items-center gap-2">
                <span>AUD</span>
                <span>|</span>
                <span>CAD</span>
                <span>|</span>
                <span>GBP</span>
                <span>|</span>
                <span>USD</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;