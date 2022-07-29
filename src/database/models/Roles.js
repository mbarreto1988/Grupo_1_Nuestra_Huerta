module.exports = function(sequelize, dataTypes) {
    let alias = "Role";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        rol_category: {
            type: dataTypes.STRING
        }        
    }

    let config = {
        tableName: "rols",
        timestamps: false
    }

    let Role = sequelize.define(alias, cols, config);

    Role.associate = function(models) {
        Role.hasMany(models.User, {
            as: "users",
            foreignKey: "id"
        });
    }


    return Role;
}

// hasMany (tiene muchas) de uno a muchos
// belongsToMany (pertenece a muchos) de muchos a muchos
// belongsTo (pertenece a) de muchos a uno