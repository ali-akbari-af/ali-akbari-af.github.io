---
layout: page
title: "ثبت‌نام خدمات آنلاین"
description: "ثبت‌نام تذکره، پاسپورت، بورسیه و سایر خدمات آنلاین با دقت کامل و تضمین صحت اطلاعات - فروشگاه علی اکبری کابل"
keywords: "ثبت‌نام آنلاین, تذکره, پاسپورت, بورسیه, خدمات اداری, ثبت‌نام اینترنتی, کابل, علی اکبری"
breadcrumb:
  - title: "مطبعه"
    link: "/print"
---

<style>
/* ===== CSS Variables با رنگ‌های شادتر ===== */
:root {
    --primary: #3b82f6;
    --primary-dark: #1d4ed8;
    --primary-light: #93c5fd;
    --secondary: #22c55e;
    --accent: #f59e0b;
    --accent-light: #fbbf24;
    --purple: #8b5cf6;
    --dark: #1e293b;
    --dark-light: #334155;
    --light: #f8fafc;
    --gray: #64748b;
    --gray-light: #e2e8f0;
    --gray-lighter: #f1f5f9;
    --success: #22c55e;
    --warning: #f59e0b;
    --danger: #ef4444;
    
    /* Shadows */
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    --shadow-hover: 0 20px 50px rgba(59, 130, 246, 0.2);
    
    /* Transitions */
    --transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1);
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
}

.page-hero::before {
    content: '';
    position: absolute;
    top: -50px;
    right: -50px;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%);
    z-index: -1;
}

.page-title {
    font-size: 3.2rem;
    color: var(--primary-dark);
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
    background: linear-gradient(90deg, var(--primary), var(--secondary), var(--accent));
    border-radius: 3px;
}

.service-badge {
    display: inline-block;
    background: linear-gradient(135deg, var(--primary), var(--secondary), var(--accent-light));
    color: white;
    padding: 0.8rem 2rem;
    border-radius: 50px;
    font-size: 1.8rem;
    font-weight: 800;
    margin: 1rem 0 2rem;
    box-shadow: 0 10px 25px rgba(59, 130, 246, 0.4);
    border: 3px solid white;
    position: relative;
    overflow: hidden;
}

.service-badge::after {
    content: '';
    position: absolute;
    top: -10px;
    right: -10px;
    bottom: -10px;
    left: -10px;
    background: linear-gradient(45deg, 
        transparent 25%, 
        rgba(255, 255, 255, 0.3) 50%, 
        transparent 75%);
    background-size: 200% 200%;
    animation: shine 3s infinite linear;
}

@keyframes shine {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
}

.page-description {
    font-size: 1.3rem;
    color: var(--dark);
    line-height: 2;
    max-width: 1000px;
    margin: 3rem auto 0;
    padding: 3rem;
    background: white;
    border-radius: 20px;
    box-shadow: var(--shadow-lg);
    border: 2px solid rgba(59, 130, 246, 0.15);
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
    background: linear-gradient(90deg, var(--primary), var(--secondary), var(--accent));
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
    background: rgba(59, 130, 246, 0.25);
    z-index: -1;
    border-radius: 2px;
}

/* بخش خدمات */
.services-section {
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
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    border-radius: 2px;
}

.section-title p {
    color: var(--gray);
    font-size: 1.2rem;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.8;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2.5rem;
    margin-top: 3rem;
}

.service-card {
    background: white;
    padding: 2.5rem;
    border-radius: 20px;
    box-shadow: var(--shadow-lg);
    text-align: center;
    transition: var(--transition-base);
    border: 2px solid transparent;
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
    background: linear-gradient(90deg, var(--primary), var(--secondary), var(--accent));
    transform: translateX(-100%);
    transition: transform 0.6s ease;
}

.service-card:hover::before {
    transform: translateX(0);
}

.service-card:hover {
    transform: translateY(-15px);
    box-shadow: var(--shadow-hover);
    border-color: var(--primary-light);
}

.service-icon {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, var(--primary), var(--secondary), var(--accent));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.8rem;
    color: white;
    font-size: 2rem;
    box-shadow: 0 10px 25px rgba(59, 130, 246, 0.4);
    transition: var(--transition-base);
}

.service-card:hover .service-icon {
    transform: scale(1.15) rotate(10deg);
    background: linear-gradient(135deg, var(--secondary), var(--accent), var(--purple));
}

.service-title {
    font-size: 1.6rem;
    color: var(--primary-dark);
    margin-bottom: 1.2rem;
    font-weight: 800;
}

.service-description {
    color: var(--gray);
    line-height: 1.7;
    font-size: 1.05rem;
}

/* بخش اهمیت دقت */
.importance-section {
    background: linear-gradient(135deg, 
        rgba(245, 158, 11, 0.1), 
        rgba(239, 68, 68, 0.08),
        rgba(251, 191, 36, 0.12));
    padding: 5rem;
    border-radius: 25px;
    margin: 6rem 0;
    position: relative;
    overflow: hidden;
    border: 2px solid rgba(245, 158, 11, 0.2);
}

.importance-section::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23f59e0b' fill-opacity='0.08' fill-rule='evenodd'/%3E%3C/svg%3E");
}

.importance-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2.5rem;
    position: relative;
    z-index: 1;
}

.importance-card {
    background: white;
    padding: 2.5rem;
    border-radius: 20px;
    box-shadow: var(--shadow-lg);
    text-align: center;
    transition: var(--transition-base);
    border: 2px solid transparent;
    position: relative;
    overflow: hidden;
}

.importance-card:hover {
    transform: translateY(-15px);
    box-shadow: 0 25px 50px rgba(245, 158, 11, 0.25);
    border-color: var(--accent);
}

.importance-icon {
    width: 70px;
    height: 70px;
    background: linear-gradient(135deg, var(--warning), var(--danger));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    color: white;
    font-size: 1.8rem;
    box-shadow: 0 10px 20px rgba(245, 158, 11, 0.4);
    transition: var(--transition-base);
}

.importance-card:hover .importance-icon {
    transform: scale(1.15) rotate(-10deg);
    background: linear-gradient(135deg, var(--danger), var(--accent));
}

.importance-title {
    font-size: 1.4rem;
    color: var(--dark);
    margin-bottom: 1rem;
    font-weight: 700;
}

.importance-description {
    color: var(--gray);
    line-height: 1.6;
}

/* بخش مراحل کار */
.process-section {
    margin: 6rem 0;
}

.process-steps {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-top: 3rem;
    position: relative;
}

.process-steps::before {
    content: '';
    position: absolute;
    top: 0;
    right: 50%;
    transform: translateX(50%);
    width: 4px;
    height: 100%;
    background: linear-gradient(to bottom, var(--primary), var(--secondary), var(--accent));
    z-index: 0;
}

.process-step {
    display: flex;
    align-items: center;
    gap: 2rem;
    background: white;
    padding: 2.5rem;
    border-radius: 20px;
    box-shadow: var(--shadow-lg);
    position: relative;
    z-index: 1;
    transition: var(--transition-base);
    border: 2px solid transparent;
}

.process-step:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-hover);
    border-color: var(--primary-light);
}

.step-number {
    width: 70px;
    height: 70px;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.8rem;
    font-weight: 700;
    flex-shrink: 0;
    box-shadow: 0 10px 20px rgba(59, 130, 246, 0.4);
    transition: var(--transition-base);
}

.process-step:hover .step-number {
    transform: scale(1.15);
    background: linear-gradient(135deg, var(--secondary), var(--accent));
}

.step-content {
    flex: 1;
}

.step-title {
    font-size: 1.6rem;
    color: var(--primary-dark);
    margin-bottom: 1rem;
    font-weight: 800;
}

.step-description {
    color: var(--gray);
    line-height: 1.7;
    font-size: 1.05rem;
}

/* بخش مزایا */
.benefits-section {
    background: linear-gradient(135deg, 
        rgba(59, 130, 246, 0.1), 
        rgba(34, 197, 94, 0.08),
        rgba(139, 92, 246, 0.12));
    padding: 5rem;
    border-radius: 25px;
    margin: 6rem 0;
    position: relative;
    overflow: hidden;
    border: 2px solid rgba(59, 130, 246, 0.2);
}

.benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2.5rem;
    position: relative;
    z-index: 1;
}

.benefit-card {
    background: white;
    padding: 2.5rem;
    border-radius: 20px;
    box-shadow: var(--shadow-lg);
    text-align: center;
    transition: var(--transition-base);
    border: 2px solid transparent;
    position: relative;
    overflow: hidden;
}

.benefit-card:hover {
    transform: translateY(-15px);
    box-shadow: 0 25px 50px rgba(34, 197, 94, 0.25);
    border-color: var(--success);
}

.benefit-icon {
    width: 70px;
    height: 70px;
    background: linear-gradient(135deg, var(--success), var(--primary));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    color: white;
    font-size: 1.8rem;
    box-shadow: 0 10px 20px rgba(34, 197, 94, 0.4);
    transition: var(--transition-base);
}

.benefit-card:hover .benefit-icon {
    transform: scale(1.15) rotate(10deg);
    background: linear-gradient(135deg, var(--primary), var(--purple));
}

.benefit-title {
    font-size: 1.4rem;
    color: var(--dark);
    margin-bottom: 1rem;
    font-weight: 700;
}

.benefit-description {
    color: var(--gray);
    line-height: 1.6;
}

/* بخش اطلاعات تماس */
.contact-info-section {
    background: white;
    padding: 5rem;
    border-radius: 25px;
    box-shadow: var(--shadow-lg);
    margin: 6rem 0;
    position: relative;
    overflow: hidden;
    border: 2px solid rgba(59, 130, 246, 0.2);
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
    background: linear-gradient(135deg, 
        rgba(59, 130, 246, 0.08), 
        rgba(34, 197, 94, 0.05));
    border-radius: 20px;
    transition: var(--transition-base);
    border: 2px solid transparent;
    position: relative;
    overflow: hidden;
}

.method-card:hover {
    transform: translateY(-15px);
    border-color: var(--primary);
    box-shadow: var(--shadow-hover);
}

.method-icon {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    color: var(--primary);
    transition: var(--transition-base);
}

.method-card:hover .method-icon {
    transform: scale(1.2);
    color: var(--secondary);
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
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    color: white;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 600;
    transition: var(--transition-base);
    border: 2px solid transparent;
    position: relative;
    overflow: hidden;
}

.method-btn:hover {
    background: white;
    color: var(--primary);
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 15px 30px rgba(59, 130, 246, 0.3);
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
    background: linear-gradient(135deg, var(--primary), var(--secondary), var(--accent));
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
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
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
    transition: var(--transition-base);
    border: none;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    z-index: 1;
}

.btn::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.15);
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
    
    .importance-section,
    .benefits-section,
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
    
    .services-grid,
    .importance-grid,
    .benefits-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .contact-methods {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .service-card,
    .importance-card,
    .benefit-card {
        padding: 2rem;
    }
    
    .process-steps::before {
        right: 30px;
        transform: none;
    }
    
    .process-step {
        flex-direction: column;
        text-align: center;
        gap: 1.5rem;
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
    
    .service-card,
    .importance-card,
    .benefit-card,
    .process-step {
        padding: 1.5rem;
    }
    
    .service-title,
    .step-title {
        font-size: 1.4rem;
    }
    
    .importance-section,
    .benefits-section,
    .contact-info-section,
    .contact-section {
        padding: 2rem 1.5rem;
    }
    
    .importance-section h2,
    .benefits-section h2,
    .contact-title {
        font-size: 1.8rem;
    }
    
    .process-steps::before {
        display: none;
    }
}
</style>

<!-- بخش هیرو -->
<section class="page-hero">
    <h1 class="page-title">ثبت‌نام خدمات آنلاین</h1>
    <div class="service-badge">دقت و تضمین صحت اطلاعات</div>
    <div class="page-description">
        <p>
            <strong>ثبت‌نام تذکره، پاسپورت، بورسیه و سایر خدمات آنلاین</strong> با دقت کامل انجام می‌شود. به دلیل مشکلات معمول مانند اشتباه در نوشتن اسم، پیشوند و پسوند اسم، تخلص، تاریخ تولد یا جزئیات دیگر، رعایت صحت و دقت در هر مرحله اهمیت ویژه دارد تا مردم در آینده دچار سردرگمی یا مشکلات قانونی نشوند. استفاده از ابزار و روش‌های تخصصی، صحت اطلاعات را تضمین کرده و روندی مطمئن، راحت و با کیفیت بالا برای دسترسی به خدمات اداری و آنلاین فراهم می‌آورد.
        </p>
        <p style="margin-top: 2rem; font-style: italic; color: var(--primary-dark);">
            ما با تیمی متخصص و آشنا به قوانین و مقررات، آماده ارائه خدمات ثبت‌نام آنلاین با بالاترین کیفیت هستیم.
        </p>
    </div>
</section>

<!-- بخش خدمات -->
<section class="services-section">
    <div class="section-title">
        <h2>خدمات ثبت‌نام آنلاین ما</h2>
        <p>انواع خدمات ثبت‌نام آنلاین با دقت و تضمین کیفیت</p>
    </div>
    
    <div class="services-grid">
        <div class="service-card">
            <div class="service-icon">
                <i class="fas fa-id-card"></i>
            </div>
            <h3 class="service-title">ثبت‌نام تذکره</h3>
            <p class="service-description">ثبت‌نام و تمدید تذکره با دقت کامل و جلوگیری از هرگونه اشتباه در جزئیات شخصی</p>
        </div>
        
        <div class="service-card">
            <div class="service-icon">
                <i class="fas fa-passport"></i>
            </div>
            <h3 class="service-title">ثبت‌نام پاسپورت</h3>
            <p class="service-description">ثبت‌نام و دریافت پاسپورت با رعایت تمامی استانداردها و پروتکل‌های لازم</p>
        </div>
        
        <div class="service-card">
            <div class="service-icon">
                <i class="fas fa-graduation-cap"></i>
            </div>
            <h3 class="service-title">ثبت‌نام بورسیه</h3>
            <p class="service-description">ثبت‌نام برای بورسیه‌های تحصیلی داخلی و خارجی با تکمیل دقیق فرم‌ها</p>
        </div>
        
        <div class="service-card">
            <div class="service-icon">
                <i class="fas fa-file-contract"></i>
            </div>
            <h3 class="service-title">ثبت‌نام خدمات دولتی</h3>
            <p class="service-description">ثبت‌نام برای انواع خدمات دولتی و اداری با تضمین صحت اطلاعات</p>
        </div>
        
        <div class="service-card">
            <div class="service-icon">
                <i class="fas fa-university"></i>
            </div>
            <h3 class="service-title">ثبت‌نام دانشگاه</h3>
            <p class="service-description">ثبت‌نام برای دانشگاه‌ها و مؤسسات آموزش عالی با دقت در جزئیات</p>
        </div>
        
        <div class="service-card">
            <div class="service-icon">
                <i class="fas fa-handshake"></i>
            </div>
            <h3 class="service-title">خدمات ویژه</h3>
            <p class="service-description">ثبت‌نام برای سایر خدمات آنلاین و اداری با مشاوره تخصصی</p>
        </div>
    </div>
</section>

<!-- بخش اهمیت دقت -->
<section class="importance-section">
    <div class="section-title">
        <h2>چرا دقت در ثبت‌نام اهمیت دارد؟</h2>
        <p>پیشگیری از مشکلات رایج در ثبت اطلاعات شخصی</p>
    </div>
    
    <div class="importance-grid">
        <div class="importance-card">
            <div class="importance-icon">
                <i class="fas fa-exclamation-triangle"></i>
            </div>
            <h3 class="importance-title">اشتباهات رایج</h3>
            <p class="importance-description">اشتباه در نوشتن اسم، پیشوند، پسوند، تخلص و تاریخ تولد از مشکلات معمول هستند</p>
        </div>
        
        <div class="importance-card">
            <div class="importance-icon">
                <i class="fas fa-balance-scale"></i>
            </div>
            <h3 class="importance-title">مشکلات قانونی</h3>
            <p class="importance-description">اشتباهات کوچک می‌توانند منجر به مشکلات قانونی و سردرگمی در آینده شوند</p>
        </div>
        
        <div class="importance-card">
            <div class="importance-icon">
                <i class="fas fa-user-check"></i>
            </div>
            <h3 class="importance-title">تأیید هویت</h3>
            <p class="importance-description">اطلاعات نادرست می‌تواند فرآیند تأیید هویت را با مشکل مواجه کند</p>
        </div>
        
        <div class="importance-card">
            <div class="importance-icon">
                <i class="fas fa-clock"></i>
            </div>
            <h3 class="importance-title">صرفه‌جویی در زمان</h3>
            <p class="importance-description">ثبت دقیق اطلاعات از تکرار فرآیندها و اتلاف وقت جلوگیری می‌کند</p>
        </div>
    </div>
</section>

<!-- بخش مراحل کار -->
<section class="process-section">
    <div class="section-title">
        <h2>مراحل ثبت‌نام با ما</h2>
        <p>روند ساده و مطمئن از شروع تا پایان کار</p>
    </div>
    
    <div class="process-steps">
        <div class="process-step">
            <div class="step-number">۱</div>
            <div class="step-content">
                <h3 class="step-title">مشاوره اولیه</h3>
                <p class="step-description">دریافت مشاوره تخصصی درباره نوع خدمات مورد نیاز و مدارک لازم</p>
            </div>
        </div>
        
        <div class="process-step">
            <div class="step-number">۲</div>
            <div class="step-content">
                <h3 class="step-title">ارائه مدارک</h3>
                <p class="step-description">ارائه مدارک لازم با بررسی کامل صحت و اعتبار آنها</p>
            </div>
        </div>
        
        <div class="process-step">
            <div class="step-number">۳</div>
            <div class="step-content">
                <h3 class="step-title">تکمیل فرم‌ها</h3>
                <p class="step-description">تکمیل دقیق فرم‌های ثبت‌نام با دقت در تمام جزئیات</p>
            </div>
        </div>
        
        <div class="process-step">
            <div class="step-number">۴</div>
            <div class="step-content">
                <h3 class="step-title">بررسی نهایی</h3>
                <p class="step-description">بررسی نهایی اطلاعات توسط کارشناسان قبل از ارسال</p>
            </div>
        </div>
        
        <div class="process-step">
            <div class="step-number">۵</div>
            <div class="step-content">
                <h3 class="step-title">ارسال و پیگیری</h3>
                <p class="step-description">ارسال درخواست و پیگیری مراحل تا دریافت نتیجه نهایی</p>
            </div>
        </div>
    </div>
</section>

<!-- بخش مزایا -->
<section class="benefits-section">
    <div class="section-title">
        <h2>مزایای استفاده از خدمات ما</h2>
        <p>چرا ثبت‌نام با ما بهترین انتخاب است؟</p>
    </div>
    
    <div class="benefits-grid">
        <div class="benefit-card">
            <div class="benefit-icon">
                <i class="fas fa-check-double"></i>
            </div>
            <h3 class="benefit-title">دقت و صحت</h3>
            <p class="benefit-description">تضمین صحت اطلاعات با بررسی چندمرحله‌ای و استفاده از ابزار تخصصی</p>
        </div>
        
        <div class="benefit-card">
            <div class="benefit-icon">
                <i class="fas fa-shield-alt"></i>
            </div>
            <h3 class="benefit-title">امنیت اطلاعات</h3>
            <p class="benefit-description">حفظ امنیت و محرمانگی اطلاعات شخصی شما در تمام مراحل</p>
        </div>
        
        <div class="benefit-card">
            <div class="benefit-icon">
                <i class="fas fa-headset"></i>
            </div>
            <h3 class="benefit-title">مشاوره تخصصی</h3>
            <p class="benefit-description">مشاوره توسط کارشناسان مجرب با سال‌ها تجربه در زمینه ثبت‌نام</p>
        </div>
        
        <div class="benefit-card">
            <div class="benefit-icon">
                <i class="fas fa-bolt"></i>
            </div>
            <h3 class="benefit-title">سرعت عمل</h3>
            <p class="benefit-description">انجام سریع فرآیندها با حفظ کیفیت و دقت در کار</p>
        </div>
    </div>
</section>

<!-- بخش اطلاعات تماس -->
<section class="contact-info-section">
    <div class="section-title">
        <h2>شروع ثبت‌نام آنلاین</h2>
        <p>برای شروع فرآیند ثبت‌نام، یکی از روش‌های زیر را انتخاب کنید</p>
    </div>
    
    <div class="contact-methods">
        <div class="method-card">
            <div class="method-icon">📞</div>
            <h3 class="method-title">تماس تلفنی</h3>
            <p class="method-description">با ما تماس بگیرید و مشاوره اولیه رایگان دریافت کنید. مدارک لازم را بررسی نمایید.</p>
            <a href="tel:+93781821838" class="method-btn">
                تماس: ۰۷۸۱۸۲۱۸۳۸
            </a>
        </div>
        
        <div class="method-card">
            <div class="method-icon">🏪</div>
            <h3 class="method-title">مراجعه حضوری</h3>
            <p class="method-description">به فروشگاه ما مراجعه کنید. مدارک خود را همراه داشته باشید و ثبت‌نام را شروع کنید.</p>
            <a href="#footer" class="method-btn">
                آدرس فروشگاه
            </a>
        </div>
        
        <div class="method-card">
            <div class="method-icon">📱</div>
            <h3 class="method-title">مشاوره در واتس‌اپ</h3>
            <p class="method-description">برای دریافت مشاوره و راهنمایی بیشتر در واتس‌اپ با ما در ارتباط باشید.</p>
            <a href="https://wa.me/93781821838?text=سلام%20می‌خواستم%20درباره%20ثبت‌نام%20آنلاین%20مشاوره%20بگیرم" class="method-btn whatsapp-btn" target="_blank">
                <i class="fab fa-whatsapp"></i>
                ارتباط در واتس‌اپ
            </a>
        </div>
    </div>
</section>

<!-- بخش تماس -->
<section class="contact-section">
    <h2 class="contact-title">برای مشاوره و شروع ثبت‌نام</h2>
    <p class="contact-description">
        با ما تماس بگیرید یا به فروشگاه ما مراجعه کنید
        <br>
        خدمات ثبت‌نام آنلاین با دقت و تضمین کیفیت
    </p>
    
    <div class="contact-buttons">
        <a href="tel:+93781821838" class="btn btn-primary">
            <i class="fas fa-phone"></i>
            تماس تلفنی
        </a>
        
        <a href="#footer" class="btn btn-secondary">
            <i class="fas fa-map-marker-alt"></i>
            آدرس فروشگاه
        </a>
        
        <a href="https://wa.me/93781821838" class="btn btn-secondary" target="_blank">
            <i class="fab fa-whatsapp"></i>
            ارتباط در واتس‌اپ
        </a>
    </div>
    
    <p style="margin-top: 2rem; opacity: 0.95; font-size: 1.1rem; position: relative; z-index: 1; color: var(--myself)">
        📍 کابل، ناحیه ۶، شهرک ۱۲ امام | 🕗 ۸ صبح تا ۸ شب
    </p>
</section>
