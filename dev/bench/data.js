window.BENCHMARK_DATA = {
  "lastUpdate": 1651796481243,
  "repoUrl": "https://github.com/3for/halo2",
  "entries": {
    "halo2 Benchmark": [
      {
        "commit": {
          "author": {
            "email": "kris@nutty.land",
            "name": "Kris Nuttycombe",
            "username": "nuttycom"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1791e693bbca71285d4b09bc441082b9cf9d7253",
          "message": "Merge branch 'main' into main",
          "timestamp": "2022-05-05T17:07:57-06:00",
          "tree_id": "5fec2be1e93eadf09bce1fc97c6046994fd7c034",
          "url": "https://github.com/3for/halo2/commit/1791e693bbca71285d4b09bc441082b9cf9d7253"
        },
        "date": 1651796476391,
        "tool": "cargo",
        "benches": [
          {
            "name": "WIDTH = 3, RATE = 2-prover",
            "value": 75327568,
            "range": "± 377732",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 3, RATE = 2-verifier",
            "value": 3367802,
            "range": "± 82652",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-prover",
            "value": 175462710,
            "range": "± 4692932",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-verifier",
            "value": 4968217,
            "range": "± 48804",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-prover",
            "value": 241347413,
            "range": "± 1133984",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-verifier",
            "value": 5998949,
            "range": "± 25415",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon/2-to-1",
            "value": 36981,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/510",
            "value": 141121,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/510",
            "value": 153340,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/510",
            "value": 249354,
            "range": "± 849",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/510",
            "value": 249301,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/520",
            "value": 144182,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/520",
            "value": 156393,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/520",
            "value": 252073,
            "range": "± 204",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/520",
            "value": 252268,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/1086",
            "value": 301382,
            "range": "± 1517",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/1086",
            "value": 313732,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/1086",
            "value": 409446,
            "range": "± 447",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/1086",
            "value": 409667,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "double-and-add",
            "value": 3111502,
            "range": "± 578",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/14",
            "value": 5865390,
            "range": "± 1485",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/15",
            "value": 10127407,
            "range": "± 6152",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/16",
            "value": 22510631,
            "range": "± 74339",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/17",
            "value": 40486076,
            "range": "± 180791",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/18",
            "value": 80722014,
            "range": "± 265302",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/3",
            "value": 7432,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/4",
            "value": 8704,
            "range": "± 666",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/5",
            "value": 15660,
            "range": "± 334",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/6",
            "value": 19415,
            "range": "± 332",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/7",
            "value": 27946,
            "range": "± 204",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/8",
            "value": 47876,
            "range": "± 856",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/9",
            "value": 96795,
            "range": "± 7497",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/10",
            "value": 188257,
            "range": "± 9698",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/11",
            "value": 386480,
            "range": "± 23925",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/12",
            "value": 810534,
            "range": "± 24127",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/13",
            "value": 1716848,
            "range": "± 53099",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/14",
            "value": 3700359,
            "range": "± 27640",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/15",
            "value": 8137516,
            "range": "± 78832",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/16",
            "value": 17838707,
            "range": "± 179523",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/17",
            "value": 38770168,
            "range": "± 320216",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/18",
            "value": 90032264,
            "range": "± 1071290",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Pallas",
            "value": 28447,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Vesta",
            "value": 28566,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/8",
            "value": 152630130,
            "range": "± 429038",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/9",
            "value": 327657628,
            "range": "± 5162872",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/10",
            "value": 705787913,
            "range": "± 2557603",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/11",
            "value": 1518468554,
            "range": "± 3588712",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/12",
            "value": 3254209597,
            "range": "± 8508627",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/13",
            "value": 6949699256,
            "range": "± 9742431",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/14",
            "value": 14800927767,
            "range": "± 20219315",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/15",
            "value": 31477754638,
            "range": "± 55347342",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/16",
            "value": 66527444171,
            "range": "± 65394013",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/8",
            "value": 95854862,
            "range": "± 1066667",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/9",
            "value": 165543792,
            "range": "± 1323640",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/10",
            "value": 293252799,
            "range": "± 3247307",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/11",
            "value": 538017490,
            "range": "± 5056072",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/12",
            "value": 1003761870,
            "range": "± 2310072",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/13",
            "value": 1896804336,
            "range": "± 64316584",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/14",
            "value": 3607809624,
            "range": "± 14206725",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/15",
            "value": 6971983486,
            "range": "± 17769183",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/16",
            "value": 13413148097,
            "range": "± 23550969",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/8",
            "value": 5171825,
            "range": "± 76887",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/9",
            "value": 7991613,
            "range": "± 395584",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/10",
            "value": 13060602,
            "range": "± 136728",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/11",
            "value": 22080018,
            "range": "± 101667",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/12",
            "value": 37705302,
            "range": "± 302529",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/13",
            "value": 67134545,
            "range": "± 225163",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/14",
            "value": 120512603,
            "range": "± 807931",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/15",
            "value": 222184999,
            "range": "± 7172894",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/16",
            "value": 401693438,
            "range": "± 4108843",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}