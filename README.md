# SoccerStat

Приложение для просмотра футбольной статистики — список лиг, команды внутри лиги, календарь матчей.

Тестовое задание SimbirSoft (поток Frontend).

**Демо:** https://mesey.github.io/SimbirSoft-testTask/

---

## Стек

- React 19 + TypeScript
- Vite 8
- React Router DOM v6 (HashRouter)
- Axios
- react-datepicker + date-fns
- CSS Modules
- ESLint + Prettier
- Деплой: gh-pages

---

## Функциональность

- Список доступных лиг (соревнований) с поиском и пагинацией
- Список команд внутри лиги с поиском и пагинацией
- Календарь матчей лиги с фильтрацией по диапазону дат
- Календарь матчей команды с фильтрацией по диапазону дат
- Адаптивная вёрстка (мобильные устройства от 390px, планшеты от 820px)
- Обработка ошибок API: 429 (лимит запросов), 403 (нет доступа), сетевые ошибки

---

## Запуск локально

### 1. Клонировать репозиторий

```bash
git clone https://github.com/mesey/SimbirSoft-testTask.git
cd SimbirSoft-testTask/soccerstat
```

### 2. Получить токен API

Зарегистрироваться на [football-data.org](https://www.football-data.org/) и получить бесплатный API-токен.

### 3. Создать файл `.env`

```
VITE_API_TOKEN=ваш_токен_здесь
VITE_API_BASE_URL=https://api.football-data.org
```

### 4. Установить зависимости и запустить

```bash
npm install
npm run dev
```

Приложение откроется на `http://localhost:5173`.

---

## Сборка и деплой

```bash
# Сборка в папку dist/
npm run build

# Деплой на GitHub Pages
npm run deploy
```

> В режиме разработки запросы к API проксируются через Vite (`/api → https://api.football-data.org`).
> В продакшене используется прямой URL из `.env.production`.

---

## Ограничения бесплатного тарифа API

- Доступны только 13 лиг
- Эндпоинт `/competitions` блокируется CORS в некоторых браузерах (например, Opera GX) — рекомендуется Chrome
- Лимит запросов: 10 в минуту (при превышении отображается ошибка 429)
