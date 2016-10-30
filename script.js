$("document").ready(function(){
//create new content
	var newP = $("<p>");
	newP.append("I am a new paragraph that was created when the document was ready.");
	//code below adds a new paragraph to the myDiv ID
	$("#myDiv").html(newP);
//changing existing content
	$("#mythirdTitle").html("I am new text");
})