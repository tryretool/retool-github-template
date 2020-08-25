#!/bin/bash

export $(grep POSTGRES docker.env | xargs)
echo $(docker-compose exec -T postgres psql -At -U $POSTGRES_USER -d $POSTGRES_DB -c "select count(*) from organizations;")
