FROM ubuntu:20.04 AS build

ENV MONERO_VERSION=0.18.1.2 MONERO_SHA256=7d51e7072351f65d0c7909e745827cfd3b00abe5e7c4cc4c104a3c9b526da07e

RUN apt-get update && apt-get install -y curl bzip2

WORKDIR /root

RUN curl https://dlsrc.getmonero.org/cli/monero-linux-x64-v$MONERO_VERSION.tar.bz2 -O &&\
  echo "$MONERO_SHA256  monero-linux-x64-v$MONERO_VERSION.tar.bz2" | sha256sum -c - &&\
  tar -xvf monero-linux-x64-v$MONERO_VERSION.tar.bz2 &&\
  rm monero-linux-x64-v$MONERO_VERSION.tar.bz2 &&\
  cp ./monero-x86_64-linux-gnu-v$MONERO_VERSION/monerod . &&\
  cp ./monero-x86_64-linux-gnu-v$MONERO_VERSION/monero-wallet-rpc . &&\
  rm -r monero-x86_64-linux-gnu-v$MONERO_VERSION

FROM ubuntu:20.04

RUN useradd -ms /bin/bash monero && mkdir -p /home/monero/.bitmonero && chown -R monero:monero /home/monero/.bitmonero
USER monero
WORKDIR /home/monero

COPY --chown=monero:monero --from=build /root/monerod /home/monero/monerod
COPY --chown=monero:monero --from=build /root/monero-wallet-rpc /home/monero/monero-wallet-rpc

EXPOSE 38081 38080