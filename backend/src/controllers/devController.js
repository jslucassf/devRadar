const axios = require('axios');
const dev = require('../models/dev');
const parseStringAsArray = require('./utils/parseStringAsArray');

module.exports = {
    async index(request, response){
        const devs = await dev.find();

        return response.json(devs);
    },

    async store(request, response){
        let { github_username , techs, latitude, longitude} = request.body;
        
        let developer = await dev.findOne({ github_username });
        
        if(!developer){
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
            
            let {name = login, avatar_url, bio} = apiResponse.data;
            techs = parseStringAsArray(techs);
            
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
            
            developer = await dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs,
                location
            });
        }
            
        return response.json(developer);
    }
}