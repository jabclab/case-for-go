#!/usr/bin/env bash
readonly arr=(hello tech wednesday)

for x in "${arr[@]}"; do
  echo "$x"
done

for x in "${arr[@]}"; {
  echo "$x"
}
