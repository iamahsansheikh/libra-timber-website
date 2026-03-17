import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    species: '',
    requirements: ''
  })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = 'Timber Quote Request'
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ACompany: ${formData.company}%0D%0ASpecies: ${formData.species}%0D%0ARequirements: ${formData.requirements}`
    window.location.href = `mailto:libratc@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="App">
      {/* NAVBAR */}
      <nav id="nav" className={scrolled ? 'scrolled' : ''}>
        <a href="#home" className="logo">
          <div className="logo-img">
            <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" style={{width:'50px',height:'50px',borderRadius:'12px'}}>
              <defs>
                <linearGradient id="lgbg" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#A0693A"/>
                  <stop offset="100%" stopColor="#3D1E08"/>
                </linearGradient>
              </defs>
              <rect width="48" height="48" rx="11" fill="url(#lgbg)"/>
              <line x1="24" y1="14" x2="24" y2="36" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <line x1="10" y1="18" x2="38" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <line x1="13" y1="18" x2="13" y2="24" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2"/>
              <line x1="35" y1="18" x2="35" y2="24" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2"/>
              <path d="M9 25 Q13 28 17 25" stroke="white" strokeWidth="1.8" fill="none"/>
              <path d="M31 25 Q35 27 39 25" stroke="white" strokeWidth="1.8" fill="none"/>
              <rect x="22.5" y="12.5" width="3" height="3" rx="0.5" fill="white" transform="rotate(45 24 14)"/>
              <line x1="18" y1="36" x2="30" y2="36" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="logo-words">
            <span className="logo-name">Libra Timber</span>
            <span className="logo-tag">Premium Wood Importers</span>
          </div>
        </a>

        <nav className="nav-links">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#why">Why Us</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-right">
          <div className="nav-socials">
            <a href="https://instagram.com/libratradingcorporation" target="_blank" rel="noopener noreferrer" className="nav-soc">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/></svg>
            </a>
            <a href="https://wa.me/923218873721" target="_blank" rel="noopener noreferrer" className="nav-soc">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
            </a>
          </div>
          <a href="#contact" className="btn-nav">Request a Quote</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-rpanel"></div>
        
        {/* Photo mosaic */}
        <div className="hero-photos">
          <div className="hph tall">
            <img src="/gallery/bundled-lumber-warehouse.jpg" alt="Ash Lumber" />
            <div className="hph-cap">Ash Lumber</div>
          </div>
          <div className="hph">
            <img src="/gallery/logs-truck-loading.jpg" alt="Logs Truck Loading" />
            <div className="hph-cap">Logs Loading</div>
          </div>
          <div className="hph">
            <img src="/gallery/ash1.jpg" alt="White Pine 19mm" />
            <div className="hph-cap">WP 19mm</div>
          </div>
        </div>
        
        <div className="hero-body">
          <div className="hero-left">
            <div className="hero-eyebrow">Lahore, Pakistan · Est. 15+ Years</div>
            <h1>Premium<br/>Timber<br/>of <em>Character</em></h1>
            <p className="hero-sub">
              ASH, Red Oak, White Pine, Yellow Pine and Softwood logs — sourced from certified mills, graded to specification, and delivered to our customers.
            </p>
            <div className="hero-btns">
              <a href="mailto:libratc@gmail.com" className="btn-prim">
                <svg viewBox="0 0 24 24">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                Request a Quote
              </a>
              <a href="#products" className="btn-out">View Products</a>
            </div>
            <div className="hero-rule"></div>
            <div className="hero-stats">
              <div className="hs">
                <div className="hs-n">20+</div>
                <div className="hs-l">Species Available</div>
              </div>
              <div className="hs">
                <div className="hs-n">15+</div>
                <div className="hs-l">Years Experience</div>
              </div>
              <div className="hs">
                <div className="hs-n">50+</div>
                <div className="hs-l">Ports Served</div>
              </div>
              <div className="hs">
                <div className="hs-n">24h</div>
                <div className="hs-l">Quote Response</div>
              </div>
            </div>
          </div>
        </div>

        <div className="trust-strip">
          <div className="ts-inner">
            <div className="ts-item">
              <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <span><strong>KD-HT</strong> Certified</span>
            </div>
            <div className="ts-sep"></div>
            <div className="ts-item">
              <svg viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
              <span><strong>Delivery</strong> to any city</span>
            </div>
            <div className="ts-sep"></div>
            <div className="ts-item">
              <svg viewBox="0 0 24 24"><polyline points="9,11 12,14 22,4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
              <span><strong>ISPM-15</strong> Heat Treated</span>
            </div>
            <div className="ts-sep"></div>
            <div className="ts-item">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
              <span>Quote in <strong>24 hours</strong></span>
            </div>
            <div className="ts-sep"></div>
            <div className="ts-item">
              <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.1 1.22 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
              <span><strong>+92 321 887 3721</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="sec bg-white" id="services">
        <div className="sec-wrap">
          <div className="sec-hd center">
            <div className="label">Our Services</div>
            <h2>What We <em>Offer</em></h2>
            <p>Comprehensive timber solutions from sourcing to delivery</p>
          </div>
          <div className="svcs">
            <div className="svc">
              <div className="svc-ico">
                <svg viewBox="0 0 24 24">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
              </div>
              <h3>Direct Import</h3>
              <p>We source premium hardwood and softwood directly from certified mills across North America, Europe, and Asia.</p>
              <a href="#contact" className="svc-lnk">
                Get Details
                <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            </div>
            <div className="svc gr-top">
              <div className="svc-ico g">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <line x1="3" y1="9" x2="21" y2="9"/>
                  <line x1="9" y1="21" x2="9" y2="9"/>
                </svg>
              </div>
              <h3>Custom Orders</h3>
              <p>Special dimensions, species, or grades? We handle custom orders with flexible MOQs tailored to your project.</p>
              <a href="#contact" className="svc-lnk g">
                Order Custom
                <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            </div>
            <div className="svc">
              <div className="svc-ico">
                <svg viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3>Quality Assurance</h3>
              <p>Every shipment is inspected for moisture content, grading standards, and defects before leaving the source.</p>
              <a href="#about" className="svc-lnk">
                Learn More
                <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            </div>
            <div className="svc gr-top">
              <div className="svc-ico g">
                <svg viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3>Expert Consultation</h3>
              <p>Our team helps you select the right species and grade for your furniture, flooring, or construction project.</p>
              <a href="#contact" className="svc-lnk g">
                Contact Us
                <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="sec bg-white" id="about">
        <div className="sec-wrap">
          <div className="about-grid">
            <div className="about-photos">
              <div className="ap span2">
                <img src="/gallery/Log Yard Picture.JPG" alt="Log Yard" />
              </div>
              <div className="ap tall">
                <img src="/gallery/WP 19MM.png" alt="White Pine Lumber" />
              </div>
              <div className="ap sq">
                <img src="/gallery/ASH Lumber.jpg" alt="Southern Yellow Pine Stock" />
              </div>
              <div className="ap-badge">
                <div className="ap-badge-n">15+</div>
                <div className="ap-badge-l">YEARS IN BUSINESS</div>
              </div>
            </div>
            <div className="about-txt">
              <h2>Pakistan's Trusted <em>Timber</em> Partner</h2>
              <p>
                Since 2008, Libra Timber has been the go-to supplier for Pakistan's woodworking industry. We've built lasting relationships with mills in North America and Europe to bring you the finest hardwoods and softwoods at competitive prices.
              </p>
              <p>
                Based in Lahore, we serve furniture manufacturers, architects, contractors, and individual craftsmen across Pakistan. Our reputation is built on quality, transparency, and reliability.
              </p>
              <div className="feat-list">
                <div className="feat">
                  <div className="feat-ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Certified Quality</h4>
                    <p>All timber sourced from certified, sustainable mills</p>
                  </div>
                </div>
                <div className="feat">
                  <div className="feat-ic g">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Fast Delivery</h4>
                    <p>Reliable logistics and timely customs clearance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <div className="gallery-strip">
        <div className="gal-track">
          {[...Array(12)].map((_, i) => {
            const images = [
              '/gallery/ais-branded-lumber.jpg',
              '/gallery/bundled-lumber-warehouse.jpg',
              '/gallery/log-pile-outdoor.jpg',
              '/gallery/logs-forest-harvest.jpg',
              '/gallery/logs-truck-loading.jpg',
              '/gallery/lumber-bundles-stacked.jpg',
              '/gallery/ais-branded-lumber.jpg',
              '/gallery/bundled-lumber-warehouse.jpg',
              '/gallery/log-pile-outdoor.jpg',
              '/gallery/logs-forest-harvest.jpg',
              '/gallery/logs-truck-loading.jpg',
              '/gallery/lumber-bundles-stacked.jpg'
            ];
            const labels = ['','', 'ASH Logs', 'White Pine Logs', 'White Pine Logs', 'White ASH', 'SYP Rough', 'SYP Dressed Lumber', 'ASH Logs'];
            return (
              <div key={i} className="gal-thumb">
                <img src={images[i % 12]} alt={labels[i % 12]} />
                <div className="gal-thumb-cap">{labels[i % 12]}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* VALUES */}
      <section className="sec bg-dark">
        <div className="sec-wrap">
          <div className="sec-hd center dark">
            <div className="label lt">Our Principles</div>
            <h2>What We <em>Stand For</em></h2>
            <p>Five commitments we make on every shipment, to every client, without exception.</p>
          </div>
          <div className="vals-grid">
            <div className="val">
              <div className="val-n">01</div>
              <h3>Uncompromising Quality</h3>
              <p>Every board is graded at source. Below-spec material never reaches the container.</p>
            </div>
            <div className="val">
              <div className="val-n">02</div>
              <h3>Transparent Pricing</h3>
              <p>No hidden fees. The CFT price we quote is exactly the price you pay.</p>
            </div>
            <div className="val">
              <div className="val-n">03</div>
              <h3>Reliable Lead Times</h3>
              <p>We hold stock and maintain direct mill relationships to honour every commitment.</p>
            </div>
            <div className="val">
              <div className="val-n">04</div>
              <h3>Certified Sourcing</h3>
              <p>Exclusively from mills with legal logging and grading certification. Full docs every time.</p>
            </div>
            <div className="val">
              <div className="val-n">05</div>
              <h3>Dedicated Service</h3>
              <p>One contact from first inquiry to delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="sec bg-white" id="products">
        <div className="sec-wrap">
          <div className="sec-hd">
            <div className="label">Our Range</div>
            <h2>Premium <em>Wood Species</em></h2>
            <p>From construction softwood to fine cabinet hardwood — we stock what the global market demands.</p>
          </div>
          <div className="prods">
            <div className="prod">
              <div className="prod-thumb" style={{background: 'linear-gradient(135deg, #8B4513, #654321)'}}>
                <div className="prod-tag br">HARDWOOD</div>
              </div>
              <div className="prod-body">
                <h3>Red Oak Hardwood</h3>
                <p>FAS grade Red Oak in standard and custom thicknesses. Rich open grain, excellent for fine joinery and flooring.</p>
                <div className="prod-foot">
                  <span className="prod-grade">GRADE: FAS/F1F KDHT</span>
                  <div className="prod-arr">
                    <svg viewBox="0 0 24 24">
                      <line x1="5" y1="12" x2="19" y2="12"/>
                      <polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="prod">
              <div className="prod-thumb" style={{background: 'linear-gradient(135deg, #DEB887, #CD853F)'}}>
                <div className="prod-tag br">HARDWOOD</div>
              </div>
              <div className="prod-body">
                <h3>White ASH</h3>
                <p>Dense and durable. Water-resistant. Perfect for high-end furniture, cabinetry, and door manufacturing.</p>
                <div className="prod-foot">
                  <span className="prod-grade">GRADE: FAS/F1F KDHT</span>
                  <div className="prod-arr">
                    <svg viewBox="0 0 24 24">
                      <line x1="5" y1="12" x2="19" y2="12"/>
                      <polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="prod">
              <div className="prod-thumb" style={{background: 'linear-gradient(135deg, #CD853F, #A0522D)'}}>
                <div className="prod-tag br">Softwood</div>
              </div>
              <div className="prod-body">
                <h3>Southern Yellow Pine</h3>
                <p>Fine, uniform grain. Exceptional hardness. Ideal for flooring, cabinetry, and door manufacturing.</p>
                <div className="prod-foot">
                  <span className="prod-grade">GRADE: SAP KDHT</span>
                  <div className="prod-arr">
                    <svg viewBox="0 0 24 24">
                      <line x1="5" y1="12" x2="19" y2="12"/>
                      <polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="prod">
              <div className="prod-thumb" style={{background: 'linear-gradient(135deg, #654321, #3E2723)'}}>
                <div className="prod-tag gr">SOFTWOOD</div>
              </div>
              <div className="prod-body">
                <h3>WHITE PINE</h3>
                <p>Whitish softwood with rich color. Stable and highly workable for premium doors and millwork.</p>
                <div className="prod-foot">
                  <span className="prod-grade">GRADE: STD/PREMIUM KDHT</span>
                  <div className="prod-arr">
                    <svg viewBox="0 0 24 24">
                      <line x1="5" y1="12" x2="19" y2="12"/>
                      <polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="prod-cta-card">
              <div className="prod-cta-inner">
                <svg viewBox="0 0 24 24">
                  <line x1="12" y1="5" x2="12" y2="19"/>
                  <line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
                <h3>Need a custom species?</h3>
                <p>We source any grade, dimension, or exotic species on request from our mill network.</p>
                <a href="#contact">
                  Enquire now
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </a>
              </div>
            </div> */}
            <div className="prod">
              <div className="prod-thumb" style={{background: 'linear-gradient(135deg, #654321, #3E2723)'}}>
                <div className="prod-tag gr">SOFTWOOD Logs</div>
              </div>
              <div className="prod-body">
                <h3>WHITE PINE & SYP Logs</h3>
                <p>Highly desirable to make premium lumber out of these high grade logs.</p>
                <div className="prod-foot">
                  <span className="prod-grade">GRADE: PRIME</span>
                  <div className="prod-arr">
                    <svg viewBox="0 0 24 24">
                      <line x1="5" y1="12" x2="19" y2="12"/>
                      <polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="sec bg-cream" id="why">
        <div className="sec-wrap">
          <div className="sec-hd center">
            <div className="label">Why Choose Us</div>
            <h2>The Libra <em>Advantage</em></h2>
          </div>
          <div className="why-grid">
            <div className="why-item">
              <div className="why-n">01</div>
              <div>
                <h3>Direct Import</h3>
                <p>We eliminate middlemen by sourcing directly from certified mills, passing savings to you.</p>
              </div>
            </div>
            <div className="why-item">
              <div className="why-n">02</div>
              <div>
                <h3>Quality Control</h3>
                <p>Every shipment is inspected for moisture content, grading, and defects before it reaches you.</p>
              </div>
            </div>
            <div className="why-item">
              <div className="why-n">03</div>
              <div>
                <h3>Expert Guidance</h3>
                <p>Our team helps you select the right species and grade for your specific project needs.</p>
              </div>
            </div>
            <div className="why-item">
              <div className="why-n">04</div>
              <div>
                <h3>Reliable Supply</h3>
                <p>15+ years of established relationships ensure consistent quality and availability.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <div className="cta-band">
        <div className="cta-inner">
          <div className="cta-txt">
            <h2>Ready to order?<br/><em>Let's talk timber.</em></h2>
            <p>First order or hundredth — we provide quality product, price fairly, deliver fast, and keep our word. Get in touch with us.</p>
          </div>
          <div className="cta-rgt">
            <div className="cta-tel">
              <svg viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.1 1.22 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
              </svg>
              +92 321 887 3721
            </div>
            <a href="mailto:libratc@gmail.com" className="btn-cta">
              <svg viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Send a Quote Request
            </a>
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <section className="sec bg-cream" id="contact">
        <div className="sec-wrap">
          <div className="cont-grid">
            <div className="cont-info">
              <div className="label">Get In Touch</div>
              <h2>Talk to Our <em>Timber Team</em></h2>
              <p>Tell us your species, grade, quantity, and location of delivery — and we'll reply with a competitive price.</p>
              <div className="ci-list">
                <div className="ci">
                  <div className="ci-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Office</h4>
                    <p>Shakam Chowk - Defence Road, Near Entrance of Bahria Town<br/>Lahore, Punjab, Pakistan 54000</p>
                  </div>
                </div>
                <div className="ci">
                  <div className="ci-icon g">
                    <svg viewBox="0 0 24 24">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.1 1.22 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Phone</h4>
                    <a href="tel:+923218873721">+92 321 887 3721</a>
                  </div>
                </div>
                <div className="ci">
                  <div className="ci-icon g">
                    <svg viewBox="0 0 24 24">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:libratc@gmail.com">libratc@gmail.com</a>
                  </div>
                </div>
                <div className="ci">
                  <div className="ci-icon">
                    <svg viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Hours</h4>
                    <p>Monday – Saturday · 9 AM – 7 PM PKT</p>
                  </div>
                </div>
              </div>
              <div className="c-socs">
                <a href="https://instagram.com/libratradingcorporation" target="_blank" rel="noopener noreferrer" className="c-soc">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="2" y="2" width="20" height="20" rx="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                  </svg>
                </a>
                <a href="https://wa.me/923218873721" target="_blank" rel="noopener noreferrer" className="c-soc">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
                  </svg>
                </a>
              </div>
            </div>
            <form className="cont-form" onSubmit={handleSubmit}>
              <h3>Request a Quote</h3>
              <div className="f2">
                <div className="fg">
                  <label>First Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required 
                  />
                </div>
                <div className="fg">
                  <label>Company</label>
                  <input 
                    type="text" 
                    name="company" 
                    placeholder="Company Ltd."
                    value={formData.company}
                    onChange={handleFormChange}
                  />
                </div>
              </div>
              <div className="fg">
                <label>Email</label>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleFormChange}
                  required 
                />
              </div>
              <div className="f2">
                <div className="fg">
                  <label>Species / Product</label>
                  <select 
                    name="species" 
                    value={formData.species}
                    onChange={handleFormChange}
                    required
                  >
                    <option value="">Select species…</option>
                    <option>S4S Southern Yellow Pine (KDHT)</option>
                    <option>Rough Southern Yellow Pine</option>
                    <option>Eastern White Pine Logs</option>
                    <option>White Ash Hardwood</option>
                    <option>Red Oak Hardwood</option>
                    <option>Custom / Other</option>
                  </select>
                </div>
                <div className="fg">
                  <label>Port of Discharge</label>
                  <input 
                    type="text" 
                    name="port" 
                    placeholder="Karachi, Jebel Ali…" 
                  />
                </div>
              </div>
              <div className="fg">
                <label>Requirements</label>
                <textarea 
                  name="requirements" 
                  value={formData.requirements}
                  onChange={handleFormChange}
                  placeholder="Grade, thickness, quantity in CBM or containers…"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-form">Send Quote Request</button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="foot-logo">
              <div className="foot-logo-img">
                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" style={{width:'42px',height:'42px',borderRadius:'10px'}}>
                  <defs>
                    <linearGradient id="flbg" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#A0693A"/>
                      <stop offset="100%" stopColor="#3D1E08"/>
                    </linearGradient>
                  </defs>
                  <rect width="48" height="48" rx="10" fill="url(#flbg)"/>
                  <line x1="24" y1="14" x2="24" y2="36" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="10" y1="18" x2="38" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="13" y1="18" x2="13" y2="24" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2"/>
                  <line x1="35" y1="18" x2="35" y2="24" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2"/>
                  <path d="M9 25 Q13 28 17 25" stroke="white" strokeWidth="1.8" fill="none"/>
                  <path d="M31 25 Q35 27 39 25" stroke="white" strokeWidth="1.8" fill="none"/>
                  <rect x="22.5" y="12.5" width="3" height="3" rx="0.5" fill="white" transform="rotate(45 24 14)"/>
                  <line x1="18" y1="36" x2="30" y2="36" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="16" y1="39" x2="32" y2="39" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="foot-logo-txt">
                <span className="n">Libra Timber</span>
                <span className="s">Premium Wood Importers</span>
              </div>
            </div>
            <p>Connecting certified timber origins with manufacturers who demand quality without compromise. Lahore, Pakistan — serving the world.</p>
            <div className="foot-socs">
              <a href="https://instagram.com/libratradingcorporation" target="_blank" rel="noopener noreferrer" className="foot-soc">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a href="https://wa.me/923218873721" target="_blank" rel="noopener noreferrer" className="foot-soc">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="foot-col">
            <h4>Navigate</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#why">Why Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Products</h4>
            <ul>
              <li><a href="#products">Southern Yellow Pine</a></li>
              <li><a href="#products">Eastern White Pine</a></li>
              <li><a href="#products">White Ash</a></li>
              <li><a href="#products">Red Oak</a></li>
              <li><a href="#products">Custom Species</a></li>
            </ul>
          </div>
          <div className="foot-col foot-contact">
            <h4>Contact</h4>
            <p>F-17 Bilal Centre, Nicholson Road<br/>Lahore 54000, Pakistan</p>
            <p><a href="mailto:libratc@gmail.com">libratc@gmail.com</a></p>
            <p><a href="tel:+923218873721">+92 321 887 3721</a></p>
            <p style={{marginTop:'10px',fontSize:'11px',color:'rgba(255,255,255,.2)'}}>Mon–Sat · 9 AM – 7 PM PKT</p>
          </div>
        </div>
        <div className="foot-bot">
          <div className="foot-copy">© 2025 Libra Timber · Lahore, Pakistan · All rights reserved</div>
          <div className="foot-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
