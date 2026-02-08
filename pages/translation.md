---
layout: page
title: "خدمات ترجمه تخصصی | فروشگاه علی اکبری - کابل"
description: "ترجمه اسناد، مقالات و متون تخصصی با دقت و وفاداری به معنای اصلی - فروشگاه علی اکبری کابل"
keywords: "ترجمه تخصصی, ترجمه اسناد, ترجمه مقالات, مترجم حرفه‌ای, کابل, علی اکبری"
breadcrumb:
  - title: "مطبعه"
    link: "/print"
    show_breadcrumb: false
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

/* بخش گالری تصاویر */
.gallery-section {
    margin: 6rem 0;
    padding: 3rem 0;
    background: linear-gradient(135deg, rgba(14, 165, 164, 0.03), rgba(99, 102, 241, 0.03));
    border-radius: var(--radius-lg);
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-top: 3rem;
    padding: 0 1rem;
}

.gallery-item {
    position: relative;
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-lg);
    transition: var(--transition-base);
    aspect-ratio: 4/3;
}

.gallery-item:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: var(--shadow-hover);
}

.gallery-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition-base);
}

.gallery-item:hover .gallery-img {
    transform: scale(1.1);
}

.gallery-overlay {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
    padding: 1.5rem;
    transform: translateY(100%);
    transition: var(--transition-base);
}

.gallery-item:hover .gallery-overlay {
    transform: translateY(0);
}

.gallery-title {
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.gallery-description {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
}

/* بخش ویژگی‌ها */
.features-section {
    background: linear-gradient(135deg, rgba(14, 165, 164, 0.05), rgba(99, 102, 241, 0.05));
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
    
    .categories-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .category-card {
        padding: 2rem;
    }
    
    .gallery-grid {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 1rem;
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
    
    .gallery-grid {
        grid-template-columns: 1fr;
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
    <h1 class="page-title">خدمات ترجمه تخصصی</h1>
    <div class="service-badge">دقت و وفاداری به متن اصلی</div>
    <div class="page-description">
        <p>
            <strong>ترجمه اسناد، مقالات و متون تخصصی</strong> با دقت و وفاداری به معنای اصلی انجام می‌شود. هر متن با رعایت نکات دستوری و ادبی دری، روان و قابل فهم برای مخاطب آماده می‌گردد. استفاده از واژه‌های مناسب و روش‌های تخصصی ترجمه، صحت و کیفیت کار را تضمین می‌کند. این خدمات برای نیازهای علمی، اداری و حرفه‌ای مناسب بوده و تجربه‌ای دقیق، مطمئن و انسانی در اختیار کاربران قرار می‌دهد.
        </p>
        <p style="margin-top: 2rem; font-style: italic; color: var(--primary-dark);">
            ما با تیمی از مترجمین مجرب و آشنا به اصطلاحات تخصصی، آماده ارائه خدمات ترجمه با بالاترین کیفیت هستیم.
        </p>
    </div>
</section>

<!-- بخش دسته‌بندی خدمات -->
<section class="categories-section">
    <div class="section-title">
        <h2>انواع خدمات ترجمه</h2>
        <p>پوشش کامل نیازهای ترجمه‌ای شما در تمام زمینه‌ها</p>
    </div>
    
    <div class="categories-grid">
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-file-contract"></i>
            </div>
            <h3 class="category-title">ترجمه اسناد اداری</h3>
            <p class="category-description">ترجمه مدارک رسمی، قراردادها، اسناد حقوقی و اداری با رعایت اصطلاحات تخصصی</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-graduation-cap"></i>
            </div>
            <h3 class="category-title">ترجمه مقالات علمی</h3>
            <p class="category-description">ترجمه تخصصی مقالات دانشگاهی، تحقیقات علمی و پایان‌نامه‌ها با دقت بالا</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-briefcase"></i>
            </div>
            <h3 class="category-title">ترجمه متون تجاری</h3>
            <p class="category-description">ترجمه گزارشات مالی، طرح‌های تجاری، کاتالوگ و محتوای بازاریابی</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-book-medical"></i>
            </div>
            <h3 class="category-title">ترجمه پزشکی</h3>
            <p class="category-description">ترجمه متون پزشکی، دارویی، مقالات تحقیقاتی سلامت با اصطلاحات دقیق</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-balance-scale"></i>
            </div>
            <h3 class="category-title">ترجمه حقوقی</h3>
            <p class="category-description">ترجمه قوانین، مقررات، پرونده‌های قضایی و اسناد حقوقی بین‌المللی</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-language"></i>
            </div>
            <h3 class="category-title">ترجمه فوری</h3>
            <p class="category-description">ترجمه سریع اسناد و متون با حفظ کیفیت در کوتاه‌ترین زمان ممکن</p>
        </div>
    </div>
</section>

<!-- بخش گالری تصاویر -->
<section class="gallery-section">
    <div class="section-title">
        <h2>نمونه کارهای ترجمه</h2>
        <p>برخی از پروژه‌های موفق ترجمه انجام شده</p>
    </div>
    
    <div class="gallery-grid">
        <a href="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" class="gallery-item" data-lightbox="gallery" data-title="ترجمه مقاله علمی">
            <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="ترجمه مقاله علمی" class="gallery-img">
            <div class="gallery-overlay">
                <h4 class="gallery-title">ترجمه مقاله علمی</h4>
                <p class="gallery-description">ترجمه مقاله ISI رشته پزشکی</p>
            </div>
        </a>
        
        <a href="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" class="gallery-item" data-lightbox="gallery" data-title="ترجمه سند حقوقی">
            <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="ترجمه سند حقوقی" class="gallery-img">
            <div class="gallery-overlay">
                <h4 class="gallery-title">ترجمه سند حقوقی</h4>
                <p class="gallery-description">ترجمه قرارداد بین‌المللی تجاری</p>
            </div>
        </a>
        
        <a href="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" class="gallery-item" data-lightbox="gallery" data-title="ترجمه گزارش مالی">
            <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="ترجمه گزارش مالی" class="gallery-img">
            <div class="gallery-overlay">
                <h4 class="gallery-title">ترجمه گزارش مالی</h4>
                <p class="gallery-description">ترجمه گزارش سالیانه شرکت‌های بین‌المللی</p>
            </div>
        </a>
        
        <a href="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" class="gallery-item" data-lightbox="gallery" data-title="ترجمه کتاب تخصصی">
            <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="ترجمه کتاب تخصصی" class="gallery-img">
            <div class="gallery-overlay">
                <h4 class="gallery-title">ترجمه کتاب تخصصی</h4>
                <p class="gallery-description">ترجمه کتاب دانشگاهی رشته مهندسی</p>
            </div>
        </a>
    </div>
</section>

<!-- بخش ویژگی‌ها -->
<section class="features-section">
    <div class="section-title">
        <h2>مزایای خدمات ترجمه ما</h2>
        <p>چرا ترجمه‌های ما بهترین کیفیت را دارند؟</p>
    </div>
    
    <div class="features-grid">
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <h3 class="feature-title">دقت و وفاداری</h3>
            <p class="feature-description">حفظ کامل معنای اصلی متن با رعایت اصطلاحات تخصصی</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-users"></i>
            </div>
            <h3 class="feature-title">مترجمین مجرب</h3>
            <p class="feature-description">تیمی از مترجمین حرفه‌ای با سابقه طولانی در ترجمه تخصصی</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-clock"></i>
            </div>
            <h3 class="feature-title">تحویل به موقع</h3>
            <p class="feature-description">تعهد به تحویل پروژه‌ها در زمان توافق شده بدون کاهش کیفیت</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-shield-alt"></i>
            </div>
            <h3 class="feature-title">محرمانگی اطلاعات</h3>
            <p class="feature-description">حفظ کامل محرمانگی اسناد و اطلاعات شما</p>
        </div>
    </div>
</section>

<!-- بخش اطلاعات تماس -->
<section class="contact-info-section">
    <div class="section-title">
        <h2>روش سفارش ترجمه</h2>
        <p>برای دریافت قیمت و سفارش ترجمه، یکی از روش‌های زیر را انتخاب کنید</p>
    </div>
    
    <div class="contact-methods">
        <div class="method-card">
            <div class="method-icon">📞</div>
            <h3 class="method-title">تماس تلفنی</h3>
            <p class="method-description">با ما تماس بگیرید، فایل خود را ارسال کنید و قیمت و زمان تحویل را دریافت نمایید.</p>
            <a href="tel:{{ site.phone_primary }}" class="method-btn">
                تماس: {{ site.phone_primary }}
            </a>
        </div>
        
        <div class="method-card">
            <div class="method-icon">🏪</div>
            <h3 class="method-title">مراجعه حضوری</h3>
            <p class="method-description">به فروشگاه ما مراجعه کنید، فایل خود را بیاورید و با مترجم مشورت کنید.</p>
            <a href="#footer" class="method-btn">
                آدرس فروشگاه
            </a>
        </div>
        
        <div class="method-card">
            <div class="method-icon">📱</div>
            <h3 class="method-title">دریافت از طریق واتس‌اپ</h3>
            <p class="method-description">فایل خود را در واتس‌اپ ارسال کنید، قیمت و زمان تحویل را دریافت کنید.</p>
            <a href="https://wa.me/93781821838" class="method-btn whatsapp-btn" target="_blank">
                <i class="fab fa-whatsapp"></i>
                ارتباط در واتس‌اپ
            </a>
        </div>
    </div>
</section>

<!-- بخش تماس -->
<section class="contact-section">
    <h2 class="contact-title">برای سفارش ترجمه تخصصی</h2>
    <p class="contact-description">
        با ما تماس بگیرید یا به فروشگاه ما مراجعه کنید
        <br>
        قیمت مناسب، کیفیت عالی و تحویل به موقع را تجربه کنید
    </p>
    
    <div class="contact-buttons">
        <a href="tel:{{ site.phone_primary }}" class="btn btn-primary">
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
        📍 {{ site.address }} | 🕗 {{ site.work_hours }}
    </p>
</section>
