import { Octokit } from "octokit"
import { getInput } from "@actions/core"
import dayjs from "dayjs";
const token = getInput("token")
const octokit = new Octokit({
  auth: token
});
// await octokit.rest.issues.create({
//   owner: "Jack-Zhang-1314",
//   repo: "demo",
//   title: getTitle(),
//   body: getBody()
// });

const res = await octokit.request('GET /repos/{owner}/{repo}/actions/oidc/customization/sub', {
  owner: 'Jack-Zhang-1314',
  repo: 'Jack-Zhang-1314'
})

console.log(res)

function getTitle() {
  return dayjs().format("YYYY-MM-DD")
}

function getBody() {
  return "* test a new task"
}

// console.log(process.env)