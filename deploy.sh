#!/bin/bash

# Простой скрипт для деплоя на GitHub Pages
# Использование: ./deploy.sh "Your commit message"

COMMIT_MESSAGE=${1:-"Update portfolio"}

git add .
git commit -m "$COMMIT_MESSAGE"
git push origin main

echo "Деплой завершен! Проверь: https://backlazhdanov.github.io/portfolio/"