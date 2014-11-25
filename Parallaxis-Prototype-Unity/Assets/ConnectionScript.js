#pragma strict

var star1: Transform;
var star2: Transform;


function Start () {
	var line: EdgeCollider2D = this.GetComponent(EdgeCollider2D);
	var point1: Vector2 = star1.position;
	var point2: Vector2 = star2.position;
	line.points = [point1, point2];
	//line.points[1] = star2.position;
}

function Update () {
	var line: EdgeCollider2D = this.GetComponent(EdgeCollider2D);
	var point1: Vector2 = star1.position;
	var point2: Vector2 = star2.position;
	line.points = [point1, point2];
	Debug.DrawLine(line.points[0], line.points[1], Color.white, 0.0f, true);
}