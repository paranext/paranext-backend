import { cn } from '@/utils/shadcn-ui.util';
import { ReactHTMLElement } from 'react';

type LinkProps = { href: string; text: ReactHTMLElement; newTab: boolean; className?: string };

export default function Link({ href, text, newTab, className }: LinkProps) {
  return (
    <a
      target={newTab ? '_blank' : ''}
      rel="noreferrer"
      className={cn('pr-text-blue-600 hover:pr-underline', className)}
      href={href}
    >
      {text}
    </a>
  );
}
