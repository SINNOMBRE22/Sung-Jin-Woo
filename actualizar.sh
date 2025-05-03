#!/bin/bash

# 1. Respaldar los archivos originales
echo "Respaldando archivos originales..."

# Carpeta principal (excepto config.js)
mkdir -p backups
for archivo in *.js; do
  [[ "$archivo" != "config.js" && -f "$archivo" ]] && cp "$archivo" "backups/$archivo"
done

# plugins/
if [ -d plugins ]; then
  mkdir -p plugins/backups
  for plugin in plugins/*.js; do
    [ -e "$plugin" ] || continue
    cp "$plugin" "plugins/backups/$(basename "$plugin")"
  done
fi

# src/libraries/
if [ -d src/libraries ]; then
  mkdir -p src/libraries/backups
  for lib in src/libraries/*.js; do
    [ -e "$lib" ] || continue
    cp "$lib" "src/libraries/backups/$(basename "$lib")"
  done
fi

# ~/bot/lib/
if [ -d "$HOME/bot/lib" ]; then
  mkdir -p "$HOME/bot/lib/backups"
  for libfile in "$HOME/bot/lib"/*.js; do
    [ -e "$libfile" ] || continue
    cp "$libfile" "$HOME/bot/lib/backups/$(basename "$libfile")"
  done
fi

# 2. Ofuscar archivos en la carpeta principal
echo "Ofuscando archivos en la carpeta principal..."
for archivo in *.js; do
  if [[ "$archivo" != "config.js" ]]; then
    echo "Ofuscando $archivo..."
    npx javascript-obfuscator "$archivo" --output "$archivo"
  fi
done

# 3. Ofuscar plugins
if [ -d plugins ]; then
  echo "Ofuscando archivos en plugins..."
  for plugin in plugins/*.js; do
    [ -e "$plugin" ] || continue
    echo "Ofuscando $plugin..."
    npx javascript-obfuscator "$plugin" --output "$plugin"
  done
fi

# 4. Ofuscar src/libraries
if [ -d src/libraries ]; then
  echo "Ofuscando archivos en src/libraries..."
  for lib in src/libraries/*.js; do
    [ -e "$lib" ] || continue
    echo "Ofuscando $lib..."
    npx javascript-obfuscator "$lib" --output "$lib"
  done
fi

# 5. Ofuscar ~/bot/lib
if [ -d "$HOME/bot/lib" ]; then
  echo "Ofuscando archivos en ~/bot/lib..."
  for libfile in "$HOME/bot/lib"/*.js; do
    [ -e "$libfile" ] || continue
    echo "Ofuscando $libfile..."
    npx javascript-obfuscator "$libfile" --output "$libfile"
  done
fi

# 6. Ir al directorio del bot
cd "$HOME/bot" || exit

# 7. Obtener últimos cambios
echo "Obteniendo cambios más recientes desde GitHub..."
git pull origin main

# 8. Commit y push
echo "Haciendo commit de los cambios..."
git add .
git commit -m "Actualización ofuscada de todos los archivos JS"
echo "Subiendo a GitHub..."
git push origin main

# 9. Restaurar archivos originales
cd - || exit

echo "Restaurando archivos originales en carpeta principal..."
for archivo in backups/*.js; do
  [ -e "$archivo" ] && mv "$archivo" "$(basename "$archivo")"
done

echo "Restaurando archivos originales en plugins..."
for plugin in plugins/backups/*.js; do
  [ -e "$plugin" ] && mv "$plugin" "plugins/$(basename "$plugin")"
done

echo "Restaurando archivos originales en src/libraries..."
for lib in src/libraries/backups/*.js; do
  [ -e "$lib" ] && mv "$lib" "src/libraries/$(basename "$lib")"
done

echo "Restaurando archivos originales en ~/bot/lib..."
for libfile in "$HOME/bot/lib/backups/"*.js; do
  [ -e "$libfile" ] && mv "$libfile" "$HOME/bot/lib/$(basename "$libfile")"
done

# 13. Listo
echo "Listo. Todos los archivos han sido ofuscados, subidos a GitHub, y los originales restaurados."
