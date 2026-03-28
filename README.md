# SoccerStat

Приложение для просмотра футбольной статистики — лиги, команды, календарь матчей.

Тестовое задание SimbirSoft (поток Frontend).

**Демо:** https://vladgreben123.github.io/SimbirSoft-testTask/

---

## Стек

- React 19 + TypeScript
- Vite 8
- React Router DOM v6 (HashRouter)
- Axios
- react-datepicker + date-fns
- CSS Modules
- Vitest + React Testing Library
- ESLint + Prettier
- Деплой: gh-pages
- CORS-прокси: Vercel Serverless Functions

---

## Функциональность

- Список лиг (соревнований) с поиском и пагинацией
- Список команд с поиском и пагинацией
- Календарь матчей лиги с фильтрацией по диапазону дат
- Календарь матчей команды с фильтрацией по диапазону дат
- Хлебные крошки для навигации
- Статусы матчей на русском языке
- Счёт: основное время, дополнительное время, пенальти
- Перевод времени из UTC в локальное время пользователя
- Адаптивная вёрстка (iPhone 14 — 390px, iPad 11 — 820px, Desktop — 1280/1920px)
- Обработка ошибок API: 429 (лимит запросов), 403 (нет доступа), сетевые ошибки

---

## Структура проекта

```
src/
├── api/            # Axios-клиент и функции запросов к API
├── assets/icons/   # SVG-иконки
├── components/     # Переиспользуемые компоненты
│   ├── Breadcrumbs/
│   ├── DateRangePicker/
│   ├── Header/
│   ├── MatchRow/
│   ├── Pagination/
│   └── SearchInput/
├── pages/          # Страницы приложения
├── types/          # TypeScript-интерфейсы
├── utils/          # Утилиты (форматирование, перевод статусов, пагинация)
└── test/           # Настройка тестов
```

---

## Запуск локально

### 1. Клонировать репозиторий

```bash
git clone https://github.com/vladgreben123/SimbirSoft-testTask.git
cd SimbirSoft-testTask/soccerstat
```

### 2. Получить токен API

Зарегистрироваться на [football-data.org](https://www.football-data.org/) и получить бесплатный API-токен.

### 3. Создать файл `.env`

```
VITE_API_TOKEN=ваш_токен_здесь
VITE_API_BASE_URL=/api/v4
```

### 4. Установить зависимости и запустить

```bash
npm install
npm run dev
```

Приложение откроется на `http://localhost:5173`.

---

## Тесты

```bash
npm run test
```

Покрыты: утилиты (formatScore, getPages, translateStatus), компоненты (SearchInput, Pagination).

---

## Сборка и деплой

```bash
# Сборка
npm run build

# Деплой на GitHub Pages
npm run deploy
```

### Как работает API

- **Development** — запросы проксируются через Vite dev server (`/api/v4 → https://api.football-data.org/v4`), токен передаётся в заголовке `X-Auth-Token`.
- **Production** — запросы идут через CORS-прокси на Vercel (serverless function), токен хранится в переменных окружения Vercel и не доступен на клиенте.

---

## Ограничения бесплатного тарифа API

- Доступны только 13 лиг
- Лимит запросов: 10 в минуту (при превышении отображается сообщение об ошибке)
