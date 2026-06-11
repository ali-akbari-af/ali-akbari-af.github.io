---
layout: page
title: "ادیت حرفه‌ای ویدیو؛ ساده، زیبا و تأثیرگذار"
description: "خدمات ویرایش ویدیو با کیفیت بالا و هزینه مناسب شامل ادیت ویدیوهای خانوادگی، تبلیغاتی، کلیپ‌های شخصی و محتوای شبکه‌های اجتماعی"
keywords: "ادیت ویدیو, ویرایش فیلم, کلیپ تبلیغاتی, ریلز, شورت, اینستاگرام, یوتیوب, تولید محتوا, علی اکبری"
breadcrumb:
  - title: "خدمات تصویری"
    link: "/video-services/index.html"
---

<style>
/* ===== محتوای صفحه ===== */
.page-content {
    max-width: 1400px;
    margin: 0 auto;
    padding: 4rem 2rem;
}

/* هیرو بخش با المان ویدیویی */
.page-hero {
    text-align: center;
    margin-bottom: 5rem;
    position: relative;
    overflow: hidden;
    border-radius: 1.5rem;
    background: linear-gradient(135deg, #0f0c1f, #1a1a2e);
    padding: 4rem 2rem;
    border: 1px solid rgba(255, 77, 141, 0.3);
}

.page-hero::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(255, 77, 141, 0.15) 0%, transparent 60%);
    border-radius: 50%;
    z-index: 0;
    animation: float 10s infinite alternate ease-in-out;
}

.page-hero::after {
    content: '';
    position: absolute;
    bottom: -30%;
    left: -10%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(108, 99, 255, 0.15) 0%, transparent 60%);
    border-radius: 50%;
    z-index: 0;
    animation: float 8s infinite alternate-reverse ease-in-out;
}

@keyframes float {
    0% { transform: translate(0, 0) scale(1); }
    100% { transform: translate(30px, -30px) scale(1.1); }
}

.page-title {
    font-size: 3.2rem;
    color: white;
    margin-bottom: 1.5rem;
    font-weight: 900;
    line-height: 1.2;
    position: relative;
    display: inline-block;
    z-index: 2;
    text-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
}

.page-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    right: 50%;
    transform: translateX(50%);
    width: 200px;
    height: 5px;
    background: linear-gradient(90deg, #ff4d8d, #6c63ff, #4facfe);
    border-radius: 3px;
    box-shadow: 0 0 20px rgba(255, 77, 141, 0.7);
}

.service-badge {
    display: inline-block;
    background: linear-gradient(135deg, #ff4d8d, #6c63ff);
    color: white;
    padding: 0.8rem 2rem;
    border-radius: 50px;
    font-size: 1.8rem;
    font-weight: 800;
    margin: 1rem 0 2rem;
    box-shadow: 0 10px 30px rgba(255, 77, 141, 0.5);
    border: 3px solid rgba(255, 255, 255, 0.3);
    position: relative;
    z-index: 2;
    backdrop-filter: blur(5px);
    letter-spacing: 1px;
}

.page-description {
    font-size: 1.3rem;
    color: rgba(255, 255, 255, 0.9);
    line-height: 2;
    max-width: 900px;
    margin: 3rem auto 0;
    padding: 2.5rem;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 1.5rem;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);
    position: relative;
    z-index: 2;
    backdrop-filter: blur(10px);
}

.page-description::before {
    content: '▶';
    position: absolute;
    top: -15px;
    right: 30px;
    font-size: 2rem;
    color: #ff4d8d;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% { opacity: 0.5; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.2); }
    100% { opacity: 0.5; transform: scale(1); }
}

.page-description strong {
    color: #ff4d8d;
    font-weight: 800;
    position: relative;
    padding: 0 4px;
    text-shadow: 0 0 10px rgba(255, 77, 141, 0.5);
}

/* بخش لیست خدمات با طراحی اختصاصی */
.services-list-section {
    margin: 6rem 0;
    position: relative;
    border-radius: 2rem;
    overflow: hidden;
}

.services-list-section::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255, 77, 141, 0.05), rgba(108, 99, 255, 0.05));
    z-index: -1;
}

.services-list-title {
    text-align: center;
    font-size: 2.2rem;
    color: #ff4d8d;
    margin-bottom: 3rem;
    font-weight: 800;
    position: relative;
    display: inline-block;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    padding: 1rem 3rem;
    border-radius: 60px;
    box-shadow: 0 15px 30px rgba(255, 77, 141, 0.2);
    border: 2px solid rgba(255, 77, 141, 0.3);
}

.services-list-title::before {
    content: '🎬';
    position: absolute;
    right: -40px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2rem;
    animation: bounce 1s infinite;
}

.services-list-title::after {
    content: '🎥';
    position: absolute;
    left: -40px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2rem;
    animation: bounce 1s infinite 0.3s;
}

@keyframes bounce {
    0%, 100% { transform: translateY(-50%) scale(1); }
    50% { transform: translateY(-70%) scale(1.1); }
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
    padding: 1rem;
}

.service-item {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 1.8rem;
    background: white;
    border-radius: 1.5rem;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: 2px solid transparent;
    position: relative;
    overflow: hidden;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.service-item::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100px;
    background: linear-gradient(135deg, #ff4d8d, #6c63ff);
    opacity: 0.1;
    border-radius: 50%;
    transform: translate(30px, -30px);
}

.service-item:hover {
    transform: translateY(-15px) rotate(1deg);
    border-color: #ff4d8d;
    box-shadow: 0 30px 40px rgba(255, 77, 141, 0.3);
}

.service-icon {
    font-size: 2.8rem;
    min-width: 70px;
    height: 70px;
    background: linear-gradient(135deg, #ff4d8d, #6c63ff);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    box-shadow: 0 10px 20px rgba(255, 77, 141, 0.4);
    transition: all 0.3s ease;
}

.service-item:hover .service-icon {
    transform: scale(1.1) rotate(360deg);
}

.service-content h4 {
    font-size: 1.3rem;
    color: #1a1a2e;
    margin-bottom: 0.5rem;
    font-weight: 700;
    position: relative;
    display: inline-block;
}

.service-content h4::after {
    content: '';
    position: absolute;
    bottom: -3px;
    right: 0;
    width: 0;
    height: 3px;
    background: linear-gradient(90deg, #ff4d8d, #6c63ff);
    transition: width 0.3s ease;
}

.service-item:hover .service-content h4::after {
    width: 100%;
}

.service-content p {
    color: #6b7280;
    line-height: 1.6;
    font-size: 0.95rem;
}

/* بخش گالری نمونه کارها (با افکت‌های اختصاصی) */


/* بخش کارت‌های نمونه کار با دیزاین اختصاصی */
.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-top: 4rem;
    padding: 0 2rem;
}

.portfolio-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 1.5rem;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
}

.portfolio-card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, transparent 50%, rgba(255, 77, 141, 0.3));
    opacity: 0;
    transition: opacity 0.3s ease;
}

.portfolio-card:hover {
    transform: translateY(-20px) scale(1.02);
    box-shadow: 0 30px 50px rgba(255, 77, 141, 0.4);
    border-color: #ff4d8d;
}

.portfolio-card:hover::after {
    opacity: 1;
}

.portfolio-thumb {
    height: 180px;
    background: linear-gradient(45deg, #ff4d8d, #6c63ff);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.portfolio-thumb i {
    font-size: 5rem;
    color: rgba(255, 255, 255, 0.3);
    z-index: 1;
}

.portfolio-thumb::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(0,0,0,0.5), rgba(0,0,0,0.2));
    z-index: 2;
}

.play-icon-small {
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(5px);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5rem;
    position: absolute;
    z-index: 3;
    border: 2px solid white;
    opacity: 0;
    transform: scale(0.5);
    transition: all 0.3s ease;
}

.portfolio-card:hover .play-icon-small {
    opacity: 1;
    transform: scale(1);
}

.portfolio-info {
    padding: 1.5rem;
    color: white;
}

.portfolio-info h4 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: #ff4d8d;
}

.portfolio-info p {
    font-size: 0.9rem;
    opacity: 0.8;
}

/* بخش ویژگی‌ها با دیزاین پیشرفته */
.features-section {
    margin: 6rem 0;
    position: relative;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.feature-card {
    background: white;
    padding: 3rem 2rem;
    border-radius: 2rem;
    text-align: center;
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: 2px solid transparent;
    position: relative;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.feature-card::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(135deg, #ff4d8d, #6c63ff);
    opacity: 0;
    transition: opacity 0.5s ease;
    transform: rotate(45deg);
    z-index: 0;
}

.feature-card:hover {
    transform: translateY(-15px) scale(1.05);
    border-color: #ff4d8d;
}

.feature-card:hover::before {
    opacity: 0.05;
}

.feature-icon {
    width: 90px;
    height: 90px;
    background: linear-gradient(135deg, #ff4d8d, #6c63ff);
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.8rem;
    color: white;
    font-size: 2.5rem;
    box-shadow: 0 20px 30px rgba(255, 77, 141, 0.4);
    transition: all 0.5s ease;
    position: relative;
    z-index: 1;
}

.feature-card:hover .feature-icon {
    border-radius: 50%;
    transform: rotate(360deg);
}

.feature-title {
    font-size: 1.4rem;
    color: #ff4d8d;
    margin-bottom: 1rem;
    font-weight: 700;
    position: relative;
    z-index: 1;
}

.feature-description {
    color: #6b7280;
    line-height: 1.6;
    position: relative;
    z-index: 1;
}

/* بخش تماس با دیزاین اختصاصی */
.contact-section {
    background: linear-gradient(135deg, #0f0c1f, #1a1a2e);
    color: white;
    padding: 5rem 2rem;
    border-radius: 3rem;
    margin: 6rem 0;
    text-align: center;
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(255, 77, 141, 0.3);
}

.contact-section::before {
    content: '🎥';
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 5rem;
    opacity: 0.1;
    transform: rotate(15deg);
}

.contact-section::after {
    content: '🎬';
    position: absolute;
    bottom: 20px;
    left: 20px;
    font-size: 5rem;
    opacity: 0.1;
    transform: rotate(-15deg);
}

.contact-title {
    font-size: 2.5rem;
    margin-bottom: 1.8rem;
    font-weight: 800;
    position: relative;
    z-index: 1;
    color: white;
    text-shadow: 0 5px 15px rgba(255, 77, 141, 0.5);
}

.contact-description {
    font-size: 1.3rem;
    opacity: 0.95;
    max-width: 700px;
    margin: 0 auto 3rem;
    line-height: 1.9;
    position: relative;
    z-index: 1;
}

.contact-buttons {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
    z-index: 1;
}

.btn {
    padding: 1.2rem 2.8rem;
    border-radius: 60px;
    font-weight: 700;
    font-size: 1.1rem;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: none;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    letter-spacing: 1px;
}

.btn::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
}

.btn:hover::before {
    transform: translateX(100%);
}

.btn-primary {
    background: linear-gradient(135deg, #ff4d8d, #6c63ff);
    color: white;
    box-shadow: 0 15px 30px rgba(255, 77, 141, 0.4);
}

.btn-primary:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 25px 40px rgba(255, 77, 141, 0.6);
}

.btn-secondary {
    background: rgba(255, 255, 255, 0.15);
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
}

.btn-secondary:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-5px) scale(1.05);
    border-color: #ff4d8d;
}

/* المان‌های تزئینی */
.floating-elements {
    position: relative;
    height: 0;
}

.floating-elem {
    position: absolute;
    font-size: 2rem;
    opacity: 0.2;
    animation: floatElement 6s infinite alternate;
}

@keyframes floatElement {
    0% { transform: translate(0, 0) rotate(0deg); }
    100% { transform: translate(30px, -30px) rotate(10deg); }
}

/* Responsive */
@media (max-width: 768px) {
    .page-title {
        font-size: 2rem;
    }
    
    .service-badge {
        font-size: 1.3rem;
    }
    
    .services-list-title {
        font-size: 1.5rem;
        padding: 0.8rem 1.5rem;
    }
    
    .services-list-title::before,
    .services-list-title::after {
        display: none;
    }
    
    .contact-buttons {
        flex-direction: column;
        align-items: center;
    }
    
    .btn {
        width: 100%;
        max-width: 350px;
        justify-content: center;
    }
}
</style>

<!-- بخش هیرو با المان‌های اختصاصی -->
<section class="page-hero">
    <!-- المان‌های تزئینی شناور -->
    <div class="floating-elements">
        <div class="floating-elem" style="top: 50px; right: 10%; animation-duration: 7s;">🎬</div>
        <div class="floating-elem" style="bottom: 30px; left: 5%; animation-duration: 9s;">🎥</div>
        <div class="floating-elem" style="top: 100px; left: 15%; animation-duration: 8s;">✨</div>
        <div class="floating-elem" style="bottom: 80px; right: 15%; animation-duration: 6s;">⭐</div>
    </div>
    
    <h1 class="page-title">ادیت حرفه‌ای ویدیو</h1>
    <div class="service-badge">ساده، زیبا و تأثیرگذار</div>
    <div class="page-description">
        <p>
            هر ویدیو یک داستان است. ما کمک می‌کنیم این داستان به بهترین شکل دیده شود. خدمات <strong>ویرایش ویدیو</strong> را با کیفیت بالا و هزینه مناسب برای همه نیازها ارائه می‌کنیم.
        </p>
        <p style="margin-top: 1.5rem; font-style: italic;">
            هدف ما این است که ویدیوهای شما طبیعی، جذاب و متفاوت باشد تا مخاطبان بیشتری جذب کنید.
        </p>
    </div>
</section>

<!-- بخش لیست خدمات با طراحی اختصاصی -->
<section class="services-list-section">
    <h3 class="services-list-title">خدمات ویرایش ویدیو</h3>
    
    <div class="services-grid">
        <div class="service-item">
            <div class="service-icon">
                <i class="fas fa-film"></i>
            </div>
            <div class="service-content">
                <h4>ادیت ویدیوهای خانوادگی و یادگاری</h4>
                <p>ساخت فیلم‌های خاطره‌انگیز از لحظات خاص زندگی</p>
            </div>
        </div>
        
        <div class="service-item">
            <div class="service-icon">
                <i class="fas fa-heart"></i>
            </div>
            <div class="service-content">
                <h4>کلیپ‌های شخصی، تولد، نامزدی و عروسی</h4>
                <p>شیرین‌ترین لحظات را ماندگار کنید</p>
            </div>
        </div>
        
        <div class="service-item">
            <div class="service-icon">
                <i class="fas fa-ad"></i>
            </div>
            <div class="service-content">
                <h4>ویدیوهای تبلیغاتی و معرفی خدمات</h4>
                <p>محصولات و خدمات خود را حرفه‌ای نشان دهید</p>
            </div>
        </div>
        
        <div class="service-item">
            <div class="service-icon">
                <i class="fab fa-youtube"></i>
            </div>
            <div class="service-content">
                <h4>ادیت برای یوتیوب، فیس‌بوک، اینستاگرام</h4>
                <p>متناسب با پلتفرم مورد نظر شما</p>
            </div>
        </div>
        
        <div class="service-item">
            <div class="service-icon">
                <i class="fas fa-video"></i>
            </div>
            <div class="service-content">
                <h4>تولید ریلز، شورت و محتوای کوتاه</h4>
                <p>جذب مخاطب با ویدیوهای کوتاه و جذاب</p>
            </div>
        </div>
        
        <div class="service-item">
            <div class="service-icon">
                <i class="fas fa-music"></i>
            </div>
            <div class="service-content">
                <h4>افزودن موسیقی، متن، لوگو، زیرنویس</h4>
                <p>افکت‌های مدرن و حرفه‌ای</p>
            </div>
        </div>
        
        <div class="service-item">
            <div class="service-icon">
                <i class="fas fa-sun"></i>
            </div>
            <div class="service-content">
                <h4>اصلاح نور، رنگ و افزایش کیفیت</h4>
                <p>بهبود کیفیت تصاویر و ویدیوها</p>
            </div>
        </div>
        
        <div class="service-item">
            <div class="service-icon">
                <i class="fas fa-magic"></i>
            </div>
            <div class="service-content">
                <h4>افکت‌های ویژه و انتقال‌های حرفه‌ای</h4>
                <p>ویدیوهایی با جلوه‌های مدرن</p>
            </div>
        </div>
    </div>
</section>

    
    <!-- کارت‌های نمونه کار -->
  <section>
    <div class="portfolio-grid">
        <div class="portfolio-card">
            <div class="portfolio-thumb">
                <i class="fas fa-camera-retro"></i>
                <div class="play-icon-small">
                    <i class="fas fa-play"></i>
                </div>
            </div>
            <div class="portfolio-info">
                <h4>کلیپ عروسی</h4>
                <p>ادیت احساسی با موسیقی متن</p>
            </div>
        </div>
        
        <div class="portfolio-card">
            <div class="portfolio-thumb">
                <i class="fas fa-bullhorn"></i>
                <div class="play-icon-small">
                    <i class="fas fa-play"></i>
                </div>
            </div>
            <div class="portfolio-info">
                <h4>تیزر تبلیغاتی</h4>
                <p>معرفی محصول با افکت‌های مدرن</p>
            </div>
        </div>
        
        <div class="portfolio-card">
            <div class="portfolio-thumb">
                <i class="fab fa-instagram"></i>
                <div class="play-icon-small">
                    <i class="fas fa-play"></i>
                </div>
            </div>
            <div class="portfolio-info">
                <h4>ریلز اینستاگرام</h4>
                <p>محتوای کوتاه و جذاب</p>
            </div>
        </div>
        
        <div class="portfolio-card">
            <div class="portfolio-thumb">
                <i class="fas fa-birthday-cake"></i>
                <div class="play-icon-small">
                    <i class="fas fa-play"></i>
                </div>
            </div>
            <div class="portfolio-info">
                <h4>کلیپ تولد</h4>
                <p>خاطرات شیرین جشن تولد</p>
            </div>
        </div>
    </div>
</section>

<!-- بخش ویژگی‌ها با دیزاین اختصاصی -->
<section class="features-section">
    <div class="section-title" style="color: #1a1a2e;">
        <h2 style="color: #1a1a2e;">چرا ادیت ویدیو با ما؟</h2>
        <p style="color: #6b7280;">تخصص، خلاقیت و توجه به جزئیات</p>
    </div>
    
    <div class="features-grid">
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-gem"></i>
            </div>
            <h3 class="feature-title">کیفیت بالا</h3>
            <p class="feature-description">ادیت حرفه‌ای با جدیدترین نرم‌افزارها و تکنیک‌ها</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-clock"></i>
            </div>
            <h3 class="feature-title">تحویل سریع</h3>
            <p class="feature-description">پروژه شما در کوتاه‌ترین زمان آماده می‌شود</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-hand-holding-heart"></i>
            </div>
            <h3 class="feature-title">توجه به سلیقه شما</h3>
            <p class="feature-description">هماهنگی کامل با خواسته و نظر شما</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-wallet"></i>
            </div>
            <h3 class="feature-title">قیمت مناسب</h3>
            <p class="feature-description">کیفیت بالا با هزینه‌ای متناسب با بودجه شما</p>
        </div>
    </div>
</section>

<!-- بخش تماس با دیزاین اختصاصی -->
<section class="contact-section">
    <h2 class="contact-title">ویدیوی شما داستانی دارد که باید دیده شود</h2>
    <p class="contact-description">
        برای مشاوره و مشاهده نمونه‌کارها، حضوری مراجعه کنید یا با ما تماس بگیرید
    </p>
    
    <div class="contact-buttons">
        <a href="tel:+93781821838" class="btn btn-primary">
            <i class="fas fa-phone-alt"></i>
            تماس تلفنی
        </a>
        
        <a href="https://wa.me/93774530372" class="btn btn-secondary" target="_blank">
            <i class="fab fa-whatsapp"></i>
            واتساپ
        </a>
        
        <a href="#footer" class="btn btn-secondary">
            <i class="fas fa-map-marker-alt"></i>
            آدرس فروشگاه
        </a>
    </div>
    
    <p style="margin-top: 2rem; opacity: 0.8; font-size: 1.1rem;">
        📍 کابل، ناحیه ۶، شهرک ۱۲ امام | 🕗 ۸ صبح تا ۸ شب
    </p>
</section>

<!-- المان‌های تزئینی پایین صفحه -->
<div style="display: flex; justify-content: center; gap: 1rem; margin-top: 2rem; opacity: 0.5;">
    <span style="font-size: 2rem;">🎬</span>
    <span style="font-size: 2rem;">🎥</span>
    <span style="font-size: 2rem;">📹</span>
    <span style="font-size: 2rem;">📽️</span>
    <span style="font-size: 2rem;">🎞️</span>
</div>
