---
layout: page
title: "کتاب‌های انگلیسی | فروشگاه علی اکبری - کابل"
description: "کتاب‌های زبان انگلیسی برای مکاتب و مراکز آموزشی – عمده و پرچون با بالاترین کیفیت و پایین‌ترین قیمت در کابل"
keywords: "کتاب انگلیسی, کتاب زبان انگلیسی, کتاب‌های آموزشی انگلیسی, مکاتب کابل, مراکز آموزشی, کتاب‌فروشی علی اکبری"
breadcrumb:
  - title: "کتاب‌فروشی"
    link: "/books"
---

<style>
/* ===== CSS Variables ===== */
:root {
    /* Colors (refreshed palette: teal + indigo + warm accent) */
    --primary: #0ea5a4;
    --primary-dark: #0b8f89;
    --primary-light: #2dd4bf;
    --secondary: #6366f1;
    --accent: #f59e0b;
    --dark: #0f1724;
    --dark-light: #24303a;
    --light: #f8fafc;
    --gray: #6b7280;
    --gray-light: #e6eef2;
    --gray-lighter: #f7fafc;
    --success: #16a34a;
    --warning: #f59e0b;
    --danger: #ef4444;
    
    /* Border Radius */
    --radius-sm: 0.375rem;
    --radius-md: 0.5rem;
    --radius-lg: 0.75rem;
    --radius-xl: 1rem;
    --radius-2xl: 1.5rem;
    
    /* Shadows */
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    
    /* Transitions */
    --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* ===== محتوای صفحه ===== */
.page-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 3rem 2rem;
}

/* هیرو بخش */
.page-hero {
    text-align: center;
    margin-bottom: 4rem;
}

.page-title {
    font-size: 2.8rem;
    color: var(--primary-dark);
    margin-bottom: 1.5rem;
    font-weight: 800;
    line-height: 1.2;
}

.page-description {
    font-size: 1.2rem;
    color: var(--gray);
    line-height: 1.8;
    max-width: 900px;
    margin: 0 auto;
}

.page-description strong {
    color: var(--primary);
    font-weight: 700;
}

/* لیست سری‌های کتاب */
.series-section {
    margin: 4rem 0;
    background: white;
    padding: 3rem;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
}

.series-title {
    font-size: 2rem;
    color: var(--primary-dark);
    margin-bottom: 2rem;
    text-align: center;
    font-weight: 700;
    position: relative;
    padding-bottom: 1rem;
}

.series-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 50%;
    transform: translateX(50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, var(--primary), var(--accent));
    border-radius: 2px;
}

.series-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
}

.series-item {
    background: linear-gradient(135deg, #f8fafc, #f1f5f9);
    padding: 1.5rem;
    border-radius: var(--radius-lg);
    border-left: 4px solid var(--primary);
    transition: var(--transition-base);
}

.series-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
}

.series-item h3 {
    color: var(--primary-dark);
    margin-bottom: 0.5rem;
    font-weight: 700;
    font-size: 1.3rem;
}

.series-item p {
    color: var(--gray);
    line-height: 1.6;
}

/* Features Section */
.features-section {
    margin: 4rem 0;
}

.section-title {
    text-align: center;
    margin-bottom: 3rem;
}

.section-title h2 {
    font-size: 2.2rem;
    color: var(--primary-dark);
    margin-bottom: 1rem;
    font-weight: 700;
}

.section-title p {
    color: var(--gray);
    font-size: 1.1rem;
    max-width: 700px;
    margin: 0 auto;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.feature-card {
    background: white;
    padding: 2.5rem 2rem;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    text-align: center;
    transition: var(--transition-base);
    border: 1px solid transparent;
}

.feature-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-2xl);
    border-color: var(--primary-light);
}

.feature-icon {
    width: 70px;
    height: 70px;
    background: linear-gradient(135deg, var(--primary), var(--accent));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    color: white;
    font-size: 1.8rem;
}

.feature-title {
    font-size: 1.4rem;
    color: var(--primary-dark);
    margin-bottom: 1rem;
    font-weight: 700;
}

.feature-description {
    color: var(--gray);
    line-height: 1.6;
}

/* Gallery Section */
.gallery-section {
    margin: 4rem 0;
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
}

.gallery-item {
    position: relative;
    border-radius: var(--radius-lg);
    overflow: hidden;
    aspect-ratio: 4/3;
    background: var(--gray-light);
}

.gallery-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.gallery-item:hover .gallery-image {
    transform: scale(1.1);
}

.gallery-overlay {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
    padding: 1.5rem;
    color: white;
    transform: translateY(100%);
    transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
    transform: translateY(0);
}

/* Contact Section */
.contact-section {
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    color: white;
    padding: 4rem 2rem;
    border-radius: var(--radius-lg);
    margin: 4rem 0;
    text-align: center;
}

.contact-title {
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
}

.contact-description {
    font-size: 1.2rem;
    opacity: 0.9;
    max-width: 700px;
    margin: 0 auto 2rem;
}

.contact-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}

.btn {
    padding: 1rem 2rem;
    border-radius: 50px;
    font-weight: 600;
    font-size: 1rem;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    transition: var(--transition-base);
    border: none;
    cursor: pointer;
}

.btn-primary {
    background: white;
    color: var(--primary);
}

.btn-primary:hover {
    background: var(--light);
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.btn-secondary {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.3);
}

.btn-secondary:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-3px);
}

/* Responsive Adjustments for page content */
@media (max-width: 992px) {
    .page-title {
        font-size: 2.2rem;
    }
    
    .series-section {
        padding: 2rem;
    }
    
    .features-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
    }
    
    .gallery-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .series-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .page-content {
        padding: 2rem 1.5rem;
    }
    
    .page-title {
        font-size: 1.8rem;
    }
    
    .page-description {
        font-size: 1.1rem;
    }
    
    .section-title h2 {
        font-size: 1.8rem;
    }
    
    .series-title {
        font-size: 1.6rem;
    }
    
    .features-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    
    .gallery-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
    
    .contact-buttons {
        flex-direction: column;
        align-items: center;
    }
    
    .btn {
        width: 100%;
        max-width: 300px;
        justify-content: center;
    }
    
    .series-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    .page-title {
        font-size: 1.6rem;
    }
    
    .page-description {
        font-size: 1rem;
    }
    
    .series-section {
        padding: 1.5rem;
    }
    
    .contact-section {
        padding: 3rem 1.5rem;
    }
    
    .contact-title {
        font-size: 1.8rem;
    }
}

/* Touch Device Optimizations */
@media (hover: none) and (pointer: coarse) {
    .series-item:hover {
        transform: none;
    }
    
    .feature-card:hover {
        transform: none;
    }
    
    .gallery-item:hover .gallery-overlay {
        transform: translateY(0);
    }
    
    .gallery-item:hover .gallery-image {
        transform: none;
    }
    
    .btn-primary:hover,
    .btn-secondary:hover {
        transform: none;
    }
    
    /* Add active states for touch devices */
    .series-item:active {
        transform: scale(0.98);
    }
    
    .feature-card:active {
        transform: scale(0.98);
    }
    
    .btn:active {
        transform: scale(0.98);
    }
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
    
    .series-item:hover,
    .feature-card:hover,
    .gallery-item:hover .gallery-image,
    .gallery-item:hover .gallery-overlay {
        transform: none;
    }
}

/* ===== Animations ===== */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in {
    animation: fadeIn 0.6s ease-out forwards;
}

.delay-1 {
    animation-delay: 0.2s;
}

.delay-2 {
    animation-delay: 0.4s;
}

.delay-3 {
    animation-delay: 0.6s;
}
</style>

<!-- بخش هیرو -->
<section class="page-hero">
    <h1 class="page-title">کتاب‌های انگلیسی</h1>
    <div class="page-description">
        <p>
            کتاب‌های زبان انگلیسی برای مکاتب و مراکز آموزشی – تامین کامل و همه‌جانبه
            <br><br>
            ما مجموعه‌ای کامل از کتاب‌های زبان انگلیسی برای مکاتب و مراکز آموزشی افغانستان را ارائه می‌کنیم، شامل تمامی سطوح و رشته‌ها، از پایه تا پیشرفته، با سری‌ها از شماره اول تا آخر و همراه با فایل‌های صوتی آموزشی. فروش به صورت عمده و پرچون می‌باشد و همچنین سفارش‌های چاپ و تأمین کتاب‌ها بر اساس نیاز مرکز آموزشی شما پذیرفته می‌شود.
            <br><br>
            <strong>رضایت و موفقیت شما هدف ماست!</strong>
        </p>
    </div>
</section>

<!-- بخش سری‌های کتاب -->
<section class="series-section">
    <h2 class="series-title">برخی از کتاب‌ها و سری‌های موجود</h2>
    
    <div class="series-grid">
        <div class="series-item">
            <h3>Q-Skills series</h3>
            <p>سری کتاب‌های تقویت مهارت‌های چهارگانه زبان</p>
        </div>
        
        <div class="series-item">
            <h3>Select Reading series</h3>
            <p>مجموعه‌ای برای تقویت مهارت خواندن</p>
        </div>
        
        <div class="series-item">
            <h3>Tactics for Listening series</h3>
            <p>کتاب‌های تقویت مهارت شنیداری</p>
        </div>
        
        <div class="series-item">
            <h3>Family and Friends series</h3>
            <p>مناسب برای کودکان و نوجوانان</p>
        </div>
        
        <div class="series-item">
            <h3>American Files series</h3>
            <p>سری آموزشی زبان آمریکایی</p>
        </div>
        
        <div class="series-item">
            <h3>400 Words series</h3>
            <p>تقویت دایره لغات پایه</p>
        </div>
        
        <div class="series-item">
            <h3>Step 2 / Step Understanding series</h3>
            <p>گام به گام برای درک مطلب</p>
        </div>
        
        <div class="series-item">
            <h3>Contemporary Topics series</h3>
            <p>مباحث معاصر برای یادگیری</p>
        </div>
        
        <div class="series-item">
            <h3>Let's Go series</h3>
            <p>محبوب در آموزش کودکان</p>
        </div>
        
        <div class="series-item">
            <h3>English Time series</h3>
            <p>آموزش گام به گام زبان</p>
        </div>
        
        <div class="series-item">
            <h3>Streamline series</h3>
            <p>یادگیری سریع و کارآمد</p>
        </div>
        
        <div class="series-item">
            <h3>Cause and Effect series</h3>
            <p>تقویت تفکر تحلیلی</p>
        </div>
        
        <div class="series-item">
            <h3>Inside Reading series</h3>
            <p>تخصصی برای مهارت خواندن</p>
        </div>
        
        <div class="series-item">
            <h3>Extensive Reading series</h3>
            <p>خواندن گسترده و عمیق</p>
        </div>
        
        <div class="series-item">
            <h3>Four Corners series</h3>
            <p>آموزش جامع چهار مهارت</p>
        </div>
        
        <div class="series-item">
            <h3>Skill for the Toefl IBT Test series</h3>
            <p>آمادگی برای آزمون تافل</p>
        </div>
        
        <div class="series-item">
            <h3>Interchange series</h3>
            <p>از معروف‌ترین سری‌های آموزشی</p>
        </div>
        
        <div class="series-item">
            <h3>Headway series</h3>
            <p>یکی از پرفروش‌ترین سری‌ها</p>
        </div>
        
        <div class="series-item">
            <h3>Touchstone series</h3>
            <p>آموزش زبان طبیعی</p>
        </div>
        
        <div class="series-item">
            <h3>Cover to Cover series</h3>
            <p>خواندن از ابتدا تا انتها</p>
        </div>
        
        <div class="series-item">
            <h3>504 Words</h3>
            <p>لغات ضروری انگلیسی</p>
        </div>
        
        <div class="series-item">
            <h3>Dictionaries</h3>
            <p>انواع فرهنگ لغات</p>
        </div>
        
        <div class="series-item">
            <h3>1100 Words</h3>
            <p>لغات پیشرفته</p>
        </div>
        
        <div class="series-item">
            <h3>Teen2Teen series</h3>
            <p>مخصوص نوجوانان</p>
        </div>
        
        <div class="series-item">
            <h3>English Grammar</h3>
            <p>کتاب‌های آموزش دستور زبان</p>
        </div>
    </div>
</section>

<!-- بخش ویژگی‌ها -->
<section class="features-section">
    <div class="section-title">
        <h2>چرا کتاب‌های انگلیسی ما؟</h2>
        <p>مزایای انتخاب کتاب‌های انگلیسی از فروشگاه علی اکبری</p>
    </div>
    
    <div class="features-grid">
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-globe"></i>
            </div>
            <h3 class="feature-title">تأمین کامل</h3>
            <p class="feature-description">مجموعه‌ای کامل از تمامی سطوح و رشته‌ها</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-headphones"></i>
            </div>
            <h3 class="feature-title">فایل صوتی</h3>
            <p class="feature-description">همراه با فایل‌های صوتی آموزشی</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-tag"></i>
            </div>
            <h3 class="feature-title">قیمت مناسب</h3>
            <p class="feature-description">پایین‌ترین نرخ با بالاترین کیفیت</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-school"></i>
            </div>
            <h3 class="feature-title">عمده و پرچون</h3>
            <p class="feature-description">تأمین نیاز مکاتب و مؤسسات آموزشی</p>
        </div>
    </div>
</section>

<!-- بخش گالری -->
<section class="gallery-section">
    <div class="section-title">
        <h2>گالری تصاویر</h2>
        <p>نمونه‌ای از کتاب‌های انگلیسی موجود</p>
    </div>
    
    <div class="gallery-grid">
        <div class="gallery-item">
            <img src="https://ali-akbari-af.github.io/pages/assets/art-tools/sketch-book.jpg" 
                 alt="کتاب انگلیسی" 
                 class="gallery-image">
            <div class="gallery-overlay">
                <p>کتاب آموزش انگلیسی</p>
            </div>
        </div>
        
        <div class="gallery-item">
            <img src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                 alt="کتاب لغت انگلیسی" 
                 class="gallery-image">
            <div class="gallery-overlay">
                <p>کتاب لغت انگلیسی</p>
            </div>
        </div>
        
        <div class="gallery-item">
            <img src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                 alt="کتاب گرامر انگلیسی" 
                 class="gallery-image">
            <div class="gallery-overlay">
                <p>کتاب گرامر انگلیسی</p>
            </div>
        </div>
        
        <div class="gallery-item">
            <img src="https://images.unsplash.com/photo-1554734867-bf3c00a49371?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                 alt="کتاب آموزش مکالمه" 
                 class="gallery-image">
            <div class="gallery-overlay">
                <p>کتاب آموزش مکالمه</p>
            </div>
        </div>
    </div>
</section>

<!-- بخش تماس -->
<section class="contact-section">
    <h2 class="contact-title">برای دریافت اطلاعات بیشتر</h2>
    <p class="contact-description">با ما تماس بگیرید یا به فروشگاه ما مراجعه کنید</p>
    
    <div class="contact-buttons">
        <a href="tel:{{ site.phone_primary }}" class="btn btn-primary">
            <i class="fas fa-phone"></i>
            تماس: {{ site.phone_primary }}
        </a>
        <a href="#footer" class="btn btn-secondary">
            <i class="fas fa-map-marker-alt"></i>
            آدرس فروشگاه
        </a>
    </div>
</section>
