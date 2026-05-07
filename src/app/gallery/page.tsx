import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="hero" style={{ minHeight: "80vh" }}>
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        
        <div className="container" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
          <ScrollReveal>
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Portfolio Coming Soon
            </div>
            <h1 className="section-title" style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)", marginBottom: "1.5rem" }}>
              Work <span className="gradient-text">Gallery</span>
            </h1>
            <p className="section-subtitle" style={{ margin: "0 auto 2.5rem" }}>
              A picture is worth a thousand words. We are currently curating a collection of our finest 
              transformations to showcase the SparkUp difference. Check back soon for our full portfolio.
            </p>
            <div className="hero-buttons" style={{ justifyContent: "center" }}>
              <Link href="/" className="btn btn-primary">
                Back to Home
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Book Your Transformation
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
