	// var Obj =[{"category":"Trending",
	// 			"videos":[{"id":"0","vidtime":"7:04","vidtitle":"title1","vidchname":"Channel Name1","vidstats":"476k views - 2 hours ago"},
	// 			{"id":"1","vidtime":"3:22","vidtitle":"title2","vidchname":"Channel Name2","vidstats":"1126k views - 3 hours ago"},
	// 			{"id":"2","vidtime":"6:42","vidtitle":"title3","vidchname":"Channel Name3","vidstats":"4336k views - 3 hours ago"},
	// 			{"id":"3","vidtime":"3:34","vidtitle":"title4","vidchname":"Channel Name4","vidstats":"636k views - 2 hours ago"},
	// 			{"id":"4","vidtime":"9:14","vidtitle":"title5","vidchname":"Channel Name5","vidstats":"276k views - 1 hours ago"},
	// 			{"id":"5","vidtime":"3:34","vidtitle":"title6","vidchname":"Channel Name6","vidstats":"936k views - 2 hours ago"},
	// 			{"id":"6","vidtime":"9:14","vidtitle":"title7","vidchname":"Channel Name7","vidstats":"446k views - 1 hours ago"}]
	// 		},
	// 		{"category":"Trending2",
	// 			"videos":[{"id":"0","vidtime":"7:04","vidtitle":"title8","vidchname":"Channel Name1","vidstats":"476k views - 2 hours ago"},
	// 			{"id":"1","vidtime":"3:22","vidtitle":"title9","vidchname":"Channel Name2","vidstats":"1126k views - 3 hours ago"},
	// 			{"id":"2","vidtime":"6:42","vidtitle":"title10","vidchname":"Channel Name3","vidstats":"4336k views - 3 hours ago"},
	// 			{"id":"3","vidtime":"3:34","vidtitle":"title11","vidchname":"Channel Name4","vidstats":"636k views - 2 hours ago"},
	// 			{"id":"4","vidtime":"9:14","vidtitle":"title12","vidchname":"Channel Name5","vidstats":"276k views - 1 hours ago"}]
	// 		},
	// 		{"category":"Trending3",
	// 			"videos":[{"id":"0","vidtime":"7:04","vidtitle":"title8","vidchname":"Channel Name1","vidstats":"476k views - 2 hours ago"},
	// 			{"id":"1","vidtime":"3:22","vidtitle":"title9","vidchname":"Channel Name2","vidstats":"1126k views - 3 hours ago"},
	// 			{"id":"2","vidtime":"6:42","vidtitle":"title10","vidchname":"Channel Name3","vidstats":"4336k views - 3 hours ago"},
	// 			{"id":"3","vidtime":"3:34","vidtitle":"title11","vidchname":"Channel Name4","vidstats":"636k views - 2 hours ago"},
	// 			{"id":"4","vidtime":"9:14","vidtitle":"title12","vidchname":"Channel Name5","vidstats":"276k views - 1 hours ago"}]
	// 		}]


	var mainObj = [{"category":"Trending1",
	"videos":[{"id":"0","src":"images/thumbnail.jpg","vidtitle":"title1","description":"Item description","price":"Rs-230"},
	{"id":"1","src":"images/thumbnail.jpg","vidtitle":"title2","description":"Item description","price":"Rs-230"},
	{"id":"2","src":"images/thumbnail.jpg","vidtitle":"title3","description":"Item description","price":"Rs-230"},
	{"id":"3","src":"images/thumbnail.jpg","vidtitle":"title4","description":"Item description","price":"Rs-230"},
	{"id":"4","src":"images/thumbnail.jpg","vidtitle":"title5","description":"Item description","price":"Rs-230"},
	{"id":"6","src":"images/thumbnail.jpg","vidtitle":"title6","description":"Item description","price":"Rs-230"},
	{"id":"7","src":"images/thumbnail.jpg","vidtitle":"title7","description":"Item description","price":"Rs-230"},
	{"id":"8","src":"images/thumbnail.jpg","vidtitle":"title8","description":"Item description","price":"Rs-230"}
	]},
	{"category":"Trending2",
	"videos":[{"id":"0","src":"images/thumbnail.jpg","vidtitle":"title1","description":"Item description","price":"Rs-230"},
	{"id":"1","src":"images/thumbnail.jpg","vidtitle":"title2","description":"Item description","price":"Rs-230"},
	{"id":"2","src":"images/thumbnail.jpg","vidtitle":"title3","description":"Item description","price":"Rs-230"},
	{"id":"3","src":"images/thumbnail.jpg","vidtitle":"title4","description":"Item description","price":"Rs-230"},
	{"id":"4","src":"images/thumbnail.jpg","vidtitle":"title5","description":"Item description","price":"Rs-230"},
	{"id":"5","src":"images/thumbnail.jpg","vidtitle":"title6","description":"Item description","price":"Rs-230"},
	{"id":"6","src":"images/thumbnail.jpg","vidtitle":"title7","description":"Item description","price":"Rs-230"},
	{"id":"7","src":"images/thumbnail.jpg","vidtitle":"title8","description":"Item description","price":"Rs-230"}
	]},
]		
var string ="";

var catString = "";
var mainString = "";

for(i=0; i<mainObj.length; i++)
	{	string =  "";
		if(mainObj[i].category !== null)
		{
			catString = '<h2 class="playlist__title">'+mainObj[i].category+'</h2>';
		}
		if(mainObj[i].videos !== null)
		{
			data = mainObj[i].videos;
			for (j=0; j<data.length; j++) {
				string += '<li class="card-outter slider-item js-slider-item"><div class="card"><a href="#"><img src="'+data[j].src+'"><h2 class="title">'+data[j].vidtitle+'</h2><p class="description">'+data[j].description+'</p><p class="description price">'+data[i].price+'</p></a></div></li>'
				};

		}
		mainString += '<section class="slider-section">'+catString +'<div class="slider-container"><ol class="cards slider">'+string+'</ol><div class="slider-indicator-bar js-slider-indicator-bar"><div class="slider-indicator js-slider-indicator"></div></div><span class="js-slider-arrow slider-arrow left disabled"></span><span class="js-slider-arrow slider-arrow right"></span></div></section>';

	}

document.getElementById('playlist').innerHTML ='<main>'+mainString+'</main>';


// var clickd = 1;
// $(document).on('click', '.next', function(){ 
// 	clickd = clickd + 1;
// 	scrolld = 200 * clickd;
// 	$(".vidList").animate({right: scrolld+'px'});
// });

const THRESHOLD = 20;

class SwipeSlider {
  constructor(slider) {
    this.startX = 0;
    this.oldX = 0;
    this.startPosition = 0;
    this.snapPosition = 0;
    this.isDown = false;
    this.userHasSwiped = false;

    // Init
    this.cacheElements(slider);
    this.setDimensions();
    this.setIndicator();
    this.bindHandlers();
  }

  cacheElements(slider) {
    this.slider = slider;
    this.items = this.slider.querySelectorAll('.js-slider-item');
    this.indicator = slider.parentNode.querySelector('.js-slider-indicator');
    this.indicatorBar = slider.parentNode.querySelector('.js-slider-indicator-bar');
    this.arrows = slider.parentNode.querySelectorAll('.js-slider-arrow');
  }

  setDimensions() {
    const spacing = 20;
    const sliderWidth = this.slider.offsetWidth;
    const itemWidth = this.items[0].offsetWidth;
    const itemsWidth = this.items.length * itemWidth;

    this.itemWidth = itemWidth;
    this.maxAllowedW = sliderWidth < itemsWidth ? sliderWidth - itemsWidth - spacing : 0;
  }

  setIndicator() {
    if (!this.indicator) return;

    const times = (this.items.length * this.itemWidth) / this.slider.offsetWidth;
    const length = this.indicatorBar.offsetWidth / times;

    this.indicator.style.width = `${length}px`;
  }

  // Calculate

  calculateBoundaries(position, bounce = true) {
    const bounceMargin = bounce ? this.itemWidth / 4 : 0;

    if (position > bounceMargin) return bounceMargin;
    if (position < this.maxAllowedW - bounceMargin) return this.maxAllowedW - bounceMargin;

    return position;
  }

  calculateNextSnap(position, swipeNext) {
    let snapPosition = (parseInt((position / this.itemWidth), 10) - swipeNext) * this.itemWidth;

    if (snapPosition < this.maxAllowedW) snapPosition = this.maxAllowedW;
    return snapPosition;
  }

  moveIndicator(currPos) {
    if (!this.indicator) return;

    const indicatorPos = this.indicatorBar.offsetWidth - this.indicator.offsetWidth;
    const position = this.mapToRange(currPos, 0, this.maxAllowedW, 0, indicatorPos);

    this.indicator.style.left = `${position}px`;
  }

  moveSlider(position, snapPosition = null) {
    // When dragging we need 2 positions: current and snap on end
    this.snapPosition = snapPosition != null ? snapPosition : position;

    this.slider.setAttribute('style', `transform: translate3d(${position}px, 0, 0)`);
  }

  // Helpers

  mapToRange(num, inMin, inMax, outMin, outMax) {
    return ((num - inMin) * (outMax - outMin)) / ((inMax - inMin) + outMin);
  }

  toggleArrowDisable() {
    this.arrows.forEach((el) => el.classList.remove('disabled'));

    if (this.snapPosition === 0) this.arrows[0].classList.add('disabled');
    else if (this.snapPosition === this.maxAllowedW) this.arrows[1].classList.add('disabled');
  }

  // Handlers

  bindHandlers() {
    // TODO: maybe add mousedwon and touchstart listeners here. Then add inside them
    // only the relevant move / end listeners (touch or mouse), and remove them on end
    this.slider.addEventListener('touchstart', (e) => this.handleTouchStart(e));
    this.slider.addEventListener('touchmove', (e) => this.handleTouchMove(e));
    this.slider.addEventListener('touchend', (e) => this.handleEnd(e));

    this.slider.addEventListener('mousedown', (e) => this.handleMouseStart(e));
    this.slider.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    this.slider.addEventListener('mouseup', (e) => this.handleEnd(e));
    this.slider.addEventListener('mouseleave', (e) => this.handleEnd(e));

    this.slider.addEventListener('wheel', (e) => this.handleWheel(e));

    this.slider.addEventListener('click', (e) => this.handleClick(e));
    window.addEventListener('resize', () => this.handleResize());

    if (!this.arrows.length) return;

    this.arrows[0].addEventListener('click', (e) => this.handleArrowClick(e)); // left
    this.arrows[1].addEventListener('click', (e) => this.handleArrowClick(e)); // right
  }

  // Start

  handleTouchStart(e) {
    if (e.touches.length > 1) return;

    this.handleStart(e);
  }

  handleMouseStart(e) {
    e.preventDefault();

    this.handleStart(e);
  }

  handleStart(e) {
    this.isDown = true;
    this.userHasSwiped = false;
    this.startPosition = this.snapPosition;
    this.startX = (e.pageX || e.touches[0].pageX) - this.slider.offsetLeft;

    this.slider.classList.add('active');
  }

  // Move

  handleTouchMove(e) {
    if (e.touches.length > 1 || !this.isDown) return;

    this.handleMove(e);
  }

  handleMouseMove(e) {
    if (!this.isDown) return;

    e.preventDefault();
    this.handleMove(e);
  }

  handleMove(e) {
    const pageX = e.pageX || e.touches[0].pageX;
    const currX = pageX - this.slider.offsetLeft;
    const dist = currX - this.startX;

    if (Math.abs(dist) < THRESHOLD) return;

    const swipeNext = this.oldX - currX < 0 ? 0 : 1; // Swipe direction
    const accelerate = this.mapToRange(Math.abs(dist), THRESHOLD, window.innerWidth, 1, 3);
    const position = this.calculateBoundaries(this.startPosition + (dist * accelerate));

    e.preventDefault();

    this.userHasSwiped = true;
    this.oldX = currX;

    this.moveSlider(position, this.calculateNextSnap(position, swipeNext));
    this.moveIndicator(position);
  }

  // End

  handleEnd() {
    if (!this.isDown) return;

    this.isDown = false;
    this.slider.classList.remove('active');

    this.moveSlider(this.snapPosition);
    this.moveIndicator(this.snapPosition);

    if (this.arrows.length > 0) this.toggleArrowDisable();
  }

  // Other Handlers

  handleWheel(e) {
    if (Math.abs(e.deltaX) < THRESHOLD) return;

    const step = 40;
    const snapPosition = this.snapPosition + (step * Math.sign(e.deltaX));

    this.slider.classList.add('active'); // Will be removed on mouseleave
    this.moveSlider(this.calculateBoundaries(snapPosition, false));
    this.moveIndicator(snapPosition);
    this.toggleArrowDisable();
  }

  handleArrowClick(e) {
    const direction = e.target.classList.contains('left') ? 1 : -1;
    const position = this.calculateBoundaries(
      this.snapPosition + (direction * this.itemWidth), false
    );

    this.slider.classList.remove('active');
    this.moveSlider(position);
    this.moveIndicator(position);
    this.toggleArrowDisable();
  }

  handleResize() {
    this.setIndicator();
    this.setDimensions();

    if (this.maxAllowedW > this.snapPosition) {
      this.moveSlider(this.maxAllowedW);
      this.moveIndicator(this.maxAllowedW);
    }
  }

  handleClick(e) {
    if (!this.userHasSwiped) return;

    e.preventDefault(); // Disallow click while swiping
    this.userHasSwiped = false;
  }
}


const sliders = document.querySelectorAll('.slider');
sliders.forEach((slider) => { new SwipeSlider(slider) });

