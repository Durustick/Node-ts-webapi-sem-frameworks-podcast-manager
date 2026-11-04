# Podcasts Manager

## Descrição

Aplicação web para listar episódios de podcasts publicados no YouTube. O projeto reúne uma API desenvolvida com Node.js e TypeScript, sem framework, e uma interface React para pesquisar e filtrar os episódios.

## Domínio

Podcasts publicados em vídeo no YouTube. Cada episódio é descrito pelo nome do podcast, imagem da capa, título, ID do vídeo e categorias.

## Funcionalidades

- Listar todos os episódios cadastrados no backend.
- Pesquisar episódios pelo título, podcast ou categoria.
- Filtrar a lista por podcast.
- Exibir a capa de cada podcast.
- Abrir o vídeo correspondente no YouTube.
- Mostrar estados de carregamento, erro e busca sem resultados.
- Adaptar a interface a dispositivos móveis.

## Tecnologias

| Parte | Tecnologias |
| --- | --- |
| Backend | Node.js, TypeScript, HTTP nativo e tsx |
| Frontend | React, TypeScript, Vite, styled-components e Lucide React |

## Organização

```text
.
├── backend/
│   ├── docs/                 # documentação da API
│   └── src/
│       ├── controllers/      # respostas HTTP
│       ├── data/             # modelo do episódio e podcast.json
│       ├── routes/           # rotas da API
│       ├── services/         # listagem e filtro
│       └── utils/            # métodos, tipos de conteúdo e status HTTP
└── frontend/
    ├── public/images/        # capas usadas pelos podcasts
    └── src/
        ├── components/       # header, hero, barra, cards e resultados
        ├── pages/            # estado e composição da tela
        ├── services/         # comunicação com o backend
        └── types/            # tipos compartilhados pela interface
```

## Como executar

Instale e inicie cada aplicação em um terminal separado, a partir da raiz do repositório.

### Backend

```powershell
cd backend
Copy-Item .env.example .env
npm install
npm run start:dev
```

Por padrão, a API escuta na porta `3636`.

### Frontend

```powershell
cd frontend
Copy-Item .env.example .env
npm install
npm start
```

O Vite encaminha as chamadas feitas em `/api` para o backend e remove o prefixo antes de enviar a solicitação.

## Endpoints

### Listar episódios

```http
GET /list
```

Retorna os episódios registrados em `backend/src/data/podcast.json`.

### Filtrar episódios por podcast

```http
GET /episodes/filter?p=flow
```

Filtra pelo nome exato do podcast e retorna uma lista JSON. O frontend carrega a lista completa uma vez e realiza a busca e a seleção de podcast no navegador.

### Formato dos dados

```json
[
  {
    "podcastName": "flow",
    "podcastImage": "/images/podcasts/flow.png",
    "episode": "CBUM - Flow #319",
    "videoId": "pQSuQmUfS30",
    "categories": ["saúde", "esporte", "bodybuilder"]
  }
]
```

As capas ficam em `frontend/public/images/podcasts`. O frontend usa `podcastImage` para carregar a imagem e `videoId` para criar o link do YouTube.

## Configuração

Cada aplicação tem seu próprio `.env.example`:

| Pasta | Variável | Uso | Padrão |
| --- | --- | --- | --- |
| `backend` | `PORT` | Porta da API | `3636` |
| `frontend` | `VITE_API_BASE_URL` | Prefixo da API usado no navegador | `/api` |
| `frontend` | `API_PROXY_TARGET` | Destino do proxy local do Vite | `http://localhost:3636` |

Os arquivos `.env` são locais e ignorados pelo Git.

## Scripts

### Backend

| Comando | Descrição |
| --- | --- |
| `npm run start:dev` | Inicia a API em desenvolvimento. |
| `npm run start:watch` | Inicia a API e reinicia ao detectar alterações. |
| `npm run dist` | Compila o backend em `dist/`. |
| `npm run start:dist` | Compila e inicia a versão compilada. |

### Frontend

| Comando | Descrição |
| --- | --- |
| `npm start` | Inicia a interface em desenvolvimento. |
| `npm run build` | Verifica os tipos e gera os arquivos em `dist/`. |
| `npm run preview` | Serve localmente a versão compilada. |

## Produção

Compile cada aplicação na respectiva pasta. Publique `frontend/dist` em um servidor estático e configure o encaminhamento de `/api` para o backend. Se a API estiver em outro domínio, configure `VITE_API_BASE_URL` e permita as chamadas de origem cruzada no backend.
