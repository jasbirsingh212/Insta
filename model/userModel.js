const db = require("./connection");
const { v4: uuidv4 } = require('uuid');
//  db => model , authentication
const { createEntityFact, getEntityFact,getallEntityFact ,updateEntityFact,deleteEntityFact} = require("../utility/modelFactory");

const createUser = createEntityFact("user");
const getById = getEntityFact("user");
const getAll = getallEntityFact("user");
const updateById = updateEntityFact("user");
const deleteById = deleteEntityFact("user");



module.exports.create = createUser;
module.exports.getById = getById
module.exports.getAll = getAll
module.exports.updateById = updateById
module.exports.deleteById = deleteById