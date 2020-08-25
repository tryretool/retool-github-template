#!/bin/bash

echo "Logging all users out..."
export $(grep POSTGRES docker.env | xargs)
docker-compose exec -T postgres psql -U $POSTGRES_USER -d $POSTGRES_DB -c "truncate sessions cascade; truncate user_session_states;"
echo "Successfully logged all users out."
