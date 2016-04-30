var Sequelize = require('sequelize');

var sequelize = new Sequelize('rdfdb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});


var User = sequelize.define('user', {
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
});

var Version = sequelize.define('version', {
    desc: {
        type: Sequelize.STRING
    }
});

var Triplet = sequelize.define('triplet', {
    subject: {
        type: Sequelize.STRING,
        allowNull: false
    },
    predicate: {
        type: Sequelize.STRING,
        allowNull: false
    },
    object: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sentence: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null
    }
});

Triplet.belongsTo(Version);

var TripleGrade = sequelize.define('tripleGrade', {
    score: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {min: 0, max: 10}
    }
});

TripleGrade.belongsTo(User);
TripleGrade.belongsTo(Triplet);
TripleGrade.belongsTo(Version);

// Version.sync({force: true});
// User.sync({force: true});
// Triplet.sync({force: true});
// TripleGrade.sync({force: true});
sequelize.sync({force: true});
