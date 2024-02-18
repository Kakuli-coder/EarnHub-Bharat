/* Site developed by
    Kakuli - https://www.linkedin.com/in/mekakuli */

///////////////////////// PRE LOADER ////////////////////////////////
const preloader = document.querySelector("#preloader");
window.addEventListener("load", () => {
    setTimeout(() => {
        preloader.style.display = "none";
    }, 100);
});

//////////////////// INCREASE NUMBER ANIMATION //////////////////////
const elt = document.querySelector("#nbr");
const endNbr = Number(elt.innerHTML);

let speed = 50;
/*A recursive function to increase the number.*/
let i;
function incNbrRec(i, endNbr, elt) {
    if (i <= endNbr) {
        elt.innerHTML = i;
        setTimeout(function () {
            //Delay a bit before calling the function again.
            incNbrRec(i + 1, endNbr, elt);
        }, speed);
    };
};

incNbrRec(0, endNbr, elt);

////////////////// SHOW CUSTOM PRODUCT INFO //////////////////////
const productInfo = document.querySelector(".product-info");

function showCustomProductInfo(name, list1, list2, list3, link, img, btnName) {

    let html = `
        <div class="product-info-div">
            <div  class="product-img-div">
                <img src=${img} alt=${name}>
            </div>
            <div class="product-txt-div">
                <div>
                    <h3>${name}</h3>
                    <ul>
                        <li> ${list1}</li>
                        <li> ${list2}</li>
                        <li> ${list3}</li>
                    </ul>
                    <button href=${link}>Explore ${btnName}</button>
                </div>
            </div>
        </div>
    `;

    productInfo.innerHTML = html;
};

showCustomProductInfo(
    `Simplified handling of day-to-day finances`,
    `Easy and accessible`,
    `No Lock-in Period`,
    `Free IMPS, NEFT, RTGS transactions`,
    `#`,
    `"images/products/1.png"`,
    `Bank Accounts`
);



// 1. Bank Accounts
const product1 = document.querySelector(".product-1");

product1.addEventListener("click", () => {
    // console.log(`Clicked on Bank Accounts.`);

    product1.classList.add("select");
    product2.classList.remove("select");
    product3.classList.remove("select");
    product4.classList.remove("select");
    product5.classList.remove("select");
    product6.classList.remove("select");
    product7.classList.remove("select");

    showCustomProductInfo(
        `Simplified handling of day-to-day finances`,
        `Easy and accessible`,
        `No Lock-in Period`,
        `Free IMPS, NEFT, RTGS transactions`,

        `#`,
        `"images/products/1.png"`,
        `Bank Accounts`
    );

    document.querySelector(".product-1 i").style.color = "#2f58c8ce";
    document.querySelector(".product-1 p").style.color = "#2f58c8ce";

    document.querySelector(".product-2 i").style.color = "#6c717f";
    document.querySelector(".product-2 p").style.color = "#6c717f";

    document.querySelector(".product-3 i").style.color = "#6c717f";
    document.querySelector(".product-3 p").style.color = "#6c717f";

    document.querySelector(".product-4 i").style.color = "#6c717f";
    document.querySelector(".product-4 p").style.color = "#6c717f";

    document.querySelector(".product-5 i").style.color = "#6c717f";
    document.querySelector(".product-5 p").style.color = "#6c717f";

    document.querySelector(".product-6 i").style.color = "#6c717f";
    document.querySelector(".product-6 p").style.color = "#6c717f";

    document.querySelector(".product-7 i").style.color = "#6c717f";
    document.querySelector(".product-7 p").style.color = "#6c717f";
});

// 2. Credit Card
const product2 = document.querySelector(".product-2");

product2.addEventListener("click", () => {
    // console.log(`Clicked on Creidt Card.`);

    product1.classList.remove("select");
    product2.classList.add("select");
    product3.classList.remove("select");
    product4.classList.remove("select");
    product5.classList.remove("select");
    product6.classList.remove("select");
    product7.classList.remove("select");

    showCustomProductInfo(
        `Your customer can spend today and pay tomorrow`,
        `Credit building opportunity`,
        `Special discounts and cashbacks`,
        `Flexible repayment options`,

        `#`,
        `"images/products/2.png"`,
        `Credit Cards`
    );

    document.querySelector(".product-1 i").style.color = "#6c717f";
    document.querySelector(".product-1 p").style.color = "#6c717f";

    document.querySelector(".product-2 i").style.color = "#2f58c8ce";
    document.querySelector(".product-2 p").style.color = "#2f58c8ce";

    document.querySelector(".product-3 i").style.color = "#6c717f";
    document.querySelector(".product-3 p").style.color = "#6c717f";

    document.querySelector(".product-4 i").style.color = "#6c717f";
    document.querySelector(".product-4 p").style.color = "#6c717f";

    document.querySelector(".product-5 i").style.color = "#6c717f";
    document.querySelector(".product-5 p").style.color = "#6c717f";

    document.querySelector(".product-6 i").style.color = "#6c717f";
    document.querySelector(".product-6 p").style.color = "#6c717f";

    document.querySelector(".product-7 i").style.color = "#6c717f";
    document.querySelector(".product-7 p").style.color = "#6c717f";
});


// 3. Loan
const product3 = document.querySelector(".product-3");

product3.addEventListener("click", () => {
    // console.log(`Clicked on Loan.`);

    product1.classList.remove("select");
    product2.classList.remove("select");
    product3.classList.add("select");
    product4.classList.remove("select");
    product5.classList.remove("select");
    product6.classList.remove("select");
    product7.classList.remove("select");

    showCustomProductInfo(
        `Loan Solutions for Life's Surprises`,
        `Swift fund transfer`,
        `Low interest rates`,
        `Transparent terms`,

        `#`,
        `"images/products/3.png"`,
        `Loan Options`
    );

    document.querySelector(".product-1 i").style.color = "#6c717f";
    document.querySelector(".product-1 p").style.color = "#6c717f";

    document.querySelector(".product-2 i").style.color = "#6c717f";
    document.querySelector(".product-2 p").style.color = "#6c717f";

    document.querySelector(".product-3 i").style.color = "#2f58c8ce";
    document.querySelector(".product-3 p").style.color = "#2f58c8ce";

    document.querySelector(".product-4 i").style.color = "#6c717f";
    document.querySelector(".product-4 p").style.color = "#6c717f";

    document.querySelector(".product-5 i").style.color = "#6c717f";
    document.querySelector(".product-5 p").style.color = "#6c717f";

    document.querySelector(".product-6 i").style.color = "#6c717f";
    document.querySelector(".product-6 p").style.color = "#6c717f";

    document.querySelector(".product-7 i").style.color = "#6c717f";
    document.querySelector(".product-7 p").style.color = "#6c717f";
});

// 4. Insurance
const product4 = document.querySelector(".product-4");

product4.addEventListener("click", () => {
    // console.log(`Clicked on Insurance.`);

    product1.classList.remove("select");
    product2.classList.remove("select");
    product3.classList.remove("select");
    product4.classList.add("select");
    product5.classList.remove("select");
    product6.classList.remove("select");
    product7.classList.remove("select");

    showCustomProductInfo(
        `Securing Futures, One Policy at a Time`,
        `Comprehensive coverage`,
        `Affordable premiums`,
        `Quick claim settlements`,

        `#`,
        `"images/products/4.png"`,
        `Available Insurance`
    );

    document.querySelector(".product-1 i").style.color = "#6c717f";
    document.querySelector(".product-1 p").style.color = "#6c717f";

    document.querySelector(".product-2 i").style.color = "#6c717f";
    document.querySelector(".product-2 p").style.color = "#6c717f";

    document.querySelector(".product-3 i").style.color = "#6c717f";
    document.querySelector(".product-3 p").style.color = "#6c717f";

    document.querySelector(".product-4 i").style.color = "#2f58c8ce";
    document.querySelector(".product-4 p").style.color = "#2f58c8ce";

    document.querySelector(".product-5 i").style.color = "#6c717f";
    document.querySelector(".product-5 p").style.color = "#6c717f";

    document.querySelector(".product-6 i").style.color = "#6c717f";
    document.querySelector(".product-6 p").style.color = "#6c717f";

    document.querySelector(".product-7 i").style.color = "#6c717f";
    document.querySelector(".product-7 p").style.color = "#6c717f";
});

// 5. Demat Account
const product5 = document.querySelector(".product-5");

product5.addEventListener("click", () => {
    // console.log(`Clicked on Demat Account.`);

    product1.classList.remove("select");
    product2.classList.remove("select");
    product3.classList.remove("select");
    product4.classList.remove("select");
    product5.classList.add("select");
    product6.classList.remove("select");
    product7.classList.remove("select");

    showCustomProductInfo(
        `Encourage your customers to Trade with Confidence`,
        `100% Paperless transactions`,
        `Easy portfolio management`,
        `Competitive brokerage rates`,

        `#`,
        `"images/products/5.png"`,
        `Demat Account Platforms`
    );

    document.querySelector(".product-1 i").style.color = "#6c717f";
    document.querySelector(".product-1 p").style.color = "#6c717f";

    document.querySelector(".product-2 i").style.color = "#6c717f";
    document.querySelector(".product-2 p").style.color = "#6c717f";

    document.querySelector(".product-3 i").style.color = "#6c717f";
    document.querySelector(".product-3 p").style.color = "#6c717f";

    document.querySelector(".product-4 i").style.color = "#6c717f";
    document.querySelector(".product-4 p").style.color = "#6c717f";

    document.querySelector(".product-5 i").style.color = "#2f58c8ce";
    document.querySelector(".product-5 p").style.color = "#2f58c8ce";

    document.querySelector(".product-6 i").style.color = "#6c717f";
    document.querySelector(".product-6 p").style.color = "#6c717f";

    document.querySelector(".product-7 i").style.color = "#6c717f";
    document.querySelector(".product-7 p").style.color = "#6c717f";
});

// 6. Health Card
const product6 = document.querySelector(".product-6");

product6.addEventListener("click", () => {
    // console.log(`Clicked on Health Card.`);

    product1.classList.remove("select");
    product2.classList.remove("select");
    product3.classList.remove("select");
    product4.classList.remove("select");
    product5.classList.remove("select");
    product6.classList.add("select");
    product7.classList.remove("select");

    showCustomProductInfo(
        `Lifelong Security for Your Customers with Health Cards`,
        `Cashless hospitalization`,
        `Emergency assistance`,
        `Medicine coverage`,

        `#`,
        `"images/products/6.png"`,
        `Health Cards`
    );

    document.querySelector(".product-1 i").style.color = "#6c717f";
    document.querySelector(".product-1 p").style.color = "#6c717f";

    document.querySelector(".product-2 i").style.color = "#6c717f";
    document.querySelector(".product-2 p").style.color = "#6c717f";

    document.querySelector(".product-3 i").style.color = "#6c717f";
    document.querySelector(".product-3 p").style.color = "#6c717f";

    document.querySelector(".product-4 i").style.color = "#6c717f";
    document.querySelector(".product-4 p").style.color = "#6c717f";

    document.querySelector(".product-5 i").style.color = "#6c717f";
    document.querySelector(".product-5 p").style.color = "#6c717f";

    document.querySelector(".product-6 i").style.color = "#2f58c8ce";
    document.querySelector(".product-6 p").style.color = "#2f58c8ce";

    document.querySelector(".product-7 i").style.color = "#6c717f";
    document.querySelector(".product-7 p").style.color = "#6c717f";
});

// 7. File ITR
const product7 = document.querySelector(".product-7");

product7.addEventListener("click", () => {
    // console.log(`Clicked on File ITR.`);

    product1.classList.remove("select");
    product2.classList.remove("select");
    product3.classList.remove("select");
    product4.classList.remove("select");
    product5.classList.remove("select");
    product6.classList.remove("select");
    product7.classList.add("select");

    showCustomProductInfo(
        `File ITR`,
        `Easy and accessible`,
        `No Lock-in Period`,
        `Free IMPS, NEFT, RTGS transactions`,

        `#`,
        `"images/products/7.png"`,
        `File ITR`
    );

    document.querySelector(".product-1 i").style.color = "#6c717f";
    document.querySelector(".product-1 p").style.color = "#6c717f";

    document.querySelector(".product-2 i").style.color = "#6c717f";
    document.querySelector(".product-2 p").style.color = "#6c717f";

    document.querySelector(".product-3 i").style.color = "#6c717f";
    document.querySelector(".product-3 p").style.color = "#6c717f";

    document.querySelector(".product-4 i").style.color = "#6c717f";
    document.querySelector(".product-4 p").style.color = "#6c717f";

    document.querySelector(".product-5 i").style.color = "#6c717f";
    document.querySelector(".product-5 p").style.color = "#6c717f";

    document.querySelector(".product-6 i").style.color = "#6c717f";
    document.querySelector(".product-6 p").style.color = "#6c717f";

    document.querySelector(".product-7 i").style.color = "#2f58c8ce";
    document.querySelector(".product-7 p").style.color = "#2f58c8ce";
});







