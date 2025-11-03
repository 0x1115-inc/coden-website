import { ArrowRight, Zap, Users, Target } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'framer-motion';
import { defaultLocale } from '../locales';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const { hero, features, cta } = defaultLocale.home;
  const featureIcons = [Zap, Target, Users];

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
               
              </motion.div>
              <motion.h1 
                className="text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent text-4xl font-extrabold">
                  Những ý tưởng táo bạo nhất
                </span>
                <br />
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent text-xl font-extrabold">đều có thể thành hiện thực</span>
              </motion.h1>
              
              <motion.p 
                className="text-gray-600 mb-8 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Tại Coden, chúng tôi tin rằng công nghệ không chỉ là công cụ - mà là chất xúc tác để biến tầm nhìn thành giá trị cụ thể. Với năng lực tư duy hệ thống, đội ngũ tận tâm và kinh nghiệm triển khai thực tiễn, chúng tôi đồng hành cùng bạn để xây dựng những giải pháp dữ liệu đột phá, hiệu quả và bền vững.
              </motion.p>

              
              
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <Button 
                  size="lg" 
                  onClick={() => onNavigate(hero.primaryCta.target)}
                  className="shadow-lg hover:shadow-xl transition-shadow"
                >
                  {hero.primaryCta.label}
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => onNavigate(hero.secondaryCta.target)}
                  className="shadow-sm hover:shadow-md transition-shadow"
                >
                  {hero.secondaryCta.label}
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
                  alt={hero.imageAlt}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              

             
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4 text-2xl font-bold">Vì sao chọn Coden?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Coden không chỉ cung cấp giải pháp công nghệ, chúng tôi đồng hành như một đối tác chiến lược. Với sự kết hợp giữa năng lực kỹ thuật, tư duy hệ thống và tinh thần phục vụ tận tâm, chúng tôi giúp doanh nghiệp, tổ chức khai thác tối đa giá trị từ dữ liệu và công nghệ.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.items.map((feature, index) => {
              const Icon = featureIcons[index];
              return (
                <div
                  key={feature.title}
                  className="p-6 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-indigo-600" size={24} />
                  </div>
                  <h3 className="text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4 text-2xl">
            Sẵn sàng biến ý tưởng của bạn thành hiện thực?
          </h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Còn chần chờ gì nữa? Hãy liên hệ với chúng tôi ngay hôm nay để bắt đầu hành trình chuyển đổi số và khám phá tiềm năng vô hạn của công nghệ cùng Coden.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={() => onNavigate('contact')}
          >
            Liên hệ ngay
          </Button>
        </div>
      </section>
    </div>
  );
}
