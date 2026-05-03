const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "vpc@admin2024";
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || "vpc-admin-token-2024-secret";
const NODE_ENV = process.env.NODE_ENV || "development";

app.use(cors());
app.use(express.json());

// ── simple logger ────────────────────────────────────────────────────────────
app.use((req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`);
  });
  next();
});

// ── helpers ──────────────────────────────────────────────────────────────────
const dataDir = path.join(__dirname, "data");
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);

const dataPath = (name) => path.join(dataDir, `${name}.json`);

function readData(name) {
  const p = dataPath(name);
  if (!fs.existsSync(p)) {
    fs.writeFileSync(p, JSON.stringify([], null, 2));
    return [];
  }
  try {
    const data = JSON.parse(fs.readFileSync(p, "utf8"));
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

function writeData(name, data) {
  fs.writeFileSync(dataPath(name), JSON.stringify(data, null, 2));
}

function authMiddleware(req, res, next) {
  const header = req.headers.authorization || "";
  const token = header.replace("Bearer ", "").trim();
  if (token !== ADMIN_TOKEN) return res.status(401).json({ error: "Unauthorized" });
  next();
}

// ── health ───────────────────────────────────────────────────────────────────
app.get("/api/health", (req, res) => res.json({ status: "ok", uptime: process.uptime() }));

// ── stats ────────────────────────────────────────────────────────────────────
app.get("/api/stats", authMiddleware, (req, res) => {
  const jobs = readData("jobs");
  const testimonials = readData("testimonials");
  const contacts = readData("contacts");
  const services = readData("services");

  res.json({
    jobs: { total: jobs.length, active: jobs.filter(j => j.active).length },
    testimonials: { total: testimonials.length },
    contacts: { total: contacts.length, unread: contacts.filter(c => !c.read).length },
    services: { total: services.length, active: services.filter(s => s.active).length }
  });
});

// ── auth ──────────────────────────────────────────────────────────────────────
app.post("/api/auth/login", (req, res) => {
  const { password } = req.body;
  if (password !== ADMIN_PASSWORD) return res.status(401).json({ error: "Invalid password" });
  res.json({ token: ADMIN_TOKEN });
});

// ── jobs ──────────────────────────────────────────────────────────────────────
app.get("/api/jobs", (req, res) => res.json(readData("jobs")));

app.post("/api/jobs", authMiddleware, (req, res) => {
  const jobs = readData("jobs");
  const job = { id: uuidv4(), createdAt: new Date().toISOString(), ...req.body };
  jobs.push(job);
  writeData("jobs", jobs);
  res.status(201).json(job);
});

app.put("/api/jobs/:id", authMiddleware, (req, res) => {
  const jobs = readData("jobs");
  const idx = jobs.findIndex((j) => j.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: "Not found" });
  jobs[idx] = { ...jobs[idx], ...req.body, id: req.params.id };
  writeData("jobs", jobs);
  res.json(jobs[idx]);
});

app.delete("/api/jobs/:id", authMiddleware, (req, res) => {
  const jobs = readData("jobs");
  const filtered = jobs.filter((j) => j.id !== req.params.id);
  if (filtered.length === jobs.length) return res.status(404).json({ error: "Not found" });
  writeData("jobs", filtered);
  res.json({ success: true });
});

// ── testimonials ──────────────────────────────────────────────────────────────
app.get("/api/testimonials", (req, res) => res.json(readData("testimonials")));

app.post("/api/testimonials", authMiddleware, (req, res) => {
  const items = readData("testimonials");
  const item = { id: uuidv4(), createdAt: new Date().toISOString(), ...req.body };
  items.push(item);
  writeData("testimonials", items);
  res.status(201).json(item);
});

app.put("/api/testimonials/:id", authMiddleware, (req, res) => {
  const items = readData("testimonials");
  const idx = items.findIndex((t) => t.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: "Not found" });
  items[idx] = { ...items[idx], ...req.body, id: req.params.id };
  writeData("testimonials", items);
  res.json(items[idx]);
});

app.delete("/api/testimonials/:id", authMiddleware, (req, res) => {
  const items = readData("testimonials");
  const filtered = items.filter((t) => t.id !== req.params.id);
  if (filtered.length === items.length) return res.status(404).json({ error: "Not found" });
  writeData("testimonials", filtered);
  res.json({ success: true });
});

// ── contacts ──────────────────────────────────────────────────────────────────
app.get("/api/contacts", authMiddleware, (req, res) => res.json(readData("contacts")));

app.post("/api/contacts", (req, res) => {
  const items = readData("contacts");
  const item = { id: uuidv4(), createdAt: new Date().toISOString(), read: false, ...req.body };
  items.push(item);
  writeData("contacts", items);
  res.status(201).json(item);
});

app.patch("/api/contacts/:id", authMiddleware, (req, res) => {
  const items = readData("contacts");
  const idx = items.findIndex((c) => c.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: "Not found" });
  items[idx] = { ...items[idx], ...req.body, id: req.params.id };
  writeData("contacts", items);
  res.json(items[idx]);
});

app.delete("/api/contacts/:id", authMiddleware, (req, res) => {
  const items = readData("contacts");
  const filtered = items.filter((c) => c.id !== req.params.id);
  if (filtered.length === items.length) return res.status(404).json({ error: "Not found" });
  writeData("contacts", filtered);
  res.json({ success: true });
});

// ── services ──────────────────────────────────────────────────────────────────
app.get("/api/services", (req, res) => res.json(readData("services")));

app.post("/api/services", authMiddleware, (req, res) => {
  const items = readData("services");
  const item = { id: uuidv4(), createdAt: new Date().toISOString(), ...req.body };
  items.push(item);
  writeData("services", items);
  res.status(201).json(item);
});

app.put("/api/services/:id", authMiddleware, (req, res) => {
  const items = readData("services");
  const idx = items.findIndex((s) => s.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: "Not found" });
  items[idx] = { ...items[idx], ...req.body, id: req.params.id };
  writeData("services", items);
  res.json(items[idx]);
});

app.delete("/api/services/:id", authMiddleware, (req, res) => {
  const items = readData("services");
  const filtered = items.filter((s) => s.id !== req.params.id);
  if (filtered.length === items.length) return res.status(404).json({ error: "Not found" });
  writeData("services", filtered);
  res.json({ success: true });
});

// ── production ────────────────────────────────────────────────────────────────
const frontendPath = path.join(__dirname, "../frontend/dist");
if (fs.existsSync(frontendPath)) {
  app.use(express.static(frontendPath));
  app.get("*", (req, res) => {
    if (!req.path.startsWith("/api")) {
      res.sendFile(path.join(frontendPath, "index.html"));
    } else {
      res.status(404).json({ error: "API route not found" });
    }
  });
}

// ── error handler ─────────────────────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`\n🚀 Vantage API running on http://localhost:${PORT}`);
  console.log(`🔧 Mode: ${NODE_ENV}`);
  console.log(`📂 Data directory: ${dataDir}\n`);
});
