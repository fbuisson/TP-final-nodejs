import { hashPassword } from "../../src/utils/password";
import { describe, expect, test } from "@jest/globals";

describe("Vérification des mots de passe", () => {
  test("Le mot de passe doit être défini", () => {
    expect(hashPassword).toBeDefined();
  });

  test("Le mot de passe doit être sécurisé", async () => {
    const password = "Test123456";
    const hash = await hashPassword(password);

    expect(hash).toBeDefined();
    expect(hash).toContain("$argon2id$v=");
  });
});
