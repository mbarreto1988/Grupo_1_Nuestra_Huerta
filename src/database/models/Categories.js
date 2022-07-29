module.exports = function(sequelize, dataTypes) {
    let alias = "Category";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        name: {
            type: dataTypes.STRING
        }        
    }

    let config = {
        tableName: "categories",
        timestamps: false
    }

    let Category = sequelize.define(alias, cols, config);

    Category.associate = function(models) {
        Category.hasMany(models.Product, {
            as: "products",
            foreignKey: "id"
        });
    }


    return Category;
}

// hasMany (tiene muchas) de uno a muchos
// belongsToMany (pertenece a muchos) de muchos a muchos
// belongsTo (pertenece a) de muchos a uno