import {
  parseSVG,
  makeAbsolute,
} from 'svg-path-parser'

const svg = parseSVG('M2163.5 567 2193 383 2163.5 190 2009.5 67 1838 27.5 1661 27.5 1443 89 1272.5 114.5 1052.5 114.5 871 67 671.5 27.5 454 0.5 262 27.5 116.5 145 24 307.5 0.5 509 46 700.5 137.5 858.5 262 1000.5 390 1156.5 412 1329.5 349 1478 204.5 1650.5 70.5 1805 0.5 1977.5 0.5 2175.5 94 2329.5 283 2384 489.5 2384 699 2329.5 899.5 2329.5 1075 2329.5 1272.5 2384 1443 2384 1635 2329.5 1816.5 2361 1980 2453.5 2193 2488.5 2354 2384 2394 2209 2298 2041.5 2105 2005 1927 2041.5 1716.5 2075 1535.5 2041.5 1361 1977.5 1153 1947.5 974 2005 784 2075 588.5 2041.5 454 1901.5 557.5 1711 743.5 1650.5 934.5 1650.5 1117 1687.5 1305.5 1711 1511 1711 1716.5 1711 1897.5 1687.5 2078.5 1650.5 2220.5 1506 2298 1329.5 2298 1156.5 2275 973.5 2220.5 796.5 2032 727.5 1838 820 1748.5 973.5 1669 1136 1556.5 1305.5 1389.5 1379 1176.5 1404 974 1379 784 1329.5 671.5 1179 588.5 1009.5 557.5 796.5 518.5 603.5')
export default makeAbsolute(svg)
