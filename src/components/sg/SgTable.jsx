import { Avatar, Check, DatePill, SgChip } from './SgKit';

/**
 * SgTable — the "Modèles d'entretien" data table.
 *
 * Props
 * - rows: Array<{ id, title, etab, participant, initials, photo, state, stateLabel, date, owner, selected? }>
 *
 * Columns are fixed (matches the Figma frame); only rows are data-driven.
 */
export function SgTable({ rows }) {
  return (
    <table className="sg-table">
      <thead>
        <tr className="sg-table__head">
          <th style={{ width: 24 }}><Check /></th>
          <th>Titre</th>
          <th>Établissement</th>
          <th>Participant</th>
          <th>État</th>
          <th>Date entretien <span className="sg-table__sort">↑</span></th>
          <th>Responsable</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.id} className={r.selected ? 'sg-table__row sg-table__row--selected' : 'sg-table__row'}>
            <td><Check checked={!!r.selected} /></td>
            <td>{r.title}</td>
            <td>{r.etab}</td>
            <td><Avatar initials={r.initials} photo={!!r.photo} />{r.participant}</td>
            <td><SgChip tone={r.state}>{r.stateLabel}</SgChip></td>
            <td><DatePill>{r.date}</DatePill></td>
            <td>{r.owner}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
