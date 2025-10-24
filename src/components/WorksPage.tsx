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
      title: 'Tư vấn chiến lược',
      description: 'Tư vấn chiến lược để xác định các giải pháp công nghệ tốt nhất cho những thách thức trong kinh doanh của bạn. Chúng tôi phân tích nhu cầu của bạn và cung cấp các khuyến nghị có thể hành động.',
      image: 'https://images.unsplash.com/photo-1758518729908-d4220a678d81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjBzdHJhdGVneXxlbnwxfHx8fDE3NjEyMDA2NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['Phân tích kinh doanh', 'Đánh giá công nghệ', 'Tối ưu hóa ROI', 'Chuyển đổi số'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
    },
    {
      icon: Layers,
      title: 'Thiết kế Kiến trúc',
      description: 'Kiến trúc hệ thống có thể mở rộng và mạnh mẽ được tùy chỉnh theo yêu cầu của bạn. Chúng tôi thiết kế các giải pháp bền vững theo thời gian, phát triển cùng với doanh nghiệp của bạn.',
      image: 'https://images.unsplash.com/photo-1753715613388-7e03410b1dce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGFyY2hpdGVjdHVyZSUyMGRpYWdyYW18ZW58MXx8fHwxNzYxMjc4NjczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['Thiết kế Hệ thống', 'Kiến trúc Microservices', 'Giải pháp Đám mây', 'Thiết kế API'],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
    },
    {
      icon: Code2,
      title: 'Phát triển Phần mềm',
      description: 'Dịch vụ phát triển full-stack sử dụng công nghệ tiên tiến. Từ ứng dụng web đến ứng dụng di động, chúng tôi xây dựng các sản phẩm mà người dùng yêu thích.',
      image: 'https://images.unsplash.com/photo-1650600538903-ec09f670c391?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9ncmFtbWluZyUyMHNjcmVlbnxlbnwxfHx8fDE3NjEyNzg2NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['Ứng dụng Web', 'Ứng dụng Di động', 'Phần mềm Tùy chỉnh', 'Phát triển API'],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
    },
    {
      icon: Database,
      title: 'Khai thác Dữ liệu ',
      description: 'Chuyển đổi dữ liệu thô thành những thông tin có giá trị. Chúng tôi xử lý thiết kế pipeline dữ liệu, quy trình ETL và phân tích để hỗ trợ quyết định của bạn.',
      image: 'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NjEyNDM2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['Data Pipelines', 'ETL Solutions', 'Big Data Analytics', 'Data Warehousing'],
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
    },
    {
      icon: ClipboardList,
      title: 'Quản lý Dự án',
      description: 'Quản lý dự án toàn diện đảm bảo giao hàng đúng hạn và chất lượng. Chúng tôi sử dụng các phương pháp linh hoạt để giữ cho dự án của bạn đi đúng hướng và trong ngân sách.',
      image: 'https://images.unsplash.com/photo-1627634771105-08a3a12ad228?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwcHJvamVjdCUyMG1hbmFnZW1lbnR8ZW58MXx8fHwxNzYxMjc4Njc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['Agile/Scrum', 'Lập kế hoạch dự án', 'Quản trị rủi ro', 'Đảm bảo chất lượng'],
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-600',
    },
    {
      icon: Shield,
      title: 'Kiểm thử Bảo mật',
      description: 'Kiểm thử bảo mật toàn diện để xác định và khắc phục các lỗ hổng. Bảo vệ hệ thống của bạn với dịch vụ kiểm thử xâm nhập chuyên nghiệp của chúng tôi.',
      image: 'https://images.unsplash.com/photo-1483817101829-339b08e8d83f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMHNlY3VyaXR5fGVufDF8fHx8MTc2MTI3ODY3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['Đánh giá lỗ hổng', 'Kiểm toán bảo mật', 'Kiểm tra tuân thủ', 'Mô hình hóa mối đe dọa'],
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
            <h1 className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent text-4xl font-extrabold mb-4">Dịch vụ của chúng tôi</h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Coden cung cấp các giải pháp công nghệ toàn diện để giúp doanh nghiệp của bạn thành công.
              Từ chiến lược đến triển khai, chúng tôi là đối tác đáng tin cậy của bạn trong chuyển đổi số.
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
                    <h3 className="text-gray-900 mb-3 text-lg font-semibold">{service.title}</h3>
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
            <h2 className="text-gray-900 mb-4 text-2xl font-bold">Quy trình nghiệp vụ</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Chúng tôi tuân theo một phương pháp đã được chứng minh để đảm bảo bàn giao dự án thành công
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Lắng nghe', description: 'Hiểu nhu cầu và mục tiêu của bạn' },
              { step: '02', title: 'Lập kế hoạch', description: 'Tạo lộ trình cho sự thành công' },
              { step: '03', title: 'Thực hiện', description: 'Xây dựng và triển khai giải pháp' },
              { step: '04', title: 'Hỗ trợ', description: 'Bảo trì và tối ưu hóa liên tục' },
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
            <h2 className="text-white mb-4 text-2xl font-bold">
              Bạn đã sẵn sàng hiện thực hoá ý tưởng?
            </h2>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto text-lg">
              Hãy cùng thảo luận về những dịch vụ nào của chúng tôi có thể giúp doanh nghiệp của bạn đạt được mục tiêu.
              Đội ngũ của chúng tôi sẵn sàng biến tầm nhìn của bạn thành hiện thực.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
                Đặt lịch tư vấn
              </button>
              <button className="px-8 py-3 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white/10 transition-colors">
                Xem các nghiên cứu điển hình
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
