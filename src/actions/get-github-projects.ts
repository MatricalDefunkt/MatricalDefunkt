"use server";
import { Octokit } from "octokit";

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

export default async function getGithubProjects() {
  const { data } = await octokit.rest.repos.listForUser({
    username: "MatricalDefunkt",
  });
  console.log(data);
  return data;
}
