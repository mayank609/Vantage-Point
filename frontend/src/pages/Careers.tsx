import React, { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, CheckCircle, Briefcase } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type PortalJob = {
  id: string;
  title: string;
  location: string;
  postedOn: string;
  applyUrl: string;
};

const Careers: React.FC = () => {
  const JOB_PORTAL_URL =
    "https://www1.jobdiva.com/portal/?a=cijdnwq7sln7blp85ftqmzs8m5n2cp09a3b4hy73yc8p2wtdywnhut9bd2zh20pn&compid=0&t=1777486697372#/";
  const JOB_FEED_URL =
    "https://www1.jobdiva.com/candidates/myjobs/getportaljobs.jsp?a=cijdnwq7sln7blp85ftqmzs8m5n2cp09a3b4hy73yc8p2wtdywnhut9bd2zh20pn&jobdescription=0&noofjobs=24";
  const CORS_PROXY = "https://api.allorigins.win/raw?url=";

  const benefits = [
    { title: "Swift Hiring Process", desc: "We collaborate with employers who prioritize efficient hiring that respects the candidate's time at every step." },
    { title: "Candidate Experience First", desc: "Throughout every step of the process, your experience as a candidate is our top priority — not just filling a role." },
    { title: "Top-Tier Employers", desc: "We work exclusively with best-in-class organizations across Fintech, Healthcare, Legal, Insurance, and more." },
    { title: "Personalized Approach", desc: "We listen to your goals and career aspirations so we can match you with opportunities that are the right fit for you." },
  ];

  const divisions = [
    "Information Technology", "Finance & Accounting", "Engineering",
    "Legal (Attorney & Paralegal)", "Executive Search", "Operations & Administrative Support",
  ];
  const [openJobs, setOpenJobs] = useState<PortalJob[]>([]);
  const [loadingJobs, setLoadingJobs] = useState(true);
  const [jobsError, setJobsError] = useState("");

  const jobsFeedViaProxy = useMemo(() => `${CORS_PROXY}${encodeURIComponent(JOB_FEED_URL)}`, [JOB_FEED_URL]);

  useEffect(() => {
    const loadJobs = async () => {
      try {
        setLoadingJobs(true);
        setJobsError("");

        const response = await fetch(jobsFeedViaProxy);
        if (!response.ok) {
          throw new Error(`Unable to fetch jobs (${response.status})`);
        }

        const xmlText = await response.text();
        const xml = new DOMParser().parseFromString(xmlText, "text/xml");
        const parserError = xml.querySelector("parsererror");
        if (parserError) {
          throw new Error("Unable to parse jobs feed");
        }

        const jobNodes = Array.from(xml.querySelectorAll("job"));
        const jobs = jobNodes
          .map((node) => {
            const title = (node.querySelector("title")?.textContent || "").trim();
            const location = (node.querySelector("location")?.textContent || "").trim();
            const issuedate = (node.querySelector("issuedate")?.textContent || "").trim();
            const portalUrl = (node.querySelector("portal_url")?.textContent || "").trim();
            const jobId = (node.querySelector("jobdivaid")?.textContent || "").trim();

            if (!title || !portalUrl) return null;
            return {
              id: jobId || portalUrl,
              title,
              location: location || "Location not specified",
              postedOn: issuedate ? issuedate.split(" ")[0] : "",
              applyUrl: portalUrl,
            };
          })
          .filter((job): job is PortalJob => Boolean(job));

        setOpenJobs(jobs.slice(0, 12));
      } catch (error) {
        setJobsError(error instanceof Error ? error.message : "Unable to load jobs right now");
      } finally {
        setLoadingJobs(false);
      }
    };

    void loadJobs();
  }, [jobsFeedViaProxy]);

  return (
    <div className="min-h-screen bg-[#F4F4F7] text-[#0E2A38] antialiased" style={{ fontFamily: "Manrope, ui-sans-serif, system-ui" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#0E2A38] py-24 lg:py-28">
        <div aria-hidden className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.65) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        {/* Hero atmosphere image */}
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2070&q=80"
          alt="team collaborating in modern workspace"
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover opacity-[0.18] mix-blend-luminosity pointer-events-none select-none"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#0E2A38] via-[#0E2A38]/60 to-transparent pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 text-center text-white">
          <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Careers</div>
          <h1 className="font-[Manrope] font-semibold tracking-tight text-4xl sm:text-5xl lg:text-[64px] leading-[1.05]">
            We Work with the Best.
          </h1>
          <p className="mt-6 text-white/60 max-w-2xl mx-auto leading-relaxed text-base">
            Vantage Point Consulting collaborates with top-tier employers who share our commitment to swift and efficient hiring processes that prioritize the candidate experience throughout every step.
          </p>
          <a
            href={JOB_PORTAL_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-[#0B74B0] hover:bg-[#096396] text-white px-6 py-2.5 text-sm font-medium transition shadow-sm"
          >
            View Open Jobs <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="bg-[#F4F4F7] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="rounded-3xl bg-white border border-black/5 shadow-sm p-8 lg:p-14">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Why Choose Vantage Point</div>
                <h2 className="font-[Manrope] text-[#0E2A38] font-semibold tracking-tight text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] mb-6">
                  Your Career, Our Commitment
                </h2>
                <p className="text-[#0E2A38]/65 text-sm leading-relaxed mb-5">
                  At Vantage Point Consulting, we listen to your goals and match you with opportunities that align with your career aspirations. We maintain access to diverse talent pools for both specialized and high-demand positions.
                </p>
                <p className="text-[#0E2A38]/65 text-sm leading-relaxed mb-5">
                  We work with top-tier employers who share our commitment to efficient hiring processes that prioritize the candidate experience. Whether you're seeking a permanent role or a contract position, we're here to guide you every step of the way.
                </p>
                <p className="text-[#0E2A38]/65 text-sm leading-relaxed mb-8">
                  Our team brings deep industry experience across IT, Finance, Legal, Engineering, and Executive leadership — we understand your field and can match you with positions that are the right fit.
                </p>
                <ul className="space-y-3">
                  {[
                    "Permanent and contract-based placements",
                    "Access to exclusive, unlisted opportunities",
                    "Personalized career guidance and support",
                    "Expertise across all major industries",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#0E2A38]/70">
                      <CheckCircle size={15} className="text-[#0B74B0] flex-shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                {benefits.map((b) => (
                  <div key={b.title} className="rounded-2xl bg-[#EBF4F9] p-5">
                    <h4 className="font-semibold text-[#0E2A38] mb-1.5">{b.title}</h4>
                    <p className="text-[#0E2A38]/60 text-sm leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OPEN JOBS ── */}
      <section className="bg-[#F4F4F7] pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-10">
            <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Open Positions</div>
            <h2 className="font-[Manrope] text-[#0E2A38] font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl">
              Current Jobs
            </h2>
            <p className="text-[#0E2A38]/70 text-sm mt-3 max-w-2xl">
              Live openings are fetched from our JobDiva portal. Click Apply on any role to continue in JobDiva.
            </p>
          </div>
          {loadingJobs && (
            <div className="rounded-2xl bg-white border border-black/10 p-6 text-sm text-[#0E2A38]/70">
              Loading latest jobs...
            </div>
          )}

          {!loadingJobs && jobsError && (
            <div className="rounded-2xl bg-white border border-black/10 p-6">
              <p className="text-sm text-[#0E2A38]/70 mb-4">Could not load jobs automatically right now.</p>
              <a
                href={JOB_PORTAL_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 h-10 px-5 rounded-full bg-[#0B74B0] hover:bg-[#096396] text-white text-sm font-medium transition"
              >
                View Jobs on JobDiva <ArrowUpRight size={14} />
              </a>
            </div>
          )}

          {!loadingJobs && !jobsError && (
            <div className="grid md:grid-cols-2 gap-5">
              {openJobs.map((job) => (
                <article key={job.id} className="rounded-2xl bg-white border border-black/10 p-6 shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-[#0E2A38] text-lg">{job.title}</h3>
                      <p className="text-[#0E2A38]/65 text-sm mt-1">{job.location}</p>
                      {job.postedOn && <p className="text-[#0E2A38]/50 text-xs mt-1">Posted: {job.postedOn}</p>}
                    </div>
                    <Briefcase size={18} className="text-[#0B74B0] flex-shrink-0 mt-1" />
                  </div>
                  <div className="mt-5">
                    <a
                      href={job.applyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 h-10 px-5 rounded-full bg-[#0B74B0] hover:bg-[#096396] text-white text-sm font-medium transition"
                    >
                      Apply on JobDiva <ArrowUpRight size={14} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── DIVISIONS ── */}
      <section className="bg-[#F4F4F7] pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-8 rounded-2xl bg-white border border-black/10 p-6 text-center">
            <h3 className="font-semibold text-[#0E2A38] text-xl mb-2">Current Openings</h3>
            <p className="text-[#0E2A38]/70 text-sm mb-4">
              All active jobs are managed on our JobDiva candidate portal. Click below to browse roles and apply.
            </p>
            <a
              href={JOB_PORTAL_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 h-11 px-6 rounded-full bg-[#0B74B0] hover:bg-[#096396] text-white text-sm font-medium transition shadow"
            >
              Browse Jobs & Apply <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="text-center mb-12">
            <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase">Practice Areas</div>
            <h2 className="mt-3 font-[Manrope] text-[#0E2A38] font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl">
              We Place Talent Across All Disciplines
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {divisions.map((div) => (
              <div key={div} className="rounded-3xl bg-[#EBF4F9] p-6 flex items-center gap-4">
                <div className="h-10 w-10 rounded-xl bg-white grid place-items-center text-[#0B74B0] flex-shrink-0 shadow-sm">
                  <Briefcase size={18} />
                </div>
                <span className="font-medium text-[#0E2A38] text-sm">{div}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#F4F4F7] pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-3xl bg-[#0B74B0] text-white p-8 lg:p-12 text-center">
            <div aria-hidden className="absolute inset-0 opacity-25 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.65) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
            <div className="relative">
              <h3 className="font-[Manrope] font-semibold text-3xl sm:text-4xl mb-4">Ready to Take the Next Step?</h3>
              <p className="text-white/75 mb-8 text-sm max-w-md mx-auto">
                Browse current roles and apply directly through our JobDiva candidate portal.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href={JOB_PORTAL_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center h-11 px-7 rounded-full bg-[#0E2A38] hover:bg-[#0a1f29] text-white text-sm font-medium transition shadow"
                >
                  Apply on JobDiva
                </a>
                <a
                  href={JOB_PORTAL_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 h-11 px-6 rounded-full border border-white/40 text-white text-sm font-medium hover:bg-white/10 transition"
                >
                  View All Jobs <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
