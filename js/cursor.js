var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var updateProperties = function updateProperties(elem, state) {

	elem.style.setProperty('--x', state.x + 'px');
	elem.style.setProperty('--y', state.y + 'px');
	elem.style.setProperty('--width', state.width + 'px');
	elem.style.setProperty('--height', state.height + 'px');
	elem.style.setProperty('--radius', state.radius);
	elem.style.setProperty('--scale', state.scale);

};

document.querySelectorAll('.cursor').forEach(function (cursor) {

	var onElement = void 0;

	var createState = function createState(e) {

		var defaultState = {
			x: e.clientX,
			y: e.clientY,
			width: 42,
			height: 42,
			radius: '100px' };


		var computedState = {};

		if (onElement != null) {var _onElement$getBoundin =
			onElement.getBoundingClientRect(),top = _onElement$getBoundin.top,left = _onElement$getBoundin.left,width = _onElement$getBoundin.width,height = _onElement$getBoundin.height;
			var radius = window.getComputedStyle(onElement).borderTopLeftRadius;

			computedState.x = left + width / 2;
			computedState.y = top + height / 2;
			computedState.width = width;
			computedState.height = height;
			computedState.radius = radius;
		}

		return _extends({},
		defaultState,
		computedState);


	};

	document.addEventListener('mousemove', function (e) {
		var state = createState(e);
		updateProperties(cursor, state);
	});

//	document.querySelectorAll('a, button').forEach(function (elem) {
//		elem.addEventListener('mouseenter', function () {return onElement = elem;});
//		elem.addEventListener('mouseleave', function () {return onElement = undefined;});
//	});

});