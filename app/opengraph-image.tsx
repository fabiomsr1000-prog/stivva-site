import { ImageResponse } from "next/og";
import { hero, site } from "@/lib/content";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0b0f14",
          backgroundImage:
            "radial-gradient(circle at 15% 0%, rgba(34,197,94,0.20), transparent 50%), radial-gradient(circle at 95% 100%, rgba(59,130,246,0.18), transparent 50%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 18, height: 18, borderRadius: 999, background: "#22c55e" }} />
          <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: -1, display: "flex" }}>
            {`${site.name.toLowerCase()}.`}
          </div>
        </div>
        <div
          style={{
            marginTop: 44,
            fontSize: 66,
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: -2,
            maxWidth: 960,
            display: "flex",
          }}
        >
          {`${hero.h1Start} ${hero.h1Highlight}`}
        </div>
        <div
          style={{
            marginTop: 30,
            fontSize: 27,
            color: "rgba(255,255,255,0.62)",
            maxWidth: 860,
            display: "flex",
          }}
        >
          {site.tagline}
        </div>
      </div>
    ),
    { ...size },
  );
}
