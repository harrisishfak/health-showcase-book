import { CalendarDays, ClipboardList, ChartNoAxesCombined, UsersRound, BrainCircuit, FolderHeart } from "lucide-react";

export const calendlyUrl = "https://calendly.com/harrishfaq/30min?hide_event_type_details=1&hide_gdpr_banner=1";

export function pageHead(title: string, description: string) {
  return { meta: [
    { title: `${title} | CareVirt` },
    { name: "description", content: description },
    { property: "og:title", content: `${title} | CareVirt` },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] };
}

export const features = [
  { icon: FolderHeart, title: "One individual. One complete picture.", text: "Bring intake, care history, and essential information together. Give every team member the context to provide more personal care.", short: "Individual profiles" },
  { icon: CalendarDays, title: "Less scheduling. More care.", text: "Coordinate sessions, manage scheduling conflicts, and keep your team on the same page — without the back-and-forth.", short: "Session scheduling" },
  { icon: ClipboardList, title: "Care plans that stay in motion.", text: "Turn individualized education programs (IEPs) into shared, trackable goals. Connect every session to the progress that matters.", short: "IEPs & care plans" },
  { icon: BrainCircuit, title: "A clearer next step, with AI.", text: "Bloomy AI supports structured assessments and highlights progress patterns, helping your team make informed care decisions.", short: "AI-assisted assessments" },
  { icon: UsersRound, title: "A connected, accountable team.", text: "Keep roles, session notes, and responsibilities visible. Preserve care continuity when people or schedules change.", short: "Team coordination" },
  { icon: ChartNoAxesCombined, title: "Progress you can see and share.", text: "Bring goals and session updates into clear reports. Help families understand progress and give your center a more complete view.", short: "Progress & reporting" },
];