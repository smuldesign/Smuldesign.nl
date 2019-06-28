(function () {
    // TODO: add json with entries for various speeds, e.g.:
    // slow, normal, fast, warp, and set numbers that correspond to them.
    // This should clean up the code a bit
    var starFieldWidth = 1200;
    var starFieldHeight = 800;

    addStars(starFieldWidth, starFieldHeight, 50);
    animateStars(starFieldWidth, 2);

})();

// TODO: make some stars bigger than others, and have some blue,
// red or white
function addStars(starFieldWidth, starFieldHeight, noOfStars) {
    var starField = document.getElementById('star-field');
    var numberOfStars = noOfStars;

    for (var i = 0; i < numberOfStars; i++) {
        var star = document.createElement('div');
        star.className = 'star';
        var topOffset = Math.floor((Math.random() * starFieldHeight) + 1);
        var leftOffset = Math.floor((Math.random() * starFieldWidth) + 1);
        star.style.top = topOffset + 'px';
        star.style.left = leftOffset + 'px';
        star.style.position = 'absolute';
        starField.appendChild(star);
    }
}

function animateStars(starFieldWidth, speed) {
    var starField = document.getElementById('star-field');
    var stars = starField.childNodes;

    function getStarColor(index) {
        if (index % 8 == 0)
            return 'red';
        else if (index % 10 == 0)
            return 'yellow';
        else if (index % 17 == 0)
            return 'blue';
        else
            return 'white';
    }

    function getStarDistance(index) {
        if (index % 6 == 0)
            return '';
        else if (index % 9 == 0)
            return 'near';
        else if (index % 2 == 0)
            return 'far';
        else
            return 0;
    }

    function getStarRelativeSpeed(index) {
        if (index % 6 == 0)
            return 1;
        else if (index % 9 == 0)
            return 2;
        else if (index % 2 == 0)
            return -1;
        else
            return 0;
    }

    setInterval(function() {
        for (var i = 1; i < stars.length; i++) {
            stars[i].className = 'star' + ' ' + getStarColor(i) + ' ' + getStarDistance(i);

            var currentLeft = parseInt(stars[i].style.left, 10);
            var leftChangeAmount = speed + getStarRelativeSpeed(i);
            var leftDiff;
            if (currentLeft - leftChangeAmount < 0) {
                leftDiff = currentLeft - leftChangeAmount + starFieldWidth;
            }
            else {
                leftDiff = currentLeft - leftChangeAmount;
            }
            stars[i].style.left = (leftDiff) + 'px';
        }

    }, 20);

}

