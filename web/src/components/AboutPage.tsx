import { Heart, Lightbulb, Rocket, Shield } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'We put our customers at the heart of everything we do, ensuring their success is our success.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push boundaries and explore new technologies to stay ahead of the curve.',
    },
    {
      icon: Rocket,
      title: 'Growth Mindset',
      description: 'We believe in continuous learning and improvement, both for our team and our clients.',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We maintain the highest standards of honesty and transparency in all our relationships.',
    },
  ];

  const team = [
    { name: 'Alex Johnson', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400' },
    { name: 'Sarah Chen', role: 'CTO', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400' },
    { name: 'Michael Brown', role: 'Head of Design', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400' },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-gray-900 mb-6">About Us</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We're a team of passionate innovators, designers, and developers 
              committed to creating digital experiences that make a difference.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-gray-900 mb-6 text-center">Our Story</h2>
            <div className="space-y-4 text-center">
              <p className="text-gray-600">
                Founded in 2023, we started with a simple mission: to help businesses 
                leverage technology to achieve their goals. What began as a small team 
                of three has grown into a diverse group of talented professionals.
              </p>
              <p className="text-gray-600">
                Today, we've helped dozens of companies transform their digital presence 
                and build products that users love. Our approach combines strategic thinking, 
                creative design, and technical excellence.
              </p>
              <p className="text-gray-600">
                We're not just building products – we're building lasting partnerships 
                and creating solutions that drive real business impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do and shape how we work 
              with our clients and each other.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-indigo-600" size={28} />
                </div>
                <h3 className="text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A diverse group of talented individuals working together to build 
              exceptional products.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="aspect-square rounded-2xl overflow-hidden mb-4 shadow-lg">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-gray-900 mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
