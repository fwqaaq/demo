import { Octokit } from "octokit"
import { getInput } from "@actions/core"
import dayjs from "dayjs";
const token = getInput("token")
const octokit = new Octokit({
  auth: token
});
await octokit.rest.issues.create({
  owner: "Jack-Zhang-1314",
  repo: "demo",
  title: getTitle(),
  body: getBody()
});

function getTitle() {
  return dayjs().format("YYYY-MM-DD")
}

function getBody() {
  return "* test a new task"
}

console.log(process.env)