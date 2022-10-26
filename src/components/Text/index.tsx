import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface TextProps {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Text({
  size = 'md',
  children,
  asChild = false,
  className,
}: TextProps) {
  const Component = asChild ? Slot : 'span';

  return (
    <Component className={`text-gray-100 font-sans text-${size} ${className}`}>
      {children}
    </Component>
  );
}
