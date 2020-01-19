const dev = require('../models/dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response){
        const {latitude, longitude, techs} = request.query;
        const techsArray = parseStringAsArray(techs);

        const devs = await dev.find({
           techs: {
               $in: techsArray
           },
           location: {
               $near: {
                   $geometry: {
                       type: 'Point',
                       coordinates: [longitude, latitude]
                   },
                   $maxDistance: 10000
               }
           }
        });

        return response.json({devs});
    },

    async update(request, response){
        // TODO
    },

    async destroy(request, response){
        // TODO
    }
};