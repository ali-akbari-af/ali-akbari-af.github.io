---
layout: page
title: "بازسازی عکس‌های کهنه"
description: "بازسازی عکس‌های کهنه و فرسوده با دقت و حساسیت کامل - احیای خاطرات ارزشمند - فروشگاه علی اکبری کابل"
keywords: "بازسازی عکس, ترمیم عکس کهنه, احیای عکس قدیمی, روتوش حرفه‌ای, کابل, علی اکبری"
breadcrumb:
  - title: "عکاسی"
    link: "/photography"
---

<style>
/* ===== CSS Variables ===== */
:root {
    /* Colors (teal + indigo + warm accent) */
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
    --price-color: #0ea5a4;
    
    /* Shadows */
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    --shadow-hover: 0 20px 50px rgba(14, 165, 164, 0.25);
    
    /* Transitions */
    --transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1);
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

/* بخش دسته‌بندی خدمات */
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

/* بخش گالری تصاویر (قبل و بعد) */
.before-after-section {
    margin: 6rem 0;
    padding: 3rem 0;
    background: linear-gradient(135deg, rgba(14, 165, 164, 0.03), rgba(99, 102, 241, 0.03));
    border-radius: var(--radius-lg);
}

.before-after-container {
    max-width: 1200px;
    margin: 3rem auto 0;
    padding: 0 1rem;
}

.before-after-item {
    background: white;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    overflow: hidden;
    margin-bottom: 3rem;
    transition: var(--transition-base);
}

.before-after-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.before-after-header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 2rem;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    color: white;
}

.after-before-title {
    font-size: 1.4rem;
    font-weight: 700;
}

.before-after-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
}

.before-image, .after-image {
    padding: 2rem;
    text-align: center;
}

.before-image img, .after-image img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: var(--radius-md);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    transition: var(--transition-base);
}

.before-image img:hover, .after-image img:hover {
    transform: scale(1.02);
}

/* بخش مراحل بازسازی */
.steps-section {
    background: linear-gradient(135deg, rgba(14, 165, 164, 0.05), rgba(99, 102, 241, 0.05));
    padding: 5rem;
    border-radius: var(--radius-lg);
    margin: 6rem 0;
    position: relative;
    overflow: hidden;
}

.steps-timeline {
    max-width: 900px;
    margin: 3rem auto 0;
    position: relative;
}

.steps-timeline::before {
    content: '';
    position: absolute;
    top: 0;
    right: 50%;
    transform: translateX(50%);
    width: 4px;
    height: 100%;
    background: linear-gradient(to bottom, var(--primary), var(--secondary));
    border-radius: 2px;
}

.step-item {
    display: flex;
    align-items: center;
    margin-bottom: 3rem;
    position: relative;
}

.step-item:nth-child(odd) {
    flex-direction: row-reverse;
}

.step-content {
    flex: 1;
    padding: 2.5rem;
    background: white;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    position: relative;
    border: 2px solid transparent;
    transition: var(--transition-base);
}

.step-item:nth-child(odd) .step-content {
    margin-left: 4rem;
}

.step-item:nth-child(even) .step-content {
    margin-right: 4rem;
}

.step-content:hover {
    transform: translateY(-5px);
    border-color: var(--primary);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.step-number {
    position: absolute;
    top: -20px;
    right: 50%;
    transform: translateX(50%);
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 700;
    font-size: 1.2rem;
    z-index: 2;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.step-icon {
    font-size: 2.5rem;
    color: var(--primary);
    margin-bottom: 1rem;
    text-align: center;
}

.step-title {
    font-size: 1.4rem;
    color: var(--primary-dark);
    margin-bottom: 1rem;
    font-weight: 700;
    text-align: center;
}

.step-description {
    color: var(--gray);
    line-height: 1.6;
    text-align: center;
}

/* بخش ویژگی‌ها */
.features-section {
    background: white;
    padding: 5rem;
    border-radius: var(--radius-lg);
    margin: 6rem 0;
    position: relative;
    overflow: hidden;
    border: 2px solid rgba(14, 165, 164, 0.1);
    box-shadow: var(--shadow-lg);
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2.5rem;
    margin-top: 3rem;
}

.feature-card {
    background: linear-gradient(135deg, rgba(14, 165, 164, 0.05), rgba(99, 102, 241, 0.05));
    padding: 2.5rem;
    border-radius: var(--radius-lg);
    text-align: center;
    transition: var(--transition-base);
    border: 2px solid transparent;
    height: 100%;
}

.feature-card:hover {
    transform: translateY(-10px);
    border-color: var(--primary);
    box-shadow: var(--shadow-hover);
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
    background: linear-gradient(135deg, rgba(14, 165, 164, 0.05), rgba(99, 102, 241, 0.05));
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

/* Responsive Adjustments */
@media (max-width: 1200px) {
    .page-content {
        max-width: 100%;
    }
    
    .page-title {
        font-size: 2.8rem;
    }
    
    .before-after-content {
        grid-template-columns: 1fr;
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
    .steps-section {
        padding: 3rem;
    }
    
    .steps-timeline::before {
        right: 40px;
    }
    
    .step-item {
        flex-direction: column !important;
    }
    
    .step-item:nth-child(odd) .step-content,
    .step-item:nth-child(even) .step-content {
        margin: 0 0 0 4rem;
        width: calc(100% - 4rem);
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
    
    .before-after-content {
        grid-template-columns: 1fr;
    }
    
    .before-after-header {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
    }
    
    .features-grid,
    .contact-methods {
        grid-template-columns: 1fr;
        gap: 2rem;
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
    
    .features-section,
    .contact-info-section,
    .contact-section,
    .steps-section {
        padding: 2rem 1.5rem;
    }
    
    .features-section h2,
    .contact-title {
        font-size: 1.8rem;
    }
    
    .step-item:nth-child(odd) .step-content,
    .step-item:nth-child(even) .step-content {
        margin: 0;
        width: 100%;
    }
    
    .steps-timeline::before {
        display: none;
    }
    
    .step-number {
        position: relative;
        top: 0;
        right: 0;
        transform: none;
        margin: 0 auto 1rem;
    }
}
</style>

<!-- بخش هیرو -->
<section class="page-hero">
    <h1 class="page-title">بازسازی عکس‌های کهنه و فرسوده</h1>
    <div class="service-badge">احیای خاطرات ارزشمند</div>
    <div class="page-description">
        <p>
            <strong>بازسازی عکس‌های کهنه و فرسوده با دقت و حساسیت کامل انجام می‌شود.</strong> هر تصویر با استفاده از روش‌ها و ابزارهای تخصصی ترمیم شده و رنگ، وضوح و جزئیات آن بازگردانده می‌شود.
        </p>
        <p>
            هدف حفظ اصالت و ارزش خاطرات است تا عکس‌ها دوباره شفاف، زنده و قابل استفاده برای آلبوم‌ها، مدارک یا نمایش‌های شخصی شوند. این خدمات تجربه‌ای مطمئن و حرفه‌ای در اختیار مشتریان قرار می‌دهد و اطمینان می‌دهد که هر عکس بازسازی‌شده، هم از نظر کیفیت و هم از نظر زیبایی‌شناسی استاندارد باشد.
        </p>
        <p style="margin-top: 2rem; font-style: italic; color: var(--primary-dark);">
            ما با تیمی از متخصصان گرافیک و عکاسی، آماده احیای خاطرات ارزشمند شما هستیم. هر عکس قدیمی برای ما یک گنجینه است.
        </p>
    </div>
</section>

<!-- بخش دسته‌بندی خدمات -->
<section class="categories-section">
    <div class="section-title">
        <h2>انواع خدمات بازسازی عکس</h2>
        <p>احیای کامل عکس‌های قدیمی با جدیدترین تکنیک‌ها</p>
    </div>
    
    <div class="categories-grid">
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-history"></i>
            </div>
            <h3 class="category-title">ترمیم عکس‌های سیاه و سفید</h3>
            <p class="category-description">بازسازی عکس‌های قدیمی سیاه و سفید، اصلاح رنگ‌پریدگی و بهبود کیفیت</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-palette"></i>
            </div>
            <h3 class="category-title">رنگ‌آمیزی عکس‌های قدیمی</h3>
            <p class="category-description">رنگ‌آمیزی طبیعی و حرفه‌ای عکس‌های سیاه و سفید قدیمی</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-tools"></i>
            </div>
            <h3 class="category-title">تعمیر عکس‌های آسیب‌دیده</h3>
            <p class="category-description">ترمیم عکس‌های پاره شده، چروکیده یا آسیب دیده</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-brush"></i>
            </div>
            <h3 class="category-title">حذف لکه و گرد و غبار</h3>
            <p class="category-description">پاک‌سازی لکه‌های قدیمی، گرد و غبار و خراش‌های سطحی</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-eye"></i>
            </div>
            <h3 class="category-title">بهبود وضوح و جزئیات</h3>
            <p class="category-description">افزایش وضوح، بهبود جزئیات و کیفیت تصویر</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-expand-alt"></i>
            </div>
            <h3 class="category-title">بزرگنمایی دیجیتال</h3>
            <p class="category-description">بزرگ‌نمایی عکس‌های قدیمی بدون کاهش کیفیت</p>
        </div>
    </div>
</section>

<!-- بخش عکس‌های قبل و بعد -->
<section class="before-after-section">
    <div class="section-title">
        <h2>نمونه کارهای بازسازی</h2>
        <p>مقایسه عکس‌های قبل و بعد از بازسازی</p>
    </div>
    
    <div class="before-after-container">
        <div class="before-after-item">
            <div class="before-after-header">
                <div class="after-before-title">عکس های بازسازی شده</div>
             </div>
            <div class="before-after-content">
                <div class="before-image">
                    <a href="https://ali-akbari-af.github.io/assets/images/photo-restore/photo1.jpg" data-lightbox="before-after" data-title="عکس قدیمی بازسازی شده">
                        <img src="https://ali-akbari-af.github.io/assets/images/photo-restore/photo1.jpg" alt="عکس های قدیمی بازسازی شده">
                    </a>
                </div>
                <div class="before-image">
                    <a href="https://ali-akbari-af.github.io/assets/images/photo-restore/photo2.jpg" data-lightbox="before-after" data-title="عکس قدیمی بازسازی شده">
                        <img src="https://ali-akbari-af.github.io/assets/images/photo-restore/photo2.jpg" alt="عکس های قدیمی بازسازی شده">
                    </a>
                </div>
        </div>
        
        </div>
    </div>
</section>

<!-- بخش مراحل بازسازی -->
<section class="steps-section">
    <div class="section-title">
        <h2>مراحل بازسازی عکس</h2>
        <p>فرآیند دقیق و حرفه‌ای احیای عکس‌های قدیمی</p>
    </div>
    
    <div class="steps-timeline">
        <div class="step-item">
            <div class="step-content">
                <div class="step-number">۱</div>
                <div class="step-icon">
                    <i class="fas fa-camera"></i>
                </div>
                <h3 class="step-title">اسکن با کیفیت بالا</h3>
                <p class="step-description">عکس قدیمی با دستگاه اسکنر حرفه‌ای با کیفیت بالا اسکن می‌شود</p>
            </div>
        </div>
        
        <div class="step-item">
            <div class="step-content">
                <div class="step-number">۲</div>
                <div class="step-icon">
                    <i class="fas fa-broom"></i>
                </div>
                <h3 class="step-title">پاک‌سازی اولیه</h3>
                <p class="step-description">حذف گرد و غبار، لکه‌های سطحی و خراش‌های کوچک</p>
            </div>
        </div>
        
        <div class="step-item">
            <div class="step-content">
                <div class="step-number">۳</div>
                <div class="step-icon">
                    <i class="fas fa-tools"></i>
                </div>
                <h3 class="step-title">ترمیم آسیب‌ها</h3>
                <p class="step-description">ترمیم عکس‌های پاره شده، چروکیده یا آسیب‌های جدی</p>
            </div>
        </div>
        
        <div class="step-item">
            <div class="step-content">
                <div class="step-number">۴</div>
                <div class="step-icon">
                    <i class="fas fa-palette"></i>
                </div>
                <h3 class="step-title">تنظیم رنگ و نور</h3>
                <p class="step-description">اصلاح رنگ‌پریدگی، تنظیم کنتراست و بهبود نورپردازی</p>
            </div>
        </div>
        
        <div class="step-item">
            <div class="step-content">
                <div class="step-number">۵</div>
                <div class="step-icon">
                    <i class="fas fa-eye"></i>
                </div>
                <h3 class="step-title">بهبود جزئیات</h3>
                <p class="step-description">افزایش وضوح، بهبود جزئیات و کیفیت تصویر</p>
            </div>
        </div>
        
        <div class="step-item">
            <div class="step-content">
                <div class="step-number">۶</div>
                <div class="step-icon">
                    <i class="fas fa-check-circle"></i>
                </div>
                <h3 class="step-title">تحویل نهایی</h3>
                <p class="step-description">تحویل نسخه دیجیتال و چاپی عکس بازسازی شده</p>
            </div>
        </div>
    </div>
</section>

<!-- بخش ویژگی‌ها -->
<section class="features-section">
    <div class="section-title">
        <h2>مزایای بازسازی حرفه‌ای</h2>
        <p>چرا بازسازی عکس را به ما بسپارید؟</p>
    </div>
    
    <div class="features-grid">
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-heart"></i>
            </div>
            <h3 class="feature-title">حفظ خاطرات ارزشمند</h3>
            <p class="feature-description">احیای عکس‌های قدیمی که برای شما ارزش عاطفی و تاریخی دارند</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-medal"></i>
            </div>
            <h3 class="feature-title">کیفیت عالی</h3>
            <p class="feature-description">استفاده از تکنیک‌های حرفه‌ای و نرم‌افزارهای تخصصی بازسازی</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-user-tie"></i>
            </div>
            <h3 class="feature-title">متخصصان مجرب</h3>
            <p class="feature-description">تیم متخصص با سال‌ها تجربه در زمینه بازسازی عکس‌های قدیمی</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-shield-alt"></i>
            </div>
            <h3 class="feature-title">ضمانت کیفیت</h3>
            <p class="feature-description">ضمانت کیفیت کار و رضایت کامل شما از نتیجه نهایی</p>
        </div>
    </div>
</section>

<!-- بخش اطلاعات تماس -->
<section class="contact-info-section">
    <div class="section-title">
        <h2>روش سفارش بازسازی عکس</h2>
        <p>برای بازسازی عکس‌های قدیمی، یکی از روش‌های زیر را انتخاب کنید</p>
    </div>
    
    <div class="contact-methods">
        <div class="method-card">
            <div class="method-icon">📸</div>
            <h3 class="method-title">مراجعه حضوری</h3>
            <p class="method-description">عکس قدیمی خود را به فروشگاه بیاورید، مشاوره رایگان بگیرید و سفارش دهید.</p>
            <a href="#footer" class="method-btn">
                آدرس فروشگاه
            </a>
        </div>
        
        <div class="method-card">
            <div class="method-icon">📱</div>
            <h3 class="method-title">ارسال دیجیتال</h3>
            <p class="method-description">عکس را با موبایل اسکن کرده و در واتس‌اپ ارسال کنید، قیمت را دریافت کنید.</p>
            <a href="https://wa.me/93781821838" class="method-btn whatsapp-btn" target="_blank">
                <i class="fab fa-whatsapp"></i>
                ارسال در واتس‌اپ
            </a>
        </div>
        
        <div class="method-card">
            <div class="method-icon">📞</div>
            <h3 class="method-title">تماس تلفنی</h3>
            <p class="method-description">با ما تماس بگیرید، درباره شرایط و قیمت سوال کنید و سفارش دهید.</p>
            <a href="tel:+93781821838" class="method-btn">
                تماس: ۰۷۸۱۸۲۱۸۳۸
            </a>
        </div>
    </div>
</section>

<!-- بخش تماس -->
<section class="contact-section">
    <h2 class="contact-title">برای احیای خاطرات ارزشمند</h2>
    <p class="contact-description">
        همین حالا با ما تماس بگیرید یا به فروشگاه ما مراجعه کنید
        <br>
        تجربه‌ای مطمئن و حرفه‌ای در بازسازی عکس‌های قدیمی
    </p>
    
    <div class="contact-buttons">
        <a href="tel:+93781821838" class="btn btn-primary">
            <i class="fas fa-phone"></i>
            تماس تلفنی
        </a>
        
        <a href="https://wa.me/93781821838" class="btn btn-secondary" target="_blank">
            <i class="fab fa-whatsapp"></i>
            ارتباط در واتس‌اپ
        </a>
        
        <a href="#footer" class="btn btn-secondary">
            <i class="fas fa-map-marker-alt"></i>
            آدرس فروشگاه
        </a>
    </div>
    
    <p style="margin-top: 2rem; opacity: 0.9; font-size: 1.1rem;">
        📍 کابل، ناحیه ۶، شهرک ۱۲ امام | 🕗 ۸ صبح تا ۸ شب
    </p>
</section>
