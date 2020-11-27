module.exports = {
  production: {
    username: 'bdEsports',
    password: '#Gf47240958817',
    database: 'bdEsports',
    host: 'bdesports.database.windows.net',
    dialect: 'mssql',
    xuse_env_variable: 'DATABASE_URL',
    dialectOptions: {
      options: {
        encrypt: true
      }
    },
    pool: { 
      max: 5,
      min: 1,
      acquire: 5000,
      idle: 30000,
      connectTimeout: 5000
    }
  }
};
 
