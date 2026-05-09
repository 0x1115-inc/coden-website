import { Heart, Boxes, Shield, Sprout } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import duc from '../assets/duc-cbo.jpg';
import cuong from '../assets/cuong-head-of-culture.jpg';
import minh from '../assets/minh.jpg';
import thanh from '../assets/thanh.jpg';
import duchm from '../assets/duc-sa.jpg';
import khanhbd from '../assets/khanh-partnership-manager.jpeg';
import binhnt from '../assets/binhnt.jpg';
import { useLocale } from '../locales';
import type { TeamImageKey, ValueIconKey } from '../locales/types';

export function AboutPage() {
  const { content } = useLocale();
  const about = content.about;

  const valueIconMap: Record<ValueIconKey, typeof Boxes> = {
    efficiency: Boxes,
    integrity: Shield,
    empathy: Heart,
    sustainability: Sprout,
  };

  const teamImages: Record<TeamImageKey, string> = {
    thanh,
    duc,
    cuong,
    minh,
    duchm,
    khanhbd,
    binhnt,
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent text-4xl font-extrabold mb-4">
              {about.heroTitle}
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {about.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Story Content */}
            <div className="space-y-6">
              {about.storyParagraphs.map((paragraph, index) => (
                <p key={index} className="text-gray-600 text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Story Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=450&fit=crop&crop=faces"
                  alt={about.storyImageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-100 rounded-full opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-100 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4 text-2xl font-bold">{about.valuesTitle}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {about.valuesDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {about.values.map((value, index) => {
              const Icon = valueIconMap[value.icon];
              return (
                <div key={index} className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-indigo-600" size={28} />
                </div>
                <h3 className="text-gray-900 mb-2 text-lg font-semibold">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4 text-2xl font-bold">{about.teamTitle}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {about.teamDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {about.teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="aspect-square rounded-2xl overflow-hidden mb-4 shadow-lg">
                  <ImageWithFallback
                    src={teamImages[member.image]}
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
