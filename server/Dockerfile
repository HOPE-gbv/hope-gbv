# Stage 1: Builder
FROM node:20-slim AS builder

# Install pnpm
RUN npm install -g pnpm

WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install all dependencies (including devDependencies for build and prisma generate)
RUN pnpm install --frozen-lockfile

# Copy the rest of the source code
COPY . .

# Generate Prisma client
# Assumes schema.prisma is in ./prisma/schema.prisma
RUN npx prisma generate

# Build the application
RUN pnpm run build

# Create .env file if it doesn't exist, for environments where it's not mounted
# This is based on the requirement to copy .env from builder.
# If .env is not checked into git, this will create an empty one,
# which might be overwritten by a COPY from a manually created .env in the build context.
# For this task, we assume .env might exist and should be copied.
# If it was created in a previous step by the LLM, that one will be copied.
# If not, this ensures the COPY command later doesn't fail if it's missing.
RUN if [ ! -f .env ]; then echo "DATABASE_URL=file:./prisma/dev.db\nPORT=4000" > .env; fi


# Stage 2: Production
FROM node:20-slim

# Install pnpm
RUN npm install -g pnpm

WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install only production dependencies
RUN pnpm install --frozen-lockfile --prod

# Copy built application from builder stage
COPY --from=builder /app/dist ./dist

# Copy Prisma schema, migrations, and generated client (if not in node_modules)
# Prisma schema and migrations are needed for runtime (e.g. if migrations are run on startup)
COPY --from=builder /app/prisma ./prisma
# The Prisma client is typically in node_modules/.prisma/client, which should be included
# by the pnpm install --prod if prisma client is a direct dependency.
# If prisma client is a devDependency, it might not be there.
# However, prisma generate was run in builder, and its output is usually node_modules/.prisma/client
# Let's ensure it's copied explicitly if it's a common pattern, or rely on node_modules.
# Given the schema output is default, it's within node_modules.
# Copying the entire node_modules from builder (after its pnpm install) might be too large.
# The pnpm install --prod in this stage should correctly install @prisma/client.
# The key is that @prisma/client (the runtime) needs the schema.prisma at runtime.

# Copy the SQLite database file
COPY --from=builder /app/prisma/dev.db ./prisma/dev.db

# Copy the .env file
# This is generally not recommended for production (use environment variables directly)
# but following the subtask requirement.
COPY --from=builder /app/.env ./.env

# Expose the port the application runs on
EXPOSE 4000

# Command to run the application
# Using "node dist/app.js" is direct and avoids needing pnpm in the final image if "start" just calls this.
# If "pnpm start" does more, then pnpm is needed. The prompt installed pnpm, so using it is fine.
CMD ["pnpm", "start"]
