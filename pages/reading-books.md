---
layout: page
title: "کتاب‌های مطالعاتی"
description: "کتاب‌های مطالعاتی – مجموعه‌ای جامع و متنوع با پایین‌ترین قیمت در کابل"
breadcrumb:
  - title: "کتاب‌فروشی"
    link: "/books"
---

<style>
/* ===== CSS Variables ===== */
:root {
    /* Colors (refreshed palette: teal + indigo + warm accent) */
    --primary: #0ea5a4;
    --primary-dark: #0b8f89;
    --primary-light: #2dd4bf;
    --secondary: #6366f1;
    --accent: #f59e0b;
    --dark: #0f1724;
    --dark-light: #24303a;
    --light: #f8fafc;
    --gray: #6b7280;
    --gray-light: #e6eef2;
    --gray-lighter: #f7fafc;
    --success: #16a34a;
    --warning: #f59e0b;
    --danger: #ef4444;
    
    /* Typography */
    --font-family: 'Vazirmatn', -apple-system, BlinkMacSystemFont, sans-serif;
    --font-size-xs: 0.75rem;
    --font-size-sm: 1rem;
    --font-size-base: 1rem;
    --font-size-lg: 1.125rem;
    --font-size-xl: 1.25rem;
    --font-size-2xl: 1.5rem;
    --font-size-3xl: 1.875rem;
    --font-size-4xl: 2.25rem;
    --font-size-5xl: 3rem;
    
    /* Spacing */
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
    --spacing-2xl: 3rem;
    --spacing-3xl: 4rem;
    
    /* Border Radius */
    --radius-sm: 0.375rem;
    --radius-md: 0.5rem;
    --radius-lg: 0.75rem;
    --radius-xl: 1rem;
    --radius-2xl: 1.5rem;
    
    /* Shadows */
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    
    /* Transitions */
    --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);
    
    /* Container */
    --container-xs: 100%;
    --container-sm: 640px;
    --container-md: 768px;
    --container-lg: 1024px;
    --container-xl: 1280px;
    --container-2xl: 1536px;
}

/* ===== Reset & Base Styles ===== */
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 16px;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

body {
    font-family: var(--font-family);
    font-size: var(--font-size-base);
    line-height: 1.7;
    color: var(--dark);
    background-color: var(--light);
    overflow-x: hidden;
    min-height: 100vh;
    -webkit-tap-highlight-color: transparent;
}

img {
    max-width: 100%;
    height: auto;
    display: block;
}

/* ===== Typography ===== */
h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: var(--spacing-md);
    color: var(--dark);
}

h1 {
    font-size: clamp(var(--font-size-3xl), 5vw, var(--font-size-5xl));
    font-weight: 900;
    letter-spacing: -0.025em;
}

h2 {
    font-size: clamp(var(--font-size-2xl), 4vw, var(--font-size-4xl));
    font-weight: 800;
}

h3 {
    font-size: clamp(var(--font-size-xl), 3vw, var(--font-size-3xl));
    font-weight: 700;
}

h4 {
    font-size: clamp(var(--font-size-lg), 2.5vw, var(--font-size-2xl));
    font-weight: 600;
}

p {
    margin-bottom: var(--spacing-md);
    color: var(--gray);
    line-height: 1.8;
}

/* ===== Container ===== */
.container {
    width: 100%;
    max-width: var(--container-2xl);
    margin: 0 auto;
    padding: 0 var(--spacing-lg);
}

/* ===== Breadcrumb ===== */
.breadcrumb {
    background: linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(139, 92, 246, 0.05));
    padding: 1.8rem 0;
    margin-top: 140px;
    border-bottom: 1px solid rgba(226, 232, 240, 0.8);
    position: relative;
    overflow: hidden;
}

.breadcrumb::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%);
}

.breadcrumb-content {
    max-width: var(--container-2xl);
    margin: 0 auto;
    padding: 0 var(--spacing-lg);
    position: relative;
    z-index: 1;
}

.breadcrumb ul {
    display: flex;
    list-style: none;
    gap: 12px;
    color: var(--gray);
    font-size: 1rem;
    align-items: center;
}

.breadcrumb a {
    color: var(--primary);
    text-decoration: none;
    transition: all var(--transition-base);
    font-weight: 600;
    padding: 6px 12px;
    border-radius: 8px;
    display: inline-block;
}

.breadcrumb a:hover {
    color: var(--primary-dark);
    background: rgba(16, 185, 129, 0.1);
    transform: translateY(-2px);
}

.breadcrumb li:not(:last-child)::after {
    content: "›";
    margin-right: 12px;
    color: var(--primary);
    font-weight: bold;
}

/* ===== محتوای صفحه ===== */
.page-content {
    max-width: var(--container-2xl);
    margin: 0 auto;
    padding: 4rem var(--spacing-lg);
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
    background: radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%);
    z-index: -1;
}

.page-title {
    font-size: 3.2rem;
    color: var(--primary-dark);
    margin-bottom: 2rem;
    font-weight: 900;
    line-height: 1.2;
    position: relative;
    display: inline-block;
    background: linear-gradient(135deg, var(--primary-dark), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.page-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    right: 50%;
    transform: translateX(50%);
    width: 150px;
    height: 5px;
    background: linear-gradient(90deg, var(--primary), var(--secondary));
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
    border-radius: 16px;
    box-shadow: var(--shadow-xl);
    border: 2px solid rgba(16, 185, 129, 0.1);
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
    background: rgba(16, 185, 129, 0.2);
    z-index: -1;
    border-radius: 2px;
}

/* بخش دسته‌بندی کتاب‌ها */
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
    background: linear-gradient(90deg, var(--primary), var(--accent));
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
    border-radius: 16px;
    box-shadow: var(--shadow-xl);
    text-align: center;
    transition: all var(--transition-base);
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
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    transform: translateX(-100%);
    transition: transform 0.6s ease;
}

.category-card:hover::before {
    transform: translateX(0);
}

.category-card:hover {
    transform: translateY(-15px);
    box-shadow: 0 20px 40px rgba(16, 185, 129, 0.15);
    border-color: var(--primary-light);
}

.category-icon {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, var(--primary), var(--accent));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.8rem;
    color: white;
    font-size: 2rem;
    box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
    transition: all var(--transition-base);
}

.category-card:hover .category-icon {
    transform: scale(1.1) rotate(5deg);
}

.category-title {
    font-size: 1.6rem;
    color: var(--primary-dark);
    margin-bottom: 1.2rem;
    font-weight: 800;
}

.category-description {
    color: var(--gray);
    line-height: 1.7;
    font-size: 1.05rem;
}

/* بخش قیمت‌گذاری ویژه */
.pricing-section {
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    color: white;
    padding: 5rem 2rem;
    border-radius: 16px;
    margin: 6rem 0;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.pricing-section::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
}

.pricing-title {
    font-size: 2.8rem;
    margin-bottom: 2rem;
    font-weight: 800;
    position: relative;
    z-index: 1;
}

.pricing-description {
    font-size: 1.3rem;
    opacity: 0.95;
    max-width: 800px;
    margin: 0 auto 3rem;
    line-height: 1.9;
    position: relative;
    z-index: 1;
}

.price-comparison {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    margin: 3rem 0;
    position: relative;
    z-index: 1;
    flex-wrap: wrap;
}

.price-item {
    text-align: center;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    min-width: 250px;
    transition: all var(--transition-base);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.price-item:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.price-label {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    opacity: 0.9;
}

.price-amount {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
}

.price-note {
    font-size: 1rem;
    opacity: 0.8;
    font-style: italic;
}

.price-arrow {
    font-size: 3rem;
    color: rgba(255, 255, 255, 0.7);
}

/* بخش فلسفه ما */
.philosophy-section {
    background: white;
    padding: 5rem;
    border-radius: 16px;
    box-shadow: var(--shadow-2xl);
    margin: 6rem 0;
    position: relative;
    overflow: hidden;
    border: 2px solid rgba(16, 185, 129, 0.1);
}

.philosophy-section::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, transparent 70%);
}

.philosophy-title {
    font-size: 2.2rem;
    color: var(--primary-dark);
    margin-bottom: 2rem;
    font-weight: 800;
    text-align: center;
    position: relative;
}

.philosophy-content {
    font-size: 1.2rem;
    line-height: 2;
    color: var(--dark);
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
}

.highlight-text {
    display: inline-block;
    background: linear-gradient(120deg, rgba(16, 185, 129, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
    padding: 0.5rem 1.5rem;
    border-radius: 50px;
    margin: 2rem 0;
    font-weight: 700;
    color: var(--primary-dark);
    border: 2px solid rgba(16, 185, 129, 0.2);
}

/* بخش تماس */
.contact-section {
    background: linear-gradient(135deg, var(--primary-dark), var(--secondary));
    color: white;
    padding: 5rem 2rem;
    border-radius: 16px;
    margin: 6rem 0;
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
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
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
    transition: all var(--transition-base);
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

/* ===== انیمیشن‌های اضافی ===== */
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

.animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
}

.delay-1 {
    animation-delay: 0.2s;
}

.delay-2 {
    animation-delay: 0.4s;
}

.delay-3 {
    animation-delay: 0.6s;
}

/* ===== Responsive Design ===== */

/* Large Desktop (≥1400px) */
@media (min-width: 1400px) {
    .container, .breadcrumb-content, .page-content, .footer-container {
        max-width: var(--container-2xl);
    }
}

/* Tablet Portrait (768px - 991px) */
@media (max-width: 991px) {
    .breadcrumb {
        margin-top: 120px;
    }
    
    .page-title {
        font-size: 2.4rem;
    }
    
    .price-comparison {
        gap: 2rem;
    }
    
    .philosophy-section {
        padding: 3rem;
    }
}

/* Mobile Landscape (576px - 767px) */
@media (max-width: 767px) and (min-width: 576px) {
    .container, .breadcrumb-content, .page-content, .footer-container {
        padding: 0 var(--spacing-md);
    }
    
    .breadcrumb {
        margin-top: 110px;
    }
    
    .page-content {
        padding: 3rem var(--spacing-md);
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
    
    .price-comparison {
        flex-direction: column;
        gap: 2rem;
    }
    
    .price-arrow {
        transform: rotate(90deg);
    }
    
    .pricing-title {
        font-size: 2.2rem;
    }
    
    .pricing-description {
        font-size: 1.1rem;
    }
    
    .philosophy-section {
        padding: 2rem;
    }
    
    .philosophy-title {
        font-size: 1.8rem;
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

/* Mobile Portrait (≤575px) */
@media (max-width: 575px) {
    .container, .breadcrumb-content, .page-content, .footer-container {
        padding: 0 var(--spacing-sm);
    }
    
    .breadcrumb {
        margin-top: 90px;
        padding: 1.5rem 0;
    }
    
    .page-content {
        padding: 3rem var(--spacing-sm);
    }
    
    .page-title {
        font-size: 1.8rem;
    }
    
    .page-description {
        padding: 1.5rem;
        font-size: 1rem;
    }
    
    .category-card {
        padding: 1.5rem;
    }
    
    .category-title {
        font-size: 1.4rem;
    }
    
    .pricing-section,
    .contact-section {
        padding: 3rem 1.5rem;
    }
    
    .pricing-title,
    .contact-title {
        font-size: 1.8rem;
    }
    
    .price-item {
        min-width: 100%;
        padding: 1.5rem;
    }
}

/* Small Mobile (≤375px) */
@media (max-width: 375px) {
    .page-title {
        font-size: 1.6rem;
    }
    
    .page-description {
        padding: 1rem;
        font-size: 0.9rem;
    }
}

/* Touch Device Optimizations */
@media (hover: none) and (pointer: coarse) {
    .category-card:hover {
        transform: none;
    }
    
    .price-item:hover {
        transform: none;
    }
    
    .btn:hover {
        transform: none;
    }
    
    .category-card:active {
        transform: scale(0.98);
    }
    
    .btn:active {
        transform: scale(0.98);
    }
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
    
    .category-card:hover,
    .price-item:hover,
    .btn:hover {
        transform: none;
    }
}

/* Utilities */
.visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}

.text-center {
    text-align: center;
}

.mb-0 {
    margin-bottom: 0 !important;
}

.mt-0 {
    margin-top: 0 !important;
}

.w-100 {
    width: 100%;
}
</style>

<!-- بخش هیرو -->
<section class="page-hero animate-fade-in-up">
    <h1 class="page-title">کتاب‌های مطالعاتی</h1>
    <div class="page-description">
        <p>
            کتاب‌های مطالعاتی – مجموعه‌ای جامع و متنوع
            <br><br>
            ما مجموعه‌ای گسترده از کتاب‌های مطالعاتی ارائه می‌کنیم، شامل کتاب‌های تاریخی، دانشگاهی، علمی، انگیزشی، روان‌شناسی، دینی، کتاب کودک و نوجوان و سایر مضامین رایج در جامعه. اکثر این کتاب‌ها استفاده‌شده اما سالم هستند و با پایین‌ترین و نازل‌ترین قیمت ممکن به فروش می‌رسند. به عنوان مثال، قیمت‌هایی که معمولاً حدود ۳۰۰ افغانی است، در اینجا از ۵۰ افغانی به پایین عرضه می‌شود و فروش به صورت لیلام انجام می‌گیرد.
            <br><br>
            <strong>با توجه به وضعیت اقتصادی جامعه، رویکرد ما ترکیبی از فعالیت خیریه و تجارت است تا همه بتوانند به کتاب‌های مفید دسترسی داشته باشند.</strong>
            <br><br>
            با ما، کتاب‌های متنوع و مفید با کیفیت مناسب و قیمت استثنایی همیشه در دسترس شماست.
        </p>
    </div>
</section>

<!-- بخش دسته‌بندی کتاب‌ها -->
<section class="categories-section">
    <div class="section-title animate-fade-in-up">
        <h2>دسته‌بندی کتاب‌های مطالعاتی</h2>
        <p>مجموعه‌ای کامل از کتاب‌های مطالعاتی در موضوعات مختلف</p>
    </div>
    
    <div class="categories-grid">
        <div class="category-card animate-fade-in-up delay-1">
            <div class="category-icon">
                <i class="fas fa-landmark"></i>
            </div>
            <h3 class="category-title">کتاب‌های تاریخی</h3>
            <p class="category-description">تاریخ افغانستان، جهان، تمدن‌ها و شخصیت‌های تاریخی با قیمت استثنایی</p>
        </div>
        
        <div class="category-card animate-fade-in-up delay-2">
            <div class="category-icon">
                <i class="fas fa-university"></i>
            </div>
            <h3 class="category-title">کتاب‌های دانشگاهی</h3>
            <p class="category-description">منابع درسی و کمک درسی برای دانشجویان تمامی رشته‌ها</p>
        </div>
        
        <div class="category-card animate-fade-in-up delay-3">
            <div class="category-icon">
                <i class="fas fa-flask"></i>
            </div>
            <h3 class="category-title">کتاب‌های علمی</h3>
            <p class="category-description">علوم تجربی، فناوری، پزشکی و دانش روز جهان</p>
        </div>
        
        <div class="category-card animate-fade-in-up">
            <div class="category-icon">
                <i class="fas fa-rocket"></i>
            </div>
            <h3 class="category-title">کتاب‌های انگیزشی</h3>
            <p class="category-description">تقویت روحیه، موفقیت شخصی و توسعه فردی با قیمت مناسب</p>
        </div>
        
        <div class="category-card animate-fade-in-up delay-1">
            <div class="category-icon">
                <i class="fas fa-brain"></i>
            </div>
            <h3 class="category-title">کتاب‌های روان‌شناسی</h3>
            <p class="category-description">درک رفتار انسان، روانشناسی اجتماعی و شخصیت</p>
        </div>
        
        <div class="category-card animate-fade-in-up delay-2">
            <div class="category-icon">
                <i class="fas fa-mosque"></i>
            </div>
            <h3 class="category-title">کتاب‌های دینی</h3>
            <p class="category-description">تفاسیر قرآن، احادیث، فقه و اخلاق اسلامی</p>
        </div>
    </div>
</section>

<!-- بخش فلسفه ما -->
<section class="philosophy-section">
    <h2 class="philosophy-title">فلسفه ما: تجارت همراه با مسئولیت اجتماعی</h2>
    <div class="philosophy-content">
        <p>
            در شرایط اقتصادی کنونی، ما معتقدیم که دسترسی به کتاب و دانش باید برای همه فراهم باشد.
            به همین دلیل، رویکرد ما ترکیبی از فعالیت تجاری و مسئولیت اجتماعی است.
        </p>
        
        <div class="highlight-text">
            ❝ کتاب برای همه، دانش برای همیشه ❞
        </div>
        
        <p>
            کتاب‌های ارائه شده در این بخش اکثراً استفاده‌شده اما در شرایط کاملاً سالم هستند.
            ما این کتاب‌ها را با کمترین قیمت ممکن عرضه می‌کنیم تا حتی کم‌درآمدترین افراد جامعه نیز
            بتوانند به منابع مطالعاتی مورد نیاز خود دسترسی داشته باشند.
        </p>
        
        <p style="margin-top: 2rem; color: var(--primary); font-weight: 700;">
            این تنها یک فروشگاه نیست، بلکه مشارکتی اجتماعی برای ترویج فرهنگ مطالعه است.
        </p>
    </div>
</section>

<!-- بخش تماس -->
<section class="contact-section">
    <h2 class="contact-title">برای مشاهده و خرید کتاب‌ها</h2>
    <p class="contact-description">به فروشگاه ما مراجعه کنید یا با ما تماس بگیرید</p>
    
    <div class="contact-buttons">
        <a href="tel:+93781821838" class="btn btn-primary">
            <i class="fas fa-phone"></i>
            تماس: ۰۷۸۱۸۲۱۸۳۸
        </a>
        <a href="#footer" class="btn btn-secondary">
            <i class="fas fa-map-marker-alt"></i>
            آدرس فروشگاه
        </a>
    </div>
    
    <p style="margin-top: 2rem; opacity: 0.9; font-size: 1.1rem; color: var(--myself);">
        ساعات کار: شنبه تا پنجشنبه - ۸ صبح تا ۸ شب
    </p>
</section>

<!-- JavaScript -->
<script>
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements with animation classes
    document.querySelectorAll('.animate-fade-in-up').forEach(el => {
        observer.observe(el);
    });

    // Handle reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) {
        // Disable animations
        document.querySelectorAll('.animate-fade-in-up').forEach(el => {
            el.style.animation = 'none';
        });
    }

    // Update on preference change
    prefersReducedMotion.addEventListener('change', (e) => {
        document.querySelectorAll('.animate-fade-in-up').forEach(el => {
            el.style.animation = e.matches ? 'none' : '';
        });
    });

    // Log for debugging
    console.log('%c📚 صفحه کتاب‌های مطالعاتی %c\nفروشگاه علی اکبری - کابل', 
        'color: #0ea5a4; font-size: 16px; font-weight: bold;', 
        'color: #6b7280; font-size: 14px;');
</script>
