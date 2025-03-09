FROM node:23-bookworm-slim AS builder

COPY . /app
WORKDIR /app

ENV time_zone=Asia/Seoul
ENV NODE_ENV=production

RUN corepack enable
RUN corepack prepare pnpm --activate
RUN pnpm install --frozen-lockfile

# ===== Under Construction =====

FROM builder AS under-construction

WORKDIR /app/packages/under-construction

RUN pnpm build

CMD ["pnpm", "start"]

# ===== TAPIE =====

FROM builder AS tapie

WORKDIR /app/packages/tapie

RUN pnpm build

CMD ["pnpm", "start"]

# ===== AUTH =====

FROM builder AS auth

WORKDIR /app/packages/auth

ENV NEXT_PUBLIC_API_URL=https://api.tapie.kr

RUN pnpm build

CMD ["pnpm", "start"]
