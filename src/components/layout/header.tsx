'use client';
import { Logo } from '@/components/logo';
import { MobileNav } from './mobile-nav';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '#about', label: 'Sobre' },
  { href: '#services', label: 'Serviços' },
  { href: '#differentials', label: 'Diferenciais' },
  { href: '#ai-advisor', label: 'Consultor IA' },
];

export default function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        hasScrolled
          ? 'bg-background/80 shadow-md backdrop-blur-lg'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Logo />
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <Button asChild size="sm">
            <a href="#contact">Contato</a>
          </Button>
        </nav>
        <div className="md:hidden">
          <MobileNav navLinks={navLinks} />
        </div>
      </div>
    </header>
  );
}
