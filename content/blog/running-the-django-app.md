---
path: running django
date: 2020-09-09T11:12:47.574Z
title: "Running The Django App "
description: Configuring files in your Django app to start working on your
  Django Project on the go
---

    Check this out, on a previous article, I created the skeleton of a Django project and a Django app. Now we making it work.


If you'll be coding along, I used the following set up environment:

Requirement:


1. Python3
2. Virtualenv
3. Pip
4. Source code [This GitHub Repo](https://github.com/ChrisAchinga/djang0-starter-template/archive/0.0.1.zip)

The file structure of the cloned project is as shown below:

```shell
├── manage.py
├── myapp
│   ├── admin.py
│   ├── apps.py
│   ├── __init__.py
│   ├── migrations
│   │   └── __init__.py
│   ├── models.py
│   ├── tests.py
│   └── views.py
└── _projectroot
    ├── asgi.py
    ├── __init__.py
    ├── __pycache__
    │   ├── __init__.cpython-38.pyc
    │   ├── settings.cpython-38.pyc
    │   ├── urls.cpython-38.pyc
    │   └── wsgi.cpython-38.pyc
    ├── settings.py
    ├── urls.py
    └── wsgi.py
  ```

# Registering a Django application

For an application to be functional, we have to let Django know that it exists.

In the project's folder, in this case. _projectroot, open the ```settings.py``` file.

In the INSTALLED_APPS, register the app using the following syntax:

```python
'app.apps.AppConfig'
```

Replace the app with the name of your app. All apps in your project have to be registered here.

Here's how we'll register our app:

```python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    # add you app here
    # THIS IS THE APP REGISTERED HERE
    'myapp.apps.MyappConfig',
]
```

## Templates

Data to be displayed for the end-user to view and interact with are done in what is called templates (Django template engine). 

This is the normal HTML, CSS, and Js files we've been using in making static websites.

Inside the directory of your application, in this case, myapp/create a folder called templates/. 

This is where we will add our HTML, CSS, and Js files.
Inside the templates/ folder, we will create another folder with the name of the app, myapp/. This is convection I use when I have more than one app in a single Django project, so as to be easy in configuring the files to be rendered.

Your current workspace should be at templates/myapp. Now create the following files:

_base.html => use this as the main html file

about.html => about page

landingPage.html => the landing page

Adding code to the HTML files
We will have to write some code to files we just created.

_base.html


```html
<!DOCTYPE html>
<!-- {% load static %} -->
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Django Starter</title>
    <!-- bootstrap cdn -->
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css"
      integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I"
      crossorigin="anonymous"
    />
    <!-- local css -->
    <link
      rel="stylesheet"
      type="text/css"
      href="{% static 'css/styles.css' %}"
    />
  </head>
  <body>
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">A Common Nav bar</span>
      </div>
    </nav>
    <div class="container">
      <br />
      {% block content %} {% endblock content %}
    </div>
    <!-- bootstrap cdn -->
    <script
      src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
      integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js"
      integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/"
      crossorigin="anonymous"
    ></script>
    <!-- custom js -->
    <script type="text/javascript" src="{% static 'js/script.js' %}"></script>
  </body>
</html>
```

landingPage.html

```html
{% extends 'myapp/_base.html' %}
<!-- {% load static %} -->
{% block content %}
<h class="mt-6">
    LANDING PAGE
</h>
{% endblock content %}
about.html

{% extends 'myapp/_base.html' %}
<!-- {% load static %} -->
{% block content %}
 <h1 class="mt-6">
     ABOUT PAGE
 </h1>
{% endblock content %}
```

If you notice I'm using :

```{% extends myapp/_base.html %}```

in both about.html and landingPage.html. This is because it's a templating language and we using the code from, *_base.html* reducing code repetition in other HTML files.

In the _base.html, I've used {% block content %} {% endblock content %}, this is to enable other files using this code in _base.html to be able to use their own separate data.


## Views

For the browser to be able to read the HTML files, we will have to create views for the files. 

In the app directory, ```myapp/``` there is a views.py file. We will define our views here.

Since we only have two files, we will write two view functions:

```python
from django.shortcuts import render
# landing page view
def landingPage(request):
    context = {}
    return render(request, 'myapp/landingPage.html', context)
# about page view
def aboutPage(request):
    context = {}
    return render(request, 'myapp/about.html', context)
```

Simple right. A context is a dictionary in which you can define the data to be rendered in the HTML files. For now, we ain't dealing with any data so the dictionary will be blank.

## URL Configurations

Here we will set the link or the path the user will use on a browser to access the web pages. Still in the app directory, create a new file *urls.py*.

To add paths use the code below:

```python
from django.urls import path
from . import views
urlpatterns = [
    path('', views.landingPage, name="home"), 
    path('about/', views.aboutPage, name="about")
]
```

That's it, we then need to register this file to the project's URL file. 

To do that, navigate to, *_projectroot/urls.py* and update the code to match the one below:

```python
from django.contrib import admin
from django.urls import path, include
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('myapp.urls')),
]
```

## Static Files

We all need the CSS/Js/Images to be added to our sites. 

This is how we do it in Django. At the root folder of the project, create a new folder static. This is where will add all our styles, scripts and images.

Inside the ```static/ folder```, create three folders: 

- css/
- js/ 

then create a corresponding file in each folder. 

(css/styles.css, js/script.js)


Add the following code to the respective files:
css/styles.css

```css
body {
    background-color: blue;
}
```

js/scripts.js

```javascript
console.log("Javascript successfuly loaded");
// PS => You know why I consoled!!!
```

Now let's add some settings, in the settings.py, bottom lines for this to successful

```python
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static')
]
MEDIA_URL = '/images/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'static/images')
```

### Final

Bazingaa! we are done, 

let's see if what we did is valid. Start the server using the command on your terminal: 

```shell
# (Ensure you are the root of your project to run this)
python3 manage.py runserver or ./manage.py runserver
# Navigate to localhost:8000
```

https://github.com/ChrisAchinga/django-starter-guide
