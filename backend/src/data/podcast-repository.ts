import fs from "fs";
import path from "path";

interface PodcastModel {
    podcastName: string;
    podcastImage: string;
    episode: string;
    videoId: string;
    categories: string[]
}


const pathData = path.join(__dirname, "../data/podcast.json")

export const repositoryPodcast = async (podcastName?: string): Promise<PodcastModel[]> => {

    const language = "utf-8";
    const rawData = fs.readFileSync(pathData, language)
    const jsonFile = JSON.parse(rawData)

    if (podcastName) {
        const filter: PodcastModel[] = [];
        for (let i = 0; i < jsonFile.length; i++) {
            if (jsonFile[i].podcastName === podcastName) {
                filter.push(jsonFile[i])
            }
        }
        return filter;
    }


    return jsonFile;
}
