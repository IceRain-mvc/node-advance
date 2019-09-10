exports.keys = '1703D';


exports.mysql = {
    // database configuration
    client: {
      // host
      host: 'localhost',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: 'root',
      // database
      database: '1703d',    
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
};

//csrf 配置
exports.security = {
    csrf: {
        enable: false,
    }
};