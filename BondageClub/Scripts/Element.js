"use strict";

// Returns the current value of an element
function ElementValue(ID, Value) {
	if (document.getElementById(ID) != null)
		if (Value == null)
			return document.getElementById(ID).value.trim();
		else 
			document.getElementById(ID).value = Value;
}

// Creates a new text area element in the main document
function ElementCreateTextArea(ID) {
	if (document.getElementById(ID) == null) {
		var TextArea = document.createElement("TextArea");
		TextArea.setAttribute("ID", ID);
		TextArea.setAttribute("name", ID);
		TextArea.setAttribute("readonly", "readonly");
		TextArea.addEventListener("keydown", KeyDown);
		document.body.appendChild(TextArea);
	}
}

// Creates a new text input element in the main document
function ElementCreateInput(ID, Type, Value, MaxLength) {
	if (document.getElementById(ID) == null) {
		var Input = document.createElement("input");
		Input.setAttribute("ID", ID);
		Input.setAttribute("name", ID);
		Input.setAttribute("type", Type);
		Input.setAttribute("value", Value);
		Input.setAttribute("maxlength", MaxLength);
		Input.setAttribute("onfocus", "this.removeAttribute('readonly');");
		Input.addEventListener("keydown", KeyDown);
		document.body.appendChild(Input);
	}
}

// Removes an element from the main document
function ElementRemove(ID) {
	if (document.getElementById(ID) != null)
		document.getElementById(ID).parentNode.removeChild(document.getElementById(ID));
}

// Draw a regular HTML element at a specific position
function ElementPosition(ElementID, X, Y, W) {
	
	// Different positions based on the width/height ratio
	var Font;
	var Height;
	var Left;
	var Width;
	var Top;
	if (DrawScreenWidth <= DrawScreenHeight * 2) {
		Font = (DrawScreenWidth / 50);
		Height = Font * 1.15;
		Left = ((X - (W / 2)) * DrawScreenWidth / 2000);
		Width = (W * DrawScreenWidth / 2000) - 18;
		Top = (Y * DrawScreenWidth / 2000) + ((DrawScreenHeight * 2 - DrawScreenWidth) / 4) - (Height / 2);
	} else {
		Font = (DrawScreenHeight / 25);
		Height = Font * 1.15;
		Left = ((X - (W / 2)) * DrawScreenHeight / 1000) + (DrawScreenWidth - DrawScreenHeight * 2) / 2;
		Width = (W * DrawScreenHeight / 1000) - 18;
		Top = (Y * DrawScreenHeight / 1000) - (Height / 2);
	}

	// Sets the element style
	document.getElementById(ElementID).setAttribute("style", "font-size:" + Font + "px; font-family:Arial; position:absolute; padding-left:10px; left:" + Left + "px; top:" + Top + "px; width:" + Width + "px; height:" + Height + "px;");
	
}

// Draw a regular HTML element at a specific position
function ElementPositionFix(ElementID, Font, X, Y, W, H) {
	
	// Different positions based on the width/height ratio
	var Left;
	var Width;
	var Top;
	var Height;
	if (DrawScreenWidth <= DrawScreenHeight * 2) {
		Font = Font * DrawScreenWidth / 2000;
		Left = X * DrawScreenWidth / 2000;
		Width = W * DrawScreenWidth / 2000 - 13;
		Top = (Y * DrawScreenWidth / 2000) + ((DrawScreenHeight * 2 - DrawScreenWidth) / 4);
		Height = H * DrawScreenWidth / 2000 - 8;
	} else {
		Font = Font * DrawScreenHeight / 1000;
		Left = (X * DrawScreenHeight / 1000) + (DrawScreenWidth - DrawScreenHeight * 2) / 2;
		Width = W * DrawScreenHeight / 1000 - 13;
		Top = Y * DrawScreenHeight / 1000;
		Height = H * DrawScreenHeight / 1000 - 8;
	}

	// Sets the element style
	document.getElementById(ElementID).setAttribute("style", "font-size:" + Font + "px; font-family:Arial; position:absolute; padding-left:10px; left:" + Left + "px; top:" + Top + "px; width:" + Width + "px; height:" + Height + "px; resize: none;");
	
}

// Scrolls to the end of a specified element
function ElementScrollToEnd(ID) {
	if (document.getElementById(ID) != null) {
		var element = document.getElementById(ID);
		element.focus();
		element.selectionStart = element.selectionEnd = element.value.length;
	}
}

// Sets focus to the specified element
function ElementFocus(ID) {
	if (document.getElementById(ID) != null)
		document.getElementById(ID).focus();
}