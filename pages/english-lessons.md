---
layout: page
title: "بسته آموزشی زبان انگلیسی"
description: "بسته کامل آموزشی شامل درس‌های ضبط‌شده اساتید ملی و بین‌المللی روی فلش؛ یادگیری در هر زمان و مکان"
keywords: "بسته آموزشی, زبان انگلیسی, فلش آموزشی, درس زبان, استاد بین‌المللی, یادگیری قابل‌حمل, علی اکبری"
breadcrumb:
  - title: "بسته‌های آموزشی"
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
    background: radial-gradient(circle, rgba(0, 123, 255, 0.1) 0%, transparent 70%);
    z-index: -1;
}

.page-title {
    font-size: 3.2rem;
    color: #0056b3;
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
    background: linear-gradient(90deg, #007bff, #17a2b8);
    border-radius: 3px;
}

.service-badge {
    display: inline-block;
    background: linear-gradient(135deg, #007bff, #17a2b8);
    color: white;
    padding: 0.8rem 2rem;
    border-radius: 50px;
    font-size: 1.8rem;
    font-weight: 800;
    margin: 1rem 0 2rem;
    box-shadow: 0 10px 25px rgba(0, 123, 255, 0.3);
    border: 3px solid white;
}

.page-description {
    font-size: 1.3rem;
    color: #2d3047;
    line-height: 2;
    max-width: 1000px;
    margin: 3rem auto 0;
    padding: 3rem;
    background: white;
    border-radius: 0.75rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    border: 2px solid rgba(0, 123, 255, 0.1);
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
    background: linear-gradient(90deg, #007bff, #17a2b8);
}

.page-description strong {
    color: #007bff;
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
    background: rgba(0, 123, 255, 0.2);
    z-index: -1;
    border-radius: 2px;
}

/* بخش دسته‌بندی */
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
    color: #0056b3;
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
    background: linear-gradient(90deg, #007bff, #ffc107);
    border-radius: 2px;
}

.section-title p {
    color: #6b7280;
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
    border-radius: 0.75rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
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
    background: linear-gradient(90deg, #007bff, #17a2b8);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
}

.category-card:hover::before {
    transform: translateX(0);
}

.category-card:hover {
    transform: translateY(-15px);
    box-shadow: 0 20px 50px rgba(0, 123, 255, 0.25);
    border-color: #007bff;
}

.category-icon {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, #007bff, #ffc107);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.8rem;
    color: white;
    font-size: 2rem;
    box-shadow: 0 10px 25px rgba(0, 123, 255, 0.3);
    transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.category-card:hover .category-icon {
    transform: scale(1.1) rotate(5deg);
}

.category-title {
    font-size: 1.6rem;
    color: #0056b3;
    margin-bottom: 1.2rem;
    font-weight: 800;
}

.category-description {
    color: #6b7280;
    line-height: 1.7;
    font-size: 1.05rem;
}


/* بخش ویژگی‌ها */
.features-section {
    background: linear-gradient(135deg, rgba(0, 123, 255, 0.05), rgba(23, 162, 184, 0.05));
    padding: 5rem;
    border-radius: 0.75rem;
    margin: 6rem 0;
    position: relative;
    overflow: hidden;
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
    border-radius: 0.75rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
    border: 2px solid transparent;
}

.feature-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(0, 123, 255, 0.25);
    border-color: #007bff;
}

.feature-icon {
    width: 70px;
    height: 70px;
    background: linear-gradient(135deg, #007bff, #ffc107);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    color: white;
    font-size: 1.8rem;
    box-shadow: 0 10px 20px rgba(0, 123, 255, 0.3);
}

.feature-title {
    font-size: 1.4rem;
    color: #0056b3;
    margin-bottom: 1rem;
    font-weight: 700;
}

.feature-description {
    color: #6b7280;
    line-height: 1.6;
}

/* بخش اطلاعات تماس */
.contact-info-section {
    background: white;
    padding: 5rem;
    border-radius: 0.75rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    margin: 6rem 0;
    position: relative;
    overflow: hidden;
    border: 2px solid rgba(0, 123, 255, 0.1);
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
    background: linear-gradient(135deg, rgba(0, 123, 255, 0.05), rgba(23, 162, 184, 0.05));
    border-radius: 0.75rem;
    transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
    border: 2px solid transparent;
}

.method-card:hover {
    transform: translateY(-10px);
    border-color: #007bff;
    box-shadow: 0 20px 50px rgba(0, 123, 255, 0.25);
}

.method-icon {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    color: #007bff;
}

.method-title {
    font-size: 1.5rem;
    color: #0056b3;
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
    background: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 600;
    transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
    border: 2px solid #007bff;
}

.method-btn:hover {
    background: white;
    color: #007bff;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 123, 255, 0.3);
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
    background: linear-gradient(135deg, #0056b3, #17a2b8);
    color: white;
    padding: 5rem 2rem;
    border-radius: 0.75rem;
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
    color: white;
}

.contact-description {
    font-size: 1.3rem;
    opacity: 0.95;
    max-width: 700px;
    margin: 0 auto 3rem;
    line-height: 1.9;
    position: relative;
    z-index: 1;
    color: white;
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
    transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
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
    color: #0056b3;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.btn-primary:hover {
    background: #f9f7fe;
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
    
    .categories-grid,
    .features-grid,
    .contact-methods {
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
    <h1 class="page-title">بسته آموزشی زبان انگلیسی</h1>
    <div class="service-badge">یادگیری در هر زمان و مکان</div>
    <div class="page-description">
        <p>
            این <strong>بسته کامل</strong> شامل درس‌های زبان انگلیسی ضبط‌شده توسط استادان ملی و بین‌المللی است. با قرار دادن همه درس‌ها روی یک فلش کوچک، می‌توانید در هر زمان و هر مکان از آن استفاده کنید: در خانه، محل کار، یا حتی در سفر. یادگیری انگلیسی با این بسته اقتصادی، انعطاف‌پذیر و همیشه در دسترس شماست!
        </p>
        <p style="margin-top: 2rem; font-style: italic; color: #0056b3;">
            ما باور داریم که یادگیری نباید به مکان یا زمان خاصی محدود باشد. بسته آموزشی ما این امکان را برای شما فراهم می‌کند تا هرطور که می‌خواهید و هرجا که هستید، انگلیسی بیاموزید.
        </p>
    </div>
</section>

<!-- بخش دسته‌بندی محتوای بسته -->
<section class="categories-section">
    <div class="section-title">
        <h2>آنچه در این بسته خواهید یافت</h2>
        <p>مجموعه‌ای از بهترین درس‌ها برای تقویت همه مهارت‌های زبانی</p>
    </div>
    
    <div class="categories-grid">
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-volume-up"></i>
            </div>
            <h3 class="category-title">مهارت شنیداری</h3>
            <p class="category-description">فایل‌های صوتی با کیفیت، مکالمات واقعی و تمرین‌های درک مطلب شنیداری</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-comment"></i>
            </div>
            <h3 class="category-title">مکالمه و گفتگو</h3>
            <p class="category-description">درس‌های موضوعی برای بهبود روان‌صحبت‌کردن و افزایش اعتمادبه‌نفس در مکالمه</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-book-open"></i>
            </div>
            <h3 class="category-title">خواندن و نوشتن</h3>
            <p class="category-description">متون متنوع، داستان‌های کوتاه، تمرین‌های گرامر و انشا نویسی</p>
        </div>
        
        <div class="category-card">
            <div class="category-icon">
                <i class="fas fa-language"></i>
            </div>
            <h3 class="category-title">واژگان و اصطلاحات</h3>
            <p class="category-description">کلمات پرکاربرد، اصطلاحات روزمره و فلش‌کارت‌های تصویری برای تثبیت یادگیری</p>
        </div>                
    </div>
</section>


<!-- بخش ویژگی‌ها -->
<section class="features-section">
    <div class="section-title">
        <h2>چرا بسته آموزشی ما متفاوت است؟</h2>
        <p>انعطاف‌پذیری، اقتصادی و کیفیت بی‌نظیر</p>
    </div>
    
    <div class="features-grid">
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-usb"></i>
            </div>
            <h3 class="feature-title">یک فلش، همه چیز</h3>
            <p class="feature-description">تمامی درس‌ها روی یک فلش مموری کوچک قرار گرفته‌اند؛ نیازی به اینترنت یا تجهیزات اضافی نیست</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-map-marked-alt"></i>
            </div>
            <h3 class="feature-title">آموزش سیار</h3>
            <p class="feature-description">در هر مکان و هر زمانی می‌توانید درس بخوانید: در مترو، ماشین، پارک یا مسافرت</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-coins"></i>
            </div>
            <h3 class="feature-title">اقتصادی و مقرون‌به‌صرفه</h3>
            <p class="feature-description">یک بار خرید، استفاده دائمی – بدون هزینه‌های ماهانه یا دوره‌ای</p>
        </div>
        
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fas fa-chalkboard-teacher"></i>
            </div>
            <h3 class="feature-title">اساتید برتر</h3>
            <p class="feature-description">درس‌ها توسط بهترین مدرسان ملی و بین‌المللی تدریس شده‌اند</p>
        </div>
    </div>
</section>

<!-- بخش اطلاعات تماس / روش خرید -->
<section class="contact-info-section">
    <div class="section-title">
        <h2>روش خرید بسته آموزشی</h2>
        <p>برای تهیه بسته یا دریافت مشاوره، یکی از راه‌های زیر را انتخاب کنید</p>
    </div>
    
    <div class="contact-methods">
        <div class="method-card">
            <div class="method-icon">📞</div>
            <h3 class="method-title">تماس تلفنی</h3>
            <p class="method-description">برای راهنمایی و اطلاعات بیشتر، با ما تماس بگیرید.</p>
            <a href="tel:+93781821838" class="method-btn">
                تماس: ۰۷۸۱۸۲۱۸۳۸
            </a>
        </div>
        
        <div class="method-card">
            <div class="method-icon">🏪</div>
            <h3 class="method-title">مراجعه حضوری</h3>
            <p class="method-description">برای مشاهده و کسب اطلاعات بیشتر، به فروشگاه ما سر بزنید.</p>
            <a href="#footer" class="method-btn">
                آدرس فروشگاه
            </a>
        </div>
        
        <div class="method-card">
            <div class="method-icon">📱</div>
            <h3 class="method-title">درخواست در واتس‌اپ</h3>
            <p class="method-description">برای راهنمایی و دریافت اطلاعات بیشتر، در واتس‌اپ با ما تماس بگیرید.</p>
            <a href="https://wa.me/93781821838" class="method-btn whatsapp-btn" target="_blank">
                <i class="fab fa-whatsapp"></i>
                ارتباط در واتس‌اپ
            </a>
        </div>
    </div>
</section>

<!-- بخش تماس نهایی -->
<section class="contact-section">
    <h2 class="contact-title">یادگیری انگلیسی، هرجا که هستی!</h2>
    <p class="contact-description">
        با بسته آموزشی فلش‌محور ما، دیگر محدود به کلاس و زمان خاصی نیستی
        <br>
        انگلیسی را با کیفیت بالا، انعطاف‌پذیری و قیمت مناسب تجربه کن
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
    
    <p style="margin-top: 2rem; opacity: 0.9; font-size: 1.1rem; color: white;">
        📍 کابل، ناحیه ۶، شهرک ۱۲ امام | 🕗 ۸ صبح تا ۸ شب
    </p>
</section>
