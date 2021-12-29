module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  API_BASE_URL: process.env.REACT_APP_API_BASE_URL ||
  "http://localhost:3000/api",
  DATABASE_URL: process.env.DATABASE_URL || 'postgresql://dunder_mifflin@localhost/imbibe',
  TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'postgresql://dunder_mifflin@localhost/imbibe-test',
  JWT_SECRET: process.env.JWT_SECRET || 'change-this-secret',
  RAPIDAPI_KEY: process.env.RAPIDAPI_KEY,
  CLIENT_ORIGIN: process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://imbibe.vercel.app"
}