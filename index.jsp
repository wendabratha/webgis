<%-- 
    Document   : index
    Created on : Mar 21, 2021, 10:50:11 PM
    Author     : wendabratha.gis.lab
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<head>
	
	
	
    <title>SimTARU Kutai Kartanegara</title>

    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!--====== Favicon Icon ======-->
    <link rel="shortcut icon" href="images/kukarlogo.png" type="image/png">

    <!-- Load Leaflet: http://leafletjs.com/ -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.2.0/dist/leaflet.css" integrity="sha512-M2wvCLH6DSRazYeZRIm1JnYyh22purTM+FDB5CsyxtQJYeKq83arPe5wgbNmcFXGqiSH2XR8dT/fJISVA1r/zQ==" crossorigin="" />
    <script src="https://unpkg.com/leaflet@1.2.0/dist/leaflet.js" integrity="sha512-lInM/apFSqyy1o6s89K4iQUKg6ppXEgsVxT35HbzUupEVRh2Eu9Wdl4tHj7dZO0s1uvplcYGmt3498TtHq+log==" crossorigin=""></script>

    <!-- Esri Leaflet Plugin: https://esri.github.io/esri-leaflet/ -->
    <script src="https://unpkg.com/esri-leaflet@2.1.3/dist/esri-leaflet.js" integrity="sha512-pijLQd2FbV/7+Jwa86Mk3ACxnasfIMzJRrIlVQsuPKPCfUBCDMDUoLiBQRg7dAQY6D1rkmCcR8286hVTn/wlIg==" crossorigin=""></script>

    <!-- ESRI Renderer Plugin: https://github.com/Esri/esri-leaflet-renderers -->
    <!-- Renders feature layer using default symbology as defined by ArcGIS REST service -->
    <!-- Currently doesn't work with ESRI cluster plugin -->
    <script src="https://unpkg.com/esri-leaflet-renderers@2.0.6/dist/esri-leaflet-renderers.js" integrity="sha512-mhpdD3igvv7A/84hueuHzV0NIKFHmp2IvWnY5tIdtAHkHF36yySdstEVI11JZCmSY4TCvOkgEoW+zcV/rUfo0A==" crossorigin=""></script>

    <!-- Load Leaflet Basemap Providers: https://github.com/leaflet-extras/leaflet-providers -->
    <!-- Modified to include USGS TNM web services -->
    <script src="js/leaflet-providers.js"></script>

    <!-- 2.5D OSM Buildings Classic: https://github.com/kekscom/osmbuildings -->
    <script src="https://cdn.osmbuildings.org/OSMBuildings-Leaflet.js"></script>

    <!-- Load Font Awesome icons -->
    <script src="https://use.fontawesome.com/a64989e3a8.js"></script>

    <!-- Grouped Layer Plugin: https://github.com/ismyrnow/leaflet-groupedlayercontrol  -->
    <link rel="stylesheet" href="CSS/leaflet.groupedlayercontrol.min.css">
    <script src="js/leaflet.groupedlayercontrol.min.js" type="text/javascript"></script>

    <!-- Overview mini map Plugin: https://github.com/Norkart/Leaflet-MiniMap -->
    <link rel="stylesheet" href="CSS/Control.MiniMap.css">
    <script src="js/Control.MiniMap.min.js" type="text/javascript"></script>

    <!-- Leaflet Drawing Plugin: https://github.com/codeofsumit/leaflet.pm -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet.pm@latest/dist/leaflet.pm.css">
    <script src="https://unpkg.com/leaflet.pm@latest/dist/leaflet.pm.min.js"></script>

    <!-- Leaflet WMS Plugin: https://github.com/heigeo/leaflet.wms -->
    <script src="js/leaflet.wms.js"></script>

    <!-- Logo Credit Plugin: https://github.com/gregallensworth/L.Control.Credits -->
    <link rel="stylesheet" href="css/leaflet-control-credits.css" />
    <script type="text/javascript" src="js/leaflet-control-credits.js"></script>
	
    <link rel="stylesheet" href="css/mousePosition.css">
    <link rel="stylesheet" href="css/Control.OSMGeocoder.css">
    <link rel="stylesheet" href="css/leaflet.draw.css">
    <link rel="stylesheet" href="css/leaflet-measure.css">
    <link rel="stylesheet" href="css/leaflet.draw-shapefile.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/leaflet-easybutton@2/src/easy-button.css">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
	
	<link rel="stylesheet" href="css/leaflet.legend.css" />
	
	<script src="sw.js"></script>
    <script src="js/mousePosition.js"></script>
    <script src="js/Control.OSMGeocoder.js"></script>
    <script src="js/leaflet.draw-src.js"></script>
    <script src="js/easy-button.js"></script>
    <script src="js/leaflet.browser.print.min.js"></script>
    <script src="js/leaflet-measure.js"></script>
    <script src="https://api.tiles.mapbox.com/mapbox.js/plugins/leaflet-omnivore/v0.3.1/leaflet-omnivore.min.js"></script>
    <script src="js/shp.js"></script>
    <script src="js/leaflet.shapefile.js"></script>
    <script src="js/leaflet.draw-shapefile.js"></script>
    <script src="https://cdn.osmbuildings.org/classic/0.2.2b/OSMBuildings-Leaflet.js"></script>
	<script src="js/leaflet.legend.js"></script>
	
	<script type="text/javascript" src="js/Leaflet.Coordinates-0.1.5.min.js"></script>
	<link rel="stylesheet" href="css/Leaflet.Coordinates-0.1.5.css"/>

	<link rel="stylesheet" href="css/Leaflet.Coordinates-0.1.3.ie.css" />

    <style>
        body {
            padding: 0;
            margin: 0;
        }

        html,
        body,
        #map {
            height: 100%;
        }

    </style>

</head>

<body>

    <div id="map"></div>
	    <button id='delete'>Delete Features</button>
		<a href='#' id='export'>Export Features</a>
		<div id="info">
			<div id="top">
				<h2>Information</h2>
				<div id="close" onclick="iframe()"><img src="css/images/close.svg" height="24px" width="24px"></div>
			</div>
			<hr />
			<iframe src="info.html"></iframe>
		</div>
	
	<script src="data/main.js"></script>

</body>

</html>

