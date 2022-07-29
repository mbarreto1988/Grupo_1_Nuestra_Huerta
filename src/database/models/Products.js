module.exports = function(sequelize, dataTypes) {
    let alias = "Product";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        price: {
            type: dataTypes.INTEGER
        },
        description: {
            type: dataTypes.STRING
        },
        discount: {
            type: dataTypes.INTEGER
        },
        stock: {
            type: dataTypes.INTEGER
        },
        section_id: {
            type: dataTypes.INTEGER
        },
        category_id: {
            type: dataTypes.INTEGER
        },
        image: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: "products",
        timestamps: false
    }

    let Product = sequelize.define(alias, cols, config);

    Product.associate = function(models) {
        Product.hasMany(models.Cart_detail, {
            as: "carts_detail",
            foreignKey: "id"
        });
        Product.belongsTo(models.Category, {
            as: "categories",
            foreignKey: "id"
        });
        Product.belongsTo(models.Section, {
            as: "sections",
            foreignKey: "id"
        });
    }


    return Product;
}

// hasMany (tiene muchas) de uno a muchos
// belongsToMany (pertenece a muchos) de muchos a muchos
// belongsTo (pertenece a) de muchos a uno