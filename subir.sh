#!/bin/bash

echo "Respaldando código original..."
cp plugins/ia.js plugins/ia_original.js

echo "Ofuscando..."
npx javascript-obfuscator plugins/ia.js --output plugins/ia.js

echo "Haciendo commit..."
git add .
git commit -m "Actualización ofuscada"
git push origin main

echo "Restaurando código original..."
mv plugins/ia_original.js plugins/ia.js

echo "Listo. Código subido ofuscado a GitHub pero limpio en tu VPS."
