# Test Results

## First test

- Plain, without compression.

```shell
bombardier -c 125 -n 5000000 http://localhost:3000/test
Bombarding http://localhost:3000/test with 5000000 requests using 125 connections
 5000000 / 5000000 [====================================================] 100.00% 11m51s
Done!
Statistics        Avg      Stdev        Max
  Reqs/sec      7023.75     572.58       7833
  Latency       17.79ms     1.62ms   219.78ms
  HTTP codes:
    1xx - 0, 2xx - 5000000, 3xx - 0, 4xx - 0, 5xx - 0
    others - 0
  Throughput:     1.83MB/s
```

## Second Result

- Add compresion
- Use NODE_ENV=production

Bombarding http://localhost:3000/test with 5000000 requests using 125 connections
 5000000 / 5000000 [====================================================] 100.00% 15m17s
Done!
Statistics        Avg      Stdev        Max
  Reqs/sec      5449.45     920.49       6589
  Latency       22.94ms     3.91ms   116.15ms
  HTTP codes:
    1xx - 0, 2xx - 5000000, 3xx - 0, 4xx - 0, 5xx - 0
    others - 0
  Throughput:     1.54MB/s