import { motion } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, Shield, Truck, Clock, Sparkles, Zap, Heart, Award } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  const features = [
    {
      icon: <Shield size={28} />,
      title: "Secure Shopping",
      description: "100% secure payment processing with bank-level encryption",
      gradient: "from-success-400 to-success-600"
    },
    {
      icon: <Truck size={28} />,
      title: "Lightning Fast",
      description: "Free express shipping on orders over $50",
      gradient: "from-secondary-400 to-secondary-600"
    },
    {
      icon: <Clock size={28} />,
      title: "24/7 Support",
      description: "Round the clock customer service and live chat",
      gradient: "from-accent-400 to-accent-600"
    },
    {
      icon: <Award size={28} />,
      title: "Premium Quality",
      description: "Curated products with guaranteed satisfaction",
      gradient: "from-primary-400 to-primary-600"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Creative Gradient */}
      <section className="relative bg-gradient-magical text-white py-24 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-gentle"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
              <Sparkles size={16} className="mr-2" />
              New Collection Launch
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black mb-6 leading-tight"
          >
            Discover
            <span className="block bg-gradient-to-r from-accent-300 to-yellow-300 bg-clip-text text-transparent">
              Amazing
            </span>
            <span className="block">Products</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto opacity-90 leading-relaxed"
          >
            Shop the latest trends with unbeatable prices and exceptional quality. 
            Your one-stop destination for everything you need, delivered with style.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="btn-primary text-lg px-10 py-4 flex items-center justify-center space-x-3">
              <span>Shop Now</span>
              <ArrowRight size={24} />
            </button>
            <button className="btn-outline text-lg px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-primary-600">
              Explore Collection
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section with Creative Cards */}
      <section className="py-20 bg-gradient-to-b from-light-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-6">
              Why Choose <span className="text-gradient-primary">ShopHub</span>?
            </h2>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto leading-relaxed">
              We're not just another e-commerce store. We're your lifestyle partner, 
              delivering excellence in every interaction.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group text-center p-8 card hover-lift"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-glow group-hover:shadow-glow-lg transition-all duration-300 transform group-hover:scale-110`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-dark-900 mb-3">{feature.title}</h3>
                <p className="text-dark-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products with Enhanced Design */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-6">
              Featured <span className="text-gradient-primary">Products</span>
            </h2>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto leading-relaxed">
              Discover our handpicked selection of premium products that combine 
              quality, style, and exceptional value.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <button className="btn-primary text-lg px-10 py-4 flex items-center justify-center space-x-3 mx-auto">
              <span>View All Products</span>
              <ArrowRight size={24} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Categories Section with Creative Design */}
      <section className="py-20 bg-gradient-to-br from-light-100 via-white to-light-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-6">
              Shop by <span className="text-gradient-secondary">Category</span>
            </h2>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto leading-relaxed">
              Explore our wide range of categories to find exactly what you're looking for, 
              organized for your convenience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {categories.slice(1).map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="card p-8 text-center hover-lift">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-glow group-hover:shadow-glow-lg transition-all duration-300 transform group-hover:scale-110">
                    <Star size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-dark-900 group-hover:text-gradient-primary transition-all duration-300">
                    {category}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-ocean text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your <span className="text-accent-300">Shopping</span> Experience?
            </h2>
            <p className="text-xl mb-10 opacity-90 leading-relaxed">
              Join thousands of satisfied customers who trust ShopHub for their lifestyle needs. 
              Start shopping today and discover the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-accent text-lg px-10 py-4 flex items-center justify-center space-x-3">
                <span>Get Started</span>
                <Zap size={24} />
              </button>
              <button className="border-2 border-white text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-secondary-600 transition-all duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
