import { SignJWT, generateKeyPair, jwtVerify } from "jose";

// Generate asymmetric keys
const { publicKey, privateKey } = await generateKeyPair("EdDSA");

// Sign
const jws = await new SignJWT({ age: 20 })
  .setProtectedHeader({ alg: "EdDSA", name: "sdfasdfas" })
  .setIssuer("my-api")
  .setAudience("my-web-app")
  .setSubject("pepito")
  .setIssuedAt()
  .setExpirationTime("1h")
  .sign(privateKey);

const { payload, protectedHeader } = await jwtVerify(jws, publicKey, {
  issuer: "my-api",
  requiredClaims: ["age"],
});

// Verify signature
console.log(jws);
console.log(payload);
console.log(protectedHeader);
