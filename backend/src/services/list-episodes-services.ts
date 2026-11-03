import { repositoryPodcast } from "../data/podcast-repository";

export const serviceListEpisodes = async () => {
        const data = await repositoryPodcast()
        return data;
}
