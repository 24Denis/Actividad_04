var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_ppkrig_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "ppkrig",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ppkrig_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-9769153.723716, 1746689.385850, -9618880.241291, 1794196.700011]
                            })
                        });

lyr_OSMStandard_0.setVisible(true);lyr_ppkrig_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ppkrig_1];
