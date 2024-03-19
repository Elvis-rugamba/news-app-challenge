import Link, { LinkProps } from "next/link";

interface NavMenuProps extends LinkProps {
  label: string;
  className?: string;
}

export default function NavMenu({
  label,
  className = "",
  ...rest
}: NavMenuProps) {
  return (
    <div
      className={`text-sm font-medium hover:underline underline-offset-2 transition-all ${className}`}
    >
      <Link {...rest}>{label}</Link>
    </div>
  );
}
