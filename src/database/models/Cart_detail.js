module.exports = function(sequelize, dataTypes) {
    let alias = "Cart_detail";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        quantity: {
            type: dataTypes.INTEGER
        },
        product_id: {
            type: dataTypes.INTEGER
        },
        cart_id: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tableName: "cart_details",
        timestamps: false
    }

    let Cart_detail = sequelize.define(alias, cols, config);

    Cart_detail.associate = function(models) {
        Cart_detail.belongsTo(models.Cart, {
            as: "carts",
            foreignKey: "id"
        });
        Cart_detail.belongsTo(models.Product, {
            as: "products",
            foreignKey: "id"
        });
    }


    return Cart_detail;
}

// hasMany (tiene muchas) de uno a muchos
// belongsToMany (pertenece a muchos) de muchos a muchos
// belongsTo (pertenece a) de muchos a uno