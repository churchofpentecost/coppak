import type { Metadata } from "next";
import MinistersDirectory from "./MinistersDirectory";
import "./ministers.css";

export const metadata: Metadata = {
  title: "Ministers & Wives | The Church of Pentecost Pakistan",
  description: "Meet the ministers and wives serving The Church of Pentecost Pakistan, with 47 original portraits across seven regions.",
  alternates: { canonical: "/about/ministers-and-wives" },
  openGraph: {
    title: "Ministers & Wives | COPPAK",
    description: "The Church of Pentecost Pakistan ministers and wives, presented by region.",
    url: "/about/ministers-and-wives",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <MinistersDirectory />;
}
