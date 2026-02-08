---
layout: page
title: "بازسازی عکس‌های کهنه | فروشگاه علی اکبری - کابل"
description: "بازسازی عکس‌های کهنه و فرسوده با دقت و حساسیت کامل - احیای خاطرات ارزشمند - فروشگاه علی اکبری کابل"
keywords: "بازسازی عکس, ترمیم عکس کهنه, احیای عکس قدیمی, روتوش حرفه‌ای, کابل, علی اکبری"
breadcrumb:
  - title: "عکاسی"
    link: "/photography"
---

<style>
/* ===== CSS Variables با رنگ‌های شادتر ===== */
:root {
    /* رنگ‌های اصلی شاد و مدرن */
    --primary: #00b4d8;
    --primary-dark: #0096c7;
    --primary-light: #90e0ef;
    --secondary: #ff6b6b;
    --accent: #ffd166;
    --accent-light: #ffe66d;
    --purple: #a663cc;
    --teal: #06d6a0;
    --dark: #1a1a2e;
    --dark-light: #2d3047;
    --light: #f8f9fa;
    --gray: #6c757d;
    --gray-light: #e9ecef;
    --gray-lighter: #f8f9fa;
    --success: #06d6a0;
    --warning: #ffd166;
    --danger: #ef476f;
    --price-color: #00b4d8;
    
    /* Shadows */
    --shadow-lg: 0 10px 30px rgba(0, 0, 0, 0.1);
    --shadow-hover: 0 20px 50px rgba(0, 180, 216, 0.25);
    --shadow-xl: 0 25px 50px rgba(0, 0, 0, 0.15);
    
    /* Transitions */
    --transition-base: 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    --transition-slow: 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    
    /* Border Radius */
    --radius-lg: 20px;
    --radius-xl: 25px;
    --radius-2xl: 30px;
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
    overflow: hidden;
}

.page-hero::before {
    content: '';
    position: absolute;
    top: -100px;
    right: -100px;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(0, 180, 216, 0.2) 0%, transparent 70%);
    z-index: -1;
    animation: float 20s infinite linear;
}

@keyframes float {
    0% { transform: translate(0, 0) rotate(0deg); }
    25% { transform: translate(20px, 20px) rotate(90deg); }
    50% { transform: translate(0, 40px) rotate(180deg); }
    75% { transform: translate(-20px, 20px) rotate(270deg); }
    100% { transform: translate(0, 0) rotate(360deg); }
}

.page-title {
    font-size: 3.5rem;
    color: var(--dark);
    margin-bottom: 1.5rem;
    font-weight: 900;
    line-height: 1.2;
    position: relative;
    display: inline-block;
    background: linear-gradient(90deg, var(--primary), var(--secondary), var(--teal));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.page-title::after {
    content: '';
    position: absolute;
    bottom: -15px;
    right: 50%;
    transform: translateX(50%);
    width: 200px;
    height: 6px;
    background: linear-gradient(90deg, var(--primary), var(--secondary), var(--teal));
    border-radius: 3px;
}

.service-badge {
    display: inline-block;
    background: linear-gradient(135deg, var(--primary), var(--secondary), var(--accent));
    color: white;
    padding: 1rem 2.5rem;
    border-radius: 50px;
    font-size: 2rem;
    font-weight: 800;
    margin: 2rem 0 3rem;
    box-shadow: 0 15px 35px rgba(0, 180, 216, 0.4);
    border: 3px solid white;
    position: relative;
    overflow: hidden;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% { transform: scale(1); box-shadow: 0 15px 35px rgba(0, 180, 216, 0.4); }
    50% { transform: scale(1.05); box-shadow: 0 20px 40px rgba(0, 180, 216, 0.6); }
    100% { transform: scale(1); box-shadow: 0 15px 35px rgba(0, 180, 216, 0.4); }
}

.service-badge::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
        45deg,
        transparent 30%,
        rgba(255, 255, 255, 0.3) 50%,
        transparent 70%
    );
    transform: rotate(45deg);
    animation: shine 3s infinite linear;
}

@keyframes shine {
    0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
    100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
}

.page-description {
    font-size: 1.4rem;
    color: var(--dark);
    line-height: 2;
    max-width: 1000px;
    margin: 3rem auto 0;
    padding: 3rem;
    background: white;
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-lg);
    border: 2px solid rgba(0, 180, 216, 0.15);
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(10px);
}

.page-description::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, var(--primary), var(--secondary), var(--teal));
}

.page-description strong {
    color: var(--primary);
    font-weight: 800;
    position: relative;
    padding: 0 5px;
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.page-description strong::before {
    content: '';
    position: absolute;
    bottom: 2px;
    right: 0;
    width: 100%;
    height: 8px;
    background: rgba(0, 180, 216, 0.25);
    z-index: -1;
    border-radius: 3px;
    transform: skewX(-15deg);
}

/* بخش دسته‌بندی خدمات */
.categories-section {
    margin: 6rem 0;
}

.section-title {
    text-align: center;
    margin-bottom: 5rem;
    position: relative;
}

.section-title h2 {
    font-size: 3rem;
    color: var(--dark);
    margin-bottom: 1.5rem;
    font-weight: 900;
    position: relative;
    display: inline-block;
    background: linear-gradient(90deg, var(--primary), var(--teal));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.section-title h2::after {
    content: '';
    position: absolute;
    bottom: -15px;
    right: 50%;
    transform: translateX(50%);
    width: 150px;
    height: 5px;
    background: linear-gradient(90deg, var(--primary), var(--teal));
    border-radius: 3px;
}

.section-title p {
    color: var(--gray);
    font-size: 1.3rem;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.8;
}

.categories-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 3rem;
    margin-top: 3rem;
}

.category-card {
    background: white;
    padding: 2.5rem;
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-lg);
    text-align: center;
    transition: var(--transition-base);
    border: 2px solid transparent;
    position: relative;
    overflow: hidden;
    height: 100%;
}

.category-card::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, var(--primary), var(--secondary), var(--accent));
    transform: translateX(-100%);
    transition: transform 0.6s ease;
}

.category-card:hover::before {
    transform: translateX(0);
}

.category-card:hover {
    transform: translateY(-20px) scale(1.02);
    box-shadow: var(--shadow-hover);
    border-color: var(--primary-light);
}

.category-icon {
    width: 90px;
    height: 90px;
    background: linear-gradient(135deg, var(--primary), var(--teal), var(--accent));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 2rem;
    color: white;
    font-size: 2.5rem;
    box-shadow: 0 15px 30px rgba(0, 180, 216, 0.4);
    transition: var(--transition-base);
    position: relative;
    overflow: hidden;
}

.category-icon::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
    transform: rotate(45deg);
    transition: var(--transition-slow);
}

.category-card:hover .category-icon {
    transform: scale(1.15) rotate(10deg);
    background: linear-gradient(135deg, var(--secondary), var(--accent), var(--purple));
}

.category-title {
    font-size: 1.8rem;
    color: var(--dark);
    margin-bottom: 1.5rem;
    font-weight: 800;
    position: relative;
}

.category-title::after {
    content: '';
    position: absolute;
    bottom: -8px;
    right: 50%;
    transform: translateX(50%);
    width: 60px;
    height: 3px;
    background: var(--primary);
    border-radius: 2px;
    transition: var(--transition-base);
}

.category-card:hover .category-title::after {
    width: 100px;
    background: var(--secondary);
}

.category-description {
    color: var(--gray);
    line-height: 1.8;
    font-size: 1.1rem;
    margin-top: 1rem;
}

/* بخش عکس‌های قبل و بعد */
.before-after-section {
    margin: 8rem 0;
    padding: 4rem 0;
    background: linear-gradient(135deg, 
        rgba(0, 180, 216, 0.1), 
        rgba(255, 107, 107, 0.1),
        rgba(6, 214, 160, 0.1));
    border-radius: var(--radius-xl);
    position: relative;
    overflow: hidden;
}

.before-after-section::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M45 60c12 0 20-8 20-20s-8-20-20-20-20 8-20 20 8 20 20 20zm100 50c12 0 20-8 20-20s-8-20-20-20-20 8-20 20 8 20 20 20zm-90 0c6.6 0 12-5.4 12-12s-5.4-12-12-12-12 5.4-12 12 5.4 12 12 12zm120-60c6.6 0 12-5.4 12-12s-5.4-12-12-12-12 5.4-12 12 5.4 12 12 12zM60 180c6.6 0 12-5.4 12-12s-5.4-12-12-12-12 5.4-12 12 5.4 12 12 12z' fill='%2300b4d8' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
}

.before-after-container {
    max-width: 1200px;
    margin: 3rem auto 0;
    padding: 0 1rem;
    position: relative;
    z-index: 1;
}

.before-after-item {
    background: white;
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-xl);
    overflow: hidden;
    margin-bottom: 4rem;
    transition: var(--transition-base);
    border: 2px solid transparent;
}

.before-after-item:hover {
    transform: translateY(-10px) scale(1.01);
    box-shadow: 0 30px 60px rgba(0, 180, 216, 0.3);
    border-color: var(--primary);
}

.before-after-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.8rem 2.5rem;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    color: white;
    position: relative;
    overflow: hidden;
}

.before-after-header::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, 
        transparent 30%, 
        rgba(255, 255, 255, 0.2) 50%, 
        transparent 70%);
    transform: translateX(-100%);
    animation: slideShine 3s infinite;
}

@keyframes slideShine {
    0% { transform: translateX(-100%); }
    50% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
}

.before-title, .after-title {
    font-size: 1.5rem;
    font-weight: 700;
    position: relative;
    z-index: 1;
}

.before-title::before, .after-title::before {
    content: '';
    position: absolute;
    bottom: -5px;
    right: 0;
    width: 100%;
    height: 3px;
    background: white;
    border-radius: 2px;
}

.before-after-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    padding: 0;
}

.before-image, .after-image {
    padding: 2.5rem;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.before-image::before, .after-image::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, 
        rgba(0, 180, 216, 0.1), 
        rgba(255, 107, 107, 0.1));
    opacity: 0;
    transition: var(--transition-base);
}

.before-image:hover::before, .after-image:hover::before {
    opacity: 1;
}

.before-image img, .after-image img {
    width: 100%;
    height: 350px;
    object-fit: cover;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    transition: var(--transition-base);
    position: relative;
    z-index: 1;
}

.before-image img:hover, .after-image img:hover {
    transform: scale(1.05);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

/* بخش مراحل بازسازی */
.steps-section {
    background: linear-gradient(135deg, 
        rgba(0, 180, 216, 0.08), 
        rgba(6, 214, 160, 0.08),
        rgba(255, 209, 102, 0.08));
    padding: 6rem;
    border-radius: var(--radius-2xl);
    margin: 8rem 0;
    position: relative;
    overflow: hidden;
    border: 2px solid rgba(0, 180, 216, 0.2);
}

.steps-section::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
}

.steps-timeline {
    max-width: 900px;
    margin: 4rem auto 0;
    position: relative;
    z-index: 1;
}

.steps-timeline::before {
    content: '';
    position: absolute;
    top: 0;
    right: 50%;
    transform: translateX(50%);
    width: 5px;
    height: 100%;
    background: linear-gradient(to bottom, var(--primary), var(--secondary), var(--teal));
    border-radius: 3px;
    box-shadow: 0 5px 15px rgba(0, 180, 216, 0.5);
}

.step-item {
    display: flex;
    align-items: center;
    margin-bottom: 4rem;
    position: relative;
}

.step-item:nth-child(odd) {
    flex-direction: row-reverse;
}

.step-content {
    flex: 1;
    padding: 2.5rem;
    background: white;
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-lg);
    position: relative;
    border: 2px solid transparent;
    transition: var(--transition-base);
    backdrop-filter: blur(10px);
}

.step-item:nth-child(odd) .step-content {
    margin-left: 5rem;
}

.step-item:nth-child(even) .step-content {
    margin-right: 5rem;
}

.step-content:hover {
    transform: translateY(-10px) scale(1.02);
    border-color: var(--primary);
    box-shadow: var(--shadow-hover);
}

.step-number {
    position: absolute;
    top: -25px;
    right: 50%;
    transform: translateX(50%);
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, var(--primary), var(--teal));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 800;
    font-size: 1.5rem;
    z-index: 2;
    box-shadow: 0 10px 20px rgba(0, 180, 216, 0.4);
    transition: var(--transition-base);
}

.step-content:hover .step-number {
    transform: translateX(50%) scale(1.2);
    background: linear-gradient(135deg, var(--secondary), var(--accent));
}

.step-icon {
    font-size: 3rem;
    color: var(--primary);
    margin-bottom: 1.5rem;
    text-align: center;
    transition: var(--transition-base);
}

.step-content:hover .step-icon {
    transform: rotate(15deg) scale(1.2);
    color: var(--secondary);
}

.step-title {
    font-size: 1.6rem;
    color: var(--dark);
    margin-bottom: 1.2rem;
    font-weight: 800;
    text-align: center;
    position: relative;
}

.step-title::after {
    content: '';
    position: absolute;
    bottom: -8px;
    right: 50%;
    transform: translateX(50%);
    width: 60px;
    height: 3px;
    background: var(--primary);
    border-radius: 2px;
    transition: var(--transition-base);
}

.step-content:hover .step-title::after {
    width: 100px;
    background: var(--secondary);
}

.step-description {
    color: var(--gray);
    line-height: 1.8;
    text-align: center;
    font-size: 1.1rem;
}

/* بخش ویژگی‌ها */
.features-section {
    background: white;
    padding: 6rem;
    border-radius: var(--radius-2xl);
    margin: 8rem 0;
    position: relative;
    overflow: hidden;
    border: 2px solid rgba(0, 180, 216, 0.2);
    box-shadow: var(--shadow-xl);
}

.features-section::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, 
        rgba(0, 180, 216, 0.05) 0%, 
        rgba(255, 107, 107, 0.05) 100%);
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 3rem;
    margin-top: 4rem;
    position: relative;
    z-index: 1;
}

.feature-card {
    background: linear-gradient(135deg, 
        rgba(255, 255, 255, 0.9), 
        rgba(255, 255, 255, 0.7));
    padding: 3rem;
    border-radius: var(--radius-xl);
    text-align: center;
    transition: var(--transition-base);
    border: 2px solid transparent;
    height: 100%;
    backdrop-filter: blur(10px);
    position: relative;
    overflow: hidden;
}

.feature-card::before {
    content: '';
    position: absolute;
    top: -2px;
    right: -2px;
    bottom: -2px;
    left: -2px;
    background: linear-gradient(45deg, 
        var(--primary), 
        var(--secondary), 
        var(--teal), 
        var(--accent));
    border-radius: var(--radius-xl);
    z-index: -1;
    opacity: 0;
    transition: var(--transition-base);
}

.feature-card:hover::before {
    opacity: 1;
}

.feature-card:hover {
    transform: translateY(-15px) scale(1.03);
    border-color: var(--primary);
    box-shadow: 0 25px 50px rgba(0, 180, 216, 0.3);
}

.feature-icon {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, var(--primary), var(--teal));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 2rem;
    color: white;
    font-size: 2rem;
    box-shadow: 0 15px 30px rgba(0, 180, 216, 0.4);
    transition: var(--transition-base);
    position: relative;
    overflow: hidden;
}

.feature-icon::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, transparent 70%);
    transform: rotate(45deg);
    transition: var(--transition-slow);
}

.feature-card:hover .feature-icon {
    transform: scale(1.2) rotate(-10deg);
    background: linear-gradient(135deg, var(--secondary), var(--accent));
}

.feature-title {
    font-size: 1.6rem;
    color: var(--dark);
    margin-bottom: 1.5rem;
    font-weight: 800;
    position: relative;
}

.feature-title::after {
    content: '';
    position: absolute;
    bottom: -8px;
    right: 50%;
    transform: translateX(50%);
    width: 60px;
    height: 3px;
    background: var(--primary);
    border-radius: 2px;
    transition: var(--transition-base);
}

.feature-card:hover .feature-title::after {
    width: 100px;
    background: var(--secondary);
}

.feature-description {
    color: var(--gray);
    line-height: 1.8;
    font-size: 1.1rem;
}

/* بخش اطلاعات تماس */
.contact-info-section {
    background: white;
    padding: 6rem;
    border-radius: var(--radius-2xl);
    box-shadow: var(--shadow-xl);
    margin: 8rem 0;
    position: relative;
    overflow: hidden;
    border: 2px solid rgba(0, 180, 216, 0.2);
}

.contact-info-section::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, 
        rgba(0, 180, 216, 0.05) 0%, 
        rgba(6, 214, 160, 0.05) 100%);
}

.contact-methods {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 3rem;
    margin-top: 4rem;
    position: relative;
    z-index: 1;
}

.method-card {
    text-align: center;
    padding: 3rem 2.5rem;
    background: linear-gradient(135deg, 
        rgba(255, 255, 255, 0.9), 
        rgba(255, 255, 255, 0.7));
    border-radius: var(--radius-xl);
    transition: var(--transition-base);
    border: 2px solid transparent;
    backdrop-filter: blur(10px);
    position: relative;
    overflow: hidden;
}

.method-card::before {
    content: '';
    position: absolute;
    top: -2px;
    right: -2px;
    bottom: -2px;
    left: -2px;
    background: linear-gradient(45deg, 
        var(--primary), 
        var(--secondary), 
        var(--teal));
    border-radius: var(--radius-xl);
    z-index: -1;
    opacity: 0;
    transition: var(--transition-base);
}

.method-card:hover::before {
    opacity: 1;
}

.method-card:hover {
    transform: translateY(-15px) scale(1.03);
    box-shadow: 0 25px 50px rgba(0, 180, 216, 0.3);
}

.method-icon {
    font-size: 4rem;
    margin-bottom: 2rem;
    color: var(--primary);
    transition: var(--transition-base);
    display: inline-block;
}

.method-card:hover .method-icon {
    transform: scale(1.2) rotate(10deg);
    color: var(--secondary);
}

.method-title {
    font-size: 1.7rem;
    color: var(--dark);
    margin-bottom: 1.2rem;
    font-weight: 800;
    position: relative;
}

.method-title::after {
    content: '';
    position: absolute;
    bottom: -8px;
    right: 50%;
    transform: translateX(50%);
    width: 60px;
    height: 3px;
    background: var(--primary);
    border-radius: 2px;
    transition: var(--transition-base);
}

.method-card:hover .method-title::after {
    width: 100px;
    background: var(--secondary);
}

.method-description {
    color: var(--gray);
    margin-bottom: 2.5rem;
    line-height: 1.8;
    font-size: 1.1rem;
}

.method-btn {
    display: inline-block;
    padding: 1.2rem 2.5rem;
    background: linear-gradient(135deg, var(--primary), var(--teal));
    color: white;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 700;
    transition: var(--transition-base);
    border: 2px solid transparent;
    position: relative;
    overflow: hidden;
    font-size: 1.1rem;
}

.method-btn::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, 
        transparent 30%, 
        rgba(255, 255, 255, 0.3) 50%, 
        transparent 70%);
    transform: translateX(-100%);
    transition: var(--transition-slow);
}

.method-btn:hover::before {
    transform: translateX(100%);
}

.method-btn:hover {
    background: white;
    color: var(--primary);
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 15px 30px rgba(0, 180, 216, 0.4);
    border-color: var(--primary);
}

.whatsapp-btn {
    background: linear-gradient(135deg, #25D366, #128C7E);
    border-color: #25D366;
}

.whatsapp-btn:hover {
    background: white;
    color: #25D366;
    border-color: #25D366;
}

/* بخش تماس */
.contact-section {
    background: linear-gradient(135deg, var(--primary), var(--secondary), var(--teal));
    color: white;
    padding: 6rem 2rem;
    border-radius: var(--radius-2xl);
    margin: 8rem 0;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.contact-section::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.15) 0%, transparent 50%);
    animation: rotate 20s infinite linear;
}

@keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.contact-title {
    font-size: 3rem;
    margin-bottom: 2rem;
    font-weight: 900;
    position: relative;
    z-index: 1;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.contact-description {
    font-size: 1.4rem;
    opacity: 0.95;
    max-width: 800px;
    margin: 0 auto 4rem;
    line-height: 2;
    position: relative;
    z-index: 1;
    text-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
}

.contact-buttons {
    display: flex;
    gap: 2rem;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
    z-index: 1;
}

.btn {
    padding: 1.4rem 3rem;
    border-radius: 50px;
    font-weight: 800;
    font-size: 1.2rem;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    transition: var(--transition-base);
    border: none;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    z-index: 1;
    min-width: 200px;
    justify-content: center;
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
    z-index: -1;
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
    transform: translateY(-8px) scale(1.08);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.btn-secondary {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(10px);
}

.btn-secondary:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-8px) scale(1.08);
    border-color: rgba(255, 255, 255, 0.6);
    box-shadow: 0 20px 40px rgba(255, 255, 255, 0.2);
}

/* Responsive Adjustments */
@media (max-width: 1200px) {
    .page-content {
        max-width: 100%;
    }
    
    .page-title {
        font-size: 3rem;
    }
    
    .before-after-content {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 992px) {
    .page-title {
        font-size: 2.5rem;
    }
    
    .service-badge {
        font-size: 1.7rem;
        padding: 0.8rem 2rem;
    }
    
    .features-section,
    .contact-info-section,
    .steps-section {
        padding: 4rem;
    }
    
    .steps-timeline::before {
        right: 40px;
    }
    
    .step-item {
        flex-direction: column !important;
    }
    
    .step-item:nth-child(odd) .step-content,
    .step-item:nth-child(even) .step-content {
        margin: 0 0 0 4rem;
        width: calc(100% - 4rem);
    }
}

@media (max-width: 768px) {
    .page-content {
        padding: 3rem 1.5rem;
    }
    
    .page-title {
        font-size: 2.2rem;
    }
    
    .page-description {
        font-size: 1.2rem;
        padding: 2rem;
        margin-top: 2rem;
    }
    
    .section-title h2 {
        font-size: 2rem;
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
    
    .before-after-content {
        grid-template-columns: 1fr;
    }
    
    .before-after-header {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
        padding: 1.5rem;
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
        padding: 3rem 2rem;
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
    
    .steps-section,
    .contact-section {
        padding: 3rem 1.5rem;
    }
}

@media (max-width: 480px) {
    .page-title {
        font-size: 1.8rem;
    }
    
    .page-description {
        padding: 1.5rem;
        font-size: 1.1rem;
    }
    
    .service-badge {
        font-size: 1.4rem;
        padding: 0.7rem 1.5rem;
    }
    
    .category-card {
        padding: 1.5rem;
    }
    
    .category-title {
        font-size: 1.5rem;
    }
    
    .features-section,
    .contact-info-section,
    .contact-section,
    .steps-section {
        padding: 2rem 1.5rem;
    }
    
    .features-section h2,
    .contact-title {
        font-size: 1.8rem;
    }
    
    .step-item:nth-child(odd) .step-content,
    .step-item:nth-child(even) .step-content {
        margin: 0;
        width: 100%;
    }
    
    .steps-timeline::before {
        display: none;
    }
    
    .step-number {
        position: relative;
        top: 0;
        right: 0;
        transform: none;
        margin: 0 auto 1.5rem;
    }
    
    .contact-title {
        font-size: 2rem;
    }
    
    .contact-buttons .btn {
        min-width: unset;
        width: 100%;
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

.lb-data .lb-caption {
    font-size: 1.2rem;
    color: #333;
    text-align: center;
}

.lb-data .lb-close {
    background: var(--primary);
    border-radius: 50%;
    padding: 10px;
}

.lb-nav a.lb-prev, 
.lb-nav a.lb-next {
    background: var(--primary);
    border-radius: 50%;
    padding: 15px;
}
</style>

<!-- بخش هیرو -->
<section class="page-hero">
    <h1 class="page-title">بازسازی عکس‌های کهنه و فرسوده</h1>
    <div class="service-badge">احیای خاطرات ارزشمند</div>
    <div class="page-description">
        <p>
            <strong>بازسازی عکس‌های کهنه و فرسوده با دقت و حساسیت کامل انجام می‌شود.</strong> هر تصویر با استفاده از روش‌ها و ابزارهای تخصصی ترمیم شده و رنگ، وضوح و جزئیات آن بازگردانده می‌شود.
        </p>
        <p>
            هدف حفظ اصالت و ارزش خاطرات است تا عکس‌ها دوباره شفاف، زنده و قابل استفاده برای آلبوم‌ها، مدارک یا نمایش‌های شخصی شوند. این خدمات تجربه‌ای مطمئن و حرفه‌ای در اختیار مشتریان قرار می‌دهد و اطمینان می‌دهد که هر عکس بازسازی‌شده، هم از نظر کیفیت و هم از نظر زیبایی‌شناسی استاندارد باشد.
        </p>
        <p style="margin-top: 2rem; font-style: italic; color: var(--primary-dark);">
            ما با تیمی از متخصصان گرافیک و عکاسی، آماده احیای خاطرات ارزشمند شما هستیم. هر عکس قدیمی برای ما یک گنجینه است.
        </p>
    </div>
</section>

<!-- بخش دسته‌بندی خدمات -->
<section class="categories-section">
    <div class="section-title">
        <h2>انواع خدمات بازسازی عکس</h2>
        <p>احیای کامل عکس‌های قدیمی با جدیدترین تکنیک‌ها</p>
    </div>
    
    <div class="categories-grid">
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-history"></i>
            </div>
            <h3 class="category-title">ترمیم عکس‌های سیاه و سفید</h3>
            <p class="category-description">بازسازی عکس‌های قدیمی سیاه و سفید، اصلاح رنگ‌پریدگی و بهبود کیفیت</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-palette"></i>
            </div>
            <h3 class="category-title">رنگ‌آمیزی عکس‌های قدیمی</h3>
            <p class="category-description">رنگ‌آمیزی طبیعی و حرفه‌ای عکس‌های سیاه و سفید قدیمی</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-tools"></i>
            </div>
            <h3 class="category-title">تعمیر عکس‌های آسیب‌دیده</h3>
            <p class="category-description">ترمیم عکس‌های پاره شده، چروکیده یا آسیب دیده</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-brush"></i>
            </div>
            <h3 class="category-title">حذف لکه و گرد و غبار</h3>
            <p class="category-description">پاک‌سازی لکه‌های قدیمی، گرد و غبار و خراش‌های سطحی</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-eye"></i>
            </div>
            <h3 class="category-title">بهبود وضوح و جزئیات</h3>
            <p class="category-description">افزایش وضوح، بهبود جزئیات و کیفیت تصویر</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-expand-alt"></i>
            </div>
            <h3 class="category-title">بزرگنمایی دیجیتال</h3>
            <p class="category-description">بزرگ‌نمایی عکس‌های قدیمی بدون کاهش کیفیت</p>
        </div>
    </div>
</section>

<!-- بخش عکس‌های قبل و بعد -->
<section class="before-after-section">
    <div class="section-title">
        <h2>نمونه کارهای بازسازی</h2>
        <p>مقایسه عکس‌های قبل و بعد از بازسازی</p>
    </div>
    
    <div class="before-after-container">
        <div class="before-after-item">
            <div class="before-after-header">
                <div class="before-title">قبل از بازسازی</div>
                <div class="after-title">بعد از بازسازی</div>
            </div>
            <div class="before-after-content">
                <div class="before-image">
                    <a href="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" data-lightbox="before-after" data-title="عکس قدیمی - قبل از بازسازی">
                        <img src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="عکس قدیمی قبل از بازسازی">
                    </a>
                </div>
                <div class="after-image">
                    <a href="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&blur=0" data-lightbox="before-after" data-title="عکس قدیمی - بعد از بازسازی">
                        <img src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&blur=0" alt="عکس قدیمی بعد از بازسازی">
                    </a>
                </div>
            </div>
        </div>
        
        <div class="before-after-item">
            <div class="before-after-header">
                <div class="before-title">عکس سیاه و سفید قدیمی</div>
                <div class="after-title">عکس رنگ‌آمیری شده</div>
            </div>
            <div class="before-after-content">
                <div class="before-image">
                    <a href="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" data-lightbox="before-after" data-title="عکس سیاه و سفید قدیمی">
                        <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="عکس سیاه و سفید قدیمی">
                    </a>
                </div>
                <div class="after-image">
                    <a href="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&sat=100" data-lightbox="before-after" data-title="عکس رنگ‌آمیری شده">
                        <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&sat=100" alt="عکس رنگ‌آمیری شده">
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- بخش مراحل بازسازی -->
<section class="steps-section">
    <div class="section-title">
        <h2>مراحل بازسازی عکس</h2>
        <p>فرآیند دقیق و حرفه‌ای احیای عکس‌های قدیمی</p>
    </div>
    
    <div class="steps-timeline">
        <div class="step-item">
            <div class="step-content">
                <div class="step-number">۱</div>
                <div class="step-icon">
                    <i class="fas fa-camera"></i>
                </div>
                <h3 class="step-title">اسکن با کیفیت بالا</h3>
                <p class="step-description">عکس قدیمی با دستگاه اسکنر حرفه‌ای با کیفیت بالا اسکن می‌شود</p>
            </div>
        </div>
        
        <div class="step-item">
            <div class="step-content">
                <div class="step-number">۲</div>
                <div class="step-icon">
                    <i class="fas fa-broom"></i>
                </div>
                <h3 class="step-title">پاک‌سازی اولیه</h3>
                <p class="step-description">حذف گرد و غبار، لکه‌های سطحی و خراش‌های کوچک</p>
            </div>
        </div>
        
        <div class="step-item">
            <div class="step-content">
                <div class="step-number">۳</div>
                <div class="step-icon">
                    <i class="fas fa-tools"></i>
                </div>
                <h3 class="step-title">ترمیم آسیب‌ها</h3>
                <p class="step-description">ترمیم عکس‌های پاره شده، چروکیده یا آسیب‌های جدی</p>
            </div>
        </div>
        
        <div class="step-item">
            <div class="step-content">
                <div class="step-number">۴</div>
                <div class="step-icon">
                    <i class="fas fa-palette"></i>
                </div>
                <h3 class="step-title">تنظیم رنگ و نور</h3>
                <p class="step-description">اصلاح رنگ‌پریدگی، تنظیم کنتراست و بهبود نورپردازی</p>
            </div>
        </div>
        
        <div class="step-item">
            <div class="step-content">
                <div class="step-number">۵</div>
                <div class="step-icon">
                    <i class="fas fa-eye"></i>
                </div>
                <h3 class="step-title">بهبود جزئیات</h3>
                <p class="step-description">افزایش وضوح، بهبود جزئیات و کیفیت تصویر</p>
            </div>
        </div>
        
        <div class="step-item">
            <div class="step-content">
                <div class="step-number">۶</div>
                <div class="step-icon">
                    <i class="fas fa-check-circle"></i>
                </div>
                <h3 class="step-title">تحویل نهایی</h3>
                <p class="step-description">تحویل نسخه دیجیتال و چاپی عکس بازسازی شده</p>
            </div>
        </div>
    </div>
</section>

<!-- بخش ویژگی‌ها -->
<section class="features-section">
    <div class="section-title">
        <h2>مزایای بازسازی حرفه‌ای</h2>
        <p>چرا بازسازی عکس را به ما بسپارید؟</p>
    </div>
    
    <div class="features-grid">
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-heart"></i>
            </div>
            <h3 class="feature-title">حفظ خاطرات ارزشمند</h3>
            <p class="feature-description">احیای عکس‌های قدیمی که برای شما ارزش عاطفی و تاریخی دارند</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-medal"></i>
            </div>
            <h3 class="feature-title">کیفیت عالی</h3>
            <p class="feature-description">استفاده از تکنیک‌های حرفه‌ای و نرم‌افزارهای تخصصی بازسازی</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-user-tie"></i>
            </div>
            <h3 class="feature-title">متخصصان مجرب</h3>
            <p class="feature-description">تیم متخصص با سال‌ها تجربه در زمینه بازسازی عکس‌های قدیمی</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-shield-alt"></i>
            </div>
            <h3 class="feature-title">ضمانت کیفیت</h3>
            <p class="feature-description">ضمانت کیفیت کار و رضایت کامل شما از نتیجه نهایی</p>
        </div>
    </div>
</section>

<!-- بخش اطلاعات تماس -->
<section class="contact-info-section">
    <div class="section-title">
        <h2>روش سفارش بازسازی عکس</h2>
        <p>برای بازسازی عکس‌های قدیمی، یکی از روش‌های زیر را انتخاب کنید</p>
    </div>
    
    <div class="contact-methods">
        <div class="method-card">
            <div class="method-icon">📸</div>
            <h3 class="method-title">مراجعه حضوری</h3>
            <p class="method-description">عکس قدیمی خود را به فروشگاه بیاورید، مشاوره رایگان بگیرید و سفارش دهید.</p>
            <a href="#footer" class="method-btn">
                آدرس فروشگاه
            </a>
        </div>
        
        <div class="method-card">
            <div class="method-icon">📱</div>
            <h3 class="method-title">ارسال دیجیتال</h3>
            <p class="method-description">عکس را با موبایل اسکن کرده و در واتس‌اپ ارسال کنید، قیمت را دریافت کنید.</p>
            <a href="https://wa.me/93781821838" class="method-btn whatsapp-btn" target="_blank">
                <i class="fab fa-whatsapp"></i>
                ارسال در واتس‌اپ
            </a>
        </div>
        
        <div class="method-card">
            <div class="method-icon">📞</div>
            <h3 class="method-title">تماس تلفنی</h3>
            <p class="method-description">با ما تماس بگیرید، درباره شرایط و قیمت سوال کنید و سفارش دهید.</p>
            <a href="tel:+93781821838" class="method-btn">
                تماس: ۰۷۸۱۸۲۱۸۳۸
            </a>
        </div>
    </div>
</section>

<!-- بخش تماس -->
<section class="contact-section">
    <h2 class="contact-title">برای احیای خاطرات ارزشمند</h2>
    <p class="contact-description">
        همین حالا با ما تماس بگیرید یا به فروشگاه ما مراجعه کنید
        <br>
        تجربه‌ای مطمئن و حرفه‌ای در بازسازی عکس‌های قدیمی
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
    
    <p style="margin-top: 2rem; opacity: 0.95; font-size: 1.1rem; position: relative; z-index: 1;">
        📍 کابل، ناحیه ۶، شهرک ۱۲ امام | 🕗 ۸ صبح تا ۸ شب
    </p>
</section>

<script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.4/js/lightbox.min.js"></script>
<script>
    // Initialize Lightbox
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'albumLabel': "تصویر %1 از %2",
        'fadeDuration': 300
    });
</script>