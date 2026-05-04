const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "vpc@admin2024";
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || "vpc-admin-token-2024-secret";
const MONGODB_URI = process.env.MONGODB_URI;

// ── security middleware ───────────────────────────────────────────────────────
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" },
  contentSecurityPolicy: false,
}));
app.use(cors());
app.use(express.json({ limit: "1mb" }));

// ── rate limiting ─────────────────────────────────────────────────────────────
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 300,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many requests, please try again later." },
});

const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many contact submissions. Please try again later." },
});

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many login attempts. Please try again later." },
});

app.use("/api", globalLimiter);

// ── request logger ────────────────────────────────────────────────────────────
app.use((req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    console.log(`${req.method} ${req.originalUrl} ${res.statusCode} - ${Date.now() - start}ms`);
  });
  next();
});

// ── mongoose schemas ──────────────────────────────────────────────────────────
const jsonOpts = {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (_, ret) => {
      ret.id = ret._id.toString();
      ret.createdAt = ret.createdAt ? ret.createdAt.toISOString() : undefined;
      delete ret._id;
      delete ret.__v;
      delete ret.updatedAt;
      return ret;
    },
  },
};

const JobSchema = new mongoose.Schema({ title: { type: String, required: true }, department: { type: String, default: "" }, location: { type: String, default: "" }, type: { type: String, default: "Full-Time" }, description: { type: String, default: "" }, requirements: { type: String, default: "" }, active: { type: Boolean, default: true } }, jsonOpts);
const TestimonialSchema = new mongoose.Schema({ quote: { type: String, default: "" }, name: { type: String, default: "" }, title: { type: String, default: "" }, metric: { type: String, default: "" }, metricLabel: { type: String, default: "" }, active: { type: Boolean, default: true } }, jsonOpts);
const ContactSchema = new mongoose.Schema({ firstName: { type: String, default: "" }, lastName: { type: String, default: "" }, email: { type: String, default: "" }, phone: { type: String, default: "" }, company: { type: String, default: "" }, service: { type: String, default: "" }, message: { type: String, default: "" }, read: { type: Boolean, default: false } }, jsonOpts);
const ServiceSchema = new mongoose.Schema({ name: { type: String, default: "" }, category: { type: String, default: "" }, description: { type: String, default: "" }, active: { type: Boolean, default: true } }, jsonOpts);
const AchievementSchema = new mongoose.Schema({ title: { type: String, default: "" }, value: { type: String, default: "" }, description: { type: String, default: "" }, active: { type: Boolean, default: true } }, jsonOpts);
const TeamMemberSchema = new mongoose.Schema({ name: { type: String, default: "" }, title: { type: String, default: "" }, initials: { type: String, default: "" }, bio: { type: String, default: "" }, active: { type: Boolean, default: true } }, jsonOpts);

const Job = mongoose.model("Job", JobSchema);
const Testimonial = mongoose.model("Testimonial", TestimonialSchema);
const Contact = mongoose.model("Contact", ContactSchema);
const Service = mongoose.model("Service", ServiceSchema);
const Achievement = mongoose.model("Achievement", AchievementSchema);
const TeamMember = mongoose.model("TeamMember", TeamMemberSchema);

// ── mongodb connection (cached for serverless) ────────────────────────────────
let _connected = false;

async function connectDB() {
  if (_connected && mongoose.connection.readyState === 1) return;
  await mongoose.connect(MONGODB_URI, { serverSelectionTimeoutMS: 10000, maxPoolSize: 10 });
  _connected = true;
}

app.use(async (req, res, next) => {
  if (!MONGODB_URI) return res.status(500).json({ error: "MONGODB_URI not configured" });
  try {
    await connectDB();
    next();
  } catch (err) {
    console.error("DB error:", err.message);
    res.status(503).json({ error: "Database unavailable" });
  }
});

// ── auth middleware ────────────────────────────────────────────────────────────
function authMiddleware(req, res, next) {
  const token = (req.headers.authorization || "").replace("Bearer ", "").trim();
  if (token !== ADMIN_TOKEN) return res.status(401).json({ error: "Unauthorized" });
  next();
}

// ── seed data ─────────────────────────────────────────────────────────────────
async function seedIfEmpty() {
  if ((await Achievement.countDocuments()) === 0) {
    await Achievement.insertMany([
      { title: "Clients Served", value: "500+", description: "Enterprise clients across the United States trust Vantage Point for their IT solutions.", active: true },
      { title: "Years of Experience", value: "15+", description: "Over 15 years of combined expertise in Oracle, Workday, and cloud solutions.", active: true },
      { title: "Projects Delivered", value: "1,200+", description: "Successfully delivered enterprise integration and migration projects on time.", active: true },
      { title: "Industries Served", value: "11+", description: "Serving clients across Fintech, Healthcare, Legal, Insurance, Media, and more.", active: true },
    ]);
  }
  if ((await TeamMember.countDocuments()) === 0) {
    await TeamMember.insertMany([
      { name: "Krish Subbiah", title: "CEO and Partner", initials: "KS", bio: "Leads Vantage Point Consulting's vision and strategic direction as CEO and Partner, driving growth across professional services, cloud, and enterprise IT solutions.", active: true },
      { name: "Lalit Mohan", title: "Head of Talent & Delivery", initials: "LM", bio: "Oversees the delivery division, ensuring clients receive top-tier technical expertise across all practice areas, including Oracle and Workday implementations.", active: true },
    ]);
  }
  if ((await Testimonial.countDocuments()) === 0) {
    await Testimonial.insertMany([
      { quote: "Outstanding work in providing AI, Workday, and ServiceNow solutions. The team's expertise and professionalism exceeded our expectations.", name: "Sr. Director", title: "Healthcare Insurance Company", metric: "48 hrs", metricLabel: "to first shortlist", active: true },
      { quote: "Anthony and his team consistently deliver exceptional enterprise solutions with a sense of urgency. Highly recommended for any complex integration.", name: "Partner", title: "Boston Consulting Group", metric: "40%", metricLabel: "reduction in time-to-hire", active: true },
    ]);
  }
  if ((await Service.countDocuments()) === 0) {
    await Service.insertMany([
      { name: "Talent Acquisition", category: "Staffing", description: "End-to-end recruiting for enterprise IT roles across the United States.", active: true },
      { name: "Oracle Implementations", category: "Technology", description: "Full-cycle Oracle ERP and HCM implementation, configuration, and support.", active: true },
      { name: "Workday Implementations", category: "Technology", description: "Workday HCM, Payroll, and Financials deployment and optimization.", active: true },
      { name: "Cloud Migration", category: "Technology", description: "Migrate on-premises workloads to AWS, Azure, and GCP with zero downtime.", active: true },
    ]);
  }
}

// ── health ────────────────────────────────────────────────────────────────────
app.get("/api/health", (req, res) =>
  res.json({ status: "ok", uptime: process.uptime(), db: mongoose.connection.readyState === 1 ? "connected" : "disconnected" })
);

// ── stats ─────────────────────────────────────────────────────────────────────
app.get("/api/stats", authMiddleware, async (req, res) => {
  try {
    const [tj, aj, tt, tc, uc, ts, as_, ta, aa, tteam, ateam] = await Promise.all([
      Job.countDocuments(), Job.countDocuments({ active: true }),
      Testimonial.countDocuments(),
      Contact.countDocuments(), Contact.countDocuments({ read: false }),
      Service.countDocuments(), Service.countDocuments({ active: true }),
      Achievement.countDocuments(), Achievement.countDocuments({ active: true }),
      TeamMember.countDocuments(), TeamMember.countDocuments({ active: true }),
    ]);
    res.json({
      jobs: { total: tj, active: aj },
      testimonials: { total: tt },
      contacts: { total: tc, unread: uc },
      services: { total: ts, active: as_ },
      achievements: { total: ta, active: aa },
      team: { total: tteam, active: ateam },
    });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ── auth ──────────────────────────────────────────────────────────────────────
app.post("/api/auth/login", authLimiter, (req, res) => {
  const { password } = req.body;
  if (password !== ADMIN_PASSWORD) return res.status(401).json({ error: "Invalid password" });
  res.json({ token: ADMIN_TOKEN });
});

// ── jobs ──────────────────────────────────────────────────────────────────────
app.get("/api/jobs", async (req, res) => {
  try { res.json(await Job.find().sort({ createdAt: -1 })); }
  catch (err) { res.status(500).json({ error: err.message }); }
});
app.post("/api/jobs", authMiddleware, async (req, res) => {
  try { res.status(201).json(await Job.create(req.body)); }
  catch (err) { res.status(400).json({ error: err.message }); }
});
app.put("/api/jobs/:id", authMiddleware, async (req, res) => {
  try {
    const doc = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!doc) return res.status(404).json({ error: "Not found" });
    res.json(doc);
  } catch (err) { res.status(400).json({ error: err.message }); }
});
app.delete("/api/jobs/:id", authMiddleware, async (req, res) => {
  try {
    const doc = await Job.findByIdAndDelete(req.params.id);
    if (!doc) return res.status(404).json({ error: "Not found" });
    res.json({ success: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ── testimonials ──────────────────────────────────────────────────────────────
app.get("/api/testimonials", async (req, res) => {
  try { res.json(await Testimonial.find().sort({ createdAt: -1 })); }
  catch (err) { res.status(500).json({ error: err.message }); }
});
app.post("/api/testimonials", authMiddleware, async (req, res) => {
  try { res.status(201).json(await Testimonial.create(req.body)); }
  catch (err) { res.status(400).json({ error: err.message }); }
});
app.put("/api/testimonials/:id", authMiddleware, async (req, res) => {
  try {
    const doc = await Testimonial.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!doc) return res.status(404).json({ error: "Not found" });
    res.json(doc);
  } catch (err) { res.status(400).json({ error: err.message }); }
});
app.delete("/api/testimonials/:id", authMiddleware, async (req, res) => {
  try {
    const doc = await Testimonial.findByIdAndDelete(req.params.id);
    if (!doc) return res.status(404).json({ error: "Not found" });
    res.json({ success: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ── contacts ──────────────────────────────────────────────────────────────────
app.get("/api/contacts", authMiddleware, async (req, res) => {
  try { res.json(await Contact.find().sort({ createdAt: -1 })); }
  catch (err) { res.status(500).json({ error: err.message }); }
});
app.post("/api/contacts", contactLimiter, async (req, res) => {
  try { res.status(201).json(await Contact.create({ ...req.body, read: false })); }
  catch (err) { res.status(400).json({ error: err.message }); }
});
app.patch("/api/contacts/:id", authMiddleware, async (req, res) => {
  try {
    const doc = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!doc) return res.status(404).json({ error: "Not found" });
    res.json(doc);
  } catch (err) { res.status(400).json({ error: err.message }); }
});
app.delete("/api/contacts/:id", authMiddleware, async (req, res) => {
  try {
    const doc = await Contact.findByIdAndDelete(req.params.id);
    if (!doc) return res.status(404).json({ error: "Not found" });
    res.json({ success: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ── services ──────────────────────────────────────────────────────────────────
app.get("/api/services", async (req, res) => {
  try { res.json(await Service.find().sort({ createdAt: -1 })); }
  catch (err) { res.status(500).json({ error: err.message }); }
});
app.post("/api/services", authMiddleware, async (req, res) => {
  try { res.status(201).json(await Service.create(req.body)); }
  catch (err) { res.status(400).json({ error: err.message }); }
});
app.put("/api/services/:id", authMiddleware, async (req, res) => {
  try {
    const doc = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!doc) return res.status(404).json({ error: "Not found" });
    res.json(doc);
  } catch (err) { res.status(400).json({ error: err.message }); }
});
app.delete("/api/services/:id", authMiddleware, async (req, res) => {
  try {
    const doc = await Service.findByIdAndDelete(req.params.id);
    if (!doc) return res.status(404).json({ error: "Not found" });
    res.json({ success: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ── achievements ──────────────────────────────────────────────────────────────
app.get("/api/achievements", async (req, res) => {
  try { res.json(await Achievement.find().sort({ createdAt: -1 })); }
  catch (err) { res.status(500).json({ error: err.message }); }
});
app.post("/api/achievements", authMiddleware, async (req, res) => {
  try { res.status(201).json(await Achievement.create(req.body)); }
  catch (err) { res.status(400).json({ error: err.message }); }
});
app.put("/api/achievements/:id", authMiddleware, async (req, res) => {
  try {
    const doc = await Achievement.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!doc) return res.status(404).json({ error: "Not found" });
    res.json(doc);
  } catch (err) { res.status(400).json({ error: err.message }); }
});
app.delete("/api/achievements/:id", authMiddleware, async (req, res) => {
  try {
    const doc = await Achievement.findByIdAndDelete(req.params.id);
    if (!doc) return res.status(404).json({ error: "Not found" });
    res.json({ success: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ── team ──────────────────────────────────────────────────────────────────────
app.get("/api/team", async (req, res) => {
  try { res.json(await TeamMember.find().sort({ createdAt: 1 })); }
  catch (err) { res.status(500).json({ error: err.message }); }
});
app.post("/api/team", authMiddleware, async (req, res) => {
  try { res.status(201).json(await TeamMember.create(req.body)); }
  catch (err) { res.status(400).json({ error: err.message }); }
});
app.put("/api/team/:id", authMiddleware, async (req, res) => {
  try {
    const doc = await TeamMember.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!doc) return res.status(404).json({ error: "Not found" });
    res.json(doc);
  } catch (err) { res.status(400).json({ error: err.message }); }
});
app.delete("/api/team/:id", authMiddleware, async (req, res) => {
  try {
    const doc = await TeamMember.findByIdAndDelete(req.params.id);
    if (!doc) return res.status(404).json({ error: "Not found" });
    res.json({ success: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ── jobdiva proxy (avoids CORS proxy on the frontend) ────────────────────────
app.get("/api/jobs/feed", async (req, res) => {
  const FEED_URL =
    "https://www1.jobdiva.com/candidates/myjobs/getportaljobs.jsp?a=cijdnwq7sln7blp85ftqmzs8m5n2cp09a3b4hy73yc8p2wtdywnhut9bd2zh20pn&jobdescription=0&noofjobs=24";
  try {
    const response = await fetch(FEED_URL, {
      headers: { "User-Agent": "VantagePoint/1.0" },
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) throw new Error(`JobDiva returned ${response.status}`);
    const xml = await response.text();
    res.set("Content-Type", "application/xml");
    res.set("Cache-Control", "public, max-age=300");
    res.send(xml);
  } catch (err) {
    res.status(502).json({ error: "Unable to fetch jobs feed", detail: err.message });
  }
});

// ── production static (standalone deploy without Vercel) ─────────────────────
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
app.use((err, req, res, _next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal server error" });
});

// ── export for Vercel serverless; listen for local dev ───────────────────────
module.exports = app;

if (require.main === module) {
  if (!MONGODB_URI) { console.error("❌ MONGODB_URI not set"); process.exit(1); }
  (async () => {
    await connectDB();
    console.log("✅ MongoDB connected");
    await seedIfEmpty();
    app.listen(PORT, () => {
      console.log(`\n🚀 Vantage API  →  http://localhost:${PORT}`);
      console.log(`🔧 Mode: ${process.env.NODE_ENV || "development"}\n`);
    });
  })().catch(err => { console.error("❌ Startup failed:", err.message); process.exit(1); });
}
