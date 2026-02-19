---
layout: default
title: "قرطاسیه فروشی و مطبعه علی اکبری | خدمات چاپ، کتاب و لوازم تحریر در کابل"
description: "خدمات چاپ، کتاب‌فروشی، لوازم تحریر و آموزش دیجیتال در کابل. کیفیت بالا، قیمت منصفانه، تحویل سریع."
keywords: "کتاب‌فروشی, مطبعه, خدمات کامپیوتری, چاپ, عکاسی, کابل, علی اکبری, لوازم تحریر"
---

<style>
/* ===== استایل‌های اختصاصی صفحه اصلی ===== */
/* تمام کلاس‌ها با پیشوند home- شروع می‌شوند تا با هدر تداخل نکنند */
.site-top-banner .top-accent {
    background: linear-gradient(279deg, #1169e9, #254ec4, #2164d3);
}

    
.home-page * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.home-page {
    font-family: 'Vazirmatn', -apple-system, BlinkMacSystemFont, sans-serif;
    background: #f0f7ff;
    color: #1e293b;
    line-height: 1.6;
    direction: rtl;
}

.home-container {
    max-width: 1350px;
    margin: 0 auto;
    padding: 0 20px;
}

/* ===== رنگ‌بندی آبی جذاب ===== */
:root {
    --home-primary: #0a58ca;
    --home-primary-dark: #084298;
    --home-primary-light: #3b82f6;
    --home-primary-soft: #e6f0ff;
    --home-secondary: #00b0ff;
    --home-accent: #7b68ee;
    --home-gradient-1: linear-gradient(135deg, #0a58ca, #3b82f6);
    --home-gradient-2: linear-gradient(135deg, #00b0ff, #7b68ee);
    --home-text-dark: #1e293b;
    --home-text-light: #4b5563;
    --home-bg-light: #f8fafc;
    --home-white: #ffffff;
    --home-shadow-sm: 0 4px 6px rgba(10, 88, 202, 0.1);
    --home-shadow-md: 0 10px 25px rgba(10, 88, 202, 0.15);
    --home-shadow-lg: 0 20px 40px rgba(10, 88, 202, 0.2);
}

/* ===== انیمیشن‌ها ===== */
@keyframes home-float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

@keyframes home-pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

@keyframes home-fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes home-slideFade {
    0% { opacity: 0; transform: scale(1.1); }
    100% { opacity: 1; transform: scale(1); }
}

/* ===== بخش‌بندی اصلی با فاصله مناسب ===== */
.home-section {
    padding: 100px 0;
    position: relative;
}

.home-section:first-of-type {
    padding-top: 40px; /* فاصله از هدر */
}

.home-section-header {
    text-align: center;
    margin-bottom: 60px;
}

.home-section-header h2 {
    font-size: 2.5rem;
    color: var(--home-primary-dark);
    font-weight: 800;
    margin-bottom: 15px;
    position: relative;
    display: inline-block;
}

.home-section-header h2::after {
    content: '';
    position: absolute;
    bottom: -10px;
    right: 50%;
    transform: translateX(50%);
    width: 80px;
    height: 4px;
    background: var(--home-gradient-2);
    border-radius: 2px;
}

.home-section-header p {
    color: var(--home-text-light);
    font-size: 1.2rem;
    max-width: 700px;
    margin: 0 auto;
}

/* ===== 1️⃣ Hero Section با اسلایدر ===== */
.home-hero {
    background: linear-gradient(135deg, #0a58ca, #1e3a8a, #3b82f6);
    min-height: 600px;
    display: flex;
    align-items: center;
    margin-top: 9rem;
    position: relative;
    overflow: hidden;
    padding: 40px 0;
}

.home-hero::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 60%);
    border-radius: 50%;
    animation: home-float 10s infinite ease-in-out;
}

.home-hero::after {
    content: '';
    position: absolute;
    bottom: -30%;
    left: -10%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 60%);
    border-radius: 50%;
    animation: home-float 8s infinite reverse;
}

.home-hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    align-items: center;
    position: relative;
    z-index: 2;
}

.home-hero-text h1 {
    font-size: 3rem;
    color: var(--home-white);
    line-height: 1.2;
    margin-bottom: 20px;
    font-weight: 800;
    text-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.home-hero-text p {
    font-size: 1.3rem;
    color: rgba(255,255,255,0.95);
    margin-bottom: 30px;
    line-height: 1.8;
}

.home-hero-cta {
    display: inline-block;
    padding: 15px 40px;
    background: var(--home-white);
    color: var(--home-primary-dark);
    text-decoration: none;
    font-weight: 700;
    border-radius: 50px;
    font-size: 1.2rem;
    transition: all 0.3s;
    border: 2px solid var(--home-white);
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    animation: home-pulse 2s infinite;
}

.home-hero-cta:hover {
    background: transparent;
    color: var(--home-white);
    transform: translateY(-3px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
}

/* اسلایدر */
.home-hero-slider {
    width: 100%;
    height: 450px;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 0 30px 60px rgba(0,0,0,0.3);
    border: 5px solid rgba(255,255,255,0.2);
    position: relative;
}

.home-slider-container {
    width: 100%;
    height: 100%;
    position: relative;
}

.home-slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 1s ease-in-out;
}

.home-slide.active {
    opacity: 1;
}

.home-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    animation: home-slideFade 5s ease-in-out;
}

.home-slider-dots {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
    z-index: 3;
}

.home-slider-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(255,255,255,0.4);
    border: 2px solid transparent;
    cursor: pointer;
    transition: all 0.3s;
    padding: 0;
}

.home-slider-dot.active {
    background: var(--home-secondary);
    transform: scale(1.2);
    width: 30px;
    border-radius: 6px;
}

/* ===== 2️⃣ خدمات اصلی ===== */
.home-services-section {
    background: var(--home-bg-light);
    position: relative;
    overflow: hidden;
    padding: 100px 0;
}

.home-services-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 200px;
    background: linear-gradient(180deg, rgba(10,88,202,0.05), transparent);
}

.home-services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    position: relative;
    z-index: 2;
}

.home-service-card {
    background: var(--home-white);
    border-radius: 30px;
    padding: 35px;
    box-shadow: var(--home-shadow-md);
    transition: all 0.4s;
    border: 1px solid rgba(10,88,202,0.1);
    position: relative;
    overflow: hidden;
}

.home-service-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: var(--home-gradient-1);
    transform: translateX(-100%);
    transition: transform 0.5s;
}

.home-service-card:hover {
    transform: translateY(-15px);
    box-shadow: var(--home-shadow-lg);
    border-color: var(--home-primary-light);
}

.home-service-card:hover::before {
    transform: translateX(0);
}

.home-service-icon {
    width: 70px;
    height: 70px;
    background: var(--home-gradient-1);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 25px;
    color: var(--home-white);
    font-size: 2rem;
    transition: all 0.4s;
    box-shadow: var(--home-shadow-md);
    margin-right: auto;
    margin-left: auto;
}

.home-service-card:hover .home-service-icon {
    border-radius: 50%;
    transform: rotate(360deg);
}

.home-service-card h3 {
    font-size: 1.6rem;
    color: var(--home-primary-dark);
    margin-bottom: 15px;
    font-weight: 700;
    text-align: center;
}

.home-service-card p {
    color: var(--home-text-light);
    margin-bottom: 25px;
    line-height: 1.6;
    font-size: 0.95rem;
    text-align: center;
}

.home-service-links {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin-top: 20px;
}

.home-service-sub-link {
    background: var(--home-primary-soft);
    color: var(--home-primary-dark);
    text-decoration: none;
    font-size: 0.9rem;
    padding: 8px 12px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    gap: 5px;
    transition: all 0.3s;
    border: 1px solid transparent;
}

.home-service-sub-link:hover {
    background: var(--home-gradient-1);
    color: var(--home-white);
    transform: translateX(-5px);
    border-color: var(--home-white);
}

.home-service-sub-link i {
    font-size: 0.8rem;
    transition: transform 0.3s;
}

.home-service-sub-link:hover i {
    transform: translateX(-3px);
}

/* ===== 3️⃣ مزیت رقابتی ===== */
.home-advantages {
    background: linear-gradient(135deg, #0a58ca, #1e3a8a);
    color: var(--home-white);
    position: relative;
    overflow: hidden;
    padding: 100px 0;
}

.home-advantages::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" opacity="0.1"><path d="M20,20 L80,20 L80,80 L20,80 Z" fill="none" stroke="white" stroke-width="2"/><circle cx="50" cy="50" r="15" fill="none" stroke="white" stroke-width="2"/></svg>') repeat;
    background-size: 50px;
}

.home-advantages-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    position: relative;
    z-index: 2;
}

.home-advantage-item {
    text-align: center;
    padding: 30px;
    background: rgba(255,255,255,0.1);
    border-radius: 20px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.2);
    transition: all 0.4s;
}

.home-advantage-item:hover {
    transform: translateY(-10px);
    background: rgba(255,255,255,0.2);
    border-color: rgba(255,255,255,0.4);
}

.home-advantage-icon {
    width: 80px;
    height: 80px;
    background: var(--home-white);
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    color: var(--home-primary);
    font-size: 2rem;
    transition: all 0.4s;
}

.home-advantage-item:hover .home-advantage-icon {
    border-radius: 50%;
    transform: rotate(360deg);
}

.home-advantage-item h4 {
    font-size: 1.4rem;
    margin-bottom: 10px;
    color: var(--home-white);
}

.home-advantage-item p {
    color: rgba(255,255,255,0.9);
    font-size: 1rem;
}

/* ===== 4️⃣ فرآیند کار ===== */
.home-process-section {
    background: var(--home-bg-light);
    padding: 100px 0;
}

.home-process-steps {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 60px;
    margin-top: 40px;
}

.home-process-step {
    text-align: center;
    position: relative;
}

.home-process-step:not(:last-child)::after {
    content: '→';
    position: absolute;
    top: 50px;
    left: -30px;
    font-size: 2rem;
    color: var(--home-primary-light);
    opacity: 0.5;
}

.home-step-number {
    width: 90px;
    height: 90px;
    background: var(--home-gradient-1);
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    color: var(--home-white);
    font-size: 2.2rem;
    font-weight: 700;
    box-shadow: var(--home-shadow-md);
    transition: all 0.4s;
}

.home-process-step:hover .home-step-number {
    border-radius: 50%;
    transform: rotate(360deg);
}

.home-process-step h4 {
    font-size: 1.5rem;
    color: var(--home-primary-dark);
    margin-bottom: 10px;
}

.home-process-step p {
    color: var(--home-text-light);
    font-size: 1.1rem;
}

/* ===== 5️⃣ اطلاعات تماس ===== */
.home-contact-section {
    background: linear-gradient(135deg, #1e3a8a, #0a58ca);
    color: var(--home-white);
    padding: 100px 0;
    position: relative;
    overflow: hidden;
}

.home-contact-section::before {
    content: '📞';
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 8rem;
    opacity: 0.1;
    transform: rotate(15deg);
}

.home-contact-section::after {
    content: '💬';
    position: absolute;
    bottom: 20px;
    left: 20px;
    font-size: 8rem;
    opacity: 0.1;
    transform: rotate(-15deg);
}

.home-contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    align-items: center;
    position: relative;
    z-index: 2;
}

.home-contact-info h3 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    font-weight: 800;
    color: var(--myself);
}

.home-contact-info p {
    font-size: 1.2rem;
    margin-bottom: 30px;
    opacity: 0.9;
    line-height: 1.8;
    color: var(--myself);
}

.home-contact-details {
    list-style: none;
    margin-bottom: 30px;
}

.home-contact-details li {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 15px;
    font-size: 1.2rem;
    background: rgba(255,255,255,0.1);
    padding: 15px 25px;
    border-radius: 50px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.2);
    transition: all 0.3s;
}

.home-contact-details li:hover {
    background: rgba(255,255,255,0.2);
    transform: translateX(-5px);
}

.home-contact-details i {
    width: 40px;
    height: 40px;
    background: rgba(255,255,255,0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
}

.home-contact-buttons {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
}

.home-contact-btn {
    padding: 15px 30px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 1.1rem;
    border: 2px solid transparent;
}

.home-contact-btn.primary {
    background: var(--home-white);
    color: var(--home-primary-dark);
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
}

.home-contact-btn.primary:hover {
    background: transparent;
    color: var(--home-white);
    border-color: var(--home-white);
    transform: translateY(-3px);
}

.home-contact-btn.secondary {
    background: rgba(255,255,255,0.15);
    color: var(--home-white);
    border: 2px solid rgba(255,255,255,0.3);
    backdrop-filter: blur(10px);
}

.home-contact-btn.secondary:hover {
    background: rgba(255,255,255,0.3);
    transform: translateY(-3px);
    border-color: var(--home-white);
}

.home-contact-map {
    width: 100%;
    height: 400px;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 0 30px 60px rgba(0,0,0,0.3);
    border: 5px solid rgba(255,255,255,0.2);
}

.home-contact-map iframe {
    width: 100%;
    height: 100%;
    border: 0;
}

/* ===== انیمیشن‌ها ===== */
.home-animate-fade-up {
    animation: home-fadeInUp 1s ease forwards;
}

.home-delay-1 { animation-delay: 0.2s; }
.home-delay-2 { animation-delay: 0.4s; }
.home-delay-3 { animation-delay: 0.6s; }

/* ===== Responsive ===== */
@media (max-width: 992px) {
    .home-hero-content,
    .home-contact-grid {
        grid-template-columns: 1fr;
    }
    
    .home-hero-text {
        text-align: center;
    }
    
    .home-services-grid,
    .home-advantages-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .home-process-steps {
        grid-template-columns: 1fr;
        gap: 30px;
    }
    
    .home-process-step:not(:last-child)::after {
        display: none;
    }
    
    .home-section {
        padding: 80px 0;
    }
}

@media (max-width: 768px) {
    .home-section {
        padding: 60px 0;
    }
    
    .home-section:first-of-type {
        padding-top: 30px;
    }
    
    .home-hero {
        padding: 30px 0;
    }
    
    .home-hero-text h1 {
        font-size: 2.2rem;
    }
    
    .home-hero-text p {
        font-size: 1.1rem;
    }
    
    .home-hero-slider {
        height: 350px;
    }
    
    .home-services-grid,
    .home-advantages-grid {
        grid-template-columns: 1fr;
        gap: 20px;
    }
    
    .home-service-card {
        padding: 25px;
    }
    
    .home-service-links {
        grid-template-columns: 1fr;
    }
    
    .home-contact-buttons {
        flex-direction: column;
    }
    
    .home-contact-btn {
        width: 100%;
        justify-content: center;
    }
    
    .home-contact-map {
        height: 300px;
    }
}

@media (max-width: 480px) {
    .home-section {
        padding: 50px 0;
    }
    
    .home-section-header h2 {
        font-size: 2rem;
    }
    
    .home-section-header p {
        font-size: 1rem;
    }
    
    .home-hero-text h1 {
        font-size: 1.8rem;
    }
    
    .home-hero-slider {
        height: 250px;
    }
    
    .home-advantage-item {
        padding: 20px;
    }
    
    .home-advantage-icon {
        width: 60px;
        height: 60px;
        font-size: 1.5rem;
    }
    
    .home-advantage-item h4 {
        font-size: 1.2rem;
    }
    
    .home-contact-details li {
        padding: 12px 15px;
        font-size: 1rem;
    }
}
</style>

<!-- محتوای صفحه اصلی با کلاس wrapper -->
<div class="home-page">

<!-- 1️⃣ Hero Section با اسلایدر -->
<section class="home-hero">
    <div class="home-container">
        <div class="home-hero-content">
            <div class="home-hero-text home-animate-fade-up">
                <h1>مرکز تخصصی چاپ، کتاب و لوازم تحریر در کابل</h1>
                <p>خدمات چاپ، فروش کتاب‌های درسی و دانشگاهی، لوازم تحریر با کیفیت و آموزش دیجیتال - همه در یک مکان با قیمت منصفانه</p>
                <a href="#home-services" class="home-hero-cta">✨ مشاهده همه خدمات</a>
            </div>
            <div class="home-hero-slider home-animate-fade-up home-delay-1">
                <div class="home-slider-container">
                    <div class="home-slide active">
                        <img src="https://images.unsplash.com/photo-1544716278-e513176f20b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="فروشگاه علی اکبری">
                    </div>
                    <div class="home-slide">
                        <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="کتاب‌فروشی">
                    </div>
                    <div class="home-slide">
                        <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="خدمات چاپ">
                    </div>
                    <div class="home-slide">
                        <img src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="آموزش دیجیتال">
                    </div>
                </div>
                <div class="home-slider-dots">
                    <span class="home-slider-dot active"></span>
                    <span class="home-slider-dot"></span>
                    <span class="home-slider-dot"></span>
                    <span class="home-slider-dot"></span>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- 2️⃣ خدمات اصلی -->
<section class="home-services-section" id="home-services">
    <div class="home-container">
        <div class="home-section-header home-animate-fade-up">
            <h2>خدمات ما</h2>
            <p>با کلیک روی هر مورد به صفحه اختصاصی آن بروید</p>
        </div>
        
        <div class="home-services-grid">
            <!-- کتاب‌فروشی -->
            <div class="home-service-card home-animate-fade-up home-delay-1">
                <div class="home-service-icon">
                    <i class="bi bi-book"></i>
                </div>
                <h3>کتاب‌فروشی</h3>
                <p>انواع کتاب‌های درسی، آموزشی و مطالعاتی با بهترین کیفیت</p>
                <div class="home-service-links">
                    <a href="/pages/school-books" class="home-service-sub-link"><i class="bi bi-chevron-left"></i> کتاب‌های درسی مکتب</a>
                    <a href="/pages/english-books" class="home-service-sub-link"><i class="bi bi-chevron-left"></i> کتاب‌های انگلیسی</a>
                    <a href="/pages/reading-books" class="home-service-sub-link"><i class="bi bi-chevron-left"></i> کتاب‌های مطالعاتی</a>
                    <a href="/pages/electronic-books" class="home-service-sub-link"><i class="bi bi-chevron-left"></i> کتاب‌های الکترونیکی</a>
                    <a href="/pages/konkoor-books" class="home-service-sub-link"><i class="bi bi-chevron-left"></i> کتاب‌های کانکوری</a>
                </div>
            </div>
            
            <!-- مطبعه -->
            <div class="home-service-card home-animate-fade-up home-delay-2">
                <div class="home-service-icon">
                    <i class="bi bi-printer"></i>
                </div>
                <h3>مطبعه</h3>
                <p>خدمات چاپ، کپی، اسکن و طراحی با بالاترین کیفیت</p>
                <div class="home-service-links">
                    <a href="/pages/copy-print-scan" class="home-service-sub-link"><i class="bi bi-chevron-left"></i> پرینت، کپی و اسکن</a>
                    <a href="/pages/quran" class="home-service-sub-link"><i class="bi bi-chevron-left"></i> چاپ رقعه ختم قرآن</a>
                    <a href="/pages/wedding-card" class="home-service-sub-link"><i class="bi bi-chevron-left"></i> چاپ کارت عروسی</a>
                    <a href="/pages/pvc-card" class="home-service-sub-link"><i class="bi bi-chevron-left"></i> کاپی استخوانی (PVC)</a>
                    <a href="/pages/translation" class="home-service-sub-link"><i class="bi bi-chevron-left"></i> ترجمه اسناد</a>
                    <a href="/pages/lamination" class="home-service-sub-link"><i class="bi bi-chevron-left"></i> لمینت اسناد</a>
                    <a href="/pages/online-registration" class="home-service-sub-link"><i class="bi bi-chevron-left"></i> ثبت‌نام خدمات آنلاین</a>
                </div>
            </div>
            
            <!-- عکاسی -->
            <div class="home-service-card home-animate-fade-up home-delay-3">
                <div class="home-service-icon">
                    <i class="bi bi-camera"></i>
                </div>
                <h3>عکاسی</h3>
                <p>خدمات عکاسی حرفه‌ای و ادیت تصاویر</p>
                <div class="home-service-links">
                    <a href="/pages/professional-photos" class="home-service-sub-link"><i class="bi bi-chevron-left"></i> عکس‌های حرفه‌ای</a>
                    <a href="/pages/photo-restore" class="home-service-sub-link"><i class="bi bi-chevron-left"></i> بازسازی عکس کهنه</a>
                    <a href="/pages/photo-edit" class="home-service-sub-link"><i class="bi bi-chevron-left"></i> ادیت عکس سفارشی</a>
                </div>
            </div>
            
            <!-- قرطاسیه‌فروشی -->
            <div class="home-service-card home-animate-fade-up home-delay-1">
                <div class="home-service-icon">
                    <i class="bi bi-pencil"></i>
                </div>
                <h3>قرطاسیه‌فروشی</h3>
                <p>لوازم تحریر، اداری و هنری با کیفیت</p>
                <div class="home-service-links">
                    <a href="/pages/writting-tools" class="home-service-sub-link"><i class="bi bi-chevron-left"></i> لوازم تحریر</a>
                    <a href="/pages/office-supplies" class="home-service-sub-link"><i class="bi bi-chevron-left"></i> لوازم اداری</a>
                    <a href="/pages/art-stationary" class="home-service-sub-link"><i class="bi bi-chevron-left"></i> لوازم هنری</a>
                </div>
            </div>
            
            <!-- آموزش دیجیتال -->
            <div class="home-service-card home-animate-fade-up home-delay-2">
                <div class="home-service-icon">
                    <i class="bi bi-laptop"></i>
                </div>
                <h3>آموزش دیجیتال</h3>
                <p>بسته‌های آموزشی روی فلش - یادگیری در هر زمان</p>
                <div class="home-service-links">
                    <a href="/pages/computer-lessons" class="home-service-sub-link"><i class="bi bi-chevron-left"></i> آموزش کامپیوتر</a>
                    <a href="/pages/english-lessons" class="home-service-sub-link"><i class="bi bi-chevron-left"></i> آموزش زبان انگلیسی</a>
                    <a href="/pages/ai-lessons" class="home-service-sub-link"><i class="bi bi-chevron-left"></i> آموزش هوش مصنوعی</a>
                    <a href="/pages/entrepreneurship" class="home-service-sub-link"><i class="bi bi-chevron-left"></i> آموزش کارآفرینی</a>
                </div>
            </div>
            
            <!-- خدمات تخصصی -->
            <div class="home-service-card home-animate-fade-up home-delay-3">
                <div class="home-service-icon">
                    <i class="bi bi-gear"></i>
                </div>
                <h3>خدمات تخصصی</h3>
                <p>خدمات ویژه و تخصصی با بالاترین کیفیت</p>
                <div class="home-service-links">
                    <a href="/pages/web-develob" class="home-service-sub-link"><i class="bi bi-chevron-left"></i> طراحی وب‌سایت</a>
                    <a href="/pages/video-edit" class="home-service-sub-link"><i class="bi bi-chevron-left"></i> ویرایش ویدئو</a>
                    <a href="/pages/software" class="home-service-sub-link"><i class="bi bi-chevron-left"></i> نصب نرم‌افزار</a>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- 3️⃣ مزیت رقابتی -->
<section class="home-advantages">
    <div class="home-container">
        <div class="home-section-header">
            <h2 style="color: white;">چرا ما؟</h2>
            <p style="color: rgba(255,255,255,0.9);">چهار دلیل برای انتخاب ما</p>
        </div>
        
        <div class="home-advantages-grid">
            <div class="home-advantage-item home-animate-fade-up">
                <div class="home-advantage-icon">
                    <i class="bi bi-calendar-check"></i>
                </div>
                <h4>۲۰ سال تجربه</h4>
                <p>از سال ۱۳۸۲ در خدمت شما هستیم</p>
            </div>
            
            <div class="home-advantage-item home-animate-fade-up home-delay-1">
                <div class="home-advantage-icon">
                    <i class="bi bi-lightning-charge"></i>
                </div>
                <h4>تحویل سریع</h4>
                <p>اکثر خدمات در کمتر از ۲۴ ساعت</p>
            </div>
            
            <div class="home-advantage-item home-animate-fade-up home-delay-2">
                <div class="home-advantage-icon">
                    <i class="bi bi-trophy"></i>
                </div>
                <h4>کیفیت تضمینی</h4>
                <p>با مدرن‌ترین دستگاه‌ها</p>
            </div>
            
            <div class="home-advantage-item home-animate-fade-up home-delay-3">
                <div class="home-advantage-icon">
                    <i class="bi bi-cash-stack"></i>
                </div>
                <h4>قیمت منصفانه</h4>
                <p>بهترین قیمت در بازار</p>
            </div>
        </div>
    </div>
</section>

<!-- 4️⃣ فرآیند کار -->
<section class="home-process-section">
    <div class="home-container">
        <div class="home-section-header home-animate-fade-up">
            <h2>چگونه کار می‌کنیم؟</h2>
            <p>سه مرحله ساده برای دریافت خدمات</p>
        </div>
        
        <div class="home-process-steps">
            <div class="home-process-step home-animate-fade-up">
                <div class="home-step-number">۱</div>
                <h4>مراجعه یا تماس</h4>
                <p>به فروشگاه ما بیایید یا با ما تماس بگیرید</p>
            </div>
            
            <div class="home-process-step home-animate-fade-up home-delay-1">
                <div class="home-step-number">۲</div>
                <h4>توضیح نیاز</h4>
                <p>خدمات مورد نظر خود را توضیح دهید</p>
            </div>
            
            <div class="home-process-step home-animate-fade-up home-delay-2">
                <div class="home-step-number">۳</div>
                <h4>اجرا سریع</h4>
                <p>کار شما در کوتاه‌ترین زمان آماده می‌شود</p>
            </div>
        </div>
    </div>
</section>

<!-- 5️⃣ اطلاعات تماس -->
<section class="home-contact-section" id="home-contact">
    <div class="home-container">
        <div class="home-contact-grid">
            <div class="home-contact-info home-animate-fade-up">
                <h3>با ما در تماس باشید</h3>
                <p>جهت اطلاعات بیشتر با تماس بگیرید. ما همیشه آماده پاسخگویی هستیم.</p>
                
                <ul class="home-contact-details">
                    <li><i class="bi bi-telephone"></i> ۰۷۸۱۸۲۱۸۳۸</li>
                    <li><i class="bi bi-whatsapp"></i> ۰۷۸۱۸۲۱۸۳۸</li>
                    <li><i class="bi bi-geo-alt"></i> کابل، ناحیه ۶، شهرک ۱۲ امام، کوچه زیارت 12 امام، قرطاسیه و خدمات کامپیوتری علی اکبری</li>
                    <li><i class="bi bi-clock"></i> همه روزه از ساعت 7 صبح تا 7 شب</li>
                </ul>
                
                <div class="home-contact-buttons">
                    <a href="tel:+93781821838" class="home-contact-btn primary">
                        <i class="bi bi-telephone"></i>
                        تماس تلفنی
                    </a>
                    <a href="https://wa.me/93781821838" class="home-contact-btn secondary" target="_blank">
                        <i class="bi bi-whatsapp"></i>
                        واتس‌اپ
                    </a>
                    <a href="/contact/" class="home-contact-btn secondary">
                        <i class="bi bi-geo-alt"></i>
                        آدرس فروشگاه
                    </a>
                </div>
            </div>
            
            <div class="home-contact-map home-animate-fade-up home-delay-1">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1162.7328810698248!2d69.09046626402966!3d34.4850015911398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d167ef31acce01%3A0x880c8d3d8eb0da98!2z2K7bjNin2LfbjCDYqtqpINis2KfZhdi52Yc!5e0!3m2!1sen!2s!4v1771505183416!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
</section>

</div> <!-- پایان home-page -->

<script>
// اسلایدر هیرو
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.home-slide');
    const dots = document.querySelectorAll('.home-slider-dot');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    // اتوماتیک تغییر هر ۵ ثانیه
    slideInterval = setInterval(nextSlide, 5000);

    // کلیک روی دات‌ها
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(slideInterval);
            showSlide(index);
            slideInterval = setInterval(nextSlide, 5000);
        });
    });

    // توقف اسلایدر هنگام هاور (اختیاری)
    const slider = document.querySelector('.home-hero-slider');
    slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
    slider.addEventListener('mouseleave', () => {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
    });
});
</script>
