import { IncomingMessage } from "http";
import { repositoryPodcast } from "../data/podcast-repository"

export const serviceFilterEpisode = async(podcastName: string | undefined) =>{

      const queryString = podcastName?.split("?p=")[1] || "";


    const data = await repositoryPodcast(queryString);
    return data;
}