import React, { useEffect, useState, useCallback, useRef } from "react";
import {
  LayoutDashboard, Briefcase, Star, MessageSquare, Settings,
  LogOut, Plus, Pencil, Trash2, Check, X, Eye, EyeOff,
  Users, Mail, TrendingUp, ChevronRight, AlertCircle, Loader2,
  Trophy, Award, ImageIcon, Upload,
} from "lucide-react";
import { api, Job, Testimonial, Contact, Service, Achievement, TeamMember, Stats } from "../lib/api";

function cls(...args: (string | false | undefined)[]) {
  return args.filter(Boolean).join(" ");
}

function fmt(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

// ── auth guard ────────────────────────────────────────────────────────────────
function useAuth() {
  const [authed, setAuthed] = useState(() => !!localStorage.getItem("vpc_admin_token"));
  const login = (tok: string) => { localStorage.setItem("vpc_admin_token", tok); setAuthed(true); };
  const logout = () => { localStorage.removeItem("vpc_admin_token"); setAuthed(false); };
  return { authed, login, logout };
}

// ── login screen ──────────────────────────────────────────────────────────────
function LoginScreen({ onLogin }: { onLogin: (tok: string) => void }) {
  const [pw, setPw] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const { token } = await api.login(pw);
      onLogin(token);
    } catch {
      setError("Incorrect password. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#F4F4F7] flex items-center justify-center p-4" style={{ fontFamily: "Manrope, ui-sans-serif, system-ui" }}>
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-9 w-9 rounded-xl bg-[#0E2A38] grid place-items-center">
              <span className="text-white font-bold text-sm">VP</span>
            </div>
            <span className="font-semibold text-[#0E2A38] text-lg">Vantage Point</span>
          </div>
          <h1 className="text-2xl font-semibold text-[#0E2A38] tracking-tight">Admin Panel</h1>
          <p className="text-sm text-[#0E2A38]/50 mt-1">Sign in to manage your content</p>
        </div>
        <div className="bg-white rounded-3xl border border-black/5 shadow-sm p-7">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#0E2A38]/60 uppercase tracking-wider mb-1.5">Password</label>
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  value={pw}
                  onChange={(e) => setPw(e.target.value)}
                  placeholder="Enter admin password"
                  className="w-full rounded-xl border border-black/10 bg-[#F4F4F7] px-4 py-2.5 pr-10 text-sm text-[#0E2A38] outline-none focus:border-[#0B74B0] focus:ring-2 focus:ring-[#0B74B0]/10 transition"
                  required
                />
                <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#0E2A38]/30 hover:text-[#0E2A38]/60 transition">
                  {show ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>
            {error && (
              <div className="flex items-center gap-2 text-red-600 text-xs bg-red-50 border border-red-100 rounded-xl px-3 py-2.5">
                <AlertCircle size={13} /> {error}
              </div>
            )}
            <button type="submit" disabled={loading} className="w-full h-10 rounded-xl bg-[#0B74B0] hover:bg-[#096396] text-white text-sm font-semibold transition disabled:opacity-60 flex items-center justify-center gap-2">
              {loading && <Loader2 size={14} className="animate-spin" />}
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// ── sidebar ───────────────────────────────────────────────────────────────────
const NAV = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "jobs", label: "Jobs", icon: Briefcase },
  { id: "testimonials", label: "Testimonials", icon: Star },
  { id: "contacts", label: "Queries", icon: MessageSquare },
  { id: "services", label: "Services", icon: Settings },
  { id: "achievements", label: "Achievements", icon: Trophy },
  { id: "team", label: "Team Members", icon: Award },
];

function Sidebar({ tab, setTab, onLogout }: { tab: string; setTab: (t: string) => void; onLogout: () => void }) {
  return (
    <aside className="w-56 shrink-0 bg-[#0E2A38] min-h-screen flex flex-col">
      <div className="px-5 pt-6 pb-5 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg bg-[#0B74B0] grid place-items-center">
            <span className="text-white font-bold text-xs">VP</span>
          </div>
          <div>
            <div className="text-white font-semibold text-sm leading-none">Vantage Point</div>
            <div className="text-white/40 text-[10px] mt-0.5">Admin Panel</div>
          </div>
        </div>
      </div>
      <nav className="flex-1 px-3 py-4 space-y-0.5">
        {NAV.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className={cls(
              "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition text-left",
              tab === id ? "bg-white/10 text-white" : "text-white/50 hover:bg-white/5 hover:text-white/80"
            )}
          >
            <Icon size={16} />
            {label}
            {tab === id && <ChevronRight size={12} className="ml-auto" />}
          </button>
        ))}
      </nav>
      <div className="px-3 pb-5">
        <button onClick={onLogout} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-white/40 hover:bg-white/5 hover:text-white/60 transition">
          <LogOut size={16} /> Sign Out
        </button>
      </div>
    </aside>
  );
}

// ── shared ui ─────────────────────────────────────────────────────────────────
function StatCard({ label, value, icon: Icon, color }: { label: string; value: number; icon: React.ElementType; color: string }) {
  return (
    <div className="bg-white rounded-2xl border border-black/5 shadow-sm p-5 flex items-center gap-4">
      <div className={cls("h-11 w-11 rounded-xl grid place-items-center shrink-0", color)}>
        <Icon size={20} className="text-white" />
      </div>
      <div>
        <div className="text-2xl font-semibold text-[#0E2A38]">{value}</div>
        <div className="text-xs text-[#0E2A38]/50 font-medium mt-0.5">{label}</div>
      </div>
    </div>
  );
}

function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-black/5">
          <h3 className="font-semibold text-[#0E2A38]">{title}</h3>
          <button onClick={onClose} className="text-[#0E2A38]/40 hover:text-[#0E2A38]/70 transition"><X size={18} /></button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-[#0E2A38]/50 uppercase tracking-wider mb-1.5">{label}</label>
      {children}
    </div>
  );
}

const inputCls = "w-full rounded-xl border border-black/10 bg-[#F4F4F7] px-4 py-2.5 text-sm text-[#0E2A38] outline-none focus:border-[#0B74B0] focus:ring-2 focus:ring-[#0B74B0]/10 transition";
const textareaCls = inputCls + " resize-none";

function Toggle({ value, onChange, label }: { value: boolean; onChange: (v: boolean) => void; label: string }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <div onClick={() => onChange(!value)} className={cls("h-5 w-9 rounded-full transition flex items-center px-0.5", value ? "bg-[#0B74B0]" : "bg-black/15")}>
        <div className={cls("h-4 w-4 rounded-full bg-white shadow transition-transform", value ? "translate-x-4" : "translate-x-0")} />
      </div>
      <span className="text-sm text-[#0E2A38]/70">{label}</span>
    </label>
  );
}

function ImageUpload({ value, onChange, label = "Photo" }: { value: string; onChange: (v: string) => void; label?: string }) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 3 * 1024 * 1024) { alert("Image must be under 3 MB."); return; }
    const reader = new FileReader();
    reader.onload = () => onChange(reader.result as string);
    reader.readAsDataURL(file);
  }

  return (
    <div>
      <label className="block text-xs font-semibold text-[#0E2A38]/50 uppercase tracking-wider mb-2">{label}</label>
      <div className="flex items-center gap-4">
        {value ? (
          <div className="relative shrink-0">
            <img src={value} alt="Preview" className="h-20 w-20 rounded-2xl object-cover border border-black/10 shadow-sm" />
            <button
              type="button"
              onClick={() => { onChange(""); if (inputRef.current) inputRef.current.value = ""; }}
              className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-500 hover:bg-red-600 text-white grid place-items-center shadow transition"
            >
              <X size={10} />
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="h-20 w-20 rounded-2xl border-2 border-dashed border-black/15 flex flex-col items-center justify-center gap-1 cursor-pointer hover:border-[#0B74B0]/40 hover:bg-[#EBF4F9]/60 transition shrink-0"
          >
            <ImageIcon size={18} className="text-[#0E2A38]/25" />
            <span className="text-[9px] text-[#0E2A38]/30 font-semibold uppercase tracking-wide">Upload</span>
          </button>
        )}
        <div className="min-w-0">
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="inline-flex items-center gap-1.5 h-8 px-3 rounded-xl border border-black/10 text-xs font-medium text-[#0B74B0] hover:bg-[#EBF4F9] transition"
          >
            <Upload size={12} /> {value ? "Change photo" : "Choose file"}
          </button>
          <p className="text-[10px] text-[#0E2A38]/35 mt-1.5">JPG, PNG or WebP · max 3 MB</p>
        </div>
        <input ref={inputRef} type="file" accept="image/jpeg,image/png,image/webp" onChange={handleFile} className="hidden" />
      </div>
    </div>
  );
}

function SaveCancel({ onCancel, saving }: { onCancel: () => void; saving: boolean }) {
  return (
    <div className="flex gap-3 justify-end pt-2">
      <button type="button" onClick={onCancel} className="px-4 py-2 rounded-xl border border-black/10 text-sm text-[#0E2A38]/60 hover:bg-[#F4F4F7] transition">Cancel</button>
      <button type="submit" disabled={saving} className="px-4 py-2 rounded-xl bg-[#0B74B0] text-white text-sm font-medium hover:bg-[#096396] transition disabled:opacity-60 flex items-center gap-1.5">
        {saving && <Loader2 size={13} className="animate-spin" />} Save
      </button>
    </div>
  );
}

function ConfirmDelete({ label, onConfirm, onCancel }: { label: string; onConfirm: () => void; onCancel: () => void }) {
  return (
    <Modal title="Confirm Delete" onClose={onCancel}>
      <p className="text-sm text-[#0E2A38]/65 mb-6">Are you sure you want to delete <strong className="text-[#0E2A38]">{label}</strong>? This cannot be undone.</p>
      <div className="flex gap-3 justify-end">
        <button onClick={onCancel} className="px-4 py-2 rounded-xl border border-black/10 text-sm text-[#0E2A38]/70 hover:bg-[#F4F4F7] transition">Cancel</button>
        <button onClick={onConfirm} className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-medium transition">Delete</button>
      </div>
    </Modal>
  );
}

function EmptyState({ label, sub }: { label: string; sub: string }) {
  return (
    <div className="bg-white rounded-2xl border border-black/5 border-dashed p-12 text-center">
      <div className="text-[#0E2A38]/20 text-4xl mb-3">○</div>
      <div className="font-semibold text-[#0E2A38]/50 text-sm">{label}</div>
      <div className="text-xs text-[#0E2A38]/30 mt-1">{sub}</div>
    </div>
  );
}

// ── dashboard ─────────────────────────────────────────────────────────────────
function Dashboard({ jobs, testimonials, contacts, services, achievements, team }: {
  jobs: Job[]; testimonials: Testimonial[]; contacts: Contact[]; services: Service[];
  achievements: Achievement[]; team: TeamMember[];
}) {
  const unread = contacts.filter((c) => !c.read);
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-[#0E2A38] mb-1">Overview</h2>
        <p className="text-sm text-[#0E2A38]/50">Welcome back. Here's what's happening.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <StatCard label="Active Jobs" value={jobs.filter((j) => j.active).length} icon={Briefcase} color="bg-[#0B74B0]" />
        <StatCard label="Testimonials" value={testimonials.length} icon={Star} color="bg-[#75479C]" />
        <StatCard label="Unread Queries" value={unread.length} icon={Mail} color="bg-emerald-500" />
        <StatCard label="Active Services" value={services.filter((s) => s.active).length} icon={TrendingUp} color="bg-[#0E2A38]" />
        <StatCard label="Achievements" value={achievements.filter((a) => a.active).length} icon={Trophy} color="bg-amber-500" />
        <StatCard label="Team Members" value={team.filter((t) => t.active).length} icon={Award} color="bg-rose-500" />
      </div>
      {unread.length > 0 && (
        <div className="bg-white rounded-2xl border border-black/5 shadow-sm p-5">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-2 w-2 rounded-full bg-emerald-500" />
            <h3 className="font-semibold text-[#0E2A38] text-sm">Unread Queries ({unread.length})</h3>
          </div>
          <div className="space-y-3">
            {unread.slice(0, 5).map((c) => (
              <div key={c.id} className="flex items-start gap-3 p-3 rounded-xl bg-[#F4F4F7]">
                <div className="h-8 w-8 rounded-full bg-[#0B74B0]/10 grid place-items-center shrink-0">
                  <Users size={13} className="text-[#0B74B0]" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-[#0E2A38]">{c.firstName} {c.lastName}</div>
                  <div className="text-xs text-[#0E2A38]/50 truncate">{c.email} · {c.company || "—"}</div>
                  <div className="text-xs text-[#0E2A38]/60 mt-1 line-clamp-1">{c.message}</div>
                </div>
                <div className="text-[10px] text-[#0E2A38]/30 shrink-0">{fmt(c.createdAt)}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ── jobs tab ──────────────────────────────────────────────────────────────────
const EMPTY_JOB: Omit<Job, "id" | "createdAt"> = { title: "", department: "", location: "", type: "Full-Time", description: "", requirements: "", active: true };

function JobsTab({ jobs, reload }: { jobs: Job[]; reload: () => void }) {
  const [modal, setModal] = useState<null | "add" | "edit">(null);
  const [editing, setEditing] = useState<Job | null>(null);
  const [form, setForm] = useState({ ...EMPTY_JOB });
  const [delTarget, setDelTarget] = useState<Job | null>(null);
  const [saving, setSaving] = useState(false);

  function openAdd() { setForm({ ...EMPTY_JOB }); setEditing(null); setModal("add"); }
  function openEdit(j: Job) { setForm({ title: j.title, department: j.department, location: j.location, type: j.type, description: j.description, requirements: j.requirements, active: j.active }); setEditing(j); setModal("edit"); }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    try {
      if (modal === "add") await api.createJob(form);
      else if (editing) await api.updateJob(editing.id, form);
      reload(); setModal(null);
    } catch (e: unknown) { alert(e instanceof Error ? e.message : "Error"); }
    finally { setSaving(false); }
  }

  async function del() {
    if (!delTarget) return;
    await api.deleteJob(delTarget.id);
    setDelTarget(null); reload();
  }

  const f = (k: keyof typeof form, v: string | boolean) => setForm((p) => ({ ...p, [k]: v }));

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-[#0E2A38]">Jobs</h2>
          <p className="text-sm text-[#0E2A38]/50">{jobs.length} listing{jobs.length !== 1 ? "s" : ""}</p>
        </div>
        <button onClick={openAdd} className="inline-flex items-center gap-1.5 h-9 px-4 rounded-xl bg-[#0B74B0] text-white text-sm font-medium hover:bg-[#096396] transition">
          <Plus size={15} /> Add Job
        </button>
      </div>
      <div className="space-y-3">
        {jobs.map((j) => (
          <div key={j.id} className="bg-white rounded-2xl border border-black/5 shadow-sm p-5 flex items-start gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-semibold text-[#0E2A38]">{j.title}</span>
                <span className={cls("text-[10px] font-semibold px-2 py-0.5 rounded-full", j.active ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-500")}>{j.active ? "Active" : "Inactive"}</span>
              </div>
              <div className="text-xs text-[#0E2A38]/50 mt-0.5">{j.department} · {j.location} · {j.type}</div>
              <p className="text-sm text-[#0E2A38]/60 mt-2 line-clamp-2">{j.description}</p>
            </div>
            <div className="flex gap-2 shrink-0">
              <button onClick={() => openEdit(j)} className="h-8 w-8 rounded-xl border border-black/10 grid place-items-center text-[#0E2A38]/50 hover:text-[#0B74B0] hover:border-[#0B74B0]/30 transition"><Pencil size={14} /></button>
              <button onClick={() => setDelTarget(j)} className="h-8 w-8 rounded-xl border border-black/10 grid place-items-center text-[#0E2A38]/50 hover:text-red-500 hover:border-red-200 transition"><Trash2 size={14} /></button>
            </div>
          </div>
        ))}
        {jobs.length === 0 && <EmptyState label="No jobs yet" sub="Click 'Add Job' to create your first listing." />}
      </div>
      {modal && (
        <Modal title={modal === "add" ? "Add Job" : "Edit Job"} onClose={() => setModal(null)}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Field label="Job Title"><input className={inputCls} value={form.title} onChange={(e) => f("title", e.target.value)} placeholder="e.g. Senior Software Engineer" required /></Field>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Department"><input className={inputCls} value={form.department} onChange={(e) => f("department", e.target.value)} placeholder="e.g. Information Technology" /></Field>
              <Field label="Type">
                <select className={inputCls} value={form.type} onChange={(e) => f("type", e.target.value)}>
                  {["Full-Time", "Part-Time", "Contract", "Internship"].map((t) => <option key={t}>{t}</option>)}
                </select>
              </Field>
            </div>
            <Field label="Location"><input className={inputCls} value={form.location} onChange={(e) => f("location", e.target.value)} placeholder="e.g. Remote / New York, NY" /></Field>
            <Field label="Description"><textarea className={textareaCls} rows={3} value={form.description} onChange={(e) => f("description", e.target.value)} placeholder="Role overview..." /></Field>
            <Field label="Requirements"><textarea className={textareaCls} rows={2} value={form.requirements} onChange={(e) => f("requirements", e.target.value)} placeholder="Skills, years of experience..." /></Field>
            <Toggle value={form.active} onChange={(v) => f("active", v)} label="Active listing" />
            <SaveCancel onCancel={() => setModal(null)} saving={saving} />
          </form>
        </Modal>
      )}
      {delTarget && <ConfirmDelete label={delTarget.title} onConfirm={del} onCancel={() => setDelTarget(null)} />}
    </div>
  );
}

// ── testimonials tab ──────────────────────────────────────────────────────────
const EMPTY_TEST: Omit<Testimonial, "id" | "createdAt"> = { quote: "", name: "", title: "", metric: "", metricLabel: "", photo: "", active: true };

function TestimonialsTab({ testimonials, reload }: { testimonials: Testimonial[]; reload: () => void }) {
  const [modal, setModal] = useState<null | "add" | "edit">(null);
  const [editing, setEditing] = useState<Testimonial | null>(null);
  const [form, setForm] = useState({ ...EMPTY_TEST });
  const [delTarget, setDelTarget] = useState<Testimonial | null>(null);
  const [saving, setSaving] = useState(false);

  function openAdd() { setForm({ ...EMPTY_TEST }); setEditing(null); setModal("add"); }
  function openEdit(t: Testimonial) { setForm({ quote: t.quote, name: t.name, title: t.title, metric: t.metric, metricLabel: t.metricLabel, photo: t.photo || "", active: t.active }); setEditing(t); setModal("edit"); }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    try {
      if (modal === "add") await api.createTestimonial(form);
      else if (editing) await api.updateTestimonial(editing.id, form);
      reload(); setModal(null);
    } catch (e: unknown) { alert(e instanceof Error ? e.message : "Error"); }
    finally { setSaving(false); }
  }

  async function del() {
    if (!delTarget) return;
    await api.deleteTestimonial(delTarget.id);
    setDelTarget(null); reload();
  }

  const f = (k: keyof typeof form, v: string | boolean) => setForm((p) => ({ ...p, [k]: v }));

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-[#0E2A38]">Testimonials</h2>
          <p className="text-sm text-[#0E2A38]/50">{testimonials.length} review{testimonials.length !== 1 ? "s" : ""}</p>
        </div>
        <button onClick={openAdd} className="inline-flex items-center gap-1.5 h-9 px-4 rounded-xl bg-[#0B74B0] text-white text-sm font-medium hover:bg-[#096396] transition">
          <Plus size={15} /> Add Testimonial
        </button>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-white rounded-2xl border border-black/5 shadow-sm p-5">
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="text-3xl font-semibold text-[#0B74B0] tracking-tight">{t.metric}</div>
              <div className="flex gap-2">
                <button onClick={() => openEdit(t)} className="h-8 w-8 rounded-xl border border-black/10 grid place-items-center text-[#0E2A38]/50 hover:text-[#0B74B0] hover:border-[#0B74B0]/30 transition"><Pencil size={14} /></button>
                <button onClick={() => setDelTarget(t)} className="h-8 w-8 rounded-xl border border-black/10 grid place-items-center text-[#0E2A38]/50 hover:text-red-500 hover:border-red-200 transition"><Trash2 size={14} /></button>
              </div>
            </div>
            <div className="text-[10px] font-semibold text-[#0E2A38]/40 uppercase tracking-wide mb-3">{t.metricLabel}</div>
            <p className="text-sm text-[#0E2A38]/60 mb-4 line-clamp-3">"{t.quote}"</p>
            <div className="flex items-center gap-3 pt-3 border-t border-black/5">
              {t.photo
                ? <img src={t.photo} alt={t.name} className="h-9 w-9 rounded-full object-cover border border-black/10 shrink-0" />
                : <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#0B74B0] to-[#75479C] grid place-items-center text-white font-bold text-sm shrink-0">{t.name.charAt(0)}</div>
              }
              <div className="min-w-0">
                <div className="text-sm font-semibold text-[#0E2A38] truncate">{t.name}</div>
                <div className="text-xs text-[#0E2A38]/40 truncate">{t.title}</div>
              </div>
              <div className={cls("text-[10px] font-semibold ml-auto px-2 py-0.5 rounded-full shrink-0", t.active ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-500")}>{t.active ? "Active" : "Hidden"}</div>
            </div>
          </div>
        ))}
        {testimonials.length === 0 && <div className="sm:col-span-2"><EmptyState label="No testimonials yet" sub="Add your first client review." /></div>}
      </div>
      {modal && (
        <Modal title={modal === "add" ? "Add Testimonial" : "Edit Testimonial"} onClose={() => setModal(null)}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Field label="Quote"><textarea className={textareaCls} rows={3} value={form.quote} onChange={(e) => f("quote", e.target.value)} placeholder="Client's testimonial..." required /></Field>
            <Field label="Client Name"><input className={inputCls} value={form.name} onChange={(e) => f("name", e.target.value)} placeholder="e.g. Jane Smith" required /></Field>
            <Field label="Title / Company"><input className={inputCls} value={form.title} onChange={(e) => f("title", e.target.value)} placeholder="e.g. CEO, Acme Corp" /></Field>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Metric (headline)"><input className={inputCls} value={form.metric} onChange={(e) => f("metric", e.target.value)} placeholder="e.g. 48 hrs" /></Field>
              <Field label="Metric Label"><input className={inputCls} value={form.metricLabel} onChange={(e) => f("metricLabel", e.target.value)} placeholder="e.g. to first shortlist" /></Field>
            </div>
            <ImageUpload value={form.photo || ""} onChange={(v) => f("photo", v)} label="Client Photo (optional)" />
            <Toggle value={form.active} onChange={(v) => f("active", v)} label="Show on website" />
            <SaveCancel onCancel={() => setModal(null)} saving={saving} />
          </form>
        </Modal>
      )}
      {delTarget && <ConfirmDelete label={`"${delTarget.name}"`} onConfirm={del} onCancel={() => setDelTarget(null)} />}
    </div>
  );
}

// ── contacts / queries tab ────────────────────────────────────────────────────
function ContactsTab({ contacts, reload }: { contacts: Contact[]; reload: () => void }) {
  const [delTarget, setDelTarget] = useState<Contact | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  async function toggleRead(c: Contact) {
    await api.markContactRead(c.id, !c.read);
    reload();
  }

  async function del() {
    if (!delTarget) return;
    await api.deleteContact(delTarget.id);
    setDelTarget(null); reload();
  }

  const sorted = [...contacts].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl font-semibold text-[#0E2A38]">Contact Queries</h2>
        <p className="text-sm text-[#0E2A38]/50">{contacts.filter((c) => !c.read).length} unread · {contacts.length} total</p>
      </div>
      <div className="space-y-3">
        {sorted.map((c) => (
          <div key={c.id} className={cls("bg-white rounded-2xl border shadow-sm overflow-hidden transition", c.read ? "border-black/5" : "border-[#0B74B0]/20")}>
            <div className="flex items-center gap-4 p-5 cursor-pointer" onClick={() => setExpanded(expanded === c.id ? null : c.id)}>
              <div className={cls("h-2.5 w-2.5 rounded-full shrink-0", c.read ? "bg-transparent border border-black/20" : "bg-[#0B74B0]")} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-semibold text-[#0E2A38] text-sm">{c.firstName} {c.lastName}</span>
                  {c.company && <span className="text-xs text-[#0E2A38]/40">· {c.company}</span>}
                  {c.service && <span className="text-[10px] bg-[#EBF4F9] text-[#0B74B0] px-2 py-0.5 rounded-full font-medium">{c.service}</span>}
                </div>
                <div className="text-xs text-[#0E2A38]/50">{c.email}{c.phone ? ` · ${c.phone}` : ""}</div>
                <p className="text-xs text-[#0E2A38]/60 mt-1 line-clamp-1">{c.message}</p>
              </div>
              <div className="shrink-0 text-right">
                <div className="text-[10px] text-[#0E2A38]/30">{fmt(c.createdAt)}</div>
              </div>
            </div>
            {expanded === c.id && (
              <div className="border-t border-black/5 px-5 py-4 bg-[#F4F4F7]">
                <p className="text-sm text-[#0E2A38]/70 leading-relaxed mb-4">{c.message}</p>
                <div className="flex gap-2 flex-wrap">
                  <button onClick={() => toggleRead(c)} className={cls("inline-flex items-center gap-1.5 h-8 px-3 rounded-xl text-xs font-medium transition", c.read ? "border border-black/10 text-[#0E2A38]/60 hover:bg-white" : "bg-emerald-500 text-white hover:bg-emerald-600")}>
                    <Check size={12} /> {c.read ? "Mark Unread" : "Mark Read"}
                  </button>
                  <a href={`mailto:${c.email}`} className="inline-flex items-center gap-1.5 h-8 px-3 rounded-xl text-xs font-medium border border-black/10 text-[#0E2A38]/60 hover:bg-white transition">
                    <Mail size={12} /> Reply
                  </a>
                  <button onClick={() => setDelTarget(c)} className="inline-flex items-center gap-1.5 h-8 px-3 rounded-xl text-xs font-medium border border-red-100 text-red-500 hover:bg-red-50 transition ml-auto">
                    <Trash2 size={12} /> Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
        {contacts.length === 0 && <EmptyState label="No queries yet" sub="Contact form submissions will appear here." />}
      </div>
      {delTarget && <ConfirmDelete label={`message from ${delTarget.firstName} ${delTarget.lastName}`} onConfirm={del} onCancel={() => setDelTarget(null)} />}
    </div>
  );
}

// ── services tab ──────────────────────────────────────────────────────────────
const EMPTY_SVC: Omit<Service, "id" | "createdAt"> = { name: "", category: "", description: "", active: true };

function ServicesTab({ services, reload }: { services: Service[]; reload: () => void }) {
  const [modal, setModal] = useState<null | "add" | "edit">(null);
  const [editing, setEditing] = useState<Service | null>(null);
  const [form, setForm] = useState({ ...EMPTY_SVC });
  const [delTarget, setDelTarget] = useState<Service | null>(null);
  const [saving, setSaving] = useState(false);

  function openAdd() { setForm({ ...EMPTY_SVC }); setEditing(null); setModal("add"); }
  function openEdit(s: Service) { setForm({ name: s.name, category: s.category, description: s.description, active: s.active }); setEditing(s); setModal("edit"); }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    try {
      if (modal === "add") await api.createService(form);
      else if (editing) await api.updateService(editing.id, form);
      reload(); setModal(null);
    } catch (e: unknown) { alert(e instanceof Error ? e.message : "Error"); }
    finally { setSaving(false); }
  }

  async function del() {
    if (!delTarget) return;
    await api.deleteService(delTarget.id);
    setDelTarget(null); reload();
  }

  const f = (k: keyof typeof form, v: string | boolean) => setForm((p) => ({ ...p, [k]: v }));

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-[#0E2A38]">Services</h2>
          <p className="text-sm text-[#0E2A38]/50">{services.length} service{services.length !== 1 ? "s" : ""}</p>
        </div>
        <button onClick={openAdd} className="inline-flex items-center gap-1.5 h-9 px-4 rounded-xl bg-[#0B74B0] text-white text-sm font-medium hover:bg-[#096396] transition">
          <Plus size={15} /> Add Service
        </button>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {services.map((s) => (
          <div key={s.id} className="bg-white rounded-2xl border border-black/5 shadow-sm p-5">
            <div className="flex items-start justify-between gap-2 mb-2">
              <div>
                <div className="font-semibold text-[#0E2A38]">{s.name}</div>
                <div className="text-xs text-[#0B74B0] font-medium">{s.category}</div>
              </div>
              <div className="flex gap-2 shrink-0">
                <button onClick={() => openEdit(s)} className="h-8 w-8 rounded-xl border border-black/10 grid place-items-center text-[#0E2A38]/50 hover:text-[#0B74B0] hover:border-[#0B74B0]/30 transition"><Pencil size={14} /></button>
                <button onClick={() => setDelTarget(s)} className="h-8 w-8 rounded-xl border border-black/10 grid place-items-center text-[#0E2A38]/50 hover:text-red-500 hover:border-red-200 transition"><Trash2 size={14} /></button>
              </div>
            </div>
            <p className="text-sm text-[#0E2A38]/60 line-clamp-2">{s.description}</p>
            <div className={cls("text-[10px] font-semibold mt-3 px-2 py-0.5 rounded-full inline-block", s.active ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-500")}>{s.active ? "Active" : "Hidden"}</div>
          </div>
        ))}
        {services.length === 0 && <div className="sm:col-span-2"><EmptyState label="No services yet" sub="Add your first service offering." /></div>}
      </div>
      {modal && (
        <Modal title={modal === "add" ? "Add Service" : "Edit Service"} onClose={() => setModal(null)}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Field label="Service Name"><input className={inputCls} value={form.name} onChange={(e) => f("name", e.target.value)} placeholder="e.g. Talent Acquisition" required /></Field>
            <Field label="Category"><input className={inputCls} value={form.category} onChange={(e) => f("category", e.target.value)} placeholder="e.g. Staffing, Technology" /></Field>
            <Field label="Description"><textarea className={textareaCls} rows={3} value={form.description} onChange={(e) => f("description", e.target.value)} placeholder="Brief description of this service..." /></Field>
            <Toggle value={form.active} onChange={(v) => f("active", v)} label="Show on website" />
            <SaveCancel onCancel={() => setModal(null)} saving={saving} />
          </form>
        </Modal>
      )}
      {delTarget && <ConfirmDelete label={delTarget.name} onConfirm={del} onCancel={() => setDelTarget(null)} />}
    </div>
  );
}

// ── achievements tab ──────────────────────────────────────────────────────────
const EMPTY_ACH: Omit<Achievement, "id" | "createdAt"> = { title: "", value: "", description: "", active: true };

function AchievementsTab({ achievements, reload }: { achievements: Achievement[]; reload: () => void }) {
  const [modal, setModal] = useState<null | "add" | "edit">(null);
  const [editing, setEditing] = useState<Achievement | null>(null);
  const [form, setForm] = useState({ ...EMPTY_ACH });
  const [delTarget, setDelTarget] = useState<Achievement | null>(null);
  const [saving, setSaving] = useState(false);

  function openAdd() { setForm({ ...EMPTY_ACH }); setEditing(null); setModal("add"); }
  function openEdit(a: Achievement) { setForm({ title: a.title, value: a.value, description: a.description, active: a.active }); setEditing(a); setModal("edit"); }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    try {
      if (modal === "add") await api.createAchievement(form);
      else if (editing) await api.updateAchievement(editing.id, form);
      reload(); setModal(null);
    } catch (e: unknown) { alert(e instanceof Error ? e.message : "Error"); }
    finally { setSaving(false); }
  }

  async function del() {
    if (!delTarget) return;
    await api.deleteAchievement(delTarget.id);
    setDelTarget(null); reload();
  }

  const f = (k: keyof typeof form, v: string | boolean) => setForm((p) => ({ ...p, [k]: v }));

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-[#0E2A38]">Achievements</h2>
          <p className="text-sm text-[#0E2A38]/50">{achievements.length} achievement{achievements.length !== 1 ? "s" : ""}</p>
        </div>
        <button onClick={openAdd} className="inline-flex items-center gap-1.5 h-9 px-4 rounded-xl bg-[#0B74B0] text-white text-sm font-medium hover:bg-[#096396] transition">
          <Plus size={15} /> Add Achievement
        </button>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievements.map((a) => (
          <div key={a.id} className="bg-white rounded-2xl border border-black/5 shadow-sm p-5">
            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="text-3xl font-bold text-[#0B74B0] tracking-tight">{a.value}</div>
              <div className="flex gap-2 shrink-0">
                <button onClick={() => openEdit(a)} className="h-8 w-8 rounded-xl border border-black/10 grid place-items-center text-[#0E2A38]/50 hover:text-[#0B74B0] hover:border-[#0B74B0]/30 transition"><Pencil size={14} /></button>
                <button onClick={() => setDelTarget(a)} className="h-8 w-8 rounded-xl border border-black/10 grid place-items-center text-[#0E2A38]/50 hover:text-red-500 hover:border-red-200 transition"><Trash2 size={14} /></button>
              </div>
            </div>
            <div className="font-semibold text-[#0E2A38] text-sm mb-1">{a.title}</div>
            <p className="text-xs text-[#0E2A38]/55 line-clamp-2 mb-3">{a.description}</p>
            <div className={cls("text-[10px] font-semibold px-2 py-0.5 rounded-full inline-block", a.active ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-500")}>{a.active ? "Active" : "Hidden"}</div>
          </div>
        ))}
        {achievements.length === 0 && <div className="sm:col-span-2 lg:col-span-3"><EmptyState label="No achievements yet" sub="Add milestones and stats to showcase on your website." /></div>}
      </div>
      {modal && (
        <Modal title={modal === "add" ? "Add Achievement" : "Edit Achievement"} onClose={() => setModal(null)}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Field label="Title"><input className={inputCls} value={form.title} onChange={(e) => f("title", e.target.value)} placeholder="e.g. Clients Served" required /></Field>
            <Field label="Value / Metric"><input className={inputCls} value={form.value} onChange={(e) => f("value", e.target.value)} placeholder="e.g. 500+" required /></Field>
            <Field label="Description"><textarea className={textareaCls} rows={3} value={form.description} onChange={(e) => f("description", e.target.value)} placeholder="Brief description of this achievement..." /></Field>
            <Toggle value={form.active} onChange={(v) => f("active", v)} label="Show on website" />
            <SaveCancel onCancel={() => setModal(null)} saving={saving} />
          </form>
        </Modal>
      )}
      {delTarget && <ConfirmDelete label={delTarget.title} onConfirm={del} onCancel={() => setDelTarget(null)} />}
    </div>
  );
}

// ── team tab ──────────────────────────────────────────────────────────────────
const EMPTY_MEMBER: Omit<TeamMember, "id" | "createdAt"> = { name: "", title: "", initials: "", bio: "", photo: "", active: true };

function TeamTab({ team, reload }: { team: TeamMember[]; reload: () => void }) {
  const [modal, setModal] = useState<null | "add" | "edit">(null);
  const [editing, setEditing] = useState<TeamMember | null>(null);
  const [form, setForm] = useState({ ...EMPTY_MEMBER });
  const [delTarget, setDelTarget] = useState<TeamMember | null>(null);
  const [saving, setSaving] = useState(false);

  function openAdd() { setForm({ ...EMPTY_MEMBER }); setEditing(null); setModal("add"); }
  function openEdit(m: TeamMember) { setForm({ name: m.name, title: m.title, initials: m.initials, bio: m.bio, photo: m.photo || "", active: m.active }); setEditing(m); setModal("edit"); }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    try {
      if (modal === "add") await api.createTeamMember(form);
      else if (editing) await api.updateTeamMember(editing.id, form);
      reload(); setModal(null);
    } catch (e: unknown) { alert(e instanceof Error ? e.message : "Error"); }
    finally { setSaving(false); }
  }

  async function del() {
    if (!delTarget) return;
    await api.deleteTeamMember(delTarget.id);
    setDelTarget(null); reload();
  }

  const f = (k: keyof typeof form, v: string | boolean) => setForm((p) => ({ ...p, [k]: v }));

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-[#0E2A38]">Team Members</h2>
          <p className="text-sm text-[#0E2A38]/50">{team.length} member{team.length !== 1 ? "s" : ""}</p>
        </div>
        <button onClick={openAdd} className="inline-flex items-center gap-1.5 h-9 px-4 rounded-xl bg-[#0B74B0] text-white text-sm font-medium hover:bg-[#096396] transition">
          <Plus size={15} /> Add Member
        </button>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {team.map((m) => (
          <div key={m.id} className="bg-white rounded-2xl border border-black/5 shadow-sm p-5 text-center">
            {m.photo
              ? <img src={m.photo} alt={m.name} className="h-16 w-16 rounded-2xl object-cover mx-auto mb-4 border border-black/10" />
              : <div className="h-16 w-16 rounded-2xl bg-[#0E2A38] text-[#0B74B0] grid place-items-center text-xl font-bold mx-auto mb-4">{m.initials}</div>
            }
            <div className="font-semibold text-[#0E2A38] mb-0.5">{m.name}</div>
            <div className="text-xs text-[#0B74B0] font-semibold uppercase tracking-wide mb-3">{m.title}</div>
            <p className="text-xs text-[#0E2A38]/55 line-clamp-2 mb-3">{m.bio}</p>
            <div className={cls("text-[10px] font-semibold px-2 py-0.5 rounded-full inline-block mb-4", m.active ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-500")}>{m.active ? "Active" : "Hidden"}</div>
            <div className="flex justify-center gap-2">
              <button onClick={() => openEdit(m)} className="h-8 w-8 rounded-xl border border-black/10 grid place-items-center text-[#0E2A38]/50 hover:text-[#0B74B0] hover:border-[#0B74B0]/30 transition"><Pencil size={14} /></button>
              <button onClick={() => setDelTarget(m)} className="h-8 w-8 rounded-xl border border-black/10 grid place-items-center text-[#0E2A38]/50 hover:text-red-500 hover:border-red-200 transition"><Trash2 size={14} /></button>
            </div>
          </div>
        ))}
        {team.length === 0 && <div className="sm:col-span-2 lg:col-span-3"><EmptyState label="No team members yet" sub="Add your first team member to showcase on the About page." /></div>}
      </div>
      {modal && (
        <Modal title={modal === "add" ? "Add Team Member" : "Edit Team Member"} onClose={() => setModal(null)}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <ImageUpload value={form.photo || ""} onChange={(v) => f("photo", v)} label="Profile Photo (optional)" />
            <Field label="Full Name"><input className={inputCls} value={form.name} onChange={(e) => f("name", e.target.value)} placeholder="e.g. Jane Smith" required /></Field>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Job Title"><input className={inputCls} value={form.title} onChange={(e) => f("title", e.target.value)} placeholder="e.g. VP of Sales" /></Field>
              <Field label="Initials (fallback)"><input className={inputCls} value={form.initials} onChange={(e) => f("initials", e.target.value.toUpperCase().slice(0, 2))} placeholder="e.g. JS" maxLength={2} /></Field>
            </div>
            <Field label="Bio"><textarea className={textareaCls} rows={3} value={form.bio} onChange={(e) => f("bio", e.target.value)} placeholder="Short bio for this team member..." /></Field>
            <Toggle value={form.active} onChange={(v) => f("active", v)} label="Show on website" />
            <SaveCancel onCancel={() => setModal(null)} saving={saving} />
          </form>
        </Modal>
      )}
      {delTarget && <ConfirmDelete label={delTarget.name} onConfirm={del} onCancel={() => setDelTarget(null)} />}
    </div>
  );
}

// ── main admin ────────────────────────────────────────────────────────────────
export default function Admin() {
  const { authed, login, logout } = useAuth();
  const [tab, setTab] = useState("dashboard");
  const [jobs, setJobs] = useState<Job[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchAll = useCallback(async () => {
    if (!authed) return;
    setLoading(true);
    try {
      const [j, t, c, s, a, tm, st] = await Promise.all([
        api.getJobs(),
        api.getTestimonials(),
        api.getContacts(),
        api.getServices(),
        api.getAchievements(),
        api.getTeam(),
        api.getStats(),
      ]);
      setJobs(j); setTestimonials(t); setContacts(c); setServices(s);
      setAchievements(a); setTeam(tm); setStats(st);
    } catch { /* token may be stale */ }
    finally { setLoading(false); }
  }, [authed]);

  useEffect(() => { fetchAll(); }, [fetchAll]);

  if (!authed) return <LoginScreen onLogin={login} />;

  return (
    <div className="flex min-h-screen" style={{ fontFamily: "Manrope, ui-sans-serif, system-ui" }}>
      <Sidebar tab={tab} setTab={setTab} onLogout={logout} />
      <main className="flex-1 bg-[#F4F4F7] p-8 overflow-y-auto">
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <Loader2 size={28} className="animate-spin text-[#0B74B0]" />
          </div>
        ) : (
          <>
            {tab === "dashboard" && <Dashboard jobs={jobs} testimonials={testimonials} contacts={contacts} services={services} achievements={achievements} team={team} />}
            {tab === "jobs" && <JobsTab jobs={jobs} reload={fetchAll} />}
            {tab === "testimonials" && <TestimonialsTab testimonials={testimonials} reload={fetchAll} />}
            {tab === "contacts" && <ContactsTab contacts={contacts} reload={fetchAll} />}
            {tab === "services" && <ServicesTab services={services} reload={fetchAll} />}
            {tab === "achievements" && <AchievementsTab achievements={achievements} reload={fetchAll} />}
            {tab === "team" && <TeamTab team={team} reload={fetchAll} />}
          </>
        )}
      </main>
    </div>
  );
}
