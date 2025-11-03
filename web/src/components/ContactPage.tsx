import { Mail, Phone, MapPin, Send, type LucideIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useState, type FormEvent } from 'react';
import { toast } from 'sonner';
import { defaultLocale } from '../locales';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success(defaultLocale.contact.toastSuccess);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const { hero, form, info, mapPlaceholder } = defaultLocale.contact;
  const contactIconMap: Record<string, LucideIcon> = {
    Email: Mail,
    Phone,
    Office: MapPin,
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-gray-900 mb-6">{hero.title}</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {hero.description}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-gray-900 mb-6">{form.title}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">{form.nameLabel}</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder={form.namePlaceholder}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email">{form.emailLabel}</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder={form.emailPlaceholder}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="company">{form.companyLabel}</Label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    placeholder={form.companyPlaceholder}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message">{form.messageLabel}</Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder={form.messagePlaceholder}
                    rows={6}
                    className="mt-1"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  {form.submitLabel}
                  <Send className="ml-2" size={18} />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-gray-900 mb-6">{info.title}</h2>
              <p className="text-gray-600 mb-8">
                {info.description}
              </p>

              <div className="space-y-6 mb-12">
                {info.items.map((item, index) => {
                  const Icon = contactIconMap[item.title] ?? Mail;
                  return (
                    <a
                      key={index}
                      href={item.link}
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="text-indigo-600" size={24} />
                      </div>
                      <div>
                        <h3 className="text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-gray-600">{item.detail}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Map placeholder */}
              <div className="rounded-xl overflow-hidden border border-gray-200 h-64 bg-gray-100 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin size={48} className="mx-auto mb-2 opacity-50" />
                  <p>{mapPlaceholder.label}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
