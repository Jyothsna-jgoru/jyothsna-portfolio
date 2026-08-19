/* Small stroke icons shared across sections. */

interface IconProps {
  size?: number;
  className?: string;
}

const base = (size: number, className?: string) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  className,
  "aria-hidden": true as const,
});

export const MailIcon = ({ size = 16, className }: IconProps) => (
  <svg {...base(size, className)}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="M3.5 7l8.5 6 8.5-6" strokeLinecap="round" />
  </svg>
);

export const PhoneIcon = ({ size = 16, className }: IconProps) => (
  <svg {...base(size, className)}>
    <path
      d="M6.5 3h3l1.5 4.5-2 1.5a12 12 0 0 0 6 6l1.5-2L21 14.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4 5.2 2 2 0 0 1 6 3z"
      strokeLinejoin="round"
    />
  </svg>
);

export const PinIcon = ({ size = 16, className }: IconProps) => (
  <svg {...base(size, className)}>
    <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" strokeLinejoin="round" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

export const ArrowRightIcon = ({ size = 15, className }: IconProps) => (
  <svg {...base(size, className)} strokeWidth={2.2}>
    <path d="M5 12h14" strokeLinecap="round" />
    <path d="M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
