/* ==================== بيانات المنتجات ==================== */
const productsData = {
    // اللوشنات
    lotions: [
        {
            id: 'l1',
            name: 'لوشن مفتح للجسم',
            price: 45000,
            image: 'lotion-brightening.jpg',
            ingredients: 'ألفا أربوتين , نياسنمايد, زبدة الشيا , زيت جوز الهند',
            benefits: 'يساعد على توحيد لون البشرة وتفتيح البقع الداكنة مع ترطيب .',
            usage: 'يُدهن على جسم نظيف يومياً بعد الاستحمام .'
        },
        {
            id: 'l2',
            name: 'لوشن بريحة دوف',
            price: 40000,
            image: 'lotion-dove.jpg',
            ingredients: ' زبدة الشيا , زيت جوز الهند , غليسرين .',
            benefits: 'يمنحك إحساساً بالنظافة مع نعومة للجلد.',
            usage: 'يستخدم يومياً على الجسم للترطيب .'
        },
        {
            id: 'l3',
            name: 'لوشن بريحة الرمان',
            price: 42000,
            image: 'lotion-pomegranate.jpg',
            ingredients: ' زبدة الشيا, زيت جوز الهند, غليسرين.',
            benefits: 'يمنحك رائحة جميلة مع نعومة للجلد.',
            usage: 'يستخدم يومياً على الجسم للترطيب .'
        },
        {
            id: 'l4',
            name: 'لوشن بريحة اورغيت بينك',
            price: 68000,
            image: 'lotion-orgate.jpg',
            ingredients: 'زبدة الشيا , زيت جوز الهند ,غليسرين ',
            benefits: 'رائحة أنثوية مع نعومة وترطيب للجلد.',
            usage: 'يدهن على البشرة بعد الاستحمام مباشرة .'
        }
    ],

    // السكرابات
    bodyscrubs: [
        {
            id: 's1',
            name: 'سكراب بالنيلة الزرقاء',
            price: 38000,
            image: 'scrub-blue.jpg',
            ingredients: 'بودرة النيلة المغربية الزرقاء، زبدة الشيا, زيت جوز الهند.',
            benefits: 'يساعد في تفتيح المناطق الداكنة وإزالة الجلد الميت وتحسين ملمس البشرة.',
            usage: 'يُدلك بحركات دائرية على جسم رطب مرتين أسبوعياً ثم يُشطف بالماء.'
        },
        {
            id: 's2',
            name: 'سكراب بالكركديه',
            price: 35000,
            image: 'scrub-hibiscus.jpg',
            ingredients: 'مستخلص الكركديه , غزبدة الشيا, زيت جوز الهند',
            benefits: 'يمد البشرة بمضادات الأكسدة ويعطي نضارة طبيعية للجسم.',
            usage: 'يستعمل مرة إلى مرتين أسبوعياً على بشرة مبللة.'
        },
        {
            id: 's3',
            name: 'سكراب بالورد',
            price: 36000,
            image: 'scrub-rose.jpg',
            ingredients: 'زيت الورد الطبيعي , زبدة الشيا , زيت جوز الهند',
            benefits: 'تقشير لطيف مع رائحة ورد طبيعية وترطيب عميق.',
            usage: 'دلكي الجسم بحركات دائرية ثم اغسليه بالماء الدافيء.'
        }
    ],

    // الشاور جل
    showergel: [
        {
            id: 'sg1',
            name: 'شاور جل بريحة دوف',
            price: 30000,
            image: 'shower-dove.jpg',
            ingredients: 'غليسرين ',
            benefits: 'تنظيف لطيف لا يجفف البشرة ويتركها ناعمة برائحة النظافة.',
            usage: 'ضعي كمية على الليفة ووزعي الرغوة على الجسم ثم اشطفيهاي.'
        },
        {
            id: 'sg2',
            name: 'شاور جل بريحة اورغيت بينك',
            price: 32000,
            image: 'shower-orgate.jpg',
            ingredients: '   غليسرين .',
            benefits: ' ويمنح رائحة وردية استثنائية.',
            usage: 'يستخدم يومياً أثناء الاستحمام.'
        },
        {
            id: 'sg3',
            name: 'شاور جل بريحة مسك الرمان',
            price: 34000,
            image: 'shower-pomegranate.jpg',
            ingredients: '    غليسرين,  مواد منظفة لطيفة.',
            benefits: 'ينظف الجسم ',
            usage: 'مليت ما عاد اعرف شو اكتب '
        }
    ],

    // باكجات الجسم
    bodypackages: [
        {
            id: 'bp1',
            name: 'بكج دوف',
            price: 95000,
            image: 'pkg-dove.jpg',
            ingredients: 'مليت كمان',
            benefits: 'مليت',
            usage: 'مليت'
        },
        {
            id: 'bp2',
            name: 'بكج رمان',
            price: 105000,
            image: 'pkg-pomegranate.jpg',
            ingredients: 'مليت',
            benefits: 'مليت',
            usage: '  اي حاجة تعبي البطاقة'
        },
        {
            id: 'bp3',
            name: 'بكج ورد',
            price: 98000,
            image: 'pkg-rose.jpg',
            ingredients: ' وييوويي',
            benefits: 'واوي واوي واوي سرار عالحاوي',
            usage: 'واوي واوي واوي جودي عالحاوي'
        }
    ]
};

/* ==================== المتغيرات العامة ==================== */
window.pageHistory = ['page-home'];
window.pathHistory = ['الصفحة الرئيسية'];
window.cart = JSON.parse(localStorage.getItem('skinloop_cart')) || [];

// التهيئة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    renderAllProducts();
    updateCartUI();
});

/* ==================== وظائف التنقل ==================== */
window.navigateTo = function(pageId, pathTitle) {
    const activePages = document.querySelectorAll('.page.active');
    activePages.forEach(p => p.classList.remove('active'));

    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        window.pageHistory.push(pageId);
        window.pathHistory.push(pathTitle);
        updateBreadcrumb();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
};

window.goBack = function() {
    if (window.pageHistory.length > 1) {
        const currentPage = window.pageHistory.pop();
        window.pathHistory.pop();

        document.getElementById(currentPage).classList.remove('active');

        const previousPageId = window.pageHistory[window.pageHistory.length - 1];
        document.getElementById(previousPageId).classList.add('active');

        updateBreadcrumb();
    }
};

function updateBreadcrumb() {
    const backBtn = document.getElementById('back-btn');
    const pathSpan = document.getElementById('current-path');

    if (window.pageHistory.length > 1) {
        backBtn.style.display = 'inline-block';
    } else {
        backBtn.style.display = 'none';
    }

    pathSpan.textContent = window.pathHistory[window.pathHistory.length - 1];
}

/* ==================== عرض المنتجات ==================== */
function renderAllProducts() {
    for (const category in productsData) {
        const container = document.getElementById(`grid-${category}`);
        if (container) {
            container.innerHTML = '';
            productsData[category].forEach(product => {
                const card = document.createElement('div');
                card.className = 'product-card';
                card.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" class="product-img touch-effect" onclick="openProductModal('${product.id}', '${category}')" onerror="this.src='https://via.placeholder.com/300x300/fde8f0/d47a96?text=صورة+المنتج'">
                    <div class="product-info">
                        <div class="product-title">${product.name}</div>
                        <div class="product-price">${product.price.toLocaleString()} ل.س</div>
                        <button class="btn-primary touch-effect" onclick="addToCart('${product.id}', '${category}')">إضافة للسلة 🛒</button>
                    </div>
                `;
                container.appendChild(card);
            });
        }
    }
}

/* ==================== تفاصيل المنتج ==================== */
window.openProductModal = function(productId, category) {
    const product = productsData[category].find(p => p.id === productId);
    if (!product) return;

    const modalImg = document.getElementById('modal-img');
    modalImg.src = product.image;
    modalImg.onerror = function() {
        this.src = 'https://via.placeholder.com/300x300/fde8f0/d47a96?text=صورة+المنتج';
    };

    document.getElementById('modal-title').textContent = product.name;
    document.getElementById('modal-price').textContent = `${product.price.toLocaleString()} ل.س`;
    document.getElementById('modal-ingredients').textContent = product.ingredients;
    document.getElementById('modal-benefits').textContent = product.benefits;
    document.getElementById('modal-usage').textContent = product.usage;

    const addBtn = document.getElementById('modal-add-btn');
    addBtn.onclick = () => {
        addToCart(productId, category);
        closeModal();
    };

    document.getElementById('product-modal').style.display = 'flex';
};

window.closeModal = function() {
    document.getElementById('product-modal').style.display = 'none';
};

/* ==================== السلة الشرائية ==================== */
window.addToCart = function(productId, category) {
    let product;
    if (category && productsData[category]) {
        product = productsData[category].find(p => p.id === productId);
    } else {
        for (const cat in productsData) {
            const found = productsData[cat].find(p => p.id === productId);
            if (found) { product = found; break; }
        }
    }

    if (!product) return;

    const existingIndex = window.cart.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
        window.cart[existingIndex].qty += 1;
    } else {
        window.cart.push({ ...product, qty: 1 });
    }

    saveCart();
    updateCartUI();
    alert(`تمت إضافة "${product.name}" إلى السلة بنجاح! ✨`);
};

window.changeQty = function(productId, delta) {
    const itemIndex = window.cart.findIndex(item => item.id === productId);
    if (itemIndex > -1) {
        window.cart[itemIndex].qty += delta;
        if (window.cart[itemIndex].qty <= 0) {
            window.cart.splice(itemIndex, 1);
        }
    }
    saveCart();
    updateCartUI();
};

function saveCart() {
    localStorage.setItem('skinloop_cart', JSON.stringify(window.cart));
}

function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    let totalQty = 0;
    let totalPrice = 0;
    cartItemsContainer.innerHTML = '';

    if (window.cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="text-align:center; color:#888;">السلة فارغة حالياً 🌸</p>';
    } else {
        window.cart.forEach(item => {
            totalQty += item.qty;
            totalPrice += item.price * item.qty;

            const itemEl = document.createElement('div');
            itemEl.className = 'cart-item';
            itemEl.innerHTML = `
                <div>
                    <strong>${item.name}</strong><br>
                    <small>${item.price.toLocaleString()} ل.س</small>
                </div>
                <div class="cart-item-controls">
                    <button onclick="changeQty('${item.id}', -1)">-</button>
                    <span style="margin: 0 8px;">${item.qty}</span>
                    <button onclick="changeQty('${item.id}', 1)">+</button>
                </div>
            `;
            cartItemsContainer.appendChild(itemEl);
        });
    }

    cartCount.textContent = totalQty;
    cartTotal.textContent = totalPrice.toLocaleString();
}

window.toggleCart = function() {
    const cartModal = document.getElementById('cart-modal');
    if (cartModal.style.display === 'flex') {
        cartModal.style.display = 'none';
    } else {
        cartModal.style.display = 'flex';
    }
};

/* ==================== الواتساب ==================== */
window.sendToWhatsApp = function() {
    if (window.cart.length === 0) {
        alert('سلتك فارغة! أضيفي بعض المنتجات أولاً ✨');
        return;
    }

    const phoneNumber = '0969623485';
    let message = 'مرحباً SKINLOOP 🌸، أرغب بتأكيد الطلبية التالية:\n\n';
    let total = 0;

    window.cart.forEach((item, index) => {
        const itemTotal = item.price * item.qty;
        total += itemTotal;
        message += `${index + 1}. ${item.name}\n   - العدد: ${item.qty}\n   - السعر: ${itemTotal.toLocaleString()} ل.س\n\n`;
    });

    message += `--------------------\n💰 المجموع الإجمالي: ${total.toLocaleString()} ل.س\n\nأرجو تأكيد الطلب والتوصيل!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
};

window.onclick = function(event) {
    const productModal = document.getElementById('product-modal');
    const cartModal = document.getElementById('cart-modal');
    if (event.target === productModal) closeModal();
    if (event.target === cartModal) toggleCart();
};