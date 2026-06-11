---
layout: page
title: "طراحی و توسعه وب‌سایت حرفه‌ای"
description: "طراحی انواع وب‌سایت شرکتی، فروشگاهی، آموزشی و شخصی با کیفیت بالا و هزینه مناسب. ثبت دامنه، هاست، بهینه‌سازی و پشتیبانی کامل"
keywords: "طراحی وب‌سایت, فروشگاه آنلاین, طراحی سایت شرکتی, ثبت دامنه, هاست, بهینه‌سازی سایت, افزایش فروش, علی اکبری"
breadcrumb:
  - title: "خدمات وب"
    link: "/web-services/index.html"
---

<style>
/* ===== محتوای صفحه ===== */
.page-content {
    max-width: 1400px;
    margin: 0 auto;
    padding: 4rem 2rem;
}

/* هیرو بخش */
.page-hero {
    text-align: center;
    margin-bottom: 5rem;
    position: relative;
}

.page-hero::before {
    content: '';
    position: absolute;
    top: -50px;
    right: -50px;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(147, 51, 234, 0.1) 0%, transparent 70%);
    z-index: -1;
}

.page-title {
    font-size: 3.2rem;
    color: #7e22ce;
    margin-bottom: 1.5rem;
    font-weight: 900;
    line-height: 1.2;
    position: relative;
    display: inline-block;
}

.page-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    right: 50%;
    transform: translateX(50%);
    width: 150px;
    height: 5px;
    background: linear-gradient(90deg, #8b5cf6, #ec4899);
    border-radius: 3px;
}

.service-badge {
    display: inline-block;
    background: linear-gradient(135deg, #8b5cf6, #ec4899);
    color: white;
    padding: 0.8rem 2rem;
    border-radius: 50px;
    font-size: 1.8rem;
    font-weight: 800;
    margin: 1rem 0 2rem;
    box-shadow: 0 10px 25px rgba(139, 92, 246, 0.3);
    border: 3px solid white;
}

.page-description {
    font-size: 1.3rem;
    color: #2d3047;
    line-height: 2;
    max-width: 1000px;
    margin: 3rem auto 0;
    padding: 3rem;
    background: white;
    border-radius: 0.75rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    border: 2px solid rgba(139, 92, 246, 0.1);
    position: relative;
    overflow: hidden;
}

.page-description::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #8b5cf6, #ec4899);
}

.page-description strong {
    color: #8b5cf6;
    font-weight: 800;
    position: relative;
    padding: 0 4px;
}

.page-description strong::before {
    content: '';
    position: absolute;
    bottom: 2px;
    right: 0;
    width: 100%;
    height: 6px;
    background: rgba(139, 92, 246, 0.2);
    z-index: -1;
    border-radius: 2px;
}

/* بخش لیست خدمات */
.services-list-section {
    margin: 5rem 0;
    background: white;
    border-radius: 0.75rem;
    padding: 3rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    border: 2px solid rgba(139, 92, 246, 0.1);
}

.services-list-title {
    text-align: center;
    font-size: 2rem;
    color: #7e22ce;
    margin-bottom: 3rem;
    font-weight: 800;
    position: relative;
}

.services-list-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    right: 50%;
    transform: translateX(50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #8b5cf6, #ec4899);
    border-radius: 2px;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.service-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1.5rem;
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.03), rgba(236, 72, 153, 0.03));
    border-radius: 0.75rem;
    transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
    border: 2px solid transparent;
}

.service-item:hover {
    transform: translateY(-5px);
    border-color: #8b5cf6;
    box-shadow: 0 10px 25px rgba(139, 92, 246, 0.15);
}

.service-icon {
    font-size: 2.2rem;
    color: #8b5cf6;
    min-width: 50px;
    text-align: center;
}

.service-content h4 {
    font-size: 1.3rem;
    color: #7e22ce;
    margin-bottom: 0.5rem;
    font-weight: 700;
}

.service-content p {
    color: #6b7280;
    line-height: 1.6;
    font-size: 1rem;
}

/* بخش دسته‌بندی */
.categories-section {
    margin: 6rem 0;
}

.section-title {
    text-align: center;
    margin-bottom: 4rem;
    position: relative;
}

.section-title h2 {
    font-size: 2.5rem;
    color: #7e22ce;
    margin-bottom: 1.5rem;
    font-weight: 800;
    position: relative;
    display: inline-block;
}

.section-title h2::after {
    content: '';
    position: absolute;
    bottom: -10px;
    right: 50%;
    transform: translateX(50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #8b5cf6, #f59e0b);
    border-radius: 2px;
}

.section-title p {
    color: #6b7280;
    font-size: 1.2rem;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.8;
}

.categories-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2.5rem;
    margin-top: 3rem;
}

.category-card {
    background: white;
    padding: 2.5rem;
    border-radius: 0.75rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
    border: 2px solid transparent;
    position: relative;
    overflow: hidden;
}

.category-card::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #8b5cf6, #ec4899);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
}

.category-card:hover::before {
    transform: translateX(0);
}

.category-card:hover {
    transform: translateY(-15px);
    box-shadow: 0 20px 50px rgba(139, 92, 246, 0.25);
    border-color: #8b5cf6;
}

.category-icon {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, #8b5cf6, #f59e0b);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.8rem;
    color: white;
    font-size: 2rem;
    box-shadow: 0 10px 25px rgba(139, 92, 246, 0.3);
    transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.category-card:hover .category-icon {
    transform: scale(1.1) rotate(5deg);
}

.category-title {
    font-size: 1.6rem;
    color: #7e22ce;
    margin-bottom: 1.2rem;
    font-weight: 800;
}

.category-description {
    color: #6b7280;
    line-height: 1.7;
    font-size: 1.05rem;
}

/* بخش گالری - با آیکون‌های مفهومی */
.gallery-section {
    margin: 6rem 0;
    padding: 3rem 0;
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.03), rgba(236, 72, 153, 0.03));
    border-radius: 0.75rem;
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-top: 3rem;
    padding: 0 1rem;
}

.gallery-item {
    position: relative;
    border-radius: 0.75rem;
    overflow: hidden;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
    aspect-ratio: 1/1;
    background: linear-gradient(135deg, #f8f9fa, #e9ecef);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    text-align: center;
    border: 2px solid transparent;
}

.gallery-item:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 50px rgba(139, 92, 246, 0.25);
    border-color: #8b5cf6;
}

.gallery-icon {
    font-size: 5rem;
    color: #8b5cf6;
    margin-bottom: 1.5rem;
    transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.gallery-item:hover .gallery-icon {
    transform: scale(1.1);
    color: #7e22ce;
}

.gallery-title {
    font-size: 1.4rem;
    color: #7e22ce;
    font-weight: 700;
    margin-bottom: 0.5rem;
}

.gallery-description {
    color: #6b7280;
    font-size: 1rem;
    line-height: 1.6;
}

/* بخش ویژگی‌ها */
.features-section {
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(236, 72, 153, 0.05));
    padding: 5rem;
    border-radius: 0.75rem;
    margin: 6rem 0;
    position: relative;
    overflow: hidden;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2.5rem;
    position: relative;
    z-index: 1;
}

.feature-card {
    background: white;
    padding: 2.5rem;
    border-radius: 0.75rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
    border: 2px solid transparent;
}

.feature-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(139, 92, 246, 0.25);
    border-color: #8b5cf6;
}

.feature-icon {
    width: 70px;
    height: 70px;
    background: linear-gradient(135deg, #8b5cf6, #f59e0b);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    color: white;
    font-size: 1.8rem;
    box-shadow: 0 10px 20px rgba(139, 92, 246, 0.3);
}

.feature-title {
    font-size: 1.4rem;
    color: #7e22ce;
    margin-bottom: 1rem;
    font-weight: 700;
}

.feature-description {
    color: #6b7280;
    line-height: 1.6;
}

/* بخش اطلاعات تماس */
.contact-info-section {
    background: white;
    padding: 5rem;
    border-radius: 0.75rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    margin: 6rem 0;
    position: relative;
    overflow: hidden;
    border: 2px solid rgba(139, 92, 246, 0.1);
}

.contact-methods {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 3rem;
    margin-top: 3rem;
}

.method-card {
    text-align: center;
    padding: 3rem 2rem;
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(236, 72, 153, 0.05));
    border-radius: 0.75rem;
    transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
    border: 2px solid transparent;
}

.method-card:hover {
    transform: translateY(-10px);
    border-color: #8b5cf6;
    box-shadow: 0 20px 50px rgba(139, 92, 246, 0.25);
}

.method-icon {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    color: #8b5cf6;
}

.method-title {
    font-size: 1.5rem;
    color: #7e22ce;
    margin-bottom: 1rem;
    font-weight: 700;
}

.method-description {
    color: #6b7280;
    margin-bottom: 2rem;
    line-height: 1.7;
}

.method-btn {
    display: inline-block;
    padding: 1rem 2rem;
    background: #8b5cf6;
    color: white;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 600;
    transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
    border: 2px solid #8b5cf6;
}

.method-btn:hover {
    background: white;
    color: #8b5cf6;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(139, 92, 246, 0.3);
}

.whatsapp-btn {
    background: #25D366;
    border-color: #25D366;
}

.whatsapp-btn:hover {
    background: white;
    color: #25D366;
}

/* بخش تماس */
.contact-section {
    background: linear-gradient(135deg, #7e22ce, #ec4899);
    color: white;
    padding: 5rem 2rem;
    border-radius: 0.75rem;
    margin: 6rem 0;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.contact-title {
    font-size: 2.5rem;
    margin-bottom: 1.8rem;
    font-weight: 800;
    position: relative;
    z-index: 1;
    color: white;
}

.contact-description {
    font-size: 1.3rem;
    opacity: 0.95;
    max-width: 700px;
    margin: 0 auto 3rem;
    line-height: 1.9;
    position: relative;
    z-index: 1;
    color: white;
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
    padding: 1.2rem 2.5rem;
    border-radius: 50px;
    font-weight: 700;
    font-size: 1.1rem;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
    border: none;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.btn::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
}

.btn:hover::before {
    transform: translateX(0);
}

.btn-primary {
    background: white;
    color: #7e22ce;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.btn-primary:hover {
    background: #f9f7fe;
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
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
    border-color: rgba(255, 255, 255, 0.5);
}

/* Responsive Adjustments */
@media (max-width: 1200px) {
    .page-content {
        max-width: 100%;
    }
    
    .page-title {
        font-size: 2.8rem;
    }
}

@media (max-width: 992px) {
    .page-title {
        font-size: 2.4rem;
    }
    
    .service-badge {
        font-size: 1.5rem;
        padding: 0.6rem 1.5rem;
    }
    
    .features-section,
    .contact-info-section {
        padding: 3rem;
    }
}

@media (max-width: 768px) {
    .page-content {
        padding: 3rem 1.5rem;
    }
    
    .page-title {
        font-size: 2rem;
    }
    
    .page-description {
        font-size: 1.1rem;
        padding: 2rem;
        margin-top: 2rem;
    }
    
    .section-title h2 {
        font-size: 1.8rem;
    }
    
    .section-title p {
        font-size: 1.1rem;
    }
    
    .categories-grid,
    .features-grid,
    .contact-methods,
    .services-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .category-card {
        padding: 2rem;
    }
    
    .services-list-section {
        padding: 2rem;
    }
    
    .gallery-grid {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1rem;
    }
    
    .feature-card {
        padding: 2rem;
    }
    
    .contact-info-section {
        padding: 2rem;
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

@media (max-width: 480px) {
    .page-title {
        font-size: 1.8rem;
    }
    
    .page-description {
        padding: 1.5rem;
        font-size: 1rem;
    }
    
    .service-badge {
        font-size: 1.3rem;
        padding: 0.5rem 1.2rem;
    }
    
    .category-card {
        padding: 1.5rem;
    }
    
    .category-title {
        font-size: 1.4rem;
    }
    
    .gallery-grid {
        grid-template-columns: 1fr;
    }
    
    .gallery-item {
        padding: 1.5rem;
    }
    
    .gallery-icon {
        font-size: 4rem;
    }
    
    .gallery-title {
        font-size: 1.2rem;
    }
    
    .gallery-description {
        font-size: 0.9rem;
    }
    
    .features-section,
    .contact-info-section,
    .contact-section {
        padding: 2rem 1.5rem;
    }
    
    .features-section h2,
    .contact-title {
        font-size: 1.8rem;
    }
    
    .service-item {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    
    .service-icon {
        margin-bottom: 0.5rem;
    }
}
</style>

<!-- بخش هیرو -->
<section class="page-hero">
    <h1 class="page-title">وب‌سایت حرفه‌ای، شروع رشد واقعی کسب‌وکار شما</h1>
    <div class="service-badge">طراحی سایت + ثبت دامنه + هاست + پشتیبانی</div>
    <div class="page-description">
        <p>
            اگر می‌خواهید بیشتر دیده شوید، مشتریان جدید پیدا کنید و فروش خود را افزایش دهید، داشتن یک <strong>وب‌سایت ساده و حرفه‌ای</strong> بهترین قدم است. ما با درک نیاز شما، انواع خدمات طراحی و توسعه وب را با کیفیت بالا و هزینه مناسب ارائه می‌کنیم.
        </p>
        <p style="margin-top: 2rem; font-style: italic; color: #7e22ce;">
            ما تلاش می‌کنیم با کمترین هزینه، بهترین نتیجه را برای شما بسازیم؛ چون موفقیت شما، موفقیت ماست.
        </p>
    </div>
</section>

<!-- بخش لیست خدمات (با تیک‌های رنگی) -->
<section class="services-list-section">
    <h3 class="services-list-title">خدمات ما در یک نگاه:</h3>
    
    <div class="services-grid">
        <div class="service-item">
            <div class="service-icon">
                <i class="fas fa-check-circle" style="color: #8b5cf6;"></i>
            </div>
            <div class="service-content">
                <h4>طراحی وب‌سایت شرکتی، فروشگاهی، آموزشی و شخصی</h4>
                <p>متناسب با نوع کسب‌وکار و نیازهای خاص شما</p>
            </div>
        </div>
        
        <div class="service-item">
            <div class="service-icon">
                <i class="fas fa-check-circle" style="color: #8b5cf6;"></i>
            </div>
            <div class="service-content">
                <h4>ساخت فروشگاه آنلاین برای فروش محصولات و خدمات</h4>
                <p>امکان مدیریت آسان محصولات، سبد خرید و پرداخت آنلاین</p>
            </div>
        </div>
        
        <div class="service-item">
            <div class="service-icon">
                <i class="fas fa-check-circle" style="color: #8b5cf6;"></i>
            </div>
            <div class="service-content">
                <h4>طراحی زیبا، سریع و سازگار با موبایل</h4>
                <p>نمایش عالی در تمام دستگاه‌ها (موبایل، تبلت، لپ‌تاپ)</p>
            </div>
        </div>
        
        <div class="service-item">
            <div class="service-icon">
                <i class="fas fa-check-circle" style="color: #8b5cf6;"></i>
            </div>
            <div class="service-content">
                <h4>ثبت دامنه، هاست و راه‌اندازی کامل وب‌سایت</h4>
                <p>از صفر تا صد، همه چیز آماده تحویل</p>
            </div>
        </div>
        
        <div class="service-item">
            <div class="service-icon">
                <i class="fas fa-check-circle" style="color: #8b5cf6;"></i>
            </div>
            <div class="service-content">
                <h4>بهینه‌سازی برای گوگل و افزایش بازدید</h4>
                <p>قرارگیری در نتایج جستجو و جذب بازدیدکننده بیشتر</p>
            </div>
        </div>
        
        <div class="service-item">
            <div class="service-icon">
                <i class="fas fa-check-circle" style="color: #8b5cf6;"></i>
            </div>
            <div class="service-content">
                <h4>آموزش کار با سایت و پشتیبانی پس از تحویل</h4>
                <p>تا زمانی که کاملاً مستقل شوید، کنار شما هستیم</p>
            </div>
        </div>
    </div>
</section>

<!-- بخش دسته‌بندی انواع وب‌سایت -->
<section class="categories-section">
    <div class="section-title">
        <h2>انواع وب‌سایت‌هایی که طراحی می‌کنیم</h2>
        <p>متناسب با نیاز و بودجه شما</p>
    </div>
    
    <div class="categories-grid">
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-building"></i>
            </div>
            <h3 class="category-title">وب‌سایت شرکتی</h3>
            <p class="category-description">معرفی شرکت، خدمات، تیم و نمونه‌کارها با طراحی حرفه‌ای و مدرن</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-shopping-cart"></i>
            </div>
            <h3 class="category-title">فروشگاه اینترنتی</h3>
            <p class="category-description">خرید و فروش آنلاین با امکان پرداخت اینترنتی و مدیریت آسان محصولات</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-graduation-cap"></i>
            </div>
            <h3 class="category-title">وب‌سایت آموزشی</h3>
            <p class="category-description">ارائه دوره‌های آموزشی، جزوات، فیلم‌های آموزشی و سیستم مدیریت یادگیری</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-user-tie"></i>
            </div>
            <h3 class="category-title">وب‌سایت شخصی</h3>
            <p class="category-description">رزومه آنلاین، نمونه‌کارها، وبلاگ شخصی و معرفی تخصص‌ها</p>
        </div>                
    </div>
</section>

<!-- بخش گالری - با آیکون‌های مفهومی (ویژگی‌های سایت) -->
<section class="gallery-section">
    <div class="section-title">
        <h2>ویژگی‌های وب‌سایت شما</h2>
        <p>چیزی که تحویل می‌گیرید</p>
    </div>
    
    <div class="gallery-grid">
        <div class="gallery-item">
            <div class="gallery-icon">
                <i class="fas fa-mobile-alt"></i>
            </div>
            <h4 class="gallery-title">واکنش‌گرا (Responsive)</h4>
            <p class="gallery-description">نمایش عالی در موبایل، تبلت و کامپیوتر</p>
        </div>
        
        <div class="gallery-item">
            <div class="gallery-icon">
                <i class="fas fa-tachometer-alt"></i>
            </div>
            <h4 class="gallery-title">سرعت بالا</h4>
            <p class="gallery-description">بهینه‌سازی شده برای بارگذاری سریع</p>
        </div>
        
        <div class="gallery-item">
            <div class="gallery-icon">
                <i class="fas fa-search"></i>
            </div>
            <h4 class="gallery-title">سئو شده</h4>
            <p class="gallery-description">دوستدار گوگل و موتورهای جستجو</p>
        </div>
        
        <div class="gallery-item">
            <div class="gallery-icon">
                <i class="fas fa-lock"></i>
            </div>
            <h4 class="gallery-title">امن و مطمئن</h4>
            <p class="gallery-description">دارای گواهی SSL و محافظت در برابر حملات</p>
        </div>
    </div>
</section>

<!-- بخش ویژگی‌ها (چرا ما) -->
<section class="features-section">
    <div class="section-title">
        <h2>چرا طراحی وب‌سایت با ما را انتخاب کنید؟</h2>
        <p>تخصص، تعهد و پشتیبانی همیشگی</p>
    </div>
    
    <div class="features-grid">
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-paint-brush"></i>
            </div>
            <h3 class="feature-title">طراحی اختصاصی</h3>
            <p class="feature-description">بدون استفاده از قالب‌های آماده، کاملاً مطابق با سلیقه و نیاز شما</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-headset"></i>
            </div>
            <h3 class="feature-title">پشتیبانی دائمی</h3>
            <p class="feature-description">حتی پس از تحویل سایت، پاسخگوی سوالات و مشکلات شما هستیم</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-wallet"></i>
            </div>
            <h3 class="feature-title">قیمت منصفانه</h3>
            <p class="feature-description">کیفیت بالا با هزینه‌ای که برای هر کسب‌وکاری مناسب باشد</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-rocket"></i>
            </div>
            <h3 class="feature-title">تحویل سریع</h3>
            <p class="feature-description">زمان‌بندی دقیق و تحویل پروژه در کوتاه‌ترین زمان ممکن</p>
        </div>
    </div>
</section>

<!-- بخش اطلاعات تماس -->
<section class="contact-info-section">
    <div class="section-title">
        <h2>برای شروع، با ما تماس بگیرید</h2>
        <p>برای دریافت معلومات بیشتر و مشاوره رایگان، حضوری مراجعه کنید یا تماس بگیرید</p>
    </div>
    
    <div class="contact-methods">
        <div class="method-card">
            <div class="method-icon">📞</div>
            <h3 class="method-title">تماس تلفنی</h3>
            <p class="method-description">برای مشاوره رایگان و پاسخگویی به سوالات شما</p>
            <a href="tel:+93781821838" class="method-btn">
                تماس: ۰۷۸۱۸۲۱۸۳۸
            </a>
        </div>
        
        <div class="method-card">
            <div class="method-icon">🏪</div>
            <h3 class="method-title">مراجعه حضوری</h3>
            <p class="method-description">بیایید تا در مورد نیازهای شما صحبت کنیم</p>
            <a href="#footer" class="method-btn">
                آدرس فروشگاه
            </a>
        </div>
        
        <div class="method-card">
            <div class="method-icon">📱</div>
            <h3 class="method-title">درخواست در واتس‌اپ</h3>
            <p class="method-description">توضیحات خود را بفرستید تا در اسرع وقت پاسخ دهیم</p>
            <a href="https://wa.me/93774530372" class="method-btn whatsapp-btn" target="_blank">
                <i class="fab fa-whatsapp"></i>
                ارتباط در واتس‌اپ
            </a>
        </div>
    </div>
</section>

<!-- بخش تماس نهایی -->
<section class="contact-section">
    <h2 class="contact-title">آماده‌اید کسب‌وکار خود را آنلاین کنید؟</h2>
    <p class="contact-description">
        همین حالا با ما تماس بگیرید و اولین قدم را برای رشد واقعی بردارید
        <br>
        طراحی حرفه‌ای، هزینه مناسب، پشتیبانی همیشگی
    </p>
    
    <div class="contact-buttons">
        <a href="tel:+93781821838" class="btn btn-primary">
            <i class="fas fa-phone"></i>
            تماس تلفنی
        </a>
        
        <a href="https://wa.me/93774530372" class="btn btn-secondary" target="_blank">
            <i class="fab fa-whatsapp"></i>
            ارتباط در واتس‌اپ
        </a>
        
        <a href="#footer" class="btn btn-secondary">
            <i class="fas fa-map-marker-alt"></i>
            آدرس فروشگاه
        </a>
    </div>
    
    <p style="margin-top: 2rem; opacity: 0.9; font-size: 1.1rem; color: white;">
        📍 کابل، ناحیه ۶، شهرک ۱۲ امام | 🕗 ۸ صبح تا ۸ شب
    </p>
</section>