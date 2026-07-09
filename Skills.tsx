import { useEffect, useRef, useState } from 'react';
import {
  Monitor, FileText, Calculator, BarChart2, ClipboardList,
  CheckCircle, Users, Brain, Shield, Target, Lightbulb, Clock
} from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon?: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
}

interface SkillGroup {
  category: string;
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  color: string;
  skills: Skill[];
}

const skillGroups: SkillGroup[] = [
  {
    category: 'Accounting & Finance',
    icon: Calculator,
    color: '#64dcff',
    skills: [
      { name: 'Book Keeping & Accounts Maintenance', level: 98, icon: ClipboardList },
      { name: 'Balance Sheet Finalisation', level: 95, icon: BarChart2 },
      { name: 'Profit & Loss Account', level: 95, icon: BarChart2 },
      { name: 'TDS (Tax Deducted at Source)', level: 88, icon: FileText },
    ],
  },
  {
    category: 'Tax & Compliance',
    icon: FileText,
    color: '#a78bfa',
    skills: [
      { name: 'GST Returns Filing', level: 95, icon: FileText },
      { name: 'VAT Returns Filing', level: 95, icon: FileText },
      { name: 'Sales Tax Assessments', level: 90, icon: FileText },
      { name: 'Excise Returns', level: 82, icon: FileText },
    ],
  },
  {
    category: 'Auditing',
    icon: Shield,
    color: '#34d399',
    skills: [
      { name: 'Bank Audit', level: 85, icon: Shield },
      { name: 'Stock Audit', level: 85, icon: Shield },
      { name: 'Individual / Company File Management', level: 90, icon: ClipboardList },
    ],
  },
  {
    category: 'Software Tools',
    icon: Monitor,
    color: '#f472b6',
    skills: [
      { name: 'Tally ERP 9.32', level: 95, icon: Monitor },
      { name: 'Microsoft Excel', level: 88, icon: Monitor },
      { name: 'Microsoft Word', level: 85, icon: Monitor },
      { name: 'Maxx Solutions', level: 80, icon: Monitor },
      { name: 'Wings Accounting Software', level: 78, icon: Monitor },
    ],
  },
];

const softSkills = [
  { name: 'Attention to Detail', icon: Target },
  { name: 'Analytical Thinking', icon: Brain },
  { name: 'Time Management', icon: Clock },
  { name: 'Team Collaboration', icon: Users },
  { name: 'Problem Solving', icon: Lightbulb },
  { name: 'Reliability & Integrity', icon: CheckCircle },
];

function SkillBar({ skill, color, visible }: { skill: Skill; color: string; visible: boolean }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.85)' }}>
          {skill.name}
        </span>
        <span className="text-xs font-semibold" style={{ color }}>
          {skill.level}%
        </span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-bar-fill"
          style={{
            '--fill-width': `${skill.level}%`,
            width: visible ? `${skill.level}%` : '0%',
            background: `linear-gradient(90deg, ${color}99, ${color})`,
            transition: visible ? 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
          } as React.CSSProperties}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
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
          Expertise
        </p>
        <h1
          className="glow-text font-extrabold leading-tight"
          style={{ fontFamily: 'Raleway, sans-serif', fontSize: 'clamp(26px, 5vw, 40px)' }}
        >
          Skills & Proficiency
        </h1>
        <div className="section-divider mt-4" />
      </div>

      {/* Skill groups */}
      <div className="grid md:grid-cols-2 gap-6">
        {skillGroups.map((group, gi) => {
          const GroupIcon = group.icon;
          return (
            <section
              key={group.category}
              className="glass card-hover opacity-0-start animate-fade-up"
              style={{
                padding: 28,
                animationFillMode: 'forwards',
                animationDelay: `${gi * 0.12}s`,
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="flex items-center justify-center rounded-xl"
                  style={{
                    width: 42,
                    height: 42,
                    background: `${group.color}18`,
                    border: `1px solid ${group.color}35`,
                  }}
                >
                  <GroupIcon size={18} style={{ color: group.color }} />
                </div>
                <h3
                  className="font-bold"
                  style={{ fontFamily: 'Raleway, sans-serif', fontSize: 16, color: 'white' }}
                >
                  {group.category}
                </h3>
              </div>
              <div className="space-y-5">
                {group.skills.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    color={group.color}
                    visible={visible}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Soft Skills */}
      <section
        className="glass card-hover opacity-0-start animate-fade-up delay-500"
        style={{ padding: 28, animationFillMode: 'forwards' }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div
            className="flex items-center justify-center rounded-xl"
            style={{
              width: 42,
              height: 42,
              background: 'rgba(100, 220, 255, 0.1)',
              border: '1px solid rgba(100, 220, 255, 0.25)',
            }}
          >
            <Users size={18} style={{ color: '#64dcff' }} />
          </div>
          <h3
            className="font-bold"
            style={{ fontFamily: 'Raleway, sans-serif', fontSize: 16, color: 'white' }}
          >
            Professional Attributes
          </h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {softSkills.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="badge-pill justify-center py-3 flex-col gap-2"
              style={{
                borderRadius: 12,
                padding: '14px 16px',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <Icon size={20} style={{ color: '#64dcff' }} />
              <span className="text-xs" style={{ lineHeight: 1.3 }}>{name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Summary stats */}
      <section
        className="glass-strong card-hover opacity-0-start animate-fade-up delay-600"
        style={{ padding: 28, animationFillMode: 'forwards' }}
      >
        <h3
          className="glow-text font-bold mb-6 text-center"
          style={{ fontFamily: 'Raleway, sans-serif', fontSize: 18 }}
        >
          Career at a Glance
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { value: '25+', label: 'Years Experience' },
            { value: '5', label: 'Companies Served' },
            { value: '3+', label: 'Industries' },
            { value: 'B.Com', label: 'Qualification' },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="text-center rounded-xl py-5 px-3"
              style={{ background: 'rgba(100, 220, 255, 0.06)', border: '1px solid rgba(100, 220, 255, 0.12)' }}
            >
              <p
                className="glow-text font-extrabold"
                style={{ fontFamily: 'Raleway, sans-serif', fontSize: 28 }}
              >
                {value}
              </p>
              <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>{label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
