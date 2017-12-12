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

plotMap();