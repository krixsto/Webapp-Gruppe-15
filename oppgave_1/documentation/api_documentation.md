# API-dokumentasjon

Denne dokumentasjonen gir en oversikt over tilgjengelige API-endepunkter, hvilke HTTP-metoder som er støttet, og hvilke data og statuskoder som returneres. Den inkluderer også en beskrivelse av hvilke sider som bruker disse APIene og hva de tilbyr.

## 1. API-endepunkter og tilgjengelige metoder

### `/courses`
- **GET**: Henter en liste over alle kurs.
  - **Respons**: 200 OK, returnerer en liste med kursobjekter.
  - **Feilrespons**: 500 Internal Server Error ved feil.
- **POST**: Oppretter et nytt kurs.
  - **Request Body**: JSON-objekt som inneholder `id`, `title`, `slug`, `description`, `category`, og `lessons`.
  - **Respons**: 201 Created, returnerer det opprettede kurset.
  - **Feilrespons**: 400 Bad Request hvis data mangler.

### `/courses/{slug}`
- **GET**: Henter spesifikke kursdetaljer basert på `slug`.
  - **Respons**: 200 OK, returnerer kursdetaljer.
  - **Feilrespons**: 404 Not Found hvis kurs ikke eksisterer.

### `/courses/{courseSlug}/{lessonSlug}`
- **GET**: Henter spesifikke leksjonsdetaljer.
  - **Respons**: 200 OK, returnerer detaljer om leksjonen.
  - **Feilrespons**: 404 Not Found hvis leksjonen ikke finnes.

### `/comments`
- **GET**: Henter kommentarer for en spesifikk leksjon.
  - **Query Parameter**: `lessonSlug`
  - **Respons**: 200 OK, returnerer en liste med kommentarer.
- **POST**: Legger til en kommentar for en leksjon.
  - **Request Body**: JSON-objekt som inneholder `id`, `createdBy`, `comment`, og `lesson`.
  - **Respons**: 201 Created, returnerer den opprettede kommentaren.
  - **Feilrespons**: 400 Bad Request ved ugyldige data.

