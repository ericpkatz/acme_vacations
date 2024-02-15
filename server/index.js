const db = require('./db');
const client = db.client;
const createTables = db.createTables;
const createUser = db.createUser;
const createPlace = db.createPlace;
const fetchUsers = db.fetchUsers;
const fetchPlaces = db.fetchPlaces;

const init = async()=> {
    console.log('connecting to database');
    await client.connect();
    console.log('connected to database');
    await createTables();
    console.log('tables created');
    const [moe, lucy, ethyl, rome, dallas, paris, nyc] = await Promise.all([
        createUser({ name: 'moe'}),
        createUser({ name: 'lucy'}),
        createUser({ name: 'ethyl'}),
        createPlace({ name: 'rome'}),
        createPlace({ name: 'dallas'}),
        createPlace({ name: 'paris'}),
        createPlace({ name: 'nyc'}),
    ]);
    console.log(await fetchUsers());
    console.log(await fetchPlaces());
};


init();