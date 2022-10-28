import { ButtonHTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  kind?: 'primary' | 'secondary';
}

export function Button({
  asChild,
  kind = 'primary',
  className,
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot : 'button';

  return (
    <Component
      {...props}
      className={clsx(
        'py-3 px-4 rounded font-semibold text-sm w-full transition-colors focus:ring-2',
        {
          'btn-primary': kind === 'primary',
          'btn-secondary': kind === 'secondary',
        },
        className
      )}
    />
  );
}
