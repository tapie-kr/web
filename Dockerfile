FROM node:23-bookworm-slim AS builder

COPY . /app
WORKDIR /app

ENV time_zone=Asia/Seoul

RUN corepack enable
RUN corepack prepare pnpm --activate
RUN pnpm install --frozen-lockfile

# ===== Under Construction =====

FROM builder AS under-construction

ENV NODE_ENV=production

WORKDIR /app/packages/under-construction

RUN pnpm build

CMD ["pnpm", "start"]

# ===== TAPIE =====

FROM builder AS tapie

ENV NODE_ENV=production

WORKDIR /app/packages/tapie

RUN pnpm build

CMD ["pnpm", "start"]
