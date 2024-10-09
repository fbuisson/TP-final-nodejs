import request from "supertest";
import app from "../../src/server";

import { describe, expect, test } from "@jest/globals";

describe("API des évènements", () => {
  test("retourne la liste des évènements", async () => {
    const response = await request(app).get("/api/events");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body.data)).toBe(true);
  });
});
