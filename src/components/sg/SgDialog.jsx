import { X } from 'lucide-react';
import { SgButton } from './SgKit';

/**
 * SgDialog — modal dialog body (no overlay, since it's framed by a Plate).
 *
 * Props
 * - title, body          — strings
 * - confirmLabel, cancelLabel
 * - destructive          — when true, confirm button uses alert color
 */
export function SgDialog({
  title,
  body,
  confirmLabel,
  cancelLabel,
  destructive = false,
}) {
  return (
    <div className="sg-dialog" role="dialog" aria-modal="true" aria-label={title}>
      <div className="sg-dialog__head">
        <h5>{title}</h5>
        <button type="button" className="sg-dialog__close" aria-label="Close">
          <X size={16} />
        </button>
      </div>
      <p>{body}</p>
      <div className="sg-dialog__actions">
        <SgButton variant="outline">{cancelLabel}</SgButton>
        <SgButton variant={destructive ? 'alert' : 'primary'}>{confirmLabel}</SgButton>
      </div>
    </div>
  );
}
