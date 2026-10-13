import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function BrandMark() {
  return <svg className="brand-mark" viewBox="0 0 40 42" fill="none" aria-hidden="true"><path d="M26 4C11 2 2 11 2 21s9 19 24 17V28c-8 2-13-1-13-7s5-9 13-7V4Z" fill="currentColor"/><path d="M29 10h9v9h-9zM29 23h9v9h-9z" fill="currentColor"/></svg>;
}
export function Brand() { return <Link to="/" className="brand" aria-label="CareVirt home"><BrandMark/>CareVirt</Link>; }
const links = [{ to: "/platform", label: "Platform" }, { to: "/who-we-serve", label: "Who we serve" }, { to: "/about", label: "Why CareVirt" }, { to: "/pricing", label: "Pricing" }] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: s => s.location.pathname });
  useEffect(() => { setOpen(false); }, [path]);
  return <div className="wrap"><header className="site-header"><Brand/><nav className="desktop-nav" aria-label="Main navigation">{links.map(l => <Link key={l.to} to={l.to} className="nav-link" activeProps={{ "data-status": "active" }}>{l.label}</Link>)}</nav><div className="header-actions"><a className="nav-link header-login" href="https://app.carevirt.com/">Log in <span aria-hidden="true">↗</span></a><Button asChild><Link to="/book-demo">Book a demo <ArrowUpRight/></Link></Button><Button className="mobile-menu-trigger" variant="ghost" size="icon" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</Button></div>{open && <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">{links.map(l => <Link key={l.to} to={l.to} className="nav-link">{l.label}</Link>)}<a href="https://app.carevirt.com/" className="nav-link">Log in ↗</a></nav>}</header></div>;
}
export function SiteFooter() {
 return <footer className="site-footer"><div className="wrap"><div className="footer-top"><div className="footer-brand"><Brand/><p>Care management made simpler.<br/>Supporting providers in Ghana, Pakistan, Bangladesh, and South Africa.</p></div><div className="footer-column"><h4>Explore</h4><Link to="/platform">Our platform</Link><Link to="/who-we-serve">Who we serve</Link><Link to="/pricing">Pricing</Link></div><div className="footer-column"><h4>CareVirt</h4><Link to="/about">Why CareVirt</Link><Link to="/book-demo">Book a demo</Link><a href="https://app.carevirt.com/">Provider login ↗</a></div><div className="footer-column"><h4>Let’s talk</h4><a href="mailto:sales@carevirt.com">sales@carevirt.com</a><a href="tel:+923477789945">+92 347 778 9945</a><span>Lahore, Pakistan</span></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} CareVirt. All rights reserved.</span><span>Purpose-built for autism & IDD care.</span></div></div></footer>;
}