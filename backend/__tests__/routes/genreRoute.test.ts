import request from "supertest";
import app from "../../src/server";

import { describe, expect, test } from "@jest/globals";

describe("API des genres", () => {
  test("retourne la liste des genres", async () => {
    const response = await request(app).get("/genres");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body.data)).toBe(true);
  });
});
