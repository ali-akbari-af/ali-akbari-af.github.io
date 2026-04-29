---
layout: page
title: "بانک ویدیوهای آموزشی کارآفرینانه"
description: "آموزش‌های دیجیتال عملی کارآفرینی، تولیدگری و خوداتکایی برای جوانان - ایجاد فرصت‌های شغلی پایدار در عصر دیجیتال"
keywords: "آموزش دیجیتال, ویدیوهای آموزشی, کارآفرینی دیجیتال, آموزش آنلاین, مهارت‌آموزی دیجیتال, جوانان, کابل, علی اکبری"
breadcrumb:
  - title: "آموزش دیجیتال"
    link: "/education"
---

<style>
/* ===== CSS Variables ===== */
:root {
    /* Colors (digital education palette: teal + blue) */
    --primary: #0ea5a4;
    --primary-dark: #0b8f89;
    --primary-light: #2dd4bf;
    --secondary: #3b82f6;
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
    --price-color: #0ea5a4;
    
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
    --shadow-hover: 0 20px 50px rgba(14, 165, 164, 0.25);
    
    /* Transitions */
    --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);
}

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
    background: radial-gradient(circle, rgba(14, 165, 164, 0.1) 0%, transparent 70%);
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

.service-badge {
    display: inline-block;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    color: white;
    padding: 0.8rem 2rem;
    border-radius: 50px;
    font-size: 1.8rem;
    font-weight: 800;
    margin: 1rem 0 2rem;
    box-shadow: 0 10px 25px rgba(14, 165, 164, 0.3);
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
    border: 2px solid rgba(14, 165, 164, 0.1);
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
    background: rgba(14, 165, 164, 0.2);
    z-index: -1;
    border-radius: 2px;
}

/* بخش دسته‌بندی آموزش‌های دیجیتال کارآفرینی */
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
    text-align: center;
    transition: var(--transition-base);
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
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    transform: translateX(-100%);
    transition: transform 0.6s ease;
}

.category-card:hover::before {
    transform: translateX(0);
}

.category-card:hover {
    transform: translateY(-15px);
    box-shadow: var(--shadow-hover);
    border-color: var(--primary-light);
}

.category-icon {
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
    box-shadow: 0 10px 25px rgba(14, 165, 164, 0.3);
    transition: var(--transition-base);
}

.category-card:hover .category-icon {
    transform: scale(1.1) rotate(5deg);
}

.category-title {
    font-size: 1.6rem;
    color: var(--primary-dark);
    margin-bottom: 1.2rem;
    font-weight: 800;
}

.category-description {
    color: var(--gray);
    line-height: 1.7;
    font-size: 1.05rem;
}

/* بخش گالری ویدیوهای آموزشی دیجیتال */

/* بخش ویژگی‌های آموزش دیجیتال */
.features-section {
    background: linear-gradient(135deg, rgba(14, 165, 164, 0.05), rgba(59, 130, 246, 0.05));
    padding: 5rem;
    border-radius: var(--radius-lg);
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
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    text-align: center;
    transition: var(--transition-base);
    border: 2px solid transparent;
}

.feature-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-hover);
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
    box-shadow: 0 10px 20px rgba(14, 165, 164, 0.3);
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

/* بخش آموزش‌های دیجیتال مرتبط */
.related-courses {
    margin: 6rem 0;
    padding: 3rem;
    background: white;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    border: 2px solid rgba(14, 165, 164, 0.1);
}

.courses-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.course-card {
    background: var(--gray-lighter);
    padding: 2rem;
    border-radius: var(--radius-lg);
    transition: var(--transition-base);
    border-left: 4px solid var(--primary);
}

.course-card:hover {
    transform: translateY(-5px);
    background: white;
    box-shadow: var(--shadow-md);
}

.course-title {
    font-size: 1.3rem;
    color: var(--primary-dark);
    margin-bottom: 0.8rem;
    font-weight: 700;
}

.course-description {
    color: var(--gray);
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 1rem;
}

.course-link {
    color: var(--primary);
    text-decoration: none;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.95rem;
}

.course-link:hover {
    color: var(--primary-dark);
}

/* بخش مشارکت و حمایت */
.support-section {
    background: linear-gradient(135deg, rgba(14, 165, 164, 0.8), rgba(59, 130, 246, 0.8));
    color: white;
    padding: 5rem;
    border-radius: var(--radius-lg);
    margin: 6rem 0;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.support-section::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80');
    background-size: cover;
    background-position: center;
    opacity: 0.1;
    z-index: 0;
}

.support-content {
    position: relative;
    z-index: 1;
    max-width: 800px;
    margin: 0 auto;
}

.support-title {
    font-size: 2.5rem;
    margin-bottom: 1.8rem;
    font-weight: 800;
    position: relative;
    color: var(--myself);
}

.support-description {
    font-size: 1.3rem;
    opacity: 0.95;
    line-height: 1.9;
    margin-bottom: 3rem;
    color: var(--myself);
}

.support-cta {
    display: inline-block;
    padding: 1.2rem 3rem;
    background: white;
    color: var(--primary-dark);
    text-decoration: none;
    border-radius: 50px;
    font-weight: 700;
    font-size: 1.2rem;
    transition: var(--transition-base);
    border: 3px solid transparent;
}

.support-cta:hover {
    background: transparent;
    color: white;
    border-color: white;
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

/* بخش اطلاعات تماس */
.contact-info-section {
    background: white;
    padding: 5rem;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    margin: 6rem 0;
    position: relative;
    overflow: hidden;
    border: 2px solid rgba(14, 165, 164, 0.1);
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
    background: linear-gradient(135deg, rgba(14, 165, 164, 0.05), rgba(59, 130, 246, 0.05));
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
    font-size: 3.5rem;
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
    box-shadow: 0 10px 20px rgba(14, 165, 164, 0.3);
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
    background: linear-gradient(135deg, var(--primary-dark), var(--secondary));
    color: white;
    padding: 5rem 2rem;
    border-radius: var(--radius-lg);
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
    color: var(--myself);
}

.contact-description {
    font-size: 1.3rem;
    opacity: 0.95;
    max-width: 700px;
    margin: 0 auto 3rem;
    line-height: 1.9;
    position: relative;
    z-index: 1;
    color: var(--myself);
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
    transition: var(--transition-base);
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
    color: var(--primary-dark);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.btn-primary:hover {
    background: var(--light);
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
    
    .service-badge {
        font-size: 1.5rem;
        padding: 0.6rem 1.5rem;
    }
    
    .features-section,
    .contact-info-section,
    .support-section,
    .related-courses {
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
    
    .categories-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .category-card {
        padding: 2rem;
    }
    
    .gallery-grid {
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 1.5rem;
    }
    
    .features-grid,
    .contact-methods,
    .courses-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .feature-card,
    .course-card {
        padding: 2rem;
    }
    
    .contact-info-section,
    .support-section,
    .related-courses {
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
    
    .features-section,
    .contact-info-section,
    .contact-section,
    .support-section,
    .related-courses {
        padding: 2rem 1.5rem;
    }
    
    .features-section h2,
    .contact-title,
    .support-title {
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
    <h1 class="page-title">بانک ویدیوهای آموزشی کارآفرینانه</h1>
    <div class="service-badge">توانمندسازی دیجیتالی جوانان، ایجاد فرصت‌های شغلی</div>
    <div class="page-description">
        <p>
            در شرایط کنونی که سطح بیکاری در کشور رو به افزایش بوده و مهاجرت اقتصادی جوانان به یکی از جدی‌ترین چالش‌های اجتماعی و انسانی تبدیل گردیده است، ضرورت ایجاد راهکارهای پایدار بیش از هر زمان دیگر احساس می‌شود. پیامدهای این وضعیت، تنها محدود به اقتصاد نبوده، بلکه آسیب‌های عمیق اجتماعی، خانوادگی و از دست رفتن سرمایه انسانی را نیز در پی داشته است. در چنین وضعیتی، آموزش هدفمند، کاربردی و مبتنی بر تجربه می‌تواند نقش اساسی در تغییر این مسیر ایفا نماید.
        </p>
        <p>
            بانک ویدیوهای آموزشی کارآفرینانه به‌عنوان بخشی از آموزش دیجیتال ما، با هدف ترویج فرهنگ تولیدگری، کارآفرینی و خوداتکایی ایجاد شده است. تمرکز اصلی این بخش بر ارائه آموزش‌های عملی، قابل اجرا و مبتنی بر انتقال تجارب موفق از کشورهای توسعه‌یافته می‌باشد؛ تجاربی که نشان داده‌اند چگونه می‌توان با اتکا بر دانش، مهارت و نوآوری، مشاغل پایدار و دانش‌بنیان ایجاد کرد.
        </p>
        <p>
            هدف اساسی این بانک آموزشی، توانمندسازی جوانان، ارتقای مهارت‌های اقتصادی و فراهم‌سازی بستر ایجاد فرصت‌های شغلی است؛ به‌گونه‌ای که افراد بتوانند با امکانات محدود نیز وارد مسیر تولید، خدمات و کارآفرینی شوند. محتوای آموزشی با توجه به نیازهای واقعی بازار، شرایط بومی و ظرفیت‌های موجود طراحی و ارائه می‌گردد.
        </p>
        <p style="margin-top: 2rem; font-style: italic; color: var(--primary-dark);">
            باور بر این است که با هم‌اندیشی و همکاری، می‌توان گامی مؤثر در جهت ایجاد امید، مهارت و آینده‌ای پایدار برای جوانان برداشت.
        </p>
    </div>
</section>

<!-- بخش دسته‌بندی آموزش‌های دیجیتال کارآفرینی -->
<section class="categories-section">
    <div class="section-title">
        <h2>دسته‌بندی آموزش‌های دیجیتال کارآفرینی</h2>
        <p>محتوای آموزشی متنوع در حوزه دیجیتال برای تمام سطوح</p>
    </div>
    
    <div class="categories-grid">
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-laptop-code"></i>
            </div>
            <h3 class="category-title">کسب‌وکار اینترنتی</h3>
            <p class="category-description">آموزش راه‌اندازی فروشگاه اینترنتی، بازاریابی دیجیتال و مدیریت پروژه‌های آنلاین</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-mobile-alt"></i>
            </div>
            <h3 class="category-title">اپلیکیشن‌نویسی</h3>
            <p class="category-description">آموزش برنامه‌نویسی موبایل، طراحی اپلیکیشن و راه‌اندازی استارتاپ‌های فناوری</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-chart-line"></i>
            </div>
            <h3 class="category-title">تحلیل داده و هوش تجاری</h3>
            <p class="category-description">آموزش آنالیز داده‌ها، هوش مصنوعی در کسب‌وکار و تصمیم‌گیری مبتنی بر داده</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-palette"></i>
            </div>
            <h3 class="category-title">طراحی دیجیتال و خلاقیت</h3>
            <p class="category-description">آموزش طراحی گرافیک، تولید محتوای ویدیویی و برندسازی دیجیتال</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-network-wired"></i>
            </div>
            <h3 class="category-title">فریلنسینگ و دورکاری</h3>
            <p class="category-description">آموزش مهارت‌های فریلنسینگ، جستجوی پروژه و مدیریت کار از راه دور</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-shield-alt"></i>
            </div>
            <h3 class="category-title">امنیت سایبری کسب‌وکار</h3>
            <p class="category-description">آموزش محافظت از کسب‌وکار در فضای دیجیتال و امنیت اطلاعات</p>
        </div>
    </div>
</section>

<!-- بخش گالری ویدیوهای آموزشی دیجیتال -->


<!-- بخش ویژگی‌های آموزش دیجیتال -->
<section class="features-section">
    <div class="section-title">
        <h2>چرا آموزش دیجیتال کارآفرینی ما مؤثر است؟</h2>
        <p>ویژگی‌های منحصر به فرد آموزش‌های دیجیتال ما</p>
    </div>
    
    <div class="features-grid">
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-video"></i>
            </div>
            <h3 class="feature-title">آموزش ویدیویی تعاملی</h3>
            <p class="feature-description">ویدیوهای آموزشی با کیفیت بالا همراه با تمرین‌های عملی و پروژه‌های واقعی</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-globe"></i>
            </div>
            <h3 class="feature-title">دسترسی آنلاین همیشگی</h3>
            <p class="feature-description">تمامی محتوای آموزشی به صورت آنلاین و در هر زمان قابل دسترس است</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-comments"></i>
            </div>
            <h3 class="feature-title">پشتیبانی و مشاوره</h3>
            <p class="feature-description">پشتیبانی آنلاین و مشاوره تخصصی برای اجرای پروژه‌های کارآفرینی</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-tools"></i>
            </div>
            <h3 class="feature-title">ابزارهای عملی رایگان</h3>
            <p class="feature-description">دسترسی به ابزارها و منابع دیجیتال رایگان برای شروع کسب‌وکار</p>
        </div>
    </div>
</section>

<!-- بخش آموزش‌های دیجیتال مرتبط -->
<section class="related-courses">
    <div class="section-title">
        <h2>آموزش‌های دیجیتال مرتبط</h2>
        <p>نمونه های از دوره‌های آموزشی در حوزه دیجیتال</p>
    </div>
    
    <div class="courses-grid">
        <div class="course-card">
            <h4 class="course-title">آموزش کامپیوتر مقدماتی تا پیشرفته</h4>
            <p class="course-description">آموزش کامل مهارت‌های کامپیوتری از پایه تا سطح حرفه‌ای برای بازار کار</p>
            <a href="#contact-section">
                اطلاعات بیشتر
                <i class="fas fa-arrow-left"></i>
            </a>
        </div>
        
        <div class="course-card">
            <h4 class="course-title">آموزش زبان انگلیسی دیجیتال</h4>
            <p class="course-description">آموزش زبان انگلیسی با تمرکز بر نیازهای کسب‌وکار و فناوری</p>
            <a href="#contact-section">
                اطلاعات بیشتر
                <i class="fas fa-arrow-left"></i>
            </a>
        </div>
        
        <div class="course-card">
            <h4 class="course-title">آموزش‌های حرفه‌ای دیجیتال</h4>
            <p class="course-description">دوره‌های تخصصی در زمینه‌های مختلف فناوری اطلاعات و دیجیتال</p>
            <a href="#contact-section">
                اطلاعات بیشتر
                <i class="fas fa-arrow-left"></i>
            </a>
        </div>
    </div>
</section>

<!-- بخش مشارکت و حمایت -->
<section class="support-section">
    <div class="support-content">
        <h2 class="support-title">همکاری در توسعه آموزش دیجیتال</h2>
        <p class="support-description">
            توسعه، پایداری و افزایش موثریت این بانک آموزشی مستلزم همکاری، حمایت و مشارکت خیرین، متخصصان و نهادهای دغدغه‌مند می‌باشد. همچنان، از پیشنهادات سازنده و دیدگاه‌های تخصصی که بتواند به بهبود کیفیت، اثربخشی و گسترش این بخش کمک نماید، به‌صورت جدی استقبال می‌شود.
        </p>
        <a href="#contact" class="support-cta">
            <i class="fas fa-handshake"></i>
            پیشنهاد همکاری
        </a>
    </div>
</section>

<!-- بخش اطلاعات تماس -->
<section class="contact-info-section" id="contact">
    <div class="section-title">
        <h2>روش‌های دسترسی و مشارکت</h2>
        <p>برای دریافت آموزش‌ها یا همکاری در توسعه محتوای دیجیتال</p>
    </div>
    
    <div class="contact-methods">
        <div class="method-card">
            <div class="method-icon">🎬</div>
            <h3 class="method-title">دریافت ویدیوهای آموزشی</h3>
            <p class="method-description">ویدیوهای آموزشی از طریق پلتفرم‌های دیجیتال مختلف در دسترس هستند</p>
            <a href="{{ site.youtube_channel }}" class="method-btn">
                <i class="fab fa-youtube"></i>
                کانال آموزشی
            </a>
        </div>
        
        <div class="method-card">
            <div class="method-icon">💻</div>
            <h3 class="method-title">شرکت در دوره‌های آنلاین</h3>
            <p class="method-description">ثبت‌نام در دوره‌های آنلاین آموزش دیجیتال کارآفرینی</p>
            <a href="mailto:{{ site.email_digital }}" class="method-btn">
                <i class="fas fa-user-graduate"></i>
                ثبت‌نام دوره
            </a>
        </div>
        
        <div class="method-card">
            <div class="method-icon">🤝</div>
            <h3 class="method-title">همکاری تخصصی</h3>
            <p class="method-description">متخصصان دیجیتال می‌توانند در تولید یا بازبینی محتوا همکاری کنند</p>
            <a href="https://wa.me/{{ site.phone_whatsapp }}" class="method-btn whatsapp-btn" target="_blank">
                <i class="fab fa-whatsapp"></i>
                ارتباط در واتس‌اپ
            </a>
        </div>
    </div>
</section>

<!-- بخش تماس -->
<section class="contact-section" id="contact-section">
    <h2 class="contact-title">آموزش دیجیتال، راهی به سوی آینده‌ای پایدار</h2>
    <p class="contact-description">
        با آموزش دیجیتال هدفمند و کاربردی، جوانان را برای ایجاد کسب‌وکارهای پایدار در عصر دیجیتال توانمند کنیم
        <br>
        هر آموزش دیجیتال، یک فرصت شغلی، هر فرصت، یک آینده روشن
    </p>
    
    <div class="contact-buttons">
        <a href="tel:{{ site.phone_primary }}" class="btn btn-primary">
            <i class="fas fa-phone"></i>
            تماس تلفنی
        </a>
        
        <a href="https://wa.me/{{ site.phone_whatsapp }}" class="btn btn-secondary" target="_blank">
            <i class="fab fa-whatsapp"></i>
            ارتباط در واتس‌اپ
        </a>
        
        <a href="mailto:{{ site.email_digital }}" class="btn btn-secondary">
            <i class="fas fa-envelope"></i>
            ارسال ایمیل
        </a>
    </div>
    
    <p style="margin-top: 2rem; opacity: 0.9; font-size: 1.1rem;">
        📍 {{ site.address }} | 🕗 {{ site.work_hours }}
    </p>
</section>
