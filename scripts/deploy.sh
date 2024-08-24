#!/bin/bash


npm i -g pm2 pnpm


# Set default values for APP_NAME and ENV if not provided
APP_NAME="${APP_NAME}"
ENV="${ENV:-development}"

# Concatenate APP_NAME with ENV
APP_NAME_WITH_ENV="${APP_NAME}_${ENV}"

# Check if the process exists
if pm2 info "$APP_NAME_WITH_ENV" &>/dev/null; then
    # If it exists, delete it
    pm2 delete "$APP_NAME_WITH_ENV"
    echo "$APP_NAME_WITH_ENV process deleted."
else
    echo "$APP_NAME_WITH_ENV process not found."
fi

echo "Starting Running $APP_NAME_WITH_ENV"
echo "Installing Dependencies"
pnpm install

echo "Generating Prisma Client"
pnpm prisma:generate

echo "Deploy Primsa DB"
pnpm prisma:deploy

echo "Seeding DB"
pnpm dlx prisma db seed

echo "Removing Previous build"
rm -rf .next

echo "Building Next.js Project"
pnpm build

echo "Start PM2 Server"
pm2 start pnpm  --name "${APP_NAME_WITH_ENV}" -- start