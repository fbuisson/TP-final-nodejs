import argon2 from "argon2";

export async function hashPassword(password: string): Promise<string | void> {
  try {
    const hash = await argon2.hash(password, {
      type: argon2.argon2id,

      memoryCost: 2 ** 16,
      timeCost: 3,
      parallelism: 1,
      salt: Buffer.from("SuperSaltGentil"),
    });
    return hash;
  } catch (err) {
    console.error("Erreur de hashage: ", err);
  }
}

export async function verifyPassword(
  hashedPassword: string,
  inputPassword: string
): Promise<boolean> {
  try {
    return await argon2.verify(hashedPassword, inputPassword);
  } catch (err) {
    console.error("Erreur lors de la vérification: ", err);
    return false;
  }
}
