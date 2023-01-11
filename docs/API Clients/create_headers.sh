for lang in $(ls); do
  echo '{"label":"LANG"}'| sed -e"s/LANG/$lang/" > $lang/_category_.json
done
