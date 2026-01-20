import { generateKeyPair, EncryptJWT, compactVerify, jwtDecrypt } from "jose";

const KEY_PAIR_ALG = process.env.JWT_ALG || "RSA-OAEP-256";
const CONTENT_ENCRYPT_ALG = process.env.JWT_ENC || "A256GCM";

// Generate asymmetric keys
const { privateKey, publicKey } = await generateKeyPair(KEY_PAIR_ALG, {
  modulusLength: 2048,
  extractable: true,
});

// Encode claims into Utf8
const claims = {
  name: "Santiago",
  age: 18,
  gender: 1,
};

// Encryption
const jwe = await new EncryptJWT(claims)
  .setProtectedHeader({
    alg: KEY_PAIR_ALG,
    enc: CONTENT_ENCRYPT_ALG,
  })
  .setIssuedAt()
  .setIssuer(process.env.JWT_ISSUER || "my-api")
  .setExpirationTime("1h")
  .encrypt(publicKey);

// Decrypt
const { payload, protectedHeader } = await jwtDecrypt(jwe, privateKey);

console.log(payload);
console.log(protectedHeader);
