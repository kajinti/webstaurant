/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 125.0, "minX": 0.0, "maxY": 1004.0, "series": [{"data": [[0.0, 125.0], [0.1, 125.0], [0.2, 125.0], [0.3, 125.0], [0.4, 125.0], [0.5, 125.0], [0.6, 125.0], [0.7, 125.0], [0.8, 125.0], [0.9, 125.0], [1.0, 125.0], [1.1, 125.0], [1.2, 171.0], [1.3, 171.0], [1.4, 171.0], [1.5, 171.0], [1.6, 171.0], [1.7, 171.0], [1.8, 171.0], [1.9, 171.0], [2.0, 171.0], [2.1, 171.0], [2.2, 171.0], [2.3, 171.0], [2.4, 172.0], [2.5, 172.0], [2.6, 172.0], [2.7, 172.0], [2.8, 172.0], [2.9, 172.0], [3.0, 172.0], [3.1, 172.0], [3.2, 172.0], [3.3, 172.0], [3.4, 172.0], [3.5, 172.0], [3.6, 172.0], [3.7, 172.0], [3.8, 172.0], [3.9, 172.0], [4.0, 172.0], [4.1, 172.0], [4.2, 172.0], [4.3, 172.0], [4.4, 172.0], [4.5, 172.0], [4.6, 172.0], [4.7, 172.0], [4.8, 177.0], [4.9, 177.0], [5.0, 177.0], [5.1, 177.0], [5.2, 177.0], [5.3, 177.0], [5.4, 177.0], [5.5, 177.0], [5.6, 177.0], [5.7, 177.0], [5.8, 177.0], [5.9, 177.0], [6.0, 194.0], [6.1, 194.0], [6.2, 194.0], [6.3, 194.0], [6.4, 194.0], [6.5, 194.0], [6.6, 194.0], [6.7, 194.0], [6.8, 194.0], [6.9, 194.0], [7.0, 194.0], [7.1, 194.0], [7.2, 198.0], [7.3, 198.0], [7.4, 198.0], [7.5, 198.0], [7.6, 198.0], [7.7, 198.0], [7.8, 198.0], [7.9, 198.0], [8.0, 198.0], [8.1, 198.0], [8.2, 198.0], [8.3, 198.0], [8.4, 202.0], [8.5, 202.0], [8.6, 202.0], [8.7, 202.0], [8.8, 202.0], [8.9, 202.0], [9.0, 202.0], [9.1, 202.0], [9.2, 202.0], [9.3, 202.0], [9.4, 202.0], [9.5, 202.0], [9.6, 206.0], [9.7, 206.0], [9.8, 206.0], [9.9, 206.0], [10.0, 206.0], [10.1, 206.0], [10.2, 206.0], [10.3, 206.0], [10.4, 206.0], [10.5, 206.0], [10.6, 206.0], [10.7, 206.0], [10.8, 210.0], [10.9, 210.0], [11.0, 210.0], [11.1, 210.0], [11.2, 210.0], [11.3, 210.0], [11.4, 210.0], [11.5, 210.0], [11.6, 210.0], [11.7, 210.0], [11.8, 210.0], [11.9, 210.0], [12.0, 214.0], [12.1, 214.0], [12.2, 214.0], [12.3, 214.0], [12.4, 214.0], [12.5, 214.0], [12.6, 214.0], [12.7, 214.0], [12.8, 214.0], [12.9, 214.0], [13.0, 214.0], [13.1, 228.0], [13.2, 228.0], [13.3, 228.0], [13.4, 228.0], [13.5, 228.0], [13.6, 228.0], [13.7, 228.0], [13.8, 228.0], [13.9, 228.0], [14.0, 228.0], [14.1, 228.0], [14.2, 228.0], [14.3, 230.0], [14.4, 230.0], [14.5, 230.0], [14.6, 230.0], [14.7, 230.0], [14.8, 230.0], [14.9, 230.0], [15.0, 230.0], [15.1, 230.0], [15.2, 230.0], [15.3, 230.0], [15.4, 230.0], [15.5, 244.0], [15.6, 244.0], [15.7, 244.0], [15.8, 244.0], [15.9, 244.0], [16.0, 244.0], [16.1, 244.0], [16.2, 244.0], [16.3, 244.0], [16.4, 244.0], [16.5, 244.0], [16.6, 244.0], [16.7, 259.0], [16.8, 259.0], [16.9, 259.0], [17.0, 259.0], [17.1, 259.0], [17.2, 259.0], [17.3, 259.0], [17.4, 259.0], [17.5, 259.0], [17.6, 259.0], [17.7, 259.0], [17.8, 259.0], [17.9, 260.0], [18.0, 260.0], [18.1, 260.0], [18.2, 260.0], [18.3, 260.0], [18.4, 260.0], [18.5, 260.0], [18.6, 260.0], [18.7, 260.0], [18.8, 260.0], [18.9, 260.0], [19.0, 260.0], [19.1, 266.0], [19.2, 266.0], [19.3, 266.0], [19.4, 266.0], [19.5, 266.0], [19.6, 266.0], [19.7, 266.0], [19.8, 266.0], [19.9, 266.0], [20.0, 266.0], [20.1, 266.0], [20.2, 266.0], [20.3, 270.0], [20.4, 270.0], [20.5, 270.0], [20.6, 270.0], [20.7, 270.0], [20.8, 270.0], [20.9, 270.0], [21.0, 270.0], [21.1, 270.0], [21.2, 270.0], [21.3, 270.0], [21.4, 270.0], [21.5, 272.0], [21.6, 272.0], [21.7, 272.0], [21.8, 272.0], [21.9, 272.0], [22.0, 272.0], [22.1, 272.0], [22.2, 272.0], [22.3, 272.0], [22.4, 272.0], [22.5, 272.0], [22.6, 272.0], [22.7, 272.0], [22.8, 272.0], [22.9, 272.0], [23.0, 272.0], [23.1, 272.0], [23.2, 272.0], [23.3, 272.0], [23.4, 272.0], [23.5, 272.0], [23.6, 272.0], [23.7, 272.0], [23.8, 272.0], [23.9, 273.0], [24.0, 273.0], [24.1, 273.0], [24.2, 273.0], [24.3, 273.0], [24.4, 273.0], [24.5, 273.0], [24.6, 273.0], [24.7, 273.0], [24.8, 273.0], [24.9, 273.0], [25.0, 273.0], [25.1, 273.0], [25.2, 273.0], [25.3, 273.0], [25.4, 273.0], [25.5, 273.0], [25.6, 273.0], [25.7, 273.0], [25.8, 273.0], [25.9, 273.0], [26.0, 273.0], [26.1, 273.0], [26.2, 276.0], [26.3, 276.0], [26.4, 276.0], [26.5, 276.0], [26.6, 276.0], [26.7, 276.0], [26.8, 276.0], [26.9, 276.0], [27.0, 276.0], [27.1, 276.0], [27.2, 276.0], [27.3, 276.0], [27.4, 281.0], [27.5, 281.0], [27.6, 281.0], [27.7, 281.0], [27.8, 281.0], [27.9, 281.0], [28.0, 281.0], [28.1, 281.0], [28.2, 281.0], [28.3, 281.0], [28.4, 281.0], [28.5, 281.0], [28.6, 282.0], [28.7, 282.0], [28.8, 282.0], [28.9, 282.0], [29.0, 282.0], [29.1, 282.0], [29.2, 282.0], [29.3, 282.0], [29.4, 282.0], [29.5, 282.0], [29.6, 282.0], [29.7, 282.0], [29.8, 282.0], [29.9, 282.0], [30.0, 282.0], [30.1, 282.0], [30.2, 282.0], [30.3, 282.0], [30.4, 282.0], [30.5, 282.0], [30.6, 282.0], [30.7, 282.0], [30.8, 282.0], [30.9, 282.0], [31.0, 284.0], [31.1, 284.0], [31.2, 284.0], [31.3, 284.0], [31.4, 284.0], [31.5, 284.0], [31.6, 284.0], [31.7, 284.0], [31.8, 284.0], [31.9, 284.0], [32.0, 284.0], [32.1, 284.0], [32.2, 298.0], [32.3, 298.0], [32.4, 298.0], [32.5, 298.0], [32.6, 298.0], [32.7, 298.0], [32.8, 298.0], [32.9, 298.0], [33.0, 298.0], [33.1, 298.0], [33.2, 298.0], [33.3, 298.0], [33.4, 304.0], [33.5, 304.0], [33.6, 304.0], [33.7, 304.0], [33.8, 304.0], [33.9, 304.0], [34.0, 304.0], [34.1, 304.0], [34.2, 304.0], [34.3, 304.0], [34.4, 304.0], [34.5, 304.0], [34.6, 304.0], [34.7, 304.0], [34.8, 304.0], [34.9, 304.0], [35.0, 304.0], [35.1, 304.0], [35.2, 304.0], [35.3, 304.0], [35.4, 304.0], [35.5, 304.0], [35.6, 304.0], [35.7, 304.0], [35.8, 309.0], [35.9, 309.0], [36.0, 309.0], [36.1, 309.0], [36.2, 309.0], [36.3, 309.0], [36.4, 309.0], [36.5, 309.0], [36.6, 309.0], [36.7, 309.0], [36.8, 309.0], [36.9, 309.0], [37.0, 310.0], [37.1, 310.0], [37.2, 310.0], [37.3, 310.0], [37.4, 310.0], [37.5, 310.0], [37.6, 310.0], [37.7, 310.0], [37.8, 310.0], [37.9, 310.0], [38.0, 310.0], [38.1, 310.0], [38.2, 310.0], [38.3, 310.0], [38.4, 310.0], [38.5, 310.0], [38.6, 310.0], [38.7, 310.0], [38.8, 310.0], [38.9, 310.0], [39.0, 310.0], [39.1, 310.0], [39.2, 310.0], [39.3, 311.0], [39.4, 311.0], [39.5, 311.0], [39.6, 311.0], [39.7, 311.0], [39.8, 311.0], [39.9, 311.0], [40.0, 311.0], [40.1, 311.0], [40.2, 311.0], [40.3, 311.0], [40.4, 311.0], [40.5, 312.0], [40.6, 312.0], [40.7, 312.0], [40.8, 312.0], [40.9, 312.0], [41.0, 312.0], [41.1, 312.0], [41.2, 312.0], [41.3, 312.0], [41.4, 312.0], [41.5, 312.0], [41.6, 312.0], [41.7, 318.0], [41.8, 318.0], [41.9, 318.0], [42.0, 318.0], [42.1, 318.0], [42.2, 318.0], [42.3, 318.0], [42.4, 318.0], [42.5, 318.0], [42.6, 318.0], [42.7, 318.0], [42.8, 318.0], [42.9, 321.0], [43.0, 321.0], [43.1, 321.0], [43.2, 321.0], [43.3, 321.0], [43.4, 321.0], [43.5, 321.0], [43.6, 321.0], [43.7, 321.0], [43.8, 321.0], [43.9, 321.0], [44.0, 321.0], [44.1, 321.0], [44.2, 321.0], [44.3, 321.0], [44.4, 321.0], [44.5, 321.0], [44.6, 321.0], [44.7, 321.0], [44.8, 321.0], [44.9, 321.0], [45.0, 321.0], [45.1, 321.0], [45.2, 321.0], [45.3, 327.0], [45.4, 327.0], [45.5, 327.0], [45.6, 327.0], [45.7, 327.0], [45.8, 327.0], [45.9, 327.0], [46.0, 327.0], [46.1, 327.0], [46.2, 327.0], [46.3, 327.0], [46.4, 327.0], [46.5, 327.0], [46.6, 327.0], [46.7, 327.0], [46.8, 327.0], [46.9, 327.0], [47.0, 327.0], [47.1, 327.0], [47.2, 327.0], [47.3, 327.0], [47.4, 327.0], [47.5, 327.0], [47.6, 327.0], [47.7, 330.0], [47.8, 330.0], [47.9, 330.0], [48.0, 330.0], [48.1, 330.0], [48.2, 330.0], [48.3, 330.0], [48.4, 330.0], [48.5, 330.0], [48.6, 330.0], [48.7, 330.0], [48.8, 330.0], [48.9, 331.0], [49.0, 331.0], [49.1, 331.0], [49.2, 331.0], [49.3, 331.0], [49.4, 331.0], [49.5, 331.0], [49.6, 331.0], [49.7, 331.0], [49.8, 331.0], [49.9, 331.0], [50.0, 331.0], [50.1, 331.0], [50.2, 331.0], [50.3, 331.0], [50.4, 331.0], [50.5, 331.0], [50.6, 331.0], [50.7, 331.0], [50.8, 331.0], [50.9, 331.0], [51.0, 331.0], [51.1, 331.0], [51.2, 332.0], [51.3, 332.0], [51.4, 332.0], [51.5, 332.0], [51.6, 332.0], [51.7, 332.0], [51.8, 332.0], [51.9, 332.0], [52.0, 332.0], [52.1, 332.0], [52.2, 332.0], [52.3, 332.0], [52.4, 334.0], [52.5, 334.0], [52.6, 334.0], [52.7, 334.0], [52.8, 334.0], [52.9, 334.0], [53.0, 334.0], [53.1, 334.0], [53.2, 334.0], [53.3, 334.0], [53.4, 334.0], [53.5, 334.0], [53.6, 336.0], [53.7, 336.0], [53.8, 336.0], [53.9, 336.0], [54.0, 336.0], [54.1, 336.0], [54.2, 336.0], [54.3, 336.0], [54.4, 336.0], [54.5, 336.0], [54.6, 336.0], [54.7, 336.0], [54.8, 337.0], [54.9, 337.0], [55.0, 337.0], [55.1, 337.0], [55.2, 337.0], [55.3, 337.0], [55.4, 337.0], [55.5, 337.0], [55.6, 337.0], [55.7, 337.0], [55.8, 337.0], [55.9, 337.0], [56.0, 338.0], [56.1, 338.0], [56.2, 338.0], [56.3, 338.0], [56.4, 338.0], [56.5, 338.0], [56.6, 338.0], [56.7, 338.0], [56.8, 338.0], [56.9, 338.0], [57.0, 338.0], [57.1, 338.0], [57.2, 342.0], [57.3, 342.0], [57.4, 342.0], [57.5, 342.0], [57.6, 342.0], [57.7, 342.0], [57.8, 342.0], [57.9, 342.0], [58.0, 342.0], [58.1, 342.0], [58.2, 342.0], [58.3, 342.0], [58.4, 343.0], [58.5, 343.0], [58.6, 343.0], [58.7, 343.0], [58.8, 343.0], [58.9, 343.0], [59.0, 343.0], [59.1, 343.0], [59.2, 343.0], [59.3, 343.0], [59.4, 343.0], [59.5, 343.0], [59.6, 344.0], [59.7, 344.0], [59.8, 344.0], [59.9, 344.0], [60.0, 344.0], [60.1, 344.0], [60.2, 344.0], [60.3, 344.0], [60.4, 344.0], [60.5, 344.0], [60.6, 344.0], [60.7, 344.0], [60.8, 346.0], [60.9, 346.0], [61.0, 346.0], [61.1, 346.0], [61.2, 346.0], [61.3, 346.0], [61.4, 346.0], [61.5, 346.0], [61.6, 346.0], [61.7, 346.0], [61.8, 346.0], [61.9, 346.0], [62.0, 347.0], [62.1, 347.0], [62.2, 347.0], [62.3, 347.0], [62.4, 347.0], [62.5, 347.0], [62.6, 347.0], [62.7, 347.0], [62.8, 347.0], [62.9, 347.0], [63.0, 347.0], [63.1, 350.0], [63.2, 350.0], [63.3, 350.0], [63.4, 350.0], [63.5, 350.0], [63.6, 350.0], [63.7, 350.0], [63.8, 350.0], [63.9, 350.0], [64.0, 350.0], [64.1, 350.0], [64.2, 350.0], [64.3, 351.0], [64.4, 351.0], [64.5, 351.0], [64.6, 351.0], [64.7, 351.0], [64.8, 351.0], [64.9, 351.0], [65.0, 351.0], [65.1, 351.0], [65.2, 351.0], [65.3, 351.0], [65.4, 351.0], [65.5, 351.0], [65.6, 351.0], [65.7, 351.0], [65.8, 351.0], [65.9, 351.0], [66.0, 351.0], [66.1, 351.0], [66.2, 351.0], [66.3, 351.0], [66.4, 351.0], [66.5, 351.0], [66.6, 351.0], [66.7, 351.0], [66.8, 351.0], [66.9, 351.0], [67.0, 351.0], [67.1, 351.0], [67.2, 351.0], [67.3, 351.0], [67.4, 351.0], [67.5, 351.0], [67.6, 351.0], [67.7, 351.0], [67.8, 351.0], [67.9, 352.0], [68.0, 352.0], [68.1, 352.0], [68.2, 352.0], [68.3, 352.0], [68.4, 352.0], [68.5, 352.0], [68.6, 352.0], [68.7, 352.0], [68.8, 352.0], [68.9, 352.0], [69.0, 352.0], [69.1, 353.0], [69.2, 353.0], [69.3, 353.0], [69.4, 353.0], [69.5, 353.0], [69.6, 353.0], [69.7, 353.0], [69.8, 353.0], [69.9, 353.0], [70.0, 353.0], [70.1, 353.0], [70.2, 353.0], [70.3, 355.0], [70.4, 355.0], [70.5, 355.0], [70.6, 355.0], [70.7, 355.0], [70.8, 355.0], [70.9, 355.0], [71.0, 355.0], [71.1, 355.0], [71.2, 355.0], [71.3, 355.0], [71.4, 355.0], [71.5, 357.0], [71.6, 357.0], [71.7, 357.0], [71.8, 357.0], [71.9, 357.0], [72.0, 357.0], [72.1, 357.0], [72.2, 357.0], [72.3, 357.0], [72.4, 357.0], [72.5, 357.0], [72.6, 357.0], [72.7, 367.0], [72.8, 367.0], [72.9, 367.0], [73.0, 367.0], [73.1, 367.0], [73.2, 367.0], [73.3, 367.0], [73.4, 367.0], [73.5, 367.0], [73.6, 367.0], [73.7, 367.0], [73.8, 367.0], [73.9, 368.0], [74.0, 368.0], [74.1, 368.0], [74.2, 368.0], [74.3, 368.0], [74.4, 368.0], [74.5, 368.0], [74.6, 368.0], [74.7, 368.0], [74.8, 368.0], [74.9, 368.0], [75.0, 373.0], [75.1, 373.0], [75.2, 373.0], [75.3, 373.0], [75.4, 373.0], [75.5, 373.0], [75.6, 373.0], [75.7, 373.0], [75.8, 373.0], [75.9, 373.0], [76.0, 373.0], [76.1, 373.0], [76.2, 375.0], [76.3, 375.0], [76.4, 375.0], [76.5, 375.0], [76.6, 375.0], [76.7, 375.0], [76.8, 375.0], [76.9, 375.0], [77.0, 375.0], [77.1, 375.0], [77.2, 375.0], [77.3, 375.0], [77.4, 377.0], [77.5, 377.0], [77.6, 377.0], [77.7, 377.0], [77.8, 377.0], [77.9, 377.0], [78.0, 377.0], [78.1, 377.0], [78.2, 377.0], [78.3, 377.0], [78.4, 377.0], [78.5, 377.0], [78.6, 378.0], [78.7, 378.0], [78.8, 378.0], [78.9, 378.0], [79.0, 378.0], [79.1, 378.0], [79.2, 378.0], [79.3, 378.0], [79.4, 378.0], [79.5, 378.0], [79.6, 378.0], [79.7, 378.0], [79.8, 380.0], [79.9, 380.0], [80.0, 380.0], [80.1, 380.0], [80.2, 380.0], [80.3, 380.0], [80.4, 380.0], [80.5, 380.0], [80.6, 380.0], [80.7, 380.0], [80.8, 380.0], [80.9, 380.0], [81.0, 381.0], [81.1, 381.0], [81.2, 381.0], [81.3, 381.0], [81.4, 381.0], [81.5, 381.0], [81.6, 381.0], [81.7, 381.0], [81.8, 381.0], [81.9, 381.0], [82.0, 381.0], [82.1, 381.0], [82.2, 384.0], [82.3, 384.0], [82.4, 384.0], [82.5, 384.0], [82.6, 384.0], [82.7, 384.0], [82.8, 384.0], [82.9, 384.0], [83.0, 384.0], [83.1, 384.0], [83.2, 384.0], [83.3, 384.0], [83.4, 386.0], [83.5, 386.0], [83.6, 386.0], [83.7, 386.0], [83.8, 386.0], [83.9, 386.0], [84.0, 386.0], [84.1, 386.0], [84.2, 386.0], [84.3, 386.0], [84.4, 386.0], [84.5, 386.0], [84.6, 412.0], [84.7, 412.0], [84.8, 412.0], [84.9, 412.0], [85.0, 412.0], [85.1, 412.0], [85.2, 412.0], [85.3, 412.0], [85.4, 412.0], [85.5, 412.0], [85.6, 412.0], [85.7, 412.0], [85.8, 418.0], [85.9, 418.0], [86.0, 418.0], [86.1, 418.0], [86.2, 418.0], [86.3, 418.0], [86.4, 418.0], [86.5, 418.0], [86.6, 418.0], [86.7, 418.0], [86.8, 418.0], [86.9, 418.0], [87.0, 428.0], [87.1, 428.0], [87.2, 428.0], [87.3, 428.0], [87.4, 428.0], [87.5, 428.0], [87.6, 428.0], [87.7, 428.0], [87.8, 428.0], [87.9, 428.0], [88.0, 428.0], [88.1, 436.0], [88.2, 436.0], [88.3, 436.0], [88.4, 436.0], [88.5, 436.0], [88.6, 436.0], [88.7, 436.0], [88.8, 436.0], [88.9, 436.0], [89.0, 436.0], [89.1, 436.0], [89.2, 436.0], [89.3, 442.0], [89.4, 442.0], [89.5, 442.0], [89.6, 442.0], [89.7, 442.0], [89.8, 442.0], [89.9, 442.0], [90.0, 442.0], [90.1, 442.0], [90.2, 442.0], [90.3, 442.0], [90.4, 442.0], [90.5, 452.0], [90.6, 452.0], [90.7, 452.0], [90.8, 452.0], [90.9, 452.0], [91.0, 452.0], [91.1, 452.0], [91.2, 452.0], [91.3, 452.0], [91.4, 452.0], [91.5, 452.0], [91.6, 452.0], [91.7, 454.0], [91.8, 454.0], [91.9, 454.0], [92.0, 454.0], [92.1, 454.0], [92.2, 454.0], [92.3, 454.0], [92.4, 454.0], [92.5, 454.0], [92.6, 454.0], [92.7, 454.0], [92.8, 454.0], [92.9, 517.0], [93.0, 517.0], [93.1, 517.0], [93.2, 517.0], [93.3, 517.0], [93.4, 517.0], [93.5, 517.0], [93.6, 517.0], [93.7, 517.0], [93.8, 517.0], [93.9, 517.0], [94.0, 517.0], [94.1, 552.0], [94.2, 552.0], [94.3, 552.0], [94.4, 552.0], [94.5, 552.0], [94.6, 552.0], [94.7, 552.0], [94.8, 552.0], [94.9, 552.0], [95.0, 552.0], [95.1, 552.0], [95.2, 552.0], [95.3, 555.0], [95.4, 555.0], [95.5, 555.0], [95.6, 555.0], [95.7, 555.0], [95.8, 555.0], [95.9, 555.0], [96.0, 555.0], [96.1, 555.0], [96.2, 555.0], [96.3, 555.0], [96.4, 555.0], [96.5, 603.0], [96.6, 603.0], [96.7, 603.0], [96.8, 603.0], [96.9, 603.0], [97.0, 603.0], [97.1, 603.0], [97.2, 603.0], [97.3, 603.0], [97.4, 603.0], [97.5, 603.0], [97.6, 603.0], [97.7, 643.0], [97.8, 643.0], [97.9, 643.0], [98.0, 643.0], [98.1, 643.0], [98.2, 643.0], [98.3, 643.0], [98.4, 643.0], [98.5, 643.0], [98.6, 643.0], [98.7, 643.0], [98.8, 643.0], [98.9, 1004.0], [99.0, 1004.0], [99.1, 1004.0], [99.2, 1004.0], [99.3, 1004.0], [99.4, 1004.0], [99.5, 1004.0], [99.6, 1004.0], [99.7, 1004.0], [99.8, 1004.0], [99.9, 1004.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 43.0, "series": [{"data": [[300.0, 43.0], [600.0, 2.0], [100.0, 7.0], [200.0, 21.0], [400.0, 7.0], [1000.0, 1.0], [500.0, 3.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1000.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 6.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 78.0, "series": [{"data": [[0.0, 78.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 6.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 3.5714285714285716, "minX": 1.71764676E12, "maxY": 5.0, "series": [{"data": [[1.71764706E12, 5.0], [1.71764742E12, 5.0], [1.71764736E12, 5.0], [1.71764676E12, 3.5714285714285716], [1.71764748E12, 5.0], [1.71764682E12, 5.0], [1.71764718E12, 5.0], [1.71764712E12, 5.0], [1.71764724E12, 5.0], [1.71764688E12, 5.0], [1.71764694E12, 5.0], [1.71764754E12, 5.0], [1.71764766E12, 3.5714285714285716], [1.7176476E12, 5.0], [1.7176473E12, 5.0], [1.717647E12, 5.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71764766E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -25200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 263.5, "minX": 1.0, "maxY": 677.5, "series": [{"data": [[1.0, 289.5], [2.0, 677.5], [4.0, 263.5], [5.0, 330.55263157894757], [3.0, 339.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[4.761904761904759, 336.4404761904762]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 5.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 12.733333333333333, "minX": 1.71764676E12, "maxY": 28976.516666666666, "series": [{"data": [[1.71764706E12, 18549.35], [1.71764742E12, 17671.483333333334], [1.71764736E12, 20266.716666666667], [1.71764676E12, 13716.6], [1.71764748E12, 23289.683333333334], [1.71764682E12, 23843.816666666666], [1.71764718E12, 27148.55], [1.71764712E12, 22524.366666666665], [1.71764724E12, 13364.8], [1.71764688E12, 18012.316666666666], [1.71764694E12, 12347.483333333334], [1.71764754E12, 27228.816666666666], [1.71764766E12, 28976.516666666666], [1.7176476E12, 20219.633333333335], [1.7176473E12, 20791.716666666667], [1.717647E12, 23939.25]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71764706E12, 12.75], [1.71764742E12, 12.85], [1.71764736E12, 12.733333333333333], [1.71764676E12, 17.883333333333333], [1.71764748E12, 12.866666666666667], [1.71764682E12, 12.783333333333333], [1.71764718E12, 12.9], [1.71764712E12, 12.85], [1.71764724E12, 12.85], [1.71764688E12, 12.916666666666666], [1.71764694E12, 12.816666666666666], [1.71764754E12, 12.816666666666666], [1.71764766E12, 18.083333333333332], [1.7176476E12, 12.9], [1.7176473E12, 12.983333333333333], [1.717647E12, 12.766666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71764766E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -25200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 250.8, "minX": 1.71764676E12, "maxY": 432.2, "series": [{"data": [[1.71764706E12, 339.6], [1.71764742E12, 379.8], [1.71764736E12, 345.8], [1.71764676E12, 318.42857142857144], [1.71764748E12, 371.8], [1.71764682E12, 331.4], [1.71764718E12, 432.2], [1.71764712E12, 334.8], [1.71764724E12, 250.8], [1.71764688E12, 310.0], [1.71764694E12, 276.4], [1.71764754E12, 332.8], [1.71764766E12, 325.7142857142857], [1.7176476E12, 310.6], [1.7176473E12, 345.4], [1.717647E12, 389.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71764766E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -25200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 239.2, "minX": 1.71764676E12, "maxY": 364.0, "series": [{"data": [[1.71764706E12, 301.4], [1.71764742E12, 348.6], [1.71764736E12, 308.8], [1.71764676E12, 303.7142857142857], [1.71764748E12, 329.6], [1.71764682E12, 302.4], [1.71764718E12, 364.0], [1.71764712E12, 282.8], [1.71764724E12, 239.2], [1.71764688E12, 292.0], [1.71764694E12, 258.0], [1.71764754E12, 290.6], [1.71764766E12, 277.0], [1.7176476E12, 278.6], [1.7176473E12, 317.6], [1.717647E12, 336.6]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71764766E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -25200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 38.285714285714285, "minX": 1.71764676E12, "maxY": 130.85714285714283, "series": [{"data": [[1.71764706E12, 48.4], [1.71764742E12, 62.6], [1.71764736E12, 45.8], [1.71764676E12, 130.85714285714283], [1.71764748E12, 56.2], [1.71764682E12, 47.2], [1.71764718E12, 65.0], [1.71764712E12, 44.6], [1.71764724E12, 57.0], [1.71764688E12, 45.8], [1.71764694E12, 65.2], [1.71764754E12, 49.2], [1.71764766E12, 38.285714285714285], [1.7176476E12, 53.6], [1.7176473E12, 58.2], [1.717647E12, 42.6]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71764766E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -25200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 125.0, "minX": 1.71764676E12, "maxY": 1004.0, "series": [{"data": [[1.71764706E12, 452.0], [1.71764742E12, 552.0], [1.71764736E12, 442.0], [1.71764676E12, 1004.0], [1.71764748E12, 555.0], [1.71764682E12, 428.0], [1.71764718E12, 643.0], [1.71764712E12, 368.0], [1.71764724E12, 312.0], [1.71764688E12, 347.0], [1.71764694E12, 386.0], [1.71764754E12, 375.0], [1.71764766E12, 454.0], [1.7176476E12, 351.0], [1.7176473E12, 384.0], [1.717647E12, 517.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71764706E12, 198.0], [1.71764742E12, 210.0], [1.71764736E12, 281.0], [1.71764676E12, 125.0], [1.71764748E12, 282.0], [1.71764682E12, 214.0], [1.71764718E12, 276.0], [1.71764712E12, 304.0], [1.71764724E12, 172.0], [1.71764688E12, 270.0], [1.71764694E12, 171.0], [1.71764754E12, 272.0], [1.71764766E12, 244.0], [1.7176476E12, 273.0], [1.7176473E12, 260.0], [1.717647E12, 327.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71764706E12, 452.0], [1.71764742E12, 552.0], [1.71764736E12, 442.0], [1.71764676E12, 1004.0], [1.71764748E12, 555.0], [1.71764682E12, 428.0], [1.71764718E12, 643.0], [1.71764712E12, 368.0], [1.71764724E12, 312.0], [1.71764688E12, 347.0], [1.71764694E12, 386.0], [1.71764754E12, 375.0], [1.71764766E12, 454.0], [1.7176476E12, 351.0], [1.7176473E12, 384.0], [1.717647E12, 517.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71764706E12, 452.0], [1.71764742E12, 552.0], [1.71764736E12, 442.0], [1.71764676E12, 1004.0], [1.71764748E12, 555.0], [1.71764682E12, 428.0], [1.71764718E12, 643.0], [1.71764712E12, 368.0], [1.71764724E12, 312.0], [1.71764688E12, 347.0], [1.71764694E12, 386.0], [1.71764754E12, 375.0], [1.71764766E12, 454.0], [1.7176476E12, 351.0], [1.7176473E12, 384.0], [1.717647E12, 517.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71764706E12, 452.0], [1.71764742E12, 552.0], [1.71764736E12, 442.0], [1.71764676E12, 1004.0], [1.71764748E12, 555.0], [1.71764682E12, 428.0], [1.71764718E12, 643.0], [1.71764712E12, 368.0], [1.71764724E12, 312.0], [1.71764688E12, 347.0], [1.71764694E12, 386.0], [1.71764754E12, 375.0], [1.71764766E12, 454.0], [1.7176476E12, 351.0], [1.7176473E12, 384.0], [1.717647E12, 517.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71764766E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -25200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 327.0, "minX": 1.0, "maxY": 331.0, "series": [{"data": [[1.0, 331.0], [5.0, 327.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 269.0, "minX": 1.0, "maxY": 289.0, "series": [{"data": [[1.0, 289.0], [5.0, 269.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.71764676E12, "maxY": 0.11666666666666667, "series": [{"data": [[1.71764706E12, 0.08333333333333333], [1.71764742E12, 0.08333333333333333], [1.71764736E12, 0.08333333333333333], [1.71764676E12, 0.11666666666666667], [1.71764748E12, 0.08333333333333333], [1.71764682E12, 0.08333333333333333], [1.71764718E12, 0.08333333333333333], [1.71764712E12, 0.08333333333333333], [1.71764724E12, 0.08333333333333333], [1.71764688E12, 0.08333333333333333], [1.71764694E12, 0.08333333333333333], [1.71764754E12, 0.08333333333333333], [1.71764766E12, 0.11666666666666667], [1.7176476E12, 0.08333333333333333], [1.7176473E12, 0.08333333333333333], [1.717647E12, 0.08333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71764766E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -25200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.71764676E12, "maxY": 0.11666666666666667, "series": [{"data": [[1.71764706E12, 0.06666666666666667], [1.71764742E12, 0.06666666666666667], [1.71764736E12, 0.08333333333333333], [1.71764676E12, 0.03333333333333333], [1.71764748E12, 0.08333333333333333], [1.71764682E12, 0.06666666666666667], [1.71764718E12, 0.08333333333333333], [1.71764712E12, 0.08333333333333333], [1.71764724E12, 0.05], [1.71764688E12, 0.06666666666666667], [1.71764694E12, 0.03333333333333333], [1.71764754E12, 0.08333333333333333], [1.71764766E12, 0.11666666666666667], [1.7176476E12, 0.08333333333333333], [1.7176473E12, 0.08333333333333333], [1.717647E12, 0.08333333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.71764724E12, 0.03333333333333333], [1.71764706E12, 0.016666666666666666], [1.71764742E12, 0.016666666666666666], [1.71764688E12, 0.016666666666666666], [1.71764694E12, 0.05], [1.71764676E12, 0.08333333333333333], [1.71764682E12, 0.016666666666666666]], "isOverall": false, "label": "301", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71764766E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -25200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.71764676E12, "maxY": 0.11666666666666667, "series": [{"data": [[1.71764706E12, 0.08333333333333333], [1.71764742E12, 0.08333333333333333], [1.71764736E12, 0.08333333333333333], [1.71764676E12, 0.11666666666666667], [1.71764748E12, 0.08333333333333333], [1.71764682E12, 0.08333333333333333], [1.71764718E12, 0.08333333333333333], [1.71764712E12, 0.08333333333333333], [1.71764724E12, 0.08333333333333333], [1.71764688E12, 0.08333333333333333], [1.71764694E12, 0.08333333333333333], [1.71764754E12, 0.08333333333333333], [1.71764766E12, 0.11666666666666667], [1.7176476E12, 0.08333333333333333], [1.7176473E12, 0.08333333333333333], [1.717647E12, 0.08333333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71764766E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -25200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.71764676E12, "maxY": 0.11666666666666667, "series": [{"data": [[1.71764706E12, 0.08333333333333333], [1.71764742E12, 0.08333333333333333], [1.71764736E12, 0.08333333333333333], [1.71764676E12, 0.11666666666666667], [1.71764748E12, 0.08333333333333333], [1.71764682E12, 0.08333333333333333], [1.71764718E12, 0.08333333333333333], [1.71764712E12, 0.08333333333333333], [1.71764724E12, 0.08333333333333333], [1.71764688E12, 0.08333333333333333], [1.71764694E12, 0.08333333333333333], [1.71764754E12, 0.08333333333333333], [1.71764766E12, 0.11666666666666667], [1.7176476E12, 0.08333333333333333], [1.7176473E12, 0.08333333333333333], [1.717647E12, 0.08333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71764766E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -25200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

