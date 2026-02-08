---
layout: page
title: "کتاب‌های انگلیسی | فروشگاه علی اکبری - کابل"
description: "کتاب‌های زبان انگلیسی برای مکاتب و مراکز آموزشی – عمده و پرچون با بالاترین کیفیت و پایین‌ترین قیمت در کابل"
permalink: /books/english-books.html
breadcrumb:
  - title: "خانه"
    link: "/"
  - title: "کتاب‌فروشی"
    link: "/books/"
---

<style>
/* ===== استایل‌های اختصاصی صفحه کتاب‌های انگلیسی ===== */

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
    transition: var(--transition);
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
    transition: var(--transition);
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

/* Responsive Adjustments */
@media (max-width: 992px) {
    .page-title {
        font-size: 2.2rem;
    }
    
    .series-section {
        padding: 2rem;
    }
    
    .features-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: var(--spacing-md);
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
        max-width: 300px;
        justify-content: center;
    }
    
    .series-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 767px) and (min-width: 576px) {
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
        gap: var(--spacing-md);
    }
    
    .series-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 575px) {
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

@media (max-width: 375px) {
    .gallery-grid {
        grid-template-columns: 1fr;
    }
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
            <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
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