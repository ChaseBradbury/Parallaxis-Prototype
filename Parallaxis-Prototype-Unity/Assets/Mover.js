#pragma strict

var layerPos: int;

function Start () {

}

function Update () {
	if(Input.GetKey("w")){
		this.transform.position.y += 0.01 * layerPos;
	} else if(Input.GetKey("s")){
		this.transform.position.y -= 0.01 * layerPos;
	} else if(Input.GetKey("a")){
		this.transform.position.x -= 0.01 * layerPos;
	} else if(Input.GetKey("d")){
		this.transform.position.x += 0.01 * layerPos;
	}
	
}