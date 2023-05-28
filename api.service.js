import axios from 'axios';

const animeServiceUrl = 'http://localhost:8005';

class ApiService {

    static get = async (url) => {
        const result = await axios.get(url);
        return result.data;
    }

    static getAnime = async () => {
        const animes = await axios.get(animeServiceUrl + '/anime');
        return animes.data;
    };

    static search = async (name) => {
        const animes = await axios.get(`${animeServiceUrl}/anime/search/?animeName=${name}`);
        return animes.data;
    };


    static getAnimeVideoLink = (item) => {
        const animeVideoLink = `${animeServiceUrl}/Anime/${item.id}`
        return animeVideoLink;
    }
}

export { ApiService };
