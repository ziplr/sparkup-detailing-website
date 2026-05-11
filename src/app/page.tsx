import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

/* ── SVG Icon helpers ── */
const StarIcon = () => (
  <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
);

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ═══════════ HERO ═══════════ */}
      <section className="hero" id="hero" style={{ paddingTop: "100px" }}>
        <div className="hero-bg">
          <Image
            src="/Images/hero-honda-darkened.png"
            alt="Freshly detailed luxury car with mirror finish"
            fill
            style={{ objectFit: "cover" }}
            priority
            quality={85}
          />
        </div>
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />

        <div className="container hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Now Booking — Mobile Service
          </div>
          <h1>
            Premium Mobile<br />
            <span className="gradient-text">Car Detailing</span>
          </h1>
          <p>
            Showroom-quality detailing straight to your driveway.
            Ceramic coatings, interior restoration, and headlight clarity — 
            all with the convenience of a mobile service.
          </p>
          <div className="hero-buttons">
            <Link href="/contact" className="btn btn-primary">
              Get a Free Quote
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
            <Link href="/services" className="btn btn-outline">
              View Services
            </Link>
          </div>
        </div>
      </section>



      {/* ═══════════ SERVICES ═══════════ */}
      <section className="section" id="services-preview">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-label">What We Offer</span>
              <h2 className="section-title">Our Premium Services</h2>
              <p className="section-subtitle">
                From full interior deep cleans to headlight restoration, 
                we bring professional-grade care directly to your door.
              </p>
            </div>
          </ScrollReveal>

          <div className="services-grid">
            {/* Exterior */}
            <ScrollReveal delay={0}>
              <div className="glass-card service-card">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18 10l-2.7-3.6A2 2 0 0 0 13.7 5H6.3a2 2 0 0 0-1.6.8L2 9.5 .5 11.1A2 2 0 0 0 0 13v3c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
                </div>
                <h3>Exterior Detail</h3>
                <p>Hand wash, clay bar decontamination, machine polish, and premium sealant for a deep, lasting shine.</p>
              </div>
            </ScrollReveal>

            {/* Interior */}
            <ScrollReveal delay={100}>
              <div className="glass-card service-card">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 8h20"/><path d="M6 12h4"/></svg>
                </div>
                <h3>Interior Detail</h3>
                <p>Deep vacuuming, steam clean, leather conditioning, and dashboard restoration for a fresh-feel cabin.</p>
              </div>
            </ScrollReveal>
            {/* Headlight Restoration */}
            <ScrollReveal delay={200}>
              <div className="glass-card service-card">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V16h8v-1.3A7 7 0 0 0 12 2z"/></svg>
                </div>
                <h3>Headlight Restoration</h3>
                <p>Professional wet-sanding and polishing to restore clarity, improve visibility, and add UV protection.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════ BEFORE / AFTER ═══════════ */}
      <section className="section before-after" id="before-after">
        <div className="container">
          <div className="ba-layout">
            <ScrollReveal>
              <div className="ba-image-wrapper">
                <Image
                  src="/Images/subaru-before-after-labeled.png"
                  alt="Before and after headlight restoration comparison"
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="ba-content">
                <span className="section-label">Real Results</span>
                <h3>See The <span className="gradient-text">Transformation</span></h3>
                <p>
                  Every vehicle we touch receives the same meticulous attention
                  to detail. From foggy headlights to mirror-finish paint, our
                  results speak for themselves.
                </p>
                <div className="ba-features">
                  <div className="ba-feature">
                    <div className="ba-feature-icon"><CheckIcon /></div>
                    <span>Professional-grade compounds &amp; polishes</span>
                  </div>
                  <div className="ba-feature">
                    <div className="ba-feature-icon"><CheckIcon /></div>
                    <span>Multi-stage correction process</span>
                  </div>
                  <div className="ba-feature">
                    <div className="ba-feature-icon"><CheckIcon /></div>
                    <span>UV-resistant ceramic sealant finish</span>
                  </div>
                  <div className="ba-feature">
                    <div className="ba-feature-icon"><CheckIcon /></div>
                    <span>Guaranteed satisfaction on every job</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════ WHY CHOOSE US ═══════════ */}
      <section className="section" id="why-us">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-label">The SparkUp Difference</span>
              <h2 className="section-title">Why Choose SparkUp</h2>
              <p className="section-subtitle">
                We&apos;re not just another car wash. We&apos;re detailing
                enthusiasts who treat every car like our own.
              </p>
            </div>
          </ScrollReveal>

          <div className="why-grid">
            <ScrollReveal delay={0}>
              <div className="glass-card why-card">
                <div className="why-icon">
                  <svg viewBox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <h4>We Come to You</h4>
                  <p>Fully mobile service — we detail your car at your home, office, or wherever suits you best.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="glass-card why-card">
                <div className="why-icon">
                  <svg viewBox="0 0 24 24"><path d="M12 2 L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26Z"/></svg>
                </div>
                <div>
                  <h4>Premium Products</h4>
                  <p>We only use trusted, professional-grade detailing products that deliver superior results.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="glass-card why-card">
                <div className="why-icon">
                  <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                </div>
                <div>
                  <h4>Attention to Detail</h4>
                  <p>Every inch of your vehicle is carefully treated. We don&apos;t cut corners — ever.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="glass-card why-card">
                <div className="why-icon">
                  <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <div>
                  <h4>Community Focused</h4>
                  <p>Proudly serving our local community with personalized service and a focus on long-term relationships.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="glass-card why-card">
                <div className="why-icon">
                  <svg viewBox="0 0 24 24"><path d="M14 9V5a3 3 0 0 0-6 0v4"/><rect width="14" height="10" x="5" y="9" rx="2"/></svg>
                </div>
                <div>
                  <h4>Satisfaction Guaranteed</h4>
                  <p>Not thrilled with the result? We&apos;ll come back and make it right — no questions asked.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="glass-card why-card">
                <div className="why-icon">
                  <svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <div>
                  <h4>Transparent Pricing</h4>
                  <p>Clear, upfront quotes with no hidden fees. Premium results at fair, competitive prices.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════ TESTIMONIALS ═══════════ */}
      <section className="section" id="testimonials" style={{ background: "linear-gradient(180deg, transparent, var(--navy-dark) 20%, var(--navy-dark) 80%, transparent)" }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-label">Client Love</span>
              <h2 className="section-title">What Our Clients Say</h2>
              <p className="section-subtitle">
                Don&apos;t just take our word for it — hear from drivers who&apos;ve
                experienced the SparkUp difference.
              </p>
            </div>
          </ScrollReveal>

          <div className="testimonials-grid">
            <ScrollReveal delay={0}>
              <div className="glass-card testimonial-card">
                <div className="testimonial-stars">
                  <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                </div>
                <blockquote>
                  &ldquo;Really loved their service. Came to my home and restored 
                  my headlights with no extra cost. Highly recommend!&rdquo;
                </blockquote>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">FN</div>
                  <div className="testimonial-info">
                    <strong>Farhan N.</strong>
                    <span>Local Customer</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="glass-card testimonial-card">
                <div className="testimonial-stars">
                  <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                </div>
                <blockquote>
                  &ldquo;The convenience of having them come to my house was
                  amazing. Professional, on time, and the interior detail was
                  next level. Best mobile service in town!&rdquo;
                </blockquote>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">SL</div>
                  <div className="testimonial-info">
                    <strong>Sarah L.</strong>
                    <span>Toyota RAV4 Owner</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="glass-card testimonial-card">
                <div className="testimonial-stars">
                  <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                </div>
                <blockquote>
                  &ldquo;SparkUp is on another level. Meticulous work and the 
                  ceramic sealant has my car looking like it just left the showroom.
                  Will definitely book again!&rdquo;
                </blockquote>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">JT</div>
                  <div className="testimonial-info">
                    <strong>James T.</strong>
                    <span>BMW 3 Series Owner</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="section cta-section" id="cta">
        <div className="container">
          <ScrollReveal>
            <div className="cta-box">
              <h2>Ready to <span className="gradient-text">SparkUp</span> Your Ride?</h2>
              <p>
                Book your mobile detailing session today and experience the
                difference professional care makes.
              </p>
              <div className="cta-buttons">
                <Link href="/contact" className="btn btn-primary">
                  Get a Free Quote
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
                <a href="tel:0400000000" className="btn btn-outline">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  Call Us Now
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
