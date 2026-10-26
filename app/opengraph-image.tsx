import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = "San Carlo Traslochi – Traslochi a Milano";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0d1220",
          color: "#f7f3ec",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 44 }}>San Carlo Traslochi</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, lineHeight: 1.05 }}>Traslochi e sgomberi a Milano</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "rgba(247,243,236,0.7)" }}>
          <span>Preventivo gratuito · Sgomberi da 75 €</span>
          <span style={{ color: "#d6b98a" }}>{site.phoneDisplay}</span>
        </div>
      </div>
    ),
    size,
  );
}
