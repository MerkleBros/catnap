#! /usr/bin/env bash

set -Ceuo pipefail

while true
do
  (cd "$HOME/recurse/catnap/app/" && npm start)
  sleep 1190;
  notify-send "Rest eyes in ten seconds"
  sleep 10;
done
