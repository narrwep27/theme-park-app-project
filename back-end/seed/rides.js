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
            imageURL: 'https://www.sixflags.com/sites/default/files/2017_sfne_superman_7.png'
        },
        {
            name: 'Flight of Fear',
            thrillLevel: '8',
            minimumHeight: '48 in',
            description: `Our fastest indoor roller coaster! Don't blink or you might miss all the hidden surprises that lurks around...`,
            imageURL: 'https://th.bing.com/th/id/R.3619bb43ee45873e889829763b7b73c7?rik=KrqvdGNR3d16JQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-hI1LQhl_LJ8%2fUc34p2Kn5HI%2fAAAAAAAAOMU%2f80fR97pQSJY%2fs1600%2fki70.jpg&ehk=dO7aqWP5VIrR8et0s2LjQBSl27mTAF19RFmrt6ZmL4c%3d&risl=&pid=ImgRaw&r=0'
        },
        {
            name: 'Teacups',
            thrillLevel: '3',
            minimumHeight: '30 in',
            description: "The classic teacups! Dive in and swirl around with your friends!",
            imageURL: 'https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/v1555309375/shape/mentalfloss/teacups_primary.jpg?itok=m6HO15-m'
        },
        {
            name: 'Bumper Cars',
            thrillLevel: '3',
            minimumHeight: '30 in',
            description: 'The rule is to buckle up and drive UNsafe! Control your car as you collid with others in this classic attraction!',
            imageURL: 'https://th.bing.com/th/id/R.bf1f031025ad17030a29ef3ecf12c345?rik=6BAIrQptO5XNNg&pid=ImgRaw&r=0&sres=1&sresct=1'
        },
        {
            name: 'G-Force',
            thirllLevel: '9',
            minimumHeight: '48 in',
            description: 'Hold onto your seats as you drop from 400 feet in the air!',
            imageURL: 'https://th.bing.com/th/id/OIP.ViqJ_3B1XSu31x_oGNJFfwHaJ3?pid=ImgDet&rs=1'
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