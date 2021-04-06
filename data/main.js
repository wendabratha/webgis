var map = L.map('map', {
            center: [0.1569096, 116.3410074], // kukar
            zoom: 8
        });

        //ESRI ArcGIS layers from GIS Program; dynamic layer example
        //Using a relative url to call layer instead of http
        var WaterQualSites = L.esri.dynamicMapLayer({
            url: '//geodata.hawaii.gov/arcgis/rest/services/HumanHealthSafety/MapServer',
            layers: [2],
            useCors: false
        });

        //add popup to Water quality sites dynamic map layer
        WaterQualSites.bindPopup(function(error, featureCollection) {
            if (error || featureCollection.features.length === 0) {
                return false;
            } else {
                return 'Name: ' + featureCollection.features[0].properties.name + '<br>' + 'ID: ' + featureCollection.features[0].properties.identifier;
            }
        });

        //ESRI ArcGIS layers from GIS Program; polygon feature layer example
        //Using a relative url to call layer instead of http
        var AgBaseline = L.esri.featureLayer({
            url: '//geodata.hawaii.gov/arcgis/rest/services/LandUseLandCover/MapServer/4',
            style: function(feature) {
                return {
                    fillOpacity: 0.5
                }
            }
        });

        //add popup to AgBaseline feature layer
        AgBaseline.bindPopup(function(evt) {
            return L.Util.template('<p>{cropcatego}<br>{island}</p>', evt.feature.properties);
        });

        //ESRI ArcGIS layers from Hawaii GIS Program; line feature layer example; can override the styling
        //Using a relative url to call layer
        var Trails = L.esri.featureLayer({
            url: '//geodata.hawaii.gov/arcgis/rest/services/Terrestrial/MapServer/34',
            style: function(feature) {
                return {
                    color: '#328000',
                    weight: 2
                }
            }
        });

        //PacIOOS GeoServer Example; adding a single layer with properties
        //Using a relative url to call layer instead of http
        var EconSeaLevRise = L.tileLayer.wms('http://geo.pacioos.hawaii.edu/geoserver/wms?', {
            layers: 'PACIOOS:hi_tt_all_slrxa_econ_2030',
            format: 'image/png',
            opacity: 0.5,
            tiled: 'true'
        });

        //Another example using PacIOOS GeoServer examples; setting properties first then add layers     
        var options = {
            transparent: 'true',
            format: 'image/png',
            opacity: 0.5,
            tiled: 'true'
            //info_format: 'text/html'
        };

        //Using a relative url to call layer instead of http
        var source = L.WMS.source('http://geo.pacioos.hawaii.edu/geoserver/wms?', options);
        var CREDREASites = source.getLayer('PACIOOS:hi_cred_all_rea_sites');
        var VegShoreline = source.getLayer('PACIOOS:hi_hcgg_all_shore_veg');

        //Load OSM Buildings then disable it on first load; can only be viewed at certain scales
        var osmb = new OSMBuildings(map).load();
        map.removeLayer(osmb);
		
		// Set the map WMS layer
		// POINT
		var pusat_pemerintahan = L.tileLayer.wms("http://geoportal.kukarkab.go.id:8080/geoserver/wms", {
			layers: 'pusat_pemerintahan',
			format: 'image/png',
			transparent: true,
			attribution: "Geoportal Kutai Kartanegara",
			noWrap: true
		}).addTo(map);
		
		var sistem_perkotaan = L.tileLayer.wms("http://geoportal.kukarkab.go.id:8080/geoserver/wms", {
			layers: 'sistem_perkotaan',
			format: 'image/png',
			transparent: true,
			attribution: "Geoportal Kutai Kartanegara",
			noWrap: true
		}).remove(map);
		
		var terminal = L.tileLayer.wms("http://geoportal.kukarkab.go.id:8080/geoserver/wms", {
			layers: 'terminal',
			format: 'image/png',
			transparent: true,
			attribution: "Geoportal Kutai Kartanegara",
			noWrap: true
		}).remove(map);
		
		var menara_telepon = L.tileLayer.wms("http://geoportal.kukarkab.go.id:8080/geoserver/wms", {
			layers: 'menara_telepon',
			format: 'image/png',
			transparent: true,
			attribution: "Geoportal Kutai Kartanegara",
			noWrap: true
		}).remove(map);
		
		var gardu_listrik = L.tileLayer.wms("http://geoportal.kukarkab.go.id:8080/geoserver/wms", {
			layers: 'gardu_listrik',
			format: 'image/png',
			transparent: true,
			attribution: "Geoportal Kutai Kartanegara",
			noWrap: true
		}).remove(map);
		
		//LINE
		var batas_kabupaten = L.tileLayer.wms("http://geoportal.kukarkab.go.id:8080/geoserver/wms", {
			layers: 'batas_kabupaten',
			format: 'image/png',
			transparent: true,
			attribution: "Geoportal Kutai Kartanegara",
			noWrap: true
		}).remove(map);
		
		var batas_kecamatan = L.tileLayer.wms("http://geoportal.kukarkab.go.id:8080/geoserver/wms", {
			layers: 'batas_kecamatan',
			format: 'image/png',
			transparent: true,
			attribution: "Geoportal Kutai Kartanegara",
			noWrap: true
		}).remove(map);
		
		var batas_desa_kel= L.tileLayer.wms("http://geoportal.kukarkab.go.id:8080/geoserver/wms", {
			layers: 'batas_desa_kel',
			format: 'image/png',
			transparent: true,
			attribution: "Geoportal Kutai Kartanegara",
			noWrap: true
		}).remove(map);
		
		var jaringan_listrik = L.tileLayer.wms("http://geoportal.kukarkab.go.id:8080/geoserver/wms", {
			layers: 'jaringan_listrik',
			format: 'image/png',
			transparent: true,
			attribution: "Geoportal Kutai Kartanegara",
			noWrap: true
		}).remove(map);
		
		var jaringan_telekomunikasi = L.tileLayer.wms("http://geoportal.kukarkab.go.id:8080/geoserver/wms", {
			layers: 'jaringan_telekomunikasi',
			format: 'image/png',
			transparent: true,
			attribution: "Geoportal Kutai Kartanegara",
			noWrap: true
		}).remove(map);
		
		var jalur_angkutan_AKP_AKDP = L.tileLayer.wms("http://geoportal.kukarkab.go.id:8080/geoserver/wms", {
			layers: 'jalur_angkutan_AKP_AKDP',
			format: 'image/png',
			transparent: true,
			attribution: "Geoportal Kutai Kartanegara",
			noWrap: true
		}).remove(map);
		
		var alur_transportasi_laut = L.tileLayer.wms("http://geoportal.kukarkab.go.id:8080/geoserver/wms", {
			layers: 'alur_transportasi_laut',
			format: 'image/png',
			transparent: true,
			attribution: "Geoportal Kutai Kartanegara",
			noWrap: true
		}).remove(map);
		
		var jaringan_jalan = L.tileLayer.wms("http://geoportal.kukarkab.go.id:8080/geoserver/wms", {
			layers: 'jaringan_jalan',
			format: 'image/png',
			transparent: true,
			attribution: "Geoportal Kutai Kartanegara",
			noWrap: true
		}).addTo(map);
		
		var rencana_jalan_jembatan_2033 = L.tileLayer.wms("http://geoportal.kukarkab.go.id:8080/geoserver/wms", {
			layers: 'rencana_jalan_jembatan_2033',
			format: 'image/png',
			transparent: true,
			attribution: "Geoportal Kutai Kartanegara",
			noWrap: true
		}).remove(map);
		
		//POLYGON
		var kawasan_lindung_daerah_gambut = L.tileLayer.wms("http://geoportal.kukarkab.go.id:8080/geoserver/wms", {
			layers: 'kawasan_lindung_daerah_gambut',
			format: 'image/png',
			transparent: true,
			attribution: "Geoportal Kutai Kartanegara",
			noWrap: true
		}).remove(map);
		
		var kemiringan = L.tileLayer.wms("http://geoportal.kukarkab.go.id:8080/geoserver/wms", {
			layers: 'kemiringan',
			format: 'image/png',
			transparent: true,
			opacity: 0.5,
			attribution: "Geoportal Kutai Kartanegara",
			noWrap: true
		}).remove(map);
		
		var curah_hujan = L.tileLayer.wms("http://geoportal.kukarkab.go.id:8080/geoserver/wms", {
			layers: 'curah_hujan',
			format: 'image/png',
			transparent: true,
			opacity: 0.5,
			attribution: "Geoportal Kutai Kartanegara",
			noWrap: true
		}).remove(map);
		
		var jenis_tanah = L.tileLayer.wms("http://geoportal.kukarkab.go.id:8080/geoserver/wms", {
			layers: 'jenis_tanah',
			format: 'image/png',
			transparent: true,
			opacity: 0.5,
			attribution: "Geoportal Kutai Kartanegara",
			noWrap: true
		}).remove(map);
		
		var geologi = L.tileLayer.wms("http://geoportal.kukarkab.go.id:8080/geoserver/wms", {
			layers: 'geologi',
			format: 'image/png',
			transparent: true,
			opacity: 0.5,
			attribution: "Geoportal Kutai Kartanegara",
			noWrap: true
		}).remove(map);
		
		var geohidrologi = L.tileLayer.wms("http://geoportal.kukarkab.go.id:8080/geoserver/wms", {
			layers: 'geohidrologi',
			format: 'image/png',
			transparent: true,
			opacity: 0.5,
			attribution: "Geoportal Kutai Kartanegara",
			noWrap: true
		}).remove(map);
		
		var wilayah_admininstrasi_kecamatan = L.tileLayer.wms("http://geoportal.kukarkab.go.id:8080/geoserver/wms", {
			layers: 'wilayah_admininstrasi_kecamatan',
			format: 'image/png',
			transparent: true,
			opacity: 0.5,
			attribution: "Geoportal Kutai Kartanegara",
			noWrap: true
		}).addTo(map);
		
        //Using a relative url to call layer instead of http
        var source = L.WMS.source('http://geoportal.kukarkab.go.id/geoserver/wms?', options);
        var rencana_pola_ruang_2013_2033 = source.getLayer('s_rencana_tata_ruang_wilayah_2013-2033:rencana_pola_ruang_2013_2033');
		var kawasan_strategis = source.getLayer('s_rencana_tata_ruang_wilayah_2013-2033:kawasan_strategis');
		var kerawanan_bencana = source.getLayer('e_bidang_pekerjaan_umum:kerawanan_bencana');
		
       //ESRI ArcGIS layers from KALTIM JIDG GIS Program; line feature layer ; can override the styling
        //Using a relative url to call layer
        var POLARUANG_AR_250K = L.esri.featureLayer({
            url: 'http://222.124.31.141:6080/arcgis/rest/services/Publikasi/DPU_TR/FeatureServer/7',
            style: function(feature) {
                return {
                    color: '#328000',
                    weight: 2
                }
            }
        });
		
		// baseMaps		
		var defaultBase = L.tileLayer.provider('OpenStreetMap.BlackAndWhite').addTo(map);

        var baseMaps = {
            'OpenStreetMap': defaultBase,
            'USGS TNM': L.tileLayer.provider('USGSTNM'),
            'ESRI Imagery': L.tileLayer.provider('Esri.WorldImagery'),
            'ESRI Ocean Basemap': L.tileLayer.provider('Esri.OceanBasemap'),
            'OSM Topo': L.tileLayer.provider('OpenTopoMap')
        };

        //Overlay grouped layers    
        var groupOverLays = {
			"Fisik Dasar": {
				"Batas Wilayah Administrasi": wilayah_admininstrasi_kecamatan,
				"Jaringan Jalan" : jaringan_jalan,
				"Ibukota": pusat_pemerintahan,
            },
			"Pola Ruang": {
                "Rencana Pola Ruang 2013-2033": rencana_pola_ruang_2013_2033,
				"Kawasan Strategis": kawasan_strategis,
            },
			
            "Struktur Ruang": {
				"Jalur Angkutan AKP AKDP" : jalur_angkutan_AKP_AKDP,
				"Alur Transportasi Laut" : alur_transportasi_laut,
				"Rencana Jalan Jembatan 2033" : rencana_jalan_jembatan_2033,
				"Jaringan Telekomunikasi" : jaringan_telekomunikasi,
				"Menara Telekomunikasi": menara_telepon,
				"Terminal": terminal,
				"Gardu Listrik": gardu_listrik,
				"Sistem Perkotaan": sistem_perkotaan,
            },

            "OSM Bldg Classic": {
                "2.5D Buildings": osmb
            }
        };

        //add layer switch control
        L.control.groupedLayers(baseMaps, groupOverLays).addTo(map);


        //add scale bar to map
        L.control.scale({
            position: 'bottomleft'
        }).addTo(map);

        // Overview mini map
        var Esri_WorldTopoMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
            attribution: '&copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
        });

        var miniMap = new L.Control.MiniMap(Esri_WorldTopoMap, {
            toggleDisplay: true,
            minimized: false,
            position: 'bottomleft'
        }).addTo(map);

        //Logo position: bottomright
        var credctrl = L.controlCredits({
            image: "Images/opengislab_106x23.png",
            link: "http://konohan.com",
            text: "Leaflet map by wendabratha@<u>konohan.com<u/>"
        }).addTo(map);


		// Adding Measure Tool
		var measureControl = new L.Control.Measure({
		  primaryLengthUnit: 'kilometers',
		  secondaryLengthUnit: 'miles',
		  primaryAreaUnit:'sqmeters',
		  secondaryAreaUnit: 'acres',
		  activeColor: "#ed3833",
		  completedColor: "#63aabc"
		});
		measureControl.addTo(map);

		// DrawItems control script
		var drawnItems = new L.FeatureGroup();
		map.addLayer(drawnItems);
		var drawControl = new L.Control.Draw({
				// position: 'topright',
				draw: {
					polygon: {
					 shapeOptions: {
					  color: 'purple'
					 },
					 allowIntersection: false,
					 drawError: {
					  color: 'orange',
					  timeout: 1000
					 },
					},
					polyline: {
					 shapeOptions: {
					  color: 'red'
					 },
					},
					rect: {
					 shapeOptions: {
					  color: 'green'
					 },
					},
					circle: {
					 shapeOptions: {
					  color: 'steelblue'
					 },
				},
				marker: false
				   },
				edit: {
					 featureGroup: drawnItems,
					 edit: false,
					 remove: false
				 }
			 });
		map.addControl(drawControl);
		map.on('draw:created', function (e) {
					drawnItems.addLayer(e.layer);
				});
		map.on(L.Draw.Event.CREATED, function (e) {
				var type = e.layerType,
					layer = e.layer;
				if (type === 'marker') {
			  var cord = layer.getLatLng().toString();
					layer.bindPopup(cord).openPopup();
				}
		map.addLayer(layer);
		});

		// User Location script
		function userLocation() {
		  if (navigator.geolocation) {
			  if (navigator.geolocation) {
				  navigator.geolocation.getCurrentPosition(displayLocationInfo);
				  }
				  function displayLocationInfo(position) {
				  const lng = position.coords.longitude;
				  const lat = position.coords.latitude;

				  L.circle([lat, lng], {
					radius: 1000,
					opacity: 1,
					weight:1,
					fillopactity: 1,
					fillColor: 'blue'
				  })
				  .addTo(map)
				  .bindPopup(`longitude: ${ lng } | latitude: ${ lat }`).openPopup();
				  map.setView([lat,lng],12);
			  }
		  } else {
			  console.log('You dont have geolocation');
		  }
		};

		// User Location Button
		L.easyButton('fa-crosshairs fa-lg', function(){
			userLocation();
		},'Get Your Location').addTo(map);

		// Full Screen Toogle
		function fullScreen() {
			let e = document,
			  t = e.documentElement;
			t.requestFullscreen
			  ? e.fullscreenElement
				? e.exitFullscreen()
				: t.requestFullscreen()
			  : t.mozRequestFullScreen
			  ? e.mozFullScreen
				? e.mozCancelFullScreen()
				: t.mozRequestFullScreen()
			  : t.msRequestFullscreen
			  ? e.msFullscreenElement
				? e.msExitFullscreen()
				: t.msRequestFullscreen()
			  : t.webkitRequestFullscreen
			  ? e.webkitIsFullscreen
				? e.webkitCancelFullscreen()
				: t.webkitRequestFullscreen()
			  : console.log("Fullscreen support not detected.");
		  }
		  var stateChangingButton = L.easyButton({
			states: [{
					stateName: 'expand',        // name the state
					icon:      'fa fa-expand fa-lg',       // and define its properties
					title:     'Full Screen',      // like its title
					onClick: function(btn) {       // and its callback
						fullScreen();
						btn.state('collapse');    // change state on click!
					}
				}, {
					stateName: 'collapse',
					icon:      'fa fa-compress fa-lg',
					title:     'Minimize',
					onClick: function(btn) {
						fullScreen();
						btn.state('expand');
					}
			}]
		});
		stateChangingButton.addTo(map);

		// Print Option script
		L.control.browserPrint({
		  title: "Print current Layer",
		  documentTitle: "Map SimPelTARU",
		  printModes: [
			L.control.browserPrint.mode.landscape("Tabloid VIEW", "Tabloid"),
			L.control.browserPrint.mode.landscape(),
			"PORTrait",
			L.control.browserPrint.mode.auto("Auto", "B4"),
			L.control.browserPrint.mode.custom("Selected area", "B5"),
		  ],
		  manualMode: !1,
		  closePopupsOnPrint: !0,
		}).addTo(map);

		// PopUp for Vector Layers
		function popUp(geo){
		  map.fitBounds(geo.getBounds());
		  geo.eachLayer(function(layer) {
			var l = layer.feature.properties;
			var x = Object.keys(l);
			for (i=0; i<x.length; i++) {
			  if(i==0){
				layer.bindPopup(`${x[0]}: ${l[x[0]]}`);
			  }else if(i==1){
				layer.bindPopup(`${x[0]}: ${l[x[0]]}<br />${x[1]}: ${l[x[1]]}`);
			  }else if(i==2){
				layer.bindPopup(`${x[0]}: ${l[x[0]]}<br />${x[1]}: ${l[x[1]]}<br />${x[2]}: ${l[x[2]]}`);
			  }else if(i==3){
				layer.bindPopup(`${x[0]}: ${l[x[0]]}<br />${x[1]}: ${l[x[1]]}<br />${x[2]}: ${l[x[2]]}<br />${x[3]}: ${l[x[3]]}`);
			  }else{
				layer.bindPopup(`${x[0]}: ${l[x[0]]}<br />${x[1]}: ${l[x[1]]}<br />${x[2]}: ${l[x[2]]}<br />${x[3]}: ${l[x[3]]}<br />${x[4]}: ${l[x[4]]}`);
			  }
			}
		  });
		}

		var geo;
		function geoJsonData(file){
		  var reader = new FileReader();
		  reader.onload = function() {
			geo = omnivore.geojson(reader.result)
			  .on('ready',function(){
				popUp(geo);
			  })
			  .addTo(map);
			};
		  reader.readAsDataURL(file);
		}

		function gpxData(file){
		  var reader = new FileReader();
		  reader.onload = function() {
			geo = omnivore.gpx(reader.result)
			  .on('ready', function() {
				popUp(geo);
			   })
			  .addTo(map);
			};
		  reader.readAsDataURL(file);
		}

		function csvData(file){
		  var reader = new FileReader();
		  reader.onload = function() {
			geo = omnivore.csv.parse(reader.result).addTo(map);
			popUp(geo);
		  };
		  reader.readAsText(file);
		}

		function kmlData(file){
		  var reader = new FileReader();
		  reader.onload = function() {
			geo = omnivore.kml.parse(reader.result).addTo(map);
			popUp(geo);
		  };
		  reader.readAsText(file);
		}

		function wktData(file){
		  var reader = new FileReader();
		  reader.onload = function() {
			geo = omnivore.wkt.parse(reader.result).addTo(map);
			popUp(geo);
		  };
		  reader.readAsText(file);
		}

		// Add Vector Layers
		function vectorData(){
		  var inputNode = document.createElement('input');
					inputNode.setAttribute('type','file');
			  inputNode.setAttribute('id','leaflet-draw-shapefile-selector');
					inputNode.setAttribute('accept','.geojson,.gpx,.csv,.kml,.wkt');
			  
					inputNode.addEventListener("change", function(e){
						var files = inputNode.files;
				var file = files[0];
				var parts = file.name.split('.');
				var ext = parts[parts.length - 1];

				if(ext.toLowerCase() == "geojson"){
				  geoJsonData(file);
				} else if(ext.toLowerCase() == "gpx"){
				  gpxData(file);
				}else if(ext.toLowerCase() == "csv"){
				  csvData(file);
				}else if(ext.toLowerCase() == "kml"){
				  kmlData(file);
				}else if(ext.toLowerCase() == "wkt"){
				  wktData(file);
				}
			  });
					inputNode.click();
		}

		L.easyButton('fa-globe fa-lg', function(){
		  vectorData();
		},"Add Vector Layers",'topright').addTo(map);

		  var drawnItems = new L.FeatureGroup();
			var drawControl = new L.Control.DrawPlus({
				position: 'topright',		
				draw: {
			  polygon: false,
			  circle: false,
			  rectangle: false,
			  polyline: false,
					shapefile: {
						shapeOptions:{
							color: 'blue',
							weight: 3,
							opacity: 1,
							fillOpacity: 0.1					
						}
				  }, //Turn on my custom extension
					geojson: true,   //Could have options if needed.
				},
				edit: {
					featureGroup: drawnItems
			}
			});
			
			map.addLayer(drawnItems);
			map.addControl(drawControl);
			
			map.on(L.Draw.Event.CREATED, function(e){
			drawnItems.addLayer(e.layer);
			var type = e.layerType,
					layer = e.layer;
				if (type === 'marker') {
			  var cord = layer.getLatLng().toString();
					layer.bindPopup(cord).openPopup();
				}
			map.addLayer(layer);
			});
			
			drawnItems.on('click',function(e){
			return;
		  });

		  // Remove features
		  document.getElementById('delete').onclick = function() {
			drawnItems.clearLayers();
			if(geo){
			  geo.clearLayers();
			}
		  }

		  document.getElementById('export').onclick = function() {
			var data;
			// Extract GeoJson from featureGroup
			if (geo){data = geo.toGeoJSON();}
			else{data = drawnItems.toGeoJSON();}
		  
			// Stringify the GeoJson
			var convertedData = 'text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(data));

			// Create export
			document.getElementById('export').setAttribute('href', 'data:' + convertedData);
			document.getElementById('export').setAttribute('download','data.geojson');
		  }
		  L.easyButton('fa-download fa-lg', function(){
			document.getElementById('export').click();
		  },"Export As Geojson",'topright').addTo(map);

		  L.easyButton('fa-refresh fa-lg', function(){
			document.getElementById('delete').click();
		  },"Clear Map",'topright').addTo(map);
		  
		  function iframe(){
			var info = document.getElementById('info');
			if(info.style.display=="block"){
			  info.style.display = "none";
			}else{
			  info.style.display = "block";
			}
		  }

		  L.easyButton('fa-info fa-lg', function(){
			iframe();
		  },"Info","topleft").addTo(map);

		  window.addEventListener('load', () => {
			registerSW();
		  });
		  
			// Start Legend
			(function (factory, window) {
				// define an AMD module that relies on 'leaflet'
				if (typeof define === "function" && define.amd) {
					define(["leaflet"], factory);

					// define a Common JS module that relies on 'leaflet'
				} else if (typeof exports === "object") {
					module.exports = factory(require("leaflet"));
				}

				// attach your plugin to the global 'L' variable
				if (typeof window !== "undefined" && window.L) {
					factory(L);
				}
			})(function (L) {
				class LegendSymbol {
					constructor(control, container, legend) {
						this._control = control;
						this._container = container;
						this._legend = legend;
						this._width = this._control.options.symbolWidth;
						this._height = this._control.options.symbolHeight;
					}
				}

				class GeometricSymbol extends LegendSymbol {
					constructor(control, container, legend) {
						super(control, container, legend);

						this._canvas = this._buildCanvas();
						if (this._drawSymbol) {
							this._drawSymbol();
						}
						this._style();
					}

					_buildCanvas() {
						var canvas = L.DomUtil.create("canvas", null, this._container);
						canvas.height = this._control.options.symbolHeight;
						canvas.width = this._control.options.symbolWidth;
						return canvas;
					}

					_drawSymbol() {}

					_style() {
						var ctx = (this._ctx = this._canvas.getContext("2d"));
						if (this._legend.fill || this._legend.fillColor) {
							ctx.globalAlpha = this._legend.fillOpacity || 1;
							ctx.fillStyle = this._legend.fillColor || this._legend.color;
							ctx.fill(this._legend.fillRule || "evenodd");
						}

						if (this._legend.stroke || this._legend.color) {
							if (this._legend.dashArray) {
								ctx.setLineDash(this._legend.dashArray || []);
							}
							ctx.globalAlpha = this._legend.opacity || 1.0;
							ctx.lineWidth = this._legend.weight || 2;
							ctx.strokeStyle = this._legend.color || "#3388ff";
							ctx.lineCap = this._legend.lineCap || "round";
							ctx.lineJoin = this._legend.lineJoin || "round";
							ctx.stroke();
						}
					}

					rescale() {}

					center() {}
				}

				class CircleSymbol extends GeometricSymbol {
					_drawSymbol() {
						var ctx = (this._ctx = this._canvas.getContext("2d"));

						var legend = this._legend;
						var linelWeight = legend.weight || 3;

						var centerX = this._control.options.symbolWidth / 2;
						var centerY = this._control.options.symbolHeight / 2;
						var maxRadius = Math.min(centerX, centerY) - linelWeight;
						var radius = maxRadius;
						if (legend.radius) {
							radius = Math.min(legend.radius, maxRadius);
						}

						ctx.arc(centerX, centerY, radius, 0, Math.PI * 2, false);
					}
				}

				class PolylineSymbol extends GeometricSymbol {
					_drawSymbol() {
						var ctx = (this._ctx = this._canvas.getContext("2d"));

						var x1 = 0;
						var x2 = this._control.options.symbolWidth;
						var y = this._control.options.symbolHeight / 2;

						ctx.beginPath();
						ctx.moveTo(x1, y);
						ctx.lineTo(x2, y);
					}
				}

				class RectangleSymbol extends GeometricSymbol {
					_drawSymbol() {
						var ctx = (this._ctx = this._canvas.getContext("2d"));
						var linelWeight = this._legend.weight || 3;

						var x0 = this._control.options.symbolWidth / 2;
						var y0 = this._control.options.symbolHeight / 2;

						var rx = x0 - linelWeight;
						var ry = y0 - linelWeight;
						if (rx == ry) {
							ry = ry / 2;
						}
						ctx.rect(x0 - rx, y0 - ry, rx * 2, ry * 2);
					}
				}

				/**
				 * 圆心坐标：(x0,y0) 半径：r 角度(X轴顺时针旋转)：a
				 * 弧度 = 角度 * Math.PI / 180
				 * 则圆上任一点为：（x1,y1）
				 * x1   =   x0   +   r   *   Math.cos( a  * Math.PI / 180)
				 * y1   =   y0   +   r   *   Math.sin( a  * Math.PI / 180)
				 */
				class PolygonSymbol extends GeometricSymbol {
					_drawSymbol() {
						var ctx = (this._ctx = this._canvas.getContext("2d"));

						var linelWeight = this._legend.weight || 3;
						var x0 = this._control.options.symbolWidth / 2;
						var y0 = this._control.options.symbolHeight / 2;
						var r = Math.min(x0, y0) - linelWeight;
						var a = 360 / this._legend.sides;
						ctx.beginPath();
						for (var i = 0; i <= this._legend.sides; i++) {
							var x1 = x0 + r * Math.cos(((a * i + (90 - a / 2)) * Math.PI) / 180);
							var y1 = y0 + r * Math.sin(((a * i + (90 - a / 2)) * Math.PI) / 180);
							if (i == 0) {
								ctx.moveTo(x1, y1);
							} else {
								ctx.lineTo(x1, y1);
							}
						}
					}
				}

				class ImageSymbol extends LegendSymbol {
					constructor(control, container, legend) {
						super(control, container, legend);
						this._img = null;
						this._loadImages();
					}

					_loadImages() {
						var imageLoaded = () => {
							this.rescale();
						};
						var img = L.DomUtil.create("img", null, this._container);
						this._img = img;
						img.onload = imageLoaded;
						img.src = this._legend.url;
					}

					rescale() {
						if (this._img) {
							var _options = this._control.options;
							if (this._img.width > _options.symbolWidth || this._img.height > _options.symbolHeight) {
								var imgW = this._img.width;
								var imgH = this._img.height;
								var scaleW = _options.symbolWidth / imgW;
								var scaleH = _options.symbolHeight / imgH;
								var scale = Math.min(scaleW, scaleH);
								this._img.width = imgW * scale;
								this._img.height = imgH * scale;
							}
							this.center();
						}
					}

					center() {
						var containerCenterX = this._container.offsetWidth / 2;
						var containerCenterY = this._container.offsetHeight / 2;
						var imageCenterX = parseInt(this._img.width) / 2;
						var imageCenterY = parseInt(this._img.height) / 2;

						var shiftX = containerCenterX - imageCenterX;
						var shiftY = containerCenterY - imageCenterY;

						this._img.style.left = shiftX.toString() + "px";
						this._img.style.top = shiftY.toString() + "px";
					}
				}

				L.Control.Legend = L.Control.extend({
					options: {
						position: "topleft",
						title: "Legend",
						legends: [],
						symbolWidth: 24,
						symbolHeight: 24,
						opacity: 1.0,
						column: 1,
						collapsed: false,
					},

					initialize: function (options) {
						L.Util.setOptions(this, options);
						this._legendSymbols = [];
						this._buildContainer();
					},

					onAdd: function (map) {
						this._map = map;
						this._initLayout();
						return this._container;
					},

					_buildContainer: function () {
						this._container = L.DomUtil.create("div", "leaflet-legend leaflet-bar leaflet-control");
						this._container.style.backgroundColor = "rgba(255,255,255, " + this.options.opacity + ")";

						this._contents = L.DomUtil.create("section", "leaflet-legend-contents", this._container);
						this._link = L.DomUtil.create("a", "leaflet-legend-toggle", this._container);
						this._link.title = "Legend";
						this._link.href = "#";

						var title = L.DomUtil.create("h3", "leaflet-legend-title", this._contents);
						title.innerText = this.options.title || "Legend";

						var len = this.options.legends.length;
						var colSize = Math.ceil(len / this.options.column);
						var legendContainer = this._contents;
						for (var i = 0; i < len; i++) {
							if (i % colSize == 0) {
								legendContainer = L.DomUtil.create("div", "leaflet-legend-column", this._contents);
							}
							var legend = this.options.legends[i];
							this._buildLegendItems(legendContainer, legend);
						}
					},

					_buildLegendItems: function (legendContainer, legend) {
						var legendItemDiv = L.DomUtil.create("div", "leaflet-legend-item", legendContainer);
						if (legend.inactive) {
							L.DomUtil.addClass(legendItemDiv, "leaflet-legend-item-inactive");
						}
						var symbolContainer = L.DomUtil.create("i", null, legendItemDiv);

						var legendSymbol;
						if (legend.type === "image") {
							legendSymbol = new ImageSymbol(this, symbolContainer, legend);
						} else if (legend.type === "circle") {
							legendSymbol = new CircleSymbol(this, symbolContainer, legend);
						} else if (legend.type === "rectangle") {
							legendSymbol = new RectangleSymbol(this, symbolContainer, legend);
						} else if (legend.type === "polygon") {
							legendSymbol = new PolygonSymbol(this, symbolContainer, legend);
						} else if (legend.type === "polyline") {
							legendSymbol = new PolylineSymbol(this, symbolContainer, legend);
						} else {
							L.DomUtil.remove(legendItemDiv);
							return;
						}
						this._legendSymbols.push(legendSymbol);

						symbolContainer.style.width = this.options.symbolWidth + "px";
						symbolContainer.style.height = this.options.symbolHeight + "px";

						var legendLabel = L.DomUtil.create("span", null, legendItemDiv);
						legendLabel.innerText = legend.label;
						if (legend.layers) {
							L.DomUtil.addClass(legendItemDiv, "leaflet-legend-item-clickable");
							L.DomEvent.on(
								legendItemDiv,
								"click",
								function () {
									this._toggleLegend.call(this, legendItemDiv, legend.layers);
								},
								this
							);
						}
					},

					_initLayout: function () {
						L.DomEvent.disableClickPropagation(this._container);
						L.DomEvent.disableScrollPropagation(this._container);

						if (this.options.collapsed) {
							this._map.on("click", this.collapse, this);

							L.DomEvent.on(
								this._container,
								{
									mouseenter: this.expand,
									mouseleave: this.collapse,
								},
								this
							);
						} else {
							this.expand();
						}
					},

					_toggleLegend: function (legendDiv, layers) {
						if (L.DomUtil.hasClass(legendDiv, "leaflet-legend-item-inactive")) {
							L.DomUtil.removeClass(legendDiv, "leaflet-legend-item-inactive");
							if (L.Util.isArray(layers)) {
								for (var i = 0, len = layers.length; i < len; i++) {
									this._map.addLayer(layers[i]);
								}
							} else {
								this._map.addLayer(layers);
							}
						} else {
							L.DomUtil.addClass(legendDiv, "leaflet-legend-item-inactive");
							if (L.Util.isArray(layers)) {
								for (var i = 0, len = layers.length; i < len; i++) {
									this._map.removeLayer(layers[i]);
								}
							} else {
								this._map.removeLayer(layers);
							}
						}
					},

					expand: function () {
						this._link.style.display = "none";
						L.DomUtil.addClass(this._container, "leaflet-legend-expanded");
						for (var legendSymbol of this._legendSymbols) {
							legendSymbol.rescale();
						}
						return this;
					},

					collapse: function () {
						this._link.style.display = "block";
						L.DomUtil.removeClass(this._container, "leaflet-legend-expanded");
						return this;
					},

					redraw: function () {
						L.DomUtil.empty(this._contents);
						this._buildLegendItems();
					},
				});

				L.control.legend = L.control.Legend = function (options) {
					return new L.Control.Legend(options);
				};
			}, window);
			//End Legend
			
		//add configured controls
		L.control.coordinates({
			position:"bottomright",
			decimals:2,
			decimalSeperator:",",
			labelTemplateLat:"Latitude: {y}",
			labelTemplateLng:"Longitude: {x}"
		}).addTo(map);

		  async function registerSW() {
			if ('serviceWorker' in navigator) {
			  try {
				await navigator.serviceWorker.register('../sw.js');
			  } catch (e) {
				console.log(`SW registration failed`);
			  }
			}
		  }