import { Octokit } from "octokit"
import { getInput } from "@actions/core"
import * as fs from "fs/promises"
import { exec } from "@actions/exec"
import * as io from "@actions/io"
const token = getInput("token")
// const octokit = new Octokit({
//   auth: token
// });

const message = {
  repoOwner: process.env["GITHUB_ACTOR"],
  repoURL: getInput("repoURL")
}

const jsonFile = `${message.repoOwner}_test.json`

await fs.writeFile(jsonFile, JSON.stringify(message))

await exec("git clone https://github.com/Jack-Zhang-1314/git-action-message.git")

await io.mv(`${jsonFile}`, "./git-action-message")

await exec("cd git-action-message && git config --global user.email 'zyj17715640603@gmail.com' && git config --global user.name 'Jack-Zhang-1314'")

await exec(`git remote set-url origin https://Jack-Zhang-1314:${token}@github.com/Jack-Zhang-1314/git-action-message.git`)

await exec("git add . && git commit -m 'add message' && git push origin main")