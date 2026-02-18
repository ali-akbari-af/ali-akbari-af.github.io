---
layout: page
title: "چاپ رقعه ختم قرآن و فاتحه"
description: "چاپ رقعه‌های ختم قرآن و فاتحه با دقت و کیفیت بالا در فروشگاه علی اکبری کابل"
keywords: "چاپ رقعه ختم قرآن, رقعه فاتحه, چاپ مذهبی, خدمات مذهبی, کابل, علی اکبری"
breadcrumb:
  - title: "مطبعه"
    link: "/print"
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
    
    /* Typography */
    --font-family: 'Vazirmatn', -apple-system, BlinkMacSystemFont, sans-serif;
    --font-size-xs: 0.75rem;
    --font-size-sm: 0.875rem;
    --font-size-base: 1rem;
    --font-size-lg: 1.125rem;
    --font-size-xl: 1.25rem;
    --font-size-2xl: 1.5rem;
    --font-size-3xl: 1.875rem;
    --font-size-4xl: 2.25rem;
    --font-size-5xl: 3rem;
    
    /* Spacing */
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
    --spacing-2xl: 3rem;
    --spacing-3xl: 4rem;
    
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
    
    /* Container */
    --container-xs: 100%;
    --container-sm: 640px;
    --container-md: 768px;
    --container-lg: 1024px;
    --container-xl: 1280px;
    --container-2xl: 1536px;
}

/* ===== CSS Variables ===== */
:root {
    --primary: #10b981;
    --primary-dark: #059669;
    --primary-light: #34d399;
    --secondary: #0d9488;
    --accent: #047857;
    --dark: #1e293b;
    --light: #f8fafc;
    --gold: #d4af37;
    --gray: #64748b;
    --gray-light: #e2e8f0;
    --shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    --shadow-lg: 0 10px 40px rgba(16, 185, 129, 0.15);
    --shadow-hover: 0 20px 50px rgba(16, 185, 129, 0.25);
    --radius: 18px;
    --transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ===== Reset ===== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: system-ui, -apple-system, 'Segoe UI', 'Vazirmatn', sans-serif;
    line-height: 1.8;
    color: var(--dark);
    background: linear-gradient(135deg, #f8fafc 0%, #f0fdf4 100%);
    overflow-x: hidden;
}

/* ===== Breadcrumb ===== */
.breadcrumb {
    background: linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(13, 148, 136, 0.05));
    padding: 1.8rem 0;
    margin-top: 140px;
    border-bottom: 1px solid rgba(226, 232, 240, 0.8);
    position: relative;
    overflow: hidden;
}

.breadcrumb::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%);
}

.breadcrumb-content {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 1;
}

.breadcrumb ul {
    display: flex;
    list-style: none;
    gap: 12px;
    color: var(--gray);
    font-size: 1rem;
    align-items: center;
}

.breadcrumb a {
    color: var(--primary);
    text-decoration: none;
    transition: var(--transition);
    font-weight: 600;
    padding: 6px 12px;
    border-radius: 8px;
    display: inline-block;
}

.breadcrumb a:hover {
    color: var(--primary-dark);
    background: rgba(16, 185, 129, 0.1);
    transform: translateY(-2px);
}

.breadcrumb li:not(:last-child)::after {
    content: "›";
    margin-right: 12px;
    color: var(--primary);
    font-weight: bold;
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
    background: radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%);
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
    background: linear-gradient(135deg, var(--primary), var(--accent));
    color: white;
    padding: 0.8rem 2rem;
    border-radius: 50px;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 1rem 0 2rem;
    box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
    border: 3px solid white;
    position: relative;
    overflow: hidden;
}

.service-badge::before {
    content: '';
    font-family: 'Font Awesome 6 Free';
    font-weight: 900;
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(255, 255, 255, 0.2);
}

.service-badge::after {
    content: '';
    font-family: 'Font Awesome 6 Free';
    font-weight: 900;
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(255, 255, 255, 0.2);
}

.page-description {
    font-size: 1.3rem;
    color: var(--dark);
    line-height: 2;
    max-width: 1000px;
    margin: 3rem auto 0;
    padding: 3rem;
    background: white;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    border: 2px solid rgba(16, 185, 129, 0.1);
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
    background: rgba(16, 185, 129, 0.2);
    z-index: -1;
    border-radius: 2px;
}

/* بخش انواع رقعه‌ها */
.types-section {
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

.types-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2.5rem;
    margin-top: 3rem;
}

.type-card {
    background: white;
    padding: 3rem;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    text-align: center;
    transition: var(--transition);
    border: 2px solid transparent;
    position: relative;
    overflow: hidden;
}

.type-card::before {
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

.type-card:hover::before {
    transform: translateX(0);
}

.type-card:hover {
    transform: translateY(-15px);
    box-shadow: var(--shadow-hover);
    border-color: var(--primary-light);
}

.type-icon {
    width: 90px;
    height: 90px;
    background: linear-gradient(135deg, var(--primary), var(--accent));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 2rem;
    color: white;
    font-size: 2.2rem;
    box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
    transition: var(--transition);
}

.type-card:hover .type-icon {
    transform: scale(1.1) rotate(5deg);
}

.type-title {
    font-size: 1.8rem;
    color: var(--primary-dark);
    margin-bottom: 1.5rem;
    font-weight: 800;
}

.type-description {
    color: var(--gray);
    line-height: 1.7;
    font-size: 1.1rem;
    margin-bottom: 2rem;
}

.type-features {
    text-align: right;
    padding-right: 1rem;
}

.feature-item {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 0.8rem;
    color: var(--dark);
    font-size: 1rem;
}

.feature-item i {
    color: var(--primary);
    font-size: 0.9rem;
}

/* بخش ویژگی‌های چاپ */
.features-section {
    background: linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(13, 148, 136, 0.05));
    padding: 5rem;
    border-radius: var(--radius);
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
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    text-align: center;
    transition: var(--transition);
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
    box-shadow: 0 10px 20px rgba(16, 185, 129, 0.3);
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

/* بخش گالری نمونه کارها */

/* بخش اطلاعات تماس */
.contact-info-section {
    background: white;
    padding: 5rem;
    border-radius: var(--radius);
    box-shadow: var(--shadow-lg);
    margin: 6rem 0;
    position: relative;
    overflow: hidden;
    border: 2px solid rgba(16, 185, 129, 0.1);
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
    background: linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(13, 148, 136, 0.05));
    border-radius: var(--radius);
    transition: var(--transition);
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
    transition: var(--transition);
    border: 2px solid var(--primary);
}

.method-btn:hover {
    background: white;
    color: var(--primary);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(16, 185, 129, 0.3);
}

/* بخش تماس */
.contact-section {
    background: linear-gradient(135deg, var(--primary-dark), var(--secondary));
    color: white;
    padding: 5rem 2rem;
    border-radius: var(--radius);
    margin: 6rem 0;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.contact-section::before {
    content: '';
    font-family: 'Font Awesome 6 Free';
    font-weight: 900;
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 3rem;
    color: rgba(255, 255, 255, 0.1);
}

.contact-section::after {
    content: '';
    font-family: 'Font Awesome 6 Free';
    font-weight: 900;
    position: absolute;
    bottom: 20px;
    left: 20px;
    font-size: 3rem;
    color: rgba(255, 255, 255, 0.1);
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
    transition: var(--transition);
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

/* ===== Responsive ===== */
/* Tablet Portrait (768px - 991px) */
@media (max-width: 991px) {
    .page-title {
        font-size: 2.4rem;
    }
    
    .service-badge {
        font-size: 1.3rem;
        padding: 0.6rem 1.5rem;
    }
    
    .types-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .features-section,
    .contact-info-section {
        padding: 3rem;
    }
    
    .features-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .gallery-grid {
        grid-template-columns: repeat(2, 1fr);
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

/* Mobile Landscape (576px - 767px) */
@media (max-width: 767px) and (min-width: 576px) {
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
    
    .type-card {
        padding: 2rem;
    }
    
    .gallery-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: var(--spacing-sm);
    }
}

/* Mobile Portrait (≤575px) */
@media (max-width: 575px) {
    .page-title {
        font-size: 1.8rem;
    }
    
    .page-description {
        padding: 1.5rem;
        font-size: 1rem;
    }
    
    .service-badge {
        font-size: 1.1rem;
        padding: 0.5rem 1.2rem;
    }
    
    .type-card {
        padding: 1.5rem;
    }
    
    .type-title {
        font-size: 1.5rem;
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
    
    .gallery-grid {
        grid-template-columns: 1fr;
    }
    
    .contact-methods {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
}

/* Small Mobile (≤375px) */
@media (max-width: 375px) {
    .page-title {
        font-size: 1.6rem;
    }
    
    .service-badge {
        font-size: 1rem;
        padding: 0.4rem 1rem;
    }
    
    .types-grid {
        gap: var(--spacing-sm);
    }
    
    .type-card {
        padding: var(--spacing-sm);
    }
}

/* Touch Device Optimizations */
@media (hover: none) and (pointer: coarse) {
    .type-card:hover {
        transform: none;
    }
    
    .gallery-item:hover .gallery-overlay {
        transform: translateY(0);
    }
    
    .gallery-item:hover .gallery-image {
        transform: none;
    }
    
    /* Add active states for touch devices */
    .type-card:active {
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
    
    .type-card:hover,
    .gallery-item:hover .gallery-image,
    .gallery-item:hover .gallery-overlay {
        transform: none;
    }
}
</style>

<!-- بخش هیرو -->
<section class="page-hero">
    <h1 class="page-title">چاپ رقعه ختم قرآن و فاتحه</h1>
    <div class="service-badge">خدمات مذهبی با کیفیت عالی</div>
    <div class="page-description">
        <p>
            چاپ رقعه‌های ختم قرآن و فاتحه با دقت و کیفیت بالا انجام می‌شود. استفاده از کاغذ و رنگ با کیفیت، وضوح کامل خطوط و حروف را تضمین می‌کند.
            <br><br>
            هر رقعه با رعایت اصول زیبایی‌شناسی و سنت‌های ادبی چاپ می‌شود تا هم خوانایی و هم ارزش معنوی آن حفظ شود. این خدمات مناسب نیازهای مذهبی و فرهنگی بوده و تجربه‌ای آرامش‌بخش و دقیق در اختیار مشتریان گرامی قرار می‌دهد.
        </p>
    </div>
</section>

<!-- بخش انواع رقعه‌ها -->
<section class="types-section">
    <div class="section-title">
        <h2>انواع رقعه‌های چاپی</h2>
        <p>انواع مختلف رقعه‌های مذهبی با طراحی‌های زیبا و معنوی</p>
    </div>
    
    <div class="types-grid">
        <div class="type-card">
            <div class="type-icon">
                <i class="fas fa-quran"></i>
            </div>
            <h3 class="type-title">رقعه ختم قرآن</h3>
            <p class="type-description">
                رقعه‌های زیبا و با شکوه برای ختم قرآن کریم با طراحی‌های سنتی و مدرن
            </p>
            <div class="type-features">
                <div class="feature-item">
                    <i class="fas fa-check-circle"></i>
                    <span>طراحی‌های سنتی و مدرن</span>
                </div>
                <div class="feature-item">
                    <i class="fas fa-check-circle"></i>
                    <span>کاغذ با کیفیت و بادوام</span>
                </div>
                <div class="feature-item">
                    <i class="fas fa-check-circle"></i>
                    <span>چاپ با رنگ‌های پایدار</span>
                </div>
                <div class="feature-item">
                    <i class="fas fa-check-circle"></i>
                    <span>حفظ اصالت و معنویت</span>
                </div>
            </div>
        </div>
        
        <div class="type-card">
            <div class="type-icon">
                <i class="fas fa-pray"></i>
            </div>
            <h3 class="type-title">رقعه فاتحه</h3>
            <p class="type-description">
                رقعه‌های فاتحه با آیات قرآن و دعاهای مخصوص برای یادبود عزیزان
            </p>
            <div class="type-features">
                <div class="feature-item">
                    <i class="fas fa-check-circle"></i>
                    <span>آیات قرآن و دعاهای مخصوص</span>
                </div>
                <div class="feature-item">
                    <i class="fas fa-check-circle"></i>
                    <span>قابلیت درج نام متوفی</span>
                </div>
                <div class="feature-item">
                    <i class="fas fa-check-circle"></i>
                    <span>طراحی‌های محترمانه و معنوی</span>
                </div>
                <div class="feature-item">
                    <i class="fas fa-check-circle"></i>
                    <span>سایزهای مختلف و استاندارد</span>
                </div>
            </div>
        </div>
        
        <div class="type-card">
            <div class="type-icon">
                <i class="fas fa-star-and-crescent"></i>
            </div>
            <h3 class="type-title">رقعه‌های مناسبت‌های مذهبی</h3>
            <p class="type-description">
                رقعه‌های ویژه مناسبت‌های مذهبی مانند ماه رمضان، محرم و میلاد پیامبر
            </p>
            <div class="type-features">
                <div class="feature-item">
                    <i class="fas fa-check-circle"></i>
                    <span>مناسب مناسبت‌های مختلف</span>
                </div>
                <div class="feature-item">
                    <i class="fas fa-check-circle"></i>
                    <span>طراحی متناسب با هر مناسبت</span>
                </div>
                <div class="feature-item">
                    <i class="fas fa-check-circle"></i>
                    <span>استفاده از نمادهای اسلامی</span>
                </div>
                <div class="feature-item">
                    <i class="fas fa-check-circle"></i>
                    <span>قابلیت سفارشی‌سازی</span>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- بخش ویژگی‌های چاپ -->
<section class="features-section">
    <div class="section-title">
        <h2>ویژگی‌های چاپ رقعه‌های مذهبی</h2>
        <p>چرا چاپ رقعه‌های ما بهترین انتخاب است؟</p>
    </div>
    
    <div class="features-grid">
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-star"></i>
            </div>
            <h3 class="feature-title">کیفیت عالی چاپ</h3>
            <p class="feature-description">استفاده از بهترین دستگاه‌های چاپ و کاغذ مرغوب برای وضوح کامل</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-pen-nib"></i>
            </div>
            <h3 class="feature-title">طراحی هنرمندانه</h3>
            <p class="feature-description">طراحی توسط هنرمندان متخصص در حوزه خط و تذهیب اسلامی</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-heart"></i>
            </div>
            <h3 class="feature-title">حفظ اصالت معنوی</h3>
            <p class="feature-description">رعایت کامل اصول اسلامی و احترام به ارزش‌های مذهبی</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-palette"></i>
            </div>
            <h3 class="feature-title">رنگ‌های پایدار</h3>
            <p class="feature-description">استفاده از رنگ‌های با کیفیت که در طول زمان محو نمی‌شوند</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-shield-alt"></i>
            </div>
            <h3 class="feature-title">دقت در جزئیات</h3>
            <p class="feature-description">توجه به کوچکترین جزئیات در طراحی و چاپ هر رقعه</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-hands-helping"></i>
            </div>
            <h3 class="feature-title">مشاوره تخصصی</h3>
            <p class="feature-description">مشاوره در انتخاب بهترین طراحی و محتوا برای هر مناسبت</p>
        </div>
    </div>
</section>

<!-- بخش گالری نمونه کارها -->

<!-- بخش اطلاعات تماس -->
<section class="contact-info-section">
    <div class="section-title">
        <h2>روش سفارش رقعه‌های مذهبی</h2>
        <p>برای سفارش چاپ رقعه ختم قرآن و فاتحه، یکی از روش‌های زیر را انتخاب کنید</p>
    </div>
    
    <div class="contact-methods">
        <div class="method-card">
            <div class="method-icon">🏪</div>
            <h3 class="method-title">مراجعه حضوری</h3>
            <p class="method-description">به فروشگاه ما مراجعه کنید، نمونه‌ها را مشاهده کرده و سفارش خود را ثبت کنید.</p>
            <a href="#footer" class="method-btn">
                آدرس فروشگاه
            </a>
        </div>
        
        <div class="method-card">
            <div class="method-icon">📞</div>
            <h3 class="method-title">تماس تلفنی</h3>
            <p class="method-description">با ما تماس بگیرید، نیاز خود را توضیح دهید و راهنمایی لازم را دریافت کنید.</p>
            <a href="tel:+93781821838" class="method-btn">
                تماس: ۰۷۸۱۸۲۱۸۳۸
            </a>
        </div>
        
        <div class="method-card">
            <div class="method-icon">📱</div>
            <h3 class="method-title">دریافت مشاوره</h3>
            <p class="method-description">از طریق واتس‌اپ با ما در ارتباط باشید و مشاوره رایگان دریافت کنید.</p>
            <a href="https://wa.me/93781821838" class="method-btn" target="_blank">
                <i class="fab fa-whatsapp"></i>
                مشاوره در واتس‌اپ
            </a>
        </div>
    </div>
</section>

<!-- بخش تماس -->
<section class="contact-section">
    <h2 class="contact-title">خدمات مذهبی با کیفیت و احترام</h2>
    <p class="contact-description">
        برای چاپ رقعه‌های ختم قرآن و فاتحه با بهترین کیفیت و رعایت کامل اصول اسلامی
        <br>
        با ما در تماس باشید یا به فروشگاه مراجعه کنید
    </p>
    
    <div class="contact-buttons">
        <a href="tel:+93781821838" class="btn btn-primary">
            <i class="fas fa-phone"></i>
            تماس تلفنی
        </a>
        
        <a href="https://wa.me/93781821838?text=سلام، می‌خواهم برای چاپ رقعه ختم قرآن/فاتحه مشاوره بگیرم" 
           class="btn btn-secondary" target="_blank">
            <i class="fab fa-whatsapp"></i>
            مشاوره در واتس‌اپ
        </a>
        
        <a href="#footer" class="btn btn-secondary">
            <i class="fas fa-map-marker-alt"></i>
            مراجعه حضوری
        </a>
    </div>
    
    <p style="margin-top: 2rem; opacity: 0.9; font-size: 1.1rem; color: var(--myself);">
        ✨ کیفیت عالی | 🙏 احترام به ارزش‌های مذهبی | 🎨 طراحی هنرمندانه
    </p>
</section>
