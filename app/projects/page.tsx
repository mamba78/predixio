import dynamic from "next/dynamic";

const ProjectsPage = dynamic(() => import("./ProjectsContent"), { ssr: false });

export const metadata = {
  title: "Best Prediction Market Platforms 2025 — Polymarket vs Manifold vs Kalshi vs PredictIt",
  description: "Compare Polymarket (crypto), Manifold (play-money), Kalshi (regulated), PredictIt (politics).",
};

export default function Projects() {
  return <ProjectsPage />;
}
