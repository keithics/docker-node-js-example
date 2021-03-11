FROM mongo:4.1.8-xenial

COPY dump /dump
CMD mongorestore /dump --uri="mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin"

