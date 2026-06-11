---
layout: page
title: "خدمات نرم‌افزاری حرفه‌ای برای کار آسان و سریع"
description: "خدمات نصب و تنظیم ویندوز، آفیس، نرم‌افزارهای گرافیکی و برنامه‌های مورد نیاز با کیفیت بالا و هزینه مناسب"
keywords: "نصب ویندوز, نصب آفیس, فتوشاپ, افترافکت, نرم‌افزار گرافیکی, تعمیر نرم‌افزار, افزایش سرعت کامپیوتر, علی اکبری"
breadcrumb:
  - title: "خدمات نرم‌افزاری"
    link: "/software-services/index.html"
---

<style>
/* ===== محتوای صفحه ===== */
.page-content {
    max-width: 1400px;
    margin: 0 auto;
    padding: 4rem 2rem;
}

/* هیرو بخش با دیزاین مدرن آبی */
.page-hero {
    text-align: center;
    margin-bottom: 5rem;
    position: relative;
    overflow: hidden;
    border-radius: 2rem;
    background: linear-gradient(135deg, #00b4ff, #0070ff);
    padding: 4rem 2rem;
    border: 1px solid rgba(0, 180, 255, 0.3);
    box-shadow: 0 30px 50px rgba(0, 120, 255, 0.3);
}

.page-hero::before {
    content: '';
    position: absolute;
    top: -30%;
    right: -10%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(0, 180, 255, 0.2) 0%, transparent 60%);
    border-radius: 50%;
    z-index: 0;
    animation: floatSlow 15s infinite alternate ease-in-out;
}

.page-hero::after {
    content: '';
    position: absolute;
    bottom: -30%;
    left: -10%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(0, 230, 255, 0.15) 0%, transparent 60%);
    border-radius: 50%;
    z-index: 0;
    animation: floatSlow 12s infinite alternate-reverse ease-in-out;
}

@keyframes floatSlow {
    0% { transform: translate(0, 0) scale(1); }
    100% { transform: translate(40px, -40px) scale(1.1); }
}

/* المان‌های تزئینی فناوری */
.tech-elements {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    z-index: 1;
}

.tech-elem {
    position: absolute;
    font-size: 1.5rem;
    color: rgba(255, 255, 255, 0.1);
    font-family: monospace;
    font-weight: bold;
}

.tech-elem-1 {
    top: 20%;
    right: 15%;
    animation: rotate 20s linear infinite;
    font-size: 2.5rem;
}

.tech-elem-2 {
    bottom: 15%;
    left: 10%;
    animation: pulse 3s infinite;
    font-size: 2rem;
}

.tech-elem-3 {
    top: 30%;
    left: 20%;
    animation: move 8s infinite alternate;
    font-size: 2rem;
}

.tech-elem-4 {
    bottom: 25%;
    right: 20%;
    animation: spin 15s linear infinite;
    font-size: 2.2rem;
}

@keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

@keyframes spin {
    0% { transform: rotate(0deg) scale(1); }
    50% { transform: rotate(180deg) scale(1.2); }
    100% { transform: rotate(360deg) scale(1); }
}

@keyframes move {
    0% { transform: translate(0, 0); }
    100% { transform: translate(30px, -20px); }
}

.page-title {
    font-size: 3.2rem;
    color: white;
    margin-bottom: 1.5rem;
    font-weight: 900;
    line-height: 1.2;
    position: relative;
    display: inline-block;
    z-index: 2;
    text-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
    letter-spacing: -0.5px;
}

.page-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    right: 50%;
    transform: translateX(50%);
    width: 200px;
    height: 5px;
    background: linear-gradient(90deg, #00b4ff, #0070ff, #00f2ff);
    border-radius: 3px;
    box-shadow: 0 0 30px rgba(0, 180, 255, 0.8);
}

.service-badge {
    display: inline-block;
    background: linear-gradient(135deg, #00b4ff, #0070ff);
    color: white;
    padding: 0.8rem 2rem;
    border-radius: 50px;
    font-size: 1.8rem;
    font-weight: 800;
    margin: 1rem 0 2rem;
    box-shadow: 0 10px 30px rgba(0, 112, 255, 0.6);
    border: 3px solid rgba(255, 255, 255, 0.4);
    position: relative;
    z-index: 2;
    backdrop-filter: blur(5px);
    letter-spacing: 1px;
}

.page-description {
    font-size: 1.3rem;
    color: rgba(255, 255, 255, 0.95);
    line-height: 2;
    max-width: 1000px;
    margin: 3rem auto 0;
    padding: 2.5rem;
    background: linear-gradient(313deg, #00b4ff, #0070ff);
    border-radius: 1.5rem;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(0, 180, 255, 0.3);
    position: relative;
    z-index: 2;
    backdrop-filter: blur(10px);
    border-right: 4px solid #00b4ff;
}

.page-description::before {
    content: '⚙️';
    position: absolute;
    top: -20px;
    right: 30px;
    font-size: 2.5rem;
    background: linear-gradient(135deg, #00b4ff, #0070ff);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 10px 20px rgba(0,0,0,0.3);
    animation: rotate 5s linear infinite;
}

.page-description strong {
    color: #00f2ff;
    font-weight: 800;
    position: relative;
    padding: 0 4px;
    text-shadow: 0 0 15px rgba(0, 242, 255, 0.5);
}

/* بخش لیست خدمات با طراحی کارتی آبی */
.services-list-section {
    margin: 6rem 0;
    position: relative;
}

.section-title {
    text-align: center;
    margin-bottom: 4rem;
    position: relative;
}

.section-title h2 {
    font-size: 2.5rem;
    color: #0a2540;
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
    background: linear-gradient(90deg, #00b4ff, #0070ff);
    border-radius: 2px;
    box-shadow: 0 0 15px #00b4ff;
}

.section-title p {
    color: #6b7280;
    font-size: 1.2rem;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.8;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.service-card {
    background: white;
    padding: 2rem;
    border-radius: 1.5rem;
    box-shadow: 0 15px 30px rgba(0, 112, 255, 0.1);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: 2px solid transparent;
    position: relative;
    overflow: hidden;
    display: flex;
    gap: 1.5rem;
    align-items: flex-start;
}

.service-card::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 150px;
    height: 150px;
    background: linear-gradient(135deg, #00b4ff, #0070ff);
    opacity: 0.05;
    border-radius: 50%;
    transform: translate(50px, -50px);
}

.service-card:hover {
    transform: translateY(-15px);
    border-color: #00b4ff;
    box-shadow: 0 30px 40px rgba(0, 112, 255, 0.3);
}

.service-icon {
    min-width: 70px;
    height: 70px;
    background: linear-gradient(135deg, #00b4ff, #0070ff);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 2rem;
    box-shadow: 0 10px 20px rgba(0, 112, 255, 0.4);
    transition: all 0.3s ease;
}

.service-card:hover .service-icon {
    transform: scale(1.1) rotate(5deg);
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
}

.service-content {
    flex: 1;
}

.service-content h4 {
    font-size: 1.3rem;
    color: #0a2540;
    margin-bottom: 0.5rem;
    font-weight: 700;
    position: relative;
    display: inline-block;
}

.service-content h4::after {
    content: '';
    position: absolute;
    bottom: -3px;
    right: 0;
    width: 0;
    height: 3px;
    background: linear-gradient(90deg, #00b4ff, #0070ff);
    transition: width 0.3s ease;
}

.service-card:hover .service-content h4::after {
    width: 100%;
}

.service-content p {
    color: #6b7280;
    line-height: 1.6;
    font-size: 0.95rem;
}

/* بخش گالری با دیزاین آبی و کارت‌های نرم‌افزاری */
.software-showcase {
    margin: 6rem 0;
    padding: 4rem 0;
    background: linear-gradient(135deg, #f0f9ff, #e6f3ff);
    border-radius: 3rem;
    position: relative;
    overflow: hidden;
}

.software-showcase::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" opacity="0.05"><path d="M20,20 L80,20 L80,80 L20,80 Z" fill="none" stroke="%230070ff" stroke-width="2"/><circle cx="50" cy="50" r="15" fill="none" stroke="%2300b4ff" stroke-width="2"/></svg>');
    background-size: 50px;
    pointer-events: none;
}

.software-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
    padding: 0 2rem;
}

.software-item {
    background: white;
    border-radius: 1.5rem;
    padding: 2rem 1rem;
    text-align: center;
    box-shadow: 0 15px 30px rgba(0, 112, 255, 0.1);
    transition: all 0.3s ease;
    border: 2px solid transparent;
    position: relative;
    overflow: hidden;
}

.software-item:hover {
    transform: translateY(-10px);
    border-color: #00b4ff;
    box-shadow: 0 25px 40px rgba(0, 112, 255, 0.3);
}

.software-item::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #00b4ff, #0070ff);
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

.software-item:hover::after {
    transform: scaleX(1);
}

.software-icon {
    font-size: 3.5rem;
    color: #0070ff;
    margin-bottom: 1rem;
    transition: all 0.3s ease;
}

.software-item:hover .software-icon {
    transform: scale(1.1) rotate(360deg);
    color: #00b4ff;
}

.software-name {
    font-size: 1.2rem;
    font-weight: 700;
    color: #0a2540;
    margin-bottom: 0.5rem;
}

.software-desc {
    font-size: 0.85rem;
    color: #6b7280;
}

/* بخش ویژگی‌ها با دیزاین آبی */
.features-section {
    margin: 6rem 0;
    position: relative;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.feature-card {
    background: white;
    padding: 2.5rem 2rem;
    border-radius: 2rem;
    text-align: center;
    transition: all 0.4s ease;
    border: 2px solid transparent;
    position: relative;
    overflow: hidden;
    box-shadow: 0 20px 30px rgba(0, 112, 255, 0.1);
}

.feature-card::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100px;
    height: 100px;
    background: linear-gradient(135deg, #00b4ff, #0070ff);
    opacity: 0.1;
    border-radius: 50%;
    transform: translate(30px, 30px);
}

.feature-card:hover {
    transform: translateY(-15px);
    border-color: #00b4ff;
    box-shadow: 0 30px 40px rgba(0, 112, 255, 0.3);
}

.feature-icon {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, #00b4ff, #0070ff);
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.8rem;
    color: white;
    font-size: 2rem;
    box-shadow: 0 20px 30px rgba(0, 112, 255, 0.4);
    transition: all 0.5s ease;
}

.feature-card:hover .feature-icon {
    border-radius: 50%;
    transform: rotate(360deg) scale(1.1);
}

.feature-title {
    font-size: 1.4rem;
    color: #0a2540;
    margin-bottom: 1rem;
    font-weight: 700;
}

.feature-description {
    color: #6b7280;
    line-height: 1.6;
}

/* بخش اطلاعات تماس با سه گزینه (حضوری، تماس، واتساپ) */
.contact-info-section {
    background: white;
    padding: 5rem;
    border-radius: 2rem;
    box-shadow: 0 20px 50px rgba(0, 112, 255, 0.15);
    margin: 6rem 0;
    position: relative;
    overflow: hidden;
    border: 2px solid rgba(0, 180, 255, 0.2);
}

.contact-info-section::before {
    content: '⚙️';
    position: absolute;
    top: -20px;
    left: -20px;
    font-size: 10rem;
    opacity: 0.03;
    transform: rotate(30deg);
}

.contact-info-section::after {
    content: '💻';
    position: absolute;
    bottom: -30px;
    right: -20px;
    font-size: 12rem;
    opacity: 0.03;
    transform: rotate(-20deg);
}

.section-title {
    text-align: center;
    margin-bottom: 4rem;
    position: relative;
    z-index: 2;
}

.section-title h2 {
    font-size: 2.5rem;
    color: #0a2540;
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
    background: linear-gradient(90deg, #00b4ff, #0070ff);
    border-radius: 2px;
}

.section-title p {
    color: #6b7280;
    font-size: 1.2rem;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.8;
}

.contact-methods {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2.5rem;
    margin-top: 3rem;
    position: relative;
    z-index: 2;
}

.method-card {
    text-align: center;
    padding: 3rem 2rem;
    background: linear-gradient(135deg, #f8fcff, #f0f9ff);
    border-radius: 1.5rem;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: 2px solid transparent;
    position: relative;
    overflow: hidden;
    box-shadow: 0 15px 30px rgba(0, 112, 255, 0.1);
}

.method-card::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100px;
    background: linear-gradient(135deg, #00b4ff, #0070ff);
    opacity: 0.1;
    border-radius: 50%;
    transform: translate(30px, -30px);
}

.method-card:hover {
    transform: translateY(-15px) scale(1.02);
    border-color: #00b4ff;
    box-shadow: 0 30px 40px rgba(0, 112, 255, 0.3);
}

.method-icon {
    font-size: 4rem;
    margin-bottom: 1.5rem;
    color: #0070ff;
    transition: all 0.3s ease;
}

.method-card:hover .method-icon {
    transform: scale(1.1) rotate(5deg);
    color: #00b4ff;
}

.method-title {
    font-size: 1.6rem;
    color: #0a2540;
    margin-bottom: 1rem;
    font-weight: 700;
}

.method-description {
    color: #6b7280;
    margin-bottom: 2rem;
    line-height: 1.7;
    font-size: 1.05rem;
}

.method-btn {
    display: inline-block;
    padding: 1rem 2rem;
    background: linear-gradient(135deg, #00b4ff, #0070ff);
    color: white;
    text-decoration: none;
    border-radius: 60px;
    font-weight: 600;
    transition: all 0.3s ease;
    border: 2px solid transparent;
    box-shadow: 0 10px 20px rgba(0, 112, 255, 0.3);
    font-size: 1.1rem;
}

.method-btn:hover {
    background: white;
    color: #0070ff;
    border-color: #0070ff;
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 15px 30px rgba(0, 112, 255, 0.4);
}

.whatsapp-btn {
    background: #25D366;
}

.whatsapp-btn:hover {
    background: white;
    color: #25D366;
    border-color: #25D366;
}

/* بخش تماس پایانی (مثل قبل) */
.contact-footer {
    background: linear-gradient(135deg, #00b4ff, #0070ff);
    color: white;
    padding: 4rem 2rem;
    border-radius: 2rem;
    margin: 4rem 0 2rem;
    text-align: center;
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(0, 180, 255, 0.3);
    box-shadow: 0 30px 50px rgba(0, 112, 255, 0.3);
}

.contact-footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 50%, rgba(0,180,255,0.2) 0%, transparent 50%);
}

.contact-footer h3 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    font-weight: 800;
    position: relative;
    z-index: 2;
    color: white;
}

.contact-footer p {
    font-size: 1.2rem;
    opacity: 0.9;
    margin-bottom: 2rem;
    position: relative;
    z-index: 2;
    color: white;
}

.contact-footer .address {
    font-size: 1.1rem;
    opacity: 0.8;
    margin-top: 2rem;
    position: relative;
    z-index: 2;
    color: white;
}

/* Responsive */
@media (max-width: 992px) {
    .page-title {
        font-size: 2.5rem;
    }
    
    .service-badge {
        font-size: 1.4rem;
    }
    
    .contact-info-section {
        padding: 3rem;
    }
}

@media (max-width: 768px) {
    .page-title {
        font-size: 2rem;
    }
    
    .service-badge {
        font-size: 1.2rem;
    }
    
    .service-card {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    
    .contact-methods {
        grid-template-columns: 1fr;
    }
    
    .contact-info-section {
        padding: 2rem;
    }
}

@media (max-width: 480px) {
    .page-description {
        padding: 1.8rem;
        font-size: 1.1rem;
    }

    .method-btn {
        padding: 0.8rem 1.5rem;
        font-size: 0.75rem;
        width: 9rem;
    }
    
    .software-grid {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>

<!-- بخش هیرو با المان‌های فناوری -->
<section class="page-hero">
    <!-- المان‌های تزئینی -->
    <div class="tech-elements">
        <div class="tech-elem tech-elem-1">⚙️</div>
        <div class="tech-elem tech-elem-2">💻</div>
        <div class="tech-elem tech-elem-3">{ }</div>
        <div class="tech-elem tech-elem-4">&lt;/&gt;</div>
    </div>
    
    <h1 class="page-title">خدمات نرم‌افزاری حرفه‌ای</h1>
    <div class="service-badge">برای کار آسان و سریع</div>
    <div class="page-description">
        <p style="color: white;">
            امروزه بیشتر کارهای اداری، تجارتی و آموزشی وابسته به نرم‌افزارها است. اگر سیستم شما درست و اصولی نصب و تنظیم نشده باشد، نه‌تنها سرعت کار پایین می‌آید، بلکه باعث ضایع شدن وقت و انرژی شما می‌شود. ما تلاش می‌کنیم با ارائه <strong>خدمات نرم‌افزاری کامل</strong>، کمپیوتر و لپ‌تاپ شما را آماده یک کار سریع، امن و بدون مشکل بسازیم تا بتوانید با اطمینان روی اهداف خود تمرکز کنید.
        </p>
    </div>
</section>

<!-- بخش لیست خدمات اصلی -->
<section class="services-list-section">
    <div class="section-title">
        <h2>خدمات ما</h2>
        <p>هر آنچه برای یک سیستم آماده نیاز دارید</p>
    </div>
    
    <div class="services-grid">
        <div class="service-card">
            <div class="service-icon">
                <i class="fab fa-windows"></i>
            </div>
            <div class="service-content">
                <h4>نصب و فعال‌سازی ویندوز</h4>
                <p>نصب ویندوز 7، 10، 11 با آخرین آپدیت‌ها و تنظیم کامل درایورها</p>
            </div>
        </div>
        
        <div class="service-card">
            <div class="service-icon">
                <i class="fas fa-file-word"></i>
            </div>
            <div class="service-content">
                <h4>نصب آفیس و برنامه‌های اداری</h4>
                <p>Microsoft Office، PDF خوان، نرم‌افزارهای حسابداری و مدیریت</p>
            </div>
        </div>
        
        <div class="service-card">
            <div class="service-icon">
                <i class="fas fa-paint-brush"></i>
            </div>
            <div class="service-content">
                <h4>نرم‌افزارهای گرافیکی</h4>
                <p>فتوشاپ، ایندیزاین، ایلوستریتور، افترافکت، پریمیر و سایر برنامه‌ها</p>
            </div>
        </div>
        
        <div class="service-card">
            <div class="service-icon">
                <i class="fas fa-laptop"></i>
            </div>
            <div class="service-content">
                <h4>برنامه‌های مورد نیاز کاری و آموزشی</h4>
                <p>نصب نرم‌افزارهای تخصصی بر اساس نیاز شما</p>
            </div>
        </div>
        
        <div class="service-card">
            <div class="service-icon">
                <i class="fas fa-tachometer-alt"></i>
            </div>
            <div class="service-content">
                <h4>رفع مشکلات و افزایش سرعت</h4>
                <p>بهینه‌سازی ویندوز، پاکسازی، رفع ارورها و به‌روزرسانی سیستم</p>
            </div>
        </div>
        
        <div class="service-card">
            <div class="service-icon">
                <i class="fas fa-shield-alt"></i>
            </div>
            <div class="service-content">
                <h4>نصب آنتی‌ویروس و امنیت</h4>
                <p>محافظت از سیستم در برابر ویروس‌ها و تهدیدات اینترنتی</p>
            </div>
        </div>
    </div>
</section>

<!-- بخش نمایش نرم‌افزارهای معروف -->
<section class="software-showcase">
    <div class="section-title">
        <h2 style="color: #0a2540;">نرم‌افزارهای محبوب</h2>
        <p style="color: #4b5563;">برخی از برنامه‌هایی که نصب و تنظیم می‌کنیم</p>
    </div>
    
    <div class="software-grid">
        <div class="software-item">
            <div class="software-icon">
                <i class="fab fa-windows"></i>
            </div>
            <div class="software-name">ویندوز</div>
            <div class="software-desc">10، 11 و نسخه‌های قبل</div>
        </div>
        
        <div class="software-item">
            <div class="software-icon">
                <i class="fas fa-file-word"></i>
            </div>
            <div class="software-name">آفیس</div>
            <div class="software-desc">2016، 2019، 2021</div>
        </div>
        
        <div class="software-item">
            <div class="software-icon">
                <i class="fas fa-paint-brush"></i>
            </div>
            <div class="software-name">فتوشاپ</div>
            <div class="software-desc">Adobe Photoshop</div>
        </div>
        
        <div class="software-item">
            <div class="software-icon">
                <i class="fas fa-video"></i>
            </div>
            <div class="software-name">افترافکت</div>
            <div class="software-desc">After Effects</div>
        </div>
        
        <div class="software-item">
            <div class="software-icon">
                <i class="fas fa-chart-bar"></i>
            </div>
            <div class="software-name">اکسل</div>
            <div class="software-desc">Excel پیشرفته</div>
        </div>
        
        <div class="software-item">
            <div class="software-icon">
                <i class="fas fa-database"></i>
            </div>
            <div class="software-name">پایگاه داده</div>
            <div class="software-desc">SQL، Access</div>
        </div>
        
        <div class="software-item">
            <div class="software-icon">
                <i class="fas fa-code"></i>
            </div>
            <div class="software-name">برنامه‌نویسی</div>
            <div class="software-desc">Python، VS Code</div>
        </div>
        
        <div class="software-item">
            <div class="software-icon">
                <i class="fas fa-globe"></i>
            </div>
            <div class="software-name">مرورگرها</div>
            <div class="software-desc">Chrome، Firefox</div>
        </div>
    </div>
</section>

<!-- بخش ویژگی‌ها -->
<section class="features-section">
    <div class="section-title">
        <h2>چرا به ما اعتماد کنید؟</h2>
        <p>تخصص، تعهد و پشتیبانی همیشگی</p>
    </div>
    
    <div class="features-grid">
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-bolt"></i>
            </div>
            <h3 class="feature-title">سرعت و دقت</h3>
            <p class="feature-description">نصب سریع و بدون نقص با رعایت اصول فنی</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <h3 class="feature-title">ضمانت کیفیت</h3>
            <p class="feature-description">همه نرم‌افزارها تست و از صحت عملکرد آن‌ها اطمینان می‌یابیم</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-headset"></i>
            </div>
            <h3 class="feature-title">پشتیبانی پس از نصب</h3>
            <p class="feature-description">تا زمانی که مطمئن شوید همه چیز درست کار می‌کند</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-hand-holding-usd"></i>
            </div>
            <h3 class="feature-title">قیمت منصفانه</h3>
            <p class="feature-description">خدمات با کیفیت با هزینه مناسب برای همه</p>
        </div>
    </div>
</section>

<!-- بخش اطلاعات تماس با سه گزینه (حضوری، تماس، واتساپ) -->
<section class="contact-info-section">
    <div class="section-title">
        <h2>راه‌های ارتباطی</h2>
        <p>برای مشاوره و راهنمایی، حضوری مراجعه کنید یا تماس بگیرید</p>
    </div>
    
    <div class="contact-methods">
        <div class="method-card">
            <div class="method-icon">📞</div>
            <h3 class="method-title">تماس تلفنی</h3>
            <p class="method-description">برای مشاوره رایگان و پاسخگویی به سوالات فنی شما، با ما تماس بگیرید.</p>
            <a href="tel:+93781821838" class="method-btn">
                <i class="fas fa-phone-alt"></i> ۰۷۸۱۸۲۱۸۳۸
            </a>
        </div>
        
        <div class="method-card">
            <div class="method-icon">🏪</div>
            <h3 class="method-title">مراجعه حضوری</h3>
            <p class="method-description">با سیستم خود به فروشگاه ما بیایید تا در محل خدمات را دریافت کنید.</p>
            <a href="#footer" class="method-btn">
                <i class="fas fa-map-marker-alt"></i> آدرس فروشگاه
            </a>
        </div>
        
        <div class="method-card">
            <div class="method-icon">📱</div>
            <h3 class="method-title">درخواست در واتس‌اپ</h3>
            <p class="method-description">مشکل خود را توضیح دهید یا لیست نرم‌افزارهای مورد نیاز را ارسال کنید.</p>
            <a href="https://wa.me/93774530372" class="method-btn whatsapp-btn" target="_blank">
                <i class="fab fa-whatsapp"></i> ارتباط در واتس‌اپ
            </a>
        </div>
    </div>
</section>

<!-- بخش تماس پایانی -->
<section class="contact-footer">
    <h3>آماده همکاری با شما هستیم</h3>
    <p>برای هماهنگی و دریافت اطلاعات بیشتر، با ما در تماس باشید</p>
    <div class="contact-buttons" style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
        <a href="tel:+93781821838" class="btn" style="background: white; color: #0a2540; padding: 0.8rem 2rem; border-radius: 50px; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 0.5rem;">
            <i class="fas fa-phone-alt"></i> تماس تلفنی
        </a>
        <a href="https://wa.me/93774530372" class="btn" style="background: #25D366; color: white; padding: 0.8rem 2rem; border-radius: 50px; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 0.5rem;" target="_blank">
            <i class="fab fa-whatsapp"></i> واتس‌اپ
        </a>
    </div>
    <p class="address">📍 کابل، ناحیه ۶، شهرک ۱۲ امام | 🕗 ۸ صبح تا ۸ شب</p>
</section>
