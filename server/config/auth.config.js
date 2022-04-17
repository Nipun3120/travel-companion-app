const config = {
  TOKEN: {
    REFRESH_SECRET: process.env.REFRESH_SECRET,
    ACCESS_SECRET: process.env.ACCESS_SECRET,
  },
  TIME: {
    jwtExpiration: "30m", // 30 mins
    jwtRefreshExpiration: "10d", // 10 hours
  },
};

module.exports = config;
