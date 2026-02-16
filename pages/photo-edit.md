---
layout: page
title: "ادیت عکس مطابق سفارش | فروشگاه علی اکبری - کابل"
description: "ادیت عکس مطابق سفارش با دقت و توجه کامل انجام می‌شود. اصلاح و بهینه‌سازی تصاویر شخصی، خانوادگی، اداری و تبلیغاتی با بالاترین کیفیت."
keywords: "ادیت عکس, ویرایش عکس, روتوش عکس, اصلاح رنگ عکس, فتوشاپ, فروشگاه علی اکبری, کابل"
breadcrumb:
  - title: "عکاسی"
    link: "/photography"
---

<style>
/* ===== متغیرهای رنگی جدید و شادتر ===== */
:root {
    /* پالت رنگی شادتر و پرانرژی */
    --primary: #00b4d8; /* آبی فیروزه‌ای شاد */
    --primary-dark: #0096c7; /* آبی تیره‌تر */
    --primary-light: #90e0ef; /* آبی روشن */
    --secondary: #ff6b6b; /* قرمز مرجانی جذاب */
    --accent: #ffd166; /* زرد طلایی */
    --accent-light: #ffe99b; /* زرد روشن */
    --success: #06d6a0; /* سبز فیروزه‌ای */
    --dark: #0d1b2a; /* آبی مشکی */
    --dark-light: #415a77; /* آبی خاکستری */
    --light: #f8f9fa; /* سفید مایل به خاکستری */
    --gray: #6c757d; /* خاکستری */
    --gray-light: #e9ecef; /* خاکستری روشن */
    --gray-lighter: #f8f9fa; /* خاکستری خیلی روشن */
    --shadow-hover: 0 20px 50px rgba(0, 180, 216, 0.3); /* سایه با رنگ اصلی */
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
    background: radial-gradient(circle, rgba(0, 180, 216, 0.15) 0%, transparent 70%);
    z-index: -1;
}

.page-hero::after {
    content: '';
    position: absolute;
    bottom: -100px;
    left: -100px;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(255, 107, 107, 0.1) 0%, transparent 70%);
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
    box-shadow: 0 4px 12px rgba(0, 180, 216, 0.3);
}

.service-badge {
    display: inline-block;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    color: white;
    padding: 0.8rem 2.5rem;
    border-radius: 50px;
    font-size: 1.8rem;
    font-weight: 800;
    margin: 1.5rem 0 2.5rem;
    box-shadow: 0 15px 30px rgba(0, 180, 216, 0.4);
    border: 4px solid white;
    position: relative;
    overflow: hidden;
    z-index: 1;
}

.service-badge::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), transparent);
    z-index: -1;
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
    box-shadow: var(--shadow-lg);
    border: 3px solid rgba(0, 180, 216, 0.15);
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
    width: 100px;
    height: 100px;
    background: radial-gradient(circle, rgba(255, 209, 102, 0.1) 0%, transparent 70%);
    z-index: -1;
}

.page-description strong {
    color: var(--primary);
    font-weight: 800;
    position: relative;
    padding: 0 4px;
    background: linear-gradient(120deg, rgba(0, 180, 216, 0.15), transparent);
    border-radius: 4px;
}

.page-description em {
    color: var(--secondary);
    font-style: italic;
    font-weight: 600;
}

/* بخش دسته‌بندی خدمات */
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
    background: linear-gradient(135deg, var(--primary-dark), var(--secondary));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    margin-bottom: 1.5rem;
    font-weight: 800;
    position: relative;
    display: inline-block;
}

.section-title h2::after {
    content: '';
    position: absolute;
    bottom: -12px;
    right: 50%;
    transform: translateX(50%);
    width: 120px;
    height: 5px;
    background: linear-gradient(90deg, var(--primary), var(--accent));
    border-radius: 3px;
    box-shadow: 0 4px 12px rgba(0, 180, 216, 0.3);
}

.section-title p {
    color: var(--dark-light);
    font-size: 1.2rem;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.8;
    font-weight: 500;
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
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    text-align: center;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: 2px solid transparent;
    position: relative;
    overflow: hidden;
    z-index: 1;
}

.category-card::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(0, 180, 216, 0.05), rgba(255, 107, 107, 0.05));
    z-index: -1;
}

.category-card::after {
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

.category-card:hover::after {
    transform: translateX(0);
}

.category-card:hover {
    transform: translateY(-15px) scale(1.02);
    box-shadow: var(--shadow-hover);
    border-color: var(--primary-light);
}

.category-icon {
    width: 85px;
    height: 85px;
    background: linear-gradient(135deg, #2edef6, #4a5ebc);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.8rem;
    color: white;
    font-size: 2.2rem;
    box-shadow: 0 15px 30px rgba(0, 180, 216, 0.4);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
    overflow: hidden;
}

.category-icon::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), transparent);
}

.category-card:hover .category-icon {
    transform: scale(1.15) rotate(10deg);
    box-shadow: 0 20px 40px rgba(0, 180, 216, 0.6);
}

.category-title {
    font-size: 1.6rem;
    color: var(--primary-dark);
    margin-bottom: 1.2rem;
    font-weight: 800;
    position: relative;
    display: inline-block;
}

.category-title::after {
    content: '';
    position: absolute;
    bottom: -5px;
    right: 0;
    width: 0;
    height: 2px;
    background: var(--accent);
    transition: width 0.3s ease;
}

.category-card:hover .category-title::after {
    width: 100%;
}

.category-description {
    color: var(--dark-light);
    line-height: 1.7;
    font-size: 1.05rem;
    font-weight: 500;
}

/* بخش گالری تصاویر */
.gallery-section {
    margin: 6rem 0;
    padding: 4rem 0;
    background: linear-gradient(135deg, rgba(0, 180, 216, 0.03), rgba(255, 107, 107, 0.03));
    border-radius: 25px;
    position: relative;
    overflow: hidden;
}

.gallery-section::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(0, 180, 216, 0.1) 0%, transparent 70%);
}

.gallery-section::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(255, 107, 107, 0.1) 0%, transparent 70%);
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.8rem;
    margin-top: 3rem;
    padding: 0 1rem;
    position: relative;
    z-index: 1;
}

.gallery-item {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    aspect-ratio: 4/3;
}

.gallery-item:hover {
    transform: translateY(-12px) scale(1.03);
    box-shadow: var(--shadow-hover);
}

.gallery-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
}

.gallery-item:hover .gallery-img {
    transform: scale(1.15);
}

.gallery-overlay {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.85));
    padding: 1.8rem;
    transform: translateY(100%);
    transition: transform 0.4s ease;
}

.gallery-item:hover .gallery-overlay {
    transform: translateY(0);
}

.gallery-title {
    color: white;
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.gallery-description {
    color: rgba(255, 255, 255, 0.9);
    font-size: 0.95rem;
    line-height: 1.5;
}

/* بخش قبل و بعد */
.before-after-section {
    background: linear-gradient(135deg, rgba(0, 180, 216, 0.05), rgba(255, 107, 107, 0.05));
    padding: 5rem;
    border-radius: 25px;
    margin: 6rem 0;
    position: relative;
    overflow: hidden;
}

.before-after-section::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(0, 180, 216, 0.1) 0%, transparent 70%);
}

.before-after-container {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
}

.before-after-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 3rem;
    margin-top: 3rem;
}

.before-after-card {
    background: white;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.before-after-card:hover {
    transform: translateY(-12px);
    box-shadow: var(--shadow-hover);
}

.ba-image-container {
    position: relative;
    height: 250px;
    overflow: hidden;
}

.ba-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
}

.before-after-card:hover .ba-image {
    transform: scale(1.1);
}

.ba-label {
    position: absolute;
    top: 1rem;
    padding: 0.6rem 1.8rem;
    color: white;
    font-weight: 700;
    border-radius: 0 12px 12px 0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    font-size: 1rem;
    letter-spacing: 1px;
}

.ba-label.before {
    background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
}

.ba-label.after {
    background: linear-gradient(135deg, #06d6a0, #2ae4b2);
}

.ba-content {
    padding: 1.8rem;
}

.ba-title {
    font-size: 1.4rem;
    color: var(--primary-dark);
    margin-bottom: 0.8rem;
    font-weight: 700;
}

.ba-description {
    color: var(--dark-light);
    line-height: 1.6;
    font-size: 1rem;
    font-weight: 500;
}

/* بخش ویژگی‌ها */
.features-section {
    background: linear-gradient(135deg, rgba(0, 180, 216, 0.05), rgba(255, 107, 107, 0.05));
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
    background: radial-gradient(circle, rgba(0, 180, 216, 0.1) 0%, transparent 70%);
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
    background: linear-gradient(135deg, rgba(0, 180, 216, 0.03), rgba(255, 107, 107, 0.03));
}

.feature-card:hover {
    transform: translateY(-12px);
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
    box-shadow: 0 15px 30px rgba(0, 180, 216, 0.4);
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
    transform: scale(1.15) rotate(-5deg);
    box-shadow: 0 20px 40px rgba(0, 180, 216, 0.6);
}

.feature-title {
    font-size: 1.4rem;
    color: var(--primary-dark);
    margin-bottom: 1rem;
    font-weight: 700;
}

.feature-description {
    color: var(--dark-light);
    line-height: 1.6;
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
    border: 3px solid rgba(0, 180, 216, 0.15);
}

.contact-info-section::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, var(--secondary), var(--accent), var(--primary));
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
    background: linear-gradient(135deg, rgba(0, 180, 216, 0.05), rgba(255, 107, 107, 0.05));
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
    transform: translateY(-12px);
    border-color: var(--primary);
    box-shadow: var(--shadow-hover);
}

.method-icon {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    color: var(--primary);
    filter: drop-shadow(0 4px 8px rgba(0, 180, 216, 0.3));
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
    box-shadow: 0 15px 30px rgba(0, 180, 216, 0.4);
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
    background: linear-gradient(36deg, #009eff, #6bb7ff);
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
    
    .service-badge {
        font-size: 1.5rem;
        padding: 0.7rem 2rem;
    }
    
    .features-section,
    .contact-info-section,
    .before-after-section {
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
    
    .before-after-grid {
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
    
    .service-badge {
        font-size: 1.3rem;
        padding: 0.6rem 1.5rem;
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
    .contact-section,
    .before-after-section {
        padding: 2rem 1.5rem;
    }
    
    .features-section h2,
    .contact-title {
        font-size: 1.8rem;
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
    <h1 class="page-title">ادیت عکس مطابق سفارش</h1>
    <div class="service-badge">دقت و توجه کامل به جزئیات</div>
    <div class="page-description">
        <p>
            <strong>ادیت عکس مطابق سفارش</strong> با دقت و توجه کامل انجام می‌شود. هر تصویر، چه رسمی، خانوادگی یا خاطره شخصی باشد، با رعایت جزئیات، نور، رنگ و زاویه اصلاح و بهینه‌سازی می‌گردد. استفاده از ابزار و روش‌های تخصصی، کیفیت، وضوح و زیبایی عکس‌ها را تضمین می‌کند و تجربه‌ای مطمئن و حرفه‌ای در اختیار مشتریان قرار می‌دهد. این خدمات مناسب اهداف شخصی، اداری یا تبلیغاتی است و اطمینان می‌دهد که نتیجه نهایی مطابق انتظار و با بالاترین استانداردها ارائه شود.
        </p>
        <p style="margin-top: 2rem; font-style: italic; color: var(--primary-dark);">
            ما با تیمی از متخصصین ویرایش عکس، آماده ارائه خدمات با کیفیت بالا و مطابق دقیق با خواسته‌های شما هستیم.
        </p>
    </div>
</section>

<!-- بخش دسته‌بندی خدمات -->
<section class="categories-section">
    <div class="section-title">
        <h2>انواع خدمات ادیت عکس</h2>
        <p>پوشش کامل نیازهای ویرایش تصویر شما در تمام زمینه‌ها</p>
    </div>
    
    <div class="categories-grid">
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-user-tie"></i>
            </div>
            <h3 class="category-title">ادیت عکس‌های رسمی</h3>
            <p class="category-description">ویرایش عکس‌های پروفایل، رسمی اداری، پاسپورت و مدارک با رعایت استانداردها</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-home"></i>
            </div>
            <h3 class="category-title">ادیت عکس‌های خانوادگی</h3>
            <p class="category-description">بهبود رنگ، نور و حذف نواقص در عکس‌های خانوادگی و خاطرات شخصی</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-briefcase"></i>
            </div>
            <h3 class="category-title">ادیت عکس‌های تبلیغاتی</h3>
            <p class="category-description">ویرایش حرفه‌ای عکس‌های محصولات، کاتالوگ‌ها و محتوای بازاریابی</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-camera-retro"></i>
            </div>
            <h3 class="category-title">رتوش و زیباسازی</h3>
            <p class="category-description">حذف لک، جوش، اصلاح پوست، مو و زیباسازی چهره به صورت طبیعی</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-palette"></i>
            </div>
            <h3 class="category-title">اصلاح رنگ و نور</h3>
            <p class="category-description">تنظیم تعادل رنگ، کنتراست، روشنایی و بهبود کیفیت نور عکس</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-crop-alt"></i>
            </div>
            <h3 class="category-title">برش و ترکیب عکس</h3>
            <p class="category-description">تغییر سایز، برش، ترکیب چند عکس و ایجاد کلاژهای هنری</p>
        </div>
    </div>
</section>

<!-- بخش قبل و بعد -->
<section class="before-after-section">
    <div class="section-title">
        <h2>نمونه کارهای قبل و بعد</h2>
        <p>مشاهده تفاوت کیفیت پس از ادیت حرفه‌ای</p>
    </div>
    
    <div class="before-after-container">
        <div class="before-after-grid">
            <div class="before-after-card">
                <div class="ba-image-container">
                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="عکس قبل از ادیت" class="ba-image">
                    <div class="ba-label before">قبل از ادیت</div>
                </div>
                <div class="ba-content">
                    <h4 class="ba-title">رتوش پرتره</h4>
                    <p class="ba-description">حذف لک‌های پوست، اصلاح نور و رنگ، زیباسازی طبیعی چهره</p>
                </div>
            </div>
            
            <div class="before-after-card">
                <div class="ba-image-container">
                    <img src="https://images.unsplash.com/photo-1542596594-649edbc13630?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="عکس بعد از ادیت" class="ba-image">
                    <div class="ba-label after">بعد از ادیت</div>
                </div>
                <div class="ba-content">
                    <h4 class="ba-title">نتیجه نهایی</h4>
                    <p class="ba-description">چهره‌ای شاداب و طبیعی با حفظ ویژگی‌های اصلی فرد</p>
                </div>
            </div>
            
            <div class="before-after-card">
                <div class="ba-image-container">
                    <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="عکس خانوادگی قبل از ادیت" class="ba-image">
                    <div class="ba-label before">قبل از ادیت</div>
                </div>
                <div class="ba-content">
                    <h4 class="ba-title">عکس خانوادگی</h4>
                    <p class="ba-description">عکسی با نور نامناسب و رنگ‌های کمرنگ</p>
                </div>
            </div>
            
            <div class="before-after-card">
                <div class="ba-image-container">
                    <img src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="عکس خانوادگی بعد از ادیت" class="ba-image">
                    <div class="ba-label after">بعد از ادیت</div>
                </div>
                <div class="ba-content">
                    <h4 class="ba-title">نتیجه بهبود یافته</h4>
                    <p class="ba-description">رنگ‌های زنده، نور متعادل و کیفیت بالا</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- بخش گالری تصاویر -->

<!-- بخش ویژگی‌ها -->
<section class="features-section">
    <div class="section-title">
        <h2>مزایای خدمات ادیت عکس ما</h2>
        <p>چرا ویرایش عکس‌های ما بهترین کیفیت را دارند؟</p>
    </div>
    
    <div class="features-grid">
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-eye"></i>
            </div>
            <h3 class="feature-title">دقت به جزئیات</h3>
            <p class="feature-description">توجه کامل به کوچکترین جزئیات در هر تصویر برای نتیجه‌ای بی‌نقص</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-users"></i>
            </div>
            <h3 class="feature-title">متخصصین مجرب</h3>
            <p class="feature-description">تیمی از ویرایشگران حرفه‌ای با سال‌ها تجربه در ادیت عکس</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-clock"></i>
            </div>
            <h3 class="feature-title">تحویل سریع</h3>
            <p class="feature-description">ارائه نتیجه در کوتاه‌ترین زمان ممکن بدون افت کیفیت</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-shield-alt"></i>
            </div>
            <h3 class="feature-title">رضایت تضمینی</h3>
            <p class="feature-description">تضمین رضایت کامل شما از نتیجه نهایی کار</p>
        </div>
    </div>
</section>

<!-- بخش اطلاعات تماس -->
<section class="contact-info-section">
    <div class="section-title">
        <h2>روش سفارش ادیت عکس</h2>
        <p>برای ویرایش عکس خود، یکی از روش‌های زیر را انتخاب کنید</p>
    </div>
    
    <div class="contact-methods">
        <div class="method-card">
            <div class="method-icon">📱</div>
            <h3 class="method-title">ارسال در واتس‌اپ</h3>
            <p class="method-description">عکس خود را در واتس‌اپ ارسال کنید، نظر و قیمت را دریافت نمایید.</p>
            <a href="https://wa.me/93781821838" class="method-btn whatsapp-btn" target="_blank">
                <i class="fab fa-whatsapp"></i>
                ارسال در واتس‌اپ
            </a>
        </div>
        
        <div class="method-card">
            <div class="method-icon">🏪</div>
            <h3 class="method-title">مراجعه حضوری</h3>
            <p class="method-description">به فروشگاه ما مراجعه کنید، عکس خود را بیاورید و با متخصص مشورت کنید.</p>
            <a href="#footer" class="method-btn">
                <i class="fas fa-map-marker-alt"></i>
                آدرس فروشگاه
            </a>
        </div>
        
        <div class="method-card">
            <div class="method-icon">📧</div>
            <h3 class="method-title">ارسال ایمیل</h3>
            <p class="method-description">عکس خود را ایمیل کنید، جزییات سفارش و قیمت را دریافت کنید.</p>
            <a href="mailto:photo.edit@gmail.com" class="method-btn">
                <i class="fas fa-envelope"></i>
                ارسال ایمیل
            </a>
        </div>
    </div>
</section>

<!-- بخش تماس -->
<section class="contact-section">
    <h2 class="contact-title">برای سفارش ادیت عکس با کیفیت</h2>
    <p class="contact-description">
        با ما تماس بگیرید یا عکس خود را برای ما ارسال کنید
        <br>
        بهترین کیفیت، قیمت مناسب و تحویل سریع را تجربه کنید
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
    
    <p style="margin-top: 2rem; opacity: 0.95; font-size: 1.1rem; font-weight: 600; text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); color: var(--myself);">
        📍 کابل، ناحیه ۶، شهرک ۱۲ امام | 🕗 ۸ صبح تا ۸ شب
    </p>
</section>
