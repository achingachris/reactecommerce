---
path: gh-cli-commands
date: 2020-09-08T09:26:41.807Z
title: Using GitHub's CLI on Ubuntu & Commands.
description: Getting Started with GitHub CLI in carrying out GitHub activities
  without visiting the web
---
> github, linux, ubuntu, git

[gh cli web](https://cli.github.com/)

Working with GitHub has never been boring, as a matter of fact, it's the best part of the development process on my side. As usual, we use git and other distributed version control systems like Mercurial and many more.

I have been using the GitHub cli since February this year, and it is great. So let me show you how I got to use it. I'm on Ubuntu by the way. But I guess the process is the same on other OS, I'll check it out.

First, you download it on [releases](https://github.com/cli/cli/releases). Select the file with an extension based on your OS. Currently, the latest version is 0.8.0. 

After download, follow normal procedures of installing an app on your environment/OS. Once the file is installed, BOOM! You are ready to interact with the gh cli.  

There are no many configuration settings needed. The commands can be used anywhere regardless of the Operating System. The commands are as shown below:

General Activity

| Command        | usage        | detailed usage |
| ------------- |:-------------:|:-------------:| 
| `gh --version` | view version of gh cli | - |

Working with repositories (repo)

| Command        | usage        | detailed usage |
| ------------- |:-------------:|:-------------:|
| `gh repo view` | view current repo on the browser (web) | https://cli.github.com/manual/gh_repo_view |   
| `gh repo fork` | create a fork of a repo | https://cli.github.com/manual/gh_repo_fork |
| `gh repo create` | create a new repo | https://cli.github.com/manual/gh_repo_create |
| `gh repo clone` | clone a repo locally | https://cli.github.com/manual/gh_repo_clone |

Working with Issues

| Command        | usage        | detailed usage |
| ------------- |:-------------:|:-------------:|
| `gh issue view` | view an issue of a repo | https://cli.github.com/manual/gh_issue_view |
| `gh issue create` | create an issue locally | https://cli.github.com/manual/gh_issue_create |
| `gh issue status` | displays the status of issues on the repo | https://cli.github.com/manual/gh_issue_status |
| `gh issue list` | lists all issues raised on the repo | https://cli.github.com/manual/gh_issue_list |

Working with pull requests (pr)

| Command        | usage        | detailed usage |
| ------------- |:-------------:|:-------------:|
| `gh pr view` | view pull requests in browser | https://cli.github.com/manual/gh_pr_view |
| `gh pr status` | lists the statuses of available pull requests | https://cli.github.com/manual/gh_pr_status |
| `gh pr list` | lists all pull requests in the current repo | https://cli.github.com/manual/gh_pr_list |
| `gh pr create` | create a pull request | https://cli.github.com/manual/gh_pr_create |
| `gh pr checkout` | check out a pull request in git | https://cli.github.com/manual/gh_pr_checkout |

#### References
1. [installation instructions](https://cli.github.com/manual/installation)
2. [gh cli manual](https://cli.github.com/manual/)