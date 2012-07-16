function createElement(type, value, attrs, className, init) {
	var el = {};
	
	el.type = type;
	el.value = value || "";
	el.attributes = attrs || {};
	el.className = className || '';
	el.dispatchEvent = sinon.stub();

	if (init === undefined || init) {
		formerly.initElement(el);
	}

	return el;
}