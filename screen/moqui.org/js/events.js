/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 318);
/******/ })
/************************************************************************/
/******/ ({

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

    module.exports = __webpack_require__(319);


    /***/ }),
    
    /***/ 319:
    /***/ (function(module, exports) {
    
    var access_token = '667008477022260|wD5hJrxsPXtX7oAnmQuzJi_OVX0';
    var eventsList = void 0;
    var currentDate = convertDate2(new Date());
    window.fbAsyncInit = function () {
        FB.init({
            appId: '667008477022260',
            autoLogAppEvents: true,
            xfbml: true,
            version: 'v2.11'
        });
        // FB.init({
        // 	appId: '667008477022260',
        // 	autoLogAppEvents: true,
        // 	cookie: true,
        // 	status: true,
        // 	xfbml: true,
        // 	version: 'v2.11',
        // });
        // FB.api(
        // 	'/gurunanakdwara',
        // 	'GET',
        // 	{ fields: 'events', access_token },
        // 	function (response) {
        // 		console.log('events', response);
        // 		eventsList = response;
        // 		pullEvents();
        // 	}
        // );
        // FB.api(
        // 	'/gurunanakdwara/events',
        // 	'GET',
        // 	{ fields: 'timezone,cover,id,end_time,name,place,type,start_time,owner,event_times,description',
        // 	 access_token
        // 	},
        // 	function (response) {
        // 		console.log('resp', response);
        // 	}
        // );
    };
    
    (function (d, s, id) {
        var js,
            fjs = d.getElementsByTagName(s)[0];
    
        if (d.getElementById(id)) {
            return;
        }
    
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk.js';
        fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
    
    function pullEvents() {
        var sortedDateArr = [];
    
        for (var i = 0; i < eventsList.events.data.length; i++) {
            var event = {};
            event.eventName = eventsList.events.data[i].name;
            event.eventDesc = eventsList.events.data[i].description;
            // console.log('event.eventDesc ' + event.eventDesc);
            event.eventDescTrim = trim(event.eventDesc, 300);
            event.eventTime = eventsList.events.data[i].start_time;
            event.eventTimeConverted = convertTime(event.eventTime);
            event.eventDateConverted = convertDate(event.eventTime);
            event.eventDate = convertDate2(event.eventTime);
            event.eventLocation = eventsList.events.data[i].place.location;
            event.eventCity = eventsList.events.data[i].place.location.city;
            event.eventState = eventsList.events.data[i].place.location.state;
            event.eventCountry = eventsList.events.data[i].place.location.country;
            event.eventID = eventsList.events.data[i].id;
    
            if (new Date().getTime() < new Date(event.eventDate).getTime()) {
                sortedDateArr.push(event);
            }
        }
    
        sortedDateArr.reverse();
    
        var dateArrVar = 0;
    
        var _loop = function _loop(_i) {
            FB.api('/' + sortedDateArr[_i].eventID, { fields: 'cover', access_token: access_token }, function (response) {
                sortedDateArr[_i].photoURL = response.cover.source;
                dateArrVar += 1;
                if (dateArrVar === sortedDateArr.length) {
                    for (var j = 0; j < sortedDateArr.length; j++) {
                        displayEvent(sortedDateArr[j]);
                    }
                }
            });
        };
    
        for (var _i = 0; _i < sortedDateArr.length; _i++) {
            _loop(_i);
        }
    }
    
    function displayEvent(event) {
        var eventsTableNode = document.getElementById('eventsTable');
        var eventContainer = document.createElement('div');
        eventContainer.className = 'col-12 col-lg-4 event-wrap';
        var imageContainer = document.createElement('div');
        imageContainer.className = 'event-image-wrap';
        var eventName = document.createTextNode(event.eventName);
        var eventURL = 'https://www.facebook.com/events/' + event.eventID + '/';
        var dateDescContainer = document.createElement('div');
        dateDescContainer.className = 'event-title-and-date';
        var titleNode = document.createElement('a');
        titleNode.href = eventURL;
        titleNode.appendChild(eventName);
        titleNode.target = "_blank";
        titleNode.classList = 'event-title-and-link';
        var eventDate = document.createElement('a');
        eventDate.href = eventURL;
        var eventDateTextObject = document.createTextNode(event.eventDateConverted);
        eventDate.appendChild(eventDateTextObject);
        eventDate.target = "_blank";
        var dateNode = document.createElement('p');
        var eventImage = document.createElement('img');
        eventImage.src = event.photoURL;
        eventImage.className = 'event-image';
        var anchorAroundEventImage = document.createElement('a');
        anchorAroundEventImage.href = eventURL;
        anchorAroundEventImage.target = "_blank";
        anchorAroundEventImage.className = 'anchor-around-thumbnail';
        anchorAroundEventImage.appendChild(eventImage);
        var eventDescText = document.createTextNode(event.eventDescTrim);
        var eventDescPreformated = document.createElement('pre');
        eventDescPreformated.appendChild(eventDescText);
        var eventDescNode = document.createElement('article');
        eventDescNode.className = 'event-desription';
        eventDescNode.appendChild(eventDescPreformated);
        var eventMoreLink = document.createElement('a');
        var linkText = document.createTextNode("More");
        eventMoreLink.appendChild(linkText);
        eventMoreLink.title = "More about this event on GND's Facebook page";
        eventMoreLink.target = "_blank";
        eventMoreLink.className = 'more-link';
        eventMoreLink.href = eventURL;
        dateNode.appendChild(eventDate);
        imageContainer.appendChild(anchorAroundEventImage);
        eventContainer.appendChild(imageContainer);
        dateDescContainer.appendChild(titleNode);
        dateDescContainer.appendChild(dateNode);
        eventContainer.appendChild(dateDescContainer);
        eventsTableNode.appendChild(eventContainer);
        eventContainer.appendChild(eventDescNode);
        eventDescPreformated.appendChild(eventMoreLink);
    }
    
    function convertTime(input) {
        return moment(input, 'HH:mm:ss').format('h:mm A');
    }
    
    function convertDate(input) {
        return moment(input, '').format('LL');
    }
    
    function convertDate2(input) {
        return moment(input, '').format('L');
    }
    
    function trim(str, len) {
        return str.slice(0, len) + '...';
    }
    
    var eventButton = document.getElementById('eventButton');
    var calendarButton = document.getElementById('calendarButton');
    var events = document.getElementById('eventsTable');
    var calendar = document.getElementById('calendarTable');
    var eventDescription = document.getElementById('eventDescription');
    var calendarDescription = document.getElementById('calendarDescription');
    var eventSplash = document.getElementById('eventsSplash');
    var calendarSplash = document.getElementById('calendarSplash');
    
    eventButton.addEventListener('click', function () {
        window.location.hash = '#events';
    });
    
    calendarButton.addEventListener('click', function () {
        window.location.hash = '#calendar';
    });
    
    window.addEventListener('hashchange', function () {
        if (window.location.hash === '#events') {
            events.style.display = '';
            calendar.style.display = 'none';
            eventButton.classList.add('active');
            eventsNavItem.classList.add('active');
            calendarButton.classList.remove('active');
            calendarNavItem.classList.remove('active');
            calendarDescription.style.display = 'none';
            eventDescription.style.display = 'block';
        } else if (window.location.hash === '#calendar') {
            events.style.display = 'none';
            calendar.style.display = 'block';
            // eventButton.className = 'toggle-button';
            eventButton.classList.remove('active');
            eventsNavItem.classList.remove('active');
            calendarButton.classList.add('active');
            calendarNavItem.classList.add('active');
            eventDescription.style.display = 'none';
            calendarDescription.style.display = 'block';
        }
    });
    
    document.addEventListener('DOMContentLoaded', function () {
        var hashVal = window.location.hash.split('#')[1];
    
        if (hashVal === 'events') {
            events.style.display = '';
            calendar.style.display = 'none';
            eventButton.classList.add('active');
            eventsNavItem.classList.add('active');
            calendarButton.classList.remove('active');
            calendarNavItem.classList.remove('active');
            calendarDescription.style.display = 'none';
            eventDescription.style.display = 'block';
        } else if (hashVal === 'calendar') {
            events.style.display = 'none';
            calendar.style.display = 'block';
            eventButton.classList.remove('active');
            eventsNavItem.classList.remove('active');
            calendarButton.classList.add('active');
            calendarNavItem.classList.add('active');
            eventDescription.style.display = 'none';
            calendarDescription.style.display = 'block';
        }
    });
    
    /***/ })
    
    /******/ });


    $('.event-cal-button').on('click', '.btn', function() {
        $(this).addClass('active').siblings().removeClass('active');
      });
    //# sourceMappingURL=events.js.map