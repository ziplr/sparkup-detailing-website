import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="hero" style={{ minHeight: "80vh", paddingTop: "100px" }}>
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />

        <div className="container" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
        <ScrollReveal>
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Under Development
          </div>
          <h1 className="section-title" style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)", marginBottom: "1.5rem" }}>
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="section-subtitle" style={{ margin: "0 auto 2.5rem" }}>
            We are currently refining our service packages to bring you the absolute best in mobile car detailing.
            Our full menu of premium exterior, interior, and restoration services is coming soon.
          </p>
          <div className="hero-buttons" style={{ justifyContent: "center" }}>
            <Link href="/" className="btn btn-primary">
              Back to Home
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Inquire Early
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </main >
      <Footer />
    </>
  );
}
