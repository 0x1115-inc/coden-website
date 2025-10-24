import { 
  Lightbulb, 
  Layers, 
  Code2, 
  Database, 
  ClipboardList, 
  Shield,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { motion } from 'framer-motion';

export function WorksPage() {
  const services = [
    {
      icon: Lightbulb,
      title: 'Solution Consulting',
      description: 'Strategic guidance to identify the best technology solutions for your business challenges. We analyze your needs and provide actionable recommendations.',
      image: 'https://images.unsplash.com/photo-1758518729908-d4220a678d81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjBzdHJhdGVneXxlbnwxfHx8fDE3NjEyMDA2NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['Business Analysis', 'Technology Assessment', 'ROI Optimization', 'Digital Transformation'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
    },
    {
      icon: Layers,
      title: 'Architecture Design',
      description: 'Scalable and robust system architecture tailored to your requirements. We design future-proof solutions that grow with your business.',
      image: 'https://images.unsplash.com/photo-1753715613388-7e03410b1dce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGFyY2hpdGVjdHVyZSUyMGRpYWdyYW18ZW58MXx8fHwxNzYxMjc4NjczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['System Design', 'Microservices Architecture', 'Cloud Solutions', 'API Design'],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
    },
    {
      icon: Code2,
      title: 'Software Development',
      description: 'Full-stack development services using cutting-edge technologies. From web applications to mobile apps, we build products users love.',
      image: 'https://images.unsplash.com/photo-1650600538903-ec09f670c391?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9ncmFtbWluZyUyMHNjcmVlbnxlbnwxfHx8fDE3NjEyNzg2NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['Web Applications', 'Mobile Apps', 'Custom Software', 'API Development'],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
    },
    {
      icon: Database,
      title: 'Data Processing',
      description: 'Transform raw data into valuable insights. We handle data pipeline design, ETL processes, and analytics to power your decision-making.',
      image: 'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NjEyNDM2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['Data Pipelines', 'ETL Solutions', 'Big Data Analytics', 'Data Warehousing'],
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
    },
    {
      icon: ClipboardList,
      title: 'Project Management',
      description: 'End-to-end project oversight ensuring timely delivery and quality. We use agile methodologies to keep your projects on track and within budget.',
      image: 'https://images.unsplash.com/photo-1627634771105-08a3a12ad228?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwcHJvamVjdCUyMG1hbmFnZW1lbnR8ZW58MXx8fHwxNzYxMjc4Njc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['Agile/Scrum', 'Resource Planning', 'Risk Management', 'Quality Assurance'],
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-600',
    },
    {
      icon: Shield,
      title: 'Pentesting',
      description: 'Comprehensive security testing to identify and fix vulnerabilities. Protect your systems with our expert penetration testing services.',
      image: 'https://images.unsplash.com/photo-1483817101829-339b08e8d83f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMHNlY3VyaXR5fGVufDF8fHx8MTc2MTI3ODY3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['Vulnerability Assessment', 'Security Audits', 'Compliance Testing', 'Threat Modeling'],
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600',
    },
  ];

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
              Our Services
            </Badge>
            <h1 className="text-gray-900 mb-6">What We Do</h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              We offer comprehensive technology solutions to help your business succeed. 
              From strategy to implementation, we're your trusted partner in digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="group h-full overflow-hidden border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300">
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-90`} />
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover mix-blend-overlay"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                        <service.icon className={service.textColor} size={32} />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <h3 className="text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>

                    {/* Features List */}
                    <div className="space-y-2 mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle2 className={service.textColor} size={16} />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Learn More Link */}
                    <button className={`flex items-center gap-2 ${service.textColor} group-hover:gap-3 transition-all`}>
                      Learn More
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Our Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a proven methodology to ensure successful project delivery
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your needs and goals' },
              { step: '02', title: 'Planning', description: 'Creating a roadmap for success' },
              { step: '03', title: 'Execution', description: 'Building and implementing solutions' },
              { step: '04', title: 'Support', description: 'Ongoing maintenance and optimization' },
            ].map((phase, index) => (
              <motion.div
                key={index}
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
                {index < 3 && (
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
              Ready to Get Started?
            </h2>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto text-lg">
              Let's discuss which of our services can help your business achieve its goals.
              Our team is ready to turn your vision into reality.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
                Schedule a Consultation
              </button>
              <button className="px-8 py-3 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white/10 transition-colors">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
