#!/usr/bin/env bash

get_repo_dir() {
  SOURCE="${BASH_SOURCE[0]}"
  SOURCE_DIR=$(dirname "$SOURCE")
  SOURCE_DIR=$(cd -P ${SOURCE_DIR}/.. && pwd)
  echo ${SOURCE_DIR}
}

REPO_DIR=$(get_repo_dir)

NODE_VERSION=$(node --version)
NODE_VERSION=${NODE_VERSION}
NVMRC_VERSION=$(cat "$REPO_DIR/.nvmrc")

if [[ "$NODE_VERSION" != "$NVMRC_VERSION" ]]; then
  echo ".nvmrc expects $NVMRC_VERSION but node reports $NODE_VERSION"
  echo
  exit 1
fi;
