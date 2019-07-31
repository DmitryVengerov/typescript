interface Farewell {
	(name: string) : string;
}

var goodbye : Farewell;
goodbye = function(name) { 
	return "Goodbye, " + name
};