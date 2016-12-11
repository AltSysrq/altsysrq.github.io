#! /usr/bin/env bash

cd "`dirname "$0"`"
CARGO_TARGET_DIR="`pwd`/rdtemp"
export CARGO_TARGET_DIR

rm -rf rustdoc rdtemp
for project in supercow; do
    (cd ../../rs/$project && cargo doc)
done

mv rdtemp/doc rustdoc
rm -rf rdtemp
