FROM golang:1.20-alpine as go

WORKDIR /app
COPY . .

RUN go mod download
RUN CGO_ENABLED=0 GOOS=linux go build -a -ldflags '-s -w' -o main

FROM alpine:3

RUN apk add --no-cache tzdata
ENV TZ=Asia/Seoul
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime \
 && echo $TZ > /etc/timezone

WORKDIR /app/bin
COPY --from=go /app/main .
RUN chmod +x main

ENTRYPOINT ["./main"]
