---
layout: page
title: "کتاب‌های درسی مکتب | فروشگاه علی اکبری - کابل"
description: "کتاب‌های درسی مکتب از صنف اول تا دوازدهم - عمده و پرچون با بالاترین کیفیت و پایین‌ترین قیمت در کابل"
keywords: "کتاب درسی, کتاب مکتب, کتاب صنف اول تا دوازدهم, کتب درسی, کتاب‌فروشی, کابل, علی اکبری"
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
    
    /* Typography */
    --font-family: 'Vazirmatn', -apple-system, BlinkMacSystemFont, sans-serif;
    --font-size-xs: 0.75rem;
    --font-size-sm: 1rem;
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

/* ===== Reset & Base Styles ===== */
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 16px;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

body {
    font-family: var(--font-family);
    font-size: var(--font-size-base);
    line-height: 1.7;
    color: var(--dark);
    background-color: var(--light);
    overflow-x: hidden;
    min-height: 100vh;
    -webkit-tap-highlight-color: transparent;
}

img {
    max-width: 100%;
    height: auto;
    display: block;
}

/* ===== Typography ===== */
h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: var(--spacing-md);
    color: var(--dark);
}

h1 {
    font-size: clamp(var(--font-size-3xl), 5vw, var(--font-size-5xl));
    font-weight: 900;
    letter-spacing: -0.025em;
}

h2 {
    font-size: clamp(var(--font-size-2xl), 4vw, var(--font-size-4xl));
    font-weight: 800;
}

h3 {
    font-size: clamp(var(--font-size-xl), 3vw, var(--font-size-3xl));
    font-weight: 700;
}

h4 {
    font-size: clamp(var(--font-size-lg), 2.5vw, var(--font-size-2xl));
    font-weight: 600;
}

p {
    margin-bottom: var(--spacing-md);
    color: var(--gray);
    line-height: 1.8;
}

/* ===== Breadcrumb ===== */
.breadcrumb {
    background: linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(139, 92, 246, 0.05));
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
    max-width: var(--container-2xl);
    margin: 0 auto;
    padding: 0 var(--spacing-lg);
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
    transition: all var(--transition-base);
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
    max-width: var(--container-2xl);
    margin: 0 auto;
    padding: 4rem var(--spacing-lg);
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
    margin-bottom: 2rem;
    font-weight: 900;
    line-height: 1.2;
    position: relative;
    display: inline-block;
    background: linear-gradient(135deg, var(--primary-dark), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
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

.page-description {
    font-size: 1.3rem;
    color: var(--dark);
    line-height: 2;
    max-width: 1000px;
    margin: 3rem auto 0;
    padding: 3rem;
    background: white;
    border-radius: 16px;
    box-shadow: var(--shadow-xl);
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
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    text-align: center;
    transition: var(--transition);
    border: 1px solid transparent;
}

.feature-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
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
    border-radius: var(--radius);
    overflow: hidden;
    aspect-ratio: 4/3;
    background: var(--gray-light);
    border-radius: 0.3rem;
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
    background: linear-gradient(transparent, #0084ff);
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
    border-radius: var(--radius);
    margin: 4rem 0;
    text-align: center;
}

.contact-title {
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
    color: var(--myself)
}

.contact-description {
    font-size: 1.2rem;
    opacity: 0.9;
    max-width: 700px;
    margin: 0 auto 2rem;
    color: var(--myself)
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
    transition: var(--transition);
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

/* ===== Responsive Design ===== */
/* Large Desktop (≥1400px) */
@media (min-width: 1400px) {
    .breadcrumb-content, .page-content {
        max-width: var(--container-2xl);
    }
}

/* Tablet Portrait (768px - 991px) */
@media (max-width: 991px) {
    .breadcrumb {
        margin-top: 120px;
    }
    
    .page-title {
        font-size: 2.4rem;
    }
    
    .features-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    
    .gallery-grid {
        grid-template-columns: repeat(2, 1fr);
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
}

/* Mobile Landscape (576px - 767px) */
@media (max-width: 767px) and (min-width: 576px) {
    .breadcrumb-content, .page-content {
        padding: 0 var(--spacing-md);
    }
    
    .breadcrumb {
        margin-top: 110px;
    }
    
    .page-content {
        padding: 3rem var(--spacing-md);
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

/* Mobile Portrait (≤575px) */
@media (max-width: 575px) {
    .breadcrumb-content, .page-content {
        padding: 0 var(--spacing-sm);
    }
    
    .breadcrumb {
        margin-top: 90px;
        padding: 1.5rem 0;
    }
    
    .page-content {
        padding: 3rem var(--spacing-sm);
    }
    
    .page-title {
        font-size: 1.8rem;
    }
    
    .page-description {
        padding: 1.5rem;
        font-size: 1rem;
    }
    
    .pricing-section,
    .contact-section {
        padding: 3rem 1.5rem;
    }
    
    .pricing-title,
    .contact-title {
        font-size: 1.8rem;
    }
    
    .gallery-grid {
        grid-template-columns: 1fr;
    }
    
    .footer-content {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
}

/* Small Mobile (≤375px) */
@media (max-width: 375px) {
    .page-title {
        font-size: 1.6rem;
    }
    
    .page-description {
        padding: 1rem;
        font-size: 0.9rem;
    }
}

/* Extra Small Mobile (≤320px) */
@media (max-width: 320px) {
    .breadcrumb {
        margin-top: 85px;
    }
}

/* Touch Device Optimizations */
@media (hover: none) and (pointer: coarse) {
    .category-card:hover {
        transform: none;
    }
    
    .price-item:hover {
        transform: none;
    }
    
    .btn:hover {
        transform: none;
    }
    
    /* Add active states for touch devices */
    .category-card:active {
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
    
    .category-card:hover,
    .price-item:hover,
    .btn:hover {
        transform: none;
    }
}

/* Utilities */
.visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}

.text-center {
    text-align: center;
}

.mb-0 {
    margin-bottom: 0 !important;
}

.mt-0 {
    margin-top: 0 !important;
}

.w-100 {
    width: 100%;
}
</style>

<!-- بخش هیرو -->
<section class="page-hero">
    <h1 class="page-title">کتاب‌های درسی مکتب</h1>
    <div class="page-description">
        <p>
            کتاب‌های درسی مکتب از صنف اول تا صنف دوازدهم – عمده و پرچون
            <br><br>
            ما مجموعه‌ای کامل از کتاب‌های درسی مکتب از صنف اول تا دوازدهم را با بالا‌ترین کیفیت و پایین‌ترین نرخ ممکن ارائه می‌کنیم. فروش ما به صورت عمده و پرچون است و همچنین امکان چاپ و تأمین کتاب‌ها بر اساس سفارش شما وجود دارد.
            <br><br>
            <strong>رضایت و موفقیت شما هدف ماست!</strong>
        </p>
    </div>
</section>

<!-- بخش ویژگی‌ها -->
<section class="features-section">
    <div class="section-title">
        <h2>چرا کتاب‌های درسی ما؟</h2>
        <p>مزایای انتخاب کتاب‌های درسی از فروشگاه علی اکبری</p>
    </div>
    
    <div class="features-grid">
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-book"></i>
            </div>
            <h3 class="feature-title">کامل‌ترین مجموعه</h3>
            <p class="feature-description">کلیه کتاب‌های درسی از صنف اول تا دوازدهم</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-award"></i>
            </div>
            <h3 class="feature-title">کیفیت تضمینی</h3>
            <p class="feature-description">چاپ با کیفیت بالا و کاغذ مرغوب</p>
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
        <p>نمونه‌ای از کتاب‌های درسی موجود</p>
    </div>
    
    <div class="gallery-grid">
        <!-- جایگزین کنید: تصاویر کتاب‌های خود را اینجا قرار دهید -->
        <div class="gallery-item">
            <img src="https://ali-akbari-af.github.io/assets/images/school-books/grade-three.jpg" 
                 alt="کتاب درسی های صنف سوم" 
                 class="gallery-image">
            <div class="gallery-overlay">
                <p>کتاب های درسی صنف سوم</p>
            </div>
        </div>
        
        <div class="gallery-item">
            <img src="https://ali-akbari-af.github.io/assets/images/school-books/grade-seven.jpg" 
                 alt="کتاب های درسی صنف هفتم" 
                 class="gallery-image">
            <div class="gallery-overlay">
                <p>کتاب های درسی صنف هفتم</p>
            </div>
        </div>
        
        <div class="gallery-item">
            <img src="https://ali-akbari-af.github.io/assets/images/school-books/grade-eight.jpg" 
                 alt="کتاب های درسی صنف هشتم" 
                 class="gallery-image">
            <div class="gallery-overlay">
                <p>کتاب های درسی صنف هشتم</p>
            </div>
        </div>
        
        <div class="gallery-item">
            <img src="https://ali-akbari-af.github.io/assets/images/school-books/grade-nine.jpg" 
                 alt="کتاب های درسی صنف نهم" 
                 class="gallery-image">
            <div class="gallery-overlay">
                <p>کتاب های درسی صنف نهم</p>
            </div>
        </div>
    </div>
</section>

<!-- بخش تماس -->
<section class="contact-section">
    <h2 class="contact-title">برای دریافت اطلاعات بیشتر</h2>
    <p class="contact-description">با ما تماس بگیرید یا به فروشگاه ما مراجعه کنید</p>
    
    <div class="contact-buttons">
        <a href="tel:+93781821838" class="btn btn-primary">
            <i class="fas fa-phone"></i>
            تماس: ۰۷۸۱۸۲۱۸۳۸
        </a>
        <a href="#footer" class="btn btn-secondary">
            <i class="fas fa-map-marker-alt"></i>
            آدرس فروشگاه
        </a>
    </div>
</section>
