const { createEntityFact ,getEntityFact,getallEntityFact,updateEntityFact,deleteEntityFact} = require("../utility/modelFactory");
const create = createEntityFact("comment");
const get=getEntityFact("comment");
const getall=getallEntityFact("comment");
const updateById=updateEntityFact("comment");
const deletecomment=deleteEntityFact("comment");

module.exports.create = create;
module.exports.get=get;
module.exports.getall=getall;
module.exports.updateById=updateById;
module.exports.deletecomment=deletecomment;