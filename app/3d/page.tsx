"use client";
import dynamic from "next/dynamic";

const ModelViewer = dynamic(() => import("../../components/ModelViewer"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <main style={{ width: "100vw", height: "100vh" }}>
        <p>This is nice craftsman</p>
        <ModelViewer />
      </main>
    </div>
  );
}
