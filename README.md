# Simple Node (Express.js) Benchmark

## Overview

Simple single process Express.js benchmark.

## How to Run

To run:

`npm start`

To test:

`bombardier -c 125 -n 5000000 http://localhost:3000/test`

This will test the endpoint `/test` against 5,000,000 requests using 125 connections.

## License

MIT License
