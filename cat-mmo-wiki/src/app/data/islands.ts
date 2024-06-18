
export class Island {
    public name: string
    public image: string
    public description: string
    public enemies: IslandEnemy[]
    constructor(name: string, image: string, description: string, enemies: IslandEnemy[]){
        this.name=name
        this.image=image
        this.description=description
        this.enemies=enemies
    }
}

export class IslandEnemy { //add island enemy pictures later
    public name: string
    constructor(name: string){
        this.name=name
    }
}

export const islandArray: Island[] = [
    new Island("Spawn Island", "https://i.imgur.com/20zHWY4.jpeg", "The island you start playing on!", [new IslandEnemy("Slime")]),
    new Island("Spawn Island", "https://i.imgur.com/20zHWY4.jpeg", "The island you start playing on!", [new IslandEnemy("Slime")]),

]