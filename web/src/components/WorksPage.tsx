import {
  Lightbulb,
  Layers,
  Code2,
  Database,
  ClipboardList,
  Shield,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card } from './ui/card';
import { motion } from 'framer-motion';
import { useLocale } from '../locales';
import type { WorksServiceKey } from '../locales/types';

const serviceIconMap: Record<WorksServiceKey, typeof Lightbulb> = {
  strategy: Lightbulb,
  architecture: Layers,
  development: Code2,
  data: Database,
  project: ClipboardList,
  security: Shield,
};

const serviceVisuals: Record<WorksServiceKey, { image: string; color: string; textColor: string }> = {
  strategy: {
    image:
      'https://images.unsplash.com/photo-1758518729908-d4220a678d81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjBzdHJhdGVneXxlbnwxfHx8fDE3NjEyMDA2NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-blue-500 to-cyan-500',
    textColor: 'text-blue-600',
  },
  architecture: {
    image:
      'https://images.unsplash.com/photo-1753715613388-7e03410b1dce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGFyY2hpdGVjdHVyZSUyMGRpYWdyYW18ZW58MXx8fHwxNzYxMjc4NjczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-purple-500 to-pink-500',
    textColor: 'text-purple-600',
  },
  development: {
    image:
      'https://images.unsplash.com/photo-1650600538903-ec09f670c391?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9ncmFtbWluZyUyMHNjcmVlbnxlbnwxfHx8fDE3NjEyNzg2NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-green-500 to-emerald-500',
    textColor: 'text-green-600',
  },
  data: {
    image:
      'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NjEyNDM2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-orange-500 to-red-500',
    textColor: 'text-orange-600',
  },
  project: {
    image:
      'https://images.unsplash.com/photo-1627634771105-08a3a12ad228?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwcHJvamVjdCUyMG1hbmFnZW1lbnR8ZW58MXx8fHwxNzYxMjc4Njc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-indigo-500 to-blue-500',
    textColor: 'text-indigo-600',
  },
  security: {
    image:
      'https://images.unsplash.com/photo-1483817101829-339b08e8d83f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMHNlY3VyaXR5fGVufDF8fHx8MTc2MTI3ODY3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-red-500 to-pink-500',
    textColor: 'text-red-600',
  },
};

export function WorksPage() {
  const { content } = useLocale();
  const works = content.works;

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
            <h1 className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent text-4xl font-extrabold mb-4">
              {works.heroTitle}
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              {works.heroDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {works.services.map((service, index) => {
              const Icon = serviceIconMap[service.key];
              const visual = serviceVisuals[service.key];

              return (
                <motion.div
                  key={service.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="group h-full overflow-hidden border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300">
                    {/* Image Section */}
                    <div className="relative h-48 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${visual.color} opacity-90`} />
                      <ImageWithFallback
                        src={visual.image}
                        alt={service.title}
                        className="w-full h-full object-cover mix-blend-overlay"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                          <Icon className={visual.textColor} size={32} />
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      <h3 className="text-gray-900 mb-3 text-lg font-semibold">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>

                      {/* Features List */}
                      <div className="space-y-2 mb-4">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <CheckCircle2 className={visual.textColor} size={16} />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Learn More Link */}
                      <button
                        className={`flex items-center gap-2 ${visual.textColor} group-hover:gap-3 transition-all`}
                      >
                        {works.learnMoreLabel}
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
            <h2 className="text-gray-900 mb-4 text-2xl font-bold">{works.processTitle}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {works.processDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {works.processSteps.map((phase, index) => (
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
                  <h3 className="text-gray-900 mb-2 text-lg font-semibold">{phase.title}</h3>
                  <p className="text-gray-600">{phase.description}</p>
                </div>
                {index < works.processSteps.length - 1 && (
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
            <h2 className="text-white mb-4 text-2xl font-bold">
              {works.cta.title}
            </h2>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto text-lg">
              {works.cta.description}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
                {works.cta.primaryLabel}
              </button>
              <button className="px-8 py-3 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white/10 transition-colors">
                {works.cta.secondaryLabel}
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
