import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useState, type FormEvent } from 'react';
import { toast } from 'sonner';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success('Message sent! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      detail: 'hello@yourstartup.com',
      link: 'mailto:hello@yourstartup.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      detail: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Office',
      detail: '123 Innovation Street, San Francisco, CA 94102',
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-gray-900 mb-6">Get In Touch</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Have a question or want to work together? We'd love to hear from you. 
            Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-gray-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Your name"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="your@email.com"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    placeholder="Your company name"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about your project..."
                    rows={6}
                    className="mt-1"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                  <Send className="ml-2" size={18} />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-gray-900 mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-8">
                Reach out to us through any of these channels. We're here to help 
                and answer any questions you might have.
              </p>

              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-indigo-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-gray-900 mb-1">{info.title}</h3>
                      <p className="text-gray-600">{info.detail}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="rounded-xl overflow-hidden border border-gray-200 h-64 bg-gray-100 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin size={48} className="mx-auto mb-2 opacity-50" />
                  <p>Map Location</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
