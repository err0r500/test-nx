# this file must be built from the monorepo's root :
# docker build -f ./apps/svc3/Dockerfile -t svc3 .
#

FROM node:16 as builder
WORKDIR /usr/src/app
RUN npm i -g nx
COPY . .
RUN npm ci --ignore-scripts
RUN cd ./apps/svc3 && npm ci --only=production --ignore-scripts
RUN nx build svc3 --prod

# we want to remove all nx specific dependencies
RUN rm -rf ./node_modules && npm ci --only=production --ignore-scripts

FROM gcr.io/distroless/nodejs:16
USER 1000
COPY --from=builder /usr/src/app/node_modules ./node_modules/
COPY --from=builder /usr/src/app/dist/apps/svc3 ./
CMD ["./main.js"]
