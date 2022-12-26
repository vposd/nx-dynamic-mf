```bash
npm ci

npm i -g serve

nx serve host --open

nx build --project=shop --target=production

nx build --project=plugin --target=production

cd ./dist/apps/plugin
serve -p 3000 -C

cd ../shop
serve -p 3001 -C
