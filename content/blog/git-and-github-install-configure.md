---
path: git and github config
date: 2020-09-08T09:43:46.989Z
title: "Git and GitHub: Install & Configure"
description: Installing and configuring git and GitHub on your developer
  environment for easy and faster version control.
---
> github, git, beginners

I am a big fan of git and GitHub, but this didn’t come easier. I had to google articles for installation and configuring git and GitHub on my laptop. So after getting it all right, I decided to write about it. I probably will refer to this article when installing git again. LOL

## INSTALLATION
To install git, use the link below:
[git-scm Downloads](https://git-scm.com/downloads)
Choose a selection based on your operating system.
For Linux and Ubuntu OS, you may use this alternative:
Open your terminal and paste the command below:
```shell
sudo apt install git-all
```

## LET’S CONFIGURE
Ensure you have a GitHub account. If not, create one here [Join GitHub](https://github.com/join)
First of all, we’ll configure your details to git.
“Assuming your GitHub username is DevAcc and the email used on GitHub is devacc@mail.com”
On your terminal, use the following commands:
```shell
$ git config --global user.name "devAcc"
$ git config --global user.email “devacc@mail.com”
```
To confirm the details use  ``` “git config --list” ```
With that set, you should be ready to start working efficiently with your local repository.

## ADDING A SSH KEY & CONNECTING TO YOUR GITHUB ACCOUNT
This prevents git from requesting your username and password every time you push into GitHub. (it’s annoying)
So this is how we do it:
### 1.Create an ssh key
Open your terminal and use the commands below:
```shell
ssh-keygen -t rsa -b 4096 -C "devacc@mail.com"
```
This will prompt you to enter a location to save the key and also create a password like a key to access that.
After this, you’ll need to copy the key to the clipboard.
Use the command below:
```shell
cat < ~/.ssh/id_rsa.pub
```
### 2.Add the ssh key to GitHub
Go to your GitHub profile and navigate to settings: https://github.com/settings/profile
On the left side panel click on SSH and GPG keys, then click on the top green button “New SSH” and paste the key there.
Voila! You are good to go