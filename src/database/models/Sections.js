module.exports = function(sequelize, dataTypes) {
    let alias = "Section";

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
        tableName: "sections",
        timestamps: false
    }

    let Section = sequelize.define(alias, cols, config);

    Section.associate = function(models) {
        Section.hasMany(models.Product, {
            as: "products",
            foreignKey: "id"
        });
    }


    return Section;
}

// hasMany (tiene muchas) de uno a muchos
// belongsToMany (pertenece a muchos) de muchos a muchos
// belongsTo (pertenece a) de muchos a uno