        // Set current year in footer
        document.getElementById('current-year').textContent = new Date().getFullYear();
        
        // Page navigation
        const pages = document.querySelectorAll('.tool-page');
        const navLinks = document.querySelectorAll('.nav-link');
        
        // Show home page by default
        showPage('home');
        
        // Handle navigation clicks
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const pageId = this.getAttribute('data-page');
                
                // Update active nav link
                navLinks.forEach(nav => nav.classList.remove('active'));
                this.classList.add('active');
                
                // Show selected page
                showPage(pageId);
                
                // Scroll to top
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });
        
        // Handle tool card buttons
        document.querySelectorAll('.tool-btn[data-page]').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const pageId = this.getAttribute('data-page');
                
                // Update active nav link
                navLinks.forEach(nav => nav.classList.remove('active'));
                document.querySelector(`.nav-link[data-page="${pageId}"]`).classList.add('active');
                
                // Show selected page
                showPage(pageId);
                
                // Scroll to top
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });
        
        // Handle back home buttons
        document.querySelectorAll('.back-home').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Update active nav link
                navLinks.forEach(nav => nav.classList.remove('active'));
                document.querySelector('.nav-link[data-page="home"]').classList.add('active');
                
                // Show home page
                showPage('home');
                
                // Scroll to top
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });
        
        function showPage(pageId) {
            // Hide all pages
            pages.forEach(page => {
                page.classList.remove('active');
            });
            
            // Show selected page
            document.getElementById(`${pageId}-page`).classList.add('active');
            
            // Update URL hash
            window.location.hash = pageId;
        }
        
        // Handle hash changes
        window.addEventListener('hashchange', function() {
            const hash = window.location.hash.substring(1);
            if (hash && document.querySelector(`.nav-link[data-page="${hash}"]`)) {
                // Update active nav link
                navLinks.forEach(nav => nav.classList.remove('active'));
                document.querySelector(`.nav-link[data-page="${hash}"]`).classList.add('active');
                
                // Show selected page
                showPage(hash);
            }
        });
        
        // Text Tools Functionality
        const textInput = document.getElementById('text-input');
        const upperBtn = document.getElementById('upper-btn');
        const lowerBtn = document.getElementById('lower-btn');
        const swapBtn = document.getElementById('swap-btn');
        const randomBtn = document.getElementById('random-btn');
        const extraSpacesBtn = document.getElementById('extra-spaces-btn');
        const extraLinesBtn = document.getElementById('extra-lines-btn');
        const duplicateLinesBtn = document.getElementById('duplicate-lines-btn');
        const findInput = document.getElementById('find-input');
        const replaceInput = document.getElementById('replace-input');
        const replaceBtn = document.getElementById('replace-btn');
        const clearBtn = document.getElementById('clear-btn');
        const copyBtn = document.getElementById('copy-btn');
        
        // Text tool functions
        upperBtn.addEventListener('click', () => {
            textInput.value = textInput.value.toUpperCase();
        });
        
        lowerBtn.addEventListener('click', () => {
            textInput.value = textInput.value.toLowerCase();
        });
        
        swapBtn.addEventListener('click', () => {
            textInput.value = textInput.value.split('').map(char => {
                return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
            }).join('');
        });
        
        randomBtn.addEventListener('click', () => {
            textInput.value = textInput.value.split('').map(char => {
                return Math.random() > 0.5 ? char.toUpperCase() : char.toLowerCase();
            }).join('');
        });
        
        extraSpacesBtn.addEventListener('click', () => {
            textInput.value = textInput.value.replace(/\s+/g, ' ').trim();
        });
        
        extraLinesBtn.addEventListener('click', () => {
            textInput.value = textInput.value.replace(/(\r\n|\n|\r){2,}/g, '\n').trim();
        });
        
        duplicateLinesBtn.addEventListener('click', () => {
            const lines = textInput.value.split("\n");
            const uniqueLines = [...new Set(lines)];
            textInput.value = uniqueLines.join("\n").trim();
        });
        
        replaceBtn.addEventListener('click', () => {
            const find = findInput.value.trim();
            const replaceWith = replaceInput.value.trim();
            if (find === "") {
                alert("الرجاء إدخال نص للبحث عنه.");
                return;
            }
            const regex = new RegExp(find, 'g');
            textInput.value = textInput.value.replace(regex, replaceWith);
        });
        
        clearBtn.addEventListener('click', () => {
            if (confirm("هل أنت متأكد من مسح النص؟")) {
                textInput.value = "";
            }
        });
        
        copyBtn.addEventListener('click', () => {
            if (textInput.value.trim() === "") {
                alert("لا يوجد نص للنسخ!");
                return;
            }
            navigator.clipboard.writeText(textInput.value).then(() => {
                alert("تم نسخ النص إلى الحافظة!");
            }).catch(err => {
                alert("فشل نسخ النص: " + err);
            });
        });
        
        // HTML to XML Converter
        const htmlInput = document.getElementById('html-input');
        const xmlOutput = document.getElementById('xml-output');
        const convertXmlBtn = document.getElementById('convert-xml-btn');
        const clearXmlBtn = document.getElementById('clear-xml-btn');
        const copyXmlBtn = document.getElementById('copy-xml-btn');
        const downloadXmlBtn = document.getElementById('download-xml-btn');
        
        convertXmlBtn.addEventListener('click', () => {
            const htmlCode = htmlInput.value;
            if (!htmlCode.trim()) {
                alert("الرجاء إدخال كود HTML أولاً.");
                return;
            }
            
            // Simple HTML to XML conversion
            const encodedCode = htmlCode
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/&/g, '&amp;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&apos;');
            
            const xmlCode = `<?xml version="1.0" encoding="UTF-8"?>\n<converted>\n${encodedCode}\n</converted>`;
            xmlOutput.value = xmlCode;
        });
        
        clearXmlBtn.addEventListener('click', () => {
            htmlInput.value = '';
            xmlOutput.value = '';
        });
        
        copyXmlBtn.addEventListener('click', () => {
            if (xmlOutput.value.trim() === "") {
                alert("لا يوجد محتوى XML للنسخ!");
                return;
            }
            navigator.clipboard.writeText(xmlOutput.value).then(() => {
                alert("تم نسخ XML إلى الحافظة!");
            }).catch(err => {
                alert("فشل نسخ XML: " + err);
            });
        });
        
        downloadXmlBtn.addEventListener('click', () => {
            if (xmlOutput.value.trim() === "") {
                alert("لا يوجد محتوى XML لتحميله!");
                return;
            }
            
            const blob = new Blob([xmlOutput.value], { type: 'text/xml' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'converted.xml';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        });
        
        // Privacy Policy Generator
        const generatePrivacyBtn = document.getElementById('generate-privacy-btn');
        const privacyResult = document.getElementById('privacy-result');
        
        generatePrivacyBtn.addEventListener('click', () => {
            const websitename = document.getElementById('pp-websitename').value;
            const websiteurl = document.getElementById('pp-websiteurl').value;
            const email = document.getElementById('pp-email').value;
            
            if (!websitename || !websiteurl || !email) {
                alert("الرجاء ملء جميع الحقول.");
                return;
            }
            
            const privacyPolicy = `
                <h1>سياسة الخصوصية لـ ${websitename}</h1>
                <p>تعتبر خصوصية زوار موقعنا ذات أهمية بالغة بالنسبة لنا. تحتوي وثيقة سياسة الخصوصية هذه على أنواع المعلومات التي يتم جمعها وتسجيلها بواسطة ${websitename} وكيفية استخدامنا لها.</p>
                
                <h2>الموافقة</h2>
                <p>باستخدام موقعنا، فإنك توافق على سياسة الخصوصية الخاصة بنا وتوافق على شروطها.</p>
                
                <h2>المعلومات التي نجمعها</h2>
                <p>يتم تقديم المعلومات الشخصية التي يُطلب منك تقديمها، والأسباب التي تدفعك لتقديمها، في الوقت الذي نطلب منك تقديم معلوماتك الشخصية.</p>
                <p>إذا اتصلت بنا مباشرة، قد نتلقى معلومات إضافية عنك مثل اسمك وعنوان بريدك الإلكتروني ورقم هاتفك ومحتويات الرسالة و/أو المرفقات التي قد ترسلها إلينا وأي معلومات أخرى قد تختار تقديمها.</p>
                
                <h2>كيف نستخدم معلوماتك</h2>
                <p>نستخدم المعلومات التي نجمعها بطرق متنوعة، بما في ذلك:</p>
                <ul>
                    <li>توفير وتشغيل وصيانة موقعنا</li>
                    <li>تحسين موقعنا وتخصيصه وتوسيعه</li>
                    <li>فهم وتحليل كيفية استخدامك لموقعنا</li>
                    <li>تطوير منتجات وخدمات وميزات ووظائف جديدة</li>
                    <li>التواصل معك، إما مباشرة أو من خلال أحد شركائنا</li>
                    <li>إرسال رسائل البريد الإلكتروني إليك</li>
                    <li>العثور على الاحتيال ومنعه</li>
                </ul>
                
                <h2>ملفات السجلات</h2>
                <p>يتبع ${websitename} إجراءً قياسيًا لاستخدام ملفات السجلات. تسجل هذه الملفات الزوار عندما يزورون المواقع الإلكترونية. تقوم جميع شركات الاستضافة بهذا الأمر وهي جزء من تحليلات خدمات الاستضافة.</p>
                
                <h2>اتصل بنا</h2>
                <p>إذا كان لديك أي أسئلة أو اقتراحات بشأن سياسة الخصوصية الخاصة بنا، لا تتردد في الاتصال بنا على ${email}.</p>
            `;
            
            privacyResult.innerHTML = privacyPolicy;
            privacyResult.style.display = 'block';
            
            // Scroll to result
            privacyResult.scrollIntoView({ behavior: 'smooth' });
        });
        
        // Robots.txt Generator
        const generateRobotsBtn = document.getElementById('generate-robots-btn');
        const robotsResult = document.getElementById('robots-result');
        const copyRobotsBtn = document.getElementById('copy-robots-btn');
        
        generateRobotsBtn.addEventListener('click', () => {
            const websiteUrl = document.getElementById('robots-url').value;
            const platform = document.getElementById('robots-platform').value;
            
            if (!websiteUrl) {
                alert("الرجاء إدخال رابط الموقع.");
                return;
            }
            
            let robotsTxtContent = "";
            const baseUrl = websiteUrl.replace(/\/$/, '');
            
            if (platform === "blogger") {
                robotsTxtContent = `User-agent: *
Disallow: /search
Allow: /
Sitemap: ${baseUrl}/sitemap.xml

User-agent: Mediapartners-Google
Disallow:

User-agent: *
Disallow: /search?q=*
Disallow: /search/label/*
Allow: /`;

            } else if (platform === "wordpress") {
                robotsTxtContent = `User-agent: *
Disallow: /wp-admin/
Allow: /wp-admin/admin-ajax.php
Disallow: /wp-includes/
Allow: /wp-includes/js/
Allow: /wp-includes/images/
Disallow: /wp-login.php
Disallow: /wp-register.php

Sitemap: ${baseUrl}/sitemap_index.xml`;

            } else {
                robotsTxtContent = `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/
Disallow: /tmp/

Sitemap: ${baseUrl}/sitemap.xml`;
            }
            
            robotsResult.textContent = robotsTxtContent;
            robotsResult.style.display = 'block';
            copyRobotsBtn.style.display = 'inline-block';
            
            // Scroll to result
            robotsResult.scrollIntoView({ behavior: 'smooth' });
        });
        
        copyRobotsBtn.addEventListener('click', () => {
            const robotsText = robotsResult.textContent;
            navigator.clipboard.writeText(robotsText).then(() => {
                alert("تم نسخ محتوى robots.txt إلى الحافظة!");
            }).catch(err => {
                alert("فشل النسخ: " + err);
            });
        });
        
        // Terms & Conditions Generator
        const generateTermsBtn = document.getElementById('generate-terms-btn');
        const termsResult = document.getElementById('terms-result');
        const copyTermsBtn = document.getElementById('copy-terms-btn');
        const downloadTermsBtn = document.getElementById('download-terms-btn');
        const copiedMessage = document.getElementById('copied-message');
        const actionButtons = document.querySelector('.action-buttons');
        
        generateTermsBtn.addEventListener('click', () => {
            const websitename = document.getElementById('terms-websitename').value;
            const websiteurl = document.getElementById('terms-websiteurl').value;
            const email = document.getElementById('terms-email').value;
            
            if (!websitename || !websiteurl || !email) {
                alert("الرجاء ملء جميع الحقول.");
                return;
            }
            
            const termsAndConditions = `
                <h1>الشروط والأحكام لـ ${websitename}</h1>
                
                <h2>1. القبول</h2>
                <p>من خلال الوصول إلى واستخدام موقع ${websitename} (${websiteurl})، فإنك تقبل وتوافق على الالتزام بهذه الشروط والأحكام.</p>
                
                <h2>2. استخدام الموقع</h2>
                <p>يُمنع استخدام هذا الموقع لأي غرض غير قانوني أو غير مصرح به في هذه الشروط.</p>
                <p>أنت توافق على عدم استخدام الموقع بطريقة قد تعطل أو تعيق أو تضعف أداء الموقع أو تتداخل مع استخدام الآخرين للموقع.</p>
                
                <h2>3. المحتوى</h2>
                <p>جميع المحتويات الموجودة على هذا الموقع، بما في ذلك النصوص والصور والرسومات والشعارات، هي ملك لـ ${websitename} ومحمية بموجب قوانين حقوق النشر.</p>
                
                <h2>4. الروابط الخارجية</h2>
                <p>قد يحتوي موقعنا على روابط لمواقع خارجية. نحن لا نتحمل أي مسؤولية عن محتوى أو ممارسات خصوصية هذه المواقع.</p>
                
                <h2>5. التعديلات</h2>
                <p>تحتفظ ${websitename} بالحق في تعديل هذه الشروط والأحكام في أي وقت. سيتم نشر أي تغييرات على هذه الصفحة.</p>
                
                <h2>6. الاتصال</h2>
                <p>إذا كان لديك أي استفسارات بخصوص هذه الشروط والأحكام، يرجى الاتصال بنا على: ${email}</p>
                
                <p><strong>تاريخ السريان:</strong> ${new Date().toLocaleDateString('ar-SA')}</p>
            `;
            
            termsResult.innerHTML = termsAndConditions;
            termsResult.style.display = 'block';
            actionButtons.style.display = 'flex';
            
            // Scroll to result
            termsResult.scrollIntoView({ behavior: 'smooth' });
        });
        
        copyTermsBtn.addEventListener('click', () => {
            const termsText = termsResult.innerText;
            navigator.clipboard.writeText(termsText).then(() => {
                copiedMessage.style.display = 'block';
                setTimeout(() => {
                    copiedMessage.style.display = 'none';
                }, 2000);
            }).catch(err => {
                alert("فشل النسخ: " + err);
            });
        });
        
        downloadTermsBtn.addEventListener('click', () => {
            const termsText = termsResult.innerText;
            const blob = new Blob([termsText], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'الشروط والأحكام.txt';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        })
