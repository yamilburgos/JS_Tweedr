var promise = require('bluebird');
var options = { promiseLib: promise };
var pgp = require('pg-promise')(options);

// SET UP THE DATABASE
var connectionString = process.env.DATABASE_URL;
var db = pgp(connectionString);

function getTweeds(req, res, next){}

function createTweed(req, res, next){}

function updateTweed(req, res, next){}

function deleteTweed(req, res, next){}

module.exports = {
    getTweeds, // GET
    createTweed, // CREATE
    updateTweed, // UPDATE
    deleteTweed, // DELETE
};