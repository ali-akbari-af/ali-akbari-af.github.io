---
layout: page
title: "لوازم تحریر"
description: "لوازم تحریر با کیفیت بالا و قیمت مناسب - تمامی اقلام با استانداردهای آموزشی و اداری - فروشگاه علی اکبری کابل"
keywords: "لوازم تحریر, کیف تحریر, دفتر مشق, قلم و مداد, لوازم اداری, کابل, علی اکبری"
breadcrumb:
  - title: "قرطاسیه‌فروشی"
    link: "/stationery"
---

<style>

  h2 {
    text-align: center;
  }
  p {
    text-align: center;
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

/* Gallery Section */
.gallery-section {
    margin: 4rem 0;
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(280px, 1fr));
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

.gallery-item:hover {
    transform: translateY(0);
}

/* بخش دسته‌بندی محصولات */
.categories-section {
    margin: 6rem 0;
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
    .brands-section {
        padding: 3rem;
    }
    
    .products-grid {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 2rem;
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
    
    .brands-grid {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 2rem;
    }
    
    .products-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
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
    
    .brands-section,
    .features-section,
    .contact-info-section,
    .contact-section {
        padding: 2rem 1.5rem;
    }
    
    .brands-grid {
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
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
    <h1 class="page-title">لوازم تحریر با کیفیت بالا</h1>
    <div class="service-badge">کیفیت اول، قیمت مناسب</div>
    <div class="page-description">
        <p>
            <strong>عرضه لوازم تحریر با تمرکز جدی بر کیفیت محصولات انجام می‌شود.</strong> تمامی اقلام با دقت انتخاب شده‌اند تا دوام، کارایی و استانداردهای آموزشی و اداری را برآورده سازند.
        </p>
        <p>
            پالیسی اساسی بر این اصل استوار است که کیفیت در اولویت اول قرار داشته باشد و در کنار آن، نازل‌ترین قیمت ممکن برای مشتریان فراهم گردد. این رویکرد باعث می‌شود استفاده‌کنندگان با اطمینان خاطر، لوازم تحریر مورد نیاز خود را با کیفیت بالا و قیمت مناسب تهیه نمایند.
        </p>
        <p style="margin-top: 2rem; font-style: italic; color: var(--primary-dark);">
            ما با ارائه گسترده‌ترین مجموعه لوازم تحریر در کابل، آماده خدمت‌رسانی به دانش‌آموزان، دانشجویان، معلمان و ادارات هستیم.
        </p>
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
            <img src="https://ali-akbari-af.github.io/assets/images/writting-tools/product1.jpg" 
                 alt="4000 Essential English Words" 
                 class="gallery-image">
        </div>
        
        <div class="gallery-item">
            <img src="https://ali-akbari-af.github.io/assets/images/writting-tools/product2.jpg" 
                 alt="American English Files" 
                 class="gallery-image">
        </div>
        
        <div class="gallery-item">
            <img src="https://ali-akbari-af.github.io/assets/images/writting-tools/product3.jpg" 
                 alt="Family and Friends" 
                 class="gallery-image">
        </div>
        
        <div class="gallery-item">
            <img src="https://ali-akbari-af.github.io/assets/images/writting-tools/product4.jpg" 
                 alt="Let's go books" 
                 class="gallery-image">
        </div>
    </div>
</section>


<!-- بخش دسته‌بندی محصولات -->
<section class="categories-section">
    <div class="section-title">
        <h2>دسته‌بندی لوازم تحریر</h2>
        <p>انواع لوازم تحریر برای نیازهای مختلف</p>
    </div>
    
    <div class="categories-grid">
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-pencil-alt"></i>
            </div>
            <h3 class="category-title">قلم و نوشت‌افزار</h3>
            <p class="category-description">خودکار، مداد، روان‌نویس، ماژیک و سایر ابزار نوشتاری</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-book"></i>
            </div>
            <h3 class="category-title">دفتر و کاپی</h3>
            <p class="category-description">دفتر مشق، دفترچه یادداشت، کاپی دانشگاهی و اداری</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-backpack"></i>
            </div>
            <h3 class="category-title">کیف و جامدادی</h3>
            <p class="category-description">کیف مدرسه، جامدادی، کیف لپ‌تاپ و کیف اداری</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-ruler"></i>
            </div>
            <h3 class="category-title">ابزار هندسی</h3>
            <p class="category-description">خط‌کش، نقاله، پرگار، گونیا و سایر ابزار هندسی</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-scissors"></i>
            </div>
            <h3 class="category-title">لوازم هنری</h3>
            <p class="category-description">مداد رنگی، آبرنگ، پاستل، قیچی و چسب</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-folder"></i>
            </div>
            <h3 class="category-title">لوازم اداری</h3>
            <p class="category-description">پوشه، کلاسور، منگنه، سوراخ‌کن و سایر لوازم دفتری</p>
        </div>
    </div>
</section>


<!-- بخش ویژگی‌ها -->
<section class="features-section">
    <div class="section-title">
        <h2>مزایای خرید از ما</h2>
        <p>چرا لوازم تحریر را از ما بخرید؟</p>
    </div>
    
    <div class="features-grid">
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-medal"></i>
            </div>
            <h3 class="feature-title">کیفیت تضمینی</h3>
            <p class="feature-description">تمامی محصولات با کیفیت بالا و استانداردهای بین‌المللی</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-tags"></i>
            </div>
            <h3 class="feature-title">قیمت مناسب</h3>
            <p class="feature-description">نازل‌ترین قیمت ممکن در بازار با حفظ کیفیت عالی</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-boxes"></i>
            </div>
            <h3 class="feature-title">تنوع محصولات</h3>
            <p class="feature-description">بیش از ۱۰۰۰ قلم کالا در زمینه لوازم تحریر و اداری</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-headset"></i>
            </div>
            <h3 class="feature-title">مشاوره رایگان</h3>
            <p class="feature-description">مشاوره تخصصی برای انتخاب بهترین محصولات متناسب با نیاز شما</p>
        </div>
    </div>
</section>

<!-- بخش اطلاعات تماس -->
<section class="contact-info-section">
    <div class="section-title">
        <h2>روش سفارش لوازم تحریر</h2>
        <p>برای خرید لوازم تحریر، یکی از روش‌های زیر را انتخاب کنید</p>
    </div>
    
    <div class="contact-methods">
        <div class="method-card">
            <div class="method-icon">🏪</div>
            <h3 class="method-title">مراجعه حضوری</h3>
            <p class="method-description">به فروشگاه ما مراجعه کنید، محصولات را مشاهده کرده و خرید کنید.</p>
            <a href="#footer" class="method-btn">
                آدرس فروشگاه
            </a>
        </div>
        
        <div class="method-card">
            <div class="method-icon">📞</div>
            <h3 class="method-title">تماس تلفنی</h3>
            <p class="method-description">با ما تماس بگیرید، محصول مورد نظر را سفارش دهید و در محل دریافت کنید.</p>
            <a href="tel:+93781821838" class="method-btn">
                تماس: ۰۷۸۱۸۲۱۸۳۸
            </a>
        </div>
        
        <div class="method-card">
            <div class="method-icon">📱</div>
            <h3 class="method-title">سفارش از طریق واتس‌اپ</h3>
            <p class="method-description">محصولات را در واتس‌اپ مشاهده کنید و سفارش دهید.</p>
            <a href="https://wa.me/93781821838" class="method-btn whatsapp-btn" target="_blank">
                <i class="fab fa-whatsapp"></i>
                ارتباط در واتس‌اپ
            </a>
        </div>
    </div>
</section>

<!-- بخش تماس -->
<section class="contact-section">
    <h2 class="contact-title">برای خرید لوازم تحریر با کیفیت</h2>
    <p class="contact-description">
        با ما تماس بگیرید یا به فروشگاه ما مراجعه کنید
        <br>
        کیفیت بالا، قیمت مناسب و تنوع محصولات را تجربه کنید
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
    
    <p style="margin-top: 2rem; opacity: 0.9; font-size: 1.1rem; color: var(--myself);">
        📍 کابل، ناحیه ۶، شهرک ۱۲ امام | 🕗 ۸ صبح تا ۸ شب
    </p>
</section>
