---
layout: page
title: "لوازم اداری با کیفیت | فروشگاه علی اکبری - کابل"
description: "عرضه لوازم اداری با تمرکز جدی بر کیفیت و قیمت نازل. محصولات با دوام و قابل اعتماد برای ادارات، شرکت‌ها و مراکز آموزشی."
keywords: "لوازم اداری, تجهیزات اداری, میز اداری, صندلی اداری, فروشگاه علی اکبری, کابل"
breadcrumb:
  - title: "قرطاسیه‌فروشی"
    link: "/stationery"
---

<style>
/* ===== CSS Variables با رنگ‌های شادتر ===== */
:root {
    /* Colors - پالت رنگ شادتر و انرژی‌بخش */
    --primary: #10b981; /* سبز زمردی */
    --primary-dark: #059669;
    --primary-light: #34d399;
    --secondary: #8b5cf6; /* بنفش */
    --accent: #f59e0b; /* نارنجی */
    --accent-bright: #f97316; /* نارنجی روشن‌تر */
    --dark: #0f172a;
    --dark-light: #334155;
    --light: #f8fafc;
    --gray: #64748b;
    --gray-light: #e2e8f0;
    --gray-lighter: #f1f5f9;
    --success: #22c55e;
    --warning: #f59e0b;
    --danger: #ef4444;
    --price-color: #10b981;
    
    /* Gradients با رنگ‌های شادتر */
    --gradient-primary: linear-gradient(135deg, #10b981, #8b5cf6);
    --gradient-accent: linear-gradient(135deg, #f59e0b, #f97316);
    --gradient-light: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(139, 92, 246, 0.1));
    
    /* Shadows با جلوه‌های رنگی */
    --shadow-hover: 0 20px 50px rgba(16, 185, 129, 0.25);
    --shadow-primary: 0 10px 30px rgba(16, 185, 129, 0.2);
}

/* ===== محتوای صفحه ===== */
.page-content {
    max-width: 1400px;
    margin: 0 auto;
    padding: 4rem 2rem;
}

/* هیرو بخش با طراحی شادتر */
.page-hero {
    text-align: center;
    margin-bottom: 5rem;
    position: relative;
    background: var(--gradient-light);
    border-radius: 2rem;
    padding: 4rem 2rem;
    overflow: hidden;
}

.page-hero::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2310b981' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
    opacity: 0.5;
    z-index: 0;
}

.page-title {
    font-size: 3.2rem;
    color: var(--primary-dark);
    margin-bottom: 1.5rem;
    font-weight: 900;
    line-height: 1.2;
    position: relative;
    display: inline-block;
    z-index: 1;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.service-badge {
    display: inline-block;
    background: var(--gradient-accent);
    color: white;
    padding: 0.8rem 2rem;
    border-radius: 50px;
    font-size: 1.8rem;
    font-weight: 800;
    margin: 1rem 0 2rem;
    box-shadow: 0 10px 25px rgba(245, 158, 11, 0.3);
    border: 3px solid white;
    position: relative;
    z-index: 1;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
}

.page-description {
    font-size: 1.3rem;
    color: var(--dark);
    line-height: 2;
    max-width: 1000px;
    margin: 3rem auto 0;
    padding: 3rem;
    background: white;
    border-radius: 1.5rem;
    box-shadow: var(--shadow-lg);
    border: 2px solid rgba(16, 185, 129, 0.1);
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
    height: 4px;
    background: var(--gradient-primary);
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
    background: rgba(16, 185, 129, 0.2);
    z-index: -1;
    border-radius: 2px;
}

/* بخش دسته‌بندی محصولات */
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
    background: var(--gradient-accent);
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
    border-radius: 1.5rem;
    box-shadow: var(--shadow-lg);
    text-align: center;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
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
    height: 100%;
    background: var(--gradient-light);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
    z-index: 0;
}

.category-card:hover::before {
    transform: translateX(0);
}

.category-card:hover {
    transform: translateY(-15px) scale(1.02);
    box-shadow: var(--shadow-hover);
    border-color: var(--primary-light);
}

.category-icon {
    width: 80px;
    height: 80px;
    background: var(--gradient-primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.8rem;
    color: white;
    font-size: 2rem;
    box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
    transition: all 0.4s ease;
    position: relative;
    z-index: 1;
}

.category-card:hover .category-icon {
    transform: scale(1.1) rotate(10deg);
    background: var(--gradient-accent);
}

.category-title {
    font-size: 1.6rem;
    color: var(--primary-dark);
    margin-bottom: 1.2rem;
    font-weight: 800;
    position: relative;
    z-index: 1;
}

.category-description {
    color: var(--gray);
    line-height: 1.7;
    font-size: 1.05rem;
    position: relative;
    z-index: 1;
}

/* بخش گالری تصاویر */
.gallery-section {
    margin: 6rem 0;
    padding: 3rem 0;
    background: var(--gradient-light);
    border-radius: 1.5rem;
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
    border-radius: 1.5rem;
    overflow: hidden;
    box-shadow: var(--shadow-lg);
    transition: all 0.4s ease;
    aspect-ratio: 4/3;
}

.gallery-item:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: var(--shadow-hover);
}

.gallery-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.6s ease;
}

.gallery-item:hover .gallery-img {
    transform: scale(1.1);
}

.gallery-overlay {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
    padding: 1.5rem;
    transform: translateY(100%);
    transition: all 0.4s ease;
}

.gallery-item:hover .gallery-overlay {
    transform: translateY(0);
}

.gallery-title {
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.gallery-description {
    color: rgba(255, 255, 255, 0.9);
    font-size: 0.9rem;
}

/* بخش ویژگی‌ها */
.features-section {
    background: var(--gradient-light);
    padding: 5rem;
    border-radius: 1.5rem;
    margin: 6rem 0;
    position: relative;
    overflow: hidden;
}

.features-section::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 200%;
    background: radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%);
    animation: rotate 20s linear infinite;
}

@keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
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
    border-radius: 1.5rem;
    box-shadow: var(--shadow-lg);
    text-align: center;
    transition: all 0.4s ease;
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
    background: var(--gradient-primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    color: white;
    font-size: 1.8rem;
    box-shadow: 0 10px 20px rgba(16, 185, 129, 0.3);
    transition: all 0.4s ease;
}

.feature-card:hover .feature-icon {
    background: var(--gradient-accent);
    transform: scale(1.1) rotate(10deg);
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
    border-radius: 1.5rem;
    box-shadow: var(--shadow-lg);
    margin: 6rem 0;
    position: relative;
    overflow: hidden;
    border: 2px solid rgba(16, 185, 129, 0.1);
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
    background: var(--gradient-light);
    border-radius: 1.5rem;
    transition: all 0.4s ease;
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
    height: 4px;
    background: var(--gradient-primary);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
}

.method-card:hover::before {
    transform: translateX(0);
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
    transition: all 0.4s ease;
}

.method-card:hover .method-icon {
    color: var(--accent-bright);
    transform: scale(1.1);
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
    background: var(--gradient-primary);
    color: white;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 600;
    transition: all 0.4s ease;
    border: 2px solid transparent;
    position: relative;
    overflow: hidden;
    z-index: 1;
}

.method-btn::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: var(--gradient-accent);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
    z-index: -1;
}

.method-btn:hover::before {
    transform: translateX(0);
}

.method-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(16, 185, 129, 0.3);
}

.whatsapp-btn {
    background: #25D366;
    border-color: #25D366;
}

.whatsapp-btn::before {
    background: #128C7E;
}

.whatsapp-btn:hover {
    border-color: #25D366;
}

/* بخش تماس */
.contact-section {
    background: var(--gradient-primary);
    color: white;
    padding: 5rem 2rem;
    border-radius: 1.5rem;
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
    background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='white' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
}

.contact-title {
    font-size: 2.5rem;
    margin-bottom: 1.8rem;
    font-weight: 800;
    position: relative;
    z-index: 1;
    color: var(--myself)
}

.contact-description {
    font-size: 1.3rem;
    opacity: 0.95;
    max-width: 700px;
    margin: 0 auto 3rem;
    line-height: 1.9;
    position: relative;
    z-index: 1;
    color: var(--myself)
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
    transition: all 0.4s ease;
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
    background: rgba(255, 255, 255, 0.2);
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
    
    .categories-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .category-card {
        padding: 2rem;
    }
    
    .gallery-grid {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 1rem;
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
    <h1 class="page-title">لوازم اداری</h1>
    <div class="service-badge">کیفیت بالا - قیمت مناسب</div>
    <div class="page-description">
        <p>
            <strong>عرضه لوازم اداری</strong> با تمرکز جدی بر کیفیت و قیمت نازل انجام می‌شود. محصولات با دقت انتخاب می‌گردند تا از نظر دوام، کارایی و معیارهای اداری قابل اعتماد باشند. پالیسی کاری بر این اصل استوار است که کیفیت در مرکز توجه قرار داشته باشد و در کنار آن، مناسب‌ترین قیمت برای مشتریان فراهم شود. این رویکرد زمینه تهیه لوازم اداری باصرفه و مطمئن را برای استفاده روزمره ادارات، شرکت‌ها و مراکز آموزشی فراهم می‌سازد.
        </p>
        <p style="margin-top: 2rem; font-style: italic; color: var(--primary-dark);">
            ما تضمین می‌کنیم که تمام محصولات ما از کیفیت عالی برخوردار بوده و با مناسب‌ترین قیمت در اختیار شما قرار می‌گیرند.
        </p>
    </div>
</section>

<!-- بخش دسته‌بندی محصولات -->
<section class="categories-section">
    <div class="section-title">
        <h2>دسته‌بندی محصولات اداری</h2>
        <p>انواع لوازم اداری با کیفیت بالا برای نیازهای مختلف</p>
    </div>
    
    <div class="categories-grid">
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-chair"></i>
            </div>
            <h3 class="category-title">میز و صندلی اداری</h3>
            <p class="category-description">میزهای مدیریتی، میز کارمندی، صندلی‌های اداری ارگونومیک و راحت برای محیط‌های کاری</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-archive"></i>
            </div>
            <h3 class="category-title">سیستم بایگانی</h3>
            <p class="category-description">کمدهای بایگانی، فایل‌های دیواری، قفسه‌های اداری و سیستم‌های سازماندهی اسناد</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-print"></i>
            </div>
            <h3 class="category-title">تجهیزات اداری</h3>
            <p class="category-description">پرینتر، کپی، اسکنر، فکس، دستگاه‌های شیرینگ و دیگر تجهیزات اداری مدرن</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-pen"></i>
            </div>
            <h3 class="category-title">لوازم مصرفی اداری</h3>
            <p class="category-description">کاغذ A4، کارتریج، ماشین حساب، منگنه، سوزن منگنه و دیگر لوازم مصرفی با کیفیت</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-box-open"></i>
            </div>
            <h3 class="category-title">بسته‌بندی و ارسال</h3>
            <p class="category-description">کارتن، نایلون حبابدار، چسب بسته‌بندی، دستگاه چسب‌زن و تجهیزات بسته‌بندی اداری</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-coffee"></i>
            </div>
            <h3 class="category-title">لوازم رفاهی اداری</h3>
            <p class="category-description">یخچال، ماکروفر، سماور، آبسردکن و دیگر لوازم رفاهی برای محیط‌های کاری</p>
        </div>
    </div>
</section>

<!-- بخش گالری تصاویر -->
<section class="gallery-section">
    <div class="section-title">
        <h2>گالری محصولات اداری</h2>
        <p>برخی از محصولات با کیفیت ما را مشاهده کنید</p>
    </div>
    
    <div class="gallery-grid">
        <a href="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" class="gallery-item" data-lightbox="gallery" data-title="میزهای اداری مدرن">
            <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="میزهای اداری مدرن" class="gallery-img">
            <div class="gallery-overlay">
                <h4 class="gallery-title">میزهای اداری مدرن</h4>
                <p class="gallery-description">طراحی ارگونومیک برای محیط‌های کاری حرفه‌ای</p>
            </div>
        </a>
        
        <a href="https://images.unsplash.com/photo-1593078166039-c9878df5c520?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" class="gallery-item" data-lightbox="gallery" data-title="صندلی‌های اداری راحت">
            <img src="https://images.unsplash.com/photo-1593078166039-c9878df5c520?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="صندلی‌های اداری راحت" class="gallery-img">
            <div class="gallery-overlay">
                <h4 class="gallery-title">صندلی‌های اداری راحت</h4>
                <p class="gallery-description">طراحی ارگونومیک برای ساعات کاری طولانی</p>
            </div>
        </a>
        
        <a href="https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" class="gallery-item" data-lightbox="gallery" data-title="سیستم‌های بایگانی">
            <img src="https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="سیستم‌های بایگانی" class="gallery-img">
            <div class="gallery-overlay">
                <h4 class="gallery-title">سیستم‌های بایگانی</h4>
                <p class="gallery-description">کمدهای فلزی و چوبی برای سازماندهی اسناد</p>
            </div>
        </a>
        
        <a href="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" class="gallery-item" data-lightbox="gallery" data-title="تجهیزات اداری مدرن">
            <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="تجهیزات اداری مدرن" class="gallery-img">
            <div class="gallery-overlay">
                <h4 class="gallery-title">تجهیزات اداری مدرن</h4>
                <p class="gallery-description">پرینتر، اسکنر و دستگاه کپی با کیفیت بالا</p>
            </div>
        </a>
    </div>
</section>

<!-- بخش ویژگی‌ها -->
<section class="features-section">
    <div class="section-title">
        <h2>چرا لوازم اداری ما بهترین انتخاب است؟</h2>
        <p>مزایای خرید لوازم اداری از فروشگاه ما</p>
    </div>
    
    <div class="features-grid">
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-medal"></i>
            </div>
            <h3 class="feature-title">کیفیت تضمین شده</h3>
            <p class="feature-description">تمام محصولات ما از بهترین مواد اولیه ساخته شده و کیفیت آنها تضمین می‌شود</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-tags"></i>
            </div>
            <h3 class="feature-title">قیمت مناسب</h3>
            <p class="feature-description">مناسب‌ترین قیمت‌ها را برای مشتریان خود فراهم کرده‌ایم</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-shield-alt"></i>
            </div>
            <h3 class="feature-title">دوام و ماندگاری</h3>
            <p class="feature-description">محصولات با دوام و قابل اعتماد برای استفاده طولانی مدت</p>
        </div>
        
    </div>
</section>

<!-- بخش اطلاعات تماس -->
<section class="contact-info-section">
    <div class="section-title">
        <h2>روش خرید و سفارش</h2>
        <p>برای خرید لوازم اداری، یکی از روش‌های زیر را انتخاب کنید</p>
    </div>
    
    <div class="contact-methods">
        <div class="method-card">
            <div class="method-icon">🏪</div>
            <h3 class="method-title">خرید حضوری</h3>
            <p class="method-description">به فروشگاه ما مراجعه کنید، محصولات را از نزدیک ببینید و انتخاب کنید.</p>
            <a href="#footer" class="method-btn">
                آدرس فروشگاه
            </a>
        </div>
        
        <div class="method-card">
            <div class="method-icon">📞</div>
            <h3 class="method-title">سفارش تلفنی</h3>
            <p class="method-description">با ما تماس بگیرید، محصول مورد نظر خود را سفارش دهید و در محل دریافت کنید.</p>
            <a href="tel:+93781821838" class="method-btn">
                تماس: ۰۷۸۱۸۲۱۸۳۸
            </a>
        </div>
        
        <div class="method-card">
            <div class="method-icon">📱</div>
            <h3 class="method-title">سفارش در واتس‌اپ</h3>
            <p class="method-description">عکس محصول مورد نظر را در واتس‌اپ ارسال کنید و قیمت و زمان تحویل را دریافت کنید.</p>
            <a href="https://wa.me/93781821838" class="method-btn whatsapp-btn" target="_blank">
                <i class="fab fa-whatsapp"></i>
                ارتباط در واتس‌اپ
            </a>
        </div>
    </div>
</section>

<!-- بخش تماس -->
<section class="contact-section">
    <h2 class="contact-title">برای خرید لوازم اداری با کیفیت</h2>
    <p class="contact-description">
        با ما تماس بگیرید یا به فروشگاه ما مراجعه کنید
        <br>
        کیفیت بالا، قیمت مناسب و گارانتی محصولات را تجربه کنید
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
    
    <p style="margin-top: 2rem; opacity: 0.9; font-size: 1.1rem; color: var(--myself)">
        📍 کابل، ناحیه ۶، شهرک ۱۲ امام | 🕗 ۸ صبح تا ۸ شب
    </p>
</section>
