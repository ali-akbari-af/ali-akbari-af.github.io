---
layout: page
title: "کاپی استخوانی (PVC Card) | فروشگاه علی اکبری - کابل"
description: "کاپی استخوانی (PVC Card) با کیفیت بالا، چاپ با وضوح و دقت کامل، دوام و ماندگاری بالا در فروشگاه علی اکبری کابل"
keywords: "کاپی استخوانی, PVC Card, کارت PVC, کارت مکاتب, کارت تذکره, کارت اداری, چاپ کارت, کابل, علی اکبری"
breadcrumb:
  - title: "مطبعه"
    link: "/print"
---

<style>
/* ===== متغیرهای رنگی جدید و شادتر ===== */
:root {
    /* پالت رنگی شاد و جذاب برای PVC Card */
    --primary: #4361ee; /* آبی آسمانی جذاب */
    --primary-dark: #3a56d4; /* آبی تیره‌تر */
    --primary-light: #4895ef; /* آبی روشن */
    --secondary: #f72585; /* صورتی پرانرژی */
    --accent: #4cc9f0; /* فیروزه‌ای درخشان */
    --accent-light: #b8f2e6; /* سبز آبی روشن */
    --success: #38b000; /* سبز زمردی */
    --dark: #1a1a2e; /* آبی مشکی عمیق */
    --dark-light: #16213e; /* آبی تیره */
    --light: #f8f9fa; /* سفید مایل به خاکستری */
    --gray: #495057; /* خاکستری */
    --gray-light: #e9ecef; /* خاکستری روشن */
    --gray-lighter: #f8f9fa; /* خاکستری خیلی روشن */
    --shadow-hover: 0 20px 50px rgba(67, 97, 238, 0.3); /* سایه با رنگ اصلی */
}

/* ===== محتوای صفحه با پالت جدید ===== */
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
    overflow: hidden;
}

.page-hero::before {
    content: '';
    position: absolute;
    top: -50px;
    right: -50px;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(67, 97, 238, 0.15) 0%, transparent 70%);
    z-index: -1;
}

.page-hero::after {
    content: '';
    position: absolute;
    bottom: -100px;
    left: -100px;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(247, 37, 133, 0.1) 0%, transparent 70%);
    z-index: -1;
}

.page-title {
    font-size: 3.2rem;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    margin-bottom: 1.5rem;
    font-weight: 900;
    line-height: 1.2;
    position: relative;
    display: inline-block;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    letter-spacing: -0.5px;
}

.page-title::after {
    content: '';
    position: absolute;
    bottom: -15px;
    right: 50%;
    transform: translateX(50%);
    width: 180px;
    height: 6px;
    background: linear-gradient(90deg, var(--primary), var(--accent), var(--secondary));
    border-radius: 3px;
    box-shadow: 0 4px 12px rgba(67, 97, 238, 0.4);
}

.page-description {
    font-size: 1.3rem;
    color: var(--dark-light);
    line-height: 1.9;
    max-width: 1000px;
    margin: 3rem auto 0;
    padding: 3rem;
    background: white;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
    border: 3px solid rgba(67, 97, 238, 0.15);
    position: relative;
    overflow: hidden;
    z-index: 1;
}

.page-description::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, var(--secondary), var(--accent), var(--primary));
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.page-description::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 150px;
    height: 150px;
    background: radial-gradient(circle, rgba(76, 201, 240, 0.1) 0%, transparent 70%);
    z-index: -1;
}

.page-description strong {
    color: var(--primary);
    font-weight: 800;
    position: relative;
    padding: 0 4px;
    background: linear-gradient(120deg, rgba(67, 97, 238, 0.15), transparent);
    border-radius: 4px;
}

/* بخش گالری عکس */

/* بخش ویژگی‌ها */
.features-section {
    background: linear-gradient(135deg, rgba(67, 97, 238, 0.05), rgba(247, 37, 133, 0.05));
    padding: 5rem;
    border-radius: 25px;
    margin: 6rem 0;
    position: relative;
    overflow: hidden;
}

.features-section::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(67, 97, 238, 0.1) 0%, transparent 70%);
}

.features-section::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(247, 37, 133, 0.1) 0%, transparent 70%);
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
    border-radius: 20px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
    text-align: center;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: 2px solid transparent;
    position: relative;
    overflow: hidden;
}

.feature-card::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(67, 97, 238, 0.03), rgba(247, 37, 133, 0.03));
}

.feature-card:hover {
    transform: translateY(-15px);
    box-shadow: var(--shadow-hover);
    border-color: var(--primary-light);
}

.feature-icon {
    width: 75px;
    height: 75px;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    color: white;
    font-size: 2rem;
    box-shadow: 0 15px 30px rgba(67, 97, 238, 0.4);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
    overflow: hidden;
}

.feature-icon::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), transparent);
}

.feature-card:hover .feature-icon {
    transform: scale(1.15) rotate(5deg);
    box-shadow: 0 20px 40px rgba(67, 97, 238, 0.6);
}

.feature-title {
    font-size: 1.4rem;
    color: var(--primary-dark);
    margin-bottom: 1rem;
    font-weight: 700;
    position: relative;
    display: inline-block;
}

.feature-title::after {
    content: '';
    position: absolute;
    bottom: -5px;
    right: 0;
    width: 0;
    height: 2px;
    background: var(--accent);
    transition: width 0.3s ease;
}

.feature-card:hover .feature-title::after {
    width: 100%;
}

.feature-description {
    color: var(--dark-light);
    line-height: 1.6;
    font-weight: 500;
}

/* بخش کاربردها */
.applications-section {
    margin: 6rem 0;
}

.applications-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2.5rem;
    margin-top: 3rem;
}

.application-card {
    background: white;
    padding: 2.5rem;
    border-radius: 20px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
    text-align: center;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: 2px solid transparent;
    position: relative;
    overflow: hidden;
}

.application-card::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(67, 97, 238, 0.05), rgba(247, 37, 133, 0.05));
}

.application-card::after {
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

.application-card:hover::after {
    transform: translateX(0);
}

.application-card:hover {
    transform: translateY(-15px);
    box-shadow: var(--shadow-hover);
    border-color: var(--primary-light);
}

.application-icon {
    width: 85px;
    height: 85px;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.8rem;
    color: white;
    font-size: 2.2rem;
    box-shadow: 0 15px 30px rgba(67, 97, 238, 0.4);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
    overflow: hidden;
}

.application-icon::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), transparent);
}

.application-card:hover .application-icon {
    transform: scale(1.15) rotate(-5deg);
    box-shadow: 0 20px 40px rgba(67, 97, 238, 0.6);
}

.application-title {
    font-size: 1.6rem;
    color: var(--primary-dark);
    margin-bottom: 1.2rem;
    font-weight: 800;
    position: relative;
    display: inline-block;
}

.application-title::after {
    content: '';
    position: absolute;
    bottom: -5px;
    right: 0;
    width: 0;
    height: 2px;
    background: var(--accent);
    transition: width 0.3s ease;
}

.application-card:hover .application-title::after {
    width: 100%;
}

.application-description {
    color: var(--dark-light);
    line-height: 1.7;
    font-size: 1.05rem;
    font-weight: 500;
}

/* بخش اطلاعات تماس */
.contact-info-section {
    background: white;
    padding: 5rem;
    border-radius: 25px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
    margin: 6rem 0;
    position: relative;
    overflow: hidden;
    border: 3px solid rgba(67, 97, 238, 0.15);
}

.contact-info-section::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, var(--secondary), var(--accent), var(--primary));
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
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
    background: linear-gradient(135deg, rgba(67, 97, 238, 0.05), rgba(247, 37, 133, 0.05));
    border-radius: 20px;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: 2px solid transparent;
    position: relative;
    overflow: hidden;
}

.method-card::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), transparent);
    z-index: 0;
}

.method-card > * {
    position: relative;
    z-index: 1;
}

.method-card:hover {
    transform: translateY(-15px);
    border-color: var(--primary);
    box-shadow: var(--shadow-hover);
}

.method-icon {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    color: var(--primary);
    filter: drop-shadow(0 4px 8px rgba(67, 97, 238, 0.3));
    transition: all 0.4s ease;
}

.method-card:hover .method-icon {
    transform: scale(1.1);
    filter: drop-shadow(0 6px 12px rgba(67, 97, 238, 0.4));
}

.method-title {
    font-size: 1.5rem;
    color: var(--primary-dark);
    margin-bottom: 1rem;
    font-weight: 700;
}

.method-description {
    color: var(--dark-light);
    margin-bottom: 2rem;
    line-height: 1.7;
    font-weight: 500;
}

.method-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    padding: 1rem 2.5rem;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    color: white;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 700;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: 3px solid transparent;
    position: relative;
    overflow: hidden;
    min-width: 200px;
}

.method-btn::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), transparent);
}

.method-btn:hover {
    background: white;
    color: var(--primary);
    border-color: var(--primary);
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 15px 30px rgba(67, 97, 238, 0.4);
}

.whatsapp-btn {
    background: linear-gradient(135deg, #25D366, #128C7E);
}

.whatsapp-btn:hover {
    background: white;
    color: #25D366;
    border-color: #25D366;
}

/* بخش تماس */
.contact-section {
    background: linear-gradient(135deg, var(--primary-dark), var(--secondary));
    color: white;
    padding: 5rem 2rem;
    border-radius: 25px;
    margin: 6rem 0;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.contact-section::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
}

.contact-title {
    font-size: 2.5rem;
    margin-bottom: 1.8rem;
    font-weight: 800;
    position: relative;
    z-index: 1;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
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
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
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
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: none;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    min-width: 200px;
}

.btn::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), transparent);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
}

.btn:hover::before {
    transform: translateX(0);
}

.btn-primary {
    background: white;
    color: var(--primary-dark);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}

.btn-primary:hover {
    background: var(--light);
    transform: translateY(-8px) scale(1.05);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
}

.btn-secondary {
    background: rgba(255, 255, 255, 0.15);
    color: white;
    border: 3px solid rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(10px);
}

.btn-secondary:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-8px) scale(1.05);
    border-color: rgba(255, 255, 255, 0.7);
    box-shadow: 0 20px 50px rgba(255, 255, 255, 0.2);
}

/* Responsive Adjustments */
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
    
    .gallery-grid,
    .applications-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .features-grid,
    .contact-methods {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .feature-card,
    .application-card {
        padding: 2rem;
    }
    
    .contact-info-section {
        padding: 2rem;
    }
    
    .contact-buttons {
        flex-direction: column;
        align-items: center;
    }
    
    .btn, .method-btn {
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
    
    .feature-card,
    .application-card {
        padding: 1.5rem;
    }
    
    .application-title {
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
    
    .gallery-item img {
        height: 220px;
    }
}

/* Lightbox Customizations */
.lightbox {
    direction: ltr;
}

.lb-nav a.lb-prev,
.lb-nav a.lb-next {
    opacity: 1;
    background: rgba(67, 97, 238, 0.8);
    border-radius: 50%;
    width: 50px;
    height: 50px;
}

.lb-nav a.lb-prev:hover,
.lb-nav a.lb-next:hover {
    background: rgba(67, 97, 238, 1);
}

.lb-data .lb-caption {
    font-size: 1.1rem;
    font-weight: 600;
    color: #333;
}
</style>

<!-- بخش هیرو -->
<section class="page-hero">
    <h1 class="page-title">کاپی استخوانی (PVC Card)</h1>
    <div class="page-description">
        <p>
            <strong>کاپی استخوانی (PVC Card)</strong> با کیفیت بالا تهیه می‌شود. چاپ روی کارت‌ها با وضوح و دقت کامل انجام شده و خطوط و نگارش آن شفاف و پایدار است. استفاده از مواد باکیفیت و ابزار تخصصی، دوام و ماندگاری کارت را تضمین می‌کند. این خدمات مناسب نیازهای اداری، کارت مکاتب و تذکره بوده و تجربه‌ای مطمئن، دقیق و حرفه‌ای برای کاربران فراهم می‌آورد.
        </p>
    </div>
</section>

<!-- بخش گالری عکس -->

<!-- بخش ویژگی‌ها -->
<section class="features-section">
    <div class="section-title">
        <h2>ویژگی‌های کاپی استخوانی ما</h2>
        <p>کیفیت و دقت در تمام مراحل تولید کارت PVC</p>
    </div>
    
    <div class="features-grid">
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-paint-brush"></i>
            </div>
            <h3 class="feature-title">چاپ با کیفیت بالا</h3>
            <p class="feature-description">چاپ روی کارت‌ها با وضوح و دقت کامل انجام شده و خطوط و نگارش آن شفاف و پایدار است.</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-shield-alt"></i>
            </div>
            <h3 class="feature-title">دوام و ماندگاری</h3>
            <p class="feature-description">استفاده از مواد باکیفیت و ابزار تخصصی، دوام و ماندگاری کارت را تضمین می‌کند.</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-tools"></i>
            </div>
            <h3 class="feature-title">ابزار تخصصی</h3>
            <p class="feature-description">استفاده از پیشرفته‌ترین دستگاه‌ها و ابزار تخصصی برای تولید کارت‌های PVC</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-clock"></i>
            </div>
            <h3 class="feature-title">تحویل سریع</h3>
            <p class="feature-description">سفارشات شما در کمترین زمان ممکن و با حفظ کیفیت تولید و تحویل داده می‌شود.</p>
        </div>
    </div>
</section>

<!-- بخش کاربردها -->
<section class="applications-section">
    <div class="section-title">
        <h2>کاربردهای کاپی استخوانی</h2>
        <p>کارت‌های PVC برای مصارف مختلف و نیازهای متنوع</p>
    </div>
    
    <div class="applications-grid">
        <div class="application-card">
            <div class="application-icon">
                <i class="fas fa-building"></i>
            </div>
            <h3 class="application-title">نیازهای اداری</h3>
            <p class="application-description">کارت‌های شناسایی اداری، کارت کارمندی، کارت دسترسی و سایر نیازهای سازمانی</p>
        </div>
        
        <div class="application-card">
            <div class="application-icon">
                <i class="fas fa-graduation-cap"></i>
            </div>
            <h3 class="application-title">کارت مکاتب</h3>
            <p class="application-description">کارت دانش‌آموزی، کارت دانشگاهی و سایر نیازهای آموزشی با طراحی حرفه‌ای</p>
        </div>
        
        <div class="application-card">
            <div class="application-icon">
                <i class="fas fa-id-card"></i>
            </div>
            <h3 class="application-title">کارت تذکره</h3>
            <p class="application-description">کارت شناسایی شخصی با کیفیت بالا و ماندگاری طولانی</p>
        </div>
        
        <div class="application-card">
            <div class="application-icon">
                <i class="fas fa-users"></i>
            </div>
            <h3 class="application-title">کارت عضویت</h3>
            <p class="application-description">کارت عضویت باشگاه‌ها، انجمن‌ها، کتابخانه‌ها و مراکز تفریحی</p>
        </div>
    </div>
</section>

<!-- بخش اطلاعات تماس -->
<section class="contact-info-section">
    <div class="section-title">
        <h2>روش سفارش کاپی استخوانی</h2>
        <p>برای سفارش کارت PVC، یکی از روش‌های زیر را انتخاب کنید</p>
    </div>
    
    <div class="contact-methods">
        <div class="method-card">
            <div class="method-icon">📞</div>
            <h3 class="method-title">تماس تلفنی</h3>
            <p class="method-description">با ما تماس بگیرید، نمونه‌ها و قیمت‌ها را دریافت کنید و کارت مورد نظر خود را سفارش دهید.</p>
            <a href="tel:+93781821838" class="method-btn">
                <i class="fas fa-phone"></i>
                تماس: ۰۷۸۱۸۲۱۸۳۸
            </a>
        </div>
        
        <div class="method-card">
            <div class="method-icon">🏪</div>
            <h3 class="method-title">مراجعه حضوری</h3>
            <p class="method-description">به فروشگاه ما مراجعه کنید، نمونه کارها را مشاهده کرده و پس از انتخاب سفارش دهید.</p>
            <a href="#footer" class="method-btn">
                <i class="fas fa-map-marker-alt"></i>
                آدرس فروشگاه
            </a>
        </div>
        
        <div class="method-card">
            <div class="method-icon">📱</div>
            <h3 class="method-title">دریافت از طریق واتس‌اپ</h3>
            <p class="method-description">عکس و اطلاعات مورد نیاز را در واتس‌اپ ارسال کنید و کارت خود را سفارش دهید.</p>
            <a href="https://wa.me/93781821838" class="method-btn whatsapp-btn" target="_blank">
                <i class="fab fa-whatsapp"></i>
                ارتباط در واتس‌اپ
            </a>
        </div>
    </div>
</section>

<!-- بخش تماس -->
<section class="contact-section">
    <h2 class="contact-title">برای سفارش و اطلاعات بیشتر</h2>
    <p class="contact-description">
        با ما تماس بگیرید یا به فروشگاه ما مراجعه کنید
        <br>
        نمونه کارها، قیمت‌ها و اطلاعات تکمیلی را دریافت نمایید
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
    
    <p style="margin-top: 2rem; opacity: 0.95; font-size: 1.1rem; font-weight: 600; text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); color: var(--myself)">
        📍 کابل، ناحیه ۶، شهرک ۱۲ امام | 🕗 ۸ صبح تا ۸ شب
    </p>
</section>

<!-- JavaScript for Lightbox -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.4/js/lightbox.min.js"></script>
<script>
    // تنظیمات Lightbox
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'albumLabel': 'تصویر %1 از %2',
        'positionFromTop': 100,
        'disableScrolling': true,
        'fadeDuration': 300,
        'imageFadeDuration': 300
    });
</script>
