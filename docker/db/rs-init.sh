#!/bin/bash

set -e

echo "****** Starting replica set init script! ******"

DELAY=15

mongo --host mongodb-primary:27017 -u $MONGO_INITDB_ROOT_USERNAME -p $MONGO_INITDB_ROOT_PASSWORD --authenticationDatabase admin <<EOF
var config = {
    "_id": "rs0",
    "version": 1,
    "members": [
        {
            "_id": 1,
            "host": "mongodb-primary:27017",
            "priority": 2
        },
        {
            "_id": 2,
            "host": "mongodb-secondary-0:27017",
            "priority": 1
        },
        {
            "_id": 3,
            "host": "mongodb-secondary-1:27017",
            "priority": 1
        }
    ]
};
rs.initiate(config, { force: true });
rs.status();
EOF

echo "****** Waiting for ${DELAY} seconds for replicaset configuration to be applied ******"

sleep $DELAY

echo "****** Creating initial database ******"

mongo --host mongodb-primary:27017 -u $MONGO_INITDB_ROOT_USERNAME -p $MONGO_INITDB_ROOT_PASSWORD --authenticationDatabase admin <<EOF
db = db.getSiblingDB("$MONGO_INITDB_ROOT_DATABASE");

db.createCollection("user");
EOF

echo "****** ALL IS DONE! ******"
