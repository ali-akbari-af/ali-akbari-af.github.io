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
    background: #f0f7ff;
    color: #1e293b;
    line-height: 1.6;
    direction: rtl;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* ===== رنگ‌بندی آبی جذاب ===== */
:root {
    --primary: #0a58ca;
    --primary-dark: #084298;
    --primary-light: #3b82f6;
    --primary-soft: #e6f0ff;
    --secondary: #00b0ff;
    --accent: #7b68ee;
    --gradient-1: linear-gradient(135deg, #0a58ca, #3b82f6);
    --gradient-2: linear-gradient(135deg, #00b0ff, #7b68ee);
    --text-dark: #1e293b;
    --text-light: #4b5563;
    --bg-light: #f8fafc;
    --white: #ffffff;
    --shadow-sm: 0 4px 6px rgba(10, 88, 202, 0.1);
    --shadow-md: 0 10px 25px rgba(10, 88, 202, 0.15);
    --shadow-lg: 0 20px 40px rgba(10, 88, 202, 0.2);
}

/* ===== انیمیشن‌ها ===== */
@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

@keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* ===== بخش‌بندی اصلی ===== */
section {
    padding: 80px 0;
    position: relative;
}

.section-header {
    text-align: center;
    margin-bottom: 50px;
}

.section-header h2 {
    font-size: 2.5rem;
    color: var(--primary-dark);
    font-weight: 800;
    margin-bottom: 15px;
    position: relative;
    display: inline-block;
}

.section-header h2::after {
    content: '';
    position: absolute;
    bottom: -10px;
    right: 50%;
    transform: translateX(50%);
    width: 80px;
    height: 4px;
    background: var(--gradient-2);
    border-radius: 2px;
}

.section-header p {
    color: var(--text-light);
    font-size: 1.2rem;
    max-width: 700px;
    margin: 0 auto;
}

/* ===== 1️⃣ Hero Section جذاب ===== */
.hero {
    background: linear-gradient(135deg, #0a58ca, #1e3a8a, #3b82f6);
    min-height: 600px;
    display: flex;
    align-items: center;
    margin-top: 80px;
    position: relative;
    overflow: hidden;
}

.hero::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 60%);
    border-radius: 50%;
    animation: float 10s infinite ease-in-out;
}

.hero::after {
    content: '';
    position: absolute;
    bottom: -30%;
    left: -10%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 60%);
    border-radius: 50%;
    animation: float 8s infinite reverse;
}

.hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    align-items: center;
    position: relative;
    z-index: 2;
}

.hero-text h1 {
    font-size: 3rem;
    color: var(--white);
    line-height: 1.2;
    margin-bottom: 20px;
    font-weight: 800;
    text-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.hero-text p {
    font-size: 1.3rem;
    color: rgba(255,255,255,0.95);
    margin-bottom: 30px;
    line-height: 1.8;
}

.hero-cta {
    display: inline-block;
    padding: 15px 40px;
    background: var(--white);
    color: var(--primary-dark);
    text-decoration: none;
    font-weight: 700;
    border-radius: 50px;
    font-size: 1.2rem;
    transition: all 0.3s;
    border: 2px solid var(--white);
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    animation: pulse 2s infinite;
}

.hero-cta:hover {
    background: transparent;
    color: var(--white);
    transform: translateY(-3px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
}

.hero-image {
    width: 100%;
    height: 400px;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 0 30px 60px rgba(0,0,0,0.3);
    border: 5px solid rgba(255,255,255,0.2);
    transform: rotate(2deg);
    transition: all 0.5s;
}

.hero-image:hover {
    transform: rotate(0deg) scale(1.02);
}

.hero-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* ===== 2️⃣ خدمات اصلی با دیزاین کارتی جذاب ===== */
.services-section {
    background: var(--bg-light);
    position: relative;
    overflow: hidden;
}

.services-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 200px;
    background: linear-gradient(180deg, rgba(10,88,202,0.05), transparent);
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    position: relative;
    z-index: 2;
}

.service-card {
    background: var(--white);
    border-radius: 30px;
    padding: 30px;
    box-shadow: var(--shadow-md);
    transition: all 0.4s;
    border: 1px solid rgba(10,88,202,0.1);
    position: relative;
    overflow: hidden;
}

.service-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: var(--gradient-1);
    transform: translateX(-100%);
    transition: transform 0.5s;
}

.service-card:hover {
    transform: translateY(-15px);
    box-shadow: var(--shadow-lg);
    border-color: var(--primary-light);
}

.service-card:hover::before {
    transform: translateX(0);
}

.service-icon {
    width: 70px;
    height: 70px;
    background: var(--gradient-1);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    color: var(--white);
    font-size: 2rem;
    transition: all 0.4s;
    box-shadow: var(--shadow-md);
}

.service-card:hover .service-icon {
    border-radius: 50%;
    transform: rotate(360deg);
}

.service-card h3 {
    font-size: 1.6rem;
    color: var(--primary-dark);
    margin-bottom: 15px;
    font-weight: 700;
}

.service-card p {
    color: var(--text-light);
    margin-bottom: 20px;
    line-height: 1.6;
    font-size: 0.95rem;
}

.service-links {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin-top: 20px;
}

.service-sub-link {
    background: var(--primary-soft);
    color: var(--primary-dark);
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

.service-sub-link:hover {
    background: var(--gradient-1);
    color: var(--white);
    transform: translateX(-5px);
    border-color: var(--white);
}

.service-sub-link i {
    font-size: 0.8rem;
    transition: transform 0.3s;
}

.service-sub-link:hover i {
    transform: translateX(-3px);
}

/* ===== 3️⃣ مزیت رقابتی ===== */
.advantages {
    background: linear-gradient(135deg, #0a58ca, #1e3a8a);
    color: var(--white);
    position: relative;
    overflow: hidden;
}

.advantages::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" opacity="0.1"><path d="M20,20 L80,20 L80,80 L20,80 Z" fill="none" stroke="white" stroke-width="2"/><circle cx="50" cy="50" r="15" fill="none" stroke="white" stroke-width="2"/></svg>') repeat;
    background-size: 50px;
}

.advantages-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    position: relative;
    z-index: 2;
}

.advantage-item {
    text-align: center;
    padding: 30px;
    background: rgba(255,255,255,0.1);
    border-radius: 20px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.2);
    transition: all 0.4s;
}

.advantage-item:hover {
    transform: translateY(-10px);
    background: rgba(255,255,255,0.2);
    border-color: rgba(255,255,255,0.4);
}

.advantage-icon {
    width: 80px;
    height: 80px;
    background: var(--white);
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    color: var(--primary);
    font-size: 2rem;
    transition: all 0.4s;
}

.advantage-item:hover .advantage-icon {
    border-radius: 50%;
    transform: rotate(360deg);
}

.advantage-item h4 {
    font-size: 1.4rem;
    margin-bottom: 10px;
    color: var(--white);
}

.advantage-item p {
    color: rgba(255,255,255,0.9);
    font-size: 1rem;
}

/* ===== 4️⃣ نمونه کار ===== */
.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}

.portfolio-item {
    border-radius: 20px;
    overflow: hidden;
    box-shadow: var(--shadow-md);
    border: 1px solid rgba(10,88,202,0.1);
    transition: all 0.4s;
    position: relative;
}

.portfolio-item:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
}

.portfolio-item a {
    text-decoration: none;
}

.portfolio-image {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    transition: all 0.6s;
}

.portfolio-item:hover .portfolio-image {
    transform: scale(1.1);
}

.portfolio-caption {
    padding: 15px;
    background: var(--white);
    position: relative;
}

.portfolio-caption h4 {
    font-size: 1.1rem;
    color: var(--primary-dark);
    margin-bottom: 5px;
}

.portfolio-caption p {
    font-size: 0.9rem;
    color: var(--text-light);
}

/* ===== 5️⃣ فرآیند کار ===== */
.process-section {
    background: var(--bg-light);
}

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
    content: '→';
    position: absolute;
    top: 50px;
    left: -20px;
    font-size: 2rem;
    color: var(--primary-light);
    opacity: 0.5;
}

.step-number {
    width: 90px;
    height: 90px;
    background: var(--gradient-1);
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    color: var(--white);
    font-size: 2.2rem;
    font-weight: 700;
    box-shadow: var(--shadow-md);
    transition: all 0.4s;
}

.process-step:hover .step-number {
    border-radius: 50%;
    transform: rotate(360deg);
}

.process-step h4 {
    font-size: 1.5rem;
    color: var(--primary-dark);
    margin-bottom: 10px;
}

.process-step p {
    color: var(--text-light);
    font-size: 1.1rem;
}

/* ===== 6️⃣ اطلاعات تماس ===== */
.contact-section {
    background: linear-gradient(135deg, #1e3a8a, #0a58ca);
    color: var(--white);
    padding: 80px 0;
    position: relative;
    overflow: hidden;
}

.contact-section::before {
    content: '📞';
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 8rem;
    opacity: 0.1;
    transform: rotate(15deg);
}

.contact-section::after {
    content: '💬';
    position: absolute;
    bottom: 20px;
    left: 20px;
    font-size: 8rem;
    opacity: 0.1;
    transform: rotate(-15deg);
}

.contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    align-items: center;
    position: relative;
    z-index: 2;
}

.contact-info h3 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    font-weight: 800;
}

.contact-info p {
    font-size: 1.2rem;
    margin-bottom: 30px;
    opacity: 0.9;
    line-height: 1.8;
}

.contact-details {
    list-style: none;
    margin-bottom: 30px;
}

.contact-details li {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 15px;
    font-size: 1.2rem;
    background: rgba(255,255,255,0.1);
    padding: 15px 20px;
    border-radius: 50px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.2);
    transition: all 0.3s;
}

.contact-details li:hover {
    background: rgba(255,255,255,0.2);
    transform: translateX(-5px);
}

.contact-details i {
    width: 40px;
    height: 40px;
    background: rgba(255,255,255,0.2);
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

.contact-btn.primary {
    background: var(--white);
    color: var(--primary-dark);
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
}

.contact-btn.primary:hover {
    background: transparent;
    color: var(--white);
    border-color: var(--white);
    transform: translateY(-3px);
}

.contact-btn.secondary {
    background: rgba(255,255,255,0.15);
    color: var(--white);
    border: 2px solid rgba(255,255,255,0.3);
    backdrop-filter: blur(10px);
}

.contact-btn.secondary:hover {
    background: rgba(255,255,255,0.3);
    transform: translateY(-3px);
    border-color: var(--white);
}

.contact-map {
    width: 100%;
    height: 400px;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 0 30px 60px rgba(0,0,0,0.3);
    border: 5px solid rgba(255,255,255,0.2);
}

.contact-map iframe {
    width: 100%;
    height: 100%;
    border: 0;
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
    .portfolio-grid {
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
        padding: 60px 0;
    }
    
    .hero {
        min-height: auto;
        padding: 60px 0;
    }
    
    .hero-text h1 {
        font-size: 2.2rem;
    }
    
    .services-grid,
    .advantages-grid,
    .portfolio-grid {
        grid-template-columns: 1fr;
    }
    
    .contact-buttons {
        flex-direction: column;
    }
    
    .contact-btn {
        width: 100%;
        justify-content: center;
    }
    
    .service-links {
        grid-template-columns: 1fr;
    }
}

/* ===== انیمیشن‌ها ===== */
.animate-fade-up {
    animation: fadeInUp 1s ease forwards;
}

.delay-1 { animation-delay: 0.2s; }
.delay-2 { animation-delay: 0.4s; }
.delay-3 { animation-delay: 0.6s; }
</style>

<!-- 1️⃣ Hero Section جذاب -->
<section class="hero">
    <div class="container">
        <div class="hero-content">
            <div class="hero-text animate-fade-up">
                <h1>مرکز تخصصی چاپ، کتاب و لوازم تحریر در کابل</h1>
                <p>خدمات چاپ، فروش کتاب‌های درسی و دانشگاهی، لوازم تحریر با کیفیت و آموزش دیجیتال - همه در یک مکان با قیمت منصفانه</p>
                <a href="#services" class="hero-cta">✨ مشاهده همه خدمات</a>
            </div>
            <div class="hero-image animate-fade-up delay-1">
                <img src="https://images.unsplash.com/photo-1544716278-e513176f20b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="فروشگاه علی اکبری">
            </div>
        </div>
    </div>
</section>

<!-- 2️⃣ خدمات اصلی با دیزاین کارتی جذاب -->
<section class="services-section" id="services">
    <div class="container">
        <div class="section-header animate-fade-up">
            <h2>خدمات ما</h2>
            <p>با کلیک روی هر مورد به صفحه اختصاصی آن بروید</p>
        </div>
        
        <div class="services-grid">
            <!-- کتاب‌فروشی -->
            <div class="service-card animate-fade-up delay-1">
                <div class="service-icon">
                    <i class="bi bi-book"></i>
                </div>
                <h3>کتاب‌فروشی</h3>
                <p>انواع کتاب‌های درسی، آموزشی و مطالعاتی با بهترین کیفیت</p>
                <div class="service-links">
                    <a href="/pages/school-books" class="service-sub-link"><i class="bi bi-chevron-left"></i> کتاب‌های درسی مکتب</a>
                    <a href="/pages/english-books" class="service-sub-link"><i class="bi bi-chevron-left"></i> کتاب‌های انگلیسی</a>
                    <a href="/pages/reading-books" class="service-sub-link"><i class="bi bi-chevron-left"></i> کتاب‌های مطالعاتی</a>
                    <a href="/pages/electronic-books" class="service-sub-link"><i class="bi bi-chevron-left"></i> کتاب‌های الکترونیکی</a>
                    <a href="/pages/konkoor-books" class="service-sub-link"><i class="bi bi-chevron-left"></i> کتاب‌های کانکوری</a>
                </div>
            </div>
            
            <!-- مطبعه -->
            <div class="service-card animate-fade-up delay-2">
                <div class="service-icon">
                    <i class="bi bi-printer"></i>
                </div>
                <h3>مطبعه</h3>
                <p>خدمات چاپ، کپی، اسکن و طراحی با بالاترین کیفیت</p>
                <div class="service-links">
                    <a href="/pages/copy-print-scan" class="service-sub-link"><i class="bi bi-chevron-left"></i> پرینت، کپی و اسکن</a>
                    <a href="/pages/quran" class="service-sub-link"><i class="bi bi-chevron-left"></i> چاپ رقعه ختم قرآن</a>
                    <a href="/pages/wedding-card" class="service-sub-link"><i class="bi bi-chevron-left"></i> چاپ کارت عروسی</a>
                    <a href="/pages/pvc-card" class="service-sub-link"><i class="bi bi-chevron-left"></i> کاپی استخوانی (PVC)</a>
                    <a href="/pages/translation" class="service-sub-link"><i class="bi bi-chevron-left"></i> ترجمه اسناد</a>
                    <a href="/pages/lamination" class="service-sub-link"><i class="bi bi-chevron-left"></i> لمینت اسناد</a>
                    <a href="/pages/online-registration" class="service-sub-link"><i class="bi bi-chevron-left"></i> ثبت‌نام خدمات آنلاین</a>
                </div>
            </div>
            
            <!-- عکاسی -->
            <div class="service-card animate-fade-up delay-3">
                <div class="service-icon">
                    <i class="bi bi-camera"></i>
                </div>
                <h3>عکاسی</h3>
                <p>خدمات عکاسی حرفه‌ای و ادیت تصاویر</p>
                <div class="service-links">
                    <a href="/pages/professional-photos" class="service-sub-link"><i class="bi bi-chevron-left"></i> عکس‌های حرفه‌ای</a>
                    <a href="/pages/photo-restore" class="service-sub-link"><i class="bi bi-chevron-left"></i> بازسازی عکس کهنه</a>
                    <a href="/pages/photo-edit" class="service-sub-link"><i class="bi bi-chevron-left"></i> ادیت عکس سفارشی</a>
                </div>
            </div>
            
            <!-- قرطاسیه‌فروشی -->
            <div class="service-card animate-fade-up delay-1">
                <div class="service-icon">
                    <i class="bi bi-pencil"></i>
                </div>
                <h3>قرطاسیه‌فروشی</h3>
                <p>لوازم تحریر، اداری و هنری با کیفیت</p>
                <div class="service-links">
                    <a href="/pages/writting-tools" class="service-sub-link"><i class="bi bi-chevron-left"></i> لوازم تحریر</a>
                    <a href="/pages/office-supplies" class="service-sub-link"><i class="bi bi-chevron-left"></i> لوازم اداری</a>
                    <a href="/pages/art-stationary" class="service-sub-link"><i class="bi bi-chevron-left"></i> لوازم هنری</a>
                </div>
            </div>
            
            <!-- آموزش دیجیتال -->
            <div class="service-card animate-fade-up delay-2">
                <div class="service-icon">
                    <i class="bi bi-laptop"></i>
                </div>
                <h3>آموزش دیجیتال</h3>
                <p>بسته‌های آموزشی روی فلش - یادگیری در هر زمان</p>
                <div class="service-links">
                    <a href="/pages/computer-lessons" class="service-sub-link"><i class="bi bi-chevron-left"></i> آموزش کامپیوتر</a>
                    <a href="/pages/english-lessons" class="service-sub-link"><i class="bi bi-chevron-left"></i> آموزش زبان انگلیسی</a>
                    <a href="/pages/ai-lessons" class="service-sub-link"><i class="bi bi-chevron-left"></i> آموزش هوش مصنوعی</a>
                    <a href="/pages/entrepreneurship" class="service-sub-link"><i class="bi bi-chevron-left"></i> آموزش کارآفرینی</a>
                </div>
            </div>
            
            <!-- خدمات تخصصی -->
            <div class="service-card animate-fade-up delay-3">
                <div class="service-icon">
                    <i class="bi bi-gear"></i>
                </div>
                <h3>خدمات تخصصی</h3>
                <p>خدمات ویژه و تخصصی با بالاترین کیفیت</p>
                <div class="service-links">
                    <a href="/pages/web-develob" class="service-sub-link"><i class="bi bi-chevron-left"></i> طراحی وب‌سایت</a>
                    <a href="/pages/video-edit" class="service-sub-link"><i class="bi bi-chevron-left"></i> ویرایش ویدئو</a>
                    <a href="/pages/software" class="service-sub-link"><i class="bi bi-chevron-left"></i> نصب نرم‌افزار</a>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- 3️⃣ مزیت رقابتی -->
<section class="advantages">
    <div class="container">
        <div class="section-header">
            <h2 style="color: white;">چرا علی اکبری؟</h2>
            <p style="color: rgba(255,255,255,0.9);">چهار دلیل برای انتخاب ما</p>
        </div>
        
        <div class="advantages-grid">
            <div class="advantage-item animate-fade-up">
                <div class="advantage-icon">
                    <i class="bi bi-calendar-check"></i>
                </div>
                <h4>۲۰ سال تجربه</h4>
                <p>از سال ۱۳۸۲ در خدمت شما هستیم</p>
            </div>
            
            <div class="advantage-item animate-fade-up delay-1">
                <div class="advantage-icon">
                    <i class="bi bi-lightning-charge"></i>
                </div>
                <h4>تحویل سریع</h4>
                <p>اکثر خدمات در کمتر از ۲۴ ساعت</p>
            </div>
            
            <div class="advantage-item animate-fade-up delay-2">
                <div class="advantage-icon">
                    <i class="bi bi-trophy"></i>
                </div>
                <h4>کیفیت تضمینی</h4>
                <p>با مدرن‌ترین دستگاه‌ها</p>
            </div>
            
            <div class="advantage-item animate-fade-up delay-3">
                <div class="advantage-icon">
                    <i class="bi bi-cash-stack"></i>
                </div>
                <h4>قیمت منصفانه</h4>
                <p>بهترین قیمت در بازار</p>
            </div>
        </div>
    </div>
</section>

<!-- 4️⃣ نمونه کار -->
<section style="padding: 80px 0;">
    <div class="container">
        <div class="section-header animate-fade-up">
            <h2>نمونه کارها</h2>
            <p>تصاویری از خدمات و محصولات ما</p>
        </div>
        
        <div class="portfolio-grid">
            <div class="portfolio-item animate-fade-up">
                <a href="/pages/copy-print-scan">
                    <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="خدمات چاپ" class="portfolio-image">
                    <div class="portfolio-caption">
                        <h4>خدمات چاپ رنگی</h4>
                        <p>پرینت و کپی با کیفیت</p>
                    </div>
                </a>
            </div>
            
            <div class="portfolio-item animate-fade-up delay-1">
                <a href="/pages/writting-tools">
                    <img src="https://images.unsplash.com/photo-1565688534245-05d6b5be184a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="لوازم تحریر" class="portfolio-image">
                    <div class="portfolio-caption">
                        <h4>لوازم تحریر</h4>
                        <p>انواع خودکار و مداد</p>
                    </div>
                </a>
            </div>
            
            <div class="portfolio-item animate-fade-up delay-2">
                <a href="/pages/school-books">
                    <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="کتاب‌فروشی" class="portfolio-image">
                    <div class="portfolio-caption">
                        <h4>کتاب‌های درسی</h4>
                        <p>کتاب‌های مکتب و دانشگاه</p>
                    </div>
                </a>
            </div>
            
            <div class="portfolio-item animate-fade-up delay-3">
                <a href="/pages/computer-lessons">
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
<section class="process-section">
    <div class="container">
        <div class="section-header animate-fade-up">
            <h2>چگونه کار می‌کنیم؟</h2>
            <p>سه مرحله ساده برای دریافت خدمات</p>
        </div>
        
        <div class="process-steps">
            <div class="process-step animate-fade-up">
                <div class="step-number">۱</div>
                <h4>مراجعه یا تماس</h4>
                <p>به فروشگاه ما بیایید یا با ما تماس بگیرید</p>
            </div>
            
            <div class="process-step animate-fade-up delay-1">
                <div class="step-number">۲</div>
                <h4>توضیح نیاز</h4>
                <p>خدمات مورد نظر خود را توضیح دهید</p>
            </div>
            
            <div class="process-step animate-fade-up delay-2">
                <div class="step-number">۳</div>
                <h4>تحویل سریع</h4>
                <p>کار شما در کوتاه‌ترین زمان آماده می‌شود</p>
            </div>
        </div>
    </div>
</section>

<!-- 6️⃣ اطلاعات تماس (بدون فوتر) -->
<section class="contact-section" id="contact">
    <div class="container">
        <div class="contact-grid">
            <div class="contact-info animate-fade-up">
                <h3>با ما در تماس باشید</h3>
                <p>برای مشاوره، سفارش خدمات یا بازدید حضوری، از راه‌های زیر اقدام کنید. ما همیشه آماده پاسخگویی هستیم.</p>
                
                <ul class="contact-details">
                    <li><i class="bi bi-telephone"></i> ۰۷۸۱۸۲۱۸۳۸</li>
                    <li><i class="bi bi-whatsapp"></i> ۰۷۸۱۸۲۱۸۳۸</li>
                    <li><i class="bi bi-geo-alt"></i> کابل، ناحیه ۶، شهرک ۱۲ امام، چهارراه اول، پلاک ۲۳</li>
                    <li><i class="bi bi-clock"></i> شنبه تا پنج‌شنبه ۸ صبح تا ۸ شب - جمعه‌ها تعطیل</li>
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
                    <a href="/contact/" class="contact-btn secondary">
                        <i class="bi bi-geo-alt"></i>
                        آدرس فروشگاه
                    </a>
                </div>
            </div>
            
            <div class="contact-map animate-fade-up delay-1">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373531590444!3d-37.81627974202167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b3f3f3f%3A0x5045675218ce7e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s" 
                        allowfullscreen="" 
                        loading="lazy"
                        title="موقعیت فروشگاه"></iframe>
            </div>
        </div>
    </div>
</section>