# Padel Community Platform

Scaffold awal aplikasi full-stack untuk manajemen komunitas padel dengan fokus pada:

- Otentikasi dan RBAC berbasis peran.
- Dashboard pemain dan pengelola venue.
- Booking lapangan.
- Matchmaking pemain.
- Fitur komunitas.
- Sistem loyalitas.

## Struktur Utama

- `app/` untuk halaman berbasis App Router.
- `components/` untuk komponen UI modular.
- `lib/` untuk utilitas lintas fitur (auth context, role helper).
- `api/` untuk logika domain service awal (matchmaking, loyalty).

## Catatan

Implementasi saat ini adalah fondasi awal (UI placeholder + helper domain) untuk mempercepat fase pengembangan berikutnya dengan Supabase, Realtime subscriptions, dan workflow form tervalidasi.
