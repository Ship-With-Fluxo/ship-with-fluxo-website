/**
 * All custom SVGs / illustrations for the project live in this one file.
 * (Generic UI icons come from lucide-react; anything bespoke goes here.)
 */
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/* ------------------------------------------------------------------ */
/* Small marks                                                         */
/* ------------------------------------------------------------------ */

/** Orange teardrop "location" pin used on the hero map. */
export function PinMarker(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.4" fill="currentColor" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Hero dashboard map                                                  */
/* ------------------------------------------------------------------ */

const ROADS_MAJOR = [
  "M-10 236 L120 150 L250 60 L330 -10",
  "M60 300 L170 170 L300 90 L460 40",
  "M-10 120 L140 128 L300 150 L460 140",
  "M210 -10 L240 120 L260 300",
  "M330 300 L350 160 L330 -10",
];

const ROADS_MINOR = [
  "M-10 70 L120 40 L260 20",
  "M90 300 L120 200 L100 -10",
  "M-10 200 L100 210 L240 240 L460 230",
  "M380 300 L400 150 L440 -10",
  "M150 300 L230 190 L420 100",
];

/**
 * Stylised Lagos dispatch map used in the hero dashboard card.
 *
 * To use a real map design instead: drop the image into
 * `public/images/dashboard/map.png` and replace <MapIllustration /> with a
 * next/image in `components/sections/hero/dashboard-card.tsx`.
 */
export function MapIllustration(props: IconProps) {
  return (
    <svg
      viewBox="0 0 440 290"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Map of Lagos showing riders on route and one running late"
      {...props}
    >
      <rect width="440" height="290" fill="#F3EEE3" />

      {/* city blocks */}
      <g fill="#EBE4D4">
        <rect x="20" y="170" width="70" height="40" rx="4" />
        <rect x="270" y="190" width="90" height="46" rx="4" />
        <rect x="300" y="20" width="80" height="50" rx="4" />
        <rect x="40" y="90" width="60" height="30" rx="4" />
        <rect x="150" y="215" width="52" height="40" rx="4" />
      </g>
      <path d="M0 262 C90 240 170 270 260 258 S400 240 440 252 V290 H0 Z" fill="#E7E0CE" />

      {/* roads: soft edge, then white fill */}
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        {ROADS_MINOR.map((d) => (
          <path key={`m-e-${d}`} d={d} stroke="#E4DCC9" strokeWidth="7" />
        ))}
        {ROADS_MINOR.map((d) => (
          <path key={`m-f-${d}`} d={d} stroke="#FFFFFF" strokeWidth="4.5" />
        ))}
        {ROADS_MAJOR.map((d) => (
          <path key={`M-e-${d}`} d={d} stroke="#E4DCC9" strokeWidth="13" />
        ))}
        {ROADS_MAJOR.map((d) => (
          <path key={`M-f-${d}`} d={d} stroke="#FFFFFF" strokeWidth="10" />
        ))}
      </g>

      {/* planned route */}
      <path
        d="M92 232 C70 160 110 112 190 118 C250 122 300 126 330 160 C352 188 318 214 250 224 C210 230 170 232 140 240"
        fill="none"
        stroke="#D26433"
        strokeWidth="2.2"
        strokeDasharray="6 5"
        strokeLinecap="round"
      />

      {/* place labels */}
      <g fontSize="11" fontWeight="600" fill="#5C554D" fontFamily="inherit">
        <text x="56" y="44">Ikeja</text>
        <text x="352" y="150">Maryland</text>
        <text x="112" y="268">Ojota</text>
      </g>

      {/* on-route riders */}
      <g>
        <circle cx="140" cy="108" r="11" fill="#3F9B5A" stroke="#fff" strokeWidth="2.5" />
        <circle cx="140" cy="108" r="3.2" fill="#fff" />
        <circle cx="322" cy="102" r="11" fill="#3F9B5A" stroke="#fff" strokeWidth="2.5" />
        <circle cx="322" cy="102" r="3.2" fill="#fff" />
        <circle cx="266" cy="75" r="4" fill="#3F9B5A" stroke="#fff" strokeWidth="1.5" />
      </g>

      {/* running late */}
      <g>
        <circle cx="262" cy="214" r="11" fill="#E5A323" stroke="#fff" strokeWidth="2.5" />
        <circle cx="262" cy="214" r="3.2" fill="#fff" />
      </g>

      {/* drop-off pin */}
      <g transform="translate(82 218)" color="#D26433">
        <PinMarker width="22" height="22" x="0" y="0" />
      </g>

      {/* featured rider */}
      <g transform="translate(212 132)">
        <circle r="24" fill="#fff" stroke="#E4DCC9" strokeWidth="1" />
        <g strokeLinecap="round" strokeLinejoin="round">
          <circle cx="-9" cy="9" r="6.5" fill="none" stroke="#1A1612" strokeWidth="1.8" />
          <circle cx="10" cy="9" r="6.5" fill="none" stroke="#1A1612" strokeWidth="1.8" />
          <path d="M-9 9 L-1 0 L8 0 L10 9 M-1 0 L-3 -6 M8 0 L6 -5" fill="none" stroke="#1A1612" strokeWidth="1.8" />
          <path d="M-2 -6 L2 -12" fill="none" stroke="#1A1612" strokeWidth="3" />
          <circle cx="3" cy="-17" r="4" fill="#C98B5B" stroke="#1A1612" strokeWidth="1.2" />
          <rect x="-17" y="-11" width="10" height="10" rx="1.5" fill="#D26433" />
        </g>
        <g transform="translate(0 38)">
          <rect x="-26" y="-9" width="52" height="17" rx="5" fill="#fff" stroke="#E4DCC9" />
          <text y="3" textAnchor="middle" fontSize="9.5" fontWeight="600" fill="#1A1612" fontFamily="inherit">
            Rider 04
          </text>
        </g>
      </g>
    </svg>
  );
}
