# BackendkursSlutuppgiftFrontend
The frontend code for my Blog application

+ Inlämningen går att göra 2 och 2 förutsatt att båda parter är helt med på innehållet och funktionerna som skapats

Lämnas på PingPong.
Ge Github-access till “Francisco-gaddr” eller ha projektet publikt.
Printscreens på projektboards bifogas.


Projektpresentation:
Torsdag 2 juni 09.00-16.00
Bokning:
https://coda.io/@franspadi/backend-fyll-i


En grundläggande fungerande backend-webb-api-miljö som innehåller:

+ Koppling mellan frontend och backend via API endpoints (REST) samt proxy. REST 
+ En grundläggande frontendmiljö för backendkommunikation och datahantering Frontend 
+ Validatering av datatyper och datainput Datavalidering 
+ Databasmiljö med datamodellering och datahantering  Databaskoppling 
+ Koppling till databas med CRUD-förmåga. Databaskoppling 
+ Hantering av signup, inlogg och autentisering JWT  Middleware Proxy 
+ Grundläggande (injektions- ) och accessäkerhet Databaskoppling 
+ Arbeta enligt och inlämna underlag för ett agilt arbetssätt Agilt Arbetssätt 
Bifogas: Grundläggande projektplan i Trello eller Asana etc  Agilt Arbetssätt 



+ Tekniker att använda:
    +Godkänt:
      + JWT för tokens och auth JWT 
      + CORS-inställning för globalt / ( en specifik källa ) Cors 
      + CRUD för användare REST 
      + Auth och fortsatt session token JWT  Register, Login & Auth 
      + Enkel frontend för CRUD (formulär och text-fält) med visandet av felmeddelanden. Datavalidering 
      + Minst 1 ytterligare entitets-typ med CRUD, datavalidering och tokenskydd (förutom user)
      + Minst 1 Databaskoppling (SQLite / SQL Server / MySQL / etc) DBContext  Databaskoppling 
      + Minst 1  one-many -relation DBContext 
      + Grundläggande projektplanering och projektutförande i projektverktyg (Trello, Asana, Coda, Jira, Monday, Github Issues etc). Agilt Arbetssätt 
      
      

    + VG
      + IdentityServer-Auth & JWT  Oauth 2.0 & Identity Server 
      + Mer manuell kontroll på sessionhantering  Oauth 2.0 & Identity Server 
      (+ Grundläggande injektions-kontroll )
      + Fullstack datavalideringmed UI-infotext vid fel  Datavalidering 
      + Tydlig felhantering med meddelanden från backend Stauskoder & Error Handling 
      + Minst 2 stycken databas-kopplingar.   (SQLite / SQL Server / MySQL / etc) Databaskoppling 
      + Ytterligare dokumentation kring ditt API med förklaring per endpoint ( 50-100 tecken)
      
      + Ha 2 riktiga sprintar (2-3v) med motivation/förklaring och redogjord insikt  Agilt Arbetssätt 
      
      + Minst 2 ytterligare entitets-typ med CRUD, datavalidering och tokenskydd (Förutom user & logg) Entity Framework Core  Datavalidering 
      + Mer genomtänkta databaskoppling ( > 1 Many-to-many relationer) Databaskoppling Entity Framework Core 
      + Större förståelse och vana i sin kod
      


Förslag:

+ Bloggliste-backend (G-feeling)
  + Lista och skapa blogginlägg
  + Kunna kommentera inlägg
  + Kunna likea inlägg med counter
  

+ Att-göra-lista (G-feeling)
     + Uppgifter att utföra (entiteter)
     + Deadline per uppgift
  + Instruktioner för uppgiften
  + Status på uppgiften (ska göra, görs, färdig)
     + Personer (entiteter) som ska göra uppgiften.


+ En Schemaboknings-backend (frisörsbokning / rumsbokning): (VG-feeling)
  + Kunna lägga upp tillgängliga bokningsbara objekt (rum, person, föremål)
  + Ha personer som kan boka andra personer / ytor / föremål
  + En användare kan reservera en produkt / person / yta
  + Se vilka föremål / personer & ytor som just nu är tillgängliga eller tillgängliga en viss tid


+ En “inchecknings”-backend / Besökar-system:
  + Användare som kan checka in, eller checka in som gäst
  + Kunna checka in / ut en gäst eller användare
  + Logga datum / tillfälle vid in- / Utcheckning
  ( + Ha tillgängliga personer som kan bli notifierade när en gäst checkar in ) 

+ Informationsskärm
  + Visa upp nyheter och information i skärm
  + Input-vy för att skapa nyheter

+ Forum
  + Ha olika forum-”trådar”
  + Användare
  + Kunna svara på vissa specifika forumtrådar



Presentationen:
Torsdag 2 juni 09.00-16.00
Bokning:
https://coda.io/@franspadi/backend-fyll-i

Tips är att lägga upp presentationen på följande sätt:
1. Visa upp det du skapat och hur det funkar. Visa upp ditt API , backend och de frontendelar du valt som ska kunna interager med din backend.
  
2. Visa upp din kod. Redogör för hur du tänkt i ditt arbete och kodande. Var de moment som var extra intressanta eller som du hade någon specifik tankegång kring?
  
3. Vad har du tagit med dig från ditt projekt? (Lärdomar)
  Finns de något du i framtiden som du vill lägga till här (vad är next step?)
