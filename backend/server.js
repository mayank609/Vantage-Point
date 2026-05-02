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

app.use(cors());
app.use(express.json());

// ── helpers ──────────────────────────────────────────────────────────────────
const dataPath = (name) => path.join(__dirname, "data", `${name}.json`);

function readData(name) {
  try {
    return JSON.parse(fs.readFileSync(dataPath(name), "utf8"));
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

app.listen(PORT, () => console.log(`Vantage API running on http://localhost:${PORT}`));
