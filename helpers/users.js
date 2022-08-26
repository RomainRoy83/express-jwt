const jwt = require("jsonwebtoken");

const PRIVATE_KEY = "superSecretStringNowoneShouldKnowOrTheyCanGenerateTokens";

const calculateToken = (userEmail = "", user_id = "") => {
  const pass = jwt.sign({ email: userEmail, userId: user_id }, PRIVATE_KEY);
  console.log(pass);
  return pass;
};

const decodeToken = (token) => {
  const decoded = jwt.decode(token);
  console.log(decoded);
  return decoded;
};

module.exports = { calculateToken, decodeToken };
