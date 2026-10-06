import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AboutPage, { AboutPageExtras } from "./pages/AboutPage.jsx";
import ArticlePage, { ArticlePageExtras } from "./pages/ArticlePage.jsx";
import Article2Page, { Article2PageExtras } from "./pages/Article2Page.jsx";
import ContactPage, { ContactPageExtras } from "./pages/ContactPage.jsx";
import ExperiencePage, {
  ExperiencePageExtras,
} from "./pages/ExperiencePage.jsx";
import FoodPage, { FoodPageExtras } from "./pages/FoodPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import KrishnaPage, { KrishnaPageExtras } from "./pages/KrishnaPage.jsx";
import PortfolioDetailsPage, {
  PortfolioDetailsPageExtras,
} from "./pages/PortfolioDetailsPage.jsx";
import PortfolioDetails2Page, {
  PortfolioDetails2PageExtras,
} from "./pages/PortfolioDetails2Page.jsx";
import WorkPage, { WorkPageExtras } from "./pages/WorkPage.jsx";
import YoutubePage, { YoutubePageExtras } from "./pages/YoutubePage.jsx";
import BackgroundShapes from "./components/BackgroundShapes.jsx";
import { ProfileCard } from "./components/ProfileCard.jsx";
import SiteFooter from "./components/SiteFooter.jsx";
import SiteHeader from "./components/SiteHeader.jsx";

const routes = {
  "/": { page: HomePage, title: "Home", home: true },
  "/about": { page: AboutPage, extras: AboutPageExtras, title: "About" },
  "/experience": {
    page: ExperiencePage,
    extras: ExperiencePageExtras,
    title: "Experience",
  },
  "/work": { page: WorkPage, extras: WorkPageExtras, title: "Works" },
  "/youtube": {
    page: YoutubePage,
    extras: YoutubePageExtras,
    title: "YouTube",
  },
  "/contact": {
    page: ContactPage,
    extras: ContactPageExtras,
    title: "Contact",
  },
  "/article": {
    page: ArticlePage,
    extras: ArticlePageExtras,
    title: "Article",
  },
  "/article2": {
    page: Article2Page,
    extras: Article2PageExtras,
    title: "Article",
  },
  "/food": {
    page: FoodPage,
    extras: FoodPageExtras,
    title: "Food Delivery Project",
  },
  "/krishna": {
    page: KrishnaPage,
    extras: KrishnaPageExtras,
    title: "Krishna Ayurvedic Center",
  },
  "/portfolio-details": {
    page: PortfolioDetailsPage,
    extras: PortfolioDetailsPageExtras,
    title: "Portfolio Details",
  },
  "/portfolio-details2": {
    page: PortfolioDetails2Page,
    extras: PortfolioDetails2PageExtras,
    title: "Portfolio Details",
  },
};

function cleanPath(pathname) {
  const path = pathname.toLowerCase().replace(/\.html$/, "");
  return path === "/index" ? "/" : path;
}

const carouselOptions = {
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  dots: false,
  infinite: true,
  arrows: true,
  speed: 500,
  prevArrow: '<i class="fas left icon fa-arrow-left"></i>',
  nextArrow: '<i class="fas right icon fa-arrow-right"></i>',
  responsive: [
    {
      breakpoint: 768,
      settings: { slidesToShow: 1, slidesToScroll: 1 },
    },
  ],
};

function usePortfolioCarousels(pathname) {
  useEffect(() => {
    const $ = window.jQuery;
    if (!$?.fn?.slick) return undefined;
    const selectors = [
      ".client-feedback-slider",
      ".article-publications-slider",
    ];
    const initialized = [];

    selectors.forEach((selector) => {
      const $carousel = $(selector).not(".slick-initialized");
      if ($carousel.length) {
        $carousel.slick(carouselOptions);
        initialized.push($carousel);
      }
    });
    const $galleries = $(".parent-container");
    if ($galleries.length && $.fn.magnificPopup) {
      $galleries.magnificPopup({
        delegate: ".gallery-popup",
        type: "image",
        gallery: { enabled: true },
      });
    }

    return () => {
      initialized.forEach(($carousel) => {
        if ($carousel.hasClass("slick-initialized")) $carousel.slick("unslick");
      });
      if ($galleries.length && $galleries.data("magnificPopup")) {
        $galleries.magnificPopup("destroy");
      }
    };
  }, [pathname]);
}

function FormFeedback({ status }) {
  if (
    !status.message ||
    (status.id === "journeyForm" && status.kind === "success")
  )
    return null;
  return (
    <div
      className={`form-feedback ${status.kind}`}
      role={status.kind === "error" ? "alert" : "status"}
      aria-live="polite"
    >
      {status.message}
    </div>
  );
}

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const path = cleanPath(location.pathname);
  const route = routes[path] ?? routes["/"];
  const Page = route.page;
  const Extras = route.extras;
  const [formStatus, setFormStatus] = useState({
    id: "",
    kind: "",
    message: "",
  });
  usePortfolioCarousels(location.pathname);

  useEffect(() => {
    const shapes = document.querySelectorAll(".move-with-cursor");
    if (!shapes.length) return undefined;

    function moveShapes(event) {
      shapes.forEach((shape) => {
        const movement = Number(shape.dataset.value) || 1;
        shape.style.transition =
          "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)";
        shape.style.transform = `translate(${0.01 * event.clientX * movement}px, ${0.01 * event.clientY * movement}px)`;
      });
    }

    document.addEventListener("mousemove", moveShapes);
    return () => document.removeEventListener("mousemove", moveShapes);
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname.toLowerCase() !== path) {
      navigate(path, { replace: true });
    }
  }, [location.pathname, navigate, path]);

  useEffect(() => {
    document.title = `AdityaKraft ${route.title}`;
    window.scrollTo(0, 0);
    setFormStatus({ id: "", kind: "", message: "" });
  }, [location.pathname, route.title]);

  function handleInternalNavigation(event) {
    if (!(event.target instanceof Element)) return;
    const anchor = event.target.closest("a[href]");
    if (!anchor || anchor.target === "_blank" || event.defaultPrevented) return;

    const destination = new URL(anchor.href, window.location.href);
    if (
      destination.origin !== window.location.origin ||
      !routes[cleanPath(destination.pathname)]
    )
      return;

    event.preventDefault();
    navigate(cleanPath(destination.pathname));
  }

  async function submitForm(event) {
    const form = event.target;
    if (
      !(form instanceof HTMLFormElement) ||
      !form.action.startsWith("https://formspree.io/")
    )
      return;

    event.preventDefault();
    if (formStatus.kind === "sending") return;
    setFormStatus({ id: form.id, kind: "sending", message: "Sending..." });

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      let data = null;
      try {
        data = await response.json();
      } catch {
        data = null;
      }

      if (!response.ok) {
        const errors = Array.isArray(data?.errors)
          ? data.errors.map((error) => error.message).join(", ")
          : "";
        setFormStatus({
          id: form.id,
          kind: "error",
          message: errors || "Something went wrong. Please try again.",
        });
        return;
      }

      if (form.id === "contact-form") form.reset();
      setFormStatus({
        id: form.id,
        kind: "success",
        message:
          form.id === "journeyForm"
            ? "Thank you for sharing your journey. If selected, I'll get in touch with you."
            : "Thank you! Your message has been sent successfully.",
      });
    } catch {
      setFormStatus({
        id: form.id,
        kind: "error",
        message: "Network error. Please check your connection and try again.",
      });
    }
  }

  const isJourneySubmitted =
    formStatus.id === "journeyForm" && formStatus.kind === "success";
  const rootClassName = [
    formStatus.kind === "sending" ? "form-sending" : "",
    isJourneySubmitted ? "journey-submitted" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <SiteHeader activePage={path.slice(1) || "index"} />
      <div
        id="page-content"
        className={rootClassName}
        onSubmit={submitForm}
        onClick={handleInternalNavigation}
      >
        <FormFeedback status={formStatus} />
        <main>
          {route.home ? (
            <Page />
          ) : (
            <>
              <section className="content-box-area mt-4">
                <div className="container">
                  <div className="row g-4">
                    <ProfileCard />
                    <div className="col-xl-8">
                      <Page />
                    </div>
                  </div>
                </div>
              </section>
              {Extras && <Extras />}
              <BackgroundShapes />
            </>
          )}
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
