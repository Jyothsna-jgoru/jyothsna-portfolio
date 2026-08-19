import { profile, socials } from "../data/profile";
import ContactForm from "./ContactForm";
import { MailIcon, PhoneIcon, PinIcon } from "./ui/Icons";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function Contact() {
  const rows = [
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: <MailIcon />,
    },
    {
      label: "Phone",
      value: profile.phone,
      href: profile.phoneHref,
      icon: <PhoneIcon />,
    },
    {
      label: "Based in",
      value: profile.base,
      href: undefined,
      icon: <PinIcon />,
    },
  ];

  return (
    <section id="contact" className="section">
      <div className="shell">
        <SectionHeading
          index="07"
          eyebrow="Contact"
          title="Let's"
          accent="Connect"
          description="Open to conversations about backend engineering, distributed systems, and applied AI roles. The fastest way to reach me is the form below."
        />

        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          {/* details */}
          <Reveal direction="left" className="h-full">
            <div className="panel panel-sheen flex h-full flex-col p-6 md:p-7">
              <h3 className="font-display text-lg font-bold">Get in touch</h3>
              <p className="mt-2 text-[13.5px] leading-[1.7] text-[color:var(--txt-mute)]">
                Whether it is a role, a collaboration, or a question about
                something I have built — I read every message.
              </p>

              <ul className="mt-7 space-y-1">
                {rows.map((row) => {
                  const body = (
                    <>
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-accent-300 transition-colors duration-300 group-hover:border-accent-500/40 group-hover:text-accent-200">
                        {row.icon}
                      </span>
                      <span className="min-w-0">
                        <span className="block font-mono text-[9.5px] uppercase tracking-[0.2em] text-[color:var(--txt-faint)]">
                          {row.label}
                        </span>
                        <span className="block truncate text-[13.5px] font-medium">
                          {row.value}
                        </span>
                      </span>
                    </>
                  );

                  return (
                    <li key={row.label}>
                      {row.href ? (
                        <a
                          href={row.href}
                          className="group -mx-2 flex items-center gap-3.5 rounded-xl px-2 py-2.5 transition-colors duration-300 hover:bg-white/[0.035]"
                        >
                          {body}
                        </a>
                      ) : (
                        <div className="group -mx-2 flex items-center gap-3.5 rounded-xl px-2 py-2.5">
                          {body}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>

              <div className="hairline my-7" />

              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--txt-faint)]">
                Elsewhere
              </p>
              <div className="flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="btn-icon"
                  >
                    <img
                      src={social.icon}
                      alt=""
                      className={`h-[18px] w-[18px] ${social.invert ? "invert" : ""}`}
                    />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* form */}
          <Reveal direction="right" delay={0.08} className="h-full">
            <div className="panel panel-sheen h-full p-6 md:p-7">
              <h3 className="mb-5 font-display text-lg font-bold">
                Send a message
              </h3>
              <ContactForm
                subject="Portfolio — new message"
                submitLabel="Send message"
                messagePlaceholder="Tell me a little about what you have in mind"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
