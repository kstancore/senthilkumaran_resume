import { useEffect, useRef, useState } from 'react';
import { Briefcase, MapPin, Calendar, ChevronRight } from 'lucide-react';

interface Job {
  company: string;
  industry: string;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  responsibilities: string[];
  color: string;
}

const jobs: Job[] = [
  {
    company: 'M/s. P. V. Enterprises (TRU EYE BRAND)',
    industry: 'Optical Lens Manufacturing',
    role: 'Senior Accountant',
    period: 'July 2020 – Present',
    location: 'Pondicherry',
    current: true,
    color: '#64dcff',
    responsibilities: [
      'Maintaining complete Books of Accounts for the organisation',
      'Preparing and filing GST returns accurately and within deadlines',
      'Finalising Balance Sheet and Profit & Loss Account at year end',
      'Overseeing financial transactions and ensuring regulatory compliance',
    ],
  },
  {
    company: 'Muthu Silk Plazzza',
    industry: 'Textile & Readymade Garments',
    role: 'Senior Accountant',
    period: 'June 2010 – March 2020',
    location: 'Pondicherry',
    color: '#a78bfa',
    responsibilities: [
      'Maintained complete Books of Accounts for a large-scale textile showroom',
      'Prepared and filed VAT and GST returns in a timely manner',
      'Finalised Balance Sheet and Profit & Loss Account annually',
      'Managed TDS aspects including deduction, payment, and returns',
      'Ensured compliance with all applicable tax regulations',
    ],
  },
  {
    company: 'Electro Automation',
    industry: 'Aluminium Channels Assembly for Industries',
    role: 'Accountant',
    period: '2007 – 2009',
    location: 'Pondicherry',
    color: '#34d399',
    responsibilities: [
      'Maintained Books of Accounts for an industrial manufacturing unit',
      'Prepared and filed Excise Returns accurately',
      'Handled Sales Tax return filings and assessments',
      'Supported day-to-day financial operations of the company',
    ],
  },
  {
    company: 'Jewel Palace',
    industry: 'Gold & Silver Jewellery Showroom',
    role: 'Senior Accountant',
    period: '2005 – 2007',
    location: 'Pondicherry',
    color: '#fbbf24',
    responsibilities: [
      'Maintained Books of Accounts for a premium jewellery showroom',
      'Prepared and filed VAT Returns in compliance with government norms',
      'Finalised Balance Sheet and Profit & Loss Account each financial year',
      'Ensured accurate recording of inventory and jewellery transactions',
    ],
  },
  {
    company: 'Thiru. V. Ramu, FCA (Chartered Accountant)',
    industry: 'Chartered Accountancy Firm',
    role: 'Audit Assistant',
    period: '2000 – 2005',
    location: 'Pondicherry',
    color: '#f472b6',
    responsibilities: [
      'Maintained individual and company client files with meticulous record-keeping',
      'Prepared and submitted VAT returns and Sales Tax assessments for clients',
      'Conducted Bank Audits across multiple client accounts',
      'Performed Stock Audits ensuring accuracy and compliance',
      'Supported senior CA with various accounting and compliance engagements',
    ],
  },
];

function JobCard({ job, index, visible }: { job: Job; index: number; visible: boolean }) {
  return (
    <div
      className="flex gap-6 relative"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`,
      }}
    >
      {/* Timeline column */}
      <div className="flex flex-col items-center flex-shrink-0" style={{ width: 48 }}>
        <div
          className="timeline-dot"
          style={{ borderColor: job.color, boxShadow: `0 0 15px ${job.color}40` }}
        >
          <Briefcase size={16} style={{ color: job.color }} />
        </div>
        {index < jobs.length - 1 && (
          <div
            style={{
              flex: 1,
              width: 2,
              marginTop: 8,
              background: `linear-gradient(180deg, ${job.color}50, transparent)`,
              minHeight: 40,
            }}
          />
        )}
      </div>

      {/* Card */}
      <div
        className="glass card-hover flex-1 mb-8"
        style={{ padding: '24px 28px', borderColor: `${job.color}20` }}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3
                className="font-bold"
                style={{ fontFamily: 'Raleway, sans-serif', fontSize: 17, color: 'white' }}
              >
                {job.role}
              </h3>
              {job.current && (
                <span
                  className="text-xs font-semibold px-2 py-0.5 rounded-full animate-glow"
                  style={{
                    background: `${job.color}20`,
                    border: `1px solid ${job.color}50`,
                    color: job.color,
                  }}
                >
                  Current
                </span>
              )}
            </div>
            <p
              className="font-semibold"
              style={{ color: job.color, fontSize: 14 }}
            >
              {job.company}
            </p>
            <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>
              {job.industry}
            </p>
          </div>
          <div className="flex flex-col gap-1 sm:items-end">
            <div className="flex items-center gap-1.5" style={{ color: 'rgba(255,255,255,0.55)', fontSize: 12 }}>
              <Calendar size={12} />
              {job.period}
            </div>
            <div className="flex items-center gap-1.5" style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12 }}>
              <MapPin size={12} />
              {job.location}
            </div>
          </div>
        </div>

        <div
          className="section-divider"
          style={{ background: `linear-gradient(90deg, transparent, ${job.color}40, transparent)` }}
        />

        {/* Responsibilities */}
        <ul className="space-y-2 mt-4">
          {job.responsibilities.map((resp, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <ChevronRight
                size={14}
                className="flex-shrink-0 mt-0.5"
                style={{ color: job.color }}
              />
              <span className="text-sm" style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
                {resp}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Experience() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-8 py-4" ref={ref}>
      {/* Header */}
      <div className="opacity-0-start animate-fade-up" style={{ animationFillMode: 'forwards' }}>
        <p
          className="text-sm font-medium mb-2"
          style={{ color: '#64dcff', letterSpacing: '0.12em', textTransform: 'uppercase' }}
        >
          Career Journey
        </p>
        <h1
          className="glow-text font-extrabold leading-tight"
          style={{ fontFamily: 'Raleway, sans-serif', fontSize: 'clamp(26px, 5vw, 40px)' }}
        >
          Work Experience
        </h1>
        <p className="mt-3 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
          Over 25 years of progressive accounting and finance experience across diverse industries.
        </p>
        <div className="section-divider mt-4" />
      </div>

      {/* Objective */}
      <section
        className="glass-strong card-hover opacity-0-start animate-fade-up delay-100"
        style={{ padding: '22px 28px', animationFillMode: 'forwards' }}
      >
        <p
          className="font-semibold mb-2"
          style={{ color: '#64dcff', fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.1em' }}
        >
          Professional Objective
        </p>
        <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
          To join a team of an ambitious firm, where I can discharge my skills in an efficient manner
          and put my tireless dedication for the growth of the Company as well as individual professional development.
        </p>
      </section>

      {/* Timeline */}
      <div>
        {jobs.map((job, index) => (
          <JobCard key={job.company} job={job} index={index} visible={visible} />
        ))}
      </div>

      {/* Declaration */}
      <section
        className="glass opacity-0-start animate-fade-up delay-600"
        style={{ padding: '20px 28px', animationFillMode: 'forwards' }}
      >
        <p className="text-sm italic" style={{ color: 'rgba(255,255,255,0.4)' }}>
          I hereby declare that the above furnished details are true to the best of my knowledge.
        </p>
        <p className="text-sm font-semibold mt-2" style={{ color: 'rgba(255,255,255,0.7)' }}>
          — K. Senthilkumaran, Pondicherry
        </p>
      </section>
    </div>
  );
}
