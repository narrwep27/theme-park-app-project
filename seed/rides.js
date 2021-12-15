const db = require('../db');
const { Ride } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
    const rides = [
        {
            name: 'Superman',
            thrillLevel: '10',
            minimumHeight: '48 in',
            description: 'Unbelievable intensity on our fastest roller coaster yet!',
            imageUrl: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fsfneonline.org%2Fwp-content%2Fuploads%2F2015%2F09%2FSuperman-The-Ride-Key-Art.jpg&f=1&nofb=1'
        },
        {
            name: 'Flight of Fear',
            thrillLevel: '8',
            minimumHeight: '48 in',
            description: `Our fastest indoor roller coaster! Don't blink or you might miss all the hidden surprises that lurks around...`,
            imageUrl: 'https://i.ytimg.com/vi/iHOp3pvuStk/maxresdefault.jpg'
        },
        {
            name: 'Teacups',
            thrillLevel: '3',
            minimumHeight: '30 in',
            description: "The classic teacups! Dive in and swirl around with your friends!",
            imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages2.minutemediacdn.com%2Fimage%2Fupload%2Fc_fill%2Cg_auto%2Ch_1248%2Cw_2220%2Fv1555309375%2Fshape%2Fmentalfloss%2Fteacups_primary.jpg%3Fitok%3Dm6HO15-m&f=1&nofb=1'
        },
        {
            name: 'Bumper Cars',
            thrillLevel: '4',
            minimumHeight: '30 in',
            description: 'The rule is to buckle up and drive UNsafe! Control your car as you collid with others in this classic attraction!',
            imageUrl: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Famusementrides.org%2Fwp-content%2Fuploads%2F2016%2F03%2FThe-Best-Indoor-Bumper-Cars-For-Sale.jpg&f=1&nofb=1'
        },
        {
            name: 'G-Force',
            thrillLevel: '9',
            minimumHeight: '48 in',
            description: 'Hold onto your seats as you drop from 400 feet in the air!',
            imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Faboutthemeparks.net%2Fwp-content%2Fuploads%2F2019%2F03%2FKings_Dominion-Drop-Tower-1024x683.jpg&f=1&nofb=1'
        },
        {
            name: 'Merry Go Round',
            thrillLevel: '2',
            minimumHeight: '30 in',
            description: 'Choose a steed and wave to family and friends!',
            imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fih1.redbubble.net%2Fimage.5992760.7776%2Fflat%2C1000x1000%2C075%2Cf.u2.jpg&f=1&nofb=1'
        },
        {
            name: 'Swing Carousel',
            thrillLevel: '5',
            minimumHeight: '30 in',
            description: 'Grab a seat and fly through the air as the carousel spins!',
            imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fcolorful-chain-swing-carousel-motion-amusement-park-blue-sky-background-96947745.jpg&f=1&nofb=1'
        },
        {
            name: 'Pirate Ship',
            thrillLevel: '7',
            minimumHeight: '48 in',
            description: 'Swing back and forth between on a pirate ship and hold on tight!',
            imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fres.cloudinary.com%2Fsimplotel%2Fimage%2Fupload%2Fx_0%2Cy_120%2Cw_1280%2Ch_720%2Cr_0%2Cc_crop%2Cq_80%2Cfl_progressive%2Fw_960%2Cf_auto%2Cc_fit%2Fwonderla-amusement-park-bangalore%2Fdry_rides_pirate_ship_1_wonderla_amusement_parks_bangalore_k1fegu&f=1&nofb=1'
        },
        {
            name: 'Wild Mouse',
            thrillLevel: '7',
            minimumHeight: '48 in',
            description: `Roller coasters don't have to be fast. Get swung around in the twists and turns of Wild Mouse!`,
            imageUrl: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcoasterforce.com%2Fdev%2Fwp-content%2Fuploads%2F2016%2F10%2FWildMouseCasinoPier-1.jpg&f=1&nofb=1'
        },
        {
            name: 'Ferris Wheel',
            thrillLevel: '4',
            minimumHeight: '30 in',
            description: 'Get a beautiful view across the amusement park at the peak of our ferris wheel!',
            imageUrl: 'https://c.wallhere.com/photos/4c/51/ferris_wheel_oktoberfest_entertainment_attraction-554646.jpg!d'
        }
    ]
    
    await Ride.insertMany(rides);
    console.log('Seed rides inserted into database');
};

const run = async () => {
    await main();
    db.close();
};
run();