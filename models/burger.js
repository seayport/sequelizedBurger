
'use strict';

module.exports = function(sequelize, DataTypes) {

    var sequelburgers = sequelize.define("sequelburgers", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    return sequelburgers;
};