import { Mail, Phone, MapPin, Linkedin, Calendar, Globe, Heart, Download, MessageCircle, GraduationCap } from 'lucide-react';

const contactItems = [
  { icon: Mail, label: 'Email', value: 'shansen1978@gmail.com', href: 'mailto:shansen1978@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 9443628623', href: 'tel:+919443628623' },
  { icon: MapPin, label: 'Location', value: 'Velrampet, Pondicherry - 605 004', href: null },
  { icon: Calendar, label: 'Date of Birth', value: '01 October 1978', href: null },
];

const languages = ['Tamil', 'English'];

const education = [
  {
    degree: 'B.Com (Bachelor of Commerce)',
    institution: 'Annamalai University, Chidambaram',
    mode: 'Correspondence',
  },
  {
    degree: 'H.Sc. (Higher Secondary)',
    institution: 'Calve College Govt. Higher Secondary School',
    mode: 'Pondicherry',
  },
  {
    degree: 'SSLC',
    institution: 'Thiru. Vi. Ka Govt High School',
    mode: 'Pondicherry',
  },
];

const interests = ['Accounting & Finance', 'Tax Compliance', 'Auditing', 'ERP Systems'];

export default function PersonalInfo() {
  return (
    <div className="space-y-8 py-4">
      {/* Hero */}
      <section
        className="glass-strong card-hover opacity-0-start animate-fade-up"
        style={{ padding: '40px 40px', animationFillMode: 'forwards' }}
      >
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          {/* Photo */}
          <div className="flex-shrink-0 animate-float">
            <img
              src="/images/WhatsApp_Image_2026-07-09_at_9.25.24_PM.jpeg"
              alt="K. Senthilkumaran"
              className="profile-photo"
              style={{ width: 160, height: 160 }}
            />
          </div>

          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm font-medium mb-2" style={{ color: '#64dcff', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Hello, I'm
            </p>
            <h1
              className="glow-text font-extrabold leading-tight mb-2"
              style={{ fontFamily: 'Raleway, sans-serif', fontSize: 'clamp(28px, 5vw, 44px)' }}
            >
              K. Senthilkumaran
            </h1>
            <p
              className="font-semibold mb-4"
              style={{ color: 'rgba(255,255,255,0.7)', fontSize: 18, fontFamily: 'Raleway, sans-serif' }}
            >
              Senior Accountant & Finance Professional
            </p>
            <p
              className="leading-relaxed mb-6"
              style={{ color: 'rgba(255,255,255,0.6)', fontSize: 15, maxWidth: 480 }}
            >
              A dedicated accounting professional with over 25 years of experience in financial management,
              tax compliance, and auditing across diverse industries — from optical manufacturing and textiles
              to jewellery and industrial automation. Committed to accuracy, compliance, and organisational growth.
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="mailto:shansen1978@gmail.com"
                className="glass-btn-accent flex items-center gap-2 px-6 py-3 text-sm"
                onClick={() => { window.location.href = 'mailto:shansen1978@gmail.com'; }}
              >
                <MessageCircle size={15} />
                Contact Me
              </a>
              <button className="glass-btn flex items-center gap-2 px-6 py-3 text-sm">
                <Download size={15} />
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Grid: Contact + Languages */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Contact Details */}
        <section
          className="glass card-hover opacity-0-start animate-fade-up delay-200"
          style={{ padding: 28, animationFillMode: 'forwards' }}
        >
          <h3
            className="glow-text font-bold mb-5"
            style={{ fontFamily: 'Raleway, sans-serif', fontSize: 18 }}
          >
            Contact Details
          </h3>
          <div className="space-y-4">
            {contactItems.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-3">
                <div
                  className="flex-shrink-0 flex items-center justify-center rounded-xl"
                  style={{
                    width: 38,
                    height: 38,
                    background: 'rgba(100, 220, 255, 0.1)',
                    border: '1px solid rgba(100, 220, 255, 0.2)',
                  }}
                >
                  <Icon size={15} style={{ color: '#64dcff' }} />
                </div>
                <div>
                  <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="text-sm font-medium hover:underline"
                      style={{ color: 'rgba(255,255,255,0.85)' }}
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.85)' }}>
                      {value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="space-y-6">
          {/* Languages */}
          <section
            className="glass card-hover opacity-0-start animate-fade-up delay-300"
            style={{ padding: 28, animationFillMode: 'forwards' }}
          >
            <h3
              className="glow-text font-bold mb-5"
              style={{ fontFamily: 'Raleway, sans-serif', fontSize: 18 }}
            >
              Languages
            </h3>
            <div className="flex flex-wrap gap-3">
              {languages.map((lang) => (
                <div key={lang} className="flex items-center gap-2 badge-pill">
                  <Globe size={13} style={{ color: '#64dcff' }} />
                  {lang}
                </div>
              ))}
            </div>
          </section>

          {/* Interests */}
          <section
            className="glass card-hover opacity-0-start animate-fade-up delay-400"
            style={{ padding: 28, animationFillMode: 'forwards' }}
          >
            <h3
              className="glow-text font-bold mb-5"
              style={{ fontFamily: 'Raleway, sans-serif', fontSize: 18 }}
            >
              Interests
            </h3>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <div key={interest} className="badge-pill">
                  <Heart size={12} style={{ color: '#a78bfa' }} />
                  {interest}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Education */}
      <section
        className="glass card-hover opacity-0-start animate-fade-up delay-500"
        style={{ padding: 28, animationFillMode: 'forwards' }}
      >
        <h3
          className="glow-text font-bold mb-6"
          style={{ fontFamily: 'Raleway, sans-serif', fontSize: 18 }}
        >
          Education
        </h3>
        <div className="space-y-4">
          {education.map((edu, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-xl p-4"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div
                className="flex-shrink-0 flex items-center justify-center rounded-xl"
                style={{
                  width: 40,
                  height: 40,
                  background: 'rgba(167, 139, 250, 0.12)',
                  border: '1px solid rgba(167, 139, 250, 0.25)',
                }}
              >
                <GraduationCap size={16} style={{ color: '#a78bfa' }} />
              </div>
              <div>
                <p className="font-semibold text-sm" style={{ color: 'white' }}>{edu.degree}</p>
                <p className="text-sm mt-0.5" style={{ color: 'rgba(255,255,255,0.55)' }}>{edu.institution}</p>
                <p className="text-xs mt-1" style={{ color: '#64dcff' }}>{edu.mode}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
