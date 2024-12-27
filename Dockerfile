FROM node:23-bookworm-slim AS builder

COPY . /app
WORKDIR /app

RUN corepack enable
RUN corepack prepare pnpm@latest --activate
RUN pnpm install --frozen-lockfile

WORKDIR /app/packages/under-construction
RUN pnpm build

WORKDIR /app/packages/tapie
RUN pnpm build

# ===== Under Construction =====

FROM node:23-bookworm-slim AS under-construction

ENV NODE_ENV=production
ENV time_zone=Asia/Seoul

WORKDIR /app
COPY --from=builder /app/packages/under-construction/package.json /app/package.json
COPY --from=builder /app/packages/under-construction/.next /app/.next
COPY --from=builder /app/packages/under-construction/src/public /app/public

RUN corepack enable
RUN corepack prepare pnpm@latest --activate
RUN pnpm install --no-frozen-lockfile

CMD ["pnpm", "start"]

# ===== TAPIE =====

FROM node:23-bookworm-slim AS tapie

ENV NODE_ENV=production
ENV time_zone=Asia/Seoul

WORKDIR /app
COPY --from=builder /app/packages/tapie/package.json /app/package.json
COPY --from=builder /app/packages/tapie/.next /app/.next
COPY --from=builder /app/packages/tapie/src/public /app/public

RUN corepack enable
RUN corepack prepare pnpm@latest --activate
RUN pnpm install --no-frozen-lockfile

CMD ["pnpm", "start"]
