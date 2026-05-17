import { useState } from 'react'
import { Theme } from '@carbon/react'
import TopNav from './components/TopNav'
import ProcurementAtlasViewer from './components/ProcurementAtlasViewer'

export default function App() {
  const [activeView, setActiveView] = useState('atlas')

  return (
    <Theme theme="white">
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
        <Theme theme="g100">
          <TopNav activeView={activeView} onViewChange={setActiveView} />
        </Theme>
        <ProcurementAtlasViewer />
      </div>
    </Theme>
  )
}
