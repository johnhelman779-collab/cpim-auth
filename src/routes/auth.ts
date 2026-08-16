import { Router } from "express";
import jwt from "jsonwebtoken";
import { users } from "../data/users";

const router = Router();
const jwtSecret = process.env.JWT_SECRET ?? "cpim-dev-secret";

router.post("/auth/login", (req, res) => {
  const { username, password } = req.body ?? {};
  if (typeof username !== "string" || typeof password !== "string") {
    res.status(400).json({ error: "username and password are required" });
    return;
  }

  const user = users.find((u) => u.username === username && u.password === password);
  if (!user) {
    res.status(401).json({ error: "Invalid credentials" });
    return;
  }

  const token = jwt.sign(
    { sub: user.id, username: user.username, role: user.role },
    jwtSecret,
    { expiresIn: "8h" }
  );

  res.json({
    token,
    user: {
      id: user.id,
      username: user.username,
      displayName: user.displayName,
      role: user.role,
    },
  });
});

router.get("/auth/validate", (req, res) => {
  const header = req.headers.authorization;
  if (!header?.startsWith("Bearer ")) {
    res.status(401).json({ valid: false, error: "Missing Bearer token" });
    return;
  }

  const token = header.slice("Bearer ".length);
  try {
    const payload = jwt.verify(token, jwtSecret) as {
      sub: string;
      username: string;
      role: string;
    };
    const user = users.find((u) => u.id === payload.sub);
    if (!user) {
      res.status(401).json({ valid: false, error: "User not found" });
      return;
    }
    res.json({
      valid: true,
      user: {
        id: user.id,
        username: user.username,
        displayName: user.displayName,
        role: user.role,
      },
    });
  } catch {
    res.status(401).json({ valid: false, error: "Invalid or expired token" });
  }
});

export default router;
