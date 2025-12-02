# **Phụ lục về Quyền riêng tư của Ứng dụng**

**Bổ sung cho Chính sách Quyền riêng tư Tổng thể của CÔNG TY TNHH CODEN**  
*Cập nhật lần cuối: 02-12-2025*  
Phụ lục Quyền riêng tư Ứng dụng Green Vector này (“Phụ lục”) bổ sung cho **Chính sách Quyền riêng tư Tổng thể của Công ty TNHH Coden** (“Chính sách Chung”) và áp dụng cụ thể cho **ứng dụng di động Green Vector** (“Ứng dụng”).  
Bằng việc sử dụng Ứng dụng Green Vector, bạn đồng ý với Phụ lục này và Chính sách Tổng thể. Trong trường hợp có bất kỳ sự không nhất quán nào, Phụ lục này sẽ được ưu tiên áp dụng cho các vấn đề liên quan đến Ứng dụng.

## **1 - Giới thiệu về ứng dụng Green Vector**

Ứng dụng Green Vector là một ứng dụng di động được thiết kế để hỗ trợ người dùng chẩn đoán sức khỏe cây trồng, quản lý việc chăm sóc cây và sắp xếp thông tin liên quan đến cây trồng. Ứng dụng được phát triển và phát hành bởi Công ty TNHH Coden (“CODEN”) và được cung cấp cho khách hàng của Green Vector sử dụng.  
Công ty TNHH Coden đóng vai trò là bên kiểm soát dữ liệu cho tất cả dữ liệu được xử lý trong Ứng dụng.  
Đối với các thực tiễn về quyền riêng tư chung, vui lòng tham khảo Chính sách Quyền riêng tư Tổng thể có sẵn tại: [https://coden.org/privacy-policy](https://coden.org/privacy-policy)

## **2 - Thông tin thu thập thông qua Ứng dụng**

Ứng dụng được thiết kế để lưu trữ dữ liệu do người dùng cung cấp cục bộ trên thiết bị của người dùng, với ngoại lệ cụ thể là hình ảnh cây trồng được gửi đến tính năng “Plant Doctor”, những hình ảnh này được tạm thời truyền đến dịch vụ AI của bên thứ ba để phân tích. CODEN không vận hành các máy chủ backend hoặc cơ sở dữ liệu đám mây cho Ứng dụng này, và hiện tại không yêu cầu tài khoản người dùng nào.

### **A. Thông tin bạn cung cấp**

Ứng dụng thu thập và xử lý các dữ liệu sau khi bạn chọn cung cấp:

- Hình ảnh cây trồng được gửi qua tính năng “Plant Doctor”.  
- Thông tin cây trồng được thêm vào tính năng "My Garden".  
- Lịch trình chăm sóc và tùy chọn nhắc nhở.  
- Việc hoàn thành nhiệm vụ và lịch sử chăm sóc cây trồng.

Không có thông tin cá nhân nhạy cảm nào được yêu cầu hoặc bắt buộc.

## **3 - Xử lý hình ảnh để Chẩn đoán Cây trồng**

Khi bạn gửi hình ảnh cây để chẩn đoán:
- Hình ảnh được truyền đến OpenAI ChatGPT API để phân tích bằng trí tuệ nhân tạo.
- Chỉ hình ảnh cây trồng được gửi đi. Hình ảnh không được CODEN lưu trữ, và theo chính sách sử dụng dữ liệu API của OpenAI, dữ liệu không được sử dụng để huấn luyện mô hình.
- CODEN không lưu bất kỳ bản sao nào bên ngoài thiết bị của bạn.
- Không có siêu dữ liệu (GPS, EXIF, dấu thời gian) được trích xuất.
- Hình ảnh chỉ được sử dụng nhằm mục đích tạo kết quả chẩn đoán.

OpenAI xử lý dữ liệu theo chính sách quyền riêng tư riêng của họ.

## **4 - Lưu trữ dữ liệu cục bộ**

Tất cả dữ liệu Ứng dụng, bao gồm hồ sơ cây trồng, lịch trình chăm sóc, nhật ký nhắc nhở và ảnh được lưu trữ cho tính năng "My Garden", được giữ độc quyền trên thiết bị của bạn. Điều này loại trừ việc truyền tạm thời một hình ảnh cây trồng đến Groq API khi sử dụng tính năng "Plant Doctor", như đã chi tiết trong mục 2-A.  
CODEN không:

- Truy cập ảnh của bạn.  
- Tải dữ liệu của bạn lên bất kỳ máy chủ nào (ngoại trừ việc phân tích hình ảnh tạm thời như mô tả trong Mục 2-A).  
- Đồng bộ hóa dữ liệu trên các thiết bị.  
- Lưu trữ thông tin người dùng trong cơ sở dữ liệu đám mây.

Bạn duy trì toàn quyền kiểm soát dữ liệu được lưu trữ trong Ứng dụng.

## **5 - Thông báo Notifications**

Ứng dụng sử dụng thông báo trên thiết bị để:

- Nhắc nhở chăm sóc  
- Các nhiệm vụ chăm sóc cây trồng đã lên lịch

Thông báo được tạo cục bộ trên thiết bị của bạn và không yêu cầu gửi dữ liệu cá nhân đến bất kỳ dịch vụ bên ngoài nào.  
Ứng dụng không gửi thông báo tiếp thị.

## **6 - Dịch vụ của bên thứ ba**

Ứng dụng sử dụng các dịch vụ bên ngoài sau:

### **A. OpenAI API (ChatGPT – Phân tích hình ảnh và hội thoại AI)**

Ứng dụng sử dụng OpenAI ChatGPT API để phân tích hình ảnh được gửi lên nhằm chẩn đoán sức khỏe cây trồng, đồng thời hỗ trợ trả lời câu hỏi trong phần trò chuyện AI.
Hình ảnh cây trồng và nội dung trò chuyện có thể được truyền đến OpenAI để phục vụ xử lý.
OpenAI không sử dụng dữ liệu API để huấn luyện mô hình theo chính sách sử dụng dữ liệu hiện hành.

Ứng dụng không tích hợp bất kỳ SDK, công cụ phân tích, hệ thống quảng cáo hoặc công nghệ theo dõi nào khác.

## **7 - Lưu giữ dữ liệu**

Vì tất cả dữ liệu Ứng dụng được lưu trữ cục bộ trên thiết bị của bạn:

- Dữ liệu vẫn còn trên thiết bị của bạn cho đến khi bạn xóa nó.  
- Bạn có thể xóa hồ sơ cây trồng, hình ảnh hoặc toàn bộ Ứng dụng bất cứ lúc nào.  
- Gỡ cài đặt Ứng dụng sẽ xóa vĩnh viễn tất cả dữ liệu liên quan đến nó.

CODEN không giữ lại bất kỳ bản sao dữ liệu nào của bạn.

## **8 - Quyền của người dùng**

Vì tất cả dữ liệu được lưu trữ cục bộ, bạn có thể thực hiện quyền của mình trực tiếp bằng cách quản lý thông tin trên thiết bị của mình, bao gồm:

- Xem thông tin cây trồng đã lưu trữ của bạn.  
- Xóa hình ảnh.  
- Xóa hồ sơ cây trồng.  
- Thay đổi lịch trình chăm sóc.  
- Gỡ cài đặt Ứng dụng để xóa tất cả dữ liệu.

Nếu bạn liên hệ với CODEN để yêu cầu dữ liệu, chúng tôi chỉ có thể giải quyết các vấn đề nằm trong khả năng kiểm soát thực tế của chúng tôi, vì chúng tôi không lưu trữ dữ liệu người dùng trên máy chủ.

## **9 - Quyền riêng tư của trẻ em**

Ứng dụng không dành cho trẻ em dưới 13 tuổi.  
CODEN không cố ý thu thập bất kỳ thông tin cá nhân nào từ trẻ em.

Nếu chúng tôi nhận thức được dữ liệu đó, chúng tôi sẽ thực hiện các hành động ngay lập tức để xóa.

## **10 - Bảo mật**

Để bảo vệ quyền riêng tư của người dùng:

- Ứng dụng hoạt động mà không cần lưu trữ đám mây.  
- Không yêu cầu tài khoản người dùng.  
- Hầu hết việc xử lý xảy ra trên thiết bị.  
- Chỉ hình ảnh cây trồng do người dùng cung cấp được gửi đến Groq để phân tích.

Mặc dù chúng tôi thực hiện các biện pháp bảo vệ hợp lý về mặt thương mại, không hệ thống nào có thể hoàn toàn an toàn.

## **11 - Chuyển dữ liệu quốc tế**

Khi sử dụng tính năng “Plant Doctor” hoặc trò chuyện AI, hình ảnh và nội dung trò chuyện của bạn có thể được truyền đến máy chủ của OpenAI, có thể đặt tại các quốc gia ngoài nơi cư trú của bạn.
Bằng việc sử dụng các tính năng này, bạn đồng ý với việc truyền dữ liệu như vậy.

## **12 - Những thay đổi đối với Phụ lục**

Chúng tôi có thể cập nhật Phụ lục này theo thời gian.  
Ngày "Cập nhật lần cuối" sẽ được sửa đổi để phản ánh các sửa đổi.  
Những thay đổi quan trọng có thể được thông báo nếu luật pháp yêu cầu.

## **13 - Thông tin liên lạc**

Đối với các câu hỏi hoặc mối quan tâm liên quan đến Phụ lục này của Ứng dụng:  
**CÔNG TY TNHH CODEN**  
Email: legal@coden.org  
Trang web: https://coden.org  
