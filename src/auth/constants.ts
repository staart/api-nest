export const jwtConstants = {
  secret: process.env.JWT_SECRET || "secretKey",
  accessTokenExpiry: process.env.ACCESS_TOKEN_EXPIRY || "15m"
};
