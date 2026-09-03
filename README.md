# DrawCMS

An open-source editor for **animated technical diagrams**, built with React Flow and GSAP. Import an existing diagram, explain how it changes over time with motion, and export the result — all local-first, no account required.

This is the **whole product as one app**: the editor engine and the web application live together in a single Next.js project. Clone it, install it, run it — that's the entire setup.

## Quick Start

```bash
git clone https://github.com/dimasna/drawcms-app.git drawcms-app
cd drawcms-app
npm install
npm run dev
```

Open http://localhost:3002 — the app is the editor itself and redirects there from every route.

## Features

- **100+ diagram elements** — basic shapes plus semantic architecture, sequence, boundary, lifecycle, data-flow, annotation, UML, ER, and BPMN groups
- **Cloud architecture icons** — AWS, GCP, Azure, and infrastructure icons (Docker, Kubernetes, Redis, etc.)
- **Container nodes** — groups, regions, security/trust boundaries, processing stages, sequence frames, swimlanes, and BPMN pools with drag-in/out child support
- **Presentation steps** — select one or more canvas items, right-click, and add a titled, described story step
- **Motion presets** — configure node and connector animation independently in the selected item's Motion tab
- **Live presentation player** — preview from the Steps panel and follow each step's active nodes and connectors with an orange flow packet
- **Focused steps panel** — open Steps beside the fit control to edit scenes and arrange step order without shrinking the canvas vertically
- **Open and import** — `.drawcms` files plus draw.io (`.drawio`) and Excalidraw (`.excalidraw`) imports with a non-blocking import report
- **Local-first** — autosave to browser storage plus explicit save; no account needed
- **Export** — PNG, animated GIF, and the portable `.drawcms` document format
- **Accessible** — keyboard-complete chrome, named controls, and `prefers-reduced-motion` support
- **Extensible** — versioned plugin/host API and persistence adapters for custom storage backends
- **Agent-ready (experimental)** — WebMCP tools let a browser agent read, build, incrementally edit, and preview animated diagrams without simulating pointer input
- **Undo/Redo** — full history with keyboard shortcuts
- **Clipboard** — cut, copy, paste with ID remapping

## Project Structure

One app, no package publishing, no workspace dance:

```
src/
  app/       Next.js application shell — layout, editor route, theme
             toggle, local persistence wiring (the "host" layer)
  editor/    The editor engine — canvas, 100+ element catalog, document
             format, motion, presentation, persistence boundary, WebMCP
             tools, templates, and the test suite
  public/    Static assets (cloud provider icons, GIF worker)
```

`src/app` wires the engine into a full product: autosave with a save-status
pill, theming, and the "Made with DrawCMS" badge. Both layers talk through the
editor's public API (`src/editor/index.ts`) and the persistence boundary
(DM-014), so you can swap storage backends without touching canvas code.

## Tech Stack

- [React 19](https://react.dev)
- [React Flow v12](https://reactflow.dev) — node-based diagram canvas
- [GSAP](https://gsap.com) — animation engine
- [Next.js 16](https://nextjs.org) — app framework (dev/build use webpack deliberately)
- [Tailwind CSS v4](https://tailwindcss.com) — styling
- [Vitest](https://vitest.dev) — test runner

## Development

```bash
npm run dev        # editor on :3002 with hot reload
npm run ci         # lint → format → typecheck → test (360 tests) → build
```

## Documentation

Guides and release notes live on the docs site:
[docs.drawcms.com](https://docs.drawcms.com/) — quick start, core
concepts, self-hosting, plugin & host API, WebMCP agent authoring, document
format, and browser support.

## Contributing and Security

Contributions are welcome after accepting the [Contributor License Agreement](CLA.md).
Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request. Please report
security issues privately using the process in [SECURITY.md](SECURITY.md).

## License

DrawCMS is open-source software licensed under
[GNU AGPL v3.0 only](LICENSE). If you modify it and make that version available
to users over a network, the AGPL generally requires you to offer those users
the corresponding source code under the AGPL.

The AGPL does not prohibit a compliant competing hosted service. The DrawCMS
name and branding are covered separately by [TRADEMARKS.md](TRADEMARKS.md).
Organizations that cannot use the AGPL may request a separate commercial
license; see [COMMERCIAL-LICENSE.md](COMMERCIAL-LICENSE.md). No commercial rights
are granted unless a separate agreement is signed.
