# Используем образ Node.js
FROM node:14

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы проекта
COPY . .

# Собираем приложение
RUN npm run build

# Устанавливаем сервер для статических файлов
RUN npm install -g serve

# Указываем команду для запуска приложения
CMD ["serve", "-s", "build", "-l", "3000"]

# Открываем порт, который будет использоваться приложением
EXPOSE 3000
