---
layout: page
title: "لوازم هنری"
description: "لوازم هنری با کیفیت عالی شامل ابزار نقاشی و وسایل وابسته با قیمت مناسب و منصفانه برای هنرمندان و هنرجویان"
keywords: "لوازم هنری, ابزار نقاشی, وسایل هنری, هنرمندان, هنرجویان, کابل, علی اکبری"
breadcrumb:
  - title: "قرطاسیه‌فروشی"
    link: "/stationery/index.html"
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
    background: radial-gradient(circle, rgba(138, 43, 226, 0.1) 0%, transparent 70%);
    z-index: -1;
}

.page-title {
    font-size: 3.2rem;
    color: #6a0dad;
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
    background: linear-gradient(90deg, #8a2be2, #ff6b6b);
    border-radius: 3px;
}

.service-badge {
    display: inline-block;
    background: linear-gradient(135deg, #8a2be2, #ff6b6b);
    color: white;
    padding: 0.8rem 2rem;
    border-radius: 50px;
    font-size: 1.8rem;
    font-weight: 800;
    margin: 1rem 0 2rem;
    box-shadow: 0 10px 25px rgba(138, 43, 226, 0.3);
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
    border: 2px solid rgba(138, 43, 226, 0.1);
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
    background: linear-gradient(90deg, #8a2be2, #ff6b6b);
}

.page-description strong {
    color: #8a2be2;
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
    background: rgba(138, 43, 226, 0.2);
    z-index: -1;
    border-radius: 2px;
}

/* بخش دسته‌بندی محصولات هنری */
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
    color: #6a0dad;
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
    background: linear-gradient(90deg, #8a2be2, #ffd166);
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
    background: linear-gradient(90deg, #8a2be2, #ff6b6b);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
}

.category-card:hover::before {
    transform: translateX(0);
}

.category-card:hover {
    transform: translateY(-15px);
    box-shadow: 0 20px 50px rgba(138, 43, 226, 0.25);
    border-color: #9b30ff;
}

.category-icon {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, #8a2be2, #ffd166);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.8rem;
    color: white;
    font-size: 2rem;
    box-shadow: 0 10px 25px rgba(138, 43, 226, 0.3);
    transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.category-card:hover .category-icon {
    transform: scale(1.1) rotate(5deg);
}

.category-title {
    font-size: 1.6rem;
    color: #6a0dad;
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
    background: linear-gradient(135deg, rgba(138, 43, 226, 0.03), rgba(255, 107, 107, 0.03));
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
    box-shadow: 0 20px 50px rgba(138, 43, 226, 0.25);
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
    background: linear-gradient(transparent, rgba(0,0,0,0.8));
    padding: 1.5rem;
    transform: translateY(100%);
    transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.gallery-item:hover .gallery-overlay {
    transform: translateY(0);
}

.gallery-title {
    color: #fff;
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.gallery-description {
    color: #fff;
    font-size: 0.9rem;
}

/* بخش ویژگی‌ها */
.features-section {
    background: linear-gradient(135deg, rgba(138, 43, 226, 0.05), rgba(255, 107, 107, 0.05));
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
    box-shadow: 0 20px 50px rgba(138, 43, 226, 0.25);
    border-color: #9b30ff;
}

.feature-icon {
    width: 70px;
    height: 70px;
    background: linear-gradient(135deg, #8a2be2, #ffd166);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    color: white;
    font-size: 1.8rem;
    box-shadow: 0 10px 20px rgba(138, 43, 226, 0.3);
}

.feature-title {
    font-size: 1.4rem;
    color: #6a0dad;
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
    border: 2px solid rgba(138, 43, 226, 0.1);
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
    background: linear-gradient(135deg, rgba(138, 43, 226, 0.05), rgba(255, 107, 107, 0.05));
    border-radius: 0.75rem;
    transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
    border: 2px solid transparent;
}

.method-card:hover {
    transform: translateY(-10px);
    border-color: #8a2be2;
    box-shadow: 0 20px 50px rgba(138, 43, 226, 0.25);
}

.method-icon {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    color: #8a2be2;
}

.method-title {
    font-size: 1.5rem;
    color: #6a0dad;
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
    background: #8a2be2;
    color: white;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 600;
    transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
    border: 2px solid #8a2be2;
}

.method-btn:hover {
    background: white;
    color: #8a2be2;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(138, 43, 226, 0.3);
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
    background: linear-gradient(135deg, #6a0dad, #ff6b6b);
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
    color: var(--myself)
}

.contact-description {
    font-size: 1.3rem;
    opacity: 0.95;
    max-width: 700px;
    margin: 0 auto 3rem;
    line-height: 1.9;
    position: relative;
    z-index: 1;
    color: var(--myself)
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
    color: #6a0dad;
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
    <h1 class="page-title">لوازم هنری</h1>
    <div class="service-badge">کیفیت، شفافیت و قیمت منصفانه</div>
    <div class="page-description">
        <p>
            <strong>لوازم هنری</strong>، شامل ابزار نقاشی و وسایل وابسته، با دقت ویژه تهیه و عرضه می‌گردد. در بازاری که ناپایداری قیمت و پایین بودن کیفیت برخی اجناس مشکل‌ساز شده است، اصل کار بر شفافیت، درست‌کاری و حفظ معیارهای کیفی قرار دارد. هر قلم پیش از عرضه بررسی می‌شود تا پاسخ‌گوی نیاز هنرمندان و هنرجویان باشد و تا حد امکان، با قیمت مناسب و منصفانه در دسترس قرار گیرد.
        </p>
        <p style="margin-top: 2rem; font-style: italic; color: #6a0dad;">
            ما باور داریم که هر هنرمند و هنرجویی سزاوار دسترسی به لوازم هنری با کیفیت و قیمت مناسب است. کیفیت ابزار هنری بر کیفیت آثار هنری تأثیر مستقیم دارد.
        </p>
    </div>
</section>

<!-- بخش دسته‌بندی محصولات هنری -->
<section class="categories-section">
    <div class="section-title">
        <h2>انواع لوازم هنری</h2>
        <p>انتخابی گسترده از بهترین ابزار هنری برای هر سبک و تکنیک</p>
    </div>
    
    <div class="categories-grid">
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-paint-brush"></i>
            </div>
            <h3 class="category-title">ابزار نقاشی</h3>
            <p class="category-description">قلموهای مختلف، پالت، بوم، رنگ‌های اکریلیک، آبرنگ، رنگ روغن و گواش</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-pencil-alt"></i>
            </div>
            <h3 class="category-title">ابزار طراحی</h3>
            <p class="category-description">مدادهای طراحی، ذغال، پاستل، مداد رنگی، قلم فلزی و روان‌نویس</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-cut"></i>
            </div>
            <h3 class="category-title">ابزار کاغذ و برش</h3>
            <p class="category-description">کاغذهای مختلف، مقوا، کاتر، خط‌کش، گونیا و قیچی مخصوص</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-spray-can"></i>
            </div>
            <h3 class="category-title">رنگ‌های تخصصی</h3>
            <p class="category-description">رنگ‌های اکریلیک، روغن، آبرنگ، گواش، رنگ‌پاش و فیکساتیو</p>
        </div>
                
    </div>
</section>

<!-- بخش گالری تصاویر -->
<section class="gallery-section">
    <div class="section-title">
        <h2>نمونه‌های لوازم هنری</h2>
        <p>محصولات با کیفیت ما که هنرمندان زیادی از آنها استفاده می‌کنند</p>
    </div>
    
    <div class="gallery-grid">
        <a href="https://ali-akbari-af.github.io/assets/images/art-tools/brushes.jpg" class="gallery-item" data-lightbox="gallery" data-title="برس های نقاشی">
            <img src="https://ali-akbari-af.github.io/assets/images/art-tools/brushes.jpg" alt="برس های نقاشی" class="gallery-img">
            <div class="gallery-overlay">
                <h4 class="gallery-title">برس های نقاشی</h4>
                <p class="gallery-description">انواع مختلف برس های نقاشی</p>
            </div>
        </a>
        
        <a href="https://ali-akbari-af.github.io/assets/images/art-tools/blur-tool.jpg" class="gallery-item" data-lightbox="gallery" data-title="محو کننده">
            <img src="https://ali-akbari-af.github.io/assets/images/art-tools/blur-tool.jpg" alt="محو کننده" class="gallery-img">
            <div class="gallery-overlay">
                <h4 class="gallery-title">محو کننده</h4>
                <p class="gallery-description">محو کننده ابزاری برای محو سازی</p>
            </div>
        </a>
        
        <a href="https://ali-akbari-af.github.io/assets/images/art-tools/sketch-book.jpg" class="gallery-item" data-lightbox="gallery" data-title="کتابچه رسامی">
            <img src="https://ali-akbari-af.github.io/assets/images/art-tools/sketch-book.jpg" alt="کتابچه رسامی" class="gallery-img">
            <div class="gallery-overlay">
                <h4 class="gallery-title">کتابچه رسامی</h4>
                <p class="gallery-description">کتابچه های مخصوص رسامی حرفه ای</p>
            </div>
        </a>
        
        <a href="https://ali-akbari-af.github.io/assets/images/art-tools/colors.jpg" class="gallery-item" data-lightbox="gallery" data-title="رنگ‌های هنری">
            <img src="https://ali-akbari-af.github.io/assets/images/art-tools/colors.jpg" alt="رنگ‌های هنری" class="gallery-img">
            <div class="gallery-overlay">
                <h4 class="gallery-title">رنگ‌های هنری</h4>
                <p class="gallery-description">تنوع کامل رنگ‌های اکریلیک، روغن و آبرنگ</p>
            </div>
        </a>
    </div>
</section>

<!-- بخش ویژگی‌ها -->
<section class="features-section">
    <div class="section-title">
        <h2>چرا لوازم هنری ما متمایز است؟</h2>
        <p>تعهد ما به کیفیت، شفافیت و قیمت منصفانه</p>
    </div>
    
    <div class="features-grid">
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-search"></i>
            </div>
            <h3 class="feature-title">بررسی کیفیت</h3>
            <p class="feature-description">هر محصول پیش از عرضه به دقت بررسی می‌شود تا از کیفیت بالا اطمینان حاصل شود</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-hand-holding-usd"></i>
            </div>
            <h3 class="feature-title">قیمت منصفانه</h3>
            <p class="feature-description">تلاش می‌کنیم با حذف واسطه‌ها، محصولات را با مناسب‌ترین قیمت عرضه کنیم</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-user-check"></i>
            </div>
            <h3 class="feature-title">مشاوره تخصصی</h3>
            <p class="feature-description">تیم ما آماده ارائه مشاوره برای انتخاب مناسب‌ترین ابزار هنری است</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-award"></i>
            </div>
            <h3 class="feature-title">برندهای معتبر</h3>
            <p class="feature-description">فقط محصولات با کیفیت و از برندهای معتبر داخلی و خارجی عرضه می‌شود</p>
        </div>
    </div>
</section>

<!-- بخش اطلاعات تماس -->
<section class="contact-info-section">
    <div class="section-title">
        <h2>روش خرید لوازم هنری</h2>
        <p>برای خرید یا دریافت مشاوره، یکی از روش‌های زیر را انتخاب کنید</p>
    </div>
    
    <div class="contact-methods">
        <div class="method-card">
            <div class="method-icon">📞</div>
            <h3 class="method-title">تماس تلفنی</h3>
            <p class="method-description">با ما تماس بگیرید، نیاز خود را توضیح دهید و مشاوره رایگان دریافت کنید.</p>
            <a href="tel:+93781821838" class="method-btn">
                تماس: ۰۷۸۱۸۲۱۸۳۸
            </a>
        </div>
        
        <div class="method-card">
            <div class="method-icon">🏪</div>
            <h3 class="method-title">مراجعه حضوری</h3>
            <p class="method-description">به فروشگاه ما مراجعه کنید، محصولات را از نزدیک ببینید و انتخاب کنید.</p>
            <a href="#footer" class="method-btn">
                آدرس فروشگاه
            </a>
        </div>
        
        <div class="method-card">
            <div class="method-icon">📱</div>
            <h3 class="method-title">دریافت از طریق واتس‌اپ</h3>
            <p class="method-description">عکس محصول مورد نظر را در واتس‌اپ ارسال کنید، قیمت و موجودی را دریافت کنید.</p>
            <a href="https://wa.me/93781821838" class="method-btn whatsapp-btn" target="_blank">
                <i class="fab fa-whatsapp"></i>
                ارتباط در واتس‌اپ
            </a>
        </div>
    </div>
</section>

<!-- بخش تماس -->
<section class="contact-section">
    <h2 class="contact-title">لوازم هنری با کیفیت، شفافیت و قیمت منصفانه</h2>
    <p class="contact-description">
        ابزار هنری مناسب، نیمی از راه هنر است
        <br>
        با لوازم هنری با کیفیت ما، خلاقیت خود را به پرواز درآورید
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
    
    <p style="margin-top: 2rem; opacity: 0.9; font-size: 1.1rem; color: var(--myself)">
        📍 کابل، ناحیه ۶، شهرک ۱۲ امام | 🕗 ۸ صبح تا ۸ شب
    </p>
</section>
