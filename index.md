---
layout: default
title: "قرطاسیه فروشی و مطبعه علی اکبری | خدمات چاپ، کتاب و لوازم تحریر در کابل"
description: "خدمات چاپ، کتاب‌فروشی، لوازم تحریر و آموزش دیجیتال در کابل. کیفیت بالا، قیمت منصفانه، تحویل سریع."
keywords: "کتاب‌فروشی, مطبعه, خدمات کامپیوتری, چاپ, عکاسی, کابل, علی اکبری, لوازم تحریر"
---

<style>
/* ===== RESET & BASE ===== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Vazirmatn', -apple-system, BlinkMacSystemFont, sans-serif;
    background: #ffffff;
    color: #1e293b;
    line-height: 1.6;
    direction: rtl;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* ===== رنگ‌بندی ثابت ===== */
:root {
    --primary: #0f5e7a;
    --primary-dark: #0a4055;
    --secondary: #f0b202;
    --text-dark: #1e293b;
    --text-light: #64748b;
    --bg-light: #f8fafc;
    --border-light: #e2e8f0;
    --white: #ffffff;
}

/* ===== بخش‌بندی اصلی ===== */
section {
    padding: 60px 0;
}

.section-header {
    text-align: center;
    margin-bottom: 40px;
}

.section-header h2 {
    font-size: 2rem;
    color: var(--primary-dark);
    font-weight: 700;
    margin-bottom: 10px;
}

.section-header p {
    color: var(--text-light);
    font-size: 1.1rem;
}

/* ===== 1️⃣ Hero Section ===== */
.hero {
    background: linear-gradient(135deg, var(--primary-dark), var(--primary));
    min-height: 500px;
    display: flex;
    align-items: center;
    margin-top: 80px;
}

.hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;
}

.hero-text h1 {
    font-size: 2.5rem;
    color: var(--white);
    line-height: 1.2;
    margin-bottom: 20px;
}

.hero-text p {
    font-size: 1.2rem;
    color: rgba(255,255,255,0.9);
    margin-bottom: 30px;
}

.hero-cta {
    display: inline-block;
    padding: 15px 40px;
    background: var(--secondary);
    color: var(--primary-dark);
    text-decoration: none;
    font-weight: 700;
    border-radius: 8px;
    font-size: 1.1rem;
    transition: all 0.3s;
    border: 2px solid var(--secondary);
}

.hero-cta:hover {
    background: transparent;
    color: var(--white);
}

.hero-image {
    width: 100%;
    height: 350px;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
}

.hero-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* ===== 2️⃣ خدمات اصلی ===== */
.services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
}

.service-card {
    background: var(--white);
    border-radius: 12px;
    padding: 30px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
    border: 1px solid var(--border-light);
    transition: all 0.3s;
}

.service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0,0,0,0.1);
    border-color: var(--secondary);
}

.service-icon {
    width: 60px;
    height: 60px;
    background: var(--primary);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
}

.service-icon i {
    font-size: 2rem;
    color: var(--white);
}

.service-card h3 {
    font-size: 1.4rem;
    color: var(--primary-dark);
    margin-bottom: 10px;
}

.service-card p {
    color: var(--text-light);
    margin-bottom: 20px;
    line-height: 1.6;
}

.service-links {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.service-sub-link {
    color: var(--primary);
    text-decoration: none;
    font-size: 0.95rem;
    display: flex;
    align-items: center;
    gap: 5px;
    transition: all 0.3s;
    padding: 5px 0;
    border-bottom: 1px dashed var(--border-light);
}

.service-sub-link:hover {
    color: var(--secondary);
    padding-right: 5px;
    border-bottom-color: var(--secondary);
}

.service-sub-link i {
    font-size: 0.8rem;
    color: var(--secondary);
}

/* ===== 3️⃣ مزیت رقابتی ===== */
.advantages {
    background: var(--bg-light);
}

.advantages-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
}

.advantage-item {
    text-align: center;
    padding: 20px;
}

.advantage-icon {
    width: 70px;
    height: 70px;
    background: var(--white);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 15px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.advantage-icon i {
    font-size: 2rem;
    color: var(--primary);
}

.advantage-item h4 {
    font-size: 1.2rem;
    color: var(--primary-dark);
    margin-bottom: 5px;
}

.advantage-item p {
    color: var(--text-light);
    font-size: 0.95rem;
}

/* ===== 4️⃣ نمونه کار ===== */
.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}

.portfolio-item {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
    border: 1px solid var(--border-light);
}

.portfolio-image {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
}

.portfolio-caption {
    padding: 15px;
    background: var(--white);
}

.portfolio-caption h4 {
    font-size: 1rem;
    color: var(--primary-dark);
    margin-bottom: 5px;
}

.portfolio-caption p {
    font-size: 0.9rem;
    color: var(--text-light);
}

/* ===== 5️⃣ فرآیند کار ===== */
.process-steps {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    margin-top: 40px;
}

.process-step {
    text-align: center;
    position: relative;
}

.process-step:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 40px;
    left: -20px;
    width: 40px;
    height: 2px;
    background: var(--secondary);
    opacity: 0.3;
}

.step-number {
    width: 80px;
    height: 80px;
    background: var(--primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    color: var(--white);
    font-size: 2rem;
    font-weight: 700;
}

.process-step h4 {
    font-size: 1.3rem;
    color: var(--primary-dark);
    margin-bottom: 10px;
}

.process-step p {
    color: var(--text-light);
}

/* ===== 6️⃣ اطلاعات تماس ===== */
.contact-section {
    background: var(--primary);
    color: var(--white);
}

.contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;
}

.contact-info h3 {
    font-size: 2rem;
    margin-bottom: 20px;
}

.contact-details {
    list-style: none;
    margin: 30px 0;
}

.contact-details li {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 15px;
    font-size: 1.1rem;
}

.contact-details i {
    width: 40px;
    height: 40px;
    background: rgba(255,255,255,0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
}

.contact-buttons {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
}

.contact-btn {
    padding: 12px 25px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s;
    display: inline-flex;
    align-items: center;
    gap: 8px;
}

.contact-btn.primary {
    background: var(--secondary);
    color: var(--primary-dark);
}

.contact-btn.primary:hover {
    background: var(--white);
}

.contact-btn.secondary {
    background: rgba(255,255,255,0.1);
    color: var(--white);
    border: 1px solid rgba(255,255,255,0.3);
}

.contact-btn.secondary:hover {
    background: rgba(255,255,255,0.2);
}

.contact-map {
    width: 100%;
    height: 350px;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
}

.contact-map iframe {
    width: 100%;
    height: 100%;
    border: 0;
}

/* ===== 7️⃣ فوتر ===== */
.footer {
    background: var(--primary-dark);
    color: var(--white);
    padding: 60px 0 30px;
}

.footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1.5fr;
    gap: 40px;
    margin-bottom: 40px;
}

.footer-logo {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 15px;
}

.footer-about p {
    color: rgba(255,255,255,0.7);
    margin-bottom: 20px;
}

.footer-title {
    font-size: 1.2rem;
    margin-bottom: 20px;
    font-weight: 600;
}

.footer-links {
    list-style: none;
}

.footer-links li {
    margin-bottom: 10px;
}

.footer-links a {
    color: rgba(255,255,255,0.7);
    text-decoration: none;
    transition: color 0.3s;
}

.footer-links a:hover {
    color: var(--secondary);
}

.footer-contact li {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
    color: rgba(255,255,255,0.7);
}

.social-links {
    display: flex;
    gap: 15px;
    margin-top: 20px;
}

.social-links a {
    width: 40px;
    height: 40px;
    background: rgba(255,255,255,0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    text-decoration: none;
    transition: all 0.3s;
}

.social-links a:hover {
    background: var(--secondary);
    color: var(--primary-dark);
}

.footer-bottom {
    text-align: center;
    padding-top: 30px;
    border-top: 1px solid rgba(255,255,255,0.1);
    color: rgba(255,255,255,0.5);
}

/* ===== Responsive ===== */
@media (max-width: 992px) {
    .hero-content,
    .contact-grid {
        grid-template-columns: 1fr;
    }
    
    .hero-text {
        text-align: center;
    }
    
    .services-grid,
    .advantages-grid,
    .portfolio-grid,
    .footer-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .process-steps {
        grid-template-columns: 1fr;
    }
    
    .process-step:not(:last-child)::after {
        display: none;
    }
}

@media (max-width: 768px) {
    section {
        padding: 40px 0;
    }
    
    .hero {
        min-height: auto;
        padding: 60px 0;
    }
    
    .hero-text h1 {
        font-size: 2rem;
    }
    
    .services-grid,
    .advantages-grid,
    .portfolio-grid,
    .footer-grid {
        grid-template-columns: 1fr;
    }
    
    .contact-buttons {
        flex-direction: column;
    }
    
    .contact-btn {
        width: 100%;
        justify-content: center;
    }
}
</style>

<!-- 1️⃣ Hero Section -->
<section class="hero">
    <div class="container">
        <div class="hero-content">
            <div class="hero-text">
                <h1>مرکز تخصصی چاپ، کتاب و لوازم تحریر در کابل</h1>
                <p>خدمات چاپ، فروش کتاب‌های درسی و دانشگاهی، لوازم تحریر با کیفیت و آموزش دیجیتال - همه در یک مکان با قیمت منصفانه</p>
                <a href="#services" class="hero-cta">مشاهده خدمات</a>
            </div>
            <div class="hero-image">
                <img src="https://images.unsplash.com/photo-1544716278-e513176f20b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="فروشگاه علی اکبری">
            </div>
        </div>
    </div>
</section>

<!-- 2️⃣ خدمات اصلی - با لینک‌های مستقیم به صفحات اختصاصی -->
<section id="services" style="padding: 60px 0;">
    <div class="container">
        <div class="section-header">
            <h2>خدمات ما</h2>
            <p>با کلیک روی هر مورد به صفحه اختصاصی آن بروید</p>
        </div>
        
        <div class="services-grid">
            <!-- کتاب‌فروشی -->
            <div class="service-card">
                <div class="service-icon">
                    <i class="bi bi-book"></i>
                </div>
                <h3>کتاب‌فروشی</h3>
                <p>انواع کتاب‌های درسی، آموزشی و مطالعاتی</p>
                <div class="service-links">
                    <a href="{{ '/pages/school-books' | relative_url }}" class="service-sub-link">
                        <i class="bi bi-chevron-left"></i> کتاب‌های درسی مکتب
                    </a>
                    <a href="{{ '/pages/english-books' | relative_url }}" class="service-sub-link">
                        <i class="bi bi-chevron-left"></i> کتاب‌های انگلیسی
                    </a>
                    <a href="{{ '/pages/reading-books' | relative_url }}" class="service-sub-link">
                        <i class="bi bi-chevron-left"></i> کتاب‌های مطالعاتی
                    </a>
                    <a href="{{ '/pages/electronic-books' | relative_url }}" class="service-sub-link">
                        <i class="bi bi-chevron-left"></i> کتاب‌های الکترونیکی
                    </a>
                    <a href="{{ '/pages/konkoor-books' | relative_url }}" class="service-sub-link">
                        <i class="bi bi-chevron-left"></i> کتاب‌های کانکوری
                    </a>
                </div>
            </div>
            
            <!-- مطبعه -->
            <div class="service-card">
                <div class="service-icon">
                    <i class="bi bi-printer"></i>
                </div>
                <h3>مطبعه</h3>
                <p>خدمات چاپ، کپی، اسکن و طراحی</p>
                <div class="service-links">
                    <a href="{{ '/pages/copy-print-scan' | relative_url }}" class="service-sub-link">
                        <i class="bi bi-chevron-left"></i> پرینت، کپی و اسکن
                    </a>
                    <a href="{{ '/pages/quran' | relative_url }}" class="service-sub-link">
                        <i class="bi bi-chevron-left"></i> چاپ رقعه ختم قرآن و فاتحه
                    </a>
                    <a href="{{ '/pages/wedding-card' | relative_url }}" class="service-sub-link">
                        <i class="bi bi-chevron-left"></i> چاپ کارت عروسی
                    </a>
                    <a href="{{ '/pages/pvc-card' | relative_url }}" class="service-sub-link">
                        <i class="bi bi-chevron-left"></i> کاپی استخوانی (PVC Card)
                    </a>
                    <a href="{{ '/pages/translation' | relative_url }}" class="service-sub-link">
                        <i class="bi bi-chevron-left"></i> ترجمه اسناد
                    </a>
                    <a href="{{ '/pages/lamination' | relative_url }}" class="service-sub-link">
                        <i class="bi bi-chevron-left"></i> پوش یا لمینت اسناد
                    </a>
                    <a href="{{ '/pages/online-registration' | relative_url }}" class="service-sub-link">
                        <i class="bi bi-chevron-left"></i> ثبت‌نام خدمات آنلاین
                    </a>
                </div>
            </div>
            
            <!-- عکاسی -->
            <div class="service-card">
                <div class="service-icon">
                    <i class="bi bi-camera"></i>
                </div>
                <h3>عکاسی</h3>
                <p>خدمات عکاسی حرفه‌ای و ادیت تصاویر</p>
                <div class="service-links">
                    <a href="{{ '/pages/professional-photos' | relative_url }}" class="service-sub-link">
                        <i class="bi bi-chevron-left"></i> تولید عکس‌های حرفه‌ای
                    </a>
                    <a href="{{ '/pages/photo-restore' | relative_url }}" class="service-sub-link">
                        <i class="bi bi-chevron-left"></i> بازسازی عکس‌های کهنه
                    </a>
                    <a href="{{ '/pages/photo-edit' | relative_url }}" class="service-sub-link">
                        <i class="bi bi-chevron-left"></i> ادیت عکس مطابق سفارش
                    </a>
                </div>
            </div>
            
            <!-- قرطاسیه‌فروشی -->
            <div class="service-card">
                <div class="service-icon">
                    <i class="bi bi-pencil"></i>
                </div>
                <h3>قرطاسیه‌فروشی</h3>
                <p>لوازم تحریر، اداری و هنری</p>
                <div class="service-links">
                    <a href="{{ '/pages/writting-tools' | relative_url }}" class="service-sub-link">
                        <i class="bi bi-chevron-left"></i> لوازم تحریر
                    </a>
                    <a href="{{ '/pages/office-supplies' | relative_url }}" class="service-sub-link">
                        <i class="bi bi-chevron-left"></i> لوازم اداری
                    </a>
                    <a href="{{ '/pages/art-stationary' | relative_url }}" class="service-sub-link">
                        <i class="bi bi-chevron-left"></i> لوازم هنری
                    </a>
                </div>
            </div>
            
            <!-- آموزش دیجیتال -->
            <div class="service-card">
                <div class="service-icon">
                    <i class="bi bi-laptop"></i>
                </div>
                <h3>بانک آموزش‌های دیجیتال</h3>
                <p>بسته‌های آموزشی روی فلش</p>
                <div class="service-links">
                    <a href="{{ '/pages/computer-lessons' | relative_url }}" class="service-sub-link">
                        <i class="bi bi-chevron-left"></i> آموزش کامپیوتر
                    </a>
                    <a href="{{ '/pages/english-lessons' | relative_url }}" class="service-sub-link">
                        <i class="bi bi-chevron-left"></i> آموزش زبان انگلیسی
                    </a>
                    <a href="{{ '/pages/ai-lessons' | relative_url }}" class="service-sub-link">
                        <i class="bi bi-chevron-left"></i> آموزش هوش مصنوعی
                    </a>
                    <a href="{{ '/pages/entrepreneurship' | relative_url }}" class="service-sub-link">
                        <i class="bi bi-chevron-left"></i> آموزش‌های کارآفرینانه
                    </a>
                </div>
            </div>
            
            <!-- خدمات تخصصی -->
            <div class="service-card">
                <div class="service-icon">
                    <i class="bi bi-gear"></i>
                </div>
                <h3>خدمات تخصصی</h3>
                <p>خدمات ویژه و تخصصی</p>
                <div class="service-links">
                    <a href="{{ '/pages/web-develob' | relative_url }}" class="service-sub-link">
                        <i class="bi bi-chevron-left"></i> طراحی و توسعه وب‌سایت
                    </a>
                    <a href="{{ '/pages/video-edit' | relative_url }}" class="service-sub-link">
                        <i class="bi bi-chevron-left"></i> ویرایش و بهسازی ویدئو
                    </a>
                    <a href="{{ '/pages/software' | relative_url }}" class="service-sub-link">
                        <i class="bi bi-chevron-left"></i> نصب نرم‌افزارهای کمپیوتری
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- 3️⃣ مزیت رقابتی -->
<section class="advantages">
    <div class="container">
        <div class="section-header">
            <h2>چرا علی اکبری؟</h2>
            <p>چهار دلیل برای انتخاب ما</p>
        </div>
        
        <div class="advantages-grid">
            <div class="advantage-item">
                <div class="advantage-icon">
                    <i class="bi bi-calendar-check"></i>
                </div>
                <h4>۲۰ سال تجربه</h4>
                <p>از سال ۱۳۸۲ در خدمت شما هستیم</p>
            </div>
            
            <div class="advantage-item">
                <div class="advantage-icon">
                    <i class="bi bi-lightning-charge"></i>
                </div>
                <h4>تحویل سریع</h4>
                <p>اکثر خدمات در کمتر از ۲۴ ساعت</p>
            </div>
            
            <div class="advantage-item">
                <div class="advantage-icon">
                    <i class="bi bi-trophy"></i>
                </div>
                <h4>کیفیت تضمینی</h4>
                <p>با مدرن‌ترین دستگاه‌ها و نرم‌افزارها</p>
            </div>
            
            <div class="advantage-item">
                <div class="advantage-icon">
                    <i class="bi bi-cash-stack"></i>
                </div>
                <h4>قیمت منصفانه</h4>
                <p>بهترین قیمت در مقایسه با بازار</p>
            </div>
        </div>
    </div>
</section>

<!-- 4️⃣ نمونه کار - با لینک به صفحات اختصاصی -->
<section style="padding: 60px 0;">
    <div class="container">
        <div class="section-header">
            <h2>نمونه کارها</h2>
            <p>تصاویری از خدمات و محصولات ما</p>
        </div>
        
        <div class="portfolio-grid">
            <div class="portfolio-item">
                <a href="{{ '/pages/copy-print-scan' | relative_url }}">
                    <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="خدمات چاپ" class="portfolio-image">
                    <div class="portfolio-caption">
                        <h4>خدمات چاپ رنگی</h4>
                        <p>پرینت و کپی</p>
                    </div>
                </a>
            </div>
            
            <div class="portfolio-item">
                <a href="{{ '/pages/writting-tools' | relative_url }}">
                    <img src="https://images.unsplash.com/photo-1565688534245-05d6b5be184a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="لوازم تحریر" class="portfolio-image">
                    <div class="portfolio-caption">
                        <h4>لوازم تحریر</h4>
                        <p>انواع خودکار و مداد</p>
                    </div>
                </a>
            </div>
            
            <div class="portfolio-item">
                <a href="{{ '/pages/school-books' | relative_url }}">
                    <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="کتاب‌فروشی" class="portfolio-image">
                    <div class="portfolio-caption">
                        <h4>کتاب‌های درسی</h4>
                        <p>کتاب‌های مکتب و دانشگاه</p>
                    </div>
                </a>
            </div>
            
            <div class="portfolio-item">
                <a href="{{ '/pages/computer-lessons' | relative_url }}">
                    <img src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="آموزش دیجیتال" class="portfolio-image">
                    <div class="portfolio-caption">
                        <h4>بسته‌های آموزشی</h4>
                        <p>آموزش روی فلش</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</section>

<!-- 5️⃣ فرآیند کار -->
<section style="background: var(--bg-light); padding: 60px 0;">
    <div class="container">
        <div class="section-header">
            <h2>چگونه کار می‌کنیم؟</h2>
            <p>سه مرحله ساده برای دریافت خدمات</p>
        </div>
        
        <div class="process-steps">
            <div class="process-step">
                <div class="step-number">۱</div>
                <h4>مراجعه یا تماس</h4>
                <p>به فروشگاه ما بیایید یا با ما تماس بگیرید</p>
            </div>
            
            <div class="process-step">
                <div class="step-number">۲</div>
                <h4>توضیح نیاز</h4>
                <p>خدمات مورد نظر خود را توضیح دهید</p>
            </div>
            
            <div class="process-step">
                <div class="step-number">۳</div>
                <h4>تحویل سریع</h4>
                <p>کار شما در کوتاه‌ترین زمان آماده می‌شود</p>
            </div>
        </div>
    </div>
</section>

<!-- 6️⃣ اطلاعات تماس -->
<section class="contact-section">
    <div class="container">
        <div class="contact-grid">
            <div class="contact-info">
                <h3>با ما در تماس باشید</h3>
                <p>برای مشاوره، سفارش خدمات یا بازدید حضوری، از راه‌های زیر اقدام کنید.</p>
                
                <ul class="contact-details">
                    <li>
                        <i class="bi bi-telephone"></i>
                        <span>۰۷۸۱۸۲۱۸۳۸</span>
                    </li>
                    <li>
                        <i class="bi bi-whatsapp"></i>
                        <span>۰۷۸۱۸۲۱۸۳۸</span>
                    </li>
                    <li>
                        <i class="bi bi-geo-alt"></i>
                        <span>کابل، ناحیه ۶، شهرک ۱۲ امام، چهارراه اول، پلاک ۲۳</span>
                    </li>
                    <li>
                        <i class="bi bi-clock"></i>
                        <span>شنبه تا پنج‌شنبه ۸ صبح تا ۸ شب - جمعه‌ها تعطیل</span>
                    </li>
                </ul>
                
                <div class="contact-buttons">
                    <a href="tel:+93781821838" class="contact-btn primary">
                        <i class="bi bi-telephone"></i>
                        تماس تلفنی
                    </a>
                    <a href="https://wa.me/93781821838" class="contact-btn secondary" target="_blank">
                        <i class="bi bi-whatsapp"></i>
                        واتس‌اپ
                    </a>
                    <a href="{{ '/contact/' | relative_url }}" class="contact-btn secondary">
                        <i class="bi bi-geo-alt"></i>
                        آدرس فروشگاه
                    </a>
                </div>
            </div>
            
            <div class="contact-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373531590444!3d-37.81627974202167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b3f3f3f%3A0x5045675218ce7e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s" 
                        allowfullscreen="" 
                        loading="lazy"
                        title="موقعیت فروشگاه"></iframe>
            </div>
        </div>
    </div>
</section>

<!-- 7️⃣ فوتر -->
<footer class="footer">
    <div class="container">
        <div class="footer-grid">
            <div class="footer-about">
                <div class="footer-logo">علی اکبری</div>
                <p>مرکز تخصصی خدمات چاپ، کتاب‌فروشی، لوازم تحریر و آموزش دیجیتال در کابل با بیش از ۲۰ سال تجربه.</p>
                <div class="social-links">
                    <a href="#"><i class="bi bi-facebook"></i></a>
                    <a href="#"><i class="bi bi-instagram"></i></a>
                    <a href="#"><i class="bi bi-twitter"></i></a>
                    <a href="#"><i class="bi bi-telegram"></i></a>
                </div>
            </div>
            
            <div>
                <h4 class="footer-title">خدمات</h4>
                <ul class="footer-links">
                    <li><a href="{{ '/pages/school-books' | relative_url }}">کتاب‌های درسی</a></li>
                    <li><a href="{{ '/pages/copy-print-scan' | relative_url }}">پرینت و کپی</a></li>
                    <li><a href="{{ '/pages/writting-tools' | relative_url }}">لوازم تحریر</a></li>
                    <li><a href="{{ '/pages/professional-photos' | relative_url }}">عکاسی</a></li>
                    <li><a href="{{ '/pages/computer-lessons' | relative_url }}">آموزش کامپیوتر</a></li>
                </ul>
            </div>
            
            <div>
                <h4 class="footer-title">لینک‌های سریع</h4>
                <ul class="footer-links">
                    <li><a href="#services">خدمات</a></li>
                    <li><a href="#why-us">چرا ما؟</a></li>
                    <li><a href="{{ '/contact/' | relative_url }}">تماس با ما</a></li>
                </ul>
            </div>
            
            <div>
                <h4 class="footer-title">اطلاعات تماس</h4>
                <ul class="footer-contact">
                    <li><i class="bi bi-telephone"></i> ۰۷۸۱۸۲۱۸۳۸</li>
                    <li><i class="bi bi-whatsapp"></i> ۰۷۸۱۸۲۱۸۳۸</li>
                    <li><i class="bi bi-envelope"></i> info@aliakbari.af</li>
                    <li><i class="bi bi-geo-alt"></i> کابل، شهرک ۱۲ امام</li>
                </ul>
            </div>
        </div>
        
        <div class="footer-bottom">
            <p>تمامی حقوق برای فروشگاه علی اکبری محفوظ است - ۱۴۰۵</p>
        </div>
    </div>
</footer>