---
layout: page
title: "تماس با ما | فروشگاه علی اکبری"
description: "اطلاعات تماس، آدرس و ساعات کاری فروشگاه علی اکبری در کابل"
permalink: /contact/
---

<style>
.contact-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

.contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin: 3rem 0;
}

.contact-card {
    background: white;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: var(--shadow-lg);
    text-align: center;
}

.contact-icon {
    font-size: 3rem;
    color: var(--primary);
    margin-bottom: 1.5rem;
}

.map-container {
    margin: 3rem 0;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: var(--shadow-lg);
}

.info-box {
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    color: white;
    padding: 2rem;
    border-radius: 1rem;
    margin: 2rem 0;
}

.whatsapp-btn {
    background: #25D366;
    color: white;
    padding: 1rem 2rem;
    border-radius: 50px;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 600;
    margin-top: 1rem;
}
</style>

<div class="contact-container">
    <h1 style="text-align: center; color: var(--primary-dark); margin-bottom: 0.5rem;">
        تماس با فروشگاه علی اکبری
    </h1>
    <p style="text-align: center; font-size: 1.2rem; color: var(--gray); max-width: 800px; margin: 0 auto 3rem;">
        برای دریافت اطلاعات، قیمت خدمات، سفارش و هرگونه سوال با ما در تماس باشید
    </p>
    
    <div class="contact-grid">
        <div class="contact-card">
            <div class="contact-icon">
                <i class="fas fa-phone"></i>
            </div>
            <h3>تماس تلفنی</h3>
            <p style="font-size: 1.5rem; font-weight: bold; color: var(--primary-dark); margin: 1rem 0;">
                {{ site.phone_primary | default: '۰۷۸۱۸۲۱۸۳۸' }}
            </p>
            <p style="color: var(--gray);">
                {{ site.phone_secondary | default: '۰۷۷۴۵۳۰۳۷۲' }}
            </p>
            <a href="tel:{{ site.phone_primary }}" class="whatsapp-btn">
                <i class="fas fa-phone"></i>
                تماس بگیرید
            </a>
        </div>
        
        <div class="contact-card">
            <div class="contact-icon">
                <i class="fas fa-map-marker-alt"></i>
            </div>
            <h3>آدرس فروشگاه</h3>
            <p style="margin: 1rem 0; line-height: 1.6;">
                {{ site.address | default: 'کابل، ناحیه ۶، شهرک ۱۲ امام' }}
            </p>
            <p style="color: var(--gray); font-size: 0.9rem;">
                مقابل مسجد جامع شهرک ۱۲ امام
            </p>
        </div>
        
        <div class="contact-card">
            <div class="contact-icon">
                <i class="fas fa-clock"></i>
            </div>
            <h3>ساعات کاری</h3>
            <div style="text-align: right; margin: 1rem 0;">
                <p style="margin: 0.5rem 0;">
                    <strong>شنبه تا پنجشنبه:</strong><br>
                    {{ site.work_hours_weekdays | default: '۸ صبح تا ۸ شب' }}
                </p>
                <p style="margin: 0.5rem 0;">
                    <strong>جمعه:</strong><br>
                    {{ site.work_hours_friday | default: '۹ صبح تا ۲ بعدازظهر' }}
                </p>
            </div>
        </div>
    </div>
    
    <div class="info-box">
        <h2 style="color: white; text-align: center;">ارتباط سریع از طریق واتساپ</h2>
        <p style="text-align: center; margin: 1rem 0 2rem;">
            برای ارسال فایل، دریافت قیمت فوری و مشاوره
        </p>
        <div style="text-align: center;">
            <a href="https://wa.me/93781821838" class="whatsapp-btn" target="_blank" style="font-size: 1.1rem; padding: 1.2rem 3rem;">
                <i class="fab fa-whatsapp"></i>
                شروع گفتگو در واتساپ
            </a>
        </div>
    </div>
    
    <div class="map-container">
        <!-- Google Maps Embed -->
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.123456789012!2d69.123456!3d34.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDA3JzI0LjQiTiA2OcKwMDcnMjQuNCJF!5e0!3m2!1sen!2saf!4v1234567890123!5m2!1sen!2saf" 
            width="100%" 
            height="400" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
    </div>
    
    <div style="background: #f8fafc; padding: 2rem; border-radius: 1rem; margin-top: 3rem;">
        <h3>راه‌های ارتباطی دیگر</h3>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1rem;">
            <a href="mailto:{{ site.email }}" style="display: inline-flex; align-items: center; gap: 0.5rem; color: var(--primary); text-decoration: none;">
                <i class="fas fa-envelope"></i>
                {{ site.email | default: 'tarjman.online@gmail.com' }}
            </a>
            
            <a href="{{ site.social.facebook }}" style="display: inline-flex; align-items: center; gap: 0.5rem; color: #1877F2; text-decoration: none;">
                <i class="fab fa-facebook"></i>
                فیسبوک
            </a>
            
            <a href="{{ site.social.instagram }}" style="display: inline-flex; align-items: center; gap: 0.5rem; color: #E4405F; text-decoration: none;">
                <i class="fab fa-instagram"></i>
                اینستاگرام
            </a>
            
            <a href="{{ site.social.telegram }}" style="display: inline-flex; align-items: center; gap: 0.5rem; color: #0088cc; text-decoration: none;">
                <i class="fab fa-telegram"></i>
                تلگرام
            </a>
        </div>
    </div>
</div>