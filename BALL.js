class BALL
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:1.3,
			friction:1,
			density:0.2
			
			}
		this.x=x;
		this.y=y;
		this.r=r
		
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var ballpos=this.body.position;
			push()
			translate(ballpos.x, ballpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			fill(255,240,25)
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}