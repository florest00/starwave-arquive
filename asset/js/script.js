import { products } from "./products.js";
document.addEventListener("DOMContentLoaded", () => {
  /* ============== quick ============== */
  const quickBtn = document.querySelector(".quick_right");
  const topBtn = document.querySelector(".btn_top");
  const bottomBtn = document.querySelector(".btn_bottom");

  // 스크롤 시 퀵버튼 노출
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      quickBtn.classList.add("on");
    } else {
      quickBtn.classList.remove("on");
    }
  });
  // 탑버튼 클릭했을 때 맨 위로 이동
  topBtn.addEventListener("click", (e) => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  // 바텀버튼 클릭했을 때 맨 아래로 이동
  bottomBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  });
  /* ============== artist ============== */
  function renderProducts(artist, selector) {
    if (!products[artist]) {
      console.error(`${artist} 데이터 없음`);
      return;
    }

    const prdList = document.querySelector(selector);
    let html = "";
    products[artist].forEach((product) => {
      // 품절 여부를 나타내는 코드 한 줄 추가
      // product.soldOut이 true 면 displaynone 제거
      // false 또는 값이 없으면 displaynone soldout 그대로 둬서 숨김
      const soldOutClass = product.soldOut ? "soldout" : "displaynone soldout";
      html += `
      <li>
          <div class="prdList__item">
              <div class="thumbnail">
                  <span class="wish">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
      stroke-width="1.5" stroke="#ccc" class="size-6">
      <path stroke-linecap="round" stroke-linejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
  </svg>
                  </span>
                  <a href="javascript:void(0)">
                      <img src="${product.img}" alt="">
                      <div class="${soldOutClass}">
                          <span>SOLD OUT</span>
                      </div>
                  </a>
                  <div class="icon"></div>
                  <div class="likeButton displaynone">
                      <button type="button"></button>
                  </div>
              </div>
              <div class="description">
                  <div class="sale_box m_off"></div>
                  <div class="name">
                      <a href="javascript:void(0)">
                          <span>
                              ${product.title}
                          </span>
                      </a>
                  </div>
                  <ul class="spec">
                      <li rel="판매가" class="msale">
                          <span class="title displaynone">
                              <span>판매가</span>
                          </span>
                          <span class="m_item">
                              <span>${product.price}</span>
                              <span id="span_product_tax_type_text"></span>
                          </span>
                      </li>
                  </ul>
              </div>
          </div>
      </li>
      `;
    });
    prdList.innerHTML = html;
    prdList.innerHTML = html;
  }
  /* =========== hamburger-menu opens aside ============== */
  const hamburger = document.querySelector(
    "#header .header-inner .header-left .hamburger-menu a",
  );
  const body = document.querySelector("body");
  const overlay = document.querySelector("#aside-overlay");
  const closeBtn = document.querySelector("#aside .ms_top .aside_close");
  hamburger.addEventListener("click", () => {
    body.classList.toggle("expand");
  });
  function closeAside() {
    body.classList.remove("expand");
  }
  closeBtn.addEventListener("click", closeAside);
  overlay.addEventListener("click", closeAside);
  /* ========== aside 카테고리 서브메뉴 열고 닫기 ========== */
  const asideCateTitle = document.querySelectorAll(
    "#aside .ms_middle .add_cate_sub .title",
  );
  asideCateTitle.forEach((title) => {
    const subMenu = title.nextElementSibling;

    if (!subMenu) return;
    title.addEventListener("click", () => {
      const isSelected = title.classList.contains("selected");

      if (!isSelected) {
        title.classList.add("selected");
      } else {
        title.classList.remove("selected");
      }
    });
  });
  /* ============ aside ARTIST 카테고리 서브메뉴 열고 닫기 ============ */
  const categoryMenu = document.querySelector(
    "#aside .ms_middle .categoryList > li.menu",
  );
  const cateBtn = document.querySelector(
    "#aside .ms_middle .categoryList > li.menu a.cate",
  );
  const subMenu = document.querySelector("ul.slideSubMenu");

  categoryMenu.addEventListener("click", () => {
    categoryMenu.classList.toggle("selected");
  });
  /* ============= search-icon opens search_box ============= */
  const search = document.querySelector("#header .search");
  const searchBox = document.querySelector("#search_box");
  const headerInner = document.querySelector(".header-inner");
  const overlaySearchBox = document.querySelector(".search_box_overlay");
  search.addEventListener("click", () => {
    searchBox.classList.add("on");
    body.classList.add("searchhidden");
    headerInner.classList.add("fixed");
  });
  function closeSearchBox() {
    searchBox.classList.remove("on");
    body.classList.remove("searchhidden");
  }
  document.querySelectorAll(".search_close").forEach((btn) => {
    btn.addEventListener("click", closeSearchBox);
  });
  overlaySearchBox.addEventListener("click", closeSearchBox);
  /* ============= wishBtn ============= */
  document.addEventListener("click", function (e) {
    const target = e.target.closest(".wish, .mypage, .cart");

    if (!target) return;

    console.log("클릭됨!");

    alert("로그인 후 이용해주세요.");
    // location.href = "/prac03/index.html"; // 로그인페이지로 이동 (지금은 임시로 index.html)
  });
  /* =========== main_swiper =============== */
  const swiper = new Swiper(".mainSwiper", {
    direction: "horizontal",
    observer: true,
    observeParents: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    // autoplay: false,

    // 모바일
    slidesPerView: 1.2,
    spaceBetween: 24,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".mainSwiper-button-next",
      prevEl: ".mainSwiper-button-prev",
    },
    breakpoints: {
      // 태블릿
      768: {
        slidesPerView: 1.5,
        spaceBetween: 48,
        centeredSlides: true,
      },
      // pc
      1024: {
        slidesPerView: 2.6,
        spaceBetween: 48,
      },
    },
  });

  // ⭐ 환경에 따른 자동재생 제어
  function toggleAutoplay() {
    if (window.innerWidth < 1024) {
      swiper.autoplay.stop(); //태블릿 이하에선 멈춤
    } else {
      swiper.autoplay.start(); //PC에선 실행
    }
  }

  toggleAutoplay();

  window.addEventListener("resize", toggleAutoplay);

  // ⭐ CLS 현상 해결
  // 페이지 로드 완료 후 Swiper 레이아웃을 다시 계산하고,
  // 준비가 끝나면 ready 클래스를 추가해 화면을 표시(CLS 방지)
  window.addEventListener("load", () => {
    swiper.update();
    document.querySelector(".mainSwiper").classList.add("ready");
  });

  /* ================ marquee swiper ================== */
  const swiper2 = new Swiper(".marqueeSwiper", {
    loop: true,
    allowTouchMove: false,
    speed: 5000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    // 모바일
    slidesPerView: 2.8,
    spaceBetween: 0,
    breakpoints: {
      // 태블릿
      768: {
        slidesPerView: 5.5,
        spaceBetween: 0,
      },
      // pc
      1024: {
        slidesPerView: 3.8,
        spaceBetween: 0,
      },
    },
  });
  /* ============ artist section ============ */
  const swiper3 = new Swiper(".artistSwiper", {
    loop: false,
    pagination: {
      el: ".swiper-pagination-artist-lsit",
      clickable: true,
    },
    breakpoints: {
      0: {
        // mobile
        slidesPerView: 4.5,
        slidesPerGroup: 4,
        spaceBetween: 0,
      },
      //tablet
      768: {
        slidesPerView: 7.5,
        slidesPerGroup: 7,
        spaceBetween: 0,
      },
      //pc
      1024: {
        slidesPerView: 9.5,
        slidesPerGroup: 9,
        spaceBetween: 20,
      },
    },
  });
  /* =============== item section ================ */
  const swiper4 = new Swiper(".itemSwiper", {
    loop: true,
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    breakpoints: {
      0: {
        slidesPerView: 2.2,
        spaceBetween: 8,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });

  // 환경에 따른 자동재생 제어
  function toggleAutoplayItem() {
    if (window.innerWidth < 1024) {
      swiper4.autoplay.start(); //태블릿 이하에선 멈춤
    } else {
      swiper4.autoplay.stop(); //PC에선 실행
    }
  }

  toggleAutoplayItem();

  window.addEventListener("resize", toggleAutoplayItem);
  /* =============== album section =============== */
  const swiper5 = new Swiper(".albumSwiper", {
    direction: "horizontal",
    loop: true,
    breakpoints: {
      //mob
      0: {
        slidesPerView: 1.9,
        centeredSlides: true,
        spaceBetween: 0,
      },
      //tab
      768: {
        slidesPerView: 2.5,
        centeredSlides: true,
      },
      // pc
      1024: {
        slidesPerView: 2.55,
        spaceBetween: 20,
        centeredSlides: false,
      },
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    navigation: {
      nextEl: ".albumSwiper-button-next",
      prevEl: ".albumSwiper-button-prev",
    },
  });
  /* ============== album mobile_txt 동기화 ============== */
  function updateAlbumMobileTxt(swiper) {
    const activeSlide = swiper.slides[swiper.activeIndex];
    const t01 = activeSlide?.querySelector(".t01")?.innerText.trim();
    const t02 = activeSlide?.querySelector(".t02")?.innerText.trim();
    const mobileTxt = document.querySelector(".albumSwiper .mobile_txt");

    mobileTxt.style.opacity = "0";

    setTimeout(() => {
      mobileTxt.innerHTML = `
      <div class="t01">${t01 || ""}</div>
      <div class="t02">${t02 || ""}</div>
      `;
      mobileTxt.style.opacity = "1";
    }, 200);
  }
  swiper5.on("slideChange", () => updateAlbumMobileTxt(swiper5));
  updateAlbumMobileTxt(swiper5);
  /* ============== cheer section ============ */
  const swiper6 = new Swiper(".cheerSwiper", {
    direction: "horizontal",
    loop: true,
    breakpoints: {
      //mob
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
      },
      //tab
      768: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // pc
      1024: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
    on: {
      breakpoint: function (swiper) {
        swiper.el.querySelectorAll(".swiper-pagination span").forEach((el) => {
          el.style.color = "#1A1A1A";
        });
      },
      paginationRender: function (swiper) {
        swiper.el.querySelectorAll(".swiper-pagination span").forEach((el) => {
          el.style.color = "#1A1A1A";
        });
      },
    },
  });
  /* =========== best-item section =============== */
  const swiper7 = new Swiper(".bestItemSwiper", {
    slidesPerView: "auto",
    breakpoints: {
      0: {
        spaceBetween: 16,
      },
      768: {
        spaceBetween: 16,
      },
      1024: {
        spaceBetween: 0,
      },
    },
  });

  document
    .querySelectorAll(".bestItemSwiper .swiper-slide")
    .forEach((item, index) => {
      item.addEventListener("click", () => {
        document
          .querySelectorAll(".bestItemSwiper .swiper-slide")
          .forEach((slide) => slide.classList.remove("swiper_over"));
        item.classList.add("swiper_over");
        swiper8.slideTo(index);
        const artist = item.innerText.trim().replaceAll(" ", "");
      });
    });
  renderProducts("ALL", ".all-list");
  renderProducts("ARTIST01", ".artist01-list");
  renderProducts("ARTIST02", ".artist02-list");
  renderProducts("ARTIST03", ".artist03-list");
  renderProducts("ARTIST04", ".artist04-list");
  renderProducts("ARTIST05", ".artist05-list");
  renderProducts("ARTIST06", ".artist06-list");
  renderProducts("ARTIST07", ".artist07-list");
  renderProducts("ARTIST08", ".artist08-list");
  renderProducts("ARTIST09", ".artist09-list");
  renderProducts("ARTIST10", ".artist10-list");
  renderProducts("ARTIST11", ".artist11-list");

  // best_item (우측 데이터 뿌려주는 영역)
  const swiper8 = new Swiper(".bestItemSwiper2", {
    allowTouchMove: false,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  });

  swiper8.update();
  swiper8.slideTo(0);
  /* =============== footer =============== */
  const footerSec04 = document.querySelector(
    "#footer .footer-inner-flex .footer-sec04",
  );
  const fmSelect = document.querySelector(
    "#footer .footer-inner-flex .footer-sec04 .select_title",
  );
  const fmDropdownMenu = document.querySelector(
    "#footer .footer-inner-flex .footer-sec04 ul",
  );
  const fmSelectTitle = document.querySelector(
    "#footer .footer-inner-flex .footer-sec04 .select_title",
  );
  fmSelect.addEventListener("mouseenter", () => {
    fmSelect.classList.add("active");
    fmDropdownMenu.style.display = "flex";
    fmSelectTitle.style.borderTopLeftRadius = "0px";
    fmSelectTitle.style.borderTopRightRadius = "0px";
  });
  footerSec04.addEventListener("mouseleave", () => {
    fmSelect.classList.remove("active");
    fmDropdownMenu.style.display = "none";
    fmSelectTitle.style.borderTopLeftRadius = "20px";
    fmSelectTitle.style.borderTopRightRadius = "20px";
  });
});
