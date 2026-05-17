# Procurement Agent Atlas — Claude Context

## What this is
A standalone React SPA — **Procurement Agent Atlas** — mapping AI agents across the Source-to-Pay pipeline. Built as an independent product from the Intelligent Finance Platform.

- **Live URL**: https://procurement-atlas.vercel.app
- **GitHub**: https://github.com/bcdguru/procurement-atlas
- **Local path**: `C:\Users\Public\procurement-atlas\`
- **Stack**: Vite + React 18 + IBM Carbon Design System v11 (`@carbon/react`)
- **Deploy**: GitHub → Vercel auto-deploy on push to `master`

## Key architecture

### 6 phases (columns) — agentstart palette
| ID | Label | Color |
|----|-------|-------|
| `spend-intel` | Spend Intelligence | #1565C0 |
| `sourcing` | Strategic Sourcing | #1976D2 |
| `contract` | Contract Management | #9B7A00 |
| `p2p` | Requisition & PO | #E06020 |
| `invoice-ap` | Invoice & AP | #C41E3A |
| `srm` | Supplier Relationship | #1B5E20 |

### 5 layers (rows)
`compliance` · `analysis` · `orchestration` · `action` · `integration`

### Key files
```
src/
├── App.jsx                              # Root: renders TopNav + ProcurementAtlasViewer
├── data/
│   └── procAtlas.js                    # All node data, lenses, helpers, benchmarks
└── components/
    ├── TopNav.jsx                       # Standalone nav: ⬡ red branding, 6-phase pills
    ├── ProcurementAtlasViewer.jsx       # 6×5 matrix, lens switcher, benchmark panel
    └── workbenches/
        └── APProcessingWorkbench.jsx   # AP workbench: Invoice Pipeline, Exceptions,
                                        #               Payment Run, Supplier Statements
```

### procAtlas.js — data structure
```js
PROC_PHASES          // 6 phase objects with id, label, sub, color
PROC_PHASE_ORDER     // ['spend-intel', 'sourcing', 'contract', 'p2p', 'invoice-ap', 'srm']
PROC_LAYERS          // 5 layer objects
PROC_CELL_MAP        // { [phaseId]: { [layerId]: { agents[], workbench } } }
PROC_SYSTEM_MAP      // { 'phaseId|layerId': 'SystemName' }
PROC_LAYER_DEFAULTS  // maturity/risk/sigma defaults per layer
PROC_OVERRIDES       // { 'phaseId|layerId': { maturity, risk, sigma } }
PROC_LENSES          // { cpo, coo, cio, ciso, cfo, sigma }
PROC_BENCHMARKS      // Hackett Group world-class vs median for 8 KPIs
```

### Node key/ID format
- Key: `${phaseId}|${layerId}` — e.g. `invoice-ap|compliance`
- Node ID: `PROC.INVOICE_AP.COMPLIANCE`
- Helpers: `getProcNode(phaseId, layerId)`, `buildProcNodeMap()`, `getProcCellAppearance(node, lens)`, `getProcCellText(node, lens)`

### 6 analyst lenses
| Lens | Shows |
|------|-------|
| CPO | Agent names by phase |
| COO | Maturity: Manual / Assisted / Automated / Autonomous |
| CIO | System: SAP Ariba / Icertis / Coupa / SAP MDG / Custom AI |
| CISO | Risk: Low / Medium / High / Critical |
| CFO | Impact: Cost-Saving / Value-Add / Risk-Reducing / Overhead |
| Six Sigma | 2σ–6σ quality score |

### Workbench UX standard (must follow for all future workbenches)
- `position: fixed, inset: 0, zIndex: 8000`
- Header: `background: '#0E2841'`, `borderBottom: '1px solid #393939'`
- Icon: `background: '#156082'`, symbol: `⬡`
- Tab active underline: `2px solid #C41E3A` (AP red, the dominant phase color)
- Body: `background: '#f4f4f4'`
- Carbon `Tag` + `Button` with `Close` icon

### Systems in scope
SAP Ariba · Icertis · Coupa · SAP MM · SAP AP · SAP MDG · Custom AI · Custom

## Key overrides (highest-interest nodes)
| Node | Maturity | Risk | Sigma |
|------|----------|------|-------|
| invoice-ap \| compliance | Manual | Critical | 2σ |
| contract \| compliance | Manual | Critical | 2σ |
| srm \| compliance | Manual | Critical | 2σ |
| invoice-ap \| action | Automated | Low | 5σ |
| spend-intel \| orchestration | Autonomous | Low | 6σ |
| invoice-ap \| integration | Automated | Low | 6σ |

## Adding a new workbench
1. Create `src/components/workbenches/XyzWorkbench.jsx`
2. Add to `PROC_CELL_MAP` in `procAtlas.js`: `workbench: 'Xyz Workbench'`
3. Import and render in `ProcurementAtlasViewer.jsx` via `openWorkbench` state + `handleWorkbench()`

## Git workflow
```bash
cd C:/Users/Public/procurement-atlas
# make changes
git add <files>
git commit -m "description"
git push origin master   # Vercel auto-deploys
```

## Benchmarks (Hackett Group)
| KPI | World Class | Median |
|-----|-------------|--------|
| AP Touchless Rate | 84% | 40% |
| Cost per Invoice | $2.18 | $10.89 |
| PO Cycle Time | 1.2h | 18.4h |
| Spend under Mgmt | 93% | 62% |
| Contract Cycle | 9d | 28d |
| Early Pay Discount | 78% | 31% |
| Supplier Risk Coverage | 91% | 44% |
| DPO | 58d | 42d |
