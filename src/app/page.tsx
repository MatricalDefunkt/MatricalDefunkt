import Image from "next/image";
import NavBar from "@/components/NavBar";
import getGithubProjects from "@/actions/get-github-projects";

export default function Home() {
  return (
    <main>
      <NavBar />
      <form action={getGithubProjects}>
        <button type="submit">Get GitHub Projects</button>
      </form>
    </main>
  );
}
