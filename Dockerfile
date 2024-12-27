FROM node:23-bookworm-slim AS builder

COPY . /app
WORKDIR /app

RUN corepack enable
RUN corepack prepare pnpm@latest --activate

WORKDIR /app/packages/under-construction
RUN pnpm install --frozen-lockfile
RUN pnpm build

# ===== Under Construction =====

FROM node:23-bookworm-slim AS under-construction

ARG PORT=3000
EXPOSE $PORT

ENV NODE_ENV=production
ENV time_zone=Asia/Seoul
ENV PORT=$PORT

WORKDIR /app
COPY --from=builder /app/packages/under-construction/package.json /app/package.json
COPY --from=builder /app/packages/under-construction/.next /app/.next

RUN corepack enable
RUN corepack prepare pnpm@latest --activate
RUN pnpm install --no-frozen-lockfile

CMD ["pnpm", "start"]
