const axios = require("axios");

const BASE_URL = "https://playartifact.com/";

let cachedCardSets = {};

module.exports = {
    getSet: async (cardSetId) => {
        const nowTimestamp = new Date().getTime();

        if (cachedCardSets[cardSetId] && nowTimestamp >= cachedCardSets[cardSetId].expire_time) {
            return { ...cachedCardSets[cardSetId], cached: true };
        }

        const url = `${BASE_URL}/cardset/${cardSetId}`;

        let urlResponse;
        try {
            urlResponse = await axios.get(url);
        } catch(error) {
            throw error;
        }

        const cdnUrl = urlResponse.data.cdn_root + urlResponse.data.url;
        const cdnResponse = await axios.get(cdnUrl);

        cachedCardSets[cardSetId] = {
            expire_time: urlResponse.data.expire_time,
            data: cdnResponse.data
        }

        return { ...cdnResponse.data, cached: false };
    }
}