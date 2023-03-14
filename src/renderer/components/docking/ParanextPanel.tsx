import { ReactNode } from 'react';
import './ParanextPanel.css';

/**
 * Used for possible styling on every panel in Paranext
 * @param children The children of the panel (usually supplied from an extension)
 */
function ParanextPanel({ children }: { children: ReactNode }) {
  return <div className="paranextPanel">{children}</div>;
}

export default ParanextPanel;
