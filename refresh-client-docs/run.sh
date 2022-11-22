SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

cd "$SCRIPT_DIR"
cd ../../


git clone https://github.com/application-research/estuary-clients.git
cd estuary-clients
git checkout main 
git pull origin main

folders="bash go java javascript perl php python r ruby typescript-fetch"

for folder in $folders; do
  rm -rf "$SCRIPT_DIR/../$folder"
  mkdir -p "$SCRIPT_DIR/../$folder"
  find "$folder" -type f | grep '.md$' | grep -v node_module| while IFS=$'\n' read -r filename; do
    destination_folder=$(dirname "$SCRIPT_DIR/../clients/$filename")
    destination_filename="$SCRIPT_DIR/../clients/$filename"
    prefix_filename="$(basename "${filename%.*}")"
    mkdir -p "$destination_folder"
    cp -v "$filename" "$destination_folder"
    sed -i '' -e 's/^# \*\*\([0-9a-zA-Z_]*\)\*\*/## **\1** {#\1}/g' -e 's/<a\ name=\".*//g' -e "s/# {{classname}}/# $prefix_filename/" "$destination_filename"
  done


done
