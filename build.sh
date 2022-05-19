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
cp -r "./BackEnd/bin" "./bin/bin"
cp -r "./BackEnd/database" "./bin/database"
cp -r "./BackEnd/jwt" "./bin/jwt"
cp -r "./BackEnd/routes" "./bin/routes"
cp -r "./BackEnd/app.js" "./bin/app.js"
cp -r "./BackEnd/authMiddleware.js" "./bin/authMiddleware.js"
cp -r "./BackEnd/package.json" "./bin/package.json"
cp -r "./BackEnd/.env" "./bin/.env"

cd "./bin"
echo "Installing modules"
npm i