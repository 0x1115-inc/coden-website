import type { LocaleContent } from "./types";
import { masterPrivacyPolicyViHtml } from "../content/privacy/masterPrivacyPolicyVi";

export const vi: LocaleContent = {
  meta: {
    id: "vi",
    lang: "vi",
    languageName: "Tiếng Việt",
    languageShortLabel: "VI",
    title: "Coden - Tạo giải pháp, dựng cộng đồng",
  },
  header: {
    navigation: [
      { label: "Trang chủ", target: "home" },
      { label: "Giới thiệu", target: "about" },
      { label: "Dịch vụ", target: "works" },
      { label: "Liên hệ", target: "contact" },
    ],
    ctaLabel: "Liên hệ ngay",
    logoAlt: "Coden logo",
    goHomeLabel: "Quay về trang chủ",
    mobileMenu: {
      open: "Mở menu điều hướng",
      close: "Đóng menu điều hướng",
    },
    languageSwitcher: {
      label: "Ngôn ngữ",
      ariaLabel: "Thay đổi ngôn ngữ hiển thị",
    },
  },
  home: {
    hero: {
      titleLineOne: "Những ý tưởng táo bạo nhất",
      titleLineTwo: "đều có thể thành hiện thực",
      description:
        "Tại Coden, chúng tôi tin rằng công nghệ không chỉ là công cụ - mà là chất xúc tác để biến tầm nhìn thành giá trị cụ thể. Với năng lực tư duy hệ thống, đội ngũ tận tâm và kinh nghiệm triển khai thực tiễn, chúng tôi đồng hành cùng bạn để xây dựng những giải pháp dữ liệu đột phá, hiệu quả và bền vững.",
      primaryCta: {
        label: "Liên hệ ngay",
        target: "contact",
      },
      secondaryCta: {
        label: "Khám phá dịch vụ",
        target: "works",
      },
      imageAlt: "Đội ngũ công nghệ đang cộng tác",
    },
    features: {
      title: "Vì sao chọn Coden?",
      description:
        "Coden không chỉ cung cấp giải pháp công nghệ, chúng tôi đồng hành như một đối tác chiến lược. Với sự kết hợp giữa năng lực kỹ thuật, tư duy hệ thống và tinh thần phục vụ tận tâm, chúng tôi giúp doanh nghiệp, tổ chức khai thác tối đa giá trị từ dữ liệu và công nghệ.",
      items: [
        {
          icon: "innovation",
          title: "Chiến lược toàn diện",
          description:
            "Phân tích sâu nhu cầu của bạn và xác định lộ trình công nghệ rõ ràng, đo lường được hiệu quả.",
        },
        {
          icon: "precision",
          title: "Triển khai chuẩn xác",
          description:
            "Đội ngũ kỹ sư giàu kinh nghiệm đảm bảo giải pháp vận hành ổn định, mở rộng linh hoạt.",
        },
        {
          icon: "partnership",
          title: "Đồng hành bền bỉ",
          description:
            "Chúng tôi làm việc như một phần của đội ngũ bạn, hỗ trợ liên tục trên hành trình chuyển đổi số.",
        },
      ],
    },
    cta: {
      title: "Sẵn sàng biến ý tưởng của bạn thành hiện thực?",
      description:
        "Còn chần chờ gì nữa? Hãy liên hệ với chúng tôi ngay hôm nay để bắt đầu hành trình chuyển đổi số và khám phá tiềm năng vô hạn của công nghệ cùng Coden.",
      buttonLabel: "Liên hệ ngay",
    },
  },
  about: {
    heroTitle: "Chúng tôi là ai?",
    heroSubtitle:
      "Nơi hội tụ của sự những cá nhân tử tế, đam mê công nghệ và khát khao giá trị bền vững.",
    storyParagraphs: [
      "Coden được hình thành từ một khát vọng giản dị mà sâu sắc: xây dựng một cộng đồng các nhà phát triển phần mềm nhân văn.",
      "Chúng tôi tin rằng công nghệ là để phục vụ con người, chứ không phải thay thế con người. Trong một thế giới đầy biến động, niềm tin là giá trị quý giá nhất để liên kết nhân loại. Chúng tôi thấu hiểu điều đó, và kiến tạo một không gian nơi niềm tin được vun đắp bằng sự chân thành, chính trực, và cùng nhau tạo ra giá trị lâu dài.",
      "Coden cũng là biểu tượng của sự kết nối – giữa con người với công nghệ, giữa ý tưởng với hiện thực, giữa tổ chức với tổ chức. Chúng tôi nỗ lực đưa công nghệ số vào ứng dụng thực tiễn, giúp doanh nghiệp giải quyết bài toán của mình một cách hiệu quả và linh hoạt.",
      "Tập hợp những người yêu công nghệ, đam mê giải quyết các vấn đề và luôn khao khát đóng góp cho xã hội, chúng tôi cùng nhau viết nên hành trình phát triển các giải pháp phần mềm vì con người. Từ những ý tưởng nhỏ bé đến các sản phẩm có tầm ảnh hưởng lớn, chúng tôi luôn đặt con người làm trung tâm trong mọi quyết định và hành động.",
    ],
    storyImageAlt: "Đội ngũ đang thảo luận trong văn phòng",
    valuesTitle: "Giá trị cốt lõi",
    valuesDescription:
      "Những nguyên tắc định hình văn hoá và cách chúng tôi làm việc mỗi ngày.",
    values: [
      {
        icon: "efficiency",
        title: "Hiệu quả",
        description:
          "Chúng tôi đề cao sự tinh gọn, rõ ràng và tập trung vào giải pháp. Mọi nỗ lực đều hướng đến việc tối ưu hoá nguồn lực, quy trình và kết quả mang lại.",
      },
      {
        icon: "integrity",
        title: "Chính trực",
        description:
          "Coden được xây dựng trên nền tảng trung thực, minh bạch và cam kết lâu dài. Chúng tôi coi trọng chữ tín, tôn trọng quyền riêng tư và nhất quán trong hành vi.",
      },
      {
        icon: "empathy",
        title: "Thấu hiểu",
        description:
          "Chúng tôi lắng nghe với sự đồng cảm sâu sắc và phản hồi bằng kiến thức chắc chắn. Mỗi giải pháp được phát triển từ sự thấu cảm thực sự với vấn đề.",
      },
      {
        icon: "sustainability",
        title: "Bền vững",
        description:
          "Từ con người, sản phẩm đến tác động xã hội, chúng tôi hướng đến giá trị lâu dài. Sự phát triển của Coden gắn liền với trách nhiệm đối với cộng đồng và môi trường.",
      },
    ],
    teamTitle: "Thành viên tiêu biểu",
    teamDescription:
      "Một nhóm đa dạng các cá nhân tài năng làm việc cùng nhau để xây dựng những sản phẩm xuất sắc.",
    teamMembers: [
      { image: "thanh", name: "Thành Vũ", role: "Giám đốc Công nghệ" },
      { image: "duc", name: "Đức Phạm", role: "Giám đốc Kinh doanh" },
      { image: "cuong", name: "Cương Đỗ", role: "Trưởng Ban Văn hoá Doanh nghiệp" },
      { image: "minh", name: "Minh Phạm", role: "Giám đốc Sáng tạo" },
    ],
  },
  works: {
    heroTitle: "Dịch vụ của chúng tôi",
    heroDescription:
      "Coden cung cấp các giải pháp công nghệ toàn diện để giúp doanh nghiệp của bạn thành công. Từ chiến lược đến triển khai, chúng tôi là đối tác đáng tin cậy của bạn trong chuyển đổi số.",
    services: [
      {
        key: "strategy",
        title: "Tư vấn chiến lược",
        description:
          "Tư vấn chiến lược để xác định các giải pháp công nghệ tốt nhất cho những thách thức trong kinh doanh của bạn. Chúng tôi phân tích nhu cầu của bạn và cung cấp các khuyến nghị có thể hành động.",
        features: ["Phân tích kinh doanh", "Đánh giá công nghệ", "Tối ưu hóa ROI", "Chuyển đổi số"],
      },
      {
        key: "architecture",
        title: "Thiết kế kiến trúc",
        description:
          "Kiến trúc hệ thống có thể mở rộng và mạnh mẽ được tùy chỉnh theo yêu cầu của bạn. Chúng tôi thiết kế các giải pháp bền vững theo thời gian, phát triển cùng với doanh nghiệp của bạn.",
        features: ["Thiết kế hệ thống", "Kiến trúc Microservices", "Giải pháp đám mây", "Thiết kế API"],
      },
      {
        key: "development",
        title: "Phát triển phần mềm",
        description:
          "Dịch vụ phát triển full-stack sử dụng công nghệ tiên tiến. Từ ứng dụng web đến ứng dụng di động, chúng tôi xây dựng các sản phẩm mà người dùng yêu thích.",
        features: ["Ứng dụng web", "Ứng dụng di động", "Phần mềm tùy chỉnh", "Phát triển API"],
      },
      {
        key: "data",
        title: "Khai thác dữ liệu",
        description:
          "Chuyển đổi dữ liệu thô thành những thông tin có giá trị. Chúng tôi xử lý thiết kế pipeline dữ liệu, quy trình ETL và phân tích để hỗ trợ quyết định của bạn.",
        features: ["Data pipelines", "Giải pháp ETL", "Phân tích dữ liệu lớn", "Kho dữ liệu"],
      },
      {
        key: "project",
        title: "Quản lý dự án",
        description:
          "Quản lý dự án toàn diện đảm bảo giao hàng đúng hạn và chất lượng. Chúng tôi sử dụng các phương pháp linh hoạt để giữ cho dự án của bạn đi đúng hướng và trong ngân sách.",
        features: ["Agile/Scrum", "Lập kế hoạch dự án", "Quản trị rủi ro", "Đảm bảo chất lượng"],
      },
      {
        key: "security",
        title: "Kiểm thử bảo mật",
        description:
          "Kiểm thử bảo mật toàn diện để xác định và khắc phục các lỗ hổng. Bảo vệ hệ thống của bạn với dịch vụ kiểm thử xâm nhập chuyên nghiệp của chúng tôi.",
        features: ["Đánh giá lỗ hổng", "Kiểm toán bảo mật", "Kiểm tra tuân thủ", "Mô hình hóa mối đe dọa"],
      },
    ],
    learnMoreLabel: "Tìm hiểu thêm",
    processTitle: "Quy trình nghiệp vụ",
    processDescription:
      "Chúng tôi tuân theo một phương pháp đã được chứng minh để đảm bảo bàn giao dự án thành công.",
    processSteps: [
      { step: "01", title: "Lắng nghe", description: "Hiểu nhu cầu và mục tiêu của bạn" },
      { step: "02", title: "Lập kế hoạch", description: "Tạo lộ trình cho sự thành công" },
      { step: "03", title: "Thực hiện", description: "Xây dựng và triển khai giải pháp" },
      { step: "04", title: "Hỗ trợ", description: "Bảo trì và tối ưu hóa liên tục" },
    ],
    cta: {
      title: "Bạn đã sẵn sàng hiện thực hoá ý tưởng?",
      description:
        "Hãy cùng thảo luận về những dịch vụ nào của chúng tôi có thể giúp doanh nghiệp của bạn đạt được mục tiêu. Đội ngũ của chúng tôi sẵn sàng biến tầm nhìn của bạn thành hiện thực.",
      primaryLabel: "Đặt lịch tư vấn",
      secondaryLabel: "Xem các nghiên cứu điển hình",
    },
  },
  contact: {
    heroTitle: "Liên hệ với chúng tôi",
    heroSubtitle:
      "Bạn có câu hỏi hoặc muốn hợp tác? Chúng tôi rất mong nhận được phản hồi từ bạn. Hãy gửi cho chúng tôi một tin nhắn và chúng tôi sẽ phản hồi sớm nhất có thể.",
    formTitle: "Gửi cho chúng tôi một tin nhắn",
    formFields: {
      nameLabel: "Họ và tên *",
      namePlaceholder: "Họ và tên của bạn",
      emailLabel: "Email *",
      emailPlaceholder: "your@email.com",
      companyLabel: "Công ty",
      companyPlaceholder: "Bạn đến từ công ty nào?",
      messageLabel: "Tin nhắn *",
      messagePlaceholder: "Hãy cho chúng tôi biết về nhu cầu của bạn...",
    },
    submitLabel: "Gửi tin nhắn",
    submittingLabel: "Đang gửi...",
    infoTitle: "Thông tin liên hệ",
    infoDescription:
      "Hãy liên hệ với chúng tôi qua bất kỳ kênh nào trong số này. Chúng tôi luôn sẵn sàng giúp đỡ và trả lời bất kỳ câu hỏi nào bạn có thể có.",
    infoItems: [
      { icon: "email", title: "Email", detail: "info@coden.org", link: "mailto:info@coden.org" },
      { icon: "phone", title: "Phone", detail: "+84 93639 7751", link: "tel:+84936397751" },
      {
        icon: "office",
        title: "Office",
        detail: "Tầng 14, Toà nhà Việt Á, số 09 Duy Tân, Cầu Giấy, Hà Nội, Việt Nam.",
        link: "#",
      },
    ],
    mapLabel: "Vị trí bản đồ",
    mapDescription: "Địa chỉ văn phòng Coden trên Google Maps",
    toasts: {
      success: "Tin nhắn đã được gửi! Chúng tôi sẽ phản hồi bạn sớm nhất có thể.",
      error: "Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại.",
    },
  },
  footer: {
    tagline: "Tạo giải pháp, dựng cộng đồng.",
    sections: [
      {
        title: "Thông tin Công ty",
        links: [
          { label: "Giới thiệu", href: "#" },
          { label: "Đội ngũ", href: "#" },
          { label: "Blog", href: "#" },
          { label: "Press", href: "#" },
        ],
      },
      {
        title: "Sản phẩm & Dịch vụ",
        links: [
          { label: "Tính năng", href: "#" },
          { label: "Giá cả", href: "#" },
          { label: "Bảo mật", href: "#" },
          { label: "Cập nhật", href: "#" },
        ],
      },
      {
        title: "Tài nguyên",
        links: [
          { label: "Tài liệu", href: "#" },
          { label: "Hướng dẫn", href: "#" },
          { label: "Trạng thái API", href: "#" },
          { label: "Hỗ trợ", href: "#" },
        ],
      },
    ],
    legalLinks: [
      { label: "Chính sách bảo mật", href: "/privacy-policy", target: "privacy" },
      { label: "Điều khoản dịch vụ", href: "#" },
      { label: "Chính sách cookie", href: "#" },
    ],
    rightsReserved: "Mọi quyền được bảo lưu.",
  },
  images: {
    errorAlt: "Hình ảnh thay thế khi không tải được",
  },
  privacy: {
    title: "Chính sách Quyền riêng tư Tổng thể",
    lastUpdatedLabel: "Cập nhật lần cuối",
    lastUpdatedDate: "17-11-2025",
    introduction:
      "Chính sách Quyền riêng tư Tổng thể này (“Chính sách”) mô tả cách CÔNG TY TNHH CODEN (“CODEN”, “chúng tôi”, “của chúng tôi” hoặc “chúng tôi”) thu thập, sử dụng, tiết lộ và bảo vệ thông tin cá nhân trên tất cả các sản phẩm phần mềm, ứng dụng và giải pháp kỹ thuật số mà chúng tôi cung cấp hoặc vận hành.",
    bodyHtml: masterPrivacyPolicyViHtml,
  },
};
