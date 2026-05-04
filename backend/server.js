const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "vpc@admin2024";
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || "vpc-admin-token-2024-secret";
const MONGODB_URI = process.env.MONGODB_URI;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    console.log(`${req.method} ${req.originalUrl} ${res.statusCode} - ${Date.now() - start}ms`);
  });
  next();
});

// ── schemas ───────────────────────────────────────────────────────────────────
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

const JobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  department: { type: String, default: "" },
  location: { type: String, default: "" },
  type: { type: String, default: "Full-Time" },
  description: { type: String, default: "" },
  requirements: { type: String, default: "" },
  active: { type: Boolean, default: true },
}, jsonOpts);

const TestimonialSchema = new mongoose.Schema({
  quote: { type: String, default: "" },
  name: { type: String, default: "" },
  title: { type: String, default: "" },
  metric: { type: String, default: "" },
  metricLabel: { type: String, default: "" },
  active: { type: Boolean, default: true },
}, jsonOpts);

const ContactSchema = new mongoose.Schema({
  firstName: { type: String, default: "" },
  lastName: { type: String, default: "" },
  email: { type: String, default: "" },
  phone: { type: String, default: "" },
  company: { type: String, default: "" },
  service: { type: String, default: "" },
  message: { type: String, default: "" },
  read: { type: Boolean, default: false },
}, jsonOpts);

const ServiceSchema = new mongoose.Schema({
  name: { type: String, default: "" },
  category: { type: String, default: "" },
  description: { type: String, default: "" },
  active: { type: Boolean, default: true },
}, jsonOpts);

const AchievementSchema = new mongoose.Schema({
  title: { type: String, default: "" },
  value: { type: String, default: "" },
  description: { type: String, default: "" },
  active: { type: Boolean, default: true },
}, jsonOpts);

const TeamMemberSchema = new mongoose.Schema({
  name: { type: String, default: "" },
  title: { type: String, default: "" },
  initials: { type: String, default: "" },
  bio: { type: String, default: "" },
  active: { type: Boolean, default: true },
}, jsonOpts);

const Job = mongoose.model("Job", JobSchema);
const Testimonial = mongoose.model("Testimonial", TestimonialSchema);
const Contact = mongoose.model("Contact", ContactSchema);
const Service = mongoose.model("Service", ServiceSchema);
const Achievement = mongoose.model("Achievement", AchievementSchema);
const TeamMember = mongoose.model("TeamMember", TeamMemberSchema);

// ── auth middleware ────────────────────────────────────────────────────────────
function authMiddleware(req, res, next) {
  const token = (req.headers.authorization || "").replace("Bearer ", "").trim();
  if (token !== ADMIN_TOKEN) return res.status(401).json({ error: "Unauthorized" });
  next();
}

// ── seed initial data if collections are empty ────────────────────────────────
async function seedIfEmpty() {
  if ((await Achievement.countDocuments()) === 0) {
    await Achievement.insertMany([
      { title: "Clients Served", value: "500+", description: "Enterprise clients across the United States trust Vantage Point for their IT solutions.", active: true },
      { title: "Years of Experience", value: "15+", description: "Over 15 years of combined expertise in Oracle, Workday, and cloud solutions.", active: true },
      { title: "Projects Delivered", value: "1,200+", description: "Successfully delivered enterprise integration and migration projects on time.", active: true },
      { title: "Industries Served", value: "11+", description: "Serving clients across Fintech, Healthcare, Legal, Insurance, Media, and more.", active: true },
    ]);
    console.log("✅ Seeded achievements");
  }

  if ((await TeamMember.countDocuments()) === 0) {
    await TeamMember.insertMany([
      { name: "Krish Subbiah", title: "CEO and Partner", initials: "KS", bio: "Leads Vantage Point Consulting's vision and strategic direction as CEO and Partner, driving growth across professional services, cloud, and enterprise IT solutions.", active: true },
      { name: "Lalit Mohan", title: "Head of Talent & Delivery", initials: "LM", bio: "Oversees the delivery division, ensuring clients receive top-tier technical expertise across all practice areas, including Oracle and Workday implementations.", active: true },
    ]);
    console.log("✅ Seeded team members");
  }

  if ((await Testimonial.countDocuments()) === 0) {
    await Testimonial.insertMany([
      { quote: "Outstanding work in providing AI, Workday, and ServiceNow solutions. The team's expertise and professionalism exceeded our expectations.", name: "Sr. Director", title: "Healthcare Insurance Company", metric: "48 hrs", metricLabel: "to first shortlist", active: true },
      { quote: "Anthony and his team consistently deliver exceptional enterprise solutions with a sense of urgency. Highly recommended for any complex integration.", name: "Partner", title: "Boston Consulting Group", metric: "40%", metricLabel: "reduction in time-to-hire", active: true },
    ]);
    console.log("✅ Seeded testimonials");
  }

  if ((await Service.countDocuments()) === 0) {
    await Service.insertMany([
      { name: "Talent Acquisition", category: "Staffing", description: "End-to-end recruiting for enterprise IT roles across the United States.", active: true },
      { name: "Oracle Implementations", category: "Technology", description: "Full-cycle Oracle ERP and HCM implementation, configuration, and support.", active: true },
      { name: "Workday Implementations", category: "Technology", description: "Workday HCM, Payroll, and Financials deployment and optimization.", active: true },
      { name: "Cloud Migration", category: "Technology", description: "Migrate on-premises workloads to AWS, Azure, and GCP with zero downtime.", active: true },
    ]);
    console.log("✅ Seeded services");
  }
}

// ── health ────────────────────────────────────────────────────────────────────
app.get("/api/health", (req, res) =>
  res.json({
    status: "ok",
    uptime: process.uptime(),
    db: mongoose.connection.readyState === 1 ? "connected" : "disconnected",
  })
);

// ── stats ─────────────────────────────────────────────────────────────────────
app.get("/api/stats", authMiddleware, async (req, res) => {
  try {
    const [totalJobs, activeJobs, totalTestimonials, totalContacts, unreadContacts,
           totalServices, activeServices, totalAchievements, activeAchievements,
           totalTeam, activeTeam] = await Promise.all([
      Job.countDocuments(),
      Job.countDocuments({ active: true }),
      Testimonial.countDocuments(),
      Contact.countDocuments(),
      Contact.countDocuments({ read: false }),
      Service.countDocuments(),
      Service.countDocuments({ active: true }),
      Achievement.countDocuments(),
      Achievement.countDocuments({ active: true }),
      TeamMember.countDocuments(),
      TeamMember.countDocuments({ active: true }),
    ]);
    res.json({
      jobs: { total: totalJobs, active: activeJobs },
      testimonials: { total: totalTestimonials },
      contacts: { total: totalContacts, unread: unreadContacts },
      services: { total: totalServices, active: activeServices },
      achievements: { total: totalAchievements, active: activeAchievements },
      team: { total: totalTeam, active: activeTeam },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ── auth ──────────────────────────────────────────────────────────────────────
app.post("/api/auth/login", (req, res) => {
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

app.post("/api/contacts", async (req, res) => {
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

// ── production static ─────────────────────────────────────────────────────────
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

// ── connect and start ─────────────────────────────────────────────────────────
async function start() {
  if (!MONGODB_URI) {
    console.error("❌ MONGODB_URI is not set. Add it to your .env file.");
    process.exit(1);
  }
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("✅ MongoDB connected");
    await seedIfEmpty();
    app.listen(PORT, () => {
      console.log(`\n🚀 Vantage API running on http://localhost:${PORT}`);
      console.log(`🔧 Mode: ${process.env.NODE_ENV || "development"}\n`);
    });
  } catch (err) {
    console.error("❌ Startup failed:", err.message);
    process.exit(1);
  }
}

start();
