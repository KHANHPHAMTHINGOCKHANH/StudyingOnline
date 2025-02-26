// Tạo file testimonial-slider.js riêng biệt và thêm vào cuối thẻ body
// hoặc thêm đoạn mã này vào file Script.js hiện có

// Đảm bảo code chỉ chạy sau khi trang đã load hoàn toàn
$(document).ready(function() {
    // Khai báo dữ liệu testimonial
    const testimonials = [
      {
        quote: "Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. Skilline is exactly what our business has been lacking.",
        authorName: "Gloria Rose",
        reviewSource: "12 reviews at Yelp",
        rating: 5,
        image: "image/TESTIMONIAL.png"
      },
      {
        quote: "Skilline has completely transformed how we conduct our online classes. The interface is intuitive and the features are comprehensive.",
        authorName: "David Chen",
        reviewSource: "8 reviews at Google",
        rating: 5,
        image: "image/TESTIMONIAL.png"
      },
      {
        quote: "As an educator, I've tried many platforms but Skilline stands out with its reliability and student engagement tools. Highly recommended!",
        authorName: "Sarah Johnson",
        reviewSource: "15 reviews at TrustPilot",
        rating: 4,
        image: "image/TESTIMONIAL.png"
      }
    ];
    
    // Biến theo dõi testimonial hiện tại
    let currentTestimonialIndex = 0;
    
    // Thêm chức năng cho nút next
    $('.sk-slider-next-btn').on('click', function() {
      console.log('Next button clicked'); // Thêm log để kiểm tra sự kiện click
      
      // Tăng index và reset về 0 nếu vượt qua số lượng testimonial
      currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
      
      // Lấy testimonial tiếp theo
      const nextTestimonial = testimonials[currentTestimonialIndex];
      
      // Tạo hiệu ứng fade
      $('.sk-testimonial-quote').fadeOut(300, function() {
        // Cập nhật nội dung quote
        $(this).find('blockquote').text(nextTestimonial.quote);
        
        // Cập nhật tên tác giả
        $(this).find('.sk-author-name').text(nextTestimonial.authorName);
        
        // Cập nhật nguồn đánh giá
        $(this).find('.sk-review-source').text(nextTestimonial.reviewSource);
        
        // Cập nhật hình ảnh (nếu có)
        $('.sk-student-image').attr('src', nextTestimonial.image);
        
        // Hiển thị lại phần testimonial
        $(this).fadeIn(300);
      });
    });
    
    // Thêm log để xác nhận script đã chạy
    console.log('Testimonial slider script loaded');
  });