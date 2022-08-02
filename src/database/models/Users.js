module.exports = function(sequelize, dataTypes) {
    let alias = "User";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        first_name: {
            type: dataTypes.STRING
        },
        last_name: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        image: {
            type: dataTypes.STRING
        },
        rol_id: {
            type: dataTypes.STRING
        }
        // ,
        // aunthenticated: {
        //     type: dataTypes.INTEGER
        // }
    }

    let config = {
        tableName: "users",
        timestamps: false
    }

    let User = sequelize.define(alias, cols, config);

    User.associate = function(models) {
        User.belongsTo(models.Role, {
            as: "roles",
            foreignKey: "rol_id"
        });
        User.hasMany(models.Cart, {
            as: "carts",
            foreignKey: "id"
        });
    }


    return User;
}

// hasMany (tiene muchas) de uno a muchos
// belongsToMany (pertenece a muchos) de muchos a muchos
// belongsTo (pertenece a) de muchos a uno