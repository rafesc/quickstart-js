#!/bin/bash

API_KEY=$API_KEY
AUTH_DOMAIN=$AUTH_DOMAIN
DATABASE_URL=$DATABASE_URL
STORAGE_BUCKET=$STORAGE_BUCKET

FILES=$(find . -name [^index]*.html)

set -e

for f in $FILES
do
  sed -i 's@%API_KEY%@'\""$API_KEY"\"'@; s@%AUTH_DOMAIN%@'\""$AUTH_DOMAIN"\"'@; s@%DATABASE_URL%@'\""$DATABASE_URL"\"'@; s@%STORAGE_BUCKET%@'\""$STORAGE_BUCKET"\"'@' $f
done

npm start
