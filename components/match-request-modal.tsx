"use client";

import { useState } from "react";

export function MatchRequestModal() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button className="rounded-md bg-slate-900 px-3 py-2 text-white" onClick={() => setOpen(true)}>
        Kirim Permintaan Match Cepat
      </button>
      {open && (
        <div className="mt-3 rounded-lg border p-4 text-sm">
          <p className="mb-2 font-medium">Permintaan pertandingan sedang disiapkan.</p>
          <button className="rounded border px-2 py-1" onClick={() => setOpen(false)}>
            Tutup
          </button>
        </div>
      )}
    </div>
  );
}
