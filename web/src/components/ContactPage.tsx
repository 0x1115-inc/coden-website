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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Replace this URL with your actual Google Form submission URL
      const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScCxnL-b7omjMU7vOXR5e7ZuTXyVsvqyoZ_m6ybYeeA5qbA5g/formResponse';
      
      // Create FormData object with the correct field names from your Google Form
      const formDataToSubmit = new FormData();
      formDataToSubmit.append('entry.770207215', formData.name);
      formDataToSubmit.append('entry.1370657208', formData.email);
      formDataToSubmit.append('entry.1417307249', formData.company);
      formDataToSubmit.append('entry.1026090297', formData.message);
      
      // Submit to Google Form
      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Forms
        body: formDataToSubmit,
      });
      
      toast.success('Tin nhắn đã được gửi! Chúng tôi sẽ phản hồi bạn sớm nhất có thể.');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      detail: 'info@coden.org',
      link: 'mailto:info@coden.org',
    },
    {
      icon: Phone,
      title: 'Phone',
      detail: '+84 93639 7751',
      link: 'tel:+84936397751',
    },
    {
      icon: MapPin,
      title: 'Office',
      detail: 'Tầng 14, Toà nhà Việt Á, số 09 Duy Tân, Cầu Giấy, Hà Nội, Việt Nam.',
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent text-4xl font-extrabold mb-4">Liên hệ với chúng tôi</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Bạn có câu hỏi hoặc muốn hợp tác? Chúng tôi rất mong nhận được phản hồi từ bạn.
            Hãy gửi cho chúng tôi một tin nhắn và chúng tôi sẽ phản hồi sớm nhất có thể.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-gray-900 mb-6 text-lg font-semibold">Gửi cho chúng tôi một tin nhắn</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Họ và Tên *</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Họ và Tên của bạn"
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
                  <Label htmlFor="company">Công ty</Label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    placeholder="Bạn đến từ công ty nào?"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Tin nhắn *</Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Hãy cho chúng tôi biết về nhu cầu của bạn..."
                    rows={6}
                    className="mt-1"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Đang gửi...' : 'Gửi Tin Nhắn'}
                  <Send className="ml-2" size={18} />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-gray-900 mb-6 text-lg font-semibold">Thông tin liên hệ</h2>
              <p className="text-gray-600 mb-8">
                Hãy liên hệ với chúng tôi qua bất kỳ kênh nào trong số này. Chúng tôi luôn sẵn sàng giúp đỡ
                và trả lời bất kỳ câu hỏi nào bạn có thể có.
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
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d950.8663084757393!2d105.78417911971191!3d21.030552365590278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4c87a16803%3A0x33777b89208b1827!2zVmnhu4d0IMOBIFRvd2VyLCAwOSBEdXkgVMOibiwgROG7i2NoIFbhu41uZyBI4bqtdSwgQ-G6p3UgR2nhuqV5LCBIw6AgTuG7mWkgMTAwMDAwLCBWaWV0bmFt!5e0!3m2!1sen!2ssg!4v1761330009794!5m2!1sen!2ssg" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                  <p>Vị trí bản đồ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
