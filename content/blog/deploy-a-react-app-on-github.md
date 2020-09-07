---
path: react-github-pages
date: 2020-09-07T18:29:40.541Z
title: Deploy A React app on GitHub
description: Using GitHub pages to deploy your react application
---
> react, github, deploy

After following a React tutorial step by step for 4 days, the part I grasped was the deployment part, it was a short process that I enjoyed. Let me write about it, I will probably refer to it after building my first react app.

Here we go ...

### Step 1: GitHub Repository

Before you start 

![]()

deployment process, your project must be on a GitHub repository, and of course updated and complete. (Unless you deploy for fun like me)

### Step 2: Install the *gh-pages* package as a dev-dependency of the app

```shell
npm install gh-pages --save-dev
```

### Step 3: Define Homepage in package.json

In `package.json` file in your react app and add homepage property using the given syntax:

```shell
http://{username}.github.io/{repo-name}
```

where {username} is your GitHub username, and {repo-name} is the name of the GitHub repository. (Assuming your GitHub username is *"devAcc"* and the name of the repo is *"reactApp"*)

```json
"homepage": "http://devAcc.github.io/reactApp"
```

## Step 4: Deploy script

Now we can add deploy script commands in our package.json file. In the existing scripts property, add a predeploy property and a deploy property, each having the values shown below:

```json
"scripts": {
  // some code before
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

So your "scripts"should look like this:

```json
"scripts": {
   "start": "react-scripts start",
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build",
   "build": "react-scripts build",
   "test": "react-scripts test",
   "eject": "react-scripts eject"
},
```

### Step 5: Commit and Push to github

Update your GitHub rpository using git commands:

```shell
git add .
git commit -m "gh-pages configurations"
git push
```

Kudooos your React app is ready for view... on <http://devAcc.github.io/reactApp>

Found an error or want to add on, Raise an issue on the [GitHub Repository](https://github.com/ChrisAchinga/blog/issues)