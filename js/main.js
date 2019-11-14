(() => {

    // set up some waypoints and make things happen
    let waypoint = new Waypoint({
        element: document.querySelector('#beer1'),
        handler: function(direction) {
          console.log('Scrolled to waypoint!');

          // drill down into the SVG from the HTML doc / JS file
          // changes things top-level, instead of inside the SVG
          let svg = this.element.firstElementChild.contentDocument;
          // debugger;


          // NOT WORKING YET BUT YOU GET THE IDEA
          // the yellow class is in main.css
          svg.querySelector("#beerText").classList.add("yellow");
        },
    });

    let waypoint2 = new Waypoint({
        element: document.querySelector('#beer2'),
        handler: function(direction) {
          console.log('Scrolled to waypoint!')
          this.element.innerHTML += "<p> I got added with Waypoint!</p>"
        },

        offset: 300 // waypoint needs to hit the top of the viewport, if that's not possible, use an offset
    });

    const theSVGwrapper = document.querySelector('.svg-wrapper');

    function showSVG(event) {
        //debugger;
    }

    theSVGwrapper.addEventListener('mouseover', showSVG);
})();