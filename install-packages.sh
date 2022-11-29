#!/bin/bash
set -euo pipefail
export DEBIAN_FRONTEND=noninteractive
apt-get update
apt-get -y upgrade
apt-get -y install git nano -y
apt-get -y install software-properties-common -y
apt-get -y install ffmpeg -y
apt-get -y install exiftool -y
apt-get -y install build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev ffmpeg libwebp-dev libopenjp2-7-dev librsvg2-dev libde265-dev


