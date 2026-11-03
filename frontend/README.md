# Escuta — catálogo de episódios

## Descrição

Frontend React para descobrir episódios de podcasts em vídeo. A aplicação apresenta os episódios fornecidos pelo backend, permite buscar por título, podcast ou categoria e oferece um filtro por podcast. Cada episódio abre o vídeo correspondente no YouTube.

## Domínio

Podcasts publicados em vídeo, com dados fornecidos pelo backend.

## Funcionalidades

- Carregar e exibir todos os episódios do backend.
- Mostrar a imagem do podcast em cada episódio.
- Buscar pelo título do episódio, nome do podcast ou categorias.
- Filtrar pelo nome do podcast usando a rota de filtro do backend.
- Abrir o episódio selecionado no YouTube.
- Exibir estados de carregamento, erro de conexão e busca sem resultados.
- Adaptar o catálogo para telas menores.

## Tecnologias

- React e TypeScript
- Vite
- styled-components
- Lucide React para ícones

## Requisitos

- Node.js e npm instalados.
- Backend disponível. Por padrão, ele escuta na porta `3636`.

## Como executar

No PowerShell, dentro da pasta do frontend:

```powershell
Copy-Item .env.example .env
npm install
npm start
```

Inicie também o backend em outro terminal:

```powershell
cd ..\backend
npm install
npm run start:dev
```

O Vite inicia o frontend e informa o endereço local no terminal. O backend precisa estar rodando para carregar os episódios.

## Configuração da API

As variáveis ficam no arquivo `.env`, criado a partir de `.env.example`:

| Variável | Uso | Padrão |
| --- | --- | --- |
| `VITE_API_BASE_URL` | Prefixo usado para chamar a API | `/api` |
| `API_PROXY_TARGET` | URL do backend para o proxy do Vite durante o desenvolvimento | `http://localhost:3636` |

Ao abrir, o frontend busca todos os episódios uma única vez em `/api/list`. A busca por texto e o filtro por podcast são aplicados no navegador, sem novas chamadas ao backend. No desenvolvimento, o proxy do Vite remove o prefixo `/api` antes de encaminhar a solicitação. Assim, `/api/list` chega ao backend como `/list`.

Para usar outra porta ou endereço local, altere `API_PROXY_TARGET`. Para uma implantação, configure `VITE_API_BASE_URL` com o prefixo atendido pelo servidor web. A configuração de produção deve encaminhar esse prefixo ao backend no mesmo domínio ou habilitar CORS no backend se a API estiver em outro domínio.

## Integração com o backend

### Listar episódios

```http
GET /list
```

Retorna a lista de episódios disponível no repositório do backend.

### Rota de filtro do backend

```http
GET /episodes/filter?p=flow
```

O backend também oferece esta rota. O frontend filtra localmente a lista já carregada e não precisa chamar esta rota quando o usuário troca de podcast.

### Formato dos episódios

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

O link do vídeo é montado no frontend a partir de `videoId`, usando o formato `https://www.youtube.com/watch?v={videoId}`. `podcastImage` aponta para uma imagem estática servida pelo frontend.

## Organização do projeto

```text
src/
├── components/
│   ├── EpisodeCard/       # cartão reutilizável de episódio
│   ├── EpisodeResults/    # lista, banner e estados da consulta
│   ├── EpisodeToolbar/    # busca e filtro por podcast
│   ├── Footer/
│   ├── Header/
│   └── Hero/
├── pages/
│   ├── App.tsx            # estado da tela e coordenação da consulta
│   └── styles.ts          # estilos da página e do catálogo
├── services/
│   └── episodes.ts        # busca a lista de episódios no backend
├── types/
│   └── episode.ts         # formato dos dados de episódio
├── index.tsx              # ponto de entrada React
└── styles.ts              # estilos globais
public/
└── images/
    └── podcasts/          # imagens dos podcasts referenciadas pelo JSON
```

Os componentes visuais mantêm seus estilos styled-components junto de cada pasta em `styles.ts`.

## Scripts

| Comando | Descrição |
| --- | --- |
| `npm start` | Inicia o frontend em modo de desenvolvimento. |
| `npm run build` | Verifica os tipos TypeScript e gera os arquivos de produção em `dist/`. |
| `npm run preview` | Serve localmente a versão gerada em `dist/` para conferência. |

## Compilar para produção

```powershell
npm run build
npm run preview
```

Publique o conteúdo de `dist/` em um servidor estático e configure o encaminhamento de `/api` para o backend, ou defina `VITE_API_BASE_URL` antes da compilação para apontar para uma API acessível pelo navegador.
