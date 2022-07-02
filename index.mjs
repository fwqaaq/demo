import { Octokit } from "octokit"
import { getInput } from "@actions/core"
import * as fs from "fs/promises"
import dayjs from "dayjs";
const token = process.env["GITHUB_TOKEN"] || getInput("token")
const octokit = new Octokit({
  auth: token
});
// await octokit.rest.issues.create({
//   owner: "Jack-Zhang-1314",
//   repo: "demo",
//   title: getTitle(),
//   body: getBody()
// });

// const res = await octokit.request('GET /repos/{owner}/{repo}/actions/oidc/customization/sub', {
//   owner: 'Jack-Zhang-1314',
//   repo: 'Jack-Zhang-1314'
// })

const message = {
  repoOwner: process.env["GITHUB_ACTOR"],
  repoURL: getInput("repoURL")
}


await fs.writeFile("test.json", JSON.stringify(message))

function getTitle() {
  return dayjs().format("YYYY-MM-DD")
}

function getBody() {
  return "* test a new task"
}

// console.log(process.env)