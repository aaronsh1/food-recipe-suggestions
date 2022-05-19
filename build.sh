if [ -d "./bin" ]
then
  echo "Clearing bin folder"
  rm -r "./bin" -f
fi

echo "Creating bin folder"
mkdir "./bin"

echo "Installing and Building on Frontend"
cd "frontend"
npm i
npm run build
cd ..

echo "Copying frontend"
cp -r "./frontend/public" "./bin/public"
echo "Copied frontend"

echo "Copying backend"
cp -r "./backend/bin" "./bin/bin"
cp -r "./backend/database" "./bin/database"
cp -r "./backend/jwt" "./bin/jwt"
cp -r "./backend/routes" "./bin/routes"
cp -r "./backend/app.js" "./bin/app.js"
cp -r "./backend/authMiddleware.js" "./bin/authMiddleware.js"
cp -r "./backend/package.json" "./bin/package.json"
cp -r "./backend/.env" "./bin/.env"

cd "./bin"
echo "Installing modules"
npm i