FROM node:23-bookworm-slim AS base

COPY . /app
WORKDIR /app

ARG PORT=3000
EXPOSE $PORT

ENV NODE_ENV=production
ENV time_zone=Asia/Seoul
ENV PORT=$PORT

RUN corepack enable
RUN corepack prepare pnpm@latest --activate
RUN pnpm install --frozen-lockfile

# ===== Under Construction =====

FROM base AS under-construction

WORKDIR /app/packages/under-construction

RUN pnpm build

CMD ["pnpm", "start"]
