module.exports = function(sequelize, dataTypes) {
    let alias = "Ticket";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        payment_method: {
            type: dataTypes.STRING
        },
        payment_type: {
            type: dataTypes.STRING
        },
        cart_id: {
            type: dataTypes.INTEGER
        },
        total: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tableName: "tickets",
        timestamps: false
    }

    let Ticket = sequelize.define(alias, cols, config);


    return Ticket;
}

//se relaciona directamente Cart_detail.belongsTo(models.Cart porque el cart_id esta en cart_detail 

// hasMany (tiene muchas) de uno a muchos
// belongsToMany (pertenece a muchos) de muchos a muchos
// belongsTo (pertenece a) de muchos a uno