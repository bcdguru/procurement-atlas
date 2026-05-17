import {
  Header, HeaderName, HeaderGlobalBar, HeaderGlobalAction,
  HeaderNavigation, HeaderMenuItem,
} from '@carbon/react'
import { Notification, UserAvatar, Activity } from '@carbon/icons-react'

const C = { navy: '#0E2841', border: '#1a3a58', muted: '#8d9fb0' }

const PHASES = [
  { id: 'spend-intel',  label: 'Spend Intel',  color: '#1565C0' },
  { id: 'sourcing',     label: 'Sourcing',      color: '#1976D2' },
  { id: 'contract',     label: 'Contract',      color: '#9B7A00' },
  { id: 'p2p',          label: 'Req & PO',      color: '#E06020' },
  { id: 'invoice-ap',   label: 'Invoice & AP',  color: '#C41E3A' },
  { id: 'srm',          label: 'SRM',           color: '#1B5E20' },
]

export default function TopNav({ activeView, onViewChange }) {
  return (
    <Header aria-label="Procurement Agent Atlas" style={{ background: C.navy, borderBottom: `1px solid ${C.border}` }}>
      <HeaderName href="#" prefix="">
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{
            width: 26, height: 26, borderRadius: 6,
            background: '#C41E3A',
            display: 'flex', alignItems: 'center',
            justifyContent: 'center', fontSize: 14, flexShrink: 0,
          }}>⬡</span>
          <span style={{ fontWeight: 700, fontSize: 14, color: '#f1f5f9', letterSpacing: '-0.01em' }}>
            Procurement Agent Atlas
          </span>
          <span style={{ fontSize: 11, color: C.muted, fontWeight: 400 }}>· Source-to-Pay Intelligence</span>
        </span>
      </HeaderName>

      <HeaderNavigation aria-label="Phases">
        {PHASES.map(phase => (
          <HeaderMenuItem
            key={phase.id}
            onClick={() => {}}
            style={{ cursor: 'default' }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <span style={{
                width: 7, height: 7, borderRadius: '50%',
                background: phase.color, flexShrink: 0,
              }} />
              <span style={{ fontSize: 12, color: '#c6c6c6' }}>{phase.label}</span>
            </span>
          </HeaderMenuItem>
        ))}
      </HeaderNavigation>

      <HeaderGlobalBar>
        <HeaderGlobalAction aria-label="Activity" tooltipAlignment="end">
          <Activity size={20} />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="Notifications" tooltipAlignment="end">
          <Notification size={20} />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="User" tooltipAlignment="end">
          <UserAvatar size={20} />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </Header>
  )
}
