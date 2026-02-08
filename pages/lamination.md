---
layout: page
title: "پوش و لمینت اسناد | فروشگاه علی اکبری - کابل"
description: "پوش یا لمینت اسناد با کیفیت عالی - افزایش دوام و محافظت اسناد مهم - فروشگاه علی اکبری کابل"
keywords: "لمینت اسناد, پوش اسناد, حفاظت مدارک, لمینت حرفه‌ای, کابل, علی اکبری"
breadcrumb:
  - title: "مطبعه"
    link: "/print/index.html"
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
    color: #0b8f89;
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
    background: linear-gradient(90deg, #0ea5a4, #6366f1);
    border-radius: 3px;
}

.service-badge {
    display: inline-block;
    background: linear-gradient(135deg, #0ea5a4, #6366f1);
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
    color: #0f1724;
    line-height: 2;
    max-width: 1000px;
    margin: 3rem auto 0;
    padding: 3rem;
    background: white;
    border-radius: 0.75rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
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
    background: linear-gradient(90deg, #0ea5a4, #6366f1);
}

.page-description strong {
    color: #0ea5a4;
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
    color: #0b8f89;
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
    background: linear-gradient(90deg, #0ea5a4, #f59e0b);
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
    background: linear-gradient(90deg, #0ea5a4, #6366f1);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
}

.category-card:hover::before {
    transform: translateX(0);
}

.category-card:hover {
    transform: translateY(-15px);
    box-shadow: 0 20px 50px rgba(14, 165, 164, 0.25);
    border-color: #2dd4bf;
}

.category-icon {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, #0ea5a4, #f59e0b);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.8rem;
    color: white;
    font-size: 2rem;
    box-shadow: 0 10px 25px rgba(14, 165, 164, 0.3);
    transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.category-card:hover .category-icon {
    transform: scale(1.1) rotate(5deg);
}

.category-title {
    font-size: 1.6rem;
    color: #0b8f89;
    margin-bottom: 1.2rem;
    font-weight: 800;
}

.category-description {
    color: #6b7280;
    line-height: 1.7;
    font-size: 1.05rem;
}

/* بخش گالری تصاویر */
.gallery-section {
    margin: 6rem 0;
    padding: 3rem 0;
    background: linear-gradient(135deg, rgba(14, 165, 164, 0.03), rgba(99, 102, 241, 0.03));
    border-radius: 0.75rem;
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
    border-radius: 0.75rem;
    overflow: hidden;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
    aspect-ratio: 4/3;
}

.gallery-item:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 50px rgba(14, 165, 164, 0.25);
}

.gallery-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
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
    transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
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
    box-shadow: 0 20px 50px rgba(14, 165, 164, 0.25);
    border-color: #2dd4bf;
}

.feature-icon {
    width: 70px;
    height: 70px;
    background: linear-gradient(135deg, #0ea5a4, #f59e0b);
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
    color: #0b8f89;
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
    border-radius: 0.75rem;
    transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
    border: 2px solid transparent;
}

.method-card:hover {
    transform: translateY(-10px);
    border-color: #0ea5a4;
    box-shadow: 0 20px 50px rgba(14, 165, 164, 0.25);
}

.method-icon {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    color: #0ea5a4;
}

.method-title {
    font-size: 1.5rem;
    color: #0b8f89;
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
    background: #0ea5a4;
    color: white;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 600;
    transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
    border: 2px solid #0ea5a4;
}

.method-btn:hover {
    background: white;
    color: #0ea5a4;
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
    background: linear-gradient(135deg, #0b8f89, #6366f1);
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
    color: #0b8f89;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.btn-primary:hover {
    background: #f8fafc;
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
    <h1 class="page-title">پوش و لمینت حرفه‌ای اسناد</h1>
    <div class="service-badge">محافظت کامل مدارک</div>
    <div class="page-description">
        <p>
            <strong>پوش یا لمینت اسناد با کیفیت عالی انجام می‌شود</strong> تا دوام و محافظت کامل اسناد تضمین گردد. هر سند با استفاده از مواد باکیفیت و ابزار تخصصی لمینت شده و مقاومت آن در برابر رطوبت، لکه و فرسایش افزایش می‌یابد.
        </p>
        <p>
            این خدمات مناسب اسناد اداری، شناسایی و مدارک مهم بوده و تجربه‌ای مطمئن، دقیق و حرفه‌ای در حفظ ارزش و طول عمر اسناد در اختیار کاربران قرار می‌دهد.
        </p>
        <p style="margin-top: 2rem; font-style: italic; color: #0b8f89;">
            ما با استفاده از دستگاه‌های مدرن لمینت و مواد درجه یک، تضمین می‌کنیم که اسناد شما برای سال‌ها محفوظ و محافظت شده باقی بمانند.
        </p>
    </div>
</section>

<!-- بخش دسته‌بندی خدمات -->
<section class="categories-section">
    <div class="section-title">
        <h2>انواع خدمات لمینت</h2>
        <p>پوشش کامل نیازهای لمینت برای تمامی اسناد و مدارک</p>
    </div>
    
    <div class="categories-grid">
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-id-card"></i>
            </div>
            <h3 class="category-title">لمینت مدارک شناسایی</h3>
            <p class="category-description">کارت ملی، تذکره، گواهینامه، پاسپورت و سایر مدارک شناسایی</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-file-contract"></i>
            </div>
            <h3 class="category-title">لمینت اسناد اداری</h3>
            <p class="category-description">قراردادها، گواهی‌ها، مدارک رسمی و اسناد مهم اداری</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-award"></i>
            </div>
            <h3 class="category-title">لمینت مدارک تحصیلی</h3>
            <p class="category-description">دیپلم، لیسانس، فوق لیسانس، دکترا و مدارک افتخاری</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-images"></i>
            </div>
            <h3 class="category-title">لمینت عکس و تصاویر</h3>
            <p class="category-description">عکس‌های شخصی، عکس‌های تاریخی، نقاشی و آثار هنری</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-utensils"></i>
            </div>
            <h3 class="category-title">لمینت منو و کاتالوگ</h3>
            <p class="category-description">منو رستوران، کاتالوگ محصولات، بروشور و لیست قیمت</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-certificate"></i>
            </div>
            <h3 class="category-title">سایر خدمات لمینت</h3>
            <p class="category-description">کارت ویزیت، پوستر، نقشه و سایر مدارک تخصصی</p>
        </div>
    </div>
</section>

<!-- بخش گالری تصاویر -->
<section class="gallery-section">
    <div class="section-title">
        <h2>نمونه کارهای لمینت</h2>
        <p>برخی از پروژه‌های موفق لمینت انجام شده</p>
    </div>
    
    <div class="gallery-grid">
        <a href="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
           class="gallery-item" 
           data-lightbox="gallery"
           data-title="لمینت مدارک اداری">
            <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                 alt="لمینت مدارک اداری" 
                 class="gallery-img">
            <div class="gallery-overlay">
                <h4 class="gallery-title">لمینت مدارک اداری</h4>
                <p class="gallery-description">لمینت قراردادها و اسناد رسمی</p>
            </div>
        </a>
        
        <a href="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
           class="gallery-item" 
           data-lightbox="gallery"
           data-title="لمینت مدارک شناسایی">
            <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                 alt="لمینت مدارک شناسایی" 
                 class="gallery-img">
            <div class="gallery-overlay">
                <h4 class="gallery-title">لمینت مدارک شناسایی</h4>
                <p class="gallery-description">کارت ملی، تذکره و گواهینامه</p>
            </div>
        </a>
        
        <a href="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
           class="gallery-item" 
           data-lightbox="gallery"
           data-title="لمینت مدارک تحصیلی">
            <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                 alt="لمینت مدارک تحصیلی" 
                 class="gallery-img">
            <div class="gallery-overlay">
                <h4 class="gallery-title">لمینت مدارک تحصیلی</h4>
                <p class="gallery-description">دیپلم، لیسانس و مدارک دانشگاهی</p>
            </div>
        </a>
        
        <a href="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
           class="gallery-item" 
           data-lightbox="gallery"
           data-title="لمینت عکس و تصاویر">
            <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                 alt="لمینت عکس و تصاویر" 
                 class="gallery-img">
            <div class="gallery-overlay">
                <h4 class="gallery-title">لمینت عکس و تصاویر</h4>
                <p class="gallery-description">عکس‌های شخصی و آثار هنری</p>
            </div>
        </a>
    </div>
</section>

<!-- بخش ویژگی‌ها -->
<section class="features-section">
    <div class="section-title">
        <h2>مزایای لمینت حرفه‌ای</h2>
        <p>چرا لمینت اسناد ما بهترین کیفیت را دارد؟</p>
    </div>
    
    <div class="features-grid">
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-tint"></i>
            </div>
            <h3 class="feature-title">مقاوم در برابر رطوبت</h3>
            <p class="feature-description">حفاظت کامل اسناد در برابر آب، رطوبت و لکه‌های مایع</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-sun"></i>
            </div>
            <h3 class="feature-title">مقاوم در برابر نور</h3>
            <p class="feature-description">جلوگیری از رنگ‌پریدگی و آسیب‌های ناشی از نور خورشید</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-expand-arrows-alt"></i>
            </div>
            <h3 class="feature-title">ضد پارگی</h3>
            <p class="feature-description">افزایش استحکام مکانیکی و مقاومت در برابر پارگی</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-hand-paper"></i>
            </div>
            <h3 class="feature-title">ضد لک و چربی</h3>
            <p class="feature-description">محافظت در برابر لکه‌های چربی، گرد و غبار و اثر انگشت</p>
        </div>
    </div>
</section>

<!-- بخش اطلاعات تماس -->
<section class="contact-info-section">
    <div class="section-title">
        <h2>روش سفارش لمینت</h2>
        <p>برای لمینت اسناد خود، یکی از روش‌های زیر را انتخاب کنید</p>
    </div>
    
    <div class="contact-methods">
        <div class="method-card">
            <div class="method-icon">📞</div>
            <h3 class="method-title">تماس تلفنی</h3>
            <p class="method-description">با ما تماس بگیرید، سایز و نوع سند را مشخص کنید و قیمت را دریافت نمایید.</p>
            <a href="tel:+93781821838" class="method-btn">
                تماس: ۰۷۸۱۸۲۱۸۳۸
            </a>
        </div>
        
        <div class="method-card">
            <div class="method-icon">🏪</div>
            <h3 class="method-title">مراجعه حضوری</h3>
            <p class="method-description">به فروشگاه ما مراجعه کنید، اسناد خود را بیاورید و در محل لمینت کنید.</p>
            <a href="#footer" class="method-btn">
                آدرس فروشگاه
            </a>
        </div>
        
        <div class="method-card">
            <div class="method-icon">📱</div>
            <h3 class="method-title">دریافت از طریق واتس‌اپ</h3>
            <p class="method-description">عکس سند را در واتس‌اپ ارسال کنید، قیمت و زمان تحویل را دریافت کنید.</p>
            <a href="https://wa.me/93781821838" class="method-btn whatsapp-btn" target="_blank">
                <i class="fab fa-whatsapp"></i>
                ارتباط در واتس‌اپ
            </a>
        </div>
    </div>
</section>

<!-- بخش تماس -->
<section class="contact-section">
    <h2 class="contact-title">برای لمینت حرفه‌ای اسناد</h2>
    <p class="contact-description">
        با ما تماس بگیرید یا به فروشگاه ما مراجعه کنید
        <br>
        کیفیت عالی، قیمت مناسب و تحویل سریع را تجربه کنید
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