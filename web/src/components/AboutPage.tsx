import { Heart, Lightbulb, Rocket, Shield } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { defaultLocale } from '../locales';

export function AboutPage() {
  const { hero, story, values, team } = defaultLocale.about;
  const valueIcons = [Heart, Lightbulb, Rocket, Shield];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-gray-900 mb-6">{hero.title}</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {hero.description}
            </p>
          </div>

          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-gray-900 mb-6 text-center">{story.title}</h2>
            <div className="space-y-4 text-center">
              {story.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-gray-600">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">{values.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {values.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.items.map((value, index) => {
              const Icon = valueIcons[index];
              return (
                <div key={value.title} className="text-center">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-indigo-600" size={28} />
                  </div>
                  <h3 className="text-gray-900 mb-2">{value.title}</h3>
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
            <h2 className="text-gray-900 mb-4">{team.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {team.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.members.map((member) => (
              <div key={member.name} className="text-center">
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
