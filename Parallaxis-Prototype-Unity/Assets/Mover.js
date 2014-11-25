#pragma strict

var layerPos: int;
var lastMouseCoordinate = Vector3.zero;

function Start () {
	//lastMouseCoordinate = Vector3.zero;
}

function Update () {
	var mouseDelta = Input.mousePosition - lastMouseCoordinate;
	var xmag = Mathf.Abs(mouseDelta.x);
	var ymag = Mathf.Abs(mouseDelta.y);
	
	if(xmag > ymag) {
	//mouse is moving mostly along the x axis
	
	if(mouseDelta.x > 0){
		//RIGHT
		this.transform.position.x += 0.01 * layerPos;
	}
	else {
		//LEFT
		this.transform.position.x -= 0.01 * layerPos;
		}
	}
	else if (ymag > xmag) {
	//mouse is moving mostly along y axis
	
		if (mouseDelta.y > 0){
			//UP
			this.transform.position.y += 0.01 * layerPos;
			}
		else {
			//DOWN
			this.transform.position.y -= 0.01 * layerPos;
		}
	}
	else {
		// NO MOVEMENT
		// OR PERFECTLY SIDEWAYs
		}	
		
	lastMouseCoordinate = Input.mousePosition;
	
	/*if(Input.GetKey("w")){
		this.transform.position.y += 0.01 * layerPos;
	} else if(Input.GetKey("s")){
		this.transform.position.y -= 0.01 * layerPos;
	} else if(Input.GetKey("a")){
		this.transform.position.x -= 0.01 * layerPos;
	} else if(Input.GetKey("d")){
		this.transform.position.x += 0.01 * layerPos;
	}
	*/
	
}