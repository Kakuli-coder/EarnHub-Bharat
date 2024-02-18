////////////////////// GO TO TOP BUTTON /////////////////////////////
function goToTopBtn() {
    // Get the button
    let goToTopBtn = document.querySelector("#goToTopBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    document.body.addEventListener("scroll", () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            goToTopBtn.style.display = "block";
        } else {
            goToTopBtn.style.display = "none";
        };
    });

    // When the user clicks on the button, scroll to the top of the document
    goToTopBtn.addEventListener("click", () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
};

/////////////// CHANGE NAV-COLOR ON SCROLLING ///////////////////
function changeNavColorOnScrolling() {
    const nav = document.querySelector("nav");
    const navAnchorTag = document.querySelector("nav a");
    const logoTxt = document.querySelector(".wrapper .logo a");
    const logoTxtBharat = document.querySelector(".wrapper .logo a span");
    const logoImg = document.querySelector(".wrapper .logo a img");
    const navLinksTexts = document.querySelectorAll(".desktop-item");
    const wrapperBtn = document.querySelector(".wrapper .btn");
    const searchIcon = document.querySelector(".search-icon");
    const userIcon = document.querySelector(".user-icon");

    document.body.addEventListener('scroll', () => {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            nav.classList.add("scrolled");
            logoTxt.classList.add("logo-txt-scrolled");
            logoTxtBharat.classList.add("logo-txt-span-scrolled");
            logoImg.classList.add("logo-img-scrolled");
            for (const navLinkTxt of navLinksTexts) {
                navLinkTxt.classList.add("nav-links-scrolled");
            };
            searchIcon.classList.add("search-icon-scrolled");
            userIcon.classList.add("user-icon-scrolled");
            wrapperBtn.classList.add("wrapper-btn-scrolled");
        } else {
            nav.classList.remove("scrolled");
            logoTxt.classList.remove("logo-txt-scrolled");
            logoTxtBharat.classList.remove("logo-txt-span-scrolled");
            logoImg.classList.remove("logo-img-scrolled");
            for (const navLinkTxt of navLinksTexts) {
                navLinkTxt.classList.remove("nav-links-scrolled");
            };
            searchIcon.classList.remove("search-icon-scrolled");
            userIcon.classList.remove("user-icon-scrolled");
            wrapperBtn.classList.remove("wrapper-btn-scrolled");
        };
    });
};

//////////////// CHANGE SEARCH BOX PLACEHOLDER TEXT ////////////////
function changeSearchBoxPlaceholderTxt() {
    const inputBox = document.querySelector(".input-box");
    if (window.matchMedia("(max-width: 350px)").matches) {
        inputBox.placeholder = "Search";
    };
};

///////////////////// NAV - CUSTOM DROPDOWN ///////////////////////
function navCustomDropdown() {
    const megaboxHeaders = document.querySelectorAll(".header-row a");
    const correspondingRow1 = document.querySelector(".corresponding-row-1");
    const correspondingRow2 = document.querySelector(".corresponding-row-2");

    // console.log(megaboxHeaders);

    function bankingRows() {
        const html1 = `
    <header>BANK ACCOUNTS BY CATEGORY</header>
                                    <ul class="mega-links">
                                        <li><a href="#">Zero Balance Savings</a></li>
                                        <li><a href="#">Kids Savings Account</a></li>
                                        <li><a href="#">Salary Account</a></li>
                                        <li><a href="#">Women's Savings Account</a></li>
                                    </ul>
                                    `;

        correspondingRow1.innerHTML = html1;


        const html2 = `
    <header>BANK ACCOUNTS BY ISSUER</header>
                                    <ul class="mega-links">
                                        <li><a href="#">Kotak Bank</a></li>
                                        <li><a href="#">Yes Bank</a></li>
                                        <li><a href="#">Axis Bank</a></li>
                                        <li><a href="#">HDFC Bank</a></li>
                                    </ul>
                                    `;

        correspondingRow2.innerHTML = html2;
    };

    bankingRows();

    megaboxHeaders[0].addEventListener("click", () => {
        // console.log("Banking Product");
        megaboxHeaders[1].style.color = "#000";
        megaboxHeaders[2].style.color = "#000";
        megaboxHeaders[3].style.color = "#000";
        megaboxHeaders[0].style.color = "#2f58c8ce";
        bankingRows();
    });





    function insuranceRows() {
        const html1 = `
    <header>INSURANCE POLICIES BY CATEGORY</header>
                                    <ul class="mega-links">
                                        <li><a href="#">General Insurance</a></li>
                                        <li><a href="#">Life Insurance</a></li>
                                        <li><a href="#">Health Insurance</a></li>
                                        <li><a href="#">Property Insurance</a></li>
                                    </ul>
                                    `;

        correspondingRow1.innerHTML = html1;


        const html2 = `
    <header>INSURANCE COMPANIES BY ISSUER</header>
                                    <ul class="mega-links">
                                        <li><a href="#">LIC</a></li>
                                        <li><a href="#">Kotak Mahindra</a></li>
                                        <li><a href="#">Bajaj Allianzk</a></li>
                                        <li><a href="#">HDFC Life Insurance</a></li>
                                    </ul>
                                    `;

        correspondingRow2.innerHTML = html2;
    };

    megaboxHeaders[1].addEventListener("click", () => {
        // console.log("Insurance Product");
        megaboxHeaders[0].style.color = "#000";
        megaboxHeaders[2].style.color = "#000";
        megaboxHeaders[3].style.color = "#000";
        megaboxHeaders[1].style.color = "#2f58c8ce";
        insuranceRows();
    });





    function creditCardRows() {
        const html1 = `
    <header>CARD BY CATEGORY</header>
                                    <ul class="mega-links">
                                        <li><a href="#">Best Reward Cards</a></li>
                                        <li><a href="#">Best Travel Cards</a></li>
                                        <li><a href="#">Best Cashback Cards</a></li>
                                        <li><a href="#">Best Shopping Card</a></li>
                                    </ul>
                                    `;

        correspondingRow1.innerHTML = html1;


        const html2 = `
    <header>CREDIT CARD BY ISSUER</header>
                                    <ul class="mega-links">
                                        <li><a href="#">AU Bank</a></li>
                                        <li><a href="#">Kotak Bank</a></li>
                                        <li><a href="#">HDFC Bank</a></li>
                                        <li><a href="#">Axis Bank</a></li>
                                    </ul>
                                    `;

        correspondingRow2.innerHTML = html2;
    };

    megaboxHeaders[2].addEventListener("click", () => {
        // console.log("Credit Card Product");
        megaboxHeaders[0].style.color = "#000";
        megaboxHeaders[1].style.color = "#000";
        megaboxHeaders[3].style.color = "#000";
        megaboxHeaders[2].style.color = "#2f58c8ce";
        creditCardRows();
    });





    function dematRows() {
        const html1 = `
    <header>INSURANCE POLICIES BY CATEGORY</header>
                                    <ul class="mega-links">
                                        <li><a href="#">General Insurance</a></li>
                                        <li><a href="#">Life Insurance</a></li>
                                        <li><a href="#">Health Insurance</a></li>
                                        <li><a href="#">Property Insurance</a></li>
                                    </ul>
                                    `;

        correspondingRow1.innerHTML = html1;


        const html2 = `
    <header>INSURANCE COMPANIES BY ISSUER</header>
                                    <ul class="mega-links">
                                        <li><a href="#">LIC</a></li>
                                        <li><a href="#">Kotak Mahindra</a></li>
                                        <li><a href="#">Bajaj Allianzk</a></li>
                                        <li><a href="#">HDFC Life Insurance</a></li>
                                    </ul>
                                    `;

        correspondingRow2.innerHTML = html2;
    };

    megaboxHeaders[3].addEventListener("click", () => {
        // console.log("Demat Product");
        megaboxHeaders[0].style.color = "#000";
        megaboxHeaders[1].style.color = "#000";
        megaboxHeaders[2].style.color = "#000";
        megaboxHeaders[3].style.color = "#2f58c8ce";
        dematRows();
    });
};

/////////////// NAV - SHOW AND HIDE DROPDOWN ///////////////////
function showAndHideDropdowns() {
    const productsMegaBox = document.querySelector(".products-mega-box");

    const searchMegaBox = document.querySelector(".search-mega-box");

    const loginDropMenu = document.querySelector(".login-dropdown-menu");



    document.addEventListener("click", (e) => {
        // console.log(e.target.closest(".mega-box"));

        // Handle click on 'All Products' navbar
        if (e.target.closest(".all-products")) {
            // console.log(`Clicked on All Products`);
            productsMegaBox.classList.toggle("showMegaBox");
            productsMegaBox.classList.toggle("showProductsMegaBox");

            // if (productsMegaBox.classList.contains("showMegaBox")) {
            //     megaboxHeaders[0].style.color = "#000";
            //     megaboxHeaders[1].style.color = "#000";
            //     megaboxHeaders[2].style.color = "#000";
            //     megaboxHeaders[3].style.color = "#000";
            // };
        }
        else if (!e.target.closest(".products-mega-box")) {
            // console.log(`Clicked outside MegaBox DropDown`);
            productsMegaBox.classList.remove("showMegaBox");
            productsMegaBox.classList.remove("showProductsMegaBox");
        };


        // Handle click on 'Search icon' on Navbar
        if (e.target.closest(".search-icon")) {
            const megaboxHeaders = document.querySelectorAll(".header-row a");
            // console.log(`Clicked on Search Icon`);
            searchMegaBox.classList.toggle("showMegaBox");

            if (searchMegaBox.classList.contains("showMegaBox")) {
                megaboxHeaders[0].style.color = "#000";
                megaboxHeaders[1].style.color = "#000";
                megaboxHeaders[2].style.color = "#000";
                megaboxHeaders[3].style.color = "#000";
            };
        }
        else if (!e.target.closest(".search-mega-box")) {
            // console.log(`Clicked outside MegaBox DropDown`);
            searchMegaBox.classList.remove("showMegaBox");
        };

        // Handle click on 'User icon' on Navbar
        if (e.target.closest(".user-icon")) {
            // console.log(`Clicked on User icon`);
            loginDropMenu.classList.toggle("showDropMenu");
        }
        else if (!e.target.closest(".login-dropdown-menu")) {
            // console.log(`Clicked outside DropMenu DropDown`);
            loginDropMenu.classList.remove("showDropMenu");
        };
    });
};

////// NAV - CONTACT US LINK (Close Mobile View Sidenav) ///////////
function closeSideNav() {
    const navLinks = document.querySelector(".nav-links");
    const contactUs = document.querySelector(".nav-links .contact-us");

    if (window.matchMedia("(max-width: 760px)").matches) {
    contactUs.addEventListener("click", () => {
        navLinks.style.display = "none";
    });
    };
};

/////////////// Display SIDE NAV (MOBILE VIEW) ////////////////////
function displaySideNav() {
    const menuBtn = document.querySelector("#menu-btn");
    const navLinks = document.querySelector(".nav-links");
    menuBtn.addEventListener("click", () => {
        navLinks.style.display = "block";
    });
};

class Navbar extends HTMLElement {
    connectedCallback() {
        // HTML
        this.innerHTML = `
        <nav>
            <div class="wrapper">
                <div class="mobile-left-div">
                    <label for="menu-btn" class="btn menu-btn"><i class="fas fa-bars"></i></label>
                    <div class="logo">
                        <a class="navbar-brand" href="../index.html">
                            <img alt="logo-img" class="d-inline-block">
                            EarnHub <span>भारत</span>
                        </a>
                    </div>
                </div>
                <input type="radio" name="slider" id="menu-btn">
                <input type="radio" name="slider" id="close-btn">
                <ul class="nav-links">
                    <div class="logo">
                        <a class="navbar-brand" href="../index.html">
                            <img alt="logo-img" class="d-inline-block">
                            EarnHub <span>भारत</span>
                        </a>
                    </div>
                    <label for="close-btn" class="btn close-btn"><i class="fas fa-times"></i></label>
                    <hr>
                    <li class="all-products-li">
                        <a href="#" class="desktop-item all-products">All Products</a>
                        <input type="checkbox" id="showMega">
                        <div class="products-mega-box">
                            <div class="content">
                                <div class="row">
                                    <img src="images/nav-img.jpg" alt="">
                                </div>
                                <div class="row header-row">
                                    <a href="#">
                                        <header>Banking</header>
                                    </a>
                                    <a href="#">
                                        <header>Insurance</header>
                                    </a>
                                    <a href="#">
                                        <header>Credit Cards</header>
                                    </a>
                                    <a href="#">
                                        <header>Demat</header>
                                    </a>
                                </div>
                                <div class="row corresponding-row-1">

                                </div>
                                <div class="row corresponding-row-2">
                                    <header>Security services</header>
                                    <ul class="mega-links">
                                        <li><a href="#">Site Seal</a></li>
                                        <li><a href="#">VPS Hosting</a></li>
                                        <li><a href="#">Privacy Seal</a></li>
                                        <li><a href="#">Website design</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="about.html" class="desktop-item about-us">About us</a>
                    </li>
                    <li>
                        <a class="desktop-item contact-us" href="#contact-us">Contact us</a>
                    </li>
                </ul>

                <ul class="last-nav-links">
                    <li>
                        <i class="fa-solid fa-magnifying-glass search-icon"></i>
                        <div class="search-mega-box">
                            <div class="content">
                                <div class="search-container">
                                    <div class="row">
                                        <input type="text" class="input-box" placeholder="What are you looking?"
                                            autocomplete="off" autocorrect="off" autocapitalize="off"
                                            spellcheck="false" />
                                        <button class="search-btn">
                                            <i class="fa-solid fa-magnifying-glass"></i>
                                        </button>
                                    </div>
                                    <div class="result-box"></div>
                                </div>

                                <div class="popular-searches-div">
                                    <p>Popular Searches</p>
                                    <div>
                                        <button type="button" class="btn">Credit Card</button>
                                        <button type="button" class="btn">Reward</button>
                                        <button type="button" class="btn">Travel</button>
                                        <button type="button" class="btn">Cashback</button>
                                        <button type="button" class="btn">Shopping</button>
                                        <button type="button" class="btn">HDFC</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <i class="fa-regular fa-user user-icon" style="color: black;"></i>
                        <input type="checkbox" id="showDrop">
                        <label for="showDrop" class="mobile-item">Dropdown Menu</label>
                        <ul class="drop-menu login-dropdown-menu">
                            <li><a href="#">My Profile</a></li>
                            <li><a href="#">My Offer</a></li>
                            <hr>
                            <li><a href="#">Logout</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
        `;

        // JS
        changeNavColorOnScrolling();
        navCustomDropdown();
        changeSearchBoxPlaceholderTxt();
        showAndHideDropdowns();
        displaySideNav();
        closeSideNav();
        goToTopBtn();
    };
};

class Footer extends HTMLElement {
    connectedCallback() {
        // HTML
        this.innerHTML = `
        <div id="contact-us" class="footer">
                <div class="container">
                    <div class="content-div">
                        <div class="logo">
                            <div class="logo-container">
                                <p class="logo-txt-scrolled">EarnHub <span class="logo-txt-span-scrolled">भारत</span>
                                </p>
                            </div>
                            <p class="company-slogan">Work Earn Grow</p>
                            <p class="about-company">Earnhub Bharat Enterprise started as a Financial service promotion organisation  in the year 2021. It is now on a mission to provide financial independence to freelances across India.</p>
                            <div class="social-icons-box">
                                <div class="social-icons-div">
                                    <a href="#">
                                    <button>
                                        <i class="fa-brands fa-linkedin"></i>
                                    </button>
                                </a>
                                <a>
                                    <button>
                                        <i class="fa-brands fa-youtube"></i>
                                    </button>
                                </a>
                                <a>
                                    <button>
                                        <i class="fa-brands fa-facebook-f"></i>
                                    </button>
                                    </a>
                                    <a>
                                    <button>
                                        <i class="fa-brands fa-twitter"></i>
                                    </button>
                                    </a>
                                    <a>
                                    <button>
                                        <i class="fa-brands fa-instagram"></i>
                                    </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="products">
                            <p class="title">Products</p>
                            <p>Credit Card</p>
                            <p>Savings Account</p>
                            <p>Demat Account</p>
                            <p>Loan</p>
                            <p>Investment</p>
                            <p>Sell Insurance</p>
                            <p>File ITR</p>
                        </div>
                        <div class="company">
                            <p class="title">Company</p>
                            <p><a href="about.html">About us</a></p>
                            <p><a href="#">Partner with us</a></p>
                        </div>
                        <div class="contact-us">
                            <p class="title">Contact Us</p>
                            <p><span>+91</span>7896933972</p>
                            <p>
                            <a href="mailto:support@earnhubbharat.com">support@earnhubbharat.com</a>
                            </p>
                            <p>Kahilipara Road , Opp - Meghna Enclave, Guwahati, Assam - 781034, India</p>
                        </div>
                    </div>
                    <hr>
                    <div class="copyright-div">
                        <p>© 2024 EarnHub Bharat. All rights reserved.</p>
                    </div>
                </div>
            </div>
        `;
    };
};


customElements.define("app-navbar", Navbar);
customElements.define("app-footer", Footer);
