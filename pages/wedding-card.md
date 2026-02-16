---
layout: page
title: "چاپ کارت عروسی | فروشگاه علی اکبری - کابل"
description: "چاپ کارت عروسی با دقت و ظرافت ویژه، کیفیت بالا و طراحی متناسب با شکوه مراسم عروسی در فروشگاه علی اکبری کابل"
keywords: "چاپ کارت عروسی, کارت دعوت عروسی, کارت عروسی, طراحی کارت عروسی, چاپ کارت دعوت, کابل, علی اکبری"
breadcrumb:
  - title: "مطبعه"
    link: "/print"
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
    background: radial-gradient(circle, rgba(214, 51, 132, 0.1) 0%, transparent 70%);
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
    background: linear-gradient(90deg, var(--primary), var(--accent));
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
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    border: 2px solid rgba(214, 51, 132, 0.1);
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
    background: rgba(214, 51, 132, 0.2);
    z-index: -1;
    border-radius: 2px;
}


/* بخش ویژگی‌ها */
.features-section {
    background: linear-gradient(135deg, rgba(214, 51, 132, 0.05), rgba(255, 107, 107, 0.05));
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
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    color: white;
    font-size: 1.8rem;
    box-shadow: 0 10px 20px rgba(214, 51, 132, 0.3);
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

/* بخش مراحل سفارش */
.process-section {
    margin: 6rem 0;
}

.process-steps {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-top: 3rem;
    position: relative;
}

.process-steps::before {
    content: '';
    position: absolute;
    top: 0;
    right: 50%;
    transform: translateX(50%);
    width: 4px;
    height: 100%;
    background: linear-gradient(to bottom, var(--primary), var(--secondary));
    z-index: 0;
}

.process-step {
    display: flex;
    align-items: center;
    gap: 2rem;
    background: white;
    padding: 2.5rem;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    position: relative;
    z-index: 1;
    transition: var(--transition-base);
    border: 2px solid transparent;
}

.process-step:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-hover);
    border-color: var(--primary-light);
}

.step-number {
    width: 70px;
    height: 70px;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.8rem;
    font-weight: 700;
    flex-shrink: 0;
    box-shadow: 0 10px 20px rgba(214, 51, 132, 0.3);
}

.step-content {
    flex: 1;
}

.step-title {
    font-size: 1.6rem;
    color: var(--primary-dark);
    margin-bottom: 1rem;
    font-weight: 800;
}

.step-description {
    color: var(--gray);
    line-height: 1.7;
    font-size: 1.05rem;
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
    border: 2px solid rgba(214, 51, 132, 0.1);
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
    background: linear-gradient(135deg, rgba(214, 51, 132, 0.05), rgba(255, 107, 107, 0.05));
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
    box-shadow: 0 10px 20px rgba(214, 51, 132, 0.3);
}

/* بخش توجه مهم */
.notice-section {
    background: linear-gradient(135deg, #fff9e6, #ffe6e6);
    padding: 3rem;
    border-radius: var(--radius-lg);
    margin: 4rem 0;
    border-right: 5px solid var(--warning);
    border-left: 5px solid var(--warning);
}

.notice-content {
    display: flex;
    align-items: center;
    gap: 2rem;
}

.notice-icon {
    font-size: 3rem;
    color: var(--warning);
    flex-shrink: 0;
}

.notice-text h3 {
    color: var(--primary-dark);
    margin-bottom: 1rem;
}

.notice-text p {
    color: var(--dark);
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 0;
}

/* بخش تماس */
.contact-section {
    background: linear-gradient(135deg, var(--primary-dark), var(--accent));
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
    
    .features-section,
    .contact-info-section {
        padding: 3rem;
    }
    
    .process-steps::before {
        right: 30px;
        transform: none;
    }
    
    .process-step {
        flex-direction: column;
        text-align: center;
        gap: 1.5rem;
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
    
    .gallery-grid {
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
    
    .notice-section {
        padding: 2rem;
    }
    
    .notice-content {
        flex-direction: column;
        text-align: center;
        gap: 1.5rem;
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
    
    .feature-card,
    .process-step {
        padding: 1.5rem;
    }
    
    .step-title {
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
    
    .process-steps::before {
        display: none;
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
    <h1 class="page-title">چاپ کارت عروسی</h1>
    <div class="page-description">
        <p>
            <strong>چاپ کارت عروسی</strong> با دقت و ظرافت ویژه انجام می‌شود. هر کارت با کاغذ و جوهر با کیفیت تولید شده و خطوط و نگارش آن روشن و خواناست. طراحی و چاپ به گونه‌ای است که زیبایی و شکوه مراسم را بازتاب دهد و از استانداردهای حرفه‌ای پیروی کند. هر کارت، نمادی از احترام و ارزش مراسم عروسی بوده و تجربه‌ای دقیق و مطمئن برای زوج‌ها فراهم می‌سازد.
        </p>
    </div>
</section>


<!-- بخش توجه مهم -->
<section class="notice-section">
    <div class="notice-content">
        <div class="notice-icon">
            <i class="fas fa-info-circle"></i>
        </div>
        <div class="notice-text">
            <h3>توجه مهم:</h3>
            <p>این صفحه صرفاً جهت معرفی خدمات ما می‌باشد. سفارش‌ها به صورت حضوری در فروشگاه انجام می‌شود. لطفاً برای دریافت مشاوره، مشاهده نمونه‌های بیشتر و ثبت سفارش، به فروشگاه ما مراجعه فرمایید.</p>
        </div>
    </div>
</section>

<!-- بخش ویژگی‌ها -->
<section class="features-section">
    <div class="section-title">
        <h2>ویژگی‌های کارت عروسی ما</h2>
        <p>کیفیت و ظرافت در تمام مراحل طراحی و چاپ</p>
    </div>
    
    <div class="features-grid">
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-gem"></i>
            </div>
            <h3 class="feature-title">کیفیت مواد اولیه</h3>
            <p class="feature-description">استفاده از کاغذ و جوهر با کیفیت بالا برای ماندگاری و زیبایی کارت</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-pen-nib"></i>
            </div>
            <h3 class="feature-title">طراحی اختصاصی</h3>
            <p class="feature-description">طراحی متناسب با سلیقه شما و بازتاب دهنده زیبایی مراسم عروسی</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-print"></i>
            </div>
            <h3 class="feature-title">چاپ دقیق و شفاف</h3>
            <p class="feature-description">چاپ با دقت بالا و وضوح کامل برای خوانایی عالی متن</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-award"></i>
            </div>
            <h3 class="feature-title">رعایت استانداردها</h3>
            <p class="feature-description">پیروی از استانداردهای حرفه‌ای در تمام مراحل تولید</p>
        </div>
    </div>
</section>

<!-- بخش مراحل سفارش -->
<section class="process-section">
    <div class="section-title">
        <h2>مراحل سفارش کارت عروسی</h2>
        <p>روند ساده و حرفه‌ای از مشاوره تا تحویل نهایی</p>
    </div>
    
    <div class="process-steps">
        <div class="process-step">
            <div class="step-number">۱</div>
            <div class="step-content">
                <h3 class="step-title">مشاوره و انتخاب طرح</h3>
                <p class="step-description">مراجعه به فروشگاه و دریافت مشاوره تخصصی. مشاهده نمونه‌های مختلف و انتخاب طرح مورد نظر با توجه به سلیقه و بودجه شما.</p>
            </div>
        </div>
        
        <div class="process-step">
            <div class="step-number">۲</div>
            <div class="step-content">
                <h3 class="step-title">طراحی و تایید نهایی</h3>
                <p class="step-description">طراحی اولیه کارت با جزئیات درخواستی شما. بررسی و تایید نهایی طرح قبل از شروع فرآیند چاپ.</p>
            </div>
        </div>
        
        <div class="process-step">
            <div class="step-number">۳</div>
            <div class="step-content">
                <h3 class="step-title">چاپ با کیفیت بالا</h3>
                <p class="step-description">چاپ کارت‌ها با استفاده از دستگاه‌های پیشرفته و مواد باکیفیت برای دستیابی به بهترین نتیجه.</p>
            </div>
        </div>
        
        <div class="process-step">
            <div class="step-number">۴</div>
            <div class="step-content">
                <h3 class="step-title">کنترل کیفیت و تحویل</h3>
                <p class="step-description">کنترل نهایی کیفیت هر کارت و بسته‌بندی مناسب. تحویل کارت‌ها در زمان توافقی به شما.</p>
            </div>
        </div>
    </div>
</section>

<!-- بخش اطلاعات تماس -->
<section class="contact-info-section">
    <div class="section-title">
        <h2>روش دریافت مشاوره و سفارش</h2>
        <p>برای مشاوره و ثبت سفارش، به یکی از روش‌های زیر اقدام کنید</p>
    </div>
    
    <div class="contact-methods">
        <div class="method-card">
            <div class="method-icon">📞</div>
            <h3 class="method-title">تماس تلفنی</h3>
            <p class="method-description">با ما تماس بگیرید و زمان مراجعه خود را هماهنگ کنید. مشاوره اولیه را دریافت نمایید.</p>
            <a href="tel:{{ site.phone_primary }}" class="method-btn">
                تماس: {{ site.phone_primary }}
            </a>
        </div>
        
        <div class="method-card">
            <div class="method-icon">🏪</div>
            <h3 class="method-title">مراجعه حضوری</h3>
            <p class="method-description">به فروشگاه ما مراجعه کنید. نمونه‌ها را از نزدیک ببینید و با کارشناسان ما مشورت کنید.</p>
            <a href="#footer" class="method-btn">
                آدرس فروشگاه
            </a>
        </div>
        
        <div class="method-card">
            <div class="method-icon">📱</div>
            <h3 class="method-title">مشاهده نمونه‌ها در واتس‌اپ</h3>
            <p class="method-description">برای مشاهده نمونه‌های بیشتر، در واتس‌اپ با ما در ارتباط باشید.</p>
            <a href="https://wa.me/93781821838?text=سلام%20می‌خواستم%20درباره%20کارت‌های%20عروسی%20مشاهده%20نمونه‌کار%20بکنم" class="method-btn" target="_blank">
                <i class="fab fa-whatsapp"></i>
                ارتباط در واتس‌اپ
            </a>
        </div>
    </div>
</section>

<!-- بخش تماس -->
<section class="contact-section">
    <h2 class="contact-title">برای مشاوره و اطلاعات بیشتر</h2>
    <p class="contact-description">
        با ما تماس بگیرید یا به فروشگاه ما مراجعه کنید
        <br>
        نمونه کارها، قیمت‌ها و اطلاعات تکمیلی را دریافت نمایید
    </p>
    
    <div class="contact-buttons">
        <a href="tel:{{ site.phone_primary }}" class="btn btn-primary">
            <i class="fas fa-phone"></i>
            تماس تلفنی
        </a>
        
        <a href="#footer" class="btn btn-secondary">
            <i class="fas fa-map-marker-alt"></i>
            آدرس فروشگاه
        </a>
        
        <a href="https://wa.me/93781821838" class="btn btn-secondary" target="_blank">
            <i class="fab fa-whatsapp"></i>
            ارتباط در واتس‌اپ
        </a>
    </div>
    
    <p style="margin-top: 2rem; opacity: 0.9; font-size: 1.1rem; color: var(--myself);">
        📍 {{ site.address }} | 🕗 {{ site.work_hours }}
    </p>
</section>
