---
path: django files
date: 2020-09-09T11:05:22.208Z
title: Django Files Explained
description: Brief explanation of a django project sttructure
---
> python, django

A skeleton of a django project looks:
(Based on our django [Django-Starter Template](https://github.com/ChrisAchinga/django-starter-guide))

This is just a summary of the documentation on https://docs.djangoproject.com/ and a continuation of our "Getting Started with Django" article.

```shell
├── manage.py
├── myapp
│   ├── admin.py
│   ├── apps.py
│   ├── __init__.py
│   ├── migrations
│   │   └── __init__.py
│   ├── models.py
│   ├── tests.py
│   └── views.py
└── _projectroot
    ├── asgi.py
    ├── __init__.py
    ├── __pycache__
    │   ├── __init__.cpython-38.pyc
    │   ├── settings.cpython-38.pyc
    │   ├── urls.cpython-38.pyc
    │   └── wsgi.cpython-38.pyc
    ├── settings.py
    ├── urls.py
    └── wsgi.py
```

## These project files are:

1. The outer `_projectroot/` root directory is a container for your project. The folder can be renamed.

2. `manage.py`: A command-line utility that lets you interact with this Django project in various ways. Do not touch this file.

3. The inner `_projectroot/` directory is the actual Python package for your project. Its name is the Python package name you’ll need to use to import anything inside it (e.g. `_projectroot.urls`).

4. `_projectroot/__init__.py`: An empty file that tells Python that this directory should be considered a Python package.

5. `_projectroot/settings.py`: Settings/configuration for this Django project.

6. `_projectroot/urls.py`: The URL declarations for this Django project; a “table of contents” of your Django-powered site.

7. `_projectroot/asgi.py`: An entry-point for ASGI-compatible web servers to serve your project.

8. `_projectroot/wsgi.py`: An entry-point for WSGI-compatible web servers to serve your project.

## The App files

1. `admin.py`: Registering your models here for them to be manipulated on the django admin

2. `apps.py`: Contains the app configuration code

3. `models.py`: Define your models here. These are the tables used for storing data and defining their relations

4. `tests.py`: Writing tests for the app

5. `views`: Defining data to be rendered on the templates
