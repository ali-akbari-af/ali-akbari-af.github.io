---
layout: page
title: "کتاب‌های الکترونیکی | فروشگاه علی اکبری - کابل"
description: "کتاب‌های الکترونیک با قیمت نازل - هر کتاب تنها ۱۰ افغانی در فروشگاه علی اکبری کابل"
keywords: "کتاب‌های الکترونیکی, ebook, PDF, کتاب دیجیتال, کتاب ارزان, کابل, علی اکبری"
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
    --price-color: #ef4444;
    
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
    --shadow-hover: 0 20px 50px rgba(99, 102, 241, 0.25);
    
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

.price-badge {
    display: inline-block;
    background: linear-gradient(135deg, var(--price-color), #f97316);
    color: white;
    padding: 0.8rem 2rem;
    border-radius: 50px;
    font-size: 1.8rem;
    font-weight: 800;
    margin: 1rem 0 2rem;
    box-shadow: 0 10px 25px rgba(239, 68, 68, 0.3);
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

/* بخش دسته‌بندی کتاب‌ها */
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
    box-shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
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
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(139, 92, 246, 0.05));
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
    box-shadow: 0 10px 20px rgba(99, 102, 241, 0.3);
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
    border: 2px solid rgba(99, 102, 241, 0.1);
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
    
    .price-badge {
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
    
    .price-badge {
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
    .contact-section {
        padding: 2rem 1.5rem;
    }
    
    .features-section h2,
    .contact-title {
        font-size: 1.8rem;
    }
}
</style>

<!-- بخش هیرو -->
<section class="page-hero">
    <h1 class="page-title">کتاب‌های الکترونیکی</h1>
    <div class="price-badge">هر کتاب تنها ۱۰ افغانی</div>
    <div class="page-description">
        <p>
            کتاب‌های الکترونیک – دسترسی آسان و قیمت نازل
            <br><br>
            با توجه به دسترسی اکثریت مردم به موبایل و وسایل الکترونیکی و همچنین هزینه بالای خرید کتاب‌های فیزیکی، ما مجموعه‌ای گسترده از کتاب‌های الکترونیک را گردآوری کرده‌ایم که با قیمت نازل و مناسب در خدمت همه دوستان قرار دارد. هر کتاب تنها به ۱۰ افغانی عرضه می‌شود.
            <br><br>
            <strong>این مجموعه شامل کتاب‌های:</strong> دانشگاهی، علمی، تاریخی، روان‌شناسی، انگیزشی، دینی، کودک و نوجوان، ادبیات، زبان‌های خارجی، رمان، داستان کوتاه و ده‌ها موضوع دیگر می‌باشد.
            <br><br>
            برای دریافت لیست کامل کتاب‌ها و اطلاعات بیشتر، با ما تماس بگیرید یا به فروشگاه مراجعه کنید.
        </p>
    </div>
</section>

<!-- بخش دسته‌بندی کتاب‌ها -->
<section class="categories-section">
    <div class="section-title">
        <h2>دسته‌بندی کتاب‌های الکترونیکی</h2>
        <p>مجموعه‌ای کامل از کتاب‌های الکترونیکی در تمامی موضوعات</p>
    </div>
    
    <div class="categories-grid">
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-university"></i>
            </div>
            <h3 class="category-title">کتاب‌های دانشگاهی</h3>
            <p class="category-description">کتاب‌های درسی و کمک درسی برای تمام رشته‌های دانشگاهی</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-flask"></i>
            </div>
            <h3 class="category-title">کتاب‌های علمی</h3>
            <p class="category-description">علوم جدید، فناوری، پزشکی و تحقیقات علمی</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-landmark"></i>
            </div>
            <h3 class="category-title">کتاب‌های تاریخی</h3>
            <p class="category-description">تاریخ افغانستان، جهان و تمدن‌های باستانی</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-brain"></i>
            </div>
            <h3 class="category-title">روان‌شناسی</h3>
            <p class="category-description">روانشناسی شخصیت، اجتماعی و رشد فردی</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-rocket"></i>
            </div>
            <h3 class="category-title">انگیزشی</h3>
            <p class="category-description">تقویت روحیه، موفقیت و توسعه مهارت‌های فردی</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-mosque"></i>
            </div>
            <h3 class="category-title">کتاب‌های دینی</h3>
            <p class="category-description">تفاسیر قرآن، احادیث، فقه و معارف اسلامی</p>
        </div>
    </div>
</section>

<!-- بخش ویژگی‌ها -->
<section class="features-section">
    <div class="section-title">
        <h2>مزایای کتاب‌های الکترونیکی ما</h2>
        <p>چرا کتاب‌های الکترونیکی ما بهترین انتخاب هستند؟</p>
    </div>
    
    <div class="features-grid">
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-money-bill-wave"></i>
            </div>
            <h3 class="feature-title">قیمت استثنایی</h3>
            <p class="feature-description">هر کتاب تنها ۱۰ افغانی - مقرون به صرفه‌تر از کتاب فیزیکی</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-book"></i>
            </div>
            <h3 class="feature-title">تنوع بالا</h3>
            <p class="feature-description">ده‌ها موضوع مختلف برای تمام سلیقه‌ها</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-mobile-alt"></i>
            </div>
            <h3 class="feature-title">قابل استفاده روی موبایل</h3>
            <p class="feature-description">بدون نیاز به دستگاه خاص، روی موبایل قابل مطالعه است</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-bolt"></i>
            </div>
            <h3 class="feature-title">دریافت سریع</h3>
            <p class="feature-description">پس از تماس، کتاب‌ها به سرعت برای شما ارسال می‌شوند</p>
        </div>
    </div>
</section>

<!-- بخش اطلاعات تماس -->
<section class="contact-info-section">
    <div class="section-title">
        <h2>روش دریافت کتاب‌های الکترونیکی</h2>
        <p>برای دریافت لیست کتاب‌ها و خرید، یکی از روش‌های زیر را انتخاب کنید</p>
    </div>
    
    <div class="contact-methods">
        <div class="method-card">
            <div class="method-icon">📞</div>
            <h3 class="method-title">تماس تلفنی</h3>
            <p class="method-description">با ما تماس بگیرید، لیست کامل کتاب‌ها را دریافت کنید و کتاب مورد نظر خود را انتخاب نمایید.</p>
            <a href="tel:{{ site.phone_primary }}" class="method-btn">
                تماس: {{ site.phone_primary }}
            </a>
        </div>
        
        <div class="method-card">
            <div class="method-icon">🏪</div>
            <h3 class="method-title">مراجعه حضوری</h3>
            <p class="method-description">به فروشگاه ما مراجعه کنید، کتاب‌ها را مشاهده کرده و پس از انتخاب دریافت کنید.</p>
            <a href="#footer" class="method-btn">
                آدرس فروشگاه
            </a>
        </div>
        
        <div class="method-card">
            <div class="method-icon">📱</div>
            <h3 class="method-title">دریافت از طریق واتس‌اپ</h3>
            <p class="method-description">لیست کتاب‌ها را در واتس‌اپ دریافت کنید و پس از انتخاب، کتاب‌ها برایتان ارسال می‌شود.</p>
            <a href="https://wa.me/93781821838" class="method-btn whatsapp-btn" target="_blank">
                <i class="fab fa-whatsapp"></i>
                ارتباط در واتس‌اپ
            </a>
        </div>
    </div>
</section>

<!-- بخش تماس -->
<section class="contact-section">
    <h2 class="contact-title">برای دریافت اطلاعات بیشتر</h2>
    <p class="contact-description">
        با ما تماس بگیرید یا به فروشگاه ما مراجعه کنید
        <br>
        لیست کامل کتاب‌ها، قیمت‌ها و اطلاعات تکمیلی را دریافت نمایید
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