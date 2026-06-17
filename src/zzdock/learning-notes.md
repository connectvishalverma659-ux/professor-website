React Architecture Notes

1. Data Layer
   - Stores application data

2. Page Layer
   - Routing
   - Filtering
   - Sorting
   - Searching

3. Component Layer
   - Reusable UI
-------------------------------------------------

   | Requirement                | Location                |
| -------------------------- | ----------------------- |
| Store publications         | data/publications.ts    |
| Store students             | data/currentStudents.ts |
| Store alumni               | data/alumni.ts          |
| Store news                 | data/news.ts            |
| Sort publications          | publications/page.tsx   |
| Search publications        | publications/page.tsx   |
| Filter open positions      | positions/page.tsx      |
| Show latest 5 news on Home | app/page.tsx            |
| Render one student         | StudentCard.tsx         |
| Render one publication     | PublicationCard.tsx     |
| Render one position        | PositionCard.tsx        |
