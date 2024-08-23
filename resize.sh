for file in $PWD/public/avatars/*; do
  echo "Resizing $file"
  convert -resize 40x40 "$file" "$file"
done
