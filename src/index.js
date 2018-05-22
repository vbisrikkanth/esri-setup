// import the loader module
import * as esriLoader from 'esri-loader';

async function plotMap() {
    try {
        let [MapView, WebMap] = await esriLoader.loadModules(['esri/views/MapView', 'esri/WebMap']);
        let webmap = new WebMap({
            portalItem: { // autocasts as new PortalItem()
                id: 'f2e9b762544945f390ca4ac3671cfa72'
            }
        });
        // and we show that map in a container w/ id #viewDiv
        let view = new MapView({
            map: webmap,
            container: 'viewDiv'
        });
    } catch (error) {
        console.log(error);
    }
}


async function plotExample2() {
    let [Map, MapView] = await esriLoader.loadModules(["esri/Map", "esri/views/MapView"]);
    let map = new Map({
        basemap: "streets"
    });

    let view = new MapView({
        container: "viewDiv", // Reference to the scene div created in step 5
        map: map, // Reference to the map object created before the scene
        zoom: 4, // Sets zoom level based on level of detail (LOD)
        center: [15, 65] // Sets center point of view using longitude,latitude
    });
}

async function threeDimensionMap() {
    let [Map, SceneView] = await esriLoader.loadModules(["esri/Map", "esri/views/SceneView"]);

    let map = new Map({
        basemap: "streets",
        ground: "world-elevation"
    });
    let view = new SceneView({
        container: "viewDiv", // Reference to the scene div created in step 5
        map: map, // Reference to the map object created before the scene
        scale: 50000000, // Sets the initial scale to 1:50,000,000
        center: [-101.17, 21.78] // Sets the center point of view with lon/lat
    });


}

//Example for mapview
//plotMap();

//Example for map
//plotExample2();

//Example for 3D map
//threeDimensionMap();
export {plotMap,plotExample2, threeDimensionMap};
