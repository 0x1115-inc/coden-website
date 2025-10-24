import { Heart, Boxes, Rocket, Shield, Sprout } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import duc from '../assets/duc.jpg';
import cuong from '../assets/cuong.jpg';
import minh from '../assets/minh.jpg';
import thanh from '../assets/thanh.jpg';

export function AboutPage() {
  const values = [
    {
      icon: Boxes,
      title: 'Hiệu quả',
      description: 'Chúng tôi đề cao sự tinh gọn, rõ ràng và tập trung vào giải pháp. Mọi nỗ lực đều hướng đến việc tối ưu hoá nguồn lực, quy trình và kết quả mang lại.',
    },
    {
      icon: Shield,
      title: 'Chính trực',
      description: 'Coden được xây dựng trên nền tảng trung thực, minh bạch và cam kết lâu dài. Chúng tôi coi trọng chữ tín, tôn trọng quyền riêng tư và nhất quát trong hành vi.'
    },
    {
      icon: Heart,
      title: 'Thấu hiểu',
      description: 'Chúng tôi lắng nghe với sự đồng cảm sâu sắc và phản hồi bằng kiến thức chắc chắn. Mỗi giải pháp được phát triển từ sự thấu cảm thực sự với vấn đề.'
    },
    {
      icon: Sprout,
      title: 'Bền vững',
      description: 'Từ con người, sản phẩm đến tác động xã hội, chúng tôi hướng đến giá trị lâu dài. Sự phát triển của Coden gắn liền với trách nhiệm đối với cộng đồng và môi trường.',
    },
  ];

  const team = [
    { name: 'Thành Vũ', role: 'Giám đốc Công nghệ', image: thanh },
    { name: 'Đức Phạm', role: 'Giám đốc Kinh doanh', image: duc },
    { name: 'Cương Đỗ', role: 'Trưởng Ban Văn hoá Doanh nghiệp', image: cuong },
    { name: 'Minh Phạm', role: 'Giám đốc Sáng tạo', image: minh },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent text-4xl font-extrabold mb-4">Chúng tôi là ai?</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Nơi hội tụ của sự những cá nhân tử tế, đam mê công nghệ và khát khao giá trị bền vững.
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
              <p className="text-gray-600 text-lg leading-relaxed">
                Coden được hình thành từ một khát vọng giản dị mà sâu sắc: xây dựng một cộng đồng các nhà phát triển phần mềm nhân văn.                
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Chúng tôi tin rằng công nghệ là để phục vụ con người, chứ không phải thay thế con người. Trong một thế giới đầy biến động, niềm tin là giá trị quý giá nhất để liên kết nhân loạị. Chúng tôi thấu hiểu điều đó, và kiến tạo một không gian nơi niềm tin được vun đắp bằng sự chân thành, chính trực, và cùng nhau tạo ra giá trị lâu dài.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Coden cũng là biểu tượng của sự kết nối – giữa con người với công nghệ, giữa ý tưởng với hiện thực, giữa tổ chức với tổ chức. Chúng tôi nỗ lực đưa công nghệ số vào ứng dụng thực tiễn, giúp doanh nghiệp giải quyết bài toán của mình một cách hiệu quả và linh hoạt.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Tập hợp những người yêu công nghệ, đam mê giải quyết các vấn đề và luôn khao khát đóng góp cho xã hội, chúng tôi cùng nhau viết nên hành trình phát triển các giải pháp phần mềm vì con người. Từ những ý tưởng nhỏ bé đến các sản phẩm có tầm ảnh hưởng lớn, chúng tôi luôn đặt con người làm trung tâm trong mọi quyết định và hành động.
              </p>
            </div>

            {/* Story Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=450&fit=crop&crop=faces"
                  alt="Team collaboration"
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
            <h2 className="text-gray-900 mb-4 text-2xl font-bold">Giá trị cốt lõi</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Những nguyên tắc định hình văn hoá và cách chúng tôi làm việc mỗi ngày.
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
            <h2 className="text-gray-900 mb-4 text-2xl font-bold">Thành viên tiêu biểu</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Một nhóm đa dạng các cá nhân tài năng làm việc cùng nhau để xây dựng
              những sản phẩm xuất sắc.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
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
