/* ========================================= */
/* تحسينات جمالية متقدمة باستخدام Bootstrap */
/* ========================================= */

/* 1. تحسينات عامة */
:root {
    --primary-gradient: linear-gradient(135deg, #0025c3 0%, #5474fc 100%);
    --secondary-gradient: linear-gradient(135deg, #5474fc 0%, #0025c3 100%);
    --glass-bg: rgba(255, 255, 255, 0.1);
    --glass-border: rgba(255, 255, 255, 0.2);
    --shadow-lg: 0 10px 40px rgba(0, 37, 195, 0.15);
    --shadow-xl: 0 20px 60px rgba(0, 37, 195, 0.25);
}

body {
    background: linear-gradient(135deg, #f8f9ff 0%, #eef0ff 100%);
    background-attachment: fixed;
    min-height: 100vh;
}

/* 2. تحسينات الهيدر */
header.navbar {
    background: var(--primary-gradient) !important;
    backdrop-filter: blur(20px) saturate(200%);
    -webkit-backdrop-filter: blur(20px) saturate(200%);
    border-bottom: 1px solid var(--glass-border);
    box-shadow: var(--shadow-lg);
    padding: 0.75rem 0;
}

.navbar-brand.logo {
    padding: 0.5rem 0;
}

.navbar-brand.logo img {
    width: 45px;
    height: 45px;
    object-fit: contain;
    border: 2px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
}

.navbar-brand.logo:hover img {
    transform: rotate(15deg) scale(1.1);
    border-color: rgba(255, 255, 255, 0.5);
}

.navbar-toggler {
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 0.5rem;
    border-radius: 8px;
}

.navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.8%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
    width: 1.5em;
    height: 1.5em;
}

.navbar-nav .nav-link {
    color: rgba(255, 255, 255, 0.9) !important;
    font-weight: 500;
    padding: 0.5rem 1rem !important;
    margin: 0 0.25rem;
    border-radius: 8px;
    transition: all 0.3s ease;
    position: relative;
}

.navbar-nav .nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: white;
    transition: width 0.3s ease;
    border-radius: 2px;
}

.navbar-nav .nav-link:hover,
.navbar-nav .nav-link.active {
    background: rgba(255, 255, 255, 0.15);
    color: white !important;
}

.navbar-nav .nav-link:hover::after,
.navbar-nav .nav-link.active::after {
    width: 70%;
}

/* 3. تحسينات الهيرو سيكشن */
.hero {
    background: var(--primary-gradient),
                url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    border-radius: 20px;
    padding: 5rem 0;
    margin-bottom: 3rem;
    position: relative;
    overflow: hidden;
}

.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%);
    animation: shimmer 3s infinite linear;
}

@keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

.hero h2 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.hero p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    opacity: 0.95;
}

/* 4. تحسينات بطاقات الأدوات */
.tools-grid {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.tool-card {
    border: none;
    border-radius: 20px;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    background: white;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
    height: 100%;
    display: flex;
    flex-direction: column;
}

.tool-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(0, 37, 195, 0.15);
}

.tool-header {
    background: var(--primary-gradient);
    color: white;
    padding: 2rem 1.5rem;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.tool-header i {
    font-size: 3rem;
    margin-bottom: 1rem;
    display: block;
    filter: drop-shadow(0 2px 5px rgba(0, 0, 0, 0.2));
}

.tool-header h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
}

.tool-body {
    padding: 2rem;
    flex: 1;
    display: flex;
    flex-direction: column;
}

.tool-body p {
    color: #6c757d;
    margin-bottom: 1.5rem;
    flex: 1;
}

/* 5. تحسينات الأزرار */
.btn-primary,
.tool-btn {
    background: var(--primary-gradient);
    border: none;
    border-radius: 12px;
    padding: 0.75rem 2rem;
    font-weight: 600;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    z-index: 1;
}

.btn-primary::before,
.tool-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--secondary-gradient);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
}

.btn-primary:hover,
.tool-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(0, 37, 195, 0.3);
}

.btn-primary:hover::before,
.tool-btn:hover::before {
    opacity: 1;
}

/* 6. تحسينات صفحات الأدوات */
.page-header {
    background: white;
    border-radius: 20px;
    padding: 2.5rem;
    margin-bottom: 2rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    border-right: 5px solid var(--primary-color);
}

.page-header h2 {
    color: var(--primary-color);
    font-weight: 700;
    margin-bottom: 1rem;
}

.page-header p {
    color: #6c757d;
    font-size: 1.1rem;
}

.back-home {
    background: #f8f9fa;
    color: var(--primary-color);
    border: 2px solid var(--primary-color);
    border-radius: 10px;
    padding: 0.75rem 1.5rem;
    text-decoration: none;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 2rem;
    transition: all 0.3s ease;
}

.back-home:hover {
    background: var(--primary-color);
    color: white;
    transform: translateX(-5px);
}

/* 7. تحسينات حقول الإدخال والنصوص */
.form-control,
.form-select,
textarea {
    border: 2px solid #e0e0e0;
    border-radius: 12px !important;
    padding: 0.75rem 1rem;
    transition: all 0.3s ease;
    font-size: 1rem;
}

.form-control:focus,
.form-select:focus,
textarea:focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 0.25rem rgba(0, 37, 195, 0.15);
    transform: translateY(-2px);
}

/* 8. تحسينات شريط التقدم والتحميل */
.progress {
    height: 8px;
    border-radius: 4px;
    background-color: #e9ecef;
    overflow: hidden;
}

.progress-bar {
    background: var(--primary-gradient);
    border-radius: 4px;
}

/* 9. تحسينات البطاقات الداخلية */
.card {
    border: none;
    border-radius: 15px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
}

.card:hover {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.card-header {
    background: var(--primary-gradient);
    color: white;
    border-bottom: none;
    border-radius: 15px 15px 0 0 !important;
    padding: 1.25rem 1.5rem;
}

.card-body {
    padding: 1.5rem;
}

/* 10. تحسينات التنبيهات */
.alert {
    border: none;
    border-radius: 12px;
    padding: 1rem 1.25rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.alert-success {
    background: linear-gradient(135deg, #d4edda, #c3e6cb);
    color: #155724;
}

.alert-info {
    background: linear-gradient(135deg, #d1ecf1, #bee5eb);
    color: #0c5460;
}

.alert-warning {
    background: linear-gradient(135deg, #fff3cd, #ffeaa7);
    color: #856404;
}

.alert-danger {
    background: linear-gradient(135deg, #f8d7da, #f5c6cb);
    color: #721c24;
}

/* 11. تحسينات القوائم */
.list-group-item {
    border: none;
    padding: 0.75rem 1.25rem;
    transition: all 0.3s ease;
    border-radius: 8px !important;
    margin-bottom: 0.5rem;
}

.list-group-item:hover {
    background: #f8f9fa;
    transform: translateX(5px);
}

/* 12. تحسينات الفوتر */
footer {
    background: var(--primary-gradient);
    color: white;
    padding: 3rem 0 1.5rem;
    margin-top: 3rem;
}

.footer-links {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.footer-links a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    transition: all 0.3s ease;
}

.footer-links a:hover {
    color: white;
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
}

.copyright {
    text-align: center;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.7);
}

/* 13. تحسينات المودال */
.modal-content {
    border: none;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
}

.modal-header {
    background: var(--primary-gradient);
    color: white;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 1.5rem 2rem;
}

.modal-title {
    font-weight: 600;
}

.modal-body {
    padding: 2rem;
}

.btn-close {
    filter: invert(1) brightness(200%);
    opacity: 0.8;
    transition: all 0.3s ease;
}

.btn-close:hover {
    opacity: 1;
    transform: rotate(90deg);
}

/* 14. تحسينات الأيقونات */
.bi, .bx {
    vertical-align: middle;
}

.bi-lg {
    font-size: 1.5rem;
}

.bi-xl {
    font-size: 2rem;
}

.bi-xxl {
    font-size: 3rem;
}

/* 15. تحسينات الأقسام */
section {
    padding: 3rem 0;
}

section:nth-child(even) {
    background: rgba(248, 249, 250, 0.5);
}

/* 16. تحسينات شبكة Bootstrap */
.row > * {
    padding: 1rem;
}

.row.g-4 > * {
    padding: 0;
}

/* 17. تحسينات الاستجابة */
@media (max-width: 768px) {
    .hero {
        padding: 3rem 0;
    }
    
    .hero h2 {
        font-size: 2rem;
    }
    
    .hero p {
        font-size: 1rem;
    }
    
    .tools-grid {
        grid-template-columns: 1fr;
    }
    
    .navbar-nav {
        background: rgba(0, 37, 195, 0.95);
        backdrop-filter: blur(20px);
        border-radius: 10px;
        padding: 1rem;
        margin-top: 1rem;
    }
    
    .modal-dialog {
        margin: 1rem;
    }
}

@media (max-width: 576px) {
    .page-header {
        padding: 1.5rem;
    }
    
    .tool-body {
        padding: 1.5rem;
    }
    
    .btn-primary,
    .tool-btn {
        padding: 0.5rem 1.5rem;
    }
}

/* 18. تأثيرات خاصة */
.fade-in {
    animation: fadeIn 0.5s ease-in;
}

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

.slide-in {
    animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

/* 19. تحسينات شريط التمرير */
::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
    background: var(--primary-color);
    border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
    background: var(--secondary-color);
}

/* 20. تحسينات أدوات النصوص الخاصة */
.text-tool .btn-group {
    gap: 0.5rem;
}

.text-tool .btn {
    border-radius: 8px;
    padding: 0.5rem 1rem;
}

.privacy-tool .result,
.robots-tool .result,
.terms-tool .result {
    max-height: 400px;
    overflow-y: auto;
    background: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 10px;
    padding: 1.5rem;
    font-family: 'Courier New', monospace;
    font-size: 0.9rem;
}

/* 21. تحسينات تلميحات الأدوات */
.tooltip {
    --bs-tooltip-bg: var(--primary-color);
    --bs-tooltip-color: white;
    --bs-tooltip-border-radius: 8px;
}

.tooltip-inner {
    font-weight: 500;
    padding: 0.5rem 0.75rem;
}

/* 22. تحسينات البادجات */
.badge {
    font-weight: 500;
    padding: 0.4em 0.8em;
}

.badge.bg-primary {
    background: var(--primary-gradient) !important;
}

/* 23. تحسينات الجداول */
.table {
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.table thead th {
    background: var(--primary-gradient);
    color: white;
    border: none;
    padding: 1rem;
}

.table tbody tr {
    transition: all 0.3s ease;
}

.table tbody tr:hover {
    background: rgba(0, 37, 195, 0.05);
}

/* 24. تحسينات الأكواد */
pre, code {
    font-family: 'Courier New', monospace;
    background: #f8f9fa;
    padding: 0.5rem;
    border-radius: 6px;
    border: 1px solid #e9ecef;
}

/* 25. تحسينات نهائية للمظهر */
* {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

body {
    font-feature-settings: "kern" 1, "liga" 1, "calt" 1;
}

/* إضافة تدرجات لونية متحركة */
.gradient-animate {
    background: linear-gradient(-45deg, #0025c3, #5474fc, #0025c3, #5474fc);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
}

@keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

/* تحسينات للأيقونات المتحركة */
.icon-spin {
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* تحسينات للظلال */
.shadow-soft {
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05) !important;
}

.shadow-medium {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1) !important;
}

.shadow-hard {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15) !important;
}

/* تحسينات للحدود */
.border-primary {
    border-color: var(--primary-color) !important;
}

.border-gradient {
    border: 2px solid transparent;
    background: linear-gradient(white, white) padding-box,
                var(--primary-gradient) border-box;
}

/* تحسينات للتأثيرات المساحية */
.hover-lift {
    transition: transform 0.3s ease;
}

.hover-lift:hover {
    transform: translateY(-5px);
}

.hover-scale {
    transition: transform 0.3s ease;
}

.hover-scale:hover {
    transform: scale(1.05);
}

/* تحسينات للشفافية */
.opacity-75 { opacity: 0.75; }
.opacity-50 { opacity: 0.5; }
.opacity-25 { opacity: 0.25; }

/* تحسينات للارتفاعات */
.min-vh-50 { min-height: 50vh; }
.min-vh-75 { min-height: 75vh; }

/* تحسينات للألوان النصية */
.text-gradient {
    background: var(--primary-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* تحسينات للخلفيات */
.bg-gradient-primary {
    background: var(--primary-gradient) !important;
}

.bg-gradient-secondary {
    background: var(--secondary-gradient) !important;
}



/* ========================================= */
/* زر العودة للأعلى ووضع النهار/الليل */
/* ========================================= */

/* 1. زر العودة للأعلى */
.back-to-top {
    position: fixed;
    bottom: 30px;
    left: 30px;
    width: 50px;
    height: 50px;
    background: var(--primary-gradient);
    color: white;
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 9999;
    opacity: 0;
    visibility: hidden;
    transform: translateY(20px);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 5px 20px rgba(0, 37, 195, 0.3);
}

.back-to-top.show {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.back-to-top:hover {
    background: var(--secondary-gradient);
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 10px 30px rgba(0, 37, 195, 0.4);
}

.back-to-top i {
    font-size: 1.5rem;
    transition: transform 0.3s ease;
}

.back-to-top:hover i {
    transform: translateY(-3px);
}

/* 2. زر تبديل الوضع */
.theme-toggle {
    position: fixed;
    top: 20px;
    left: 20px;
    width: 50px;
    height: 50px;
    background: var(--glass-bg);
    backdrop-filter: blur(10px);
    border: 1px solid var(--glass-border);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 9998;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.theme-toggle:hover {
    transform: rotate(45deg) scale(1.1);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.theme-toggle i {
    font-size: 1.5rem;
    transition: all 0.4s ease;
}

.theme-toggle .bi-sun-fill {
    color: #FFD700;
}

.theme-toggle .bi-moon-fill {
    color: #94A3B8;
}

/* 3. وضع الليل (Dark Mode) */
body.dark-mode {
    --primary-color: #5474fc;
    --secondary-color: #0025c3;
    --primary-gradient: linear-gradient(135deg, #5474fc 0%, #0025c3 100%);
    --secondary-gradient: linear-gradient(135deg, #0025c3 0%, #5474fc 100%);
    --glass-bg: rgba(0, 0, 0, 0.2);
    --glass-border: rgba(255, 255, 255, 0.1);
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    color: #e2e8f0;
}

body.dark-mode header {
    background: linear-gradient(135deg, 
        rgba(84, 116, 252, 0.95) 0%, 
        rgba(0, 37, 195, 0.9) 100%) !important;
    backdrop-filter: blur(20px) saturate(200%);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

body.dark-mode .tool-card {
    background: #1e293b;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

body.dark-mode .tool-card:hover {
    box-shadow: 0 20px 50px rgba(0, 37, 195, 0.2);
    border-color: rgba(84, 116, 252, 0.3);
}

body.dark-mode .tool-body {
    color: #cbd5e1;
}

body.dark-mode .tool-body p {
    color: #94a3b8;
}

body.dark-mode .page-header {
    background: #1e293b;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

body.dark-mode .page-header h2 {
    color: #94a3b8;
}

body.dark-mode .page-header p {
    color: #cbd5e1;
}

body.dark-mode .back-home {
    background: #334155;
    color: #cbd5e1;
    border-color: #475569;
}

body.dark-mode .back-home:hover {
    background: #475569;
    color: white;
}

body.dark-mode textarea,
body.dark-mode input,
body.dark-mode select {
    background: #1e293b;
    border-color: #475569 !important;
    color: #e2e8f0;
}

body.dark-mode textarea:focus,
body.dark-mode input:focus,
body.dark-mode select:focus {
    background: #0f172a;
    border-color: var(--primary-color) !important;
    color: #e2e8f0;
}

body.dark-mode .privacy-tool .result,
body.dark-mode .robots-tool .result,
body.dark-mode .terms-tool .result {
    background: #1e293b;
    border-color: #475569;
    color: #cbd5e1;
}

body.dark-mode footer {
    background: linear-gradient(135deg, #0f172a, #1e293b);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

body.dark-mode .modal-content {
    background: #1e293b;
    color: #e2e8f0;
}

body.dark-mode .modal-header {
    background: linear-gradient(135deg, #5474fc, #0025c3);
}

body.dark-mode .btn-close {
    filter: invert(1) brightness(150%);
}

body.dark-mode .alert-success {
    background: linear-gradient(135deg, #064e3b, #065f46);
    color: #a7f3d0;
}

body.dark-mode .alert-info {
    background: linear-gradient(135deg, #164e63, #0e7490);
    color: #a5f3fc;
}

body.dark-mode .alert-warning {
    background: linear-gradient(135deg, #78350f, #92400e);
    color: #fde68a;
}

body.dark-mode .alert-danger {
    background: linear-gradient(135deg, #7f1d1d, #991b1b);
    color: #fecaca;
}

body.dark-mode section:nth-child(even) {
    background: rgba(30, 41, 59, 0.5);
}

body.dark-mode ::-webkit-scrollbar-track {
    background: #1e293b;
}

body.dark-mode ::-webkit-scrollbar-thumb {
    background: #475569;
}

body.dark-mode ::-webkit-scrollbar-thumb:hover {
    background: #64748b;
}

/* 4. انتقال سلس بين الأوضاع */
* {
    transition: background-color 0.5s ease, 
                border-color 0.5s ease, 
                color 0.5s ease;
}

/* 5. تحسينات للاستجابة */
@media (max-width: 768px) {
    .back-to-top {
        bottom: 20px;
        left: 20px;
        width: 45px;
        height: 45px;
    }
    
    .theme-toggle {
        top: 15px;
        left: 15px;
        width: 45px;
        height: 45px;
    }
}

@media (max-width: 576px) {
    .back-to-top {
        bottom: 15px;
        left: 15px;
        width: 40px;
        height: 40px;
    }
    
    .theme-toggle {
        top: 10px;
        left: 10px;
        width: 40px;
        height: 40px;
    }
    
    .back-to-top i,
    .theme-toggle i {
        font-size: 1.25rem;
    }
}

/* 6. تأثيرات إضافية للوضع الليلي */
.dark-mode-transition {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

/* 7. تحسينات للأيقونات في الوضع الليلي */
body.dark-mode .bi,
body.dark-mode .bx {
    color: #cbd5e1;
}

body.dark-mode .tool-header i {
    filter: drop-shadow(0 2px 5px rgba(0, 0, 0, 0.5));
}

/* 8. تحسينات للنصوص في الوضع الليلي */
body.dark-mode h1,
body.dark-mode h2,
body.dark-mode h3,
body.dark-mode h4,
body.dark-mode h5,
body.dark-mode h6 {
    color: #e2e8f0;
}

/* 9. تحسينات للروابط في الوضع الليلي */
body.dark-mode a {
    color: #94a3b8;
}

body.dark-mode a:hover {
    color: #cbd5e1;
}

/* 10. تحسينات للأزرار في الوضع الليلي */
body.dark-mode .btn-outline-primary {
    border-color: var(--primary-color);
    color: var(--primary-color);
}

body.dark-mode .btn-outline-primary:hover {
    background: var(--primary-color);
    color: white;
}

/* 11. تحسينات للكروت في الوضع الليلي */
body.dark-mode .card {
    background: #1e293b;
    border-color: #475569;
}

body.dark-mode .card-header {
    background: linear-gradient(135deg, #475569, #334155);
}

/* 12. تحسينات للجداول في الوضع الليلي */
body.dark-mode .table {
    background: #1e293b;
    color: #e2e8f0;
}

body.dark-mode .table thead th {
    background: #334155;
    color: #e2e8f0;
    border-color: #475569;
}

body.dark-mode .table tbody tr {
    border-color: #475569;
}

body.dark-mode .table tbody tr:hover {
    background: #334155;
}

/* 13. تحسينات للأشكال والنماذج في الوضع الليلي */
body.dark-mode .form-check-input {
    background-color: #334155;
    border-color: #475569;
}

body.dark-mode .form-check-input:checked {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
}

/* 14. تحسينات للقوائم في الوضع الليلي */
body.dark-mode .list-group-item {
    background: #1e293b;
    color: #e2e8f0;
    border-color: #475569;
}

body.dark-mode .list-group-item:hover {
    background: #334155;
}

/* 15. تأثير توهج في الوضع الليلي */
body.dark-mode .glow-effect {
    box-shadow: 0 0 20px rgba(84, 116, 252, 0.3);
}

/* 16. تحسينات للشعار في الوضع الليلي */
body.dark-mode .logo img {
    border-color: rgba(84, 116, 252, 0.5);
    box-shadow: 0 4px 15px rgba(84, 116, 252, 0.2);
}

/* 17. تحسينات للهيرو في الوضع الليلي */
body.dark-mode .hero {
    background: linear-gradient(135deg, 
        rgba(84, 116, 252, 0.9) 0%, 
        rgba(0, 37, 195, 0.85) 50%, 
        rgba(84, 116, 252, 0.8) 100%),
        url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80');
}
