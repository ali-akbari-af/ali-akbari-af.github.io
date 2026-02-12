---
layout: page
title: "کتاب‌های کانکوری | فروشگاه علی اکبری - کابل"
description: "کتاب‌های کانکوری با قیمت استثنایی ۳۰ افغانی - منابع جامع و نازل در فروشگاه علی اکبری کابل"
keywords: "کتاب کانکوری, منابع کنکور, آمادگی کنکور, فرم‌های کانکور, قیمت استثنایی, کابل, علی اکبری"
breadcrumb:
  - title: "کتاب‌فروشی"
    link: "/books/index.hftml"
---

<style>
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
    background: radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%);
    z-index: -1;
}

.page-title {
    font-size: 3.2rem;
    color: #0b8f89;
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
    background: linear-gradient(90deg, #0ea5a4, #6366f1);
    border-radius: 3px;
}

.page-description {
    font-size: 1.3rem;
    color: #0f1724;
    line-height: 2;
    max-width: 1000px;
    margin: 3rem auto 0;
    padding: 3rem;
    background: white;
    border-radius: 18px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    border: 2px solid rgba(139, 92, 246, 0.1);
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
    background: linear-gradient(90deg, #0ea5a4, #6366f1);
}

.page-description strong {
    color: #0ea5a4;
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
    background: rgba(139, 92, 246, 0.2);
    z-index: -1;
    border-radius: 2px;
}

/* بخش محتوای کتاب‌ها */
.content-section {
    margin: 6rem 0;
}

.section-title {
    text-align: center;
    margin-bottom: 4rem;
    position: relative;
}

.section-title h2 {
    font-size: 2.5rem;
    color: #0b8f89;
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
    background: linear-gradient(90deg, #0ea5a4, #f59e0b);
    border-radius: 2px;
}

.section-title p {
    color: #6b7280;
    font-size: 1.2rem;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.8;
}

.content-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2.5rem;
    margin-top: 3rem;
}

.content-card {
    background: white;
    padding: 2.5rem;
    border-radius: 18px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    text-align: center;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border: 2px solid transparent;
    position: relative;
    overflow: hidden;
}

.content-card::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #0ea5a4, #6366f1);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
}

.content-card:hover::before {
    transform: translateX(0);
}

.content-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(139, 92, 246, 0.25);
    border-color: #8b5cf6;
}

.content-icon {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, #0ea5a4, #0ea5e9);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.8rem;
    color: white;
    font-size: 2rem;
    box-shadow: 0 10px 25px rgba(139, 92, 246, 0.3);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.content-card:hover .content-icon {
    transform: scale(1.1) rotate(5deg);
}

.content-title {
    font-size: 1.6rem;
    color: #0b8f89;
    margin-bottom: 1.2rem;
    font-weight: 800;
}

.content-description {
    color: #6b7280;
    line-height: 1.7;
    font-size: 1.05rem;
}

/* بخش فلسفه ما */
.philosophy-section {
    background: white;
    padding: 5rem;
    border-radius: 18px;
    box-shadow: 0 10px 40px rgba(139, 92, 246, 0.15);
    margin: 6rem 0;
    position: relative;
    overflow: hidden;
    border: 2px solid rgba(139, 92, 246, 0.1);
}

.philosophy-section::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, transparent 70%);
}

.philosophy-title {
    font-size: 2.2rem;
    color: #0b8f89;
    margin-bottom: 2rem;
    font-weight: 800;
    text-align: center;
    position: relative;
}

.philosophy-content {
    font-size: 1.2rem;
    line-height: 2;
    color: #0f1724;
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
}

.highlight-text {
    display: inline-block;
    background: linear-gradient(120deg, rgba(139, 92, 246, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%);
    padding: 0.5rem 1.5rem;
    border-radius: 50px;
    margin: 2rem 0;
    font-weight: 700;
    color: #0b8f89;
    border: 2px solid rgba(139, 92, 246, 0.2);
}

/* بخش اطلاعات تماس */
.contact-info-section {
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(99, 102, 241, 0.05));
    padding: 5rem;
    border-radius: 18px;
    margin: 6rem 0;
    position: relative;
    overflow: hidden;
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
    background: white;
    border-radius: 18px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border: 2px solid transparent;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.method-card:hover {
    transform: translateY(-10px);
    border-color: #0ea5a4;
    box-shadow: 0 20px 50px rgba(139, 92, 246, 0.25);
}

.method-icon {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    color: #0ea5a4;
}

.method-title {
    font-size: 1.5rem;
    color: #0b8f89;
    margin-bottom: 1rem;
    font-weight: 700;
}

.method-description {
    color: #6b7280;
    margin-bottom: 2rem;
    line-height: 1.7;
}

.method-btn {
    display: inline-block;
    padding: 1rem 2rem;
    background: #0ea5a4;
    color: white;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 600;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border: 2px solid #0ea5a4;
}

.method-btn:hover {
    background: white;
    color: #0ea5a4;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(139, 92, 246, 0.3);
}

.whatsapp-btn {
    background: #25D366;
    border-color: #25D366;
}

.whatsapp-btn:hover {
    background: white;
    color: #25D366;
}

/* بخش تماس */
.contact-section {
    background: linear-gradient(135deg, #7c3aed, #6366f1);
    color: white;
    padding: 5rem 2rem;
    border-radius: 18px;
    margin: 6rem 0;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.contact-title {
    font-size: 2.5rem;
    margin-bottom: 1.8rem;
    font-weight: 800;
    position: relative;
    z-index: 1;
}

.contact-description {
    font-size: 1.3rem;
    opacity: 0.95;
    max-width: 700px;
    margin: 0 auto 3rem;
    line-height: 1.9;
    position: relative;
    z-index: 1;
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
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
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
    color: #0b8f89;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.btn-primary:hover {
    background: #f8fafc;
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

/* Responsive Adjustments for page content */
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
    
    .price-comparison-section,
    .philosophy-section,
    .contact-info-section {
        padding: 3rem;
    }
    
    .comparison-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .price-arrow {
        transform: rotate(90deg);
        margin: 1rem 0;
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
    
    .comparison-title,
    .philosophy-title,
    .section-title h2 {
        font-size: 1.8rem;
    }
    
    .section-title p {
        font-size: 1.1rem;
    }
    
    .content-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .content-card {
        padding: 2rem;
    }
    
    .contact-methods {
        grid-template-columns: 1fr;
        gap: 2rem;
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
    
    
    .price-amount {
        font-size: 2.5rem;
    }
    
    .content-card {
        padding: 1.5rem;
    }
    
    .content-title {
        font-size: 1.4rem;
    }
    
    .price-comparison-section,
    .philosophy-section,
    .contact-info-section,
    .contact-section {
        padding: 2rem 1.5rem;
    }
    
    .contact-title {
        font-size: 1.8rem;
    }
}
</style>

<!-- بخش هیرو -->
<section class="page-hero">
    <h1 class="page-title">کتاب‌های کانکوری</h1>
  
    <div class="page-description">
        <p>
            کتاب‌های کانکوری – منابع جامع و نازل
            <br><br>
            مجموعه‌ای کامل از کتاب‌ها و فرم‌های کانکور از سال‌های مختلف، جمع‌آوری شده توسط اساتید برجسته و با تجربه، در اختیار علاقه‌مندان قرار دارد.
            <br><br>
            <strong>با توجه به رویکرد ترکیبی خیریه و تجارتی</strong>، این منابع که در بازار معمولاً بین ۵۰۰ تا ۲۰۰۰ افغانی عرضه می‌شوند، با قیمت استثنایی ۳۰ افغانی ارائه می‌گردد.
            <br><br>
            این مجموعه فرصتی بی‌نظیر برای دسترسی به منابع معتبر و مفید کانکور فراهم می‌کند و توانایی دانش‌آموزان و داوطلبان را در مسیر موفقیت تحصیلی ارتقا می‌دهد.
        </p>
    </div>
</section>
<!-- بخش محتوای کتاب‌ها -->
<section class="content-section">
    <div class="section-title">
        <h2>محتوای مجموعه کانکوری</h2>
        <p>آنچه در این مجموعه ارزشمند دریافت می‌کنید</p>
    </div>
    
    <div class="content-grid">
        <div class="content-card">
            <div class="content-icon">
                <i class="fas fa-book-open"></i>
            </div>
            <h3 class="content-title">کتاب‌های مرجع</h3>
            <p class="content-description">مجموعه کامل کتاب‌های کانکوری تالیف اساتید مجرب و با سابقه</p>
        </div>
        
        <div class="content-card">
            <div class="content-icon">
                <i class="fas fa-file-alt"></i>
            </div>
            <h3 class="content-title">فرم‌های سال‌های گذشته</h3>
            <p class="content-description">آرشیو کامل فرم‌های کانکور از سال‌های مختلف برای تمرین</p>
        </div>
        
        
        <div class="content-card">
            <div class="content-icon">
                <i class="fas fa-lightbulb"></i>
            </div>
            <h3 class="content-title">راهکارهای تست‌زنی</h3>
            <p class="content-description">تکنیک‌های مدیریت زمان و روش‌های حل سریع سوالات</p>
        </div>
        
        <div class="content-card">
            <div class="content-icon">
                <i class="fas fa-graduation-cap"></i>
            </div>
            <h3 class="content-title">منابع درسی خلاصه</h3>
            <p class="content-description">خلاصه‌های مفید و کاربردی از کتاب‌های درسی اصلی</p>
        </div>
        
</section>

<!-- بخش فلسفه ما -->
<section class="philosophy-section">
    <h2 class="philosophy-title">فلسفه ما: آموزش برای همه</h2>
    <div class="philosophy-content">
        <p>
            ما معتقدیم که دسترسی به منابع آموزشی با کیفیت نباید به دلیل مشکلات مالی محدود شود.
            به همین دلیل، با رویکردی ترکیبی از فعالیت تجاری و مسئولیت اجتماعی، منابع ارزشمند کانکوری را با حداقل قیمت ممکن ارائه می‌دهیم.
        </p>
        
        <div class="highlight-text">
            ❝ موفقیت تحصیلی حق همه است، نه امتیازی برای ثروتمندان ❞
        </div>
        
        <p>
            این منابع توسط اساتید با تجربه جمع‌آوری و تدوین شده‌اند تا دانش‌آموزان و داوطلبان عزیز بتوانند 
            با خیال آسوده و بدون نگرانی از هزینه‌های سنگین، برای آینده تحصیلی خود آماده شوند.
        </p>
        
        <p style="margin-top: 2rem; color: #0ea5a4; font-weight: 700;">
            مشارکت شما در این طرح، حمایت از دانش و آینده‌سازی کشور است.
        </p>
    </div>
</section>

<!-- بخش اطلاعات تماس -->
<section class="contact-info-section">
    <div class="section-title">
        <h2>روش دریافت مجموعه کانکوری</h2>
        <p>برای دریافت این مجموعه ارزشمند، می توانید ارتباط بگیرید</p>
    </div>
    
    <div class="contact-methods">
        <div class="method-card">
            <div class="method-icon">📞</div>
            <h3 class="method-title">تماس تلفنی</h3>
            <p class="method-description">برای دریافت اطلاعات و مشاوره سریع با ما تماس بگیرید.</p>
            <a href="tel:+93781821838" class="method-btn">
                تماس: ۰۷۸۱۸۲۱۸۳۸
            </a>
        </div>
        
        <div class="method-card">
            <div class="method-icon">🏪</div>
            <h3 class="method-title">مراجعه حضوری</h3>
            <p class="method-description">برای تجربه بهتر و انتخاب راحت‌تر، از فروشگاه ما بازدید کنید.</p>
            <a href="#footer" class="method-btn">
                آدرس فروشگاه
            </a>
        </div>
        
        <div class="method-card">
            <div class="method-icon">📱</div>
            <h3 class="method-title">ارتباط از طریق واتساپ</h3>
            <p class="method-description">از طریق واتساپ می‌توانید پرسش‌ها و هماهنگی‌های خود را با ما انجام دهید.</p>
            <a href="https://wa.me/93781821838" class="method-btn whatsapp-btn" target="_blank">
                <i class="fab fa-whatsapp"></i>
                ارتباط در واتس‌اپ
            </a>
        </div>
    </div>
</section>

<!-- بخش تماس -->
<section class="contact-section">
    <h2 class="contact-title">فرصت بی‌نظیر برای موفقیت در کانکور</h2>
    <p class="contact-description">
        با منابع معتبر و قیمت استثنایی، آینده تحصیلی خود را تضمین کنید
        <br>
        برای دریافت اطلاعات بیشتر و انتخاب منابع، با ما در تماس باشید
    </p>
    
    <div class="contact-buttons">
        <a href="tel:+93781821838" class="btn btn-primary">
            <i class="fas fa-phone"></i>
            تماس تلفنی
        </a>
        
        <a href="https://wa.me/93781821838?text=سلام، لطفا اطلاعات کتاب‌های کانکوری را بفرستید" 
           class="btn btn-secondary" target="_blank">
            <i class="fab fa-whatsapp"></i>
            ارتباط در واتس‌اپ
        </a>
        
        <a href="#footer" class="btn btn-secondary">
            <i class="fas fa-map-marker-alt"></i>
            آدرس فروشگاه
        </a>
    </div>
    
    <p style="margin-top: 2rem; opacity: 0.9; font-size: 1.1rem;">
        📍 کابل، ناحیه ۶، شهرک ۱۲ امام | 🕗 ۸ صبح تا ۸ شب
    </p>
</section>
