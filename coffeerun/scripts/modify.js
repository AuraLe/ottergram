// Old version
function initializeEvents() {
    'use strict';
    var thumbnails = getThumbnailsArray();
    thumbnails.forEach(addThumbClickHandler);
}

initializeEvents();


// Modified version
(function(thumbnails) {
    'use strict';
    thumbnails.forEach(addThumbClickHandler);
})(getThumbnailsArray);

