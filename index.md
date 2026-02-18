---
layout: default
title: "قرطاسیه فروشی و مطبعه علی اکبری"
description: "ارائه کلیه خدمات آموزشی، چاپ و دیجیتال در کابل - کتاب‌فروشی، مطبعه، عکاسی، قرطاسیه و آموزش دیجیتال"
keywords: "کتاب‌فروشی, مطبعه, خدمات کامپیوتری, چاپ, عکاسی, کابل, علی اکبری"
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
    --font-size-sm: 0.875rem;
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

/* ===== Hero Slider ===== */
.hero-slider {
    position: relative;
    height: calc(100vh - 140px);
    min-height: 500px;
    max-height: 800px;
    overflow: hidden;
    border-radius: var(--radius-2xl);
    margin-top: 140px;
    margin-bottom: var(--spacing-3xl);
    margin-right: var(--spacing-lg);
    margin-left: var(--spacing-lg);
}

.slider-container {
    width: 100%;
    height: 100%;
    position: relative;
}

.slide {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity var(--transition-slow);
    will-change: opacity;
}

.slide.active {
    opacity: 1;
}

.slide-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.slide-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
        135deg,
        rgba(30, 41, 59, 0.9) 0%,
        rgba(30, 41, 59, 0.7) 50%,
        rgba(30, 41, 59, 0.4) 100%
    );
}

.slide-content {
    position: absolute;
    top: 50%;
    right: var(--spacing-xl);
    transform: translateY(-50%);
    max-width: 600px;
    color: white;
    z-index: 2;
    padding: var(--spacing-lg);
    width: calc(100% - 2 * var(--spacing-xl));
}

.slide-content h2 {
    font-size: clamp(var(--font-size-2xl), 4vw, var(--font-size-4xl));
    color: white;
    margin-bottom: var(--spacing-md);
    line-height: 1.2;
}

.slide-content p {
    font-size: clamp(var(--font-size-base), 1.5vw, var(--font-size-lg));
    color: rgba(255, 255, 255, 0.95);
    margin-bottom: var(--spacing-xl);
    line-height: 1.6;
}

.slider-controls {
    position: absolute;
    bottom: var(--spacing-lg);
    right: 50%;
    transform: translateX(50%);
    display: flex;
    gap: var(--spacing-sm);
    z-index: 3;
}

.slider-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.4);
    cursor: pointer;
    transition: all var(--transition-fast);
    border: none;
    padding: 0;
    min-width: 10px;
    min-height: 10px;
}

.slider-dot.active {
    background: white;
    transform: scale(1.3);
}

.slider-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 var(--spacing-md);
    z-index: 3;
}

.slider-btn {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.3);
    color: white;
    font-size: var(--font-size-lg);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all var(--transition-base);
    min-width: 44px;
    min-height: 44px;
}

.slider-btn:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
}

/* ===== Services Section ===== */
.services-section {
    padding: var(--spacing-2xl) 0;
    background: var(--gray-lighter);
}

.section-header {
    text-align: center;
    margin-bottom: var(--spacing-2xl);
    padding: 0 var(--spacing-md);
}

.section-title {
    position: relative;
    display: inline-block;
    margin-bottom: var(--spacing-md);
    padding: 0 var(--spacing-md);
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: -8px;
    right: 50%;
    transform: translateX(50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(to right, var(--primary), var(--accent));
    border-radius: 2px;
}

.section-subtitle {
    max-width: 700px;
    margin: 0 auto;
    padding: 0 var(--spacing-md);
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--spacing-lg);
    padding: 0 var(--spacing-md);
}

.service-card {
    background: white;
    border-radius: var(--radius-xl);
    padding: var(--spacing-xl);
    box-shadow: var(--shadow-lg);
    transition: all var(--transition-base);
    border: 1px solid transparent;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
}

.service-card::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(to right, var(--primary), var(--accent));
    transform: translateX(-100%);
    transition: transform 0.6s ease;
}

.service-card:hover::before {
    transform: translateX(0);
}

.service-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-2xl);
    border-color: var(--primary-light);
}

.service-icon {
    width: 56px;
    height: 56px;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    border-radius: var(--radius-lg);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: var(--font-size-xl);
    margin-bottom: var(--spacing-lg);
    flex-shrink: 0;
}

.service-title {
    font-size: var(--font-size-lg);
    color: var(--dark);
    margin-bottom: var(--spacing-md);
}

.service-description {
    color: var(--gray);
    margin-bottom: var(--spacing-lg);
    flex: 1;
    font-size: var(--font-size-sm);
}

/* ===== Gallery Section ===== */
.gallery-section {
    padding: var(--spacing-2xl) 0;
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: var(--spacing-md);
    padding: 0 var(--spacing-md);
}

.gallery-item {
    position: relative;
    border-radius: var(--radius-xl);
    overflow: hidden;
    aspect-ratio: 4/3;
    background: var(--gray-light);
    cursor: pointer;
}

.gallery-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-slow);
}

.gallery-item:hover .gallery-image {
    transform: scale(1.1);
}

.gallery-overlay {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
    padding: var(--spacing-lg);
    color: white;
    transform: translateY(100%);
    transition: transform var(--transition-base);
}

.gallery-overlay h4,
.gallery-overlay p {
    color: white;
    margin: 0;
}

.gallery-item:hover .gallery-overlay {
    transform: translateY(0);
}

/* ===== Trust Section ===== */
.trust-section {
    padding: var(--spacing-2xl) 0;
    background: var(--dark);
    color: white;
}

.trust-section .section-title {
    color: white;
}

.trust-section .section-subtitle {
    color: rgba(255, 255, 255, 0.8);
}

.trust-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--spacing-lg);
    margin-top: var(--spacing-xl);
    padding: 0 var(--spacing-md);
}

.trust-item {
    text-align: center;
    padding: var(--spacing-lg);
    background: rgba(255, 255, 255, 0.05);
    border-radius: var(--radius-xl);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all var(--transition-base);
}

.trust-item:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.1);
    border-color: var(--primary-light);
}

.trust-icon {
    font-size: var(--font-size-2xl);
    color: var(--primary-light);
    margin-bottom: var(--spacing-md);
}

.trust-title {
    font-size: var(--font-size-base);
    color: white;
    margin-bottom: var(--spacing-sm);
}

.trust-description {
    color: rgba(255, 255, 255, 0.7);
    font-size: var(--font-size-xs);
}

/* ===== CTA Section ===== */
.cta-section {
    padding: var(--spacing-2xl) 0;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    color: white;
    position: relative;
    overflow: hidden;
    margin: 0 var(--spacing-lg);
    border-radius: var(--radius-2xl);
}

.cta-section::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E");
}

.cta-content {
    position: relative;
    z-index: 2;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    padding: 0 var(--spacing-md);
}

.cta-title {
    font-size: clamp(var(--font-size-2xl), 4vw, var(--font-size-4xl));
    color: white;
    margin-bottom: var(--spacing-md);
}

.cta-description {
    font-size: clamp(var(--font-size-base), 1.5vw, var(--font-size-lg));
    color: rgba(255, 255, 255, 0.95);
    margin-bottom: var(--spacing-xl);
}

.cta-buttons {
    display: flex;
    gap: var(--spacing-md);
    justify-content: center;
    flex-wrap: wrap;
}

.cta-btn {
    padding: var(--spacing-md) var(--spacing-xl);
    border-radius: var(--radius-lg);
    font-weight: 600;
    font-size: var(--font-size-sm);
    text-decoration: none;
    transition: all var(--transition-base);
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-sm);
    min-width: 44px;
    min-height: 44px;
    justify-content: center;
}

.cta-btn.primary {
    background: white;
    color: var(--primary);
    border: 2px solid white;
}

.cta-btn.primary:hover {
    background: transparent;
    color: white;
    transform: translateY(-3px);
    box-shadow: var(--shadow-xl);
}

.cta-btn.secondary {
    background: rgba(255, 255, 255, 0.15);
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
}

.cta-btn.secondary:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-3px);
    border-color: rgba(255, 255, 255, 0.5);
}

/* ===== Responsive Design ===== */

/* Large Desktop (≥1400px) */
@media (min-width: 1400px) {
    .hero-slider {
        margin-right: auto;
        margin-left: auto;
        max-width: var(--container-2xl);
    }
    
    .cta-section {
        margin-right: auto;
        margin-left: auto;
        max-width: var(--container-2xl);
    }
}

/* Desktop (≥1200px) */
@media (min-width: 1200px) {
    .slide-content {
        right: var(--spacing-2xl);
        max-width: 650px;
    }
}

/* Tablet Landscape (992px - 1199px) */
@media (max-width: 1199px) and (min-width: 992px) {
    .hero-slider {
        height: 70vh;
        min-height: 450px;
        margin-top: 130px;
    }
    
    .slide-content h2 {
        font-size: clamp(var(--font-size-xl), 3vw, var(--font-size-3xl));
    }
    
    .services-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Tablet Portrait (768px - 991px) */
@media (max-width: 991px) {
    .hero-slider {
        height: 60vh;
        min-height: 400px;
        margin-top: 120px;
        margin-right: var(--spacing-md);
        margin-left: var(--spacing-md);
        border-radius: var(--radius-xl);
    }
    
    .slide-content {
        right: var(--spacing-lg);
        left: var(--spacing-lg);
        width: calc(100% - 2 * var(--spacing-lg));
        text-align: center;
        padding: var(--spacing-md);
    }
    
    .slider-nav {
        padding: 0 var(--spacing-sm);
    }
    
    .slider-btn {
        width: 40px;
        height: 40px;
        font-size: var(--font-size-base);
    }
    
    .services-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: var(--spacing-md);
    }
    
    .service-card {
        padding: var(--spacing-lg);
    }
    
    .gallery-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .trust-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: var(--spacing-md);
    }
    
    .cta-buttons {
        flex-direction: column;
        align-items: center;
    }
    
    .cta-btn {
        width: 100%;
        max-width: 300px;
    }
}

/* Mobile Landscape (576px - 767px) */
@media (max-width: 767px) and (min-width: 576px) {
    .hero-slider {
        height: 50vh;
        min-height: 350px;
        margin-top: 110px;
    }
    
    .slide-content h2 {
        font-size: var(--font-size-xl);
        margin-bottom: var(--spacing-sm);
    }
    
    .slide-content p {
        font-size: var(--font-size-sm);
        margin-bottom: var(--spacing-lg);
    }
    
    .services-grid {
        grid-template-columns: 1fr;
    }
    
    .service-card {
        padding: var(--spacing-lg);
    }
    
    .gallery-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: var(--spacing-sm);
    }
    
    .trust-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: var(--spacing-sm);
    }
    
    .trust-item {
        padding: var(--spacing-md);
    }
    
    .cta-section {
        margin: 0 var(--spacing-md);
        border-radius: var(--radius-xl);
    }
}

/* Mobile Portrait (≤575px) */
@media (max-width: 575px) {
    .hero-slider {
        height: 40vh;
        min-height: 300px;
        margin-top: 90px;
        margin-right: var(--spacing-sm);
        margin-left: var(--spacing-sm);
        border-radius: var(--radius-lg);
        margin-bottom: var(--spacing-xl);
    }
    
    .slide-content {
        right: var(--spacing-md);
        left: var(--spacing-md);
        width: calc(100% - 2 * var(--spacing-md));
        padding: var(--spacing-sm);
    }
    
    .slide-content h2 {
        font-size: var(--font-size-lg);
        margin-bottom: var(--spacing-xs);
    }
    
    .slide-content p {
        font-size: var(--font-size-xs);
        margin-bottom: var(--spacing-md);
        line-height: 1.5;
    }
    
    .slider-controls {
        bottom: var(--spacing-md);
    }
    
    .slider-nav {
        display: none;
    }
    
    .slider-dot {
        width: 8px;
        height: 8px;
    }
    
    .section-header {
        margin-bottom: var(--spacing-xl);
    }
    
    .section-title {
        font-size: var(--font-size-xl);
    }
    
    .section-subtitle {
        font-size: var(--font-size-sm);
    }
    
    .services-section {
        padding: var(--spacing-xl) 0;
    }
    
    .services-grid {
        grid-template-columns: 1fr;
        gap: var(--spacing-md);
        padding: 0 var(--spacing-sm);
    }
    
    .service-card {
        padding: var(--spacing-md);
    }
    
    .service-icon {
        width: 48px;
        height: 48px;
        font-size: var(--font-size-lg);
        margin-bottom: var(--spacing-md);
    }
    
    .service-title {
        font-size: var(--font-size-base);
    }
    
    .service-description {
        font-size: var(--font-size-xs);
    }
    
    .gallery-section {
        padding: var(--spacing-xl) 0;
    }
    
    .gallery-grid {
        grid-template-columns: 1fr;
        gap: var(--spacing-sm);
        padding: 0 var(--spacing-sm);
    }
    
    .gallery-overlay {
        padding: var(--spacing-md);
    }
    
    .gallery-overlay h4 {
        font-size: var(--font-size-sm);
    }
    
    .gallery-overlay p {
        font-size: var(--font-size-xs);
    }
    
    .trust-section {
        padding: var(--spacing-xl) 0;
    }
    
    .trust-grid {
        grid-template-columns: 1fr;
        gap: var(--spacing-md);
        padding: 0 var(--spacing-sm);
    }
    
    .trust-item {
        padding: var(--spacing-md);
    }
    
    .trust-icon {
        font-size: var(--font-size-xl);
        margin-bottom: var(--spacing-sm);
    }
    
    .trust-title {
        font-size: var(--font-size-sm);
    }
    
    .trust-description {
        font-size: var(--font-size-xs);
    }
    
    .cta-section {
        padding: var(--spacing-xl) var(--spacing-sm);
        margin: 0 var(--spacing-sm);
        border-radius: var(--radius-lg);
    }
    
    .cta-title {
        font-size: var(--font-size-xl);
    }
    
    .cta-description {
        font-size: var(--font-size-sm);
    }
    
    .cta-btn {
        padding: var(--spacing-sm) var(--spacing-lg);
        font-size: var(--font-size-xs);
        width: 100%;
    }
}

/* Small Mobile (≤375px) */
@media (max-width: 375px) {
    .hero-slider {
        height: 35vh;
        min-height: 250px;
    }
    
    .slide-content h2 {
        font-size: var(--font-size-base);
    }
    
    .slide-content p {
        font-size: 0.75rem;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    
    .services-grid {
        gap: var(--spacing-sm);
    }
    
    .service-card {
        padding: var(--spacing-sm);
    }
    
    .cta-section {
        padding: var(--spacing-lg) var(--spacing-sm);
    }
    
    .cta-title {
        font-size: var(--font-size-lg);
    }
}

/* Extra Small Mobile (≤320px) */
@media (max-width: 320px) {
    .hero-slider {
        margin-top: 85px;
        height: 30vh;
        min-height: 200px;
    }
    
    .slide-content {
        padding: var(--spacing-xs);
    }
    
    .slider-controls {
        bottom: var(--spacing-sm);
    }
    
    .cta-buttons {
        gap: var(--spacing-sm);
    }
    
    .cta-btn {
        padding: var(--spacing-xs) var(--spacing-md);
    }
}

/* Touch Device Optimizations */
@media (hover: none) and (pointer: coarse) {
    .service-card:hover {
        transform: none;
    }
    
    .gallery-item:hover .gallery-overlay {
        transform: translateY(0);
    }
    
    .gallery-item:hover .gallery-image {
        transform: none;
    }
    
    .trust-item:hover {
        transform: none;
    }
    
    .cta-btn:hover {
        transform: none;
    }
    
    .service-card:active {
        transform: scale(0.98);
    }
    
    .cta-btn:active {
        transform: scale(0.98);
    }
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
    .slide {
        transition: none;
    }
    
    .service-card:hover,
    .trust-item:hover,
    .gallery-item:hover .gallery-image,
    .gallery-item:hover .gallery-overlay {
        transform: none;
    }
}

/* ===== Animations ===== */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in {
    animation: fadeIn 0.6s ease-out forwards;
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

/* Loading States */
.loading {
    position: relative;
    overflow: hidden;
}

.loading::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    animation: loading 1.5s infinite;
}

@keyframes loading {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(100%);
    }
}
</style>

<!-- ===== Hero Slider ===== -->
<section class="hero-slider" aria-label="اسلایدر تصاویر">
    <div class="slider-container">
        <div class="slide active" data-slide="1">
            <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                 alt="کتاب‌فروشی علی اکبری" 
                 class="slide-image" loading="lazy">
            <div class="slide-overlay"></div>
            <div class="slide-content">
                <h2>تمام خدمات آموزشی، چاپ و دیجیتال در یک‌جا</h2>
                <p class="lead">از کتاب‌های درسی تا خدمات کامپیوتری پیشرفته - همه نیازهای آموزشی و اداری شما در فروشگاه علی اکبری</p>
                <a href="#services" class="cta-btn primary">مشاهده خدمات</a>
            </div>
        </div>
        
        <div class="slide" data-slide="2">
            <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                 alt="بخش کتاب‌فروشی" 
                 class="slide-image" loading="lazy">
            <div class="slide-overlay"></div>
            <div class="slide-content">
                <h2>کتاب‌فروشی تخصصی برای همه مقاطع</h2>
                <p class="lead">کتاب‌های درسی، دانشگاهی، کانکوری و مطالعاتی با بهترین قیمت و کیفیت</p>
                <a href="books.html" class="cta-btn primary">مشاهده کتاب‌ها</a>
            </div>
        </div>
        
        <div class="slide" data-slide="3">
            <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                 alt="بخش مطبعه" 
                 class="slide-image" loading="lazy">
            <div class="slide-overlay"></div>
            <div class="slide-content">
                <h2>خدمات چاپ و طراحی حرفه‌ای</h2>
                <p class="lead">چاپ، کپی، اسکن، ترجمه و طراحی با مدرن‌ترین دستگاه‌ها و نرم‌افزارها</p>
                <a href="print.html" class="cta-btn primary">خدمات مطبعه</a>
            </div>
        </div>
        
        <div class="slide" data-slide="4">
            <img src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                 alt="آموزش دیجیتال" 
                 class="slide-image" loading="lazy">
            <div class="slide-overlay"></div>
            <div class="slide-content">
                <h2>آموزش‌های دیجیتال برای مهارت‌افزایی</h2>
                <p class="lead">دوره‌های آموزشی کامپیوتر، زبان انگلیسی و مهارت‌های حرفه‌ای</p>
                <a href="education.html" class="cta-btn primary">آموزش دیجیتال</a>
            </div>
        </div>
    </div>

    <!-- Slider Navigation -->
    <div class="slider-nav">
        <button class="slider-btn prev-slide" aria-label="اسلاید قبلی">
            <i class="bi bi-chevron-right"></i>
        </button>
        <button class="slider-btn next-slide" aria-label="اسلاید بعدی">
            <i class="bi bi-chevron-left"></i>
        </button>
    </div>

    <!-- Slider Dots -->
    <div class="slider-controls">
        <button class="slider-dot active" data-slide="0" aria-label="رفتن به اسلاید ۱"></button>
        <button class="slider-dot" data-slide="1" aria-label="رفتن به اسلاید ۲"></button>
        <button class="slider-dot" data-slide="2" aria-label="رفتن به اسلاید ۳"></button>
        <button class="slider-dot" data-slide="3" aria-label="رفتن به اسلاید ۴"></button>
    </div>
</section>

<!-- ===== Services Section ===== -->
<section class="services-section" id="services">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title animate-fade-in">خدمات ما</h2>
            <p class="section-subtitle animate-fade-in delay-1">هر آنچه برای موفقیت تحصیلی، اداری و حرفه‌ای نیاز دارید</p>
        </div>
        
        <div class="services-grid">
            <div class="service-card animate-fade-in delay-2">
                <div class="service-icon">
                    <i class="bi bi-book"></i>
                </div>
                <h3 class="service-title">کتاب‌فروشی</h3>
                <p class="service-description">کلیه کتاب‌های درسی، دانشگاهی، کانکوری، مطالعاتی و دینی با قیمت مناسب و کیفیت تضمینی. تنوع کامل کتاب‌ها برای همه مقاطع تحصیلی.</p>
                <a href="{{ site.baseurl }}/books" class="cta-btn secondary">مشاهده کتاب‌ها</a>
            </div>
            
            <div class="service-card animate-fade-in delay-2">
                <div class="service-icon">
                    <i class="bi bi-printer"></i>
                </div>
                <h3 class="service-title">مطبعه</h3>
                <p class="service-description">پرینت، کپی، اسکن، چاپ کارت، ترجمه اسناد و خدمات آنلاین با پیشرفته‌ترین دستگاه‌ها. کیفیت بالا و سرعت در انجام کارها.</p>
                <a href="{{ site.baseurl }}/print" class="cta-btn secondary">خدمات مطبعه</a>
            </div>
            
            <div class="service-card animate-fade-in delay-3">
                <div class="service-icon">
                    <i class="bi bi-camera"></i>
                </div>
                <h3 class="service-title">عکاسی</h3>
                <p class="service-description">عکاسی حرفه‌ای، بازسازی عکس‌های قدیمی و ادیت عکس مطابق سلیقه شما. استفاده از تجهیزات مدرن و نرم‌افزارهای تخصصی.</p>
                <a href="{{ site.baseurl }}/photography" class="cta-btn secondary">خدمات عکاسی</a>
            </div>
            
            <div class="service-card animate-fade-in delay-1">
                <div class="service-icon">
                    <i class="bi bi-pencil"></i>
                </div>
                <h3 class="service-title">قرطاسیه‌فروشی</h3>
                <p class="service-description">لوازم تحریر، اداری و هنری با تنوع بالا و قیمت مناسب برای دانش‌آموزان و ادارات. کیفیت برتر در لوازم آموزشی.</p>
                <a href="{{ site.baseurl }}/stationery" class="cta-btn secondary">محصولات قرطاسیه</a>
            </div>
            
            <div class="service-card animate-fade-in delay-2">
                <div class="service-icon">
                    <i class="bi bi-laptop"></i>
                </div>
                <h3 class="service-title">آموزش دیجیتال</h3>
                <p class="service-description">دوره‌های آموزشی کامپیوتر، زبان انگلیسی، خیاطی و مهارت‌های کارآفرینی. آموزش‌های کاربردی و بازار محور.</p>
                <a href="{{ site.baseurl }}/education" class="cta-btn secondary">آموزش دیجیتال</a>
            </div>
            
            <div class="service-card animate-fade-in delay-3">
                <div class="service-icon">
                    <i class="bi bi-globe"></i>
                </div>
                <h3 class="service-title">خدمات آنلاین</h3>
                <p class="service-description">ثبت‌نام تذکره، پاسپورت، بورسیه و سایر خدمات دولتی به صورت آنلاین. صرفه‌جویی در زمان و هزینه.</p>
                <a href="{{ site.baseurl }}/print#online-registration" class="cta-btn secondary">خدمات آنلاین</a>
            </div>
        </div>
    </div>
</section>

<!-- ===== Gallery Section ===== -->
<section class="gallery-section" id="gallery">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title animate-fade-in">گالری تصاویر</h2>
            <p class="section-subtitle animate-fade-in delay-1">نمونه‌کارها و محیط فروشگاه</p>
        </div>
        
        <div class="gallery-grid">
            <div class="gallery-item animate-fade-in">
                <img src="https://images.unsplash.com/photo-1544716278-e513176f20b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                     alt="بخش کتاب‌فروشی" 
                     class="gallery-image" loading="lazy">
                <div class="gallery-overlay">
                    <h4 class="mb-0">بخش کتاب‌فروشی</h4>
                    <p class="mb-0">تنوع گسترده کتاب‌های درسی و دانشگاهی</p>
                </div>
            </div>
            
            <div class="gallery-item animate-fade-in delay-1">
                <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                     alt="خدمات چاپ" 
                     class="gallery-image" loading="lazy">
                <div class="gallery-overlay">
                    <h4 class="mb-0">بخش چاپ و کپی</h4>
                    <p class="mb-0">دستگاه‌های پیشرفته چاپ و اسکن</p>
                </div>
            </div>
            
            <div class="gallery-item animate-fade-in delay-2">
                <img src="https://images.unsplash.com/photo-1565688534245-05d6b5be184a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                     alt="لوازم تحریر" 
                     class="gallery-image" loading="lazy">
                <div class="gallery-overlay">
                    <h4 class="mb-0">قرطاسیه‌فروشی</h4>
                    <p class="mb-0">لوازم تحریر و اداری متنوع</p>
                </div>
            </div>
            
            <div class="gallery-item animate-fade-in delay-3">
                <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                     alt="نمای داخلی فروشگاه" 
                     class="gallery-image" loading="lazy">
                <div class="gallery-overlay">
                    <h4 class="mb-0">نمای داخلی فروشگاه</h4>
                    <p class="mb-0">محیطی منظم و خدمات‌محور</p>
                </div>
            </div>
            <div class="gallery-item animate-fade-in delay-3">
                <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                     alt="نمای داخلی فروشگاه" 
                     class="gallery-image" loading="lazy">
                <div class="gallery-overlay">
                    <h4 class="mb-0">نمای داخلی فروشگاه</h4>
                    <p class="mb-0">محیطی منظم و خدمات‌محور</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ===== Trust Section ===== -->
<section class="trust-section" id="why-us">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title animate-fade-in">چرا ما را انتخاب کنید؟</h2>
            <p class="section-subtitle animate-fade-in delay-1">مزایای منحصر به فرد فروشگاه علی اکبری</p>
        </div>
        
        <div class="trust-grid">
            <div class="trust-item animate-fade-in">
                <div class="trust-icon">
                    <i class="bi bi-award"></i>
                </div>
                <h3 class="trust-title">کیفیت تضمینی</h3>
                <p class="trust-description">استفاده از بهترین مواد و دستگاه‌های روز دنیا برای ارائه خدمات باکیفیت</p>
            </div>
            
            <div class="trust-item animate-fade-in delay-1">
                <div class="trust-icon">
                    <i class="bi bi-lightning"></i>
                </div>
                <h3 class="trust-title">سرعت عمل بالا</h3>
                <p class="trust-description">ارائه خدمات در کوتاه‌ترین زمان ممکن با حفظ کیفیت</p>
            </div>
            
            <div class="trust-item animate-fade-in delay-2">
                <div class="trust-icon">
                    <i class="bi bi-cash-stack"></i>
                </div>
                <h3 class="trust-title">قیمت مناسب</h3>
                <p class="trust-description">ارائه خدمات با مناسب‌ترین قیمت‌ها در مقایسه با رقبا</p>
            </div>
            
            <div class="trust-item animate-fade-in delay-3">
                <div class="trust-icon">
                    <i class="bi bi-person-badge"></i>
                </div>
                <h3 class="trust-title">تخصص و تجربه</h3>
                <p class="trust-description">سال‌ها تجربه در زمینه خدمات آموزشی، چاپی و دیجیتال</p>
            </div>
        </div>
    </div>
</section>

<!-- ===== CTA Section ===== -->
<section class="cta-section" id="cta">
    <div class="container">
        <div class="cta-content">
            <h2 class="cta-title animate-fade-in">آماده ارائه خدمات به شما هستیم</h2>
            <p class="cta-description animate-fade-in delay-1">برای ثبت سفارش، دریافت مشاوره یا بازدید از فروشگاه، با ما در تماس باشید. ما بهترین خدمات را با کیفیت عالی و قیمت مناسب ارائه می‌دهیم.</p>
            
            <div class="cta-buttons">
                <a href="tel:{{ site.phone_primary }}" class="cta-btn primary animate-fade-in delay-2">
                    <i class="bi bi-telephone"></i>
                    تماس تلفنی: {{ site.phone_primary }}
                </a>
                
                <a href="#footer" class="cta-btn secondary animate-fade-in delay-3">
                    <i class="bi bi-geo-alt"></i>
                    آدرس فروشگاه
                </a>
            </div>
        </div>
    </div>
</section>

<script>
// Slider Functionality
class HeroSlider {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.dots = document.querySelectorAll('.slider-dot');
        this.prevBtn = document.querySelector('.prev-slide');
        this.nextBtn = document.querySelector('.next-slide');
        this.currentSlide = 0;
        this.slideInterval = null;
        this.slideDuration = 5000;
        this.isAutoSliding = true;
        this.touchStartX = 0;
        this.touchEndX = 0;

        this.init();
    }

    init() {
        // Set initial active slide
        this.showSlide(this.currentSlide);

        // Dot controls
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.stopAutoSlide();
                this.showSlide(index);
                this.startAutoSlide();
            });
        });

        // Previous button
        this.prevBtn.addEventListener('click', () => {
            this.stopAutoSlide();
            this.prevSlide();
            this.startAutoSlide();
        });

        // Next button
        this.nextBtn.addEventListener('click', () => {
            this.stopAutoSlide();
            this.nextSlide();
            this.startAutoSlide();
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') {
                this.stopAutoSlide();
                this.prevSlide();
                this.startAutoSlide();
            } else if (e.key === 'ArrowLeft') {
                this.stopAutoSlide();
                this.nextSlide();
                this.startAutoSlide();
            }
        });

        // Touch/swipe support
        const slider = document.querySelector('.hero-slider');
        slider.addEventListener('touchstart', (e) => {
            this.touchStartX = e.changedTouches[0].screenX;
            this.stopAutoSlide();
        }, { passive: true });

        slider.addEventListener('touchend', (e) => {
            this.touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
            this.startAutoSlide();
        }, { passive: true });

        // Start auto-slide
        this.startAutoSlide();

        // Pause on hover (desktop only)
        if (window.matchMedia('(hover: hover)').matches) {
            slider.addEventListener('mouseenter', () => this.stopAutoSlide());
            slider.addEventListener('mouseleave', () => this.startAutoSlide());
        }

        // Handle visibility change
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.stopAutoSlide();
            } else {
                this.startAutoSlide();
            }
        });
    }

    showSlide(index) {
        // Remove active class from all slides and dots
        this.slides.forEach(slide => {
            slide.classList.remove('active');
            slide.setAttribute('aria-hidden', 'true');
        });
        this.dots.forEach(dot => dot.classList.remove('active'));

        // Add active class to current slide and dot
        this.currentSlide = (index + this.slides.length) % this.slides.length;
        this.slides[this.currentSlide].classList.add('active');
        this.slides[this.currentSlide].setAttribute('aria-hidden', 'false');
        this.dots[this.currentSlide].classList.add('active');
        this.dots[this.currentSlide].setAttribute('aria-current', 'true');
        
        // Update other dots
        this.dots.forEach((dot, i) => {
            if (i !== this.currentSlide) {
                dot.removeAttribute('aria-current');
            }
        });
    }

    nextSlide() {
        this.showSlide(this.currentSlide + 1);
    }

    prevSlide() {
        this.showSlide(this.currentSlide - 1);
    }

    startAutoSlide() {
        if (this.isAutoSliding) {
            this.stopAutoSlide();
            this.slideInterval = setInterval(() => this.nextSlide(), this.slideDuration);
        }
    }

    stopAutoSlide() {
        if (this.slideInterval) {
            clearInterval(this.slideInterval);
            this.slideInterval = null;
        }
    }

    handleSwipe() {
        const swipeThreshold = 50;
        const swipeDistance = this.touchEndX - this.touchStartX;

        if (Math.abs(swipeDistance) > swipeThreshold) {
            if (swipeDistance > 0) {
                // Swipe right = previous slide
                this.prevSlide();
            } else {
                // Swipe left = next slide
                this.nextSlide();
            }
        }
    }
}

// Initialize slider when DOM is loaded
let slider;
document.addEventListener('DOMContentLoaded', () => {
    slider = new HeroSlider();
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements with animation classes
document.querySelectorAll('.animate-fade-in').forEach(el => {
    observer.observe(el);
});

// Lazy loading for images with intersection observer
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                }
                img.classList.remove('loading');
                imageObserver.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px 0px',
        threshold: 0.1
    });

    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        img.classList.add('loading');
        imageObserver.observe(img);
    });
}

// Add loading state to buttons on click
document.querySelectorAll('.cta-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        if (this.href && this.href.startsWith('tel:')) {
            return; // Don't add loading state for tel links
        }
        
        // Add loading state
        const originalText = this.innerHTML;
        this.innerHTML = '<span class="loading-text">در حال بارگذاری...</span>';
        this.classList.add('loading');
        
        // Restore after delay (simulate loading)
        setTimeout(() => {
            this.innerHTML = originalText;
            this.classList.remove('loading');
        }, 1500);
    });
});

// Handle reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (prefersReducedMotion.matches && slider) {
    slider.isAutoSliding = false;
    slider.stopAutoSlide();
}

// Update on preference change
prefersReducedMotion.addEventListener('change', (e) => {
    if (slider) {
        slider.isAutoSliding = !e.matches;
        if (slider.isAutoSliding) {
            slider.startAutoSlide();
        } else {
            slider.stopAutoSlide();
        }
    }
});
</script>
