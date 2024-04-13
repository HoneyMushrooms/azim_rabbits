const burgerButton = document.querySelector('.header__burger');
const mobileNav = document.querySelector('.mobile-nav');
const crossButton = document.querySelector('.mobile-nav__cross');

const burgerMenu = () => {
    mobileNav.classList.toggle('mobile-nav_active');
    historyBurger.length = 0;
    catalogNavigationColumnMobileNav.style.display = '';
    imgMobileNav.src = imgMobileNavSrcDefault;
    headerNavBottomMobileNav.classList.remove('display-none');
    phoneWindowColumnMobileNav.classList.remove('display-none');
    headerNavTopMobile.classList.remove('display-none');
    setTimeout(() => {
        document.querySelector('.header__middle-label').classList.toggle('position-relative');
        document.querySelector('.header__middle-label').classList.toggle('background-unset');
        document.querySelector('.header__search-input.mobile-search-input').classList.toggle('background-unset');
        document.querySelector('.btn-scroll-top').classList.toggle('display-none');
        document.querySelector('.phone_bottom__label').classList.toggle('display-none');
        document.querySelector('.header__top-label').classList.toggle('border-gray_60');
        document.body.classList.toggle('body-shadow');
        document.body.classList.toggle('overflowY-hidden');
        crossButton.classList.toggle('display-none');
    }, 300);
}

const mobileNavButton = document.querySelector('.catalog-navigation__title_mobile-nav');
const catalogNavigationColumnMobileNav = document.querySelector('.catalog-navigation__column_mobile-nav');
const imgMobileNav = document.querySelector('.catalog-navigation__title_mobile-nav img');
const imgMobileNavSrcDefault = imgMobileNav.src;

const headerNavBottomMobileNav = document.querySelector('.header__nav-bottom_mobile-nav');
const phoneWindowColumnMobileNav = document.querySelector('.phone-window__column_mobile-nav');
const headerNavTopMobile = document.querySelector('.header__nav-top_mobile');

const historyBurger = [];

mobileNavButton.addEventListener('click', function(event) {

    if(historyBurger.length) {
        const lastElemet = historyBurger.pop();
        const mobileNavColumn = document.querySelector('.mobile-nav__column');
    
        for (let i = 0; i < mobileNavColumn.children.length; i++) {
            if(i === 0) continue;
            mobileNavColumn.children[i].classList.add('display-none');
        }

        if(lastElemet == 1) {
            catalogNavigationColumnMobileNav.style.cssText = 'display: inline !important';
            imgMobileNav.src = './assets/img/favicon/arrow_left.svg';
            headerNavBottomMobileNav.classList.add('display-none');
            phoneWindowColumnMobileNav.classList.add('display-none');
            headerNavTopMobile.classList.add('display-none');
        }

        const historyResponse = document.querySelector(`[data-response="${+lastElemet - 1}"]`);
        if(historyResponse?.classList.contains('display-none')) {
            historyResponse.classList.remove('display-none');
            historyResponse.style.display = 'flex';
        }

        return;
    }

    if(catalogNavigationColumnMobileNav.style.display == '') {
        catalogNavigationColumnMobileNav.style.cssText = 'display: inline !important';
        imgMobileNav.src = './assets/img/favicon/arrow_left.svg';
        headerNavBottomMobileNav.classList.add('display-none');
        phoneWindowColumnMobileNav.classList.add('display-none');
        headerNavTopMobile.classList.add('display-none');
    } else if(catalogNavigationColumnMobileNav.style.display === 'inline') {
        catalogNavigationColumnMobileNav.style.display = '';
        imgMobileNav.src = imgMobileNavSrcDefault;
        headerNavBottomMobileNav.classList.remove('display-none');
        phoneWindowColumnMobileNav.classList.remove('display-none');
        headerNavTopMobile.classList.remove('display-none');
    } 
}) 

document.querySelectorAll('.mb-link').forEach( link => {

    link.addEventListener('click', function(event) {
        const dataCatalog = link.getAttribute('data-catalog');
        
        if(dataCatalog) {
            historyBurger.push(dataCatalog)

            catalogNavigationColumnMobileNav.style.display = 'none';

            const mobileNavColumn = document.querySelector('.mobile-nav__column');
    
            for (let i = 0; i < mobileNavColumn.children.length; i++) {
                if(i === 0) continue;
                mobileNavColumn.children[i].classList.add('display-none');
            }

            document.querySelector(`[data-response="${dataCatalog}"]`).classList.remove('display-none');
            document.querySelector(`[data-response="${dataCatalog}"]`).style.display = 'flex';

            event.preventDefault();
        } else {
            return true;  
        }
    }) 

});



const mobileSearch = () => {
    mobileNav.classList.toggle('mobile-nav_active');
    // document.body.classList.toggle('body-lock');
}

const mobileNavLinks = document.querySelectorAll('.mobile-nav__link a');

mobileNavLinks.forEach(link => {
    link.addEventListener('click', burgerMenu);
});

burgerButton.addEventListener('click', burgerMenu);
crossButton.addEventListener('click', burgerMenu);
