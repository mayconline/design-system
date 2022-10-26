import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface HeadingProps {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Heading({
  size = 'md',
  children,
  asChild = false,
  className,
}: HeadingProps) {
  const Component = asChild ? Slot : 'h2';

  return (
    <Component
      className={`text-gray-100 font-bold font-sans text-${size} ${className}`}
    >
      {children}
    </Component>
  );
}
