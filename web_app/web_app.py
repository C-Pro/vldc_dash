import os
import memcache
import json
import bottle
from bottle import get

mc = None
app = application = bottle.default_app()

@get('/')
def index():
    return bottle.static_file('index.html', root="./ui/", mimetype="text/html")


@get('/:filename')
def serve_ui_files(filename):
    return bottle.static_file(filename, root="./ui/")


@get("/tweets")
def get_tweets():
    tweets = mc.get("last_tweets")
    bottle.response.headers['Content-Type'] = 'application/json'
    return json.dumps(tweets)

if __name__ == '__main__':
        MEMCACHE_SERVER=os.getenv("MEMCACHE_SERVER", None)
        LISTEN_HOST=os.getenv("LISTEN_HOST", "127.0.0.1")
        LISTEN_PORT=os.getenv("LISTEN_PORT", "8080")

        mc = memcache.Client([MEMCACHE_SERVER])

        bottle.run(app=app,
                   server='gunicorn',
                   host=LISTEN_HOST,
                   port=LISTEN_PORT)
