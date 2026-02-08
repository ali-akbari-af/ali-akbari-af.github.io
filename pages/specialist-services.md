---
layout: page
title: "خدمات تخصصی دیجیتال | فروشگاه علی اکبری - کابل"
description: "خدمات تخصصی دیجیتال شامل ترجمه، طراحی وب، ویرایش ویدئو، آموزش AI، تولید محتوا، طراحی گرافیک و مشاوره کارآفرینی در کابل"
keywords: "خدمات تخصصی, طراحی وب, ترجمه تخصصی, ویرایش ویدئو, هوش مصنوعی, تولید محتوا, طراحی گرافیک, مشاوره کارآفرینی, کابل"
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
    background: radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
    z-index: -1;
}

.page-title {
    font-size: 3.2rem;
    color: var(--primary-dark);
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
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    border-radius: 3px;
}

.services-badge {
    display: inline-block;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    color: white;
    padding: 0.8rem 2rem;
    border-radius: 50px;
    font-size: 1.8rem;
    font-weight: 800;
    margin: 1rem 0 2rem;
    box-shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
    border: 3px solid white;
}

.page-description {
    font-size: 1.3rem;
    color: var(--dark);
    line-height: 2;
    max-width: 1000px;
    margin: 3rem auto 0;
    padding: 3rem;
    background: white;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    border: 2px solid rgba(99, 102, 241, 0.1);
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
    background: linear-gradient(90deg, var(--primary), var(--secondary));
}

.page-description strong {
    color: var(--primary);
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
    background: rgba(99, 102, 241, 0.2);
    z-index: -1;
    border-radius: 2px;
}

/* بخش خدمات اصلی */
.services-section {
    margin: 6rem 0;
}

.section-title {
    text-align: center;
    margin-bottom: 4rem;
    position: relative;
}

.section-title h2 {
    font-size: 2.5rem;
    color: var(--primary-dark);
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
    background: linear-gradient(90deg, var(--primary), var(--accent));
    border-radius: 2px;
}

.section-title p {
    color: var(--gray);
    font-size: 1.2rem;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.8;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2.5rem;
    margin-top: 3rem;
}

.service-card {
    background: white;
    padding: 2.5rem;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    text-align: center;
    transition: var(--transition-base);
    border: 2px solid transparent;
    position: relative;
    overflow: hidden;
}

.service-card::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    transform: translateX(-100%);
    transition: transform 0.6s ease;
}

.service-card:hover::before {
    transform: translateX(0);
}

.service-card:hover {
    transform: translateY(-15px);
    box-shadow: var(--shadow-hover);
    border-color: var(--primary-light);
}

.service-icon {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, var(--primary), var(--accent));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.8rem;
    color: white;
    font-size: 2rem;
    box-shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
    transition: var(--transition-base);
}

.service-card:hover .service-icon {
    transform: scale(1.1) rotate(5deg);
}

.service-title {
    font-size: 1.6rem;
    color: var(--primary-dark);
    margin-bottom: 1.2rem;
    font-weight: 800;
}

.service-description {
    color: var(--gray);
    line-height: 1.7;
    font-size: 1.05rem;
}

/* بخش دسته‌بندی خدمات */
.categories-section {
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.03), rgba(139, 92, 246, 0.03));
    padding: 5rem;
    border-radius: var(--radius-lg);
    margin: 6rem 0;
    position: relative;
    overflow: hidden;
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
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    border-left: 6px solid var(--primary);
    transition: var(--transition-base);
}

.category-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-hover);
}

.category-title {
    font-size: 1.5rem;
    color: var(--primary-dark);
    margin-bottom: 1.5rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 0.8rem;
}

.category-title i {
    color: var(--accent);
    font-size: 1.3rem;
}

.category-list {
    list-style: none;
    padding: 0;
}

.category-list li {
    padding: 0.8rem 0;
    border-bottom: 1px solid var(--gray-light);
    color: var(--gray);
    display: flex;
    align-items: center;
    gap: 0.8rem;
}

.category-list li:last-child {
    border-bottom: none;
}

.category-list i {
    color: var(--accent-alt);
    font-size: 0.9rem;
}

/* بخش گالری نمونه کارها */
.portfolio-section {
    margin: 6rem 0;
    padding: 3rem 0;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.03), rgba(139, 92, 246, 0.03));
    border-radius: var(--radius-lg);
}

.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-top: 3rem;
    padding: 0 1rem;
}

.portfolio-item {
    position: relative;
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-lg);
    transition: var(--transition-base);
    aspect-ratio: 4/3;
}

.portfolio-item:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: var(--shadow-hover);
}

.portfolio-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition-base);
}

.portfolio-item:hover .portfolio-img {
    transform: scale(1.1);
}

.portfolio-overlay {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
    padding: 1.5rem;
    transform: translateY(100%);
    transition: var(--transition-base);
}

.portfolio-item:hover .portfolio-overlay {
    transform: translateY(0);
}

.portfolio-title {
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.portfolio-description {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
}

/* بخش فرآیند کار */
.process-section {
    background: linear-gradient(135deg, var(--primary-dark), var(--secondary));
    color: white;
    padding: 5rem 2rem;
    border-radius: var(--radius-lg);
    margin: 6rem 0;
    position: relative;
    overflow: hidden;
}

.process-title {
    font-size: 2.5rem;
    margin-bottom: 1.8rem;
    font-weight: 800;
    position: relative;
    z-index: 1;
    text-align: center;
}

.process-description {
    font-size: 1.3rem;
    opacity: 0.95;
    max-width: 700px;
    margin: 0 auto 3rem;
    line-height: 1.9;
    position: relative;
    z-index: 1;
    text-align: center;
}

.process-steps {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    position: relative;
    z-index: 1;
}

.process-step {
    background: rgba(255, 255, 255, 0.1);
    padding: 2rem;
    border-radius: var(--radius-lg);
    text-align: center;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: var(--transition-base);
}

.process-step:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-5px);
}

.step-number {
    display: inline-block;
    width: 50px;
    height: 50px;
    background: white;
    color: var(--primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
}

.step-title {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    font-weight: 700;
}

.step-description {
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.6;
}

/* بخش تماس */
.contact-section {
    background: white;
    padding: 5rem;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    margin: 6rem 0;
    position: relative;
    overflow: hidden;
    border: 2px solid rgba(99, 102, 241, 0.1);
}

.contact-title {
    font-size: 2.5rem;
    margin-bottom: 1.8rem;
    font-weight: 800;
    position: relative;
    z-index: 1;
    color: var(--primary-dark);
    text-align: center;
}

.contact-description {
    font-size: 1.3rem;
    color: var(--gray);
    max-width: 700px;
    margin: 0 auto 3rem;
    line-height: 1.9;
    position: relative;
    z-index: 1;
    text-align: center;
}

.contact-methods {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.method-card {
    text-align: center;
    padding: 2.5rem;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(139, 92, 246, 0.05));
    border-radius: var(--radius-lg);
    transition: var(--transition-base);
    border: 2px solid transparent;
}

.method-card:hover {
    transform: translateY(-10px);
    border-color: var(--primary);
    box-shadow: var(--shadow-hover);
}

.method-icon {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    color: var(--primary);
}

.method-title {
    font-size: 1.5rem;
    color: var(--primary-dark);
    margin-bottom: 1rem;
    font-weight: 700;
}

.method-description {
    color: var(--gray);
    margin-bottom: 2rem;
    line-height: 1.7;
}

.method-btn {
    display: inline-block;
    padding: 1rem 2rem;
    background: var(--primary);
    color: white;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 600;
    transition: var(--transition-base);
    border: 2px solid var(--primary);
}

.method-btn:hover {
    background: white;
    color: var(--primary);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(99, 102, 241, 0.3);
}

.whatsapp-btn {
    background: #25D366;
    border-color: #25D366;
}

.whatsapp-btn:hover {
    background: white;
    color: #25D366;
}

/* Responsive Adjustments for page content */
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
    
    .services-badge {
        font-size: 1.5rem;
        padding: 0.6rem 1.5rem;
    }
    
    .categories-section,
    .contact-section {
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
    
    .services-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .service-card {
        padding: 2rem;
    }
    
    .categories-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .category-card {
        padding: 2rem;
    }
    
    .portfolio-grid {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 1rem;
    }
    
    .process-steps {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    
    .process-step {
        padding: 1.5rem;
    }
    
    .contact-methods {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .method-card {
        padding: 2rem;
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
    
    .services-badge {
        font-size: 1.3rem;
        padding: 0.5rem 1.2rem;
    }
    
    .service-card {
        padding: 1.5rem;
    }
    
    .service-title {
        font-size: 1.4rem;
    }
    
    .portfolio-grid {
        grid-template-columns: 1fr;
    }
    
    .categories-section,
    .contact-section,
    .process-section {
        padding: 2rem 1.5rem;
    }
    
    .categories-section h2,
    .process-title,
    .contact-title {
        font-size: 1.8rem;
    }
}

/* Lightbox Customizations */
.lightbox {
    direction: ltr;
}

.lb-nav a.lb-prev,
.lb-nav a.lb-next {
    opacity: 1;
}
</style>

<!-- بخش هیرو -->
<section class="page-hero">
    <h1 class="page-title">خدمات تخصصی دیجیتال</h1>
    <div class="services-badge">راهکارهای حرفه‌ای برای عصر دیجیتال</div>
    <div class="page-description">
        <p>
            <strong>خدمات تخصصی دیجیتال</strong> ما با هدف ارائه راهکارهای نوین و کارآمد برای نیازهای متنوع افراد و کسب‌وکارها طراحی شده است. از ترجمه متون تخصصی تا طراحی وب‌سایت‌های مدرن، از آموزش هوش مصنوعی تا تولید محتوای چندرسانه‌ای - ما همراه شما در مسیر دیجیتال‌سازی و رشد هستیم.
        </p>
        <p style="margin-top: 2rem; font-style: italic; color: var(--primary-dark);">
            با تیمی از متخصصین مجرب در حوزه‌های مختلف دیجیتال، آماده ارائه خدمات با کیفیت و مطابق با استانداردهای روز دنیا هستیم.
        </p>
    </div>
</section>

<!-- بخش خدمات اصلی -->
<section class="services-section">
    <div class="section-title">
        <h2>خدمات تخصصی ما</h2>
        <p>ارائه طیف وسیعی از خدمات دیجیتال برای پاسخگویی به نیازهای متنوع شما</p>
    </div>
    
    <div class="services-grid">
        <div class="service-card" id="translation">
            <div class="service-icon">
                <i class="fas fa-language"></i>
            </div>
            <h3 class="service-title">ترجمه تخصصی</h3>
            <p class="service-description">ترجمه دقیق متون از زبان‌های ملی به انگلیسی و بالعکس با حفظ اصطلاحات تخصصی و کیفیت بالا</p>
        </div>
        
        <div class="service-card" id="web-app">
            <div class="service-icon">
                <i class="fas fa-code"></i>
            </div>
            <h3 class="service-title">طراحی و توسعه وب</h3>
            <p class="service-description">طراحی وب‌سایت‌های مدرن، واکنشگرا و بهینه‌شده برای موتورهای جستجو با قابلیت‌های پیشرفته</p>
        </div>
        
        <div class="service-card">
            <div class="service-icon">
                <i class="fas fa-camera-retro"></i>
            </div>
            <h3 class="service-title">بازسازی عکس‌های قدیمی</h3>
            <p class="service-description">ترمیم و بازسازی عکس‌های قدیمی و آسیب دیده با استفاده از تکنیک‌های پیشرفته ویرایش تصویر</p>
        </div>
        
        <div class="service-card">
            <div class="service-icon">
                <i class="fas fa-laptop-code"></i>
            </div>
            <h3 class="service-title">آموزش کامپیوتر</h3>
            <p class="service-description">آموزش مهارت‌های ضروری کامپیوتری از سطح مقدماتی تا پیشرفته برای همه گروه‌های سنی</p>
        </div>
        
        <div class="service-card" id="ai-training">
            <div class="service-icon">
                <i class="fas fa-robot"></i>
            </div>
            <h3 class="service-title">آموزش هوش مصنوعی</h3>
            <p class="service-description">آموزش کار با ابزارهای AI و هوش مصنوعی برای بهره‌برداری از تکنولوژی‌های روز در کار و زندگی</p>
        </div>
        
        <div class="service-card" id="video-editing">
            <div class="service-icon">
                <i class="fas fa-video"></i>
            </div>
            <h3 class="service-title">ویرایش ویدئو</h3>
            <p class="service-description">تدوین حرفه‌ای ویدئو، افزودن افکت، زیرنویس و بهینه‌سازی کیفیت برای محتوای چندرسانه‌ای</p>
        </div>
        
        <div class="service-card">
            <div class="service-icon">
                <i class="fas fa-photo-video"></i>
            </div>
            <h3 class="service-title">تولید محتوای دیجیتال</h3>
            <p class="service-description">تولید محتوای متنوع شامل تصویر، ویدئو، پادکست و اینفوگرافیک برای اهداف مختلف</p>
        </div>
        
        <div class="service-card" id="graphic-design">
            <div class="service-icon">
                <i class="fas fa-paint-brush"></i>
            </div>
            <h3 class="service-title">طراحی گرافیک و لوگو</h3>
            <p class="service-description">طراحی لوگو، بروشور، بنر و سایر آثار گرافیکی با ایده‌های خلاقانه و منحصر به فرد</p>
        </div>
    </div>
</section>

<!-- بخش دسته‌بندی خدمات -->
<section class="categories-section">
    <div class="section-title">
        <h2>دسته‌بندی کامل خدمات</h2>
        <p>تمام خدمات تخصصی ما در یک نگاه</p>
    </div>
    
    <div class="categories-grid">
        <div class="category-card">
            <h3 class="category-title"><i class="fas fa-language"></i> خدمات ترجمه و نگارش</h3>
            <ul class="category-list">
                <li><i class="fas fa-check-circle"></i> ترجمه متون از زبان‌های ملی به انگلیسی و بالعکس</li>
                <li><i class="fas fa-check-circle"></i> تایپ و صفحه‌آرایی متون تخصصی</li>
                <li><i class="fas fa-check-circle"></i> ویرایش و بازنویسی متون فارسی و انگلیسی</li>
                <li><i class="fas fa-check-circle"></i> ترجمه همزمان اسناد حقوقی و تجاری</li>
            </ul>
        </div>
        
        <div class="category-card">
            <h3 class="category-title"><i class="fas fa-laptop-code"></i> خدمات دیجیتال و فنی</h3>
            <ul class="category-list">
                <li><i class="fas fa-check-circle"></i> طراحی و توسعه وب‌سایت</li>
                <li><i class="fas fa-check-circle"></i> آموزش مهارت‌های کامپیوتری</li>
                <li><i class="fas fa-check-circle"></i> آموزش کار با هوش مصنوعی و ابزارهای AI</li>
                <li><i class="fas fa-check-circle"></i> مشاوره و اجرای پروژه‌های شخصی و سازمانی</li>
            </ul>
        </div>
        
        <div class="category-card">
            <h3 class="category-title"><i class="fas fa-photo-video"></i> خدمات رسانه و طراحی</h3>
            <ul class="category-list">
                <li><i class="fas fa-check-circle"></i> بازسازی و ترمیم عکس‌های قدیمی</li>
                <li><i class="fas fa-check-circle"></i> ویرایش و تدوین ویدئو</li>
                <li><i class="fas fa-check-circle"></i> تولید محتوای دیجیتال و چندرسانه‌ای</li>
                <li><i class="fas fa-check-circle"></i> طراحی گرافیک و لوگو</li>
            </ul>
        </div>
        
        <div class="category-card">
            <h3 class="category-title"><i class="fas fa-chart-line"></i> خدمات مشاوره و مدیریت</h3>
            <ul class="category-list">
                <li><i class="fas fa-check-circle"></i> مشاوره و اجرای پروژه‌های شخصی و سازمانی</li>
                <li><i class="fas fa-check-circle"></i> مدیریت و بهینه‌سازی شبکه‌های اجتماعی</li>
                <li><i class="fas fa-check-circle"></i> مشاوره کارآفرینی و ایجاد شغل‌های دانش‌بنیان</li>
                <li><i class="fas fa-check-circle"></i> راه‌اندازی کسب‌وکارهای آنلاین</li>
            </ul>
        </div>
    </div>
</section>

<!-- بخش نمونه کارها -->
<section class="portfolio-section">
    <div class="section-title">
        <h2>نمونه کارهای ما</h2>
        <p>برخی از پروژه‌های موفق انجام شده</p>
    </div>
    
    <div class="portfolio-grid">
        <a href="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" class="portfolio-item" data-lightbox="portfolio" data-title="طراحی وب‌سایت تجاری">
            <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="طراحی وب‌سایت تجاری" class="portfolio-img">
            <div class="portfolio-overlay">
                <h4 class="portfolio-title">طراحی وب‌سایت تجاری</h4>
                <p class="portfolio-description">طراحی وب‌سایت فروشگاهی با قابلیت‌های پیشرفته</p>
            </div>
        </a>
        
        <a href="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" class="portfolio-item" data-lightbox="portfolio" data-title="طراحی لوگو و هویت بصری">
            <img src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="طراحی لوگو و هویت بصری" class="portfolio-img">
            <div class="portfolio-overlay">
                <h4 class="portfolio-title">طراحی لوگو و هویت بصری</h4>
                <p class="portfolio-description">طراحی هویت بصری کامل برای برند جدید</p>
            </div>
        </a>
        
        <a href="https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" class="portfolio-item" data-lightbox="portfolio" data-title="تدوین ویدئو تبلیغاتی">
            <img src="https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="تدوین ویدئو تبلیغاتی" class="portfolio-img">
            <div class="portfolio-overlay">
                <h4 class="portfolio-title">تدوین ویدئو تبلیغاتی</h4>
                <p class="portfolio-description">ویرایش حرفه‌ای ویدئو برای کمپین تبلیغاتی</p>
            </div>
        </a>
        
        <a href="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" class="portfolio-item" data-lightbox="portfolio" data-title="بازسازی عکس تاریخی">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="بازسازی عکس تاریخی" class="portfolio-img">
            <div class="portfolio-overlay">
                <h4 class="portfolio-title">بازسازی عکس تاریخی</h4>
                <p class="portfolio-description">ترمیم و رنگ‌آمیزی عکس تاریخی ۵۰ ساله</p>
            </div>
        </a>
    </div>
</section>

<!-- بخش فرآیند کار -->
<section class="process-section">
    <h2 class="process-title">فرآیند انجام پروژه</h2>
    <p class="process-description">
        ما با یک فرآیند ساختاریافته و شفاف، کیفیت و رضایت شما را تضمین می‌کنیم
    </p>
    
    <div class="process-steps">
        <div class="process-step">
            <div class="step-number">۱</div>
            <h3 class="step-title">مشاوره و نیازسنجی</h3>
            <p class="step-description">درک دقیق نیازها و اهداف پروژه شما از طریق جلسات مشاوره</p>
        </div>
        
        <div class="process-step">
            <div class="step-number">۲</div>
            <h3 class="step-title">برآورد و پیشنهاد</h3>
            <p class="step-description">ارائه پیشنهاد دقیق با جزئیات هزینه و زمان‌بندی</p>
        </div>
        
        <div class="process-step">
            <div class="step-number">۳</div>
            <h3 class="step-title">اجرا و توسعه</h3>
            <p class="step-description">انجام پروژه با بالاترین استانداردهای کیفیت و فنی</p>
        </div>
        
        <div class="process-step">
            <div class="step-number">۴</div>
            <h3 class="step-title">تحویل و پشتیبانی</h3>
            <p class="step-description">تحویل نهایی و ارائه پشتیبانی پس از اتمام پروژه</p>
        </div>
    </div>
</section>

<!-- بخش تماس -->
<section class="contact-section">
    <h2 class="contact-title">شروع پروژه تخصصی خود</h2>
    <p class="contact-description">
        برای دریافت مشاوره رایگان و شروع پروژه خود، یکی از روش‌های زیر را انتخاب کنید
    </p>
    
    <div class="contact-methods">
        <div class="method-card">
            <div class="method-icon">📞</div>
            <h3 class="method-title">مشاوره تلفنی</h3>
            <p class="method-description">با ما تماس بگیرید و در مورد پروژه خود مشورت کنید</p>
            <a href="tel:{{ site.phone_primary }}" class="method-btn">
                تماس: {{ site.phone_primary }}
            </a>
        </div>
        
        <div class="method-card">
            <div class="method-icon">🏪</div>
            <h3 class="method-title">مراجعه حضوری</h3>
            <p class="method-description">به فروشگاه ما مراجعه کنید و مستقیماً با متخصصان مشورت کنید</p>
            <a href="#footer" class="method-btn">
                آدرس فروشگاه
            </a>
        </div>
        
        <div class="method-card">
            <div class="method-icon">📱</div>
            <h3 class="method-title">دریافت پیشنهاد</h3>
            <p class="method-description">جزئیات پروژه خود را در واتس‌اپ ارسال کنید و پیشنهاد دریافت کنید</p>
            <a href="https://wa.me/{{ site.whatsapp_number }}" class="method-btn whatsapp-btn" target="_blank">
                <i class="fab fa-whatsapp"></i>
                ارسال در واتس‌اپ
            </a>
        </div>
    </div>
    
    <p style="margin-top: 3rem; opacity: 0.9; font-size: 1.1rem; text-align: center; color: var(--gray);">
        📍 {{ site.address }} | 🕗 {{ site.work_hours }}
    </p>
</section>