<html>

    <head>
        <meta charset="utf-8">
            <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no">
                <title>ArcGIS Developer Guide: Display a map (2D)</title>
                <style>
                    html,
                    body,
    #viewDiv {
                        padding: 0;
      margin: 0;
      height: 100%;
      width: 100%;
    }
  </style>

                <link rel="stylesheet" href="https://js.arcgis.com/4.19/esri/themes/light/main.css">
                    <script src="https://js.arcgis.com/4.19/"></script>

                    <script>
                        require([
                        "esri/config",
                        "esri/Map",
                        "esri/views/MapView"
    ], function (esriConfig,Map, MapView) {

                            esriConfig.apiKey = "AAPKc660988af3d0466789e64b333c5b35ccIPWjOBovrOZ0bz6tEgaGagXH7gcdG6hQ8qnv7G-kwtct2i9cXpL3saSGQD1V3GSK";
      const map = new Map({
                            basemap: "arcgis-topographic" // Basemap layer
      });

      const view = new MapView({
                            map: map,
        center: [-118.805, 34.027],
        zoom: 13, // scale: 72223.819286
        container: "viewDiv",
        constraints: {
                            snapToZoom: false
        }
      });