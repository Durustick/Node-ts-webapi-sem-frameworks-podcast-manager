import * as http from "http";
import { getListEpisodes, getListFilterEpiodes } from './controllers/podcast-controller';
import { Routes } from "./routes/routes";
import { HTTPMethods } from "./utils/httpMethods";


const server = http.createServer(async (req: http.IncomingMessage, res: http.ServerResponse) => {



    const [baseUrl, query] = req.url?.split("?") || ["", ""];

    if (req.method === HTTPMethods.GET && baseUrl === Routes.LIST_EPISODES) {
        await getListEpisodes(req, res);

    }

    if (req.method === HTTPMethods.GET && baseUrl === Routes.FILTER_EPISODES) {
        await getListFilterEpiodes(req, res);
    }


});

server.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado com sucesso na porta ${process.env.PORT}`);
})
