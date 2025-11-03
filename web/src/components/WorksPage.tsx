import {
  Lightbulb,
  Layers,
  Code2,
  Database,
  ClipboardList,
  Shield,
  ArrowRight,
  CheckCircle2,
  type LucideIcon,
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { motion } from 'framer-motion';
import { defaultLocale } from '../locales';

interface ServiceStyle {
  icon: LucideIcon;
  color: string;
  bgColor: string;
  textColor: string;
}

const SERVICE_STYLES: ServiceStyle[] = [
  {
    icon: Lightbulb,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
  },
  {
    icon: Layers,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-600',
  },
  {
    icon: Code2,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    textColor: 'text-green-600',
  },
  {
    icon: Database,
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50',
    textColor: 'text-orange-600',
  },
  {
    icon: ClipboardList,
    color: 'from-indigo-500 to-blue-500',
    bgColor: 'bg-indigo-50',
    textColor: 'text-indigo-600',
  },
  {
    icon: Shield,
    color: 'from-red-500 to-pink-500',
    bgColor: 'bg-red-50',
    textColor: 'text-red-600',
  },
];

export function WorksPage() {
  const { hero, services, process, cta, serviceLearnMoreLabel } = defaultLocale.works;

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-indigo-100 text-indigo-700 hover:bg-indigo-100">
              {hero.badge}
            </Badge>
            <h1 className="text-gray-900 mb-6">{hero.title}</h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              {hero.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const { icon: Icon, color, bgColor, textColor } =
                SERVICE_STYLES[index] ?? SERVICE_STYLES[0];

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="group h-full overflow-hidden border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300">
                    {/* Image Section */}
                    <div className="relative h-48 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-90`} />
                      <ImageWithFallback
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover mix-blend-overlay"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                          <Icon className={textColor} size={32} />
                        </div>
                      </div>
                      <div className={`absolute inset-0 ${bgColor} opacity-40`} />
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      <h3 className="text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>

                      {/* Features List */}
                      <div className="space-y-2 mb-4">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <CheckCircle2 className={textColor} size={16} />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Learn More Link */}
                      <button className={`flex items-center gap-2 ${textColor} group-hover:gap-3 transition-all`}>
                        {serviceLearnMoreLabel}
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">{process.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {process.description}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.steps.map((phase, index) => (
              <motion.div
                key={phase.step}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="text-center">
                  <div className="inline-block mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                      {phase.step}
                    </div>
                  </div>
                  <h3 className="text-gray-900 mb-2">{phase.title}</h3>
                  <p className="text-gray-600">{phase.description}</p>
                </div>
                {index < process.steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-indigo-300 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white mb-4">
              {cta.title}
            </h2>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto text-lg">
              {cta.description}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
                {cta.primaryCta}
              </button>
              <button className="px-8 py-3 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white/10 transition-colors">
                {cta.secondaryCta}
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
