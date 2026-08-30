import { describe, it, expect } from "vitest";

describe("CI failure demonstration", () => {
  it("should fail intentionally", () => {
    expect(true).toBe(false);
  });
});