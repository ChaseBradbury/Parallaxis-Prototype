#pragma strict

var canJump: boolean = true;

function Start () {

}

function Update () {
	if(Input.GetKey("a")){
		this.transform.position.x -= 0.02;
	}
	if(Input.GetKey("d")){
		this.transform.position.x += 0.02;
	}
	if(Input.GetKeyDown("space") && canJump){
		this.rigidbody2D.velocity.y += 3; //jump
		canJump = false; //Disable jumping until landing
	}
}

function OnCollisionEnter2D(other : Collision2D){
	//if(other.transform.tag == "Ground"){ //If the player lands on ground
    	canJump = true; //allow him to jump again
	//}
}