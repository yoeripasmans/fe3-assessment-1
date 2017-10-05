# Assessment 1 - Datavisualization Top languages by number of speaker
For this assessment I made a basic visualization from the top languages by number of speaker. The goal was to understand what’s happening in the code, how well data is represented and quality of the code and documentation.

![Assessment 1][cover]

## Background
1. Choose a dataset `Top languages by number of speaker`
2. Searched for a right way to visualize the given data. My choice was a bubble chart.
3. Set up a correct project structure.
4. Develop the chart with help from examples [`3djs.org`](https://d3js.org/)  
5. Personalize the chart to my own with the given data
6. Expand functionality with new functions
7. Experiment with animations
8. Refactor and optimized code
7. Write docs
6. Host the project through GitHub Pages

## Data

Tab-separated values (TSV) with 26 rows and two columns:

*   `language` — Name of language
*   `speakers` — Estimated number of total speakers

#### Example

language	speakers
Mandarin Chinese	1090000000
English	983000000
Hindustani	544000000
Spanish	527000000
Arabic	422000000

## Features

- [d3.scale.ordinal](https://github.com/d3/d3-3.x-api-reference/blob/master/Ordinal-Scales.md#ordinal)
- [d3.tsv](https://github.com/d3/d3-request/blob/master/README.md#tsv)
- [d3.select](https://github.com/d3/d3-selection/blob/master/README.md#select)
- [d3.selectAll](https://github.com/d3/d3-selection/blob/master/README.md#selectAll)
- [*selection*.append](https://github.com/d3/d3-selection/blob/master/README.md#selection_append)
- [*selection*.attr](https://github.com/d3/d3-selection/blob/master/README.md#selection_attr)
- [*selection*.enter](https://github.com/d3/d3-selection/blob/master/README.md#selection_enter) 
- [d3.pack](https://github.com/d3/d3-hierarchy/blob/master/README.md#pack)
- [d3.hierarchy](https://github.com/d3/d3-hierarchy/blob/master/README.md#hierarchy)
- [*node*.sum](https://github.com/d3/d3-hierarchy/blob/master/README.md#node_sum)
- [*node*.each](https://github.com/d3/d3-hierarchy/blob/master/README.md#node_each)

## License
GPL-3.0 © Yoeri Pasmans

[block]: http://bl.ocks.org/mmattozzi/7018021
[block-author]: https://github.com/mbostock
[cover]: preview.png
