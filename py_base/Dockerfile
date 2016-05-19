from python:3.5.1-alpine

ADD requirements.txt /
RUN apk update && apk upgrade && \
    apk add --no-cache git
RUN pip install -r /requirements.txt
RUN rm /requirements.txt

