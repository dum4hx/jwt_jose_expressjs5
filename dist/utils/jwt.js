import { SignJWT, generateKeyPair, jwtVerify } from "jose";
// Generate asymmetric keys
const { publicKey, privateKey } = await generateKeyPair("EdDSA");
// Sign
const jws = await new SignJWT()
    .setProtectedHeader({ alg: "EdDSA" })
    .setIssuer("my-api")
    .setAudience("my-web-app")
    .setSubject("pepito")
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(privateKey);
// Verify signature
console.log(jws);
//# sourceMappingURL=jwt.js.map