#!/bin/bash

set -eux
set -o pipefail


SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

cd "$SCRIPT_DIR"
cd ../
npm i -g swagger2openapi
curl -o /tmp/swagger.json https://raw.githubusercontent.com/application-research/estuary/dev/docs/swagger.json
swagger2openapi /tmp/swagger.json  --patch > openapi.json

cd "$SCRIPT_DIR"
cd ../../


git clone https://github.com/application-research/estuary-clients.git || true


cd estuary-clients
git checkout main 
git pull origin main

folders="go java javascript php python r ruby typescript-axios"

for folder in $folders; do
  rm -rf "$SCRIPT_DIR/../$folder"
  mkdir -p "$SCRIPT_DIR/../$folder"
  find "$folder" -type f | grep '.md$' | grep -v node_module| while IFS=$'\n' read -r filename; do
    destination_folder=$(dirname "$SCRIPT_DIR/../docs/Reference/API Clients/$filename")
    destination_filename="$SCRIPT_DIR/../docs/Reference/API Clients/$filename"
    prefix_filename="$(basename "${filename%.*}")"
    mkdir -p "$destination_folder"
    cp -v "$filename" "$destination_folder"
    sed -i -e 's/^# \*\*\([0-9a-zA-Z_]*\)\*\*/## **\1** {#\1}/g' -e 's/<a\ name=\".*//g' -e "s/# {{classname}}/# $prefix_filename/" "$destination_filename"
    echo '{"label":"LANG"}'| sed -e"s/LANG/$folder/" > "$destination_folder/_category_.json"
  done
done
