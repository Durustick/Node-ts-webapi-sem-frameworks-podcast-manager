import { IncomingMessage, ServerResponse } from 'http'
import { serviceListEpisodes } from '../services/list-episodes-services'
import { serviceFilterEpisode } from '../services/filter-episode';
import { statusCode } from '../utils/statusCode';
import { contentType } from '../utils/contentType';


export const getListEpisodes = async (request: IncomingMessage, response: ServerResponse) => {

    const content = await serviceListEpisodes();
    response.writeHead(statusCode.OK, { 'content-type': contentType.JSON });
    response.end(JSON.stringify(content))

};

export const getListFilterEpiodes = async (request: IncomingMessage, response: ServerResponse) => {


    const content = await serviceFilterEpisode(request.url);
    response.writeHead(statusCode.OK, { 'content-type': contentType.JSON });
    response.end(JSON.stringify(content))
}
