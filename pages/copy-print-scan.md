---
layout: page
title: "پرینت، کپی و اسکن | فروشگاه علی اکبری - کابل"
description: "کپی، پرینت و اسکن اسناد با کیفیت عالی و دقت بالا در فروشگاه علی اکبری کابل"
keywords: "پرینت, کپی, اسکن, خدمات دیجیتال, چاپ اسناد, کابل, علی اکبری"
breadcrumb:
  - title: "مطبعه"
    link: "/print"
---

<style>
/* ===== CSS Variables ===== */
:root {
    --primary-old: #0ea5e9;
    --primary-dark-old: #0284c7;
    --primary-light-old: #38bdf8;
    --secondary-old: #3b82f6;
    --accent-old: #8b5cf6;
    --dark-old: #1e293b;
    --light-old: #f8fafc;
    --gray-old: #64748b;
    --gray-light-old: #e2e8f0;
    --success-old: #10b981;
    --shadow-old: 0 4px 20px rgba(0, 0, 0, 0.08);
    --shadow-lg-old: 0 10px 40px rgba(14, 165, 233, 0.15);
    --shadow-hover: 0 20px 50px rgba(14, 165, 233, 0.25);
    --radius-old: 18px;
    --transition-old: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
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
    background: radial-gradient(circle, rgba(14, 165, 233, 0.1) 0%, transparent 70%);
    z-index: -1;
}

.page-title {
    font-size: 3.2rem;
    color: var(--primary-dark-old);
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
    background: linear-gradient(90deg, var(--primary-old), var(--secondary-old));
    border-radius: 3px;
}

.service-badge {
    display: inline-block;
    background: linear-gradient(135deg, var(--primary-old), var(--secondary-old));
    color: white;
    padding: 0.8rem 2rem;
    border-radius: 50px;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 1rem 0 2rem;
    box-shadow: 0 10px 25px rgba(14, 165, 233, 0.3);
    border: 3px solid white;
}

.page-description {
    font-size: 1.3rem;
    color: var(--dark-old);
    line-height: 2;
    max-width: 1000px;
    margin: 3rem auto 0;
    padding: 3rem;
    background: white;
    border-radius: var(--radius-old);
    box-shadow: var(--shadow-old);
    border: 2px solid rgba(14, 165, 233, 0.1);
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
    background: linear-gradient(90deg, var(--primary-old), var(--secondary-old));
}

.page-description strong {
    color: var(--primary-old);
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
    background: rgba(14, 165, 233, 0.2);
    z-index: -1;
    border-radius: 2px;
}

/* بخش خدمات */
.services-section {
    margin: 6rem 0;
}

.section-title {
    text-align: center;
    margin-bottom: 4rem;
    position: relative;
}

.section-title h2 {
    font-size: 2.5rem;
    color: var(--primary-dark-old);
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
    background: linear-gradient(90deg, var(--primary-old), var(--accent-old));
    border-radius: 2px;
}

.section-title p {
    color: var(--gray-old);
    font-size: 1.2rem;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.8;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2.5rem;
    margin-top: 3rem;
}

.service-card {
    background: white;
    padding: 3rem;
    border-radius: var(--radius-old);
    box-shadow: var(--shadow-old);
    text-align: center;
    transition: var(--transition-old);
    border: 2px solid transparent;
    position: relative;
    overflow: hidden;
}

.service-card::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, var(--primary-old), var(--secondary-old));
    transform: translateX(-100%);
    transition: transform 0.6s ease;
}

.service-card:hover::before {
    transform: translateX(0);
}

.service-card:hover {
    transform: translateY(-15px);
    box-shadow: var(--shadow-hover);
    border-color: var(--primary-light-old);
}

.service-icon {
    width: 90px;
    height: 90px;
    background: linear-gradient(135deg, var(--primary-old), var(--accent-old));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 2rem;
    color: white;
    font-size: 2.2rem;
    box-shadow: 0 10px 25px rgba(14, 165, 233, 0.3);
    transition: var(--transition-old);
}

.service-card:hover .service-icon {
    transform: scale(1.1) rotate(5deg);
}

.service-title {
    font-size: 1.8rem;
    color: var(--primary-dark-old);
    margin-bottom: 1.5rem;
    font-weight: 800;
}

.service-description {
    color: var(--gray-old);
    line-height: 1.7;
    font-size: 1.1rem;
    margin-bottom: 2rem;
}

.service-features {
    text-align: right;
    padding-right: 1rem;
}

.feature-item {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 0.8rem;
    color: var(--dark-old);
    font-size: 1rem;
}

.feature-item i {
    color: var(--success-old);
    font-size: 0.9rem;
}

/* بخش ویژگی‌های کلیدی */
.features-section {
    background: linear-gradient(135deg, rgba(14, 165, 233, 0.05), rgba(59, 130, 246, 0.05));
    padding: 5rem;
    border-radius: var(--radius-old);
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
    border-radius: var(--radius-old);
    box-shadow: var(--shadow-old);
    text-align: center;
    transition: var(--transition-old);
    border: 2px solid transparent;
}

.feature-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-hover);
    border-color: var(--primary-light-old);
}

.feature-icon {
    width: 70px;
    height: 70px;
    background: linear-gradient(135deg, var(--primary-old), var(--accent-old));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    color: white;
    font-size: 1.8rem;
    box-shadow: 0 10px 20px rgba(14, 165, 233, 0.3);
}

.feature-title {
    font-size: 1.4rem;
    color: var(--primary-dark-old);
    margin-bottom: 1rem;
    font-weight: 700;
}

.feature-description {
    color: var(--gray-old);
    line-height: 1.6;
}

/* بخش فرمت‌های پشتیبانی شده */
.formats-section {
    margin: 6rem 0;
}

.formats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.format-item {
    text-align: center;
    padding: 2rem;
    background: white;
    border-radius: var(--radius-old);
    box-shadow: var(--shadow-old);
    transition: var(--transition-old);
    border: 2px solid transparent;
}

.format-item:hover {
    transform: translateY(-10px);
    border-color: var(--primary-old);
    box-shadow: var(--shadow-hover);
}

.format-icon {
    font-size: 3rem;
    color: var(--primary-old);
    margin-bottom: 1rem;
}

.format-name {
    font-size: 1.3rem;
    color: var(--primary-dark-old);
    font-weight: 700;
    margin-bottom: 0.5rem;
}

.format-desc {
    color: var(--gray-old);
    font-size: 0.9rem;
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


/* بخش اطلاعات تماس */
.contact-info-section {
    background: white;
    padding: 5rem;
    border-radius: var(--radius-old);
    box-shadow: var(--shadow-lg-old);
    margin: 6rem 0;
    position: relative;
    overflow: hidden;
    border: 2px solid rgba(14, 165, 233, 0.1);
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
    background: linear-gradient(135deg, rgba(14, 165, 233, 0.05), rgba(59, 130, 246, 0.05));
    border-radius: var(--radius-old);
    transition: var(--transition-old);
    border: 2px solid transparent;
}

.method-card:hover {
    transform: translateY(-10px);
    border-color: var(--primary-old);
    box-shadow: var(--shadow-hover);
}

.method-icon {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    color: var(--primary-old);
}

.method-title {
    font-size: 1.5rem;
    color: var(--primary-dark-old);
    margin-bottom: 1rem;
    font-weight: 700;
}

.method-description {
    color: var(--gray-old);
    margin-bottom: 2rem;
    line-height: 1.7;
}

.method-btn {
    display: inline-block;
    padding: 1rem 2rem;
    background: var(--primary-old);
    color: white;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 600;
    transition: var(--transition-old);
    border: 2px solid var(--primary-old);
}

.method-btn:hover {
    background: white;
    color: var(--primary-old);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(14, 165, 233, 0.3);
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
    background: linear-gradient(135deg, var(--primary-dark-old), var(--secondary-old));
    color: white;
    padding: 5rem 2rem;
    border-radius: var(--radius-old);
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
    transition: var(--transition-old);
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
    color: var(--primary-dark-old);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.btn-primary:hover {
    background: var(--light-old);
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
        font-size: 1.3rem;
        padding: 0.6rem 1.5rem;
    }
    
    .services-grid {
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
    
    .service-card {
        padding: 2rem;
    }
    
    .formats-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
    }
    
    .contact-methods {
        grid-template-columns: 1fr;
        gap: 2rem;
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
    
    .service-card {
        padding: 1.5rem;
    }
    
    .service-title {
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
    
    .formats-grid {
        grid-template-columns: 1fr;
    }
}
</style>

<!-- بخش هیرو -->
<section class="page-hero">
    <h1 class="page-title">پرینت، کپی و اسکن</h1>
    <div class="service-badge">خدمات دیجیتالی با کیفیت عالی</div>
    <div class="page-description">
        <p>
            کپی، پرینت و اسکن اسناد به‌صورت دقیق و با کیفیت ارائه می‌شود. تمامی عملیات با رعایت استانداردهای فنی و دقت در جزئیات انجام گرفته و امکان پردازش انواع مدارک دیجیتال و چاپی فراهم است.
            <br><br>
            <strong>سرعت، وضوح و صحت</strong> در انجام هر مرحله از خدمات مورد توجه قرار دارد تا نیازهای اداری، آموزشی و شخصی برآورده شود. بهره‌گیری از فناوری‌های به‌روز و روش‌های بهینه، تجربه‌ای مطمئن و راحت در اختیار کاربران قرار می‌دهد و اطمینان حاصل می‌شود که هر سند با نهایت دقت و کیفیت تحویل داده شود.
        </p>
    </div>
</section>

<!-- بخش خدمات اصلی -->
<section class="services-section">
    <div class="section-title">
        <h2>خدمات اصلی ما</h2>
        <p>مجموعه کامل خدمات دیجیتال با استانداردهای جهانی</p>
    </div>
    
    <div class="services-grid">
        <div class="service-card">
            <div class="service-icon">
                <i class="fas fa-copy"></i>
            </div>
            <h3 class="service-title">خدمات کپی</h3>
            <p class="service-description">
                کپی با کیفیت بالا از تمامی اسناد و مدارک با استفاده از دستگاه‌های پیشرفته
            </p>
            <div class="service-features">
                <div class="feature-item">
                    <i class="fas fa-check-circle"></i>
                    <span>کپی رنگی و سیاه‌وسفید</span>
                </div>
                <div class="feature-item">
                    <i class="fas fa-check-circle"></i>
                    <span>سایزهای مختلف (A4, A3, A5)</span>
                </div>
                <div class="feature-item">
                    <i class="fas fa-check-circle"></i>
                    <span>کپی دو رو با دقت بالا</span>
                </div>
                <div class="feature-item">
                    <i class="fas fa-check-circle"></i>
                    <span>کپی از کتاب و اوراق صحافی شده</span>
                </div>
            </div>
        </div>
        
        <div class="service-card">
            <div class="service-icon">
                <i class="fas fa-print"></i>
            </div>
            <h3 class="service-title">خدمات پرینت</h3>
            <p class="service-description">
                پرینت با کیفیت عالی از فایل‌های دیجیتال با رزولوشن بالا و رنگ‌های دقیق
            </p>
            <div class="service-features">
                <div class="feature-item">
                    <i class="fas fa-check-circle"></i>
                    <span>پرینت رنگی لیزری</span>
                </div>
                <div class="feature-item">
                    <i class="fas fa-check-circle"></i>
                    <span>پرینت عکس با کیفیت</span>
                </div>
                <div class="feature-item">
                    <i class="fas fa-check-circle"></i>
                    <span>پرینت اسناد اداری</span>
                </div>
                <div class="feature-item">
                    <i class="fas fa-check-circle"></i>
                    <span>پرینت پایان‌نامه و مقالات</span>
                </div>
            </div>
        </div>
        
        <div class="service-card">
            <div class="service-icon">
                <i class="fas fa-scanner"></i>
            </div>
            <h3 class="service-title">خدمات اسکن</h3>
            <p class="service-description">
                اسکن با وضوح بالا و کیفیت عالی برای دیجیتالی کردن اسناد و مدارک
            </p>
            <div class="service-features">
                <div class="feature-item">
                    <i class="fas fa-check-circle"></i>
                    <span>اسکن رنگی و سیاه‌وسفید</span>
                </div>
                <div class="feature-item">
                    <i class="fas fa-check-circle"></i>
                    <span>اسکن با رزولوشن قابل تنظیم</span>
                </div>
                <div class="feature-item">
                    <i class="fas fa-check-circle"></i>
                    <span>اسکن کتاب و مجلات</span>
                </div>
                <div class="feature-item">
                    <i class="fas fa-check-circle"></i>
                    <span>ذخیره در فرمت‌های مختلف</span>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- بخش ویژگی‌های کلیدی -->
<section class="features-section">
    <div class="section-title">
        <h2>ویژگی‌های کلیدی خدمات ما</h2>
        <p>چرا خدمات دیجیتال ما بهترین انتخاب است؟</p>
    </div>
    
    <div class="features-grid">
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-tachometer-alt"></i>
            </div>
            <h3 class="feature-title">سرعت بالا</h3>
            <p class="feature-description">انجام خدمات در کمترین زمان ممکن با حفظ کیفیت</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-award"></i>
            </div>
            <h3 class="feature-title">کیفیت عالی</h3>
            <p class="feature-description">استفاده از دستگاه‌های پیشرفته و مواد باکیفیت</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-shield-alt"></i>
            </div>
            <h3 class="feature-title">امنیت اطلاعات</h3>
            <p class="feature-description">حفظ محرمانگی اسناد و حذف فایل‌ها پس از انجام کار</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-handshake"></i>
            </div>
            <h3 class="feature-title">مشاوره تخصصی</h3>
            <p class="feature-description">راهنمایی و مشاوره برای انتخاب بهترین گزینه</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-money-bill-wave"></i>
            </div>
            <h3 class="feature-title">قیمت مناسب</h3>
            <p class="feature-description">تعرفه‌های منصفانه و رقابتی</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-headset"></i>
            </div>
            <h3 class="feature-title">پشتیبانی کامل</h3>
            <p class="feature-description">پشتیبانی قبل، حین و بعد از انجام خدمات</p>
        </div>
    </div>
</section>

<!-- بخش فرمت‌های پشتیبانی شده -->
<section class="formats-section">
    <div class="section-title">
        <h2>فرمت‌های پشتیبانی شده</h2>
        <p>پشتیبانی از انواع فرمت‌های فایل برای راحتی شما</p>
    </div>
    
    <div class="formats-grid">
        <div class="format-item">
            <div class="format-icon">
                <i class="fas fa-file-pdf"></i>
            </div>
            <div class="format-name">PDF</div>
            <div class="format-desc">متداول‌ترین فرمت اسناد</div>
        </div>
        
        <div class="format-item">
            <div class="format-icon">
                <i class="fas fa-file-word"></i>
            </div>
            <div class="format-name">DOC/DOCX</div>
            <div class="format-desc">فایل‌های ورد مایکروسافت</div>
        </div>
        
        <div class="format-item">
            <div class="format-icon">
                <i class="fas fa-file-excel"></i>
            </div>
            <div class="format-name">XLS/XLSX</div>
            <div class="format-desc">فایل‌های اکسل</div>
        </div>
        
        <div class="format-item">
            <div class="format-icon">
                <i class="fas fa-file-powerpoint"></i>
            </div>
            <div class="format-name">PPT/PPTX</div>
            <div class="format-desc">فایل‌های پاورپوینت</div>
        </div>
        
        <div class="format-item">
            <div class="format-icon">
                <i class="fas fa-image"></i>
            </div>
            <div class="format-name">JPG/PNG</div>
            <div class="format-desc">فایل‌های تصویری</div>
        </div>
        
        <div class="format-item">
            <div class="format-icon">
                <i class="fas fa-file-alt"></i>
            </div>
            <div class="format-name">TXT</div>
            <div class="format-desc">فایل‌های متنی ساده</div>
        </div>
    </div>
</section>

<section class="gallery-section">
    <div class="section-title">
        <h2>تجهیزات چاپ و کپی حرفه‌ای</h2>
        <p>مجموعه‌ای از دستگاه‌های تخصصی چاپ و اسکن برای ارائه خدمات دقیق، سریع و حرفه‌ای.</p>
    </div>
    
    <div class="gallery-grid">
        <a href="https://ali-akbari-af.github.io/assets/images/copy-print-scan/l1455.jpg" class="gallery-item" data-lightbox="gallery" data-title="پرینتر L1455">
            <img src="https://ali-akbari-af.github.io/assets/images/copy-print-scan/l1455.jpg" alt="پرینتر حرفه ای L1455" class="gallery-img">
            <div class="gallery-overlay">
                <h4 class="gallery-title">پرینتر Epson L1455</h4>
                <p class="gallery-description">Epson L1455؛ کیفیت ممتاز، عملکرد قابل اعتماد.</p>
            </div>
        </a>
        
        <a href="https://ali-akbari-af.github.io/assets/images/copy-print-scan/l850.jpg" class="gallery-item" data-lightbox="gallery" data-title="پرینتر Epson L850">
            <img src="https://ali-akbari-af.github.io/assets/images/copy-print-scan/l850.jpg" alt="پرینتر Epson L850" class="gallery-img">
            <div class="gallery-overlay">
                <h4 class="gallery-title">پرینتر Epson L850</h4>
                <p class="gallery-description">چاپ و اسکن با کیفیت بالا و جوهر اقتصادی</p>
            </div>
        </a>
        
        <a href="https://ali-akbari-af.github.io/assets/images/copy-print-scan/l1455-scanner.jpg" class="gallery-item" data-lightbox="gallery" data-title="اسکنر l1455">
            <img src="https://ali-akbari-af.github.io/assets/images/copy-print-scan/l1455-scanner.jpg" alt="اسکنر حرفه ای l1455" class="gallery-img">
            <div class="gallery-overlay">
                <h4 class="gallery-title">اسکنر Epson L1455</h4>
                <p class="gallery-description">اسکن با کیفیت و حرفه ای سایز های بزرگ</p>
            </div>
        </a>
        
        <a href="https://ali-akbari-af.github.io/assets/copy-print-scan/l850-scanner.jpg" class="gallery-item" data-lightbox="gallery" data-title="اسکنر l850">
            <img src="https://ali-akbari-af.github.io/assets/images/copy-print-scan/l850-scanner.jpg" alt="اسکنر حرفه ای L850" class="gallery-img">
            <div class="gallery-overlay">
                <h4 class="gallery-title">اسکنر Epson L850</h4>
                <p class="gallery-description">اسکن با کیفیت و رنگ های زنده</p>
            </div>
        </a>
    </div>
</section>

<!-- بخش اطلاعات تماس -->
<section class="contact-info-section">
    <div class="section-title">
        <h2>روش سفارش خدمات</h2>
        <p>برای استفاده از خدمات پرینت، کپی و اسکن، یکی از روش‌های زیر را انتخاب کنید</p>
    </div>
    
    <div class="contact-methods">
        <div class="method-card">
            <div class="method-icon">🏪</div>
            <h3 class="method-title">مراجعه حضوری</h3>
            <p class="method-description">به فروشگاه ما مراجعه کنید، اسناد خود را تحویل دهید و خدمات را در محل دریافت کنید.</p>
            <a href="#footer" class="method-btn">
                آدرس فروشگاه
            </a>
        </div>
        
        <div class="method-card">
            <div class="method-icon">📞</div>
            <h3 class="method-title">تماس تلفنی</h3>
            <p class="method-description">با ما تماس بگیرید، نیاز خود را توضیح دهید و راهنمایی لازم را دریافت کنید.</p>
            <a href="tel:{{ site.phone_primary }}" class="method-btn">
                تماس: {{ site.phone_primary }}
            </a>
        </div>
        
        <div class="method-card">
            <div class="method-icon">📱</div>
            <h3 class="method-title">ارسال فایل</h3>
            <p class="method-description">فایل‌های خود را از طریق واتس‌اپ ارسال کنید و خدمات را سفارش دهید.</p>
            <a href="https://wa.me/93781821838" class="method-btn whatsapp-btn" target="_blank">
                <i class="fab fa-whatsapp"></i>
                ارسال فایل در واتس‌اپ
            </a>
        </div>
    </div>
</section>

<!-- بخش تماس -->
<section class="contact-section">
    <h2 class="contact-title">آماده ارائه خدمات با کیفیت</h2>
    <p class="contact-description">
        برای سفارش خدمات پرینت، کپی یا اسکن با کیفیت عالی و قیمت مناسب
        <br>
        با ما در تماس باشید یا به فروشگاه مراجعه کنید
    </p>
    
    <div class="contact-buttons">
        <a href="tel:{{ site.phone_primary }}" class="btn btn-primary">
            <i class="fas fa-phone"></i>
            تماس تلفنی
        </a>
        
        <a href="https://wa.me/93781821838?text=سلام، می‌خواهم خدمات پرینت/کپی/اسکن سفارش دهم" 
           class="btn btn-secondary" target="_blank">
            <i class="fab fa-whatsapp"></i>
            ارتباط در واتس‌اپ
        </a>
        
        <a href="#footer" class="btn btn-secondary">
            <i class="fas fa-map-marker-alt"></i>
            مراجعه حضوری
        </a>
    </div>
    
    <p style="margin-top: 2rem; opacity: 0.9; font-size: 1.1rem;">
        ⚡ خدمات سریع | 🎯 کیفیت عالی | 💰 قیمت منصفانه
    </p>
</section>
