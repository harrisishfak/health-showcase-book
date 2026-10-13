<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Website architecture
- Keep shared site navigation and footer in the root shell, with each content page in its own TanStack leaf route; this preserves consistent navigation and distinct page metadata.
- Keep reusable brand styles in the global semantic design system and shared page sections in components; this makes all pages follow the same visual language.
- Keep business content and page metadata helpers browser-safe and use the external Calendly embed for bookings; the brochure site does not need an internal booking backend.
