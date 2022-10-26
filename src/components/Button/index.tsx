import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export function Button({ asChild, className, ...props }: ButtonProps) {
  const Component = asChild ? Slot : 'button';

  return (
    <Component
      {...props}
      className={`py-3 px-4 bg-cyan-500 rounded font-semibold text-gray-800 text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white ${className}`}
    />
  );
}
