---
layout: page
title: "فعالیت‌های داوطلبانه خیریه"
description: "فعالیت‌های داوطلبانه خیریه و غیرانتفاعی با هدف گسترش دسترسی به منابع آموزشی و حمایت از ایتام و خانواده‌های کم‌بضاعت در کابل"
keywords: "فعالیت داوطلبانه, خیریه, حمایت از ایتام, آموزش رایگان, کمک به نیازمندان, فروشگاه علی اکبری, کابل"
breadcrumb:
  - title: "فعالیت‌های خیریه"
    link: "/charity"
---

<style>
/* ===== CSS Variables ===== */
:root {
    /* Colors (palette for charity: warm and compassionate) */
    --primary: #10b981;
    --primary-dark: #059669;
    --primary-light: #34d399;
    --secondary: #8b5cf6;
    --accent: #f59e0b;
    --accent-alt: #ef4444;
    --dark: #0f1724;
    --dark-light: #24303a;
    --light: #f8fafc;
    --gray: #6b7280;
    --gray-light: #e6eef2;
    --gray-lighter: #f7fafc;
    --success: #16a34a;
    --warning: #f59e0b;
    --danger: #ef4444;
    --charity-green: #10b981;
    --charity-blue: #3b82f6;
    --charity-purple: #8b5cf6;
    
    /* Shadows */
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    --shadow-hover: 0 20px 50px rgba(16, 185, 129, 0.25);
    
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
    background: radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%);
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
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    border-radius: 3px;
}

.mission-badge {
    display: inline-block;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    color: white;
    padding: 0.8rem 2rem;
    border-radius: 50px;
    font-size: 1.8rem;
    font-weight: 800;
    margin: 1rem 0 2rem;
    box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
    border: 3px solid white;
}

.page-description {
    font-size: 1.3rem;
    color: var(--dark);
    line-height: 2;
    max-width: 1000px;
    margin: 3rem auto 0;
    padding: 3rem;
    background: white;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
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

/* بخش فعالیت‌ها */
.activities-section {
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

.activities-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2.5rem;
    margin-top: 3rem;
}

.activity-card {
    background: white;
    padding: 2.5rem;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    text-align: center;
    transition: var(--transition-base);
    border: 2px solid transparent;
    position: relative;
    overflow: hidden;
}

.activity-card::before {
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

.activity-card:hover::before {
    transform: translateX(0);
}

.activity-card:hover {
    transform: translateY(-15px);
    box-shadow: var(--shadow-hover);
    border-color: var(--primary-light);
}

.activity-icon {
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
    transition: var(--transition-base);
}

.activity-card:hover .activity-icon {
    transform: scale(1.1) rotate(5deg);
}

.activity-title {
    font-size: 1.6rem;
    color: var(--primary-dark);
    margin-bottom: 1.2rem;
    font-weight: 800;
}

.activity-description {
    color: var(--gray);
    line-height: 1.7;
    font-size: 1.05rem;
}

/* بخش نمونه فعالیت‌ها */
.examples-section {
    background: linear-gradient(135deg, rgba(16, 185, 129, 0.03), rgba(139, 92, 246, 0.03));
    padding: 5rem;
    border-radius: var(--radius-lg);
    margin: 6rem 0;
    position: relative;
    overflow: hidden;
}

.examples-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2.5rem;
    margin-top: 3rem;
}

.example-card {
    background: white;
    padding: 2rem;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    border-left: 6px solid var(--primary);
    transition: var(--transition-base);
}

.example-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-hover);
}

.example-title {
    font-size: 1.4rem;
    color: var(--primary-dark);
    margin-bottom: 1rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 0.8rem;
}

.example-title i {
    color: var(--accent);
    font-size: 1.3rem;
}

.example-description {
    color: var(--gray);
    line-height: 1.6;
    padding-right: 0.5rem;
}


/* بخش مشارکت */
.contribution-section {
    background: linear-gradient(135deg, var(--primary-dark), var(--secondary));
    color: white;
    padding: 5rem 2rem;
    border-radius: var(--radius-lg);
    margin: 6rem 0;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.contribution-title {
    font-size: 2.5rem;
    margin-bottom: 1.8rem;
    font-weight: 800;
    position: relative;
    z-index: 1;
    color: var(--myself);
}

.contribution-description {
    font-size: 1.3rem;
    opacity: 0.95;
    max-width: 700px;
    margin: 0 auto 3rem;
    line-height: 1.9;
    position: relative;
    z-index: 1;
    color: var(--myself);
}

.contribution-methods {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
    position: relative;
    z-index: 1;
}

.method-card {
    background: rgba(255, 255, 255, 0.1);
    padding: 2.5rem;
    border-radius: var(--radius-lg);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: var(--transition-base);
}

.method-card:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-10px);
}

.method-icon {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    color: white;
}

.method-title {
    font-size: 1.5rem;
    color: white;
    margin-bottom: 1rem;
    font-weight: 700;
}

.method-description {
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.7;
}

/* بخش تماس */
.contact-section {
    background: white;
    padding: 5rem;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    margin: 6rem 0;
    position: relative;
    overflow: hidden;
    border: 2px solid rgba(16, 185, 129, 0.1);
}

.contact-title {
    font-size: 2.5rem;
    margin-bottom: 1.8rem;
    font-weight: 800;
    position: relative;
    z-index: 1;
    color: var(--primary-dark);
    text-align: center;
}

.contact-description {
    font-size: 1.3rem;
    color: var(--gray);
    max-width: 700px;
    margin: 0 auto 3rem;
    line-height: 1.9;
    position: relative;
    z-index: 1;
    text-align: center;
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
    background: var(--primary);
    color: white;
    box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
}

.btn-primary:hover {
    background: var(--primary-dark);
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 15px 40px rgba(16, 185, 129, 0.4);
}

.btn-secondary {
    background: white;
    color: var(--primary);
    border: 2px solid var(--primary);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.btn-secondary:hover {
    background: var(--primary-light);
    color: white;
    transform: translateY(-5px) scale(1.05);
    border-color: var(--primary-light);
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
    
    .mission-badge {
        font-size: 1.5rem;
        padding: 0.6rem 1.5rem;
    }
    
    .examples-section,
    .contact-section {
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
    
    .activities-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .activity-card {
        padding: 2rem;
    }
    
    .examples-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .example-card {
        padding: 1.5rem;
    }
    
    .gallery-grid {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 1rem;
    }
    
    .contribution-methods {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    
    .method-card {
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
    
    .mission-badge {
        font-size: 1.3rem;
        padding: 0.5rem 1.2rem;
    }
    
    .activity-card {
        padding: 1.5rem;
    }
    
    .activity-title {
        font-size: 1.4rem;
    }
    
    .gallery-grid {
        grid-template-columns: 1fr;
    }
    
    .examples-section,
    .contact-section,
    .contribution-section {
        padding: 2rem 1.5rem;
    }
    
    .examples-section h2,
    .contribution-title,
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
    <h1 class="page-title">فعالیت‌های داوطلبانه</h1>
    <div class="mission-badge">گسترش آموزش - حمایت از نیازمندان</div>
    <div class="page-description">
        <p>
            <strong>این بخش شامل فعالیت‌های خیریه و غیرانتفاعی</strong> است که با هدف گسترش دسترسی به منابع آموزشی و حمایت از ایتام و خانواده‌های کم‌بضاعت انجام می‌شود. این فعالیت‌ها شامل آموزش رسمی یا حضوری نبوده و صرفاً در قالب توزیع منابع آموزشی و کمک‌های فرهنگی صورت می‌گیرد.
        </p>
        <p style="margin-top: 2rem; font-style: italic; color: var(--primary-dark);">
            ما معتقدیم که آموزش حق هر فرد است و با توزیع منابع آموزشی رایگان، در راستای ایجاد فرصت‌های برابر برای همه گام برمی‌داریم.
        </p>
    </div>
</section>

<!-- بخش فعالیت‌ها -->
<section class="activities-section">
    <div class="section-title">
        <h2>حوزه‌های فعالیت داوطلبانه</h2>
        <p>تمرکز ما بر سه حوزه اصلی برای ایجاد تاثیر پایدار</p>
    </div>
    
    <div class="activities-grid">
        <div class="activity-card">
            <div class="activity-icon">
                <i class="fas fa-graduation-cap"></i>
            </div>
            <h3 class="activity-title">توسعه آموزشی</h3>
            <p class="activity-description">توزیع منابع آموزشی رایگان برای افزایش دسترسی به دانش و مهارت‌های ضروری برای همه اقشار جامعه</p>
        </div>
        
        <div class="activity-card">
            <div class="activity-icon">
                <i class="fas fa-hands-helping"></i>
            </div>
            <h3 class="activity-title">حمایت از ایتام</h3>
            <p class="activity-description">ارائه کمک‌های فرهنگی و آموزشی به کودکان یتیم و خانواده‌های کم‌بضاعت برای بهبود شرایط زندگی</p>
        </div>
        
        <div class="activity-card">
            <div class="activity-icon">
                <i class="fas fa-users"></i>
            </div>
            <h3 class="activity-title">توانمندسازی جامعه</h3>
            <p class="activity-description">ایجاد فرصت‌های یادگیری و توسعه مهارت‌ها برای افزایش استقلال و خودکفایی افراد نیازمند</p>
        </div>
    </div>
</section>

<!-- بخش نمونه فعالیت‌ها -->
<section class="examples-section">
    <div class="section-title">
        <h2>نمونه فعالیت‌های انجام شده</h2>
        <p>برخی از اقدامات داوطلبانه ما در راستای اهداف خیریه</p>
    </div>
    
    <div class="examples-grid">
        <div class="example-card">
            <h4 class="example-title"><i class="fas fa-laptop"></i> توزیع ویدیوهای آموزشی کامپیوتر</h4>
            <p class="example-description">توزیع رایگان ویدیوهای آموزشی مهارت‌های کامپیوتری برای علاقه‌مندان به یادگیری فناوری اطلاعات</p>
        </div>
        
        <div class="example-card">
            <h4 class="example-title"><i class="fas fa-language"></i> آموزش زبان انگلیسی رایگان</h4>
            <p class="example-description">توزیع ویدیوهای آموزشی زبان انگلیسی برای افزایش فرصت‌های شغلی و تحصیلی افراد نیازمند</p>
        </div>
        
        <div class="example-card">
            <h4 class="example-title"><i class="fas fa-book-quran"></i> آموزش قرآن کریم</h4>
            <p class="example-description">توزیع ویدیوهای آموزشی قرآن کریم برای تقویت آموزش دینی و اخلاقی جامعه</p>
        </div>
        
        <div class="example-card">
            <h4 class="example-title"><i class="fas fa-book"></i> آموزش زبان پشتو</h4>
            <p class="example-description">توزیع محتوای آموزشی زبان پشتو برای حفظ و تقویت زبان مادری و فرهنگ بومی</p>
        </div>
        
        <div class="example-card">
            <h4 class="example-title"><i class="fas fa-briefcase"></i> آموزش کارآفرینی</h4>
            <p class="example-description">توزیع ویدیوها و محتوای آموزشی کارآفرینانه برای توانمندسازی کارجویان و ایجاد فرصت‌های شغلی</p>
        </div>
        
        <div class="example-card">
            <h4 class="example-title"><i class="fas fa-gift"></i> حمایت از ایتام</h4>
            <p class="example-description">توزیع کتاب، کتابچه و قلم برای کودکان یتیم و خانواده‌های فقیر به‌منظور تشویق به تحصیل</p>
        </div>
        
        <div class="example-card">
            <h4 class="example-title"><i class="fas fa-award"></i> تشویق دانش‌آموزان</h4>
            <p class="example-description">توزیع کتابچه و قلم به‌عنوان وسایل تشویقی برای دانش‌آموزان یتیم جهت افزایش انگیزه تحصیلی</p>
        </div>
        
        <div class="example-card">
            <h4 class="example-title"><i class="fas fa-hands"></i> همکاری منطقه‌ای</h4>
            <p class="example-description">توزیع کتابچه‌های آموزشی زبان فارسی برای دانش‌آموزان یتیم و بی‌بضاعت مناطق محروم مانند دامون شالوزای، با همکاری همکاران محلی</p>
        </div>
    </div>
</section>


<!-- بخش مشارکت -->
<section class="contribution-section">
    <h2 class="contribution-title">همکاری و مشارکت در فعالیت‌های داوطلبانه</h2>
    <p class="contribution-description">
        شما نیز می‌توانید در این حرکت انسان‌دوستانه مشارکت کنید و در تغییر زندگی افراد نیازمند سهیم باشید
    </p>
    
    <div class="contribution-methods">
        <div class="method-card">
            <div class="method-icon">🎁</div>
            <h3 class="method-title">اهدای منابع آموزشی</h3>
            <p class="method-description">کتاب، لوازم تحریر، ویدیوهای آموزشی و دیگر منابع یادگیری را به ما اهدا کنید</p>
        </div>
        
        <div class="method-card">
            <div class="method-icon">🤝</div>
            <h3 class="method-title">همکاری داوطلبانه</h3>
            <p class="method-description">از وقت و تخصص خود برای کمک در سازماندهی و توزیع منابع استفاده کنید</p>
        </div>
        
        <div class="method-card">
            <div class="method-icon">📢</div>
            <h3 class="method-title">اشاعه فرهنگ نیکوکاری</h3>
            <p class="method-description">دیگران را از فعالیت‌های ما آگاه کنید و فرهنگ کمک به همنوع را ترویج دهید</p>
        </div>
    </div>
</section>

<!-- بخش تماس -->
<section class="contact-section">
    <h2 class="contact-title">برای همکاری در فعالیت‌های داوطلبانه</h2>
    <p class="contact-description">
        اگر مایل به همکاری، اهدا یا دریافت اطلاعات بیشتر درباره فعالیت‌های خیریه ما هستید، با ما تماس بگیرید
    </p>
    
    <div class="contact-buttons">
        <a href="tel:+93781821838" class="btn btn-primary">
            <i class="fas fa-phone"></i>
            تماس برای همکاری
        </a>
        
        <a href="https://wa.me/93774530372" class="btn btn-secondary" target="_blank">
            <i class="fab fa-whatsapp"></i>
            ارتباط در واتساپ
        </a>
        
        <a href="#footer" class="btn btn-secondary">
            <i class="fas fa-map-marker-alt"></i>
            مراجعه حضوری
        </a>
    </div>
    
    <p style="margin-top: 2rem; color: var(--gray); font-size: 1.1rem; text-align: center;">
        📍 کابل، ناحیه ۶، شهرک ۱۲ امام | 🕗 ۸ صبح تا ۸ شب
    </p>
</section>

<script>
    window.addEventListener('load', function () {
        if (typeof lightbox !== 'undefined') {
            // Initialize Lightbox
            lightbox.option({
                'resizeDuration': 200,
                'wrapAround': true,
                'albumLabel': "تصویر %1 از %2",
                'fadeDuration': 300
            });
        }
    });
</script>
