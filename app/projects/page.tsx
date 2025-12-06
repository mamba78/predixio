import dynamic from "next/dynamic";

const ProjectsPage = dynamic(() => import("./ProjectsContent"), {
  ssr: false,
});

export const metadata = { /* your metadata */ };

export default function Projects() {
  return <ProjectsPage />;
}
