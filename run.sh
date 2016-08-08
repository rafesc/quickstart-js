#!/bin/bash

FILES=$(find . -name [^index]*.html)

API_KEY=$API_KEY
AUTH_DOMAIN=$AUTH_DOMAIN
DATABASE_URL=$DATABASE_URL
STORAGE_BUCKET=$STORAGE_BUCKET

set -e

for f in $FILES
do
  sed -i 's@%API_KEY%@'\""$API_KEY"\"'@; s@%AUTH_DOMAIN%@'\""$AUTH_DOMAIN"\"'@; s@%DATABASE_URL%@'\""$DATABASE_URL"\"'@; s@%STORAGE_BUCKET%@'\""$STORAGE_BUCKET"\"'@' $f
done

npm start
