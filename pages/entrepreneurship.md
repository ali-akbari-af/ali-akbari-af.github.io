---
layout: page
title: "بسته‌های آموزشی کارآفرینی"
description: "بسته جامع آموزش کارآفرینی و مدیریت کسب‌وکار شامل درس‌های کاربردی اساتید ملی و بین‌المللی روی فلش؛ یادگیری در هر زمان و مکان"
keywords: "بسته آموزشی, کارآفرینی, مدیریت کسب‌وکار, استارتاپ, فلش آموزشی, موفقیت کسب‌وکار, بازاریابی, علی اکبری"
breadcrumb:
  - title: "بسته‌های آموزشی"
    link: "/educational-packages/index.html"
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
    background: radial-gradient(circle, rgba(255, 107, 15, 0.1) 0%, transparent 70%);
    z-index: -1;
}

.page-title {
    font-size: 3.2rem;
    color: #d45a00;
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
    background: linear-gradient(90deg, #ff6b0f, #ffb347);
    border-radius: 3px;
}

.service-badge {
    display: inline-block;
    background: linear-gradient(135deg, #ff6b0f, #ffb347);
    color: white;
    padding: 0.8rem 2rem;
    border-radius: 50px;
    font-size: 1.8rem;
    font-weight: 800;
    margin: 1rem 0 2rem;
    box-shadow: 0 10px 25px rgba(255, 107, 15, 0.3);
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
    border: 2px solid rgba(255, 107, 15, 0.1);
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
    background: linear-gradient(90deg, #ff6b0f, #ffb347);
}

.page-description strong {
    color: #ff6b0f;
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
    background: rgba(255, 107, 15, 0.2);
    z-index: -1;
    border-radius: 2px;
}

/* بخش دسته‌بندی */
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
    color: #d45a00;
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
    background: linear-gradient(90deg, #ff6b0f, #4ecdc4);
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
    background: linear-gradient(90deg, #ff6b0f, #ffb347);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
}

.category-card:hover::before {
    transform: translateX(0);
}

.category-card:hover {
    transform: translateY(-15px);
    box-shadow: 0 20px 50px rgba(255, 107, 15, 0.25);
    border-color: #ff6b0f;
}

.category-icon {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, #ff6b0f, #4ecdc4);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.8rem;
    color: white;
    font-size: 2rem;
    box-shadow: 0 10px 25px rgba(255, 107, 15, 0.3);
    transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.category-card:hover .category-icon {
    transform: scale(1.1) rotate(5deg);
}

.category-title {
    font-size: 1.6rem;
    color: #d45a00;
    margin-bottom: 1.2rem;
    font-weight: 800;
}

.category-description {
    color: #6b7280;
    line-height: 1.7;
    font-size: 1.05rem;
}

/* بخش لیست ویژگی‌های آموزشی (مخصوص صفحه کارآفرینی) */
.learning-list-section {
    margin: 5rem 0;
    background: white;
    border-radius: 0.75rem;
    padding: 3rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    border: 2px solid rgba(255, 107, 15, 0.1);
}

.learning-list-title {
    text-align: center;
    font-size: 2rem;
    color: #d45a00;
    margin-bottom: 3rem;
    font-weight: 800;
    position: relative;
}

.learning-list-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    right: 50%;
    transform: translateX(50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #ff6b0f, #ffb347);
    border-radius: 2px;
}

.learning-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.learning-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1.5rem;
    background: linear-gradient(135deg, rgba(255, 107, 15, 0.03), rgba(78, 205, 196, 0.03));
    border-radius: 0.75rem;
    transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
    border: 2px solid transparent;
}

.learning-item:hover {
    transform: translateY(-5px);
    border-color: #ff6b0f;
    box-shadow: 0 10px 25px rgba(255, 107, 15, 0.15);
}

.learning-icon {
    font-size: 2.2rem;
    color: #ff6b0f;
    min-width: 50px;
    text-align: center;
}

.learning-content h4 {
    font-size: 1.3rem;
    color: #d45a00;
    margin-bottom: 0.5rem;
    font-weight: 700;
}

.learning-content p {
    color: #6b7280;
    line-height: 1.6;
    font-size: 1rem;
}

/* بخش گالری - با آیکون‌های جایگزین (بدون نیاز به عکس) */
.gallery-section {
    margin: 6rem 0;
    padding: 3rem 0;
    background: linear-gradient(135deg, rgba(255, 107, 15, 0.03), rgba(255, 179, 71, 0.03));
    border-radius: 0.75rem;
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
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
    aspect-ratio: 1/1;
    background: linear-gradient(135deg, #f8f9fa, #e9ecef);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    text-align: center;
    border: 2px solid transparent;
}

.gallery-item:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 50px rgba(255, 107, 15, 0.25);
    border-color: #ff6b0f;
}

.gallery-icon {
    font-size: 5rem;
    color: #ff6b0f;
    margin-bottom: 1.5rem;
    transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.gallery-item:hover .gallery-icon {
    transform: scale(1.1);
    color: #d45a00;
}

.gallery-title {
    font-size: 1.4rem;
    color: #d45a00;
    font-weight: 700;
    margin-bottom: 0.5rem;
}

.gallery-description {
    color: #6b7280;
    font-size: 1rem;
    line-height: 1.6;
}

/* بخش ویژگی‌ها */
.features-section {
    background: linear-gradient(135deg, rgba(255, 107, 15, 0.05), rgba(255, 179, 71, 0.05));
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
    box-shadow: 0 20px 50px rgba(255, 107, 15, 0.25);
    border-color: #ff6b0f;
}

.feature-icon {
    width: 70px;
    height: 70px;
    background: linear-gradient(135deg, #ff6b0f, #4ecdc4);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    color: white;
    font-size: 1.8rem;
    box-shadow: 0 10px 20px rgba(255, 107, 15, 0.3);
}

.feature-title {
    font-size: 1.4rem;
    color: #d45a00;
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
    border: 2px solid rgba(255, 107, 15, 0.1);
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
    background: linear-gradient(135deg, rgba(255, 107, 15, 0.05), rgba(255, 179, 71, 0.05));
    border-radius: 0.75rem;
    transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
    border: 2px solid transparent;
}

.method-card:hover {
    transform: translateY(-10px);
    border-color: #ff6b0f;
    box-shadow: 0 20px 50px rgba(255, 107, 15, 0.25);
}

.method-icon {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    color: #ff6b0f;
}

.method-title {
    font-size: 1.5rem;
    color: #d45a00;
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
    background: #ff6b0f;
    color: white;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 600;
    transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
    border: 2px solid #ff6b0f;
}

.method-btn:hover {
    background: white;
    color: #ff6b0f;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(255, 107, 15, 0.3);
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
    background: linear-gradient(135deg, #d45a00, #ffb347);
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
    color: white;
}

.contact-description {
    font-size: 1.3rem;
    opacity: 0.95;
    max-width: 700px;
    margin: 0 auto 3rem;
    line-height: 1.9;
    position: relative;
    z-index: 1;
    color: white;
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
    color: #d45a00;
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
    
    .categories-grid,
    .features-grid,
    .contact-methods,
    .learning-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .category-card {
        padding: 2rem;
    }
    
    .learning-list-section {
        padding: 2rem;
    }
    
    .gallery-grid {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1rem;
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
    
    .gallery-item {
        padding: 1.5rem;
    }
    
    .gallery-icon {
        font-size: 4rem;
    }
    
    .gallery-title {
        font-size: 1.2rem;
    }
    
    .gallery-description {
        font-size: 0.9rem;
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
    
    .learning-item {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    
    .learning-icon {
        margin-bottom: 0.5rem;
    }
}
</style>

<!-- بخش هیرو -->
<section class="page-hero">
    <h1 class="page-title">بسته‌های آموزشی کارآفرینی</h1>
    <div class="service-badge">از ایده تا موفقیت، همراه شما</div>
    <div class="page-description">
        <p>
            این <strong>بسته‌های آموزشی کارآفرینی</strong> شامل آموزش‌های جامع و کاربردی در زمینه کارآفرینی و مدیریت کسب‌وکار هستند که توسط استادان ملی و بین‌المللی با تجربه بالا طراحی و ضبط شده‌اند. با قراردادن همه درس‌ها روی یک فلش کوچک، می‌توانید در هر زمان و هر مکان از آن استفاده کنید: در خانه، محل کار یا حتی در سفر. این بسته‌ها اقتصادی، کاربردی و همیشه همراه شما هستند و ارزش واقعی آموزش عملی را ارائه می‌دهند.
        </p>
        <p style="margin-top: 2rem; font-style: italic; color: #d45a00;">
            با این راهنما، مسیر رشد و موفقیت استارتاپ شما روشن و قابل پیاده‌سازی خواهد شد!
        </p>
    </div>
</section>

<!-- بخش دسته‌بندی محتوای بسته -->
<section class="categories-section">
    <div class="section-title">
        <h2>محورهای اصلی بسته کارآفرینی</h2>
        <p>هر آنچه برای راه‌اندازی و مدیریت یک کسب‌وکار موفق نیاز دارید</p>
    </div>
    
    <div class="categories-grid">
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-rocket"></i>
            </div>
            <h3 class="category-title">راه‌اندازی استارتاپ</h3>
            <p class="category-description">از ایده‌پردازی تا اجرا، اعتبارسنجی ایده، تدوین طرح کسب‌وکار و جذب سرمایه</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-chart-line"></i>
            </div>
            <h3 class="category-title">بازاریابی و فروش</h3>
            <p class="category-description">استراتژی‌های بازاریابی دیجیتال، تکنیک‌های فروش، برندینگ و بازاریابی محتوا</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-coins"></i>
            </div>
            <h3 class="category-title">مدیریت مالی</h3>
            <p class="category-description">کاهش هزینه‌ها، مدیریت منابع، بودجه‌بندی، تحلیل مالی و تصمیم‌گیری هوشمندانه</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-chart-pie"></i>
            </div>
            <h3 class="category-title">اندازه‌گیری موفقیت</h3>
            <p class="category-description">شاخص‌های کلیدی عملکرد (KPI)، ابزارهای سنجش پیشرفت و ارزیابی رشد کسب‌وکار</p>
        </div>                
    </div>
</section>

<!-- بخش لیست یادگیری (مخصوص کارآفرینی) -->
<section class="learning-list-section">
    <h3 class="learning-list-title">با این بسته‌ها یاد می‌گیرید:</h3>
    
    <div class="learning-grid">
        <div class="learning-item">
            <div class="learning-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <div class="learning-content">
                <h4>عوامل موفقیت کسب‌وکارهای کوچک</h4>
                <p>شناسایی عوامل کلیدی موفقیت و چگونگی پیاده‌سازی آن‌ها در استارتاپ خود</p>
            </div>
        </div>
        
        <div class="learning-item">
            <div class="learning-icon">
                <i class="fas fa-exclamation-triangle"></i>
            </div>
            <div class="learning-content">
                <h4>علل شکست رایج در کسب‌وکار</h4>
                <p>تحلیل مهم‌ترین دلایل شکست استارتاپ‌ها و روش‌های جلوگیری از آن‌ها</p>
            </div>
        </div>
        
        <div class="learning-item">
            <div class="learning-icon">
                <i class="fas fa-wallet"></i>
            </div>
            <div class="learning-content">
                <h4>کاهش هزینه‌ها و مدیریت بهینه منابع</h4>
                <p>استراتژی‌های عملی برای بهینه‌سازی هزینه‌ها و استفاده حداکثری از منابع محدود</p>
            </div>
        </div>
        
        <div class="learning-item">
            <div class="learning-icon">
                <i class="fas fa-bullhorn"></i>
            </div>
            <div class="learning-content">
                <h4>نکات کلیدی بازاریابی و فروش</h4>
                <p>تکنیک‌های عملی برای افزایش فروش، جذب مشتری و بازاریابی مؤثر</p>
            </div>
        </div>
        
        <div class="learning-item">
            <div class="learning-icon">
                <i class="fas fa-calculator"></i>
            </div>
            <div class="learning-content">
                <h4>تصمیم‌گیری مالی و عملیاتی</h4>
                <p>اصول تصمیم‌گیری هوشمندانه در شرایط مختلف کسب‌وکار</p>
            </div>
        </div>
        
        <div class="learning-item">
            <div class="learning-icon">
                <i class="fas fa-tachometer-alt"></i>
            </div>
            <div class="learning-content">
                <h4>ابزارها و شاخص‌های اندازه‌گیری پیشرفت</h4>
                <p>معرفی ابزارهای کاربردی برای سنجش موفقیت و رشد کسب‌وکار شما</p>
            </div>
        </div>
    </div>
</section>

<!-- بخش گالری - با آیکون‌های جایگزین (بدون نیاز به عکس) -->
<section class="gallery-section">
    <div class="section-title">
        <h2>مسیر کارآفرینی موفق</h2>
        <p>مراحل ساخت و رشد یک کسب‌وکار پایدار</p>
    </div>
    
    <div class="gallery-grid">
        <div class="gallery-item">
            <div class="gallery-icon">
                <i class="fas fa-lightbulb"></i>
            </div>
            <h4 class="gallery-title">ایده‌پردازی</h4>
            <p class="gallery-description">تولید و اعتبارسنجی ایده‌های نوآورانه برای کسب‌وکار</p>
        </div>
        
        <div class="gallery-item">
            <div class="gallery-icon">
                <i class="fas fa-clipboard-list"></i>
            </div>
            <h4 class="gallery-title">طرح کسب‌وکار</h4>
            <p class="gallery-description">تدوین بیزینس پلن حرفه‌ای و نقشه راه اجرایی</p>
        </div>
        
        <div class="gallery-item">
            <div class="gallery-icon">
                <i class="fas fa-users"></i>
            </div>
            <h4 class="gallery-title">تیم‌سازی</h4>
            <p class="gallery-description">ایجاد تیم قوی و فرهنگ سازمانی موفق</p>
        </div>
        
        <div class="gallery-item">
            <div class="gallery-icon">
                <i class="fas fa-chart-bar"></i>
            </div>
            <h4 class="gallery-title">رشد و مقیاس‌پذیری</h4>
            <p class="gallery-description">استراتژی‌های توسعه کسب‌وکار و ورود به بازارهای جدید</p>
        </div>
    </div>
</section>

<!-- بخش ویژگی‌ها -->
<section class="features-section">
    <div class="section-title">
        <h2>چرا بسته‌های آموزشی کارآفرینی ما متفاوت است؟</h2>
        <p>آموزش عملی، کاربردی و همیشه در دسترس</p>
    </div>
    
    <div class="features-grid">
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-usb"></i>
            </div>
            <h3 class="feature-title">همراه همیشگی</h3>
            <p class="feature-description">همه درس‌ها روی یک فلش مموری؛ بدون نیاز به اینترنت، همیشه در دسترس</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-map-marked-alt"></i>
            </div>
            <h3 class="feature-title">یادگیری بدون مرز</h3>
            <p class="feature-description">هر جا هستید یاد بگیرید: خانه، محل کار، مسافرت، حتی در مسیر</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-coins"></i>
            </div>
            <h3 class="feature-title">مقرون‌به‌صرفه</h3>
            <p class="feature-description">یک بار سرمایه‌گذاری، استفاده مادام‌العمر – بدون هزینه‌های ماهانه</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-chalkboard-teacher"></i>
            </div>
            <h3 class="feature-title">اساتید باتجربه</h3>
            <p class="feature-description">تدریس توسط مدرسان ملی و بین‌المللی با تجربه عملی در کارآفرینی</p>
        </div>
    </div>
</section>

<!-- بخش اطلاعات تماس / روش خرید -->
<section class="contact-info-section">
    <div class="section-title">
        <h2>روش خرید بسته‌های آموزشی کارآفرینی</h2>
        <p>برای تهیه بسته یا دریافت مشاوره تخصصی کسب‌وکار، یکی از راه‌های زیر را انتخاب کنید</p>
    </div>
    
    <div class="contact-methods">
        <div class="method-card">
            <div class="method-icon">📞</div>
            <h3 class="method-title">تماس تلفنی</h3>
            <p class="method-description">با ما تماس بگیرید و پس از توضیح نیاز خود، بسته را سفارش دهید.</p>
            <a href="tel:+93781821838" class="method-btn">
                تماس: ۰۷۸۱۸۲۱۸۳۸
            </a>
        </div>
        
        <div class="method-card">
            <div class="method-icon">🏪</div>
            <h3 class="method-title">مراجعه حضوری</h3>
            <p class="method-description">به فروشگاه ما بیایید، بسته را از نزدیک ببینید و توضیحات تکمیلی بشنوید.</p>
            <a href="#footer" class="method-btn">
                آدرس فروشگاه
            </a>
        </div>
        
        <div class="method-card">
            <div class="method-icon">📱</div>
            <h3 class="method-title">درخواست در واتس‌اپ</h3>
            <p class="method-description">نام بسته را در واتس‌اپ بفرستید تا راهنمایی و قیمت‌ها را دریافت کنید.</p>
            <a href="https://wa.me/93774530372" class="method-btn whatsapp-btn" target="_blank">
                <i class="fab fa-whatsapp"></i>
                ارتباط در واتس‌اپ
            </a>
        </div>
    </div>
</section>

<!-- بخش تماس نهایی -->
<section class="contact-section">
    <h2 class="contact-title">کسب‌وکار خود را با دانش عملی متحول کنید!</h2>
    <p class="contact-description">
        با بسته‌های آموزشی کارآفرینی ما، محدودیت مکان و زمان را کنار بگذار
        <br>
        مهارت‌های کارآفرینی را با کیفیت بالا، انعطاف‌پذیری و قیمت مناسب تجربه کن
    </p>
    
    <div class="contact-buttons">
        <a href="tel:+93781821838" class="btn btn-primary">
            <i class="fas fa-phone"></i>
            تماس تلفنی
        </a>
        
        <a href="https://wa.me/93774530372" class="btn btn-secondary" target="_blank">
            <i class="fab fa-whatsapp"></i>
            ارتباط در واتس‌اپ
        </a>
        
        <a href="#footer" class="btn btn-secondary">
            <i class="fas fa-map-marker-alt"></i>
            آدرس فروشگاه
        </a>
    </div>
    
    <p style="margin-top: 2rem; opacity: 0.9; font-size: 1.1rem; color: white;">
        📍 کابل، ناحیه ۶، شهرک ۱۲ امام | 🕗 ۸ صبح تا ۸ شب
    </p>
</section>