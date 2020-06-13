import {GitHub} from '@actions/github'
import * as core from '@actions/core'
import {Context} from '@actions/github/lib/context'

export const listCommands = async (
  client: GitHub,
  context: Context
): Promise<void> => {
  try {
    console.log('running help command')
    const body =
      '### :wave: CI Pilot here :woman_pilot:\n\n\n\nYou can use the following commands to control ci-pilot:\n\n\n`ci-pilot deploy to staging`\n\nThis will tag your current branch with a staging command, allowing your CI to deploy to a staging environment.'

    if (context.issue.number) {
      await client.issues.createComment({
        ...context.repo,
        body,
        issue_number: context.issue.number
      })
    }
  } catch (err) {
    core.setFailed(err)
  }
}
