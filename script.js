var currentShape = 'circle'
tool.fixedDistance = 9
window.setShape = function(shapeName){
    currentShape = shapeName;
}
    function onMouseDrag(event) {
        var path;
        if (currentShape === 'circle') {
        path = new Path.Circle({
            center: event.middlePoint,
            radius: event.delta.length
        });
}
        else if (currentShape === 'rectangle') {
        path = new Path.Rectangle({
            point: event.middlePoint,
            size: [event.delta.length * 2, event.delta.length * 2]
        });  }
    else if (currentShape === 'star'){
        path = new Path.Star({
            center: event.middlePoint,
            points: 5,
            radius1: 15,
            radius2: event.delta.length
        });}  
         else if (currentShape === 'triangle'){
            path = new Path.RegularPolygon({

            center: event.middlePoint,
            sides: 3,
            radius: event.delta.length});
            path.rotate(event.delta.length)
        } 
else if (currentShape === 'erase'){
        path = new Path.Circle({
            center: event.middlePoint,
            radius: 20,
        });
    path.fillColor = {
        hue: 360, 
        saturation: 1,
        brightness: 0
    }}
if (path && currentShape !== 'erase'){
        path.fillColor = {
        hue: (event.count % 360) * 5,
        saturation: 1,
        brightness: 0.75
    }
}
    }  
window.clearCanvas = function(){
    project.activeLayer.removeChildren();
}
    