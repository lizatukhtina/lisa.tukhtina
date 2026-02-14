"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Twitter,
  Send,
  Mail,
  FileText,
  Languages,
} from "lucide-react";
import Image from "next/image";

type Language = "ru" | "en";

const content = {
  ru: {
    hero: {
      name: "Елизавета Алексеевна Тухтина",
      title: "AI Engineer / Prompt Engineer",
      tagline: "Разработка и внедрение AI-решений для бизнеса",
    },
    nav: {
      about: "О себе",
      skills: "Навыки",
      experience: "Опыт",
      education: "Образование",
      contact: "Контакты",
    },
    about: {
      title: "О себе",
      text: "Специалист по AI инженерии и промпт-инжинирингу с опытом разработки и внедрения генеративных AI-решений в продакшн. Специализируюсь на создании промпт-архитектур, тонкой настройке LLM моделей и разработке AI-агентов. Имею опыт работы с OpenAI, открытыми LLM, а также исследований в области NLP.",
    },
    skills: {
      title: "Навыки",
      items: [
        "NLP",
        "Prompt Engineering",
        "Generative AI",
        "OpenAI, Open-Source LLMs",
        "PyTorch, Transformers",
        "Docker, Linux",
        "Agentic AI, Langfuse, Qwen",
        "Machine Learning, Deep Learning",
        "Git, pandas, sklearn, NLTK",
      ],
    },
    experience: {
      title: "Опыт работы",
      items: [
        {
          role: "Prompt Engineer",
          company: "1C-Bitrix",
          period: "Апрель 2024 – Октябрь 2025",
          description: [
            "Проектирование и внедрение промптов от PoC до релиза",
            "AI-решения: агенты для онбординга в CRM, AI лендинги, суммаризация встреч, аналитика звонков, рекомендации для продаж, инсайты по продуктивности",
            "Промпт-архитектуры, структурированные выводы, контекстная инженерия",
            "Тестирование промптов, датасеты, red-teaming, QA",
            "Соответствие EU AI Act",
          ],
          tech: "Python, OpenAI, GigaChat, YandexGPT, Langfuse, Whisper, Open-Source LLMs",
        },
        {
          role: "Junior NLP Researcher",
          company: "Innopolis University",
          period: "Сентябрь 2023 – Февраль 2024",
          description: [
            "Синтетические датасеты для дообучения LLM",
            "Дообучение Mistral, Llama2 (русский язык)",
            "Оценка моделей",
            "Научная публикация (Springer)",
          ],
          tech: "Python, PyTorch, Transformers, PEFT (LoRA), Llama2, CodeLlama, Mistral",
        },
      ],
    },
    education: {
      title: "Образование",
      items: [
        {
          degree: "Магистратура, Компьютерная лингвистика",
          institution: "НИУ ВШЭ Москва",
          year: "2023",
        },
        {
          degree: "Бакалавриат, Информационные системы и технологии",
          institution: "Сибирский федеральный университет",
          year: "2021",
        },
      ],
    },
    languages: {
      title: "Языки",
      items: [
        { name: "Русский", level: "Родной" },
        { name: "Английский", level: "C1 (Advanced)" },
      ],
    },
    contact: {
      title: "Контакты",
      resume: "Резюме",
      telegram: "Telegram",
      email: "Email",
    },
  },
  en: {
    hero: {
      name: "Elizaveta Alekseevna Tukhtina",
      title: "AI Engineer / Prompt Engineer",
      tagline: "Developing and deploying AI solutions for business",
    },
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      education: "Education",
      contact: "Contact",
    },
    about: {
      title: "About",
      text: "AI Engineer and Prompt Engineering specialist with experience in developing and deploying generative AI solutions to production. Specializing in prompt architectures, LLM fine-tuning, and AI agent development. Experienced with OpenAI, open-source LLMs, and NLP research.",
    },
    skills: {
      title: "Skills",
      items: [
        "NLP",
        "Prompt Engineering",
        "Generative AI",
        "OpenAI, Open-Source LLMs",
        "PyTorch, Transformers",
        "Docker, Linux",
        "Agentic AI, Langfuse, Qwen",
        "Machine Learning, Deep Learning",
        "Git, pandas, sklearn, NLTK",
      ],
    },
    experience: {
      title: "Experience",
      items: [
        {
          role: "Prompt Engineer",
          company: "1C-Bitrix",
          period: "April 2024 – October 2025",
          description: [
            "Designed and productionized prompts from PoC to release",
            "AI solutions: CRM onboarding agents, AI landing pages, meeting summarization, speech analytics, sales recommendations, productivity insights",
            "Prompt architectures, structured outputs, context engineering",
            "Prompt testing, datasets, red-teaming, QA",
            "EU AI Act compliance",
          ],
          tech: "Python, OpenAI, GigaChat, YandexGPT, Langfuse, Whisper, Open-Source LLMs",
        },
        {
          role: "Junior NLP Researcher",
          company: "Innopolis University",
          period: "September 2023 – February 2024",
          description: [
            "Synthetic datasets for LLM fine-tuning",
            "Fine-tuning Mistral, Llama2 (Russian)",
            "Model evaluation",
            "Research paper (Springer)",
          ],
          tech: "Python, PyTorch, Transformers, PEFT (LoRA), Llama2, CodeLlama, Mistral",
        },
      ],
    },
    education: {
      title: "Education",
      items: [
        {
          degree: "MSc Computational Linguistics",
          institution: "HSE Moscow",
          year: "2023",
        },
        {
          degree: "BSc Information Systems & Technologies",
          institution: "Siberian Federal University",
          year: "2021",
        },
      ],
    },
    languages: {
      title: "Languages",
      items: [
        { name: "Russian", level: "Native" },
        { name: "English", level: "C1 (Advanced)" },
      ],
    },
    contact: {
      title: "Contact",
      resume: "Resume",
      telegram: "Telegram",
      email: "Email",
    },
  },
};

export default function Portfolio() {
  const [lang, setLang] = useState<Language>("ru");
  const [mounted, setMounted] = useState(false);
  const t = content[lang];

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <nav className="container mx-auto flex items-center justify-between px-4 py-4 md:px-6">
          <div className="flex items-center gap-6">
            {/* <button
              onClick={() => scrollToSection("hero")}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              aria-label={lang === "ru" ? "На главную" : "Go to top"}
            >
            </button> */}
            <div className="relative h-24 w-24">
              <Image
                src="/logorsk.svg"
                alt="Logo"
                fill
                priority
                className="object-contain"
              />
            </div>

            <div className="hidden items-center gap-6 md:flex">
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              >
                {t.nav.about}
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              >
                {t.nav.skills}
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              >
                {t.nav.experience}
              </button>
              <button
                onClick={() => scrollToSection("education")}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              >
                {t.nav.education}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              >
                {t.nav.contact}
              </button>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLang(lang === "ru" ? "en" : "ru")}
            className="gap-2"
            aria-label={
              lang === "ru" ? "Switch to English" : "Переключить на русский"
            }
          >
            <Languages className="h-4 w-4" aria-hidden="true" />
            {lang === "ru" ? "EN" : "RU"}
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="container mx-auto px-4 pt-32 pb-20 md:px-6 md:pt-40 md:pb-32"
      >
        <div className="mx-auto max-w-4xl">
          <h1 className="text-balance font-sans text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            {t.hero.name}
          </h1>
          <p className="mt-4 text-xl text-primary md:text-2xl">
            {t.hero.title}
          </p>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            {t.hero.tagline}
          </p>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="container mx-auto px-4 py-20 md:px-6 md:py-32"
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">
            {t.about.title}
          </h2>
          <div className="glass-card rounded-2xl border border-border/40 bg-card/50 p-6 backdrop-blur-xl md:p-8">
            <p className="text-pretty text-lg leading-relaxed text-card-foreground">
              {t.about.text}
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="container mx-auto px-4 py-20 md:px-6 md:py-32"
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">
            {t.skills.title}
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {t.skills.items.map((skill, index) => (
              <div
                key={index}
                className="glass-card rounded-xl border border-border/40 bg-card/50 px-4 py-3 backdrop-blur-xl transition-colors hover:bg-card/70"
              >
                <p className="text-sm font-medium text-card-foreground md:text-base">
                  {skill}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="container mx-auto px-4 py-20 md:px-6 md:py-32"
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">
            {t.experience.title}
          </h2>
          <div className="space-y-8">
            {t.experience.items.map((job, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl border border-border/40 bg-card/50 p-6 backdrop-blur-xl md:p-8"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-card-foreground md:text-2xl">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-lg text-primary">{job.company}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {job.period}
                  </p>
                </div>
                <ul className="mb-4 space-y-2">
                  {job.description.map((item, i) => (
                    <li
                      key={i}
                      className="text-pretty text-sm leading-relaxed text-card-foreground md:text-base"
                    >
                      • {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.tech.split(", ").map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-accent/30 px-3 py-1 text-xs font-medium text-accent-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="container mx-auto px-4 py-20 md:px-6 md:py-32"
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">
            {t.education.title}
          </h2>
          <div className="space-y-6">
            {t.education.items.map((edu, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl border border-border/40 bg-card/50 p-6 backdrop-blur-xl md:p-8"
              >
                <h3 className="text-lg font-semibold text-card-foreground md:text-xl">
                  {edu.degree}
                </h3>
                <p className="mt-2 text-base text-primary">{edu.institution}</p>
                <p className="mt-1 text-sm text-muted-foreground">{edu.year}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="mb-6 text-2xl font-bold md:text-3xl">
              {t.languages.title}
            </h3>
            <div className="glass-card rounded-2xl border border-border/40 bg-card/50 p-6 backdrop-blur-xl md:p-8">
              <div className="space-y-3">
                {t.languages.items.map((language, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <span className="font-medium text-card-foreground">
                      {language.name}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {language.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="container mx-auto px-4 py-20 pb-32 md:px-6 md:py-32"
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">
            {t.contact.title}
          </h2>
          <div className="glass-card rounded-2xl border border-border/40 bg-card/50 p-6 backdrop-blur-xl md:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href="/resume/lisa-tukhtina.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-border/40 bg-background/50 p-4 transition-colors hover:bg-background/70 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-card"
                aria-label={t.contact.resume}
              >
                <FileText className="h-5 w-5 text-primary" aria-hidden="true" />
                <span className="font-medium">{t.contact.resume}</span>
              </a>
              <a
                href="https://github.com/lizatukhtina"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-border/40 bg-background/50 p-4 transition-colors hover:bg-background/70 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-card"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-primary" aria-hidden="true" />
                <span className="font-medium">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/elizaveta-tukhtina-321931135"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-border/40 bg-background/50 p-4 transition-colors hover:bg-background/70 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-card"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-primary" aria-hidden="true" />
                <span className="font-medium">LinkedIn</span>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-border/40 bg-background/50 p-4 transition-colors hover:bg-background/70 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-card"
                aria-label="Twitter / X"
              >
                <Twitter className="h-5 w-5 text-primary" aria-hidden="true" />
                <span className="font-medium">Twitter / X</span>
              </a>
              <a
                href="https://t.me/lizatukhtina"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-border/40 bg-background/50 p-4 transition-colors hover:bg-background/70 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-card"
                aria-label={t.contact.telegram}
              >
                <Send className="h-5 w-5 text-primary" aria-hidden="true" />
                <span className="font-medium">{t.contact.telegram}</span>
              </a>
              <a
                href="mailto:tukhtinalisa@gmail.com"
                className="flex items-center gap-3 rounded-xl border border-border/40 bg-background/50 p-4 transition-colors hover:bg-background/70 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-card"
                aria-label={t.contact.email}
              >
                <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
                <span className="font-medium">{t.contact.email}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-card/30 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-8 md:px-6">
          <p className="text-center text-sm text-muted-foreground">
            © 2026 {t.hero.name}
          </p>
        </div>
      </footer>
    </div>
  );
}
