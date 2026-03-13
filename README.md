This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployed on Vercel

URL: https://09modulec.vercel.app/09_module_c
Github: https://github.com/Sahil2004/09_module_c
Here is the supabase connection string: postgresql://postgres.pvcnlrokbijavkoxfsve:[YOUR-PASSWORD]@aws-1-ap-northeast-1.pooler.supabase.com:5432/postgres

Table schema:

create table public.responses (
  id uuid not null default gen_random_uuid (),
  created_at timestamp with time zone not null default now(),
  name text null,
  email text null,
  number text null,
  area text null,
  type text null,
  constraint responses_pkey primary key (id)
) TABLESPACE pg_default;