import Link from "next/link";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Premium Mobile Detailing Packages | SparkUp Detailing",
  description: "Explore our premium mobile car detailing packages and add-ons. We offer everything from mini details to pre-sale preparations right at your doorstep.",
};

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      
      <div style={{ position: "relative", overflow: "hidden" }}>
        {/* Background Orbs spanning both Header and Packages */}
        <div className="hero-orb hero-orb-1" style={{ top: "5%", right: "-5%" }} />
        <div className="hero-orb hero-orb-2" style={{ top: "40%", left: "-10%" }} />

        {/* Header Section */}
        <main style={{ paddingTop: "160px", paddingBottom: "40px", position: "relative", zIndex: 2, textAlign: "center" }}>
          <div className="container">
            <ScrollReveal>
              <h1 className="section-title" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", marginBottom: "1rem" }}>
                Our <span className="gradient-text">Packages</span>
              </h1>
              <p className="section-subtitle" style={{ margin: "0 auto" }}>
                Premium mobile detailing services designed to restore, protect, and maintain your vehicle's value. We bring the ultimate clean right to your doorstep.
              </p>
            </ScrollReveal>
          </div>
        </main>

        {/* Main Packages Section */}
        <section className="section" style={{ paddingTop: "2rem", position: "relative", zIndex: 2 }}>
          <div className="container">
            <div className="pricing-grid">
              
              {/* Package 1: Mini Detail */}
              <ScrollReveal>
                <div className="glass-card pricing-card">
                  <div className="pricing-header">
                    <h3 className="pricing-title">Mini Detail</h3>
                    <div className="pricing-price">$79</div>
                    <p className="pricing-desc">Brief exterior wash and interior clean. Great for regular maintenance.</p>
                  </div>
                  <div className="pricing-features">
                    <div className="pricing-feature"><CheckIcon /> Exterior hand wash & dry</div>
                    <div className="pricing-feature"><CheckIcon /> Clean wheels & dress tires</div>
                    <div className="pricing-feature"><CheckIcon /> Interior vacuum (seats & carpets)</div>
                    <div className="pricing-feature"><CheckIcon /> Wipe down dashboard & console</div>
                    <div className="pricing-feature"><CheckIcon /> Clean interior/exterior windows</div>
                  </div>
                  <div className="pricing-action">
                    <Link href="/contact?service=Mini+Detail" className="btn btn-outline">Book Now</Link>
                  </div>
                </div>
              </ScrollReveal>

              {/* Package 2: Exterior Only */}
              <ScrollReveal delay={100}>
                <div className="glass-card pricing-card">
                  <div className="pricing-header">
                    <h3 className="pricing-title">Exterior Only</h3>
                    <div className="pricing-price"><span>From</span> $89</div>
                    <p className="pricing-desc">Thorough exterior wash, wheels, tires, and basic wax/sealant.</p>
                  </div>
                  <div className="pricing-features">
                    <div className="pricing-feature"><CheckIcon /> Premium foam cannon wash</div>
                    <div className="pricing-feature"><CheckIcon /> Deep clean wheels, tires & wheel wells</div>
                    <div className="pricing-feature"><CheckIcon /> Tire dressing application</div>
                    <div className="pricing-feature"><CheckIcon /> Spray wax / sealant application</div>
                    <div className="pricing-feature"><CheckIcon /> Clean exterior windows & mirrors</div>
                    <div className="pricing-feature"><CheckIcon /> Bug & tar removal</div>
                  </div>
                  <div className="pricing-action">
                    <Link href="/contact?service=Exterior+Only" className="btn btn-outline">Book Now</Link>
                  </div>
                </div>
              </ScrollReveal>

              {/* Package 3: Interior Only */}
              <ScrollReveal delay={200}>
                <div className="glass-card pricing-card">
                  <div className="pricing-header">
                    <h3 className="pricing-title">Interior Only</h3>
                    <div className="pricing-price"><span>From</span> $99</div>
                    <p className="pricing-desc">Deep vacuum, wipe down, windows, and light stain treatment.</p>
                  </div>
                  <div className="pricing-features">
                    <div className="pricing-feature"><CheckIcon /> Thorough interior & trunk vacuum</div>
                    <div className="pricing-feature"><CheckIcon /> Deep clean all interior plastics & vinyl</div>
                    <div className="pricing-feature"><CheckIcon /> UV protection dressing applied</div>
                    <div className="pricing-feature"><CheckIcon /> Light stain treatment on fabrics</div>
                    <div className="pricing-feature"><CheckIcon /> Clean interior windows streak-free</div>
                    <div className="pricing-feature"><CheckIcon /> Clean door jambs</div>
                  </div>
                  <div className="pricing-action">
                    <Link href="/contact?service=Interior+Only" className="btn btn-outline">Book Now</Link>
                  </div>
                </div>
              </ScrollReveal>

              {/* Package 4: Full Detail (Most Popular) */}
              <ScrollReveal>
                <div style={{ position: 'relative', height: '100%' }}>
                  <div className="pricing-badge">Most Popular</div>
                  <div className="glass-card pricing-card popular" style={{ overflow: 'hidden' }}>
                    <div className="pricing-header">
                      <h3 className="pricing-title">Full Detail</h3>
                      <div className="pricing-price"><span>From</span> $199</div>
                      <p className="pricing-desc">Comprehensive interior and exterior cleaning. The ultimate refresh.</p>
                    </div>
                    <div className="pricing-features">
                      <div className="pricing-feature"><CheckIcon /> Everything in Interior & Exterior packages</div>
                      <div className="pricing-feature"><CheckIcon /> Iron decontamination on paint</div>
                      <div className="pricing-feature"><CheckIcon /> High-quality paste wax or sealant</div>
                      <div className="pricing-feature"><CheckIcon /> Shampoo & extract floor mats</div>
                      <div className="pricing-feature"><CheckIcon /> Leather cleaning & conditioning</div>
                      <div className="pricing-feature"><CheckIcon /> Exhaust tip cleaning</div>
                    </div>
                    <div className="pricing-action">
                      <Link href="/contact?service=Full+Detail" className="btn btn-primary">Book Full Detail</Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Package 5: Pre-Sale Detail (Premium) */}
              <ScrollReveal delay={100}>
                <div style={{ position: 'relative', height: '100%' }}>
                  <div className="pricing-badge" style={{ background: 'linear-gradient(135deg, #1E3A8A, #3B82F6)'}}>Best Value</div>
                  <div className="glass-card pricing-card popular" style={{ borderColor: 'var(--blue-light)', overflow: 'hidden' }}>
                    <div className="pricing-header">
                      <h3 className="pricing-title">Pre-Sale Detail</h3>
                      <div className="pricing-price"><span>From</span> $299</div>
                      <p className="pricing-desc">Maximize resale value. Includes Full Detail + Engine Bay + Scuff improvement.</p>
                    </div>
                    <div className="pricing-features">
                      <div className="pricing-feature"><CheckIcon /> Everything in Full Detail package</div>
                      <div className="pricing-feature"><CheckIcon /> Engine bay deep clean & dressing</div>
                      <div className="pricing-feature"><CheckIcon /> Minor scratch & scuff improvement</div>
                      <div className="pricing-feature"><CheckIcon /> Deep carpet & seat extraction</div>
                      <div className="pricing-feature"><CheckIcon /> Headlight restoration (if needed)</div>
                      <div className="pricing-feature"><CheckIcon /> Plastic trim restoration</div>
                    </div>
                    <div className="pricing-action">
                      <Link href="/contact?service=Pre-Sale+Detail" className="btn btn-primary" style={{ background: 'linear-gradient(135deg, #1E3A8A, #3B82F6)'}}>Book Pre-Sale Detail</Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

            </div>
          </div>
        </section>
      </div>

      {/* Add-Ons Section */}
      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-label">Enhance Your Detail</span>
              <h2 className="section-title">Optional Add-Ons</h2>
              <p className="section-subtitle">Customize your service package with these specialized treatments.</p>
            </div>
            
            <div className="addons-grid">
              <div className="addon-card">
                <div className="addon-info">
                  <h4>Ceramic Spray Coating</h4>
                  <p>3-6 months of premium paint protection and gloss.</p>
                </div>
                <div className="addon-price">$65</div>
              </div>

              <div className="addon-card">
                <div className="addon-info">
                  <h4>Headlight Restoration</h4>
                  <p>Remove yellowing/oxidation for clear, safe night driving.</p>
                </div>
                <div className="addon-price">$80 <span style={{fontSize: '0.8rem', color: 'var(--gray-300)', fontWeight: 'normal'}}>/ pair</span></div>
              </div>

              <div className="addon-card">
                <div className="addon-info">
                  <h4>Engine Bay Clean</h4>
                  <p>Degrease and dress engine bay for a like-new appearance.</p>
                </div>
                <div className="addon-price">$75</div>
              </div>

              <div className="addon-card">
                <div className="addon-info">
                  <h4>Scratch & Scuff Repair</h4>
                  <p>Targeted polishing to minimize or remove minor blemishes.</p>
                </div>
                <div className="addon-price">$59</div>
              </div>

              <div className="addon-card">
                <div className="addon-info">
                  <h4>Stain Removal</h4>
                  <p>Focused extraction and treatment on heavy interior stains.</p>
                </div>
                <div className="addon-price">$49</div>
              </div>

              <div className="addon-card">
                <div className="addon-info">
                  <h4>Pet Hair Removal</h4>
                  <p>Specialized tools to remove embedded pet hair from carpets.</p>
                </div>
                <div className="addon-price">$25+</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="cta-box">
              <h2>Ready to SparkUp Your Ride?</h2>
              <p>Book your premium mobile detail today and let us bring the shine directly to your driveway or workplace.</p>
              <div className="cta-buttons">
                <Link href="/contact" className="btn btn-primary">Book Your Detail Now</Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
