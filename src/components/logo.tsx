import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#home" className={cn('flex items-center gap-2', className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      >
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
      <span className="font-headline text-xl font-bold tracking-wide">
        Ética em Ação
      </span>
    </a>
  );
}
