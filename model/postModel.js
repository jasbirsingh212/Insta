const { createEntityFact ,getEntityFact,getallEntityFact,updateEntityFact,deleteEntityFact} = require("../utility/modelFactory");
const create = createEntityFact("post");
const get=getEntityFact("post");
const getall=getallEntityFact("post");
const updateById=updateEntityFact("post");
const deletepost=deleteEntityFact("post");

module.exports.create = create;
module.exports.get=get;
module.exports.getall=getall;
module.exports.updateById=updateById;
module.exports.deletepost=deletepost;