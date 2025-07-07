export default function Motorcycle({
  className,
  ...props
}: React.SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg
      width="989"
      height="586"
      viewBox="0 0 989 586"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle
        cx="158.5"
        cy="410.5"
        r="122.5"
        stroke="white"
        stroke-width="80"
      />
      <circle
        cx="830.5"
        cy="427.5"
        r="122.5"
        stroke="white"
        stroke-width="80"
      />
      <path
        d="M89 92C89 92 208 92 215.5 92C223 92 262 180.5 286 190C310 199.5 366 199.5 393 190C420 180.5 545.5 92 582.5 92C619.5 92 655 132.5 668 125C681 117.5 703 38 713.5 36.5C724 35 910.5 180.5 910.5 180.5"
        stroke="white"
        stroke-width="80"
        stroke-linecap="round"
      />
      <path
        d="M391 419H599"
        stroke="white"
        stroke-width="80"
        stroke-linecap="round"
      />
    </svg>
  );
}
