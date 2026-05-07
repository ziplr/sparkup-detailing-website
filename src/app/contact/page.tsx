import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
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
              Get In Touch
            </div>
            <h1 className="section-title" style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)", marginBottom: "1.5rem" }}>
              Contact <span className="gradient-text">Us</span>
            </h1>
            <p className="section-subtitle" style={{ margin: "0 auto 2.5rem" }}>
              Our booking system is currently being upgraded to serve you better. 
              In the meantime, please feel free to reach out via phone or email for quotes and bookings.
            </p>
            
            <div className="glass-card" style={{ maxWidth: "600px", margin: "0 auto 3rem", textAlign: "left" }}>
              <div style={{ display: "grid", gap: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div className="service-icon" style={{ margin: 0, width: "48px", height: "48px" }}>
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <h4 style={{ margin: 0 }}>Call or Text</h4>
                    <a href="tel:0400000000" style={{ color: "var(--blue-primary)", fontWeight: 600 }}>0400 000 000</a>
                  </div>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div className="service-icon" style={{ margin: 0, width: "48px", height: "48px" }}>
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div>
                    <h4 style={{ margin: 0 }}>Email Us</h4>
                    <a href="mailto:info@sparkupdetailing.com.au" style={{ color: "var(--blue-primary)", fontWeight: 600 }}>info@sparkupdetailing.com.au</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-buttons" style={{ justifyContent: "center" }}>
              <Link href="/" className="btn btn-primary">
                Back to Home
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
