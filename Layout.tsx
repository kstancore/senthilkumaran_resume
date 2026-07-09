import { ReactNode } from 'react';
import Sidebar from './Sidebar';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Sidebar />
      <main
        className="lg:ml-60 min-h-screen pt-16 lg:pt-0"
        style={{ paddingLeft: '0' }}
      >
        <div className="p-5 lg:p-10 max-w-4xl">
          {children}
        </div>
      </main>
    </div>
  );
}
