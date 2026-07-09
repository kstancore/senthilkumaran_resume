import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { User, Award, Briefcase, Menu, X } from 'lucide-react';

const navItems = [
  { to: '/', label: 'Personal Info', icon: User },
  { to: '/skills', label: 'Skills', icon: Award },
  { to: '/experience', label: 'Experience', icon: Briefcase },
];

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const SidebarContent = () => (
    <div className="flex flex-col h-full p-6 gap-6">
      {/* Profile */}
      <div className="flex flex-col items-center gap-3 pt-4">
        <div className="animate-float">
          <img
            src="/images/WhatsApp_Image_2026-07-09_at_9.25.24_PM.jpeg"
            alt="K. Senthilkumaran"
            className="profile-photo"
            style={{ width: 110, height: 110 }}
          />
        </div>
        <div className="text-center">
          <h2
            className="font-bold text-white leading-tight"
            style={{ fontFamily: 'Raleway, sans-serif', fontSize: 17 }}
          >
            K. Senthilkumaran
          </h2>
          <p
            className="text-xs mt-1 font-medium"
            style={{ color: '#64dcff', letterSpacing: '0.04em' }}
          >
            Senior Accountant
          </p>
          <p
            className="text-xs mt-1"
            style={{ color: 'rgba(255,255,255,0.45)' }}
          >
            Pondicherry, India
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="section-divider" />

      {/* Nav */}
      <nav className="flex flex-col gap-1 flex-1">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `nav-link ${isActive ? 'active' : ''}`
            }
            onClick={() => setMobileOpen(false)}
          >
            <Icon size={17} />
            <span style={{ fontSize: 14 }}>{label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="section-divider" />
      <div className="text-center" style={{ color: 'rgba(255,255,255,0.3)', fontSize: 11 }}>
        <p>25+ Years Experience</p>
        <p className="mt-1">Accounts & Finance</p>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className="glass-strong hidden lg:flex flex-col fixed left-0 top-0 h-full z-40"
        style={{ width: 240 }}
      >
        <SidebarContent />
      </aside>

      {/* Mobile Header */}
      <header
        className="glass-strong lg:hidden fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-5 py-3"
        style={{ borderRadius: 0, borderLeft: 'none', borderRight: 'none', borderTop: 'none' }}
      >
        <div className="flex items-center gap-3">
          <img
            src="/images/WhatsApp_Image_2026-07-09_at_9.25.24_PM.jpeg"
            alt="K. Senthilkumaran"
            className="profile-photo"
            style={{ width: 38, height: 38 }}
          />
          <div>
            <p className="text-white font-semibold text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>
              K. Senthilkumaran
            </p>
            <p style={{ color: '#64dcff', fontSize: 11 }}>Senior Accountant</p>
          </div>
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white p-2 rounded-lg"
          style={{ background: 'rgba(255,255,255,0.08)' }}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-30"
          onClick={() => setMobileOpen(false)}
          style={{ background: 'rgba(0,0,0,0.5)' }}
        >
          <aside
            className="glass-strong h-full"
            style={{ width: 260 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="pt-16">
              <SidebarContent />
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
