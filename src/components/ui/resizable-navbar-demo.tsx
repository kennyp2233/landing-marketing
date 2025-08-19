"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { useTheme } from "@/providers/ThemeProvider";

export default function NavbarDemo() {
  const { isDark } = useTheme();
  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody isDark={isDark}>
          <NavbarLogo isDark={isDark} />
          <NavItems items={navItems} isDark={isDark} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary" isDark={isDark}>Login</NavbarButton>
            <NavbarButton variant="primary" isDark={isDark}>Book a call</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav isDark={isDark}>
          <MobileNavHeader>
            <NavbarLogo isDark={isDark} />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              isDark={isDark}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            isDark={isDark}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`relative ${isDark ? "text-gray-300" : "text-gray-600"}`}
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="secondary"
                className="w-full"
                isDark={isDark}
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
                isDark={isDark}
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      <DummyContent />

      {/* Navbar */}
    </div>
  );
}

const DummyContent = () => {
  const { isDark } = useTheme();
  
  return (
    <div className="container mx-auto p-8 pt-24">
      <h1 className={`mb-4 text-center text-3xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
        Check the navbar at the top of the container
      </h1>
      <p className={`mb-10 text-center text-sm ${isDark ? "text-gray-400" : "text-zinc-500"}`}>
        For demo purpose we have kept the position as{" "}
        <span className="font-medium">Fixed</span>. Keep in mind that this
        component is <span className="font-medium">fixed</span> and will not
        move when scrolling.
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {[
          {
            id: 1,
            title: "The",
            width: "md:col-span-1",
            height: "h-60",
            bg: isDark ? "bg-neutral-800" : "bg-neutral-100",
          },
          {
            id: 2,
            title: "First",
            width: "md:col-span-2",
            height: "h-60",
            bg: isDark ? "bg-neutral-800" : "bg-neutral-100",
          },
          {
            id: 3,
            title: "Rule",
            width: "md:col-span-1",
            height: "h-60",
            bg: isDark ? "bg-neutral-800" : "bg-neutral-100",
          },
          {
            id: 4,
            title: "Of",
            width: "md:col-span-3",
            height: "h-60",
            bg: isDark ? "bg-neutral-800" : "bg-neutral-100",
          },
          {
            id: 5,
            title: "F",
            width: "md:col-span-1",
            height: "h-60",
            bg: isDark ? "bg-neutral-800" : "bg-neutral-100",
          },
          {
            id: 6,
            title: "Club",
            width: "md:col-span-2",
            height: "h-60",
            bg: isDark ? "bg-neutral-800" : "bg-neutral-100",
          },
          {
            id: 7,
            title: "Is",
            width: "md:col-span-2",
            height: "h-60",
            bg: isDark ? "bg-neutral-800" : "bg-neutral-100",
          },
          {
            id: 8,
            title: "You",
            width: "md:col-span-1",
            height: "h-60",
            bg: isDark ? "bg-neutral-800" : "bg-neutral-100",
          },
          {
            id: 9,
            title: "Do NOT TALK about",
            width: "md:col-span-2",
            height: "h-60",
            bg: isDark ? "bg-neutral-800" : "bg-neutral-100",
          },
          {
            id: 10,
            title: "F Club",
            width: "md:col-span-1",
            height: "h-60",
            bg: isDark ? "bg-neutral-800" : "bg-neutral-100",
          },
        ].map((box) => (
          <div
            key={box.id}
            className={`${box.width} ${box.height} ${box.bg} flex items-center justify-center rounded-lg p-4 shadow-sm`}
          >
            <h2 className={`text-xl font-medium ${isDark ? "text-white" : "text-gray-900"}`}>{box.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};
