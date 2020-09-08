---
path: starting django
date: 2020-09-08T09:48:06.162Z
title: Starting a Django Application
description: A Simple Process to getting started with a Django Project
---

> django, python

```shell
cd django-template
```

You'll notice some folders created and a `pyvenv.cfg` file created but we won't need it at all.

Activate the virtual environment

```shell
source bin/activate
```

## Installing Django

I'm going to use the latest official version (3.0.8), using the simple command below:

```shell
pip3 install django
```

Confirm if it's installed by checking the version

```shell
python3 -m django --version
```

## Creating A Django Project

Starting a Django project

```shell
django-admin startproject _projectroot
```

After that, change your working directory to `_projectroot/` to avoid confusion with the virtualenv folders.

```shell
cd _projectroot
```

This will create the following directories:

```shell
├── manage.py
└── template
    ├── asgi.py
    ├── __init__.py
    ├── settings.py
    ├── urls.py
    └── wsgi.py

```

Learn what each file does [here](https://docs.djangoproject.com/en/3.0/intro/tutorial01/)

Start the development server

```shell
python3 manage.py runserver
```

Upon running the command, the server will run on port 8000 by default (http://127.0.0.1:8000/)

Changing the port is easier:
`python3 manage.py runserver 8080`

A message like the one below shows up but don't stress out.

```shell
You have 17 unapplied migration(s). Your project may not
work properly until you apply the migrations for app(s):
admin, auth, contenttypes, sessions.
Run 'python manage.py migrate' to apply them.
```

## Creating A Django App

Let's create a Django app

(Note that there is a difference between a project and an app. An app is like the building blocks of a project.)

`python3 manage.py startapp myapp`

a new directory called "polls" will be created:

```shell
myapp/
    migrations/
        __init__.py
    __init__.py
    admin.py
    apps.py
    models.py
    tests.py
    views.py
```

Now that forms the skeleton of a simple Django application. I will explain what each file does in the next article.

The Project files can be found on [GitHub](https://github.com/ChrisAchinga/django-starter-guide)
