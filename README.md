# rust-expo-wasm
POC of loading a Rust-built WASM file into an Expo.io project 

## It does not work
Yet.

## Problem list
* Package produced by wasm-pack does not have a "main" entry in the package.json
* Main js file will try to load the NodeJs "util" module. Workaround is to do "yarn add text-encoding", change the main .js file to require "text-encoding" instead of "util" to get the TextDecoder class.
* Wasm file imported fails immediately if above is rectified.
