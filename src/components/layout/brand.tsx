import Link from "next/link";
export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Ishivox home">
      <span className="brand-mark">
        <svg aria-hidden="true">
          <use href="#mark" />
        </svg>
      </span>
      ishivox
    </Link>
  );
}
