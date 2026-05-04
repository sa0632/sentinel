import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useFadeIn } from '../hooks/useFadeIn'

const services = [
  { name: 'api', uptime: '99.99%', status: 'operational' },
  { name: 'dashboard', uptime: '100%', status: 'operational' },
  { name: 'encryption service', uptime: '99.99%', status: 'operational' },
  { name: 'threat detection', uptime: '99.97%', status: 'operational' },
  { name: 'audit logging', uptime: '100%', status: 'operational' },
  { name: 'eu-west-1 edge', uptime: '99.91%', status: 'degraded' },
]

const incidents = [
  { date: 'apr 14, 2026', title: 'elevated latency in eu-west-1', status: 'resolved', duration: '18 min', detail: 'a misconfigured edge node caused p99 latency to spike. traffic was rerouted automatically. root cause: bad deploy of v3.3.1 to the dublin pop. full post-mortem available.' },
  { date: 'feb 2, 2026', title: 'audit report generation delayed', status: 'resolved', duration: '34 min', detail: 'a database migration lock caused report generation jobs to queue. no data was lost. queue cleared automatically once the migration completed.' },
]

const statusStyle: Record<string, { dot: string; label: string }> = {
  operational: { dot: 'bg-white/40', label: 'text-white/40' },
  degraded:    { dot: 'bg-white',    label: 'text-white' },
}

export default function Status() {
  const pageRef = useFadeIn()
  return (
    <div ref={pageRef} className="bg-black min-h-full">
      <Navbar />
      <section className="pt-40 pb-24 px-6 md:px-10">
        <p className="fade-in text-[11px] tracking-[0.14em] uppercase text-white/35 mb-6">status</p>
        <h1 className="hero-title fade-in text-[clamp(3.5rem,9vw,8rem)] font-medium text-white max-w-4xl mb-8">
          system<br /><span className="text-white/25">health</span>
        </h1>
      </section>

      <section className="px-6 md:px-10 pb-[80px]">
        <div className="flex flex-col gap-px bg-white/[0.07] border border-white/[0.07]">
          {services.map((s, i) => (
            <div key={i} className="fade-in bg-black px-8 py-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className={`w-1.5 h-1.5 rounded-full ${statusStyle[s.status].dot}`} />
                <span className="text-[15px] font-medium tracking-[-0.02em] text-white">{s.name}</span>
              </div>
              <div className="flex items-center gap-8">
                <span className="text-[12px] text-white/25 font-light hidden md:block">{s.uptime} uptime</span>
                <span className={`text-[11px] tracking-[0.08em] uppercase ${statusStyle[s.status].label}`}>{s.status}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 pb-[120px]">
        <p className="fade-in text-[11px] tracking-[0.14em] uppercase text-white/35 mb-8">incident history</p>
        <div className="flex flex-col gap-px bg-white/[0.07] border border-white/[0.07]">
          {incidents.map((inc, i) => (
            <div key={i} className="fade-in bg-black px-8 py-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
                <h3 className="text-[16px] font-medium tracking-[-0.02em] text-white">{inc.title}</h3>
                <div className="flex items-center gap-4 shrink-0">
                  <span className="text-[11px] text-white/25">{inc.duration}</span>
                  <span className="text-[11px] tracking-[0.08em] uppercase text-white/40 border border-white/10 rounded-full px-3 py-1">{inc.status}</span>
                </div>
              </div>
              <p className="text-[12px] text-white/25 mb-3">{inc.date}</p>
              <p className="text-[14px] leading-[1.65] text-white/40 font-light max-w-[600px]">{inc.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
