# Node (Express) API

## Runs the app in dev mode

Build/Run docker
```
$ docker-compose up
```
## Include services.

### Redis 
Redis is an open source (BSD licensed) <br>
in-memory data structure store, <br>
used as a database, cache and message broker.<br>
Runed on port: 6379 host: localhost

### Segment/fake-event-stream
Docker image, for genarate random fake events<br>
and publis into a redis channel.

### Test-api 
Express app connected with redis and socket IO services.<br>
Used for handle redis channel messages and emit to specific socket.

