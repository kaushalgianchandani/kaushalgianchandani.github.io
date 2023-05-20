---
layout: page
permalink: /publications/
title: publications
description: Publications in reversed chronological order.
years: [2021, 2020]
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->
<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f {{ site.scholar.bibliography }} -q @*[year={{y}}]* %}
{% endfor %}

</div>


<!--
# @article{campisi2020statistical,
#   title={Statistical tests for the distribution of surface wind and current speeds across the globe},
#   author={Campisi-Pinto, Salvatore and Gianchandani, Kaushal and Ashkenazy, Yosef},
#   journal={Renewable Energy},
#   volume={149},
#   pages={861--876},
#   year={2020},
#   publisher={Elsevier},
#   pdf={1-s2.0-S0960148119319135-main.pdf},
#   html={https://www.sciencedirect.com/science/article/abs/pii/S0960148119319135},
#   doi={10.1016/j.renene.2019.12.041},
#   url={http://link.aps.org/doi/10.1103/PhysRev.47.777},
# } -->
