let { v4: uuidv4 } = require("uuid");
let db = require("./connection");
module.exports.createEntityFact = function (entity) {
//  function
    return function (entityObj) {
        // create user in db
        // google / facebook 
        entityObj.id = uuidv4();
        // validation=> extra value
        if(entity=="post" || entity == "comment"){
            let date = new Date();
            entityObj.created_at = date.toISOString().slice(0,19).replace('T',' ');
        }
        return new Promise(function (resolve, reject) {
            db.query(`INSERT INTO ${entity} SET?`, entityObj, function (err, result) {
                // Neat!
                if (err) {
                    console.log(err);
                    reject(err)
                } else {
                    resolve(entityObj);
                }
            });
        })

    }
}

module.exports.getEntityFact=function(entity)
{
    return function (id) {
        // get user in db
        return new Promise(function (resolve, reject) {
            db.query(`SELECT * from ${entity} WHERE id="${id}"`, function (err, result) {
                if (err) {
                reject(err);
                } else {
                resolve(result[0])
                }
            })
        })
    }
}

module.exports.getallEntityFact=function(entity)
{
    return function () {
        // get user in db
        return new Promise(function (resolve, reject) {
            db.query(`SELECT * from ${entity}`, function (err, result) {
                if (err) {
    
                    reject(err);
                } else {
                    resolve(result)
                }
            })
        })
    }
}
module.exports.updateEntityFact=function(entity)
{
    return function (id, updateObj) {
        // update UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'"
    
        // {
        //     name: "Jasbir",
        //         number : 8800943685
        // }
        // name="kjghh",number="jghfjg"
        let updateStr = "";
        for (let key in updateObj) {
            updateStr += `${key} = "${updateObj[key]}",`
        }
        // "name = Jasbir,number = 8800943685,"
        updateStr = updateStr.substring(0, updateStr.length - 1);
        // "name = Jasbir,number = 8800943685"
    
        var query = `UPDATE ${entity} SET ${updateStr} WHERE id="${id}"`
        return new Promise(function (resolve, reject) {
            db.query(query, function (err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
    
            })
        })
    
    }
}
module.exports.deleteEntityFact=function(entity)
{
    return function (id) {
        // delete  user in db
        return new Promise(function (resolve, reject) {
            db.query(` DELETE  from ${entity} WHERE id="${id}"`, function (err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve()
                }
            })
        })
    }
}