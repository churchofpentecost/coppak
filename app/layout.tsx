import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import SiteOverlays from "../components/SiteOverlays";
export const metadata: Metadata = {
  metadataBase: new URL("https://coppak.org"),
  title: "The Church of Pentecost Pakistan",
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/favicon-32.png", sizes: "32x32" }],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: "The Church of Pentecost Pakistan",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/og-image.png"] },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="/assets/vendors/bootstrap/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href="/assets/vendors/animate/animate.min.css" />
        <link
          rel="stylesheet"
          href="/assets/vendors/animate/custom-animate.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendors/fontawesome/css/all.min.css"
        />
        <link rel="stylesheet" href="/assets/vendors/jarallax/jarallax.css" />
        <link
          rel="stylesheet"
          href="/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendors/nouislider/nouislider.min.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendors/nouislider/nouislider.pips.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendors/odometer/odometer.min.css"
        />
        <link rel="stylesheet" href="/assets/vendors/swiper/swiper.min.css" />
        <link rel="stylesheet" href="/assets/vendors/oxpins-icons/style.css" />
        <link
          rel="stylesheet"
          href="/assets/vendors/tiny-slider/tiny-slider.min.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendors/reey-font/stylesheet.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendors/owl-carousel/owl.carousel.min.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendors/owl-carousel/owl.theme.default.min.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendors/bxslider/jquery.bxslider.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendors/bootstrap-select/css/bootstrap-select.min.css"
        />
        <link rel="stylesheet" href="/assets/vendors/vegas/vegas.min.css" />
        <link rel="stylesheet" href="/assets/vendors/jquery-ui/jquery-ui.css" />
        <link
          rel="stylesheet"
          href="/assets/vendors/timepicker/timePicker.css"
        />
        <link rel="stylesheet" href="/assets/css/oxpins.css" />
        <link rel="stylesheet" href="/assets/css/coppak-brand.css" />
        <link rel="stylesheet" href="/_astro/index.C953w-Oo.css" />
        <link rel="stylesheet" href="/styles/migration.css" />
      </head>
      <body>
        <div className="page-wrapper">
          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
        </div>
        <SiteOverlays />
      </body>
    </html>
  );
}
