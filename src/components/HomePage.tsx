import { ArrowRight, Zap, Users, Target, Sparkles, TrendingUp, Award } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'framer-motion';
import { Badge } from './ui/badge';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const features = [
    {
      icon: Zap,
      title: 'Fast & Efficient',
      description: 'Lightning-fast solutions that scale with your business needs.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Built for teams to work together seamlessly and productively.',
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Focused on delivering results that matter to your business.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Badge className="mb-4 bg-indigo-100 text-indigo-700 hover:bg-indigo-100">
                  <Sparkles className="mr-1" size={14} />
                  Trusted by 500+ Companies
                </Badge>
              </motion.div>
              
              <motion.h1 
                className="text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Transform Your Ideas
                </span>
                <br />
                Into Reality
              </motion.h1>
              
              <motion.p 
                className="text-gray-600 mb-8 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                We're a passionate startup dedicated to building innovative solutions 
                that empower businesses to thrive in the digital age. Let's create 
                something amazing together.
              </motion.p>

              <motion.div 
                className="flex flex-wrap gap-6 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <TrendingUp className="text-green-600" size={20} />
                  </div>
                  <div>
                    <div className="text-gray-900">98%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Award className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <div className="text-gray-900">150+</div>
                    <div className="text-sm text-gray-600">Projects Done</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <Button 
                  size="lg" 
                  onClick={() => onNavigate('contact')}
                  className="shadow-lg hover:shadow-xl transition-shadow"
                >
                  Get Started
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => onNavigate('works')}
                  className="shadow-sm hover:shadow-md transition-shadow"
                >
                  View Our Work
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {/* Decorative floating elements */}
              <motion.div
                className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-2xl opacity-20 blur-xl"
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-pink-400 to-orange-400 rounded-2xl opacity-20 blur-xl"
                animate={{ 
                  y: [0, 20, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div 
                className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-purple-600/20 z-10" />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1623715537851-8bc15aa8c145?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MTIyNDM2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Modern workspace"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating card */}
              <motion.div
                className="absolute bottom-8 -left-4 bg-white rounded-xl shadow-xl p-4 z-20 hidden lg:block"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                    <Zap className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-gray-900">Fast Delivery</div>
                    <div className="text-sm text-gray-600">2x faster than average</div>
                  </div>
                </div>
              </motion.div>

              {/* Stats badge */}
              <motion.div
                className="absolute top-8 -right-4 bg-white rounded-xl shadow-xl p-4 z-20 hidden lg:block"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-center">
                  <div className="text-3xl text-indigo-600 mb-1">4.9</div>
                  <div className="text-sm text-gray-600">Client Rating</div>
                  <div className="flex gap-0.5 mt-1 justify-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine cutting-edge technology with creative thinking to deliver 
              solutions that drive real business value.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="text-indigo-600" size={24} />
                </div>
                <h3 className="text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life. 
            Get in touch with us today.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={() => onNavigate('contact')}
          >
            Contact Us Now
          </Button>
        </div>
      </section>
    </div>
  );
}
