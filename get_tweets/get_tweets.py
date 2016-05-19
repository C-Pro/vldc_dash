import os
import json
import memcache
from twitter import Api
from configparser import ConfigParser

MAX_TWEETS = 10
TAGS = ['#vldc', '#vldclite']


def load_config(filename):
    '''Load secrets from configfile'''
    config = ConfigParser()
    config.read(filename)  
    return config

if __name__ == '__main__':

        MEMCACHE_SERVER=os.getenv("MEMCACHE_SERVER", None)        
        mc = memcache.Client([MEMCACHE_SERVER])
        k = load_config("api_keys.ini")        
        api = Api(k.get("twitter","consumer_key"),
                  k.get("twitter","consumer_secret"),
                  k.get("twitter","access_token"),
                  k.get("twitter","access_token_secret"))

        for line in api.GetStreamFilter(track=TAGS):
                tweets = mc.get("last_tweets") or []
                tweets = sorted(tweets, key=lambda x: x["created_at"], reverse=True)[:MAX_TWEETS-1]
                tweets = [line] + tweets
                mc.set("last_tweets", tweets)

