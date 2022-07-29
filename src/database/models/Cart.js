module.exports = function(sequelize, dataTypes) {
    let alias = "Cart";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        user_id: {
            type: dataTypes.INTEGER
        }        
    }

    let config = {
        tableName: "cart",
        timestamps: false
    }

    let Cart = sequelize.define(alias, cols, config);

    Cart.associate = function(models) {
        Cart.hasMany(models.Cart_detail, {
            as: "carts",
            foreignKey: "id"
        });
        Cart.belongsTo(models.User, {
            as: "users",
            foreignKey: "id"
        });
    }


    return Cart;
}

// hasMany (tiene muchas) de uno a muchos
// belongsToMany (pertenece a muchos) de muchos a muchos
// belongsTo (pertenece a) de muchos a uno