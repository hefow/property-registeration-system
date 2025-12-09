"use client";

import * as React from "react";
import { useState, useEffect, Suspense } from "react";

// Data
const navLinks = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Registry", href: "/registry" },
  { label: "Team", href: "#team" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Get started", href: "#get-started" },
];

const quickActions = [
  { label: "Register property", href: "/auth/register", icon: "📝" },
  { label: "Invite officials", href: "/auth/invite", icon: "👥" },
  { label: "Review records", href: "/dashboard", icon: "📊" },
];

const stats = [
  { label: "Properties tracked", value: "12.4k", change: "+12%" },
  { label: "Officials connected", value: "270", change: "+8%" },
  { label: "Documents verified", value: "84k", change: "+23%" },
];

const highlightCards = [
  {
    title: "Automation coverage",
    value: "18 steps",
    copy: "Each submission travels through a guided workflow that prevents manual mistakes.",
    accent: "from-blue-500 to-emerald-500",
    icon: "⚡",
  },
  {
    title: "Approval velocity",
    value: "2.4 days",
    copy: "Time between submission and official clearance has been cut in half.",
    accent: "from-emerald-500 to-blue-500",
    icon: "🚀",
  },
  {
    title: "Global clarity",
    value: "42 jurisdictions",
    copy: "Monitoring boards stay in sync with live alerts and digestible reports.",
    accent: "from-blue-500 to-purple-500",
    icon: "🌍",
  },
];

const resourceLinks = [
  {
    label: "Release notes",
    description: "Read what rolled out this month and what's next for SafeRecord.",
    href: "/docs/releases",
    icon: "📰",
  },
  {
    label: "Policy library",
    description: "Download policy templates that align with your jurisdiction.",
    href: "/docs/policies",
    icon: "📚",
  },
  {
    label: "Support hub",
    description: "Quick answers, live chat, and onboarding guides for teams.",
    href: "/support",
    icon: "🛟",
  },
];

const featureCards = [
  {
    title: "Secure ownership",
    body: "Immutable records and multi-party signatures make ownership data transparent and trustworthy.",
    icon: "🔒",
  },
  {
    title: "Automated compliance",
    body: "Policy checks and rule gates run in the background for every submitted form.",
    icon: "🤖",
  },
  {
    title: "360° visibility",
    body: "Rich dashboards keep owners, officials, and registry teams aligned on progress.",
    icon: "👁️",
  },
];

const roadmapSteps = [
  {
    title: "Submit property info",
    copy: "Upload boundary docs, ownership statements, and proofs in one guided form.",
    icon: "📄",
  },
  {
    title: "Collaborate with officials",
    copy: "Invite registrars and municipal staff to review, comment, and certify directly in the platform.",
    icon: "🤝",
  },
  {
    title: "Publish and monitor",
    copy: "The registry publishes the approved record and notifies every party. Track edits with full audit history.",
    icon: "📢",
  },
];

const testimonials = [
  {
    quote: "SafeRecord helped our team clear backlogs without losing compliance.",
    author: "Monica Cruz",
    role: "Registry Director, Alto City",
    rating: 5,
    avatar: "MC",
  },
  {
    quote: "We stopped relying on paper pipelines and now launch registrations in days.",
    author: "Jamal Reed",
    role: "City Planner, Westvale",
    rating: 4,
    avatar: "JR",
  },
  {
    quote: "Owners see every approval and milestone, which keeps them confident.",
    author: "Priya Patel",
    role: "Landowner",
    rating: 5,
    avatar: "PP",
  },
];

const teamMembers = [
  {
    name: "Ana Gilbert",
    title: "Product",
    focus: "Designing clear flows for owners, officials, and registry staff.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Marcus Flynn",
    title: "Engineering",
    focus: "Building secure APIs, encrypted storage, and observability for every request.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Dara Kline",
    title: "Trust & Ops",
    focus: "Aligning registry policies with engineering and support.",
    gradient: "from-green-500 to-emerald-500",
  },
];

// Icons
const ArrowSvg = ({ className }: { className?: string }) => (
  <svg
    aria-hidden="true"
    className={className}
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 10h10" />
    <path d="M12 5l5 5-5 5" />
  </svg>
);

const SparkSvg = ({ className }: { className?: string }) => (
  <svg
    aria-hidden="true"
    className={className}
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 1v18" />
    <path d="M1 10h18" />
    <path d="M4.22 4.22l11.56 11.56" />
    <path d="M4.22 15.78l11.56-11.56" />
  </svg>
);

const Star = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const MoonIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

const SunIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

// Loading Component
const LoadingSpinner = () => (
  <div className="flex min-h-screen items-center justify-center">
    <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
  </div>
);

// Async Dark Mode Hook
const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeDarkMode = async () => {
      try {
        // Simulate async operation (e.g., fetching from localStorage or API)
        await new Promise(resolve => setTimeout(resolve, 100));
        
        // Check localStorage for saved preference
        const savedTheme = localStorage.getItem('theme');
        
        if (savedTheme) {
          setIsDarkMode(savedTheme === 'dark');
        } else {
          // Check system preference
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          setIsDarkMode(prefersDark);
        }
      } catch (error) {
        console.error('Error initializing dark mode:', error);
        setIsDarkMode(false); // Default to light mode on error
      } finally {
        setIsLoading(false);
      }
    };

    initializeDarkMode();
  }, []);

  const toggleDarkMode = async () => {
    if (isDarkMode === null) return;
    
    setIsLoading(true);
    try {
      const newMode = !isDarkMode;
      
      // Simulate async save operation
      await new Promise(resolve => setTimeout(resolve, 50));
      
      // Save to localStorage
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      
      // Update state
      setIsDarkMode(newMode);
      
      // Update document class
      if (newMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (error) {
      console.error('Error toggling dark mode:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isDarkMode, isLoading, toggleDarkMode };
};

// Background Elements Component
const BackgroundElements = ({ darkMode }: { darkMode: boolean }) => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none">
    <div className={`absolute -top-40 -right-40 h-80 w-80 rounded-full ${darkMode ? 'bg-blue-500/10' : 'bg-blue-500/5'} blur-3xl transition-all duration-1000`} />
    <div className={`absolute -bottom-40 -left-40 h-80 w-80 rounded-full ${darkMode ? 'bg-emerald-500/10' : 'bg-emerald-500/5'} blur-3xl transition-all duration-1000`} />
    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full ${darkMode ? 'bg-purple-500/5' : 'bg-purple-500/3'} blur-3xl transition-all duration-1000`} />
  </div>
);

// Navigation Component
const Navigation = ({ 
  scrolled, 
  darkMode, 
  mobileMenuOpen, 
  setMobileMenuOpen,
  toggleDarkMode,
  darkModeLoading 
}: { 
  scrolled: boolean;
  darkMode: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (value: boolean) => void;
  toggleDarkMode: () => Promise<void>;
  darkModeLoading: boolean;
}) => (
  <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled 
      ? darkMode 
        ? 'bg-gray-900/95 backdrop-blur-xl shadow-xl py-3' 
        : 'bg-white/95 backdrop-blur-xl shadow-xl py-3'
      : darkMode 
        ? 'bg-transparent py-5' 
        : 'bg-transparent py-5'
  }`}>
    <div className="mx-auto max-w-7xl px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className={`absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl blur opacity-70 transition-all duration-300 ${darkMode ? 'dark:opacity-50' : ''}`}></div>
            <div className={`relative rounded-2xl bg-gradient-to-r from-blue-500 to-emerald-500 p-3 shadow-2xl transition-all duration-300 ${darkMode ? 'dark:from-blue-600 dark:to-emerald-600' : ''}`}>
              <SparkSvg className="h-6 w-6 text-white" />
            </div>
          </div>
          <div>
            <p className={`text-xs font-semibold uppercase tracking-widest transition-colors duration-300 ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
              Property Registry
            </p>
            <p className={`text-xl font-bold bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent transition-all duration-300 ${darkMode ? 'dark:from-blue-400 dark:to-emerald-400' : ''}`}>
              SafeRecord
            </p>
          </div>
        </div>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`group relative rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ${
                darkMode 
                  ? 'text-gray-300 hover:text-emerald-400' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {link.label}
              <span className={`absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-emerald-500 transition-all duration-300 group-hover:w-3/4 ${
                darkMode ? 'dark:from-blue-400 dark:to-emerald-400' : ''
              }`}></span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            disabled={darkModeLoading}
            className={`relative rounded-xl p-2 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${
              darkMode 
                ? 'bg-gray-800 text-yellow-300 hover:bg-gray-700' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkModeLoading ? (
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
            ) : darkMode ? (
              <SunIcon />
            ) : (
              <MoonIcon />
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1 rounded-xl backdrop-blur-sm shadow-lg transition-all duration-300 md:hidden ${
              darkMode ? 'bg-gray-800/80' : 'bg-white/80'
            }`}
            aria-label="Toggle navigation"
          >
            <span className={`h-0.5 w-6 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''} ${
              darkMode ? 'bg-gray-300' : 'bg-gray-700'
            }`} />
            <span className={`h-0.5 w-6 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''} ${
              darkMode ? 'bg-gray-300' : 'bg-gray-700'
            }`} />
            <span className={`h-0.5 w-6 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''} ${
              darkMode ? 'bg-gray-300' : 'bg-gray-700'
            }`} />
          </button>
          
          <a
            href="/auth/login"
            className={`group relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-emerald-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 ${
              darkMode ? 'dark:shadow-blue-500/15 dark:hover:shadow-blue-500/30' : ''
            }`}
          >
            <span className="relative z-10">Sign in</span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </a>
        </div>
      </div>
    </div>

    {/* Mobile Menu */}
    {mobileMenuOpen && (
      <div className={`absolute top-full left-0 right-0 backdrop-blur-xl shadow-2xl transition-all duration-300 md:hidden ${
        darkMode ? 'bg-gray-900/95' : 'bg-white/95'
      }`}>
        <div className="mx-auto max-w-7xl px-6 py-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`block rounded-lg px-4 py-3 text-sm font-medium transition-all duration-300 ${
                darkMode 
                  ? 'text-gray-300 hover:bg-gray-800 hover:text-emerald-400' 
                  : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    )}
  </nav>
);

// Hero Section Component
const HeroSection = ({ darkMode }: { darkMode: boolean }) => (
  <section className={`relative overflow-hidden rounded-3xl p-8 shadow-2xl transition-all duration-300 ${
    darkMode 
      ? 'bg-gray-800/50 backdrop-blur-sm' 
      : 'bg-white'
  }`}>
    <div className={`absolute top-0 right-0 -mt-20 -mr-20 h-64 w-64 rounded-full blur-3xl transition-all duration-1000 ${
      darkMode ? 'bg-blue-500/10' : 'bg-blue-500/5'
    }`} />
    <div className={`absolute bottom-0 left-0 -mb-20 -ml-20 h-64 w-64 rounded-full blur-3xl transition-all duration-1000 ${
      darkMode ? 'bg-emerald-500/10' : 'bg-emerald-500/5'
    }`} />
    
    <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
      <div className="space-y-8">
        <div className="inline-flex items-center gap-3">
          <span className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors duration-300 ${
            darkMode 
              ? 'bg-emerald-500/20 text-emerald-400' 
              : 'bg-emerald-500/10 text-emerald-600'
          }`}>
            SDG-ready
          </span>
          <span className={`text-xs font-semibold uppercase tracking-widest transition-colors duration-300 ${
            darkMode ? 'text-blue-400' : 'text-blue-600'
          }`}>
            Clear by design
          </span>
        </div>
        
        <div className="space-y-6">
          <h1 className={`text-5xl font-bold leading-tight tracking-tight transition-colors duration-300 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Register, verify, and track properties with{" "}
            <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
              confidence
            </span>
          </h1>
          <p className={`text-xl transition-colors duration-300 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            A modern registry that blends intuitive workflows with trusted compliance. Every step is documented, auditable, and transparent for all stakeholders.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          {quickActions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              className={`group relative overflow-hidden rounded-xl px-6 py-3.5 text-sm font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                darkMode
                  ? 'border-gray-700 bg-gray-800 text-gray-200 hover:border-blue-500'
                  : 'border border-gray-200 bg-white text-gray-800 hover:border-blue-500'
              }`}
            >
              <span className="mr-2">{action.icon}</span>
              {action.label}
              <ArrowSvg className="ml-2 inline-block h-3 w-3 text-blue-500 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
            </a>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`relative overflow-hidden rounded-2xl p-4 shadow-lg transition-all duration-300 hover:shadow-xl ${
                darkMode ? 'bg-gray-800/50' : 'bg-white'
              }`}
            >
              <p className={`text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                darkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                {stat.label}
              </p>
              <div className="mt-2 flex items-baseline gap-2">
                <p className={`text-2xl font-bold transition-colors duration-300 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {stat.value}
                </p>
                <span className={`text-xs font-semibold transition-colors duration-300 ${
                  darkMode ? 'text-emerald-400' : 'text-emerald-600'
                }`}>
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dashboard Preview */}
      <div className="relative">
        <div className={`relative overflow-hidden rounded-2xl p-1 shadow-2xl transition-all duration-300 ${
          darkMode 
            ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800' 
            : 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
        }`}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-emerald-500/20" />
          <div className="relative rounded-xl bg-gray-900 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-emerald-400">Live Review</p>
                <h3 className="text-2xl font-bold text-white">Registration Dashboard</h3>
              </div>
              <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-400">
                Official
              </span>
            </div>
            
            <div className="mt-8 space-y-4">
              {[
                { label: "Owner identity", status: "Verified", progress: 100 },
                { label: "Property details", status: "Complete", progress: 100 },
                { label: "Documents", status: "Awaiting", progress: 60 },
                { label: "Official review", status: "Queued", progress: 30 },
              ].map((item, index) => (
                <div key={item.label} className="rounded-xl bg-gray-800/50 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500/20 to-emerald-500/20">
                        <span className="text-lg font-bold text-white">{index + 1}</span>
                      </div>
                      <p className="font-medium text-white">{item.label}</p>
                    </div>
                    <span className="text-sm font-semibold text-emerald-400">{item.status}</span>
                  </div>
                  <div className="mt-3 h-1.5 w-full rounded-full bg-gray-700">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 transition-all duration-1000"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Highlights Section Component
const HighlightsSection = ({ darkMode }: { darkMode: boolean }) => (
  <section className="mt-20">
    <div className="mb-10 text-center">
      <p className={`text-sm font-semibold uppercase tracking-widest transition-colors duration-300 ${
        darkMode ? 'text-blue-400' : 'text-blue-600'
      }`}>
        Momentum Highlights
      </p>
      <h3 className={`mt-2 text-4xl font-bold transition-colors duration-300 ${
        darkMode ? 'text-white' : 'text-gray-900'
      }`}>
        Modern controls for{" "}
        <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
          seamless registration
        </span>
      </h3>
    </div>

    <div className="grid gap-6 md:grid-cols-3">
      {highlightCards.map((card) => (
        <div
          key={card.title}
          className={`group relative overflow-hidden rounded-2xl p-6 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
            darkMode ? 'bg-gray-800/50' : 'bg-white'
          }`}
        >
          <div className={`absolute top-0 right-0 -mt-10 -mr-10 h-20 w-20 rounded-full blur-xl transition-all duration-1000 ${
            darkMode ? 'bg-blue-500/10' : 'bg-blue-500/5'
          }`} />
          <div className={`mb-6 rounded-2xl bg-gradient-to-br ${card.accent} p-5 transition-all duration-300 group-hover:scale-[1.02]`}>
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold uppercase tracking-wider text-white/90">{card.title}</p>
              <span className="text-2xl transition-transform duration-300 group-hover:scale-110">{card.icon}</span>
            </div>
            <p className="mt-2 text-3xl font-bold text-white">{card.value}</p>
          </div>
          <p className={`transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {card.copy}
          </p>
          <div className={`mt-8 flex items-center justify-between text-sm font-semibold transition-colors duration-300 ${
            darkMode ? 'text-blue-400' : 'text-blue-600'
          }`}>
            <span>View details</span>
            <ArrowSvg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      ))}
    </div>
  </section>
);

// Features Section Component
const FeaturesSection = ({ darkMode }: { darkMode: boolean }) => (
  <section className={`mt-20 rounded-3xl p-10 shadow-2xl transition-all duration-300 ${
    darkMode 
      ? 'bg-gray-800/30 backdrop-blur-sm' 
      : 'bg-gradient-to-br from-white to-blue-50/50'
  }`}>
    <div className="mb-12 text-center">
      <p className={`text-sm font-semibold uppercase tracking-widest transition-colors duration-300 ${
        darkMode ? 'text-blue-400' : 'text-blue-600'
      }`}>
        Why Choose Us
      </p>
      <h3 className={`mt-2 text-4xl font-bold transition-colors duration-300 ${
        darkMode ? 'text-white' : 'text-gray-900'
      }`}>
        Built for{" "}
        <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
          clarity and trust
        </span>
      </h3>
    </div>

    <div className="grid gap-8 md:grid-cols-3">
      {featureCards.map((card) => (
        <div
          key={card.title}
          className={`group relative overflow-hidden rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-2xl ${
            darkMode ? 'bg-gray-800/50' : 'bg-white'
          }`}
        >
          <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 ${
            darkMode ? 'bg-gray-700/50' : 'bg-gradient-to-r from-blue-500/10 to-emerald-500/10'
          } text-2xl`}>
            {card.icon}
          </div>
          <h4 className={`mb-4 text-xl font-bold transition-colors duration-300 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {card.title}
          </h4>
          <p className={`transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {card.body}
          </p>
          <div className="mt-6 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-emerald-500 transition-all duration-300 group-hover:w-full" />
        </div>
      ))}
    </div>
  </section>
);

// How It Works Component
const HowItWorksSection = ({ darkMode }: { darkMode: boolean }) => (
  <section className="mt-20">
    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
      <div>
        <p className={`text-sm font-semibold uppercase tracking-widest transition-colors duration-300 ${
          darkMode ? 'text-blue-400' : 'text-blue-600'
        }`}>
          How It Works
        </p>
        <h3 className={`mt-2 text-4xl font-bold transition-colors duration-300 ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Three simple steps to{" "}
          <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
            register with confidence
          </span>
        </h3>
        
        <div className="mt-10 space-y-6">
          {roadmapSteps.map((step, index) => (
            <div
              key={step.title}
              className={`group relative overflow-hidden rounded-2xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl ${
                darkMode ? 'bg-gray-800/50' : 'bg-white'
              }`}
            >
              <div className="flex items-start gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-emerald-500 text-lg font-bold text-white transition-all duration-300 group-hover:scale-110">
                  {index + 1}
                </div>
                <div>
                  <h4 className={`text-lg font-bold transition-colors duration-300 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {step.title}
                  </h4>
                  <p className={`mt-2 transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {step.copy}
                  </p>
                </div>
                <span className={`ml-auto text-2xl opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2 ${
                  darkMode ? 'text-gray-400' : 'text-gray-400'
                }`}>
                  {step.icon}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="relative">
        <div className={`relative overflow-hidden rounded-2xl p-8 shadow-2xl transition-all duration-300 ${
          darkMode 
            ? 'bg-gray-800/30 backdrop-blur-sm' 
            : 'bg-gradient-to-br from-blue-50 to-emerald-50'
        }`}>
          <div className={`absolute top-0 right-0 -mt-10 -mr-10 h-32 w-32 rounded-full blur-2xl transition-all duration-1000 ${
            darkMode ? 'bg-blue-500/10' : 'bg-blue-500/10'
          }`} />
          <div className="relative space-y-6">
            <h4 className={`text-2xl font-bold transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Trusted by Professionals
            </h4>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 shadow-lg transition-all duration-300 hover:scale-[1.02] ${
                  darkMode ? 'bg-gray-800/50' : 'bg-white'
                }`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 text-white transition-all duration-300 hover:scale-110">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className={`font-bold transition-colors duration-300 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {testimonial.author}
                    </p>
                    <p className={`text-sm transition-colors duration-300 ${
                      darkMode ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      {testimonial.role}
                    </p>
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(testimonial.rating)].map((_, starId) => (
                      <Star key={starId} className={`h-4 w-4 transition-colors duration-300 ${
                        darkMode ? 'text-yellow-400' : 'text-yellow-400'
                      }`} />
                    ))}
                  </div>
                </div>
                <p className={`italic transition-colors duration-300 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Team Section Component
const TeamSection = ({ darkMode }: { darkMode: boolean }) => (
  <section className={`mt-20 rounded-3xl p-10 transition-all duration-300 ${
    darkMode 
      ? 'bg-gray-800/30 backdrop-blur-sm' 
      : 'bg-gradient-to-br from-gray-50 to-blue-50'
  }`}>
    <div className="mb-12 text-center">
      <p className={`text-sm font-semibold uppercase tracking-widest transition-colors duration-300 ${
        darkMode ? 'text-emerald-400' : 'text-emerald-600'
      }`}>
        Team Developers
      </p>
      <h3 className={`mt-2 text-4xl font-bold transition-colors duration-300 ${
        darkMode ? 'text-white' : 'text-gray-900'
      }`}>
        Committed to{" "}
        <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
          trustworthy releases
        </span>
      </h3>
    </div>

    <div className="grid gap-8 md:grid-cols-3">
      {teamMembers.map((member) => (
        <div
          key={member.name}
          className={`group relative overflow-hidden rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] ${
            darkMode 
              ? 'bg-gray-800/50 hover:bg-gray-800/70' 
              : 'bg-white hover:bg-gray-50'
          }`}
        >
          <div className="flex items-center gap-4">
            <div className={`h-16 w-16 rounded-full bg-gradient-to-r ${member.gradient} transition-all duration-300 group-hover:scale-110`} />
            <div>
              <p className={`text-xl font-bold transition-colors duration-300 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {member.name}
              </p>
              <p className={`transition-colors duration-300 ${
                darkMode ? 'text-emerald-400' : 'text-emerald-600'
              }`}>
                {member.title}
              </p>
            </div>
          </div>
          <p className={`mt-4 transition-colors duration-300 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {member.focus}
          </p>
          <div className="mt-6 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-emerald-500 transition-all duration-300 group-hover:w-full" />
        </div>
      ))}
    </div>
  </section>
);

// Resources Section Component
const ResourcesSection = ({ darkMode }: { darkMode: boolean }) => (
  <section className="mt-20">
    <div className="mb-10 text-center">
      <p className={`text-sm font-semibold uppercase tracking-widest transition-colors duration-300 ${
        darkMode ? 'text-blue-400' : 'text-blue-600'
      }`}>
        Resources
      </p>
      <h3 className={`mt-2 text-4xl font-bold transition-colors duration-300 ${
        darkMode ? 'text-white' : 'text-gray-900'
      }`}>
        Everything you need for{" "}
        <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
          successful implementation
        </span>
      </h3>
    </div>

    <div className="grid gap-6 md:grid-cols-3">
      {resourceLinks.map((resource) => (
        <a
          key={resource.label}
          href={resource.href}
          className={`group relative overflow-hidden rounded-2xl p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
            darkMode ? 'bg-gray-800/50' : 'bg-white'
          }`}
        >
          <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 ${
            darkMode ? 'bg-gray-700/50' : 'bg-gradient-to-r from-blue-500/10 to-emerald-500/10'
          } text-2xl`}>
            {resource.icon}
          </div>
          <h4 className={`mb-2 text-xl font-bold transition-colors duration-300 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {resource.label}
          </h4>
          <p className={`transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {resource.description}
          </p>
          <div className={`mt-8 flex items-center gap-2 text-sm font-semibold transition-colors duration-300 ${
            darkMode ? 'text-blue-400' : 'text-blue-600'
          }`}>
            <span>Explore now</span>
            <ArrowSvg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </a>
      ))}
    </div>
  </section>
);

// CTA Section Component
const CTASection = () => (
  <section className="relative mt-20 overflow-hidden rounded-3xl">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-500 to-emerald-500" />
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-emerald-500/0" />
    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent" />
    <div className="relative px-10 py-16 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-white/80">Get Started</p>
      <h3 className="mt-4 text-4xl font-bold text-white">
        Bring clarity to your next registration
      </h3>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
        Create an account, invite officials, and keep every milestone transparent for all stakeholders.
      </p>
      
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <a
          href="/auth/register"
          className="group relative overflow-hidden rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-blue-600 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-3xl"
        >
          <span className="relative z-10">Create Account</span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        </a>
        <a
          href="/auth/login"
          className="rounded-xl border-2 border-white/30 bg-transparent px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/10"
        >
          Sign In
        </a>
      </div>
    </div>
  </section>
);

// Main Component
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, isLoading, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isLoading || isDarkMode === null) {
    return <LoadingSpinner />;
  }

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
        <BackgroundElements darkMode={isDarkMode} />
        
        <Navigation
          scrolled={scrolled}
          darkMode={isDarkMode}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          toggleDarkMode={toggleDarkMode}
          darkModeLoading={isLoading}
        />

        <div className="mx-auto max-w-7xl px-6 pb-20 pt-32">
          <HeroSection darkMode={isDarkMode} />
          <HighlightsSection darkMode={isDarkMode} />
          <FeaturesSection darkMode={isDarkMode} />
          <HowItWorksSection darkMode={isDarkMode} />
          <TeamSection darkMode={isDarkMode} />
          <ResourcesSection darkMode={isDarkMode} />
          <CTASection />
        </div>
      </div>
    </Suspense>
  );
}