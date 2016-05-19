# VLDC Dash Docker demo #

This is a project for live docker demo at http://vldc.gq event 2016.21.05

It provides simple dashboard displaying 10 most recent tweets with hashtags #vldc and #vldclite.
It runs 3 docker containers:
# memcache - stores tweets
# get_tweets - gets tweets with #vldc and #vldclite tags in realtime using Twitter streaming API and stores them in memcached
# web_app - serves static (bootstrap + react) page and exposes GET /tweets JSON endpoint with 10 recent tweets

To build and run it you'll need:

* git
* make
* docker
* docker-compose
* nodejs
* npm
* browserify

Then you just clone, make, run, fun!

    git clone https://github.com/C-Pro/vldc_dash.git
    cd vldc_dash
    make
    sudo docker-compose up

You will need to have sudo priveleges to comunnicate with docker daemon (to build images and run containers). So you will be prompted to input your password.
Once everything is up you can point your browser to http://localhost:8080 and access dashboard.
