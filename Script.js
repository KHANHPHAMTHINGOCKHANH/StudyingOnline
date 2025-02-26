
$(document).ready(function() {

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

    let currentTestimonialIndex = 0;

    $('.sk-slider-next-btn').on('click', function() {
      console.log('Next button clicked'); 
 
      currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;

      const nextTestimonial = testimonials[currentTestimonialIndex];
 
      $('.sk-testimonial-quote').fadeOut(300, function() {
   
        $(this).find('blockquote').text(nextTestimonial.quote);
  
        $(this).find('.sk-author-name').text(nextTestimonial.authorName);
  
        $(this).find('.sk-review-source').text(nextTestimonial.reviewSource);
   
        $('.sk-student-image').attr('src', nextTestimonial.image);
        

        $(this).fadeIn(300);
      });
    });

    console.log('Testimonial slider script loaded');
  });