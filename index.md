---
layout: default
title: "قرطاسیه فروشی و مطبعه علی اکبری | مرکز تخصصی خدمات آموزشی، چاپ و دیجیتال در کابل"
description: "ارائه کلیه خدمات آموزشی، چاپ و دیجیتال در کابل - کتاب‌فروشی، مطبعه، عکاسی، قرطاسیه، خدمات کامپیوتری و آموزش دیجیتال با بالاترین کیفیت"
keywords: "کتاب‌فروشی, مطبعه, خدمات کامپیوتری, چاپ, عکاسی, کابل, علی اکبری, لوازم تحریر, آموزش دیجیتال"
---

<style>
/* ===== RESET & BASE ===== */
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    scroll-padding-top: 100px;
}

body {
    font-family: 'Vazirmatn', -apple-system, BlinkMacSystemFont, sans-serif;
    background: #ffffff;
    color: #1e293b;
    line-height: 1.6;
    overflow-x: hidden;
}

/* ===== VARIABLES ===== */
:root {
    /* رنگ‌بندی جدید و جذاب - ترکیب فیروزه‌ای و طلایی */
    --primary: #0f5e7a;
    --primary-light: #1e7e9e;
    --primary-dark: #0a4055;
    --secondary: #f0b202;
    --secondary-light: #f9c74f;
    --secondary-dark: #cb8b00;
    --accent-1: #f25f5c;
    --accent-2: #9b5de5;
    --gradient-1: linear-gradient(135deg, var(--primary), #2a9d8f);
    --gradient-2: linear-gradient(135deg, var(--secondary), var(--accent-2));
    --gradient-3: linear-gradient(135deg, #f25f5c, #f0b202);
    --gradient-gold: linear-gradient(135deg, #f0b202, #f9c74f, #f0b202);
    --gradient-teal: linear-gradient(135deg, #0f5e7a, #1e7e9e, #2a9d8f);
    
    /* سایه‌های درخشان */
    --shadow-sm: 0 4px 6px rgba(15, 94, 122, 0.05);
    --shadow-md: 0 10px 25px rgba(15, 94, 122, 0.1);
    --shadow-lg: 0 20px 40px rgba(15, 94, 122, 0.15);
    --shadow-xl: 0 30px 60px rgba(15, 94, 122, 0.2);
    --shadow-glow: 0 0 30px rgba(240, 178, 2, 0.3);
    --shadow-glow-primary: 0 0 30px rgba(15, 94, 122, 0.3);
    
    /* انیمیشن‌ها */
    --transition-fast: 200ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-base: 400ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-slow: 600ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-bounce: 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
    
    /* فاصله‌ها */
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 1.5rem;
    --spacing-lg: 2rem;
    --spacing-xl: 3rem;
    --spacing-2xl: 4rem;
    --spacing-3xl: 6rem;
}

/* ===== LOADING ANIMATION ===== */
.page-loader {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #0f5e7a, #1e7e9e);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.5s ease, visibility 0.5s ease;
}

.page-loader.fade-out {
    opacity: 0;
    visibility: hidden;
}

.loader-content {
    text-align: center;
}

.loader-logo {
    width: 120px;
    height: 120px;
    background: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 2rem;
    box-shadow: 0 0 50px rgba(255,255,255,0.5);
    animation: pulse 2s infinite;
}

.loader-logo span {
    font-size: 3rem;
    font-weight: 900;
    color: var(--primary);
}

.loader-spinner {
    width: 60px;
    height: 60px;
    border: 4px solid rgba(255,255,255,0.3);
    border-top-color: white;
    border-radius: 50%;
    animation: spin 1s infinite linear;
    margin: 0 auto;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}

/* ===== ANIMATIONS ===== */
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

@keyframes fadeInRight {
    from {
        opacity: 0;
        transform: translateX(-30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fadeInLeft {
    from {
        opacity: 0;
        transform: translateX(30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes scaleIn {
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}

@keyframes floatReverse {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-15px) rotate(3deg); }
}

@keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
}

@keyframes tilt {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(2deg); }
    75% { transform: rotate(-2deg); }
}

@keyframes glitch {
    0%, 100% { transform: translate(0); }
    20% { transform: translate(-2px, 2px); }
    40% { transform: translate(2px, -2px); }
    60% { transform: translate(-1px, -1px); }
    80% { transform: translate(1px, 1px); }
}

.animate-fade-up {
    animation: fadeInUp 1s ease forwards;
}

.animate-fade-right {
    animation: fadeInRight 1s ease forwards;
}

.animate-fade-left {
    animation: fadeInLeft 1s ease forwards;
}

.animate-scale {
    animation: scaleIn 1s ease forwards;
}

.animate-float {
    animation: float 6s infinite ease-in-out;
}

.animate-float-reverse {
    animation: floatReverse 8s infinite ease-in-out;
}

.animate-tilt {
    animation: tilt 10s infinite ease-in-out;
}

.animate-glitch:hover {
    animation: glitch 0.3s infinite;
}

.delay-1 { animation-delay: 0.2s; }
.delay-2 { animation-delay: 0.4s; }
.delay-3 { animation-delay: 0.6s; }
.delay-4 { animation-delay: 0.8s; }

/* ===== HERO SLIDER با دیزاین جدید ===== */
.hero-section {
    position: relative;
    height: 100vh;
    min-height: 600px;
    max-height: 900px;
    overflow: hidden;
    margin-top: 80px;
}

.hero-slider {
    position: relative;
    width: 100%;
    height: 100%;
}

.slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    visibility: hidden;
    transition: opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1), visibility 1.5s;
    will-change: opacity, visibility;
}

.slide.active {
    opacity: 1;
    visibility: visible;
}

.slide-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1);
    transition: transform 8s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide.active .slide-image {
    transform: scale(1.1);
}

.slide-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        135deg,
        rgba(15, 94, 122, 0.9) 0%,
        rgba(15, 94, 122, 0.7) 30%,
        rgba(240, 178, 2, 0.5) 70%,
        transparent 100%
    );
    z-index: 2;
}

.slide-content {
    position: absolute;
    top: 50%;
    right: 10%;
    transform: translateY(-50%);
    max-width: 700px;
    color: white;
    z-index: 3;
    text-align: right;
}

.slide-content h2 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 900;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    text-shadow: 2px 2px 20px rgba(0,0,0,0.3);
    position: relative;
}

.slide-content h2::before {
    content: '';
    position: absolute;
    top: -20px;
    right: 0;
    width: 80px;
    height: 4px;
    background: var(--gradient-gold);
    border-radius: 2px;
}

.slide-content p {
    font-size: clamp(1rem, 2vw, 1.3rem);
    margin-bottom: 2rem;
    line-height: 1.8;
    opacity: 0.95;
    text-shadow: 1px 1px 10px rgba(0,0,0,0.2);
}

.slide-badge {
    display: inline-block;
    background: rgba(255,255,255,0.15);
    backdrop-filter: blur(10px);
    padding: 0.8rem 1.5rem;
    border-radius: 50px;
    margin-bottom: 1.5rem;
    border: 1px solid rgba(255,255,255,0.3);
    color: var(--secondary-light);
    font-weight: 600;
    font-size: 0.9rem;
    letter-spacing: 1px;
}

.slide-badge i {
    margin-left: 0.5rem;
    color: var(--secondary);
}

.hero-cta {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    padding: 1.2rem 2.5rem;
    background: var(--gradient-gold);
    color: var(--primary-dark);
    text-decoration: none;
    border-radius: 60px;
    font-weight: 700;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    box-shadow: 0 10px 30px rgba(240, 178, 2, 0.4);
    position: relative;
    overflow: hidden;
}

.hero-cta::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: left 0.5s;
}

.hero-cta:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 20px 40px rgba(240, 178, 2, 0.5);
}

.hero-cta:hover::before {
    left: 100%;
}

.hero-cta i {
    transition: transform 0.3s;
}

.hero-cta:hover i {
    transform: translateX(-5px);
}

.slider-controls {
    position: absolute;
    bottom: 30px;
    right: 50%;
    transform: translateX(50%);
    display: flex;
    gap: 1rem;
    z-index: 4;
}

.slider-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(255,255,255,0.4);
    border: 2px solid transparent;
    cursor: pointer;
    transition: all 0.3s;
    padding: 0;
}

.slider-dot.active {
    width: 30px;
    border-radius: 6px;
    background: var(--secondary);
    transform: scale(1);
}

.slider-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    z-index: 4;
}

.slider-btn {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(255,255,255,0.2);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255,255,255,0.3);
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
}

.slider-btn:hover {
    background: var(--secondary);
    border-color: white;
    transform: scale(1.1);
    color: var(--primary-dark);
}

/* ===== FLOATING ELEMENTS ===== */
.floating-elements {
    position: relative;
    height: 0;
    z-index: 10;
}

.floating-element {
    position: absolute;
    font-size: 3rem;
    opacity: 0.1;
    pointer-events: none;
    z-index: 1;
}

.floating-element-1 {
    top: 20%;
    right: 5%;
    animation: float 10s infinite;
}

.floating-element-2 {
    bottom: 20%;
    left: 5%;
    animation: floatReverse 12s infinite;
}

.floating-element-3 {
    top: 40%;
    left: 10%;
    animation: tilt 15s infinite;
}

.floating-element-4 {
    bottom: 30%;
    right: 15%;
    animation: float 8s infinite reverse;
}

/* ===== SERVICES SECTION با دیزاین جدید ===== */
.services-section {
    padding: var(--spacing-3xl) 0;
    background: #f8fafc;
    position: relative;
    overflow: hidden;
}

.services-section::before {
    content: '';
    position: absolute;
    top: -100px;
    right: -100px;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(15,94,122,0.05) 0%, transparent 70%);
    border-radius: 50%;
}

.services-section::after {
    content: '';
    position: absolute;
    bottom: -100px;
    left: -100px;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(240,178,2,0.05) 0%, transparent 70%);
    border-radius: 50%;
}

.section-header {
    text-align: center;
    margin-bottom: var(--spacing-2xl);
    position: relative;
    z-index: 2;
}

.section-tag {
    display: inline-block;
    background: var(--gradient-teal);
    color: white;
    padding: 0.5rem 1.5rem;
    border-radius: 50px;
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 1px;
    margin-bottom: 1rem;
    box-shadow: var(--shadow-md);
}

.section-title {
    font-size: clamp(2rem, 4vw, 2.8rem);
    color: var(--primary-dark);
    font-weight: 900;
    margin-bottom: 1rem;
    position: relative;
    display: inline-block;
}

.section-title span {
    color: var(--secondary);
    position: relative;
}

.section-title span::after {
    content: '';
    position: absolute;
    bottom: 5px;
    left: 0;
    width: 100%;
    height: 10px;
    background: rgba(240, 178, 2, 0.2);
    z-index: -1;
}

.section-subtitle {
    max-width: 700px;
    margin: 0 auto;
    color: #64748b;
    font-size: 1.2rem;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
    position: relative;
    z-index: 2;
}

.service-card {
    background: white;
    border-radius: 30px;
    padding: 2.5rem;
    box-shadow: var(--shadow-lg);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    border: 2px solid transparent;
    position: relative;
    overflow: hidden;
    z-index: 1;
}

.service-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--primary), var(--primary-light));
    opacity: 0;
    transition: opacity 0.5s;
    z-index: -1;
}

.service-card:hover {
    transform: translateY(-15px) scale(1.02);
    border-color: var(--secondary);
    box-shadow: var(--shadow-xl), var(--shadow-glow);
}

.service-card:hover::before {
    opacity: 0.03;
}

.service-card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 0;
    background: var(--gradient-gold);
    transition: height 0.5s;
}

.service-card:hover::after {
    height: 100%;
}

.service-icon-wrapper {
    width: 80px;
    height: 80px;
    background: var(--gradient-teal);
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    color: white;
    font-size: 2rem;
    transition: all 0.5s;
    box-shadow: var(--shadow-md);
}

.service-card:hover .service-icon-wrapper {
    border-radius: 50%;
    transform: rotate(360deg) scale(1.1);
    background: var(--gradient-gold);
}

.service-title {
    font-size: 1.8rem;
    color: var(--primary-dark);
    margin-bottom: 1rem;
    font-weight: 800;
    position: relative;
}

.service-title::after {
    content: '';
    position: absolute;
    bottom: -5px;
    right: 0;
    width: 50px;
    height: 3px;
    background: var(--gradient-gold);
    border-radius: 2px;
    transition: width 0.3s;
}

.service-card:hover .service-title::after {
    width: 80px;
}

.service-description {
    color: #64748b;
    margin-bottom: 2rem;
    line-height: 1.8;
    font-size: 1.05rem;
}

.service-features {
    list-style: none;
    margin-bottom: 2rem;
}

.service-features li {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-bottom: 0.8rem;
    color: #475569;
    font-size: 0.95rem;
}

.service-features i {
    color: var(--secondary);
    font-size: 1.2rem;
}

.service-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--primary);
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s;
    position: relative;
}

.service-link::before {
    content: '';
    position: absolute;
    bottom: -2px;
    right: 0;
    width: 0;
    height: 2px;
    background: var(--gradient-gold);
    transition: width 0.3s;
}

.service-link:hover {
    color: var(--secondary);
    gap: 1rem;
}

.service-link:hover::before {
    width: 100%;
}

/* ===== GALLERY SECTION با دیزاین جدید ===== */
.gallery-section {
    padding: var(--spacing-3xl) 0;
    background: linear-gradient(135deg, var(--primary-dark), var(--primary));
    position: relative;
    overflow: hidden;
}

.gallery-section .section-title {
    color: white;
}

.gallery-section .section-subtitle {
    color: rgba(255,255,255,0.8);
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    margin-top: 3rem;
}

.gallery-item {
    position: relative;
    border-radius: 30px;
    overflow: hidden;
    aspect-ratio: 1;
    cursor: pointer;
    box-shadow: var(--shadow-xl);
    transition: all 0.5s;
}

.gallery-item:hover {
    transform: scale(1.02);
    box-shadow: 0 30px 60px rgba(0,0,0,0.4);
    z-index: 10;
}

.gallery-item.large {
    grid-column: span 2;
    grid-row: span 2;
    aspect-ratio: 1;
}

.gallery-item.wide {
    grid-column: span 2;
    aspect-ratio: 2/1;
}

.gallery-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s;
}

.gallery-item:hover .gallery-image {
    transform: scale(1.1);
}

.gallery-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0,0,0,0.9));
    padding: 2rem;
    color: white;
    transform: translateY(100%);
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.gallery-item:hover .gallery-overlay {
    transform: translateY(0);
}

.gallery-overlay h4 {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
    color: var(--secondary);
}

.gallery-overlay p {
    font-size: 0.95rem;
    opacity: 0.9;
}

.gallery-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: var(--gradient-gold);
    color: var(--primary-dark);
    padding: 0.5rem 1rem;
    border-radius: 30px;
    font-size: 0.8rem;
    font-weight: 600;
    z-index: 2;
    transform: translateY(-20px);
    opacity: 0;
    transition: all 0.3s;
}

.gallery-item:hover .gallery-badge {
    transform: translateY(0);
    opacity: 1;
}

/* ===== STATS SECTION ===== */
.stats-section {
    padding: var(--spacing-2xl) 0;
    background: white;
    position: relative;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
}

.stat-item {
    text-align: center;
    padding: 2rem;
    background: linear-gradient(135deg, #f8fafc, white);
    border-radius: 30px;
    box-shadow: var(--shadow-md);
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
}

.stat-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: var(--gradient-gold);
    transform: translateX(-100%);
    transition: transform 0.6s;
}

.stat-item:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
}

.stat-item:hover::before {
    transform: translateX(0);
}

.stat-number {
    font-size: 3.5rem;
    font-weight: 900;
    color: var(--primary);
    line-height: 1;
    margin-bottom: 0.5rem;
}

.stat-label {
    font-size: 1.1rem;
    color: #64748b;
    font-weight: 600;
}

.stat-icon {
    font-size: 2.5rem;
    color: var(--secondary);
    margin-bottom: 1rem;
}

/* ===== TRUST SECTION با دیزاین جدید ===== */
.trust-section {
    padding: var(--spacing-3xl) 0;
    background: linear-gradient(135deg, #0f5e7a, #1e7e9e);
    position: relative;
    overflow: hidden;
}

.trust-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" opacity="0.1"><path d="M20,20 L80,20 L80,80 L20,80 Z" fill="none" stroke="white" stroke-width="2"/><circle cx="50" cy="50" r="15" fill="none" stroke="white" stroke-width="2"/></svg>') repeat;
    background-size: 50px;
    animation: move 30s linear infinite;
}

@keyframes move {
    0% { background-position: 0 0; }
    100% { background-position: 50px 50px; }
}

.trust-section .section-title {
    color: white;
}

.trust-section .section-subtitle {
    color: rgba(255,255,255,0.9);
}

.trust-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    margin-top: 3rem;
}

.trust-card {
    background: rgba(255,255,255,0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 30px;
    padding: 2rem;
    text-align: center;
    transition: all 0.4s;
    position: relative;
    overflow: hidden;
}

.trust-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--secondary), var(--secondary-light));
    opacity: 0;
    transition: opacity 0.4s;
    z-index: 0;
}

.trust-card:hover {
    transform: translateY(-10px) scale(1.05);
    border-color: var(--secondary);
}

.trust-card:hover::before {
    opacity: 0.1;
}

.trust-icon {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, var(--secondary), var(--secondary-light));
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    color: var(--primary-dark);
    font-size: 2rem;
    transition: all 0.5s;
    position: relative;
    z-index: 1;
}

.trust-card:hover .trust-icon {
    border-radius: 50%;
    transform: rotate(360deg);
}

.trust-title {
    font-size: 1.4rem;
    color: white;
    margin-bottom: 1rem;
    font-weight: 700;
    position: relative;
    z-index: 1;
}

.trust-description {
    color: rgba(255,255,255,0.8);
    line-height: 1.6;
    position: relative;
    z-index: 1;
}

/* ===== TESTIMONIALS SECTION ===== */
.testimonials-section {
    padding: var(--spacing-3xl) 0;
    background: #f8fafc;
    position: relative;
    overflow: hidden;
}

.testimonials-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 3rem;
}

.testimonial-card {
    background: white;
    border-radius: 30px;
    padding: 2rem;
    box-shadow: var(--shadow-lg);
    transition: all 0.4s;
    position: relative;
}

.testimonial-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-xl);
}

.testimonial-card::before {
    content: '❝';
    position: absolute;
    top: 1rem;
    right: 1.5rem;
    font-size: 5rem;
    color: var(--secondary);
    opacity: 0.2;
    font-family: serif;
    line-height: 1;
}

.testimonial-text {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #475569;
    margin-bottom: 1.5rem;
    position: relative;
    z-index: 1;
}

.testimonial-author {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.author-avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--primary), var(--primary-light));
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5rem;
    font-weight: 600;
}

.author-info h4 {
    font-size: 1.1rem;
    color: var(--primary-dark);
    margin-bottom: 0.2rem;
}

.author-info p {
    font-size: 0.9rem;
    color: #64748b;
}

/* ===== CTA SECTION با دیزاین جدید ===== */
.cta-section {
    padding: var(--spacing-3xl) 0;
    background: linear-gradient(135deg, var(--secondary), var(--secondary-dark));
    position: relative;
    overflow: hidden;
}

.cta-section::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -20%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 60%);
    border-radius: 50%;
    animation: float 10s infinite;
}

.cta-section::after {
    content: '';
    position: absolute;
    bottom: -50%;
    right: -20%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 60%);
    border-radius: 50%;
    animation: floatReverse 12s infinite;
}

.cta-content {
    position: relative;
    z-index: 2;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    color: var(--primary-dark);
}

.cta-title {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 900;
    margin-bottom: 1.5rem;
    line-height: 1.2;
}

.cta-description {
    font-size: 1.2rem;
    margin-bottom: 2.5rem;
    opacity: 0.9;
}

.cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}

.cta-btn {
    padding: 1.2rem 2.5rem;
    border-radius: 60px;
    font-weight: 700;
    font-size: 1.1rem;
    text-decoration: none;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    border: 2px solid transparent;
    position: relative;
    overflow: hidden;
}

.cta-btn.primary {
    background: var(--primary-dark);
    color: white;
    box-shadow: 0 10px 30px rgba(15, 94, 122, 0.3);
}

.cta-btn.primary:hover {
    background: white;
    color: var(--primary-dark);
    border-color: var(--primary-dark);
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
}

.cta-btn.secondary {
    background: white;
    color: var(--primary-dark);
    border-color: var(--primary-dark);
}

.cta-btn.secondary:hover {
    background: var(--primary-dark);
    color: white;
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
}

.cta-btn i {
    transition: transform 0.3s;
}

.cta-btn:hover i {
    transform: translateX(-5px) scale(1.2);
}

/* ===== CONTACT SECTION ===== */
.contact-section {
    padding: var(--spacing-2xl) 0;
    background: white;
}

.contact-grid {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 3rem;
    align-items: start;
}

.contact-info {
    background: linear-gradient(135deg, #f8fafc, white);
    padding: 2.5rem;
    border-radius: 30px;
    box-shadow: var(--shadow-lg);
    border: 1px solid rgba(15,94,122,0.1);
}

.contact-info h3 {
    font-size: 2rem;
    color: var(--primary-dark);
    margin-bottom: 1rem;
    font-weight: 800;
}

.contact-info p {
    color: #64748b;
    margin-bottom: 2rem;
    line-height: 1.8;
}

.contact-details {
    list-style: none;
}

.contact-details li {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(15,94,122,0.1);
}

.contact-details li:last-child {
    border-bottom: none;
}

.contact-details i {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, var(--primary), var(--primary-light));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.2rem;
}

.contact-details span {
    color: #1e293b;
    font-weight: 500;
}

.contact-details small {
    display: block;
    color: #64748b;
    font-size: 0.85rem;
}

.contact-map {
    border-radius: 30px;
    overflow: hidden;
    box-shadow: var(--shadow-lg);
    height: 400px;
}

.contact-map iframe {
    width: 100%;
    height: 100%;
    border: 0;
}

/* ===== RESPONSIVE DESIGN ===== */
@media (max-width: 1200px) {
    .gallery-grid {
        grid-template-columns: repeat(3, 1fr);
    }
    
    .stats-grid,
    .trust-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .testimonials-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .contact-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 992px) {
    .slide-content {
        right: 5%;
        left: 5%;
        width: 90%;
        text-align: center;
    }
    
    .slide-content h2::before {
        right: 50%;
        transform: translateX(50%);
    }
    
    .services-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .gallery-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .gallery-item.large,
    .gallery-item.wide {
        grid-column: auto;
        grid-row: auto;
    }
}

@media (max-width: 768px) {
    .services-grid,
    .gallery-grid,
    .stats-grid,
    .trust-grid,
    .testimonials-grid {
        grid-template-columns: 1fr;
    }
    
    .slider-nav {
        display: none;
    }
    
    .cta-buttons {
        flex-direction: column;
        align-items: center;
    }
    
    .cta-btn {
        width: 100%;
        max-width: 350px;
        justify-content: center;
    }
    
    .contact-grid {
        gap: 2rem;
    }
}

@media (max-width: 480px) {
    .slide-content h2 {
        font-size: 1.8rem;
    }
    
    .slide-content p {
        font-size: 1rem;
    }
    
    .service-card {
        padding: 1.5rem;
    }
    
    .service-title {
        font-size: 1.5rem;
    }
    
    .stat-number {
        font-size: 2.5rem;
    }
}
</style>

<!-- Page Loader -->
<div class="page-loader" id="pageLoader">
    <div class="loader-content">
        <div class="loader-logo">
            <span>ع</span>
        </div>
        <div class="loader-spinner"></div>
    </div>
</div>

<!-- Floating Elements -->
<div class="floating-elements">
    <div class="floating-element floating-element-1">📚</div>
    <div class="floating-element floating-element-2">🖨️</div>
    <div class="floating-element floating-element-3">📸</div>
    <div class="floating-element floating-element-4">✏️</div>
</div>

<!-- ===== HERO SLIDER ===== -->
<section class="hero-section">
    <div class="hero-slider">
        <!-- Slide 1 -->
        <div class="slide active" data-slide="1">
            <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                 alt="کتاب‌فروشی علی اکبری" 
                 class="slide-image" loading="eager">
            <div class="slide-overlay"></div>
            <div class="slide-content animate-fade-up">
                <span class="slide-badge">
                    <i class="bi bi-star-fill"></i>
                    بیش از ۲۰ سال تجربه
                </span>
                <h2>مرکز تخصصی خدمات آموزشی، چاپ و دیجیتال</h2>
                <p>از کتاب‌های درسی تا خدمات کامپیوتری پیشرفته - همه نیازهای آموزشی و اداری شما در فروشگاه علی اکبری با بالاترین کیفیت و مناسب‌ترین قیمت</p>
                <a href="#services" class="hero-cta">
                    <span>مشاهده خدمات</span>
                    <i class="bi bi-arrow-left"></i>
                </a>
            </div>
        </div>

        <!-- Slide 2 -->
        <div class="slide" data-slide="2">
            <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                 alt="بخش کتاب‌فروشی" 
                 class="slide-image" loading="lazy">
            <div class="slide-overlay"></div>
            <div class="slide-content animate-fade-up">
                <span class="slide-badge">
                    <i class="bi bi-book-fill"></i>
                    بیش از ۱۰۰۰۰ عنوان کتاب
                </span>
                <h2>کتاب‌فروشی تخصصی برای همه مقاطع</h2>
                <p>کتاب‌های درسی، دانشگاهی، کانکوری، زبان و مطالعاتی با بهترین کیفیت و تخفیف‌های ویژه برای دانشجویان و دانش‌آموزان</p>
                <a href="books.html" class="hero-cta">
                    <span>مشاهده کتاب‌ها</span>
                    <i class="bi bi-arrow-left"></i>
                </a>
            </div>
        </div>

        <!-- Slide 3 -->
        <div class="slide" data-slide="3">
            <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                 alt="بخش مطبعه" 
                 class="slide-image" loading="lazy">
            <div class="slide-overlay"></div>
            <div class="slide-content animate-fade-up">
                <span class="slide-badge">
                    <i class="bi bi-printer-fill"></i>
                    مدرن‌ترین دستگاه‌های چاپ
                </span>
                <h2>خدمات چاپ و طراحی حرفه‌ای</h2>
                <p>چاپ رنگی و سیاه‌سفید، کپی، اسکن، لمینت، طراحی گرافیک و ترجمه اسناد با سریع‌ترین زمان و بهترین کیفیت</p>
                <a href="print.html" class="hero-cta">
                    <span>خدمات مطبعه</span>
                    <i class="bi bi-arrow-left"></i>
                </a>
            </div>
        </div>

        <!-- Slide 4 -->
        <div class="slide" data-slide="4">
            <img src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                 alt="آموزش دیجیتال" 
                 class="slide-image" loading="lazy">
            <div class="slide-overlay"></div>
            <div class="slide-content animate-fade-up">
                <span class="slide-badge">
                    <i class="bi bi-laptop-fill"></i>
                    آموزش‌های کاربردی
                </span>
                <h2>آموزش‌های دیجیتال برای مهارت‌افزایی</h2>
                <p>دوره‌های آموزشی کامپیوتر، زبان انگلیسی، خیاطی، کارآفرینی و مهارت‌های حرفه‌ای با مدرسان مجرب و گواهی معتبر</p>
                <a href="education.html" class="hero-cta">
                    <span>آموزش دیجیتال</span>
                    <i class="bi bi-arrow-left"></i>
                </a>
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
    </div>
</section>

<!-- ===== SERVICES SECTION ===== -->
<section class="services-section" id="services">
    <div class="container">
        <div class="section-header">
            <span class="section-tag animate-scale">خدمات ما</span>
            <h2 class="section-title animate-fade-up">هر آنچه برای <span>موفقیت</span> نیاز دارید</h2>
            <p class="section-subtitle animate-fade-up delay-1">از کتاب و لوازم تحریر تا خدمات چاپ و آموزش دیجیتال، همه در یک مکان</p>
        </div>

        <div class="services-grid">
            <!-- کتاب‌فروشی -->
            <div class="service-card animate-fade-up delay-1">
                <div class="service-icon-wrapper">
                    <i class="bi bi-book"></i>
                </div>
                <h3 class="service-title">کتاب‌فروشی</h3>
                <p class="service-description">کلیه کتاب‌های درسی، دانشگاهی، کانکوری، زبان و مطالعاتی با تنوع بالا و قیمت مناسب</p>
                <ul class="service-features">
                    <li><i class="bi bi-check-circle-fill"></i> کتاب‌های کمک‌درسی تمام مقاطع</li>
                    <li><i class="bi bi-check-circle-fill"></i> کتاب‌های دانشگاهی و تخصصی</li>
                    <li><i class="bi bi-check-circle-fill"></i> کتاب‌های زبان و رمان</li>
                    <li><i class="bi bi-check-circle-fill"></i> کتاب‌های کنکور و تست</li>
                </ul>
                <a href="books.html" class="service-link">
                    <span>مشاهده کتاب‌ها</span>
                    <i class="bi bi-arrow-left"></i>
                </a>
            </div>

            <!-- مطبعه -->
            <div class="service-card animate-fade-up delay-2">
                <div class="service-icon-wrapper">
                    <i class="bi bi-printer"></i>
                </div>
                <h3 class="service-title">مطبعه</h3>
                <p class="service-description">خدمات چاپ و کپی با پیشرفته‌ترین دستگاه‌ها و بالاترین کیفیت</p>
                <ul class="service-features">
                    <li><i class="bi bi-check-circle-fill"></i> پرینت و کپی رنگی و سیاه‌سفید</li>
                    <li><i class="bi bi-check-circle-fill"></i> اسکن و لمینت</li>
                    <li><i class="bi bi-check-circle-fill"></i> طراحی و چاپ کارت ویزیت</li>
                    <li><i class="bi bi-check-circle-fill"></i> ترجمه اسناد رسمی</li>
                </ul>
                <a href="print.html" class="service-link">
                    <span>خدمات مطبعه</span>
                    <i class="bi bi-arrow-left"></i>
                </a>
            </div>

            <!-- عکاسی -->
            <div class="service-card animate-fade-up delay-3">
                <div class="service-icon-wrapper">
                    <i class="bi bi-camera"></i>
                </div>
                <h3 class="service-title">عکاسی</h3>
                <p class="service-description">عکاسی حرفه‌ای، بازسازی عکس و ادیت تخصصی با نرم‌افزارهای مدرن</p>
                <ul class="service-features">
                    <li><i class="bi bi-check-circle-fill"></i> عکاسی پرسنلی و مدارک</li>
                    <li><i class="bi bi-check-circle-fill"></i> بازسازی عکس‌های قدیمی</li>
                    <li><i class="bi bi-check-circle-fill"></i> ادیت و روتوش حرفه‌ای</li>
                    <li><i class="bi bi-check-circle-fill"></i> چاپ عکس با بهترین کیفیت</li>
                </ul>
                <a href="photography.html" class="service-link">
                    <span>خدمات عکاسی</span>
                    <i class="bi bi-arrow-left"></i>
                </a>
            </div>

            <!-- قرطاسیه‌فروشی -->
            <div class="service-card animate-fade-up delay-1">
                <div class="service-icon-wrapper">
                    <i class="bi bi-pencil"></i>
                </div>
                <h3 class="service-title">قرطاسیه‌فروشی</h3>
                <p class="service-description">انواع لوازم تحریر، اداری و هنری با برندهای معتبر و قیمت مناسب</p>
                <ul class="service-features">
                    <li><i class="bi bi-check-circle-fill"></i> لوازم تحریر دانش‌آموزی و اداری</li>
                    <li><i class="bi bi-check-circle-fill"></i> ابزار نقاشی و هنری</li>
                    <li><i class="bi bi-check-circle-fill"></i> کاغذ و مقوا در ابعاد مختلف</li>
                    <li><i class="bi bi-check-circle-fill"></i> محصولات فانتزی و هدیه</li>
                </ul>
                <a href="stationery.html" class="service-link">
                    <span>محصولات قرطاسیه</span>
                    <i class="bi bi-arrow-left"></i>
                </a>
            </div>

            <!-- آموزش دیجیتال -->
            <div class="service-card animate-fade-up delay-2">
                <div class="service-icon-wrapper">
                    <i class="bi bi-laptop"></i>
                </div>
                <h3 class="service-title">آموزش دیجیتال</h3>
                <p class="service-description">بسته‌های آموزشی کاربردی برای یادگیری مهارت‌های جدید</p>
                <ul class="service-features">
                    <li><i class="bi bi-check-circle-fill"></i> زبان انگلیسی (فلش)</li>
                    <li><i class="bi bi-check-circle-fill"></i> کامپیوتر و برنامه‌نویسی</li>
                    <li><i class="bi bi-check-circle-fill"></i> هوش مصنوعی</li>
                    <li><i class="bi bi-check-circle-fill"></i> کارآفرینی و کسب‌وکار</li>
                </ul>
                <a href="education.html" class="service-link">
                    <span>آموزش دیجیتال</span>
                    <i class="bi bi-arrow-left"></i>
                </a>
            </div>

            <!-- خدمات آنلاین -->
            <div class="service-card animate-fade-up delay-3">
                <div class="service-icon-wrapper">
                    <i class="bi bi-globe"></i>
                </div>
                <h3 class="service-title">خدمات آنلاین</h3>
                <p class="service-description">انجام امور اداری و دولتی به صورت آنلاین با سرعت و دقت</p>
                <ul class="service-features">
                    <li><i class="bi bi-check-circle-fill"></i> ثبت‌نام تذکره و پاسپورت</li>
                    <li><i class="bi bi-check-circle-fill"></i> درخواست بورسیه و ویزا</li>
                    <li><i class="bi bi-check-circle-fill"></i> ثبت شرکت و برند</li>
                    <li><i class="bi bi-check-circle-fill"></i> خدمات مالیاتی و بیمه</li>
                </ul>
                <a href="print.html#online-registration" class="service-link">
                    <span>خدمات آنلاین</span>
                    <i class="bi bi-arrow-left"></i>
                </a>
            </div>
        </div>
    </div>
</section>

<!-- ===== STATS SECTION ===== -->
<section class="stats-section">
    <div class="container">
        <div class="stats-grid">
            <div class="stat-item animate-scale">
                <div class="stat-icon">
                    <i class="bi bi-emoji-smile"></i>
                </div>
                <div class="stat-number" data-target="15000">۰</div>
                <div class="stat-label">مشتریان راضی</div>
            </div>
            <div class="stat-item animate-scale delay-1">
                <div class="stat-icon">
                    <i class="bi bi-book"></i>
                </div>
                <div class="stat-number" data-target="10000">۰</div>
                <div class="stat-label">عنوان کتاب</div>
            </div>
            <div class="stat-item animate-scale delay-2">
                <div class="stat-icon">
                    <i class="bi bi-clock"></i>
                </div>
                <div class="stat-number" data-target="20">۰</div>
                <div class="stat-label">سال تجربه</div>
            </div>
            <div class="stat-item animate-scale delay-3">
                <div class="stat-icon">
                    <i class="bi bi-trophy"></i>
                </div>
                <div class="stat-number" data-target="5000">۰</div>
                <div class="stat-label">پروژه‌های موفق</div>
            </div>
        </div>
    </div>
</section>

<!-- ===== GALLERY SECTION ===== -->
<section class="gallery-section" id="gallery">
    <div class="container">
        <div class="section-header">
            <span class="section-tag animate-scale">گالری تصاویر</span>
            <h2 class="section-title animate-fade-up">فضای <span>دوست‌داشتنی</span> ما</h2>
            <p class="section-subtitle animate-fade-up delay-1">تصاویری از محیط فروشگاه، خدمات و محصولات</p>
        </div>

        <div class="gallery-grid">
            <div class="gallery-item large animate-scale">
                <img src="https://images.unsplash.com/photo-1544716278-e513176f20b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                     alt="بخش کتاب‌فروشی" 
                     class="gallery-image" loading="lazy">
                <div class="gallery-badge">کتاب‌فروشی</div>
                <div class="gallery-overlay">
                    <h4>بخش کتاب‌فروشی</h4>
                    <p>تنوع گسترده کتاب‌های درسی و دانشگاهی</p>
                </div>
            </div>
            
            <div class="gallery-item animate-scale delay-1">
                <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                     alt="خدمات چاپ" 
                     class="gallery-image" loading="lazy">
                <div class="gallery-badge">مطبعه</div>
                <div class="gallery-overlay">
                    <h4>بخش چاپ و کپی</h4>
                    <p>دستگاه‌های پیشرفته چاپ</p>
                </div>
            </div>
            
            <div class="gallery-item animate-scale delay-2">
                <img src="https://images.unsplash.com/photo-1565688534245-05d6b5be184a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                     alt="لوازم تحریر" 
                     class="gallery-image" loading="lazy">
                <div class="gallery-badge">قرطاسیه</div>
                <div class="gallery-overlay">
                    <h4>لوازم تحریر و اداری</h4>
                    <p>محصولات با کیفیت و متنوع</p>
                </div>
            </div>
            
            <div class="gallery-item wide animate-scale delay-3">
                <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                     alt="نمای داخلی فروشگاه" 
                     class="gallery-image" loading="lazy">
                <div class="gallery-badge">فضای داخلی</div>
                <div class="gallery-overlay">
                    <h4>نمای داخلی فروشگاه</h4>
                    <p>محیطی مدرن و خدمات‌محور</p>
                </div>
            </div>
            
            <div class="gallery-item animate-scale">
                <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                     alt="بخش کتاب کودک" 
                     class="gallery-image" loading="lazy">
                <div class="gallery-badge">کتاب کودک</div>
                <div class="gallery-overlay">
                    <h4>بخش کتاب کودک</h4>
                    <p>فضایی شاد برای کودکان</p>
                </div>
            </div>
            
            <div class="gallery-item animate-scale delay-1">
                <img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                     alt="بخش آموزشی" 
                     class="gallery-image" loading="lazy">
                <div class="gallery-badge">آموزش</div>
                <div class="gallery-overlay">
                    <h4>بخش آموزش دیجیتال</h4>
                    <p>دوره‌های کاربردی</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ===== TRUST SECTION ===== -->
<section class="trust-section" id="why-us">
    <div class="container">
        <div class="section-header">
            <span class="section-tag animate-scale">چرا ما؟</span>
            <h2 class="section-title animate-fade-up">چرا <span>علی اکبری</span> را انتخاب کنید؟</h2>
            <p class="section-subtitle animate-fade-up delay-1">مزایای منحصر به فرد فروشگاه ما</p>
        </div>

        <div class="trust-grid">
            <div class="trust-card animate-scale">
                <div class="trust-icon">
                    <i class="bi bi-award"></i>
                </div>
                <h3 class="trust-title">کیفیت تضمینی</h3>
                <p class="trust-description">استفاده از بهترین مواد و دستگاه‌های روز دنیا برای ارائه خدمات با کیفیت</p>
            </div>
            
            <div class="trust-card animate-scale delay-1">
                <div class="trust-icon">
                    <i class="bi bi-lightning-charge"></i>
                </div>
                <h3 class="trust-title">سرعت عمل بالا</h3>
                <p class="trust-description">ارائه خدمات در کوتاه‌ترین زمان ممکن بدون کاهش کیفیت</p>
            </div>
            
            <div class="trust-card animate-scale delay-2">
                <div class="trust-icon">
                    <i class="bi bi-cash-stack"></i>
                </div>
                <h3 class="trust-title">قیمت منصفانه</h3>
                <p class="trust-description">بهترین قیمت‌ها در مقایسه با بازار با حفظ کیفیت عالی</p>
            </div>
            
            <div class="trust-card animate-scale delay-3">
                <div class="trust-icon">
                    <i class="bi bi-person-workspace"></i>
                </div>
                <h3 class="trust-title">تیم مجرب</h3>
                <p class="trust-description">کادر حرفه‌ای با سال‌ها تجربه در زمینه خدمات آموزشی و چاپی</p>
            </div>
        </div>
    </div>
</section>

<!-- ===== TESTIMONIALS SECTION ===== -->
<section class="testimonials-section">
    <div class="container">
        <div class="section-header">
            <span class="section-tag animate-scale">نظرات مشتریان</span>
            <h2 class="section-title animate-fade-up">آنچه <span>مشتریان</span> می‌گویند</h2>
            <p class="section-subtitle animate-fade-up delay-1">صدای رضایت مشتریان ما</p>
        </div>

        <div class="testimonials-grid">
            <div class="testimonial-card animate-fade-up">
                <div class="testimonial-text">
                    بهترین کتاب‌فروشی کابل! تنوع کتاب‌ها عالیه و قیمت‌ها هم منصفانه. کارکنان بسیار خوش‌برخورد و حرفه‌ای هستن.
                </div>
                <div class="testimonial-author">
                    <div class="author-avatar">ا</div>
                    <div class="author-info">
                        <h4>احمد رحیمی</h4>
                        <p>دانشجو</p>
                    </div>
                </div>
            </div>
            
            <div class="testimonial-card animate-fade-up delay-1">
                <div class="testimonial-text">
                    خدمات چاپشون عالیه، همیشه کارامو به موقع تحویل میدن و کیفیت چاپشون بی‌نظیره. از همه مهم‌تر قیمتاشون مناسبه.
                </div>
                <div class="testimonial-author">
                    <div class="author-avatar">ف</div>
                    <div class="author-info">
                        <h4>فاطمه کریمی</h4>
                        <p>مدیر شرکت</p>
                    </div>
                </div>
            </div>
            
            <div class="testimonial-card animate-fade-up delay-2">
                <div class="testimonial-text">
                    بسته‌های آموزشی زبان انگلیسی که گرفتم خیلی عالی بودن. توی سفر هم می‌تونستم درس بخونم. واقعاً ممنون از تیم خوبتون.
                </div>
                <div class="testimonial-author">
                    <div class="author-avatar">ح</div>
                    <div class="author-info">
                        <h4>حسین احمدی</h4>
                        <p>مهندس</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ===== CTA SECTION ===== -->
<section class="cta-section" id="cta">
    <div class="container">
        <div class="cta-content">
            <h2 class="cta-title animate-fade-up">آماده ارائه خدمات به شما هستیم</h2>
            <p class="cta-description animate-fade-up delay-1">برای سفارش، مشاوره یا بازدید از فروشگاه، با ما در تماس باشید. ما بهترین خدمات را با کیفیت عالی و قیمت مناسب ارائه می‌دهیم.</p>
            
            <div class="cta-buttons">
                <a href="tel:+93781821838" class="cta-btn primary animate-scale delay-2">
                    <i class="bi bi-telephone"></i>
                    تماس تلفنی: ۰۷۸۱۸۲۱۸۳۸
                </a>
                
                <a href="#contact" class="cta-btn secondary animate-scale delay-3">
                    <i class="bi bi-geo-alt"></i>
                    آدرس فروشگاه
                </a>
            </div>
        </div>
    </div>
</section>

<!-- ===== CONTACT SECTION ===== -->
<section class="contact-section" id="contact">
    <div class="container">
        <div class="contact-grid">
            <div class="contact-info animate-fade-right">
                <h3>اطلاعات تماس</h3>
                <p>ما همیشه آماده پاسخگویی به سوالات شما هستیم. از راه‌های زیر می‌توانید با ما در ارتباط باشید.</p>
                
                <ul class="contact-details">
                    <li>
                        <i class="bi bi-geo-alt"></i>
                        <div>
                            <span>آدرس فروشگاه</span>
                            <small>کابل، ناحیه ۶، شهرک ۱۲ امام، چهارراه اول، پلاک ۲۳</small>
                        </div>
                    </li>
                    <li>
                        <i class="bi bi-telephone"></i>
                        <div>
                            <span>تلفن تماس</span>
                            <small>۰۷۸۱۸۲۱۸۳۸</small>
                        </div>
                    </li>
                    <li>
                        <i class="bi bi-whatsapp"></i>
                        <div>
                            <span>واتس‌اپ</span>
                            <small>۰۷۸۱۸۲۱۸۳۸</small>
                        </div>
                    </li>
                    <li>
                        <i class="bi bi-envelope"></i>
                        <div>
                            <span>ایمیل</span>
                            <small>info@aliakbari.af</small>
                        </div>
                    </li>
                    <li>
                        <i class="bi bi-clock"></i>
                        <div>
                            <span>ساعات کاری</span>
                            <small>شنبه تا پنج‌شنبه: ۸ صبح تا ۸ شب<br>جمعه‌ها: تعطیل</small>
                        </div>
                    </li>
                </ul>
            </div>
            
            <div class="contact-map animate-fade-left">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373531590444!3d-37.81627974202167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b3f3f3f%3A0x5045675218ce7e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s" 
                        allowfullscreen="" 
                        loading="lazy"
                        title="موقعیت فروشگاه"></iframe>
            </div>
        </div>
    </div>
</section>

<!-- ===== JavaScript ===== -->
<script>
// Page Loader
window.addEventListener('load', function() {
    const loader = document.getElementById('pageLoader');
    loader.classList.add('fade-out');
    setTimeout(() => {
        loader.style.display = 'none';
    }, 500);
});

// Hero Slider
class HeroSlider {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.dots = document.querySelectorAll('.slider-dot');
        this.prevBtn = document.querySelector('.prev-slide');
        this.nextBtn = document.querySelector('.next-slide');
        this.currentSlide = 0;
        this.slideInterval = null;
        this.autoPlayInterval = 5000;
        
        this.init();
    }
    
    init() {
        this.showSlide(this.currentSlide);
        
        // Dot click handlers
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.showSlide(index);
                this.resetAutoPlay();
            });
        });
        
        // Navigation buttons
        this.prevBtn.addEventListener('click', () => {
            this.showSlide(this.currentSlide - 1);
            this.resetAutoPlay();
        });
        
        this.nextBtn.addEventListener('click', () => {
            this.showSlide(this.currentSlide + 1);
            this.resetAutoPlay();
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.showSlide(this.currentSlide + 1);
                this.resetAutoPlay();
            } else if (e.key === 'ArrowRight') {
                this.showSlide(this.currentSlide - 1);
                this.resetAutoPlay();
            }
        });
        
        // Start auto play
        this.startAutoPlay();
        
        // Pause on hover
        const slider = document.querySelector('.hero-slider');
        slider.addEventListener('mouseenter', () => this.stopAutoPlay());
        slider.addEventListener('mouseleave', () => this.startAutoPlay());
    }
    
    showSlide(index) {
        // Handle wrap around
        if (index < 0) index = this.slides.length - 1;
        if (index >= this.slides.length) index = 0;
        
        // Update slides
        this.slides.forEach(slide => slide.classList.remove('active'));
        this.slides[index].classList.add('active');
        
        // Update dots
        this.dots.forEach(dot => dot.classList.remove('active'));
        this.dots[index].classList.add('active');
        
        this.currentSlide = index;
    }
    
    startAutoPlay() {
        this.stopAutoPlay();
        this.slideInterval = setInterval(() => {
            this.showSlide(this.currentSlide + 1);
        }, this.autoPlayInterval);
    }
    
    stopAutoPlay() {
        if (this.slideInterval) {
            clearInterval(this.slideInterval);
            this.slideInterval = null;
        }
    }
    
    resetAutoPlay() {
        this.stopAutoPlay();
        this.startAutoPlay();
    }
}

// Initialize slider
document.addEventListener('DOMContentLoaded', () => {
    new HeroSlider();
});

// Counter Animation
function animateNumbers() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const updateCounter = () => {
            const current = parseInt(counter.innerText.replace(/[^0-9]/g, '')) || 0;
            const increment = target / 50; // Smooth animation
            
            if (current < target) {
                counter.innerText = Math.min(current + increment, target).toFixed(0);
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target.toLocaleString();
            }
        };
        
        // Check if element is in viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(counter);
    });
}

// Initialize counters when DOM is loaded
document.addEventListener('DOMContentLoaded', animateNumbers);

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .trust-card, .testimonial-card, .stat-item').forEach(el => {
    observer.observe(el);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Touch device optimizations
if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
}

// Reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (prefersReducedMotion.matches) {
    document.body.classList.add('reduced-motion');
}
</script>