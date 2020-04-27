var bullet,wall,weight,speed,thick,damage;
function setup() {
  createCanvas(1500,400);
  weight = random(30,52);
  speed = random(223,321);
  thick = random(22,83);
bullet= new Bullet(weight,speed);
wall= new Wall(thick);
damage = (0.5*weight*speed*speed)/(thick*thick*thick);
}

function draw() {
  background("blue");  
  if (hasCollided(bullet,wall)) {
    
    if(damage > 10) {
      bullet.sprite.velocityX  = 0;
      wall.shapeColor =  color(255,0,0);
    }
    bullet.sprite.velocityX = 0;
    wall.shapeColor  = color(0,255,0);
  }
  drawSprites();
}
class Wall {
  constructor(thickness) {
      this.x = 1200;
      this.y  = 200;
      this.thickness = thickness;
      this.sprite = createSprite(this.x,this.y,this.thickness,this.thickness*2);
      this.sprite.shapeColor = color(80,80,80);
  }
}
class Bullet {
  constructor(weight,speed) {
  this.x = 50
  this.y = 200
  this.sprite = createSprite(this.x,this.y,50,50);
  this.weight= weight;
  this.speed= speed
  this.sprite.velocityX= this.speed;
  this.sprite.shapeColor=color(255);
}

}

function hasCollided(bullet,wall) {
  bulletRightEdge=bullet.sprite.x + bullet.sprite.width;
  wallLeftEdge= wall.sprite.x;
  if (bulletRightEdge>=wallLeftEdge)
  { return true
  
  }
  return false
  }
