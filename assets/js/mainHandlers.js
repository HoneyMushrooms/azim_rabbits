function likeHandler(e) {
    let button = e.currentTarget;
    button.classList.toggle('product-card__check-icon');

    let img = button.children[0];
    img.classList.toggle('product-card__like-btn_active');
}

function compareHandler(e) {
    let button = e.currentTarget;
    button.classList.toggle('product-card__check-icon');
}

function showSeoText() {
    const parentElement = this.parentElement;

    const hiddenText = parentElement.querySelector('.seo-block__text_hidden');

    hiddenText.classList.toggle('open');
}


function showFooterCatagories() {
    const parentElement = this.parentElement;

    const hiddenText = parentElement.querySelector('.footer-category__list-hidden');
    const siblingTitle = parentElement.querySelector('.footer-category__title');
    const dropIcon = parentElement.querySelector('.footer-category__drop-icon');

    if(siblingTitle.classList.contains('remove-border')) {
        setTimeout(() => siblingTitle.classList.remove('remove-border'), 150);
    } else {
        siblingTitle.classList.add('remove-border');
    }

    dropIcon.classList.toggle('drop');
    hiddenText.classList.toggle('open');
}

document.querySelectorAll('.product-card__compare-btn').forEach(e => e.onclick = compareHandler);
document.querySelectorAll('.product-card__like-btn').forEach(e => e.onclick = likeHandler);
document.querySelectorAll('.show-seo-btn').forEach(e => e.onclick = showSeoText);
document.querySelectorAll('.footer-category__title').forEach(e => {
    if(!e.parentElement.parentElement.classList.contains('footer-category_contacts')) {
        e.onclick = showFooterCatagories;
    }
});

const blogData = [
    {
        filter: 'news',
        date: "1 мая 2024",
        readTime: "3 мин для чтения",
        tag: "#Бизнес",
        text: "Сайт рыбат екст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия."
    },
    {
        filter: 'news',
        date: "1 мая 2024",
        readTime: "3 мин для чтения",
        tag: "#Бизнес",
        text: "Сайт рыбат екст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия."
    },
    {
        filter: 'reviews',
        date: "1 мая 2024",
        readTime: "3 мин для чтения",
        tag: "#Бизнес",
        text: "Сайт рыбат екст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия."
    },
    {
        filter: 'reviews',
        date: "1 мая 2024",
        readTime: "3 мин для чтения",
        tag: "#Бизнес",
        text: "Сайт рыбат екст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия."
    },
];

document.querySelectorAll('.blog__link').forEach(e => e.onclick = printBlogArticles);
const blogArticles = document.querySelector('.blog__articles');

function printBlogArticles(event) {
    if(event) {
        event.preventDefault();
        document.querySelectorAll('.blog__link h2').forEach(e => e.classList.remove('active'));
        event.target.classList.add('active');
        const aElement = event.target.closest('.blog__link');
        const dataBlogValue = aElement.getAttribute('data-blog');
        const articles = document.querySelectorAll('.blog-article');

        if(articles && dataBlogValue) {
            flag = true;
            articles.forEach( e => {
                if(dataBlogValue == 'all') {
                    e.style.display = '';
                } else if (dataBlogValue == e.getAttribute('data-blog')) {
                    e.style.display = '';
                    if(flag) {
                        e.style.borderTop = '1px solid #E6E6F0';
                        flag = false;
                    }
                } else {
                    e.style.display = 'none';
                }
            })
        }

    } else {
        blogData.forEach(e => {
            const blogArticleDiv = document.createElement('div');
            blogArticleDiv.setAttribute('data-blog', e.filter);
            
            const labelsDiv = document.createElement('div');
            labelsDiv.classList.add('blog-article__labels');
            
            const dateSpan = document.createElement('span');
            dateSpan.classList.add('blog-article__label', 'blog-article__label_date');
            dateSpan.textContent = e.date;
            labelsDiv.append(dateSpan);
            
            const readTimeSpan = document.createElement('span');
            readTimeSpan.classList.add('blog-article__label', 'blog-article__label_read-time');
            readTimeSpan.innerHTML = `<img src="./assets/img/favicon/time.svg" alt="icon" width="16px" height="16px"> ${e.readTime}`;
            labelsDiv.append(readTimeSpan);
            
            const tagSpan = document.createElement('span');
            tagSpan.classList.add('blog-article__label', 'blog-article__label_tag');
            tagSpan.textContent = e.tag;
            labelsDiv.append(tagSpan);
            
            const textParagraph = document.createElement('p');
            textParagraph.classList.add('blog-article__text');
            textParagraph.textContent = e.text;
            
            blogArticleDiv.appendChild(labelsDiv);
            blogArticleDiv.appendChild(textParagraph);
            blogArticles.appendChild(blogArticleDiv);
            blogArticleDiv.classList.add('blog-article');
        });
    }
}

printBlogArticles();

const inputField = document.getElementById('header__search-pc');
const searchOutput = document.querySelector('.header__search-output_pc');

inputField.addEventListener('focus', function() {
    searchOutput.style.display = 'block';
    document.querySelector('main').style.background = 'rgba(0, 0, 0, 0.5)';
    document.querySelector('main').style.opacity = '0.5';
    // document.querySelector('body').style.overflowY = 'hidden';
    document.querySelector('.header-form__cross-btn').style.display = 'block';
    document.querySelector('.header__bottom-label').style.background = 'rgba(0, 0, 0, 0.5)';
    document.querySelector('.header__bottom-label').style.opacity = '0.5';
    document.querySelector('.catalog-navigation').style.display = 'none';
});

inputField.addEventListener('blur', function() {
    searchOutput.style.display = 'none';
    if((document.documentElement.scrollTop < 20)) {
        document.querySelector('.catalog-navigation').style.display = '';
    }
    document.querySelector('main').style.background = '';
    document.querySelector('main').style.opacity = '';
    // document.querySelector('body').style.overflowY = '';
    document.querySelector('.header-form__cross-btn').style.display = 'none';
    document.querySelector('.header__bottom-label').style.background = '';
    document.querySelector('.header__bottom-label').style.opacity = '';
});

window.onscroll = () => scrollFunction();

function scrollFunction() {
    if ((document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) && window.innerWidth <= 550) {
        document.querySelector('.btn-scroll-top').style.display = 'flex';
        document.querySelector('.btn-scroll-top').onclick = function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }    
    } else {
      document.querySelector('.btn-scroll-top').style.display = 'none';
    }
}
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints;
const catalogMenu = document.querySelector('.catalog-menu');
catalogNavigation = document.querySelector('.catalog-navigation');

document.querySelectorAll('.catalog-navigation__list-link').forEach( link => {

    if(isTouchDevice) {
        link.addEventListener('click', function(event) {
            const dataCatalog = link.getAttribute('data-catalog');
            if(dataCatalog) {
                catalogMenu.style.display = 'block';
                document.querySelector('.catalog-navigation').style.background = '#FFFFFF';
                event.preventDefault();
            } else {
                catalogMenu.style.display = 'none';
                return true;  
            }
        }) 
    } else {
        link.addEventListener('mouseover', function() {
            document.querySelector('.catalog-navigation').style.background = '#FFFFFF';
            catalogMenu.style.display = 'block';
        });
    }
});

document.querySelector('.catalog-navigation__title-btn').addEventListener('click', function() {    
    if (catalogNavigation.style.display === 'none') {
        catalogNavigation.style.display = 'flex';
    } else {
        catalogNavigation.style.display = 'none';
    }
});

document.addEventListener('click', function(event) {
    if (!catalogMenu.contains(event.target) && !catalogNavigation.contains(event.target)) {
        catalogMenu.style.display = 'none';
        // document.querySelector('.catalog-navigation').style.display = 'none';
        if(window.innerWidth > 1200) {
            document.querySelector('.catalog-navigation').style.background = 'unset';
        }
    }
});

document.querySelector('.header__catalog-btn').onclick = function (event) {
    const catalog = document.querySelector('.catalog-navigation');
    catalog.style.display = 'flex';
    catalog.style.background = '#FFFFFF';
    event.stopPropagation();
}

window.addEventListener('scroll', function() {
    const catalogBtn = document.querySelector('.header__catalog-btn');
    const middleLabel = document.querySelector('.middle-label__row');
    const catalog = document.querySelector('.catalog-navigation');
    
    if (window.scrollY > 30 && window.innerWidth > 767) {
        catalogBtn.style.display = 'flex';
        catalog.style.display = 'none';
        catalog.style.top = '64px';
        document.querySelector('.catalog-navigation__title-btn').disabled = true;
        middleLabel.style.gridTemplateColumns = 'auto auto 1fr auto';
        if(window.innerWidth < 1000) {
            document.querySelectorAll('.header__group-icons span').forEach(span => {
                span.style.display = 'none';
            });
            document.querySelectorAll('.header__group-icon').forEach(group => {
                group.style.justifyContent = 'center';
            });
        }
    } else {
        document.querySelector('.catalog-navigation__title-btn').disabled = false;
        catalog.style.top = '';
        catalog.style.background = '';
        catalog.style.display = 'flex';
        catalogBtn.style.display = 'none';
        middleLabel.style.gridTemplateColumns = 'auto 1fr auto';
        if(window.innerWidth < 1000) {
            document.querySelectorAll('.header__group-icons span').forEach(span => {
                span.style.display = '';
            });
            document.querySelectorAll('.header__group-icon').forEach(group => {
                group.style.justifyContent = '';
            });
        }
    }
});

document.querySelector('.mobile-search-input').onclick = mobileSearchOpen;
document.querySelector('.search-display').onclick = mobileSearchOpen;
document.querySelector('.mobile-search__arrow').onclick = mobileSearchClose;
const mobileSearchOutput = document.querySelector('.mobile-search-output');

function mobileSearchOpen() {
    mobileSearchOutput.classList.add('mobile-search-output_active');
    document.body.style.overflowY = 'hidden';
}

function mobileSearchClose() {
    mobileSearchOutput.classList.remove('mobile-search-output_active');
    document.body.style.overflowY = '';
}

const mobileSearchBodyDefault = document.querySelector('.mobile-search__body_default');
const mobileSearchBodyActive = document.querySelector('.mobile-search__body_active');

document.querySelector('.search-output_mob').addEventListener('input', function() {
    const inputElement = this;

    if (inputElement.value.trim() !== '') {
        mobileSearchBodyDefault.style.display = 'none';
        mobileSearchBodyActive.style.display = 'flex';
    } else {
        mobileSearchBodyDefault.style.display = 'flex';
        mobileSearchBodyActive.style.display = 'none';
    }
});



