var config = {};

config.debug = process.env.DEBUG || false;

config.mongodb = {};
config.mongodb.username   = process.env.MONGODB_USERNAME   || '<username>';
config.mongodb.password   = process.env.MONGODB_PASSWORD   || '<password>';
config.mongodb.hostname   = process.env.MONGODB_HOSTNAME   || '<hostname>';
config.mongodb.port       = process.env.MONGODB_PORT       || 27017;
config.mongodb.database   = process.env.MONGODB_DATABASE   || '<database>';
config.mongodb.collection = process.env.MONGODB_COLLECTION || '<collection>';

module.exports = config;
