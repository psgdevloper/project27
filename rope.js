class rope{
	constructor(body1,body2, offsetX, offsetY)
	{
		this.offsetX=offsetX
		this.offsetY=offsetY
		var options={
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.offsetX, y:this.offsetY}
		}
		
		this.rope=Constraint.create(options)
		World.add(world,this.rope)
	}

	display()
	{
		var rod=this.rope.bodyA.position;
		var ball=this.rope.bodyB.position;

		strokeWeight(10);

		var Anchor1X=rod.x
		var Anchor1Y=rod.y

		var Anchor2X=ball.x+this.offsetX
		var Anchor2Y=ball.y+this.offsetY
		
		line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
	}

}