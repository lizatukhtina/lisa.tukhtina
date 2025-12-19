"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, FileText, Menu, X } from "lucide-react";

const translations = {
  ru: {
    name: "Элзаветта Тухтина",
    title: "AI Engineer / Prompt Engineer",
    tagline:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    nav: {
      about: "О себе",
      skills: "Навыки",
      links: "Контакты",
    },
    about: {
      title: "О себе",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    skills: {
      title: "Экспертиза",
      list: [
        {
          name: "Prompt Engineering",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
          name: "LLM Integration",
          description: "Sed do eiusmod tempor incididunt ut labore et dolore",
        },
        {
          name: "AI Architecture",
          description: "Ut enim ad minim veniam, quis nostrud exercitation",
        },
        {
          name: "Python & TypeScript",
          description: "Duis aute irure dolor in reprehenderit in voluptate",
        },
        {
          name: "Vector Databases",
          description: "Excepteur sint occaecat cupidatat non proident",
        },
        {
          name: "AI Ethics",
          description: "Sunt in culpa qui officia deserunt mollit anim",
        },
      ],
    },
    links: {
      title: "Контакты",
      resume: "Резюме",
      github: "GitHub",
      linkedin: "LinkedIn",
      twitter: "Twitter",
    },
    footer: "© 2025 Элзаветта Тухтина. Создано с заботой о доступности.",
  },
  en: {
    name: "Elzavetta Tukhtina",
    title: "AI Engineer / Prompt Engineer",
    tagline:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    nav: {
      about: "About",
      skills: "Skills",
      links: "Links",
    },
    about: {
      title: "About Me",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    skills: {
      title: "Expertise",
      list: [
        {
          name: "Prompt Engineering",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
          name: "LLM Integration",
          description: "Sed do eiusmod tempor incididunt ut labore et dolore",
        },
        {
          name: "AI Architecture",
          description: "Ut enim ad minim veniam, quis nostrud exercitation",
        },
        {
          name: "Python & TypeScript",
          description: "Duis aute irure dolor in reprehenderit in voluptate",
        },
        {
          name: "Vector Databases",
          description: "Excepteur sint occaecat cupidatat non proident",
        },
        {
          name: "AI Ethics",
          description: "Sunt in culpa qui officia deserunt mollit anim",
        },
      ],
    },
    links: {
      title: "Connect",
      resume: "Resume",
      github: "GitHub",
      linkedin: "LinkedIn",
      twitter: "Twitter",
    },
    footer: "© 2025 Elzavetta Tukhtina. Crafted with care for accessibility.",
  },
};

export default function Portfolio() {
  const [locale, setLocale] = useState<"ru" | "en">("ru");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const toggleLocale = () => {
    setLocale(locale === "ru" ? "en" : "ru");
    setMobileMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
      <Card className="glass-card p-8 md:p-12 max-w-2xl w-full text-center space-y-8">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
            Элизабетта Тухтина
          </h1>
        </div>
      </Card>
    </div>
  );

  // return (
  //   <div className="min-h-screen bg-background text-foreground">
  //     {/* Header */}
  //     <header className="fixed top-0 left-0 right-0 z-50 glass-header">
  //       <nav className="container mx-auto px-4 py-4 flex items-center justify-between" aria-label="Main navigation">
  //         <div className="text-lg font-semibold">AI</div>

  //         {/* Desktop Navigation */}
  //         <div className="hidden md:flex items-center gap-8">
  //           <button
  //             onClick={() => scrollToSection("about")}
  //             className="text-sm hover:text-accent-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
  //           >
  //             {t.nav.about}
  //           </button>
  //           <button
  //             onClick={() => scrollToSection("skills")}
  //             className="text-sm hover:text-accent-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
  //           >
  //             {t.nav.skills}
  //           </button>
  //           <button
  //             onClick={() => scrollToSection("links")}
  //             className="text-sm hover:text-accent-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
  //           >
  //             {t.nav.links}
  //           </button>
  //           <div className="flex gap-2 ml-4">
  //             <Button
  //               variant={locale === "ru" ? "default" : "ghost"}
  //               size="sm"
  //               onClick={() => setLocale("ru")}
  //               aria-label="Switch to Russian"
  //               aria-pressed={locale === "ru"}
  //             >
  //               RU
  //             </Button>
  //             <Button
  //               variant={locale === "en" ? "default" : "ghost"}
  //               size="sm"
  //               onClick={() => setLocale("en")}
  //               aria-label="Switch to English"
  //               aria-pressed={locale === "en"}
  //             >
  //               EN
  //             </Button>
  //           </div>
  //         </div>

  //         {/* Mobile Menu Button */}
  //         <button
  //           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
  //           className="md:hidden p-2 hover:bg-accent rounded-md transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
  //           aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
  //           aria-expanded={mobileMenuOpen}
  //         >
  //           {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
  //         </button>
  //       </nav>

  //       {/* Mobile Menu */}
  //       {mobileMenuOpen && (
  //         <div className="md:hidden glass-card border-t border-border">
  //           <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
  //             <button
  //               onClick={() => scrollToSection("about")}
  //               className="text-left py-2 hover:text-accent-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
  //             >
  //               {t.nav.about}
  //             </button>
  //             <button
  //               onClick={() => scrollToSection("skills")}
  //               className="text-left py-2 hover:text-accent-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
  //             >
  //               {t.nav.skills}
  //             </button>
  //             <button
  //               onClick={() => scrollToSection("links")}
  //               className="text-left py-2 hover:text-accent-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
  //             >
  //               {t.nav.links}
  //             </button>
  //             <div className="flex gap-2 pt-2 border-t border-border">
  //               <Button
  //                 variant={locale === "ru" ? "default" : "ghost"}
  //                 size="sm"
  //                 onClick={() => setLocale("ru")}
  //                 aria-label="Switch to Russian"
  //                 aria-pressed={locale === "ru"}
  //               >
  //                 RU
  //               </Button>
  //               <Button
  //                 variant={locale === "en" ? "default" : "ghost"}
  //                 size="sm"
  //                 onClick={() => setLocale("en")}
  //                 aria-label="Switch to English"
  //                 aria-pressed={locale === "en"}
  //               >
  //                 EN
  //               </Button>
  //             </div>
  //           </div>
  //         </div>
  //       )}
  //     </header>

  //     <main>
  //       {/* Hero Section */}
  //       <section className="pt-32 pb-20 px-4" aria-labelledby="hero-heading">
  //         <div className="container mx-auto max-w-4xl">
  //           <div className="text-center space-y-6">
  //             <h1 id="hero-heading" className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
  //               {t.name}
  //             </h1>
  //             <p className="text-xl md:text-2xl text-muted-foreground">{t.title}</p>
  //             <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">{t.tagline}</p>
  //           </div>
  //         </div>
  //       </section>

  //       {/* About Section */}
  //       <section id="about" className="py-20 px-4" aria-labelledby="about-heading">
  //         <div className="container mx-auto max-w-4xl">
  //           <Card className="glass-card p-8 md:p-12">
  //             <h2 id="about-heading" className="text-3xl md:text-4xl font-bold mb-6">
  //               {t.about.title}
  //             </h2>
  //             <p className="text-lg leading-relaxed text-muted-foreground">{t.about.description}</p>
  //           </Card>
  //         </div>
  //       </section>

  //       {/* Skills Section */}
  //       <section id="skills" className="py-20 px-4" aria-labelledby="skills-heading">
  //         <div className="container mx-auto max-w-6xl">
  //           <h2 id="skills-heading" className="text-3xl md:text-4xl font-bold mb-12 text-center">
  //             {t.skills.title}
  //           </h2>
  //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  //             {t.skills.list.map((skill, index) => (
  //               <Card
  //                 key={index}
  //                 className="glass-card p-6 hover:scale-[1.02] transition-transform motion-reduce:hover:scale-100"
  //               >
  //                 <h3 className="text-xl font-semibold mb-3">{skill.name}</h3>
  //                 <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
  //               </Card>
  //             ))}
  //           </div>
  //         </div>
  //       </section>

  //       {/* Links Section */}
  //       <section id="links" className="py-20 px-4" aria-labelledby="links-heading">
  //         <div className="container mx-auto max-w-4xl">
  //           <Card className="glass-card p-8 md:p-12">
  //             <h2 id="links-heading" className="text-3xl md:text-4xl font-bold mb-8">
  //               {t.links.title}
  //             </h2>
  //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  //               <a
  //                 href="https://example.com/resume.pdf"
  //                 target="_blank"
  //                 rel="noopener noreferrer"
  //                 className="flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-accent hover:text-accent-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
  //                 aria-label={`${t.links.resume} (opens in new tab)`}
  //               >
  //                 <FileText size={24} aria-hidden="true" />
  //                 <span className="font-medium">{t.links.resume}</span>
  //               </a>
  //               <a
  //                 href="https://github.com/yourusername"
  //                 target="_blank"
  //                 rel="noopener noreferrer"
  //                 className="flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-accent hover:text-accent-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
  //                 aria-label={`${t.links.github} (opens in new tab)`}
  //               >
  //                 <Github size={24} aria-hidden="true" />
  //                 <span className="font-medium">{t.links.github}</span>
  //               </a>
  //               <a
  //                 href="https://linkedin.com/in/yourusername"
  //                 target="_blank"
  //                 rel="noopener noreferrer"
  //                 className="flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-accent hover:text-accent-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
  //                 aria-label={`${t.links.linkedin} (opens in new tab)`}
  //               >
  //                 <Linkedin size={24} aria-hidden="true" />
  //                 <span className="font-medium">{t.links.linkedin}</span>
  //               </a>
  //               <a
  //                 href="https://twitter.com/yourusername"
  //                 target="_blank"
  //                 rel="noopener noreferrer"
  //                 className="flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-accent hover:text-accent-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
  //                 aria-label={`${t.links.twitter} (opens in new tab)`}
  //               >
  //                 <Twitter size={24} aria-hidden="true" />
  //                 <span className="font-medium">{t.links.twitter}</span>
  //               </a>
  //             </div>
  //           </Card>
  //         </div>
  //       </section>
  //     </main>

  //     {/* Footer */}
  //     <footer className="py-8 px-4 border-t border-border">
  //       <div className="container mx-auto max-w-4xl text-center text-sm text-muted-foreground">{t.footer}</div>
  //     </footer>
  //   </div>
  // )
}
