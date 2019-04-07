var sequelize = require("./connection")

var Orm = {
    add: function (childName, guardianName, email, phone) {
        sequelize.query("INSERT INTO children(date_added,child_Name,guardian_Name,email,phone) VALUES(curdate(),?,?,?,?)", { replacements: [childName, guardianName, email, phone] }, { type: sequelize.QueryTypes.INSERT })
            .then(result => {
                console.log("Child Added")
            })
    },
    list: function () {
        sequelize.query("Select * FROM children", { type: sequelize.QueryTypes.SELECT })
            .then(children => {
                console.log("List of children: \n" + JSON.stringify(children))
                return JSON.stringify(children)
            })
    },
    listRecords: function () {
        sequelize.query("Select * FROM timesheet", { type: sequelize.QueryTypes.SELECT })
            .then(records => {
                console.log("The Records: \n" + JSON.stringify(records))
                return JSON.stringify(records)
            })
    },
    retrieve: function (childName) {
        sequelize.query("SELECT child_Name, guardian_Name,email,phone FROM children WHERE child_Name = ?", { replacements: [childName] }, { type: sequelize.QueryTypes.RAW })
            .then(result => {
                console.log("Child Info \n" + JSON.stringify(result[0]))
            })
    },
    deleted: function (childName) {
        sequelize.query("DELETE FROM children WHERE child_Name = '?'", { replacements: { childName } }, { type: sequelize.QueryTypes.DELETE })
            .then(child => {
                console.log("Child Deleted")
            })
    },
    clock_in: function (childName, guardianName) {
        sequelize.query("INSERT INTO timesheet(date_today,child_Name,guardian_Name,clock_in) VALUES(curdate(),?,?,curTime())", { replacements: [childName, guardianName] }, { type: sequelize.QueryTypes.INSERT })
            .then(result => {
                console.log("Done updating timesheet")
            })
    },
    clock_out: function (childName) {
        sequelize.query("UPDATE timesheet SET clock_out = curtime() WHERE child_Name = ?", { replacements: [childName] }, { type: sequelize.QueryTypes.UPDATE })
            .then(result => {
                console.log("Done updating timesheet")
            })
    }
};

module.exports = Orm;

