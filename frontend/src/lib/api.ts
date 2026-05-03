const BASE = "/api";

function token() {
  return localStorage.getItem("vpc_admin_token") || "";
}

function authHeaders() {
  return { "Content-Type": "application/json", Authorization: `Bearer ${token()}` };
}

async function req<T>(method: string, url: string, body?: unknown, auth = false): Promise<T> {
  const res = await fetch(BASE + url, {
    method,
    headers: auth ? authHeaders() : { "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: res.statusText }));
    throw new Error(err.error || "Request failed");
  }
  return res.json();
}

export const api = {
  // auth
  login: (password: string) => req<{ token: string }>("POST", "/auth/login", { password }),

  // jobs (public read, auth write)
  getJobs: () => req<Job[]>("GET", "/jobs"),
  createJob: (data: Omit<Job, "id" | "createdAt">) => req<Job>("POST", "/jobs", data, true),
  updateJob: (id: string, data: Partial<Job>) => req<Job>("PUT", `/jobs/${id}`, data, true),
  deleteJob: (id: string) => req<void>("DELETE", `/jobs/${id}`, undefined, true),

  // testimonials
  getTestimonials: () => req<Testimonial[]>("GET", "/testimonials"),
  createTestimonial: (data: Omit<Testimonial, "id" | "createdAt">) => req<Testimonial>("POST", "/testimonials", data, true),
  updateTestimonial: (id: string, data: Partial<Testimonial>) => req<Testimonial>("PUT", `/testimonials/${id}`, data, true),
  deleteTestimonial: (id: string) => req<void>("DELETE", `/testimonials/${id}`, undefined, true),

  // contacts (auth read, public write)
  getContacts: () => req<Contact[]>("GET", "/contacts", undefined, true),
  createContact: (data: Omit<Contact, "id" | "createdAt" | "read">) => req<Contact>("POST", "/contacts", data),
  markContactRead: (id: string, read: boolean) => req<Contact>("PATCH", `/contacts/${id}`, { read }, true),
  deleteContact: (id: string) => req<void>("DELETE", `/contacts/${id}`, undefined, true),

  // services
  getServices: () => req<Service[]>("GET", "/services"),
  createService: (data: Omit<Service, "id" | "createdAt">) => req<Service>("POST", "/services", data, true),
  updateService: (id: string, data: Partial<Service>) => req<Service>("PUT", `/services/${id}`, data, true),
  deleteService: (id: string) => req<void>("DELETE", `/services/${id}`, undefined, true),

  // stats
  getStats: () => req<Stats>("GET", "/stats", undefined, true),
};

export interface Stats {
  jobs: { total: number; active: number };
  testimonials: { total: number };
  contacts: { total: number; unread: number };
  services: { total: number; active: number };
}

export interface Job {
  id: string;
  createdAt: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string;
  active: boolean;
}

export interface Testimonial {
  id: string;
  createdAt: string;
  quote: string;
  name: string;
  title: string;
  metric: string;
  metricLabel: string;
  active: boolean;
}

export interface Contact {
  id: string;
  createdAt: string;
  read: boolean;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message: string;
}

export interface Service {
  id: string;
  createdAt: string;
  name: string;
  category: string;
  description: string;
  active: boolean;
}
