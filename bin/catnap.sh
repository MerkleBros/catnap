#! /usr/bin/env bash

set -Ceuo pipefail

while true
do
  (cd "$HOME/recurse/catnap/app/" && npm start)
  sleep 1200;
done
