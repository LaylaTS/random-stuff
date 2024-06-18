export class Weapon {
    public name: string
    public id: string
    public description: string
    public rarity: string
    public stats: string
    public crafting: CraftingMaterial[]
    public image: string
    constructor(name: string, id: string, description: string, rarity: string, stats: string, crafting: CraftingMaterial[], image:string){
      this.name = name
      this.id = id
      this.description = description
      this.rarity = rarity
      this.stats = stats
      this.crafting = crafting
      this.image = image
    }
  }
  
  export class CraftingMaterial {
    public name: string
    public icon: string
    public amount: number
    constructor(name: string, icon: string, amount: number){
      this.name = name
      this.icon = icon
      this.amount = amount
    }
  }

  export const weaponArray = [
      new Weapon("Slime Sword", "slime_sword", "An early game weapon", "Common", "20 Damage", [new CraftingMaterial("Slime Block", "https://minecraft.wiki/images/Slime_Block_JE2_BE3.png?57b93", 5), new CraftingMaterial("Copper Block", "https://minecraft.wiki/images/Copper_Block_JE1_BE1.png?b75fe&format=original", 7)], "https://files.catbox.moe/79e5kv.png"),
      new Weapon("Copper Sword", "copper_sword", "An early game weapon", "Common", "20 Damage", [new CraftingMaterial("Slime Block", "https://minecraft.wiki/images/Slime_Block_JE2_BE3.png?57b93",6 )], "https://files.catbox.moe/nw9hm5.png"),
      new Weapon("Slime Sword", "slime_sword", "An early game weapon", "Common", "20 Damage", [new CraftingMaterial("Slime Block", "https://minecraft.wiki/images/Slime_Block_JE2_BE3.png?57b93", 5), new CraftingMaterial("Copper Block", "https://minecraft.wiki/images/Copper_Block_JE1_BE1.png?b75fe&format=original", 7)], "https://files.catbox.moe/79e5kv.png"),
      new Weapon("Copper Sword", "copper_sword", "An early game weapon", "Common", "20 Damage", [new CraftingMaterial("Slime Block", "https://minecraft.wiki/images/Slime_Block_JE2_BE3.png?57b93",6 )], "https://files.catbox.moe/nw9hm5.png"),
      new Weapon("Slime Sword", "slime_sword", "An early game weapon", "Common", "20 Damage", [new CraftingMaterial("Slime Block", "https://minecraft.wiki/images/Slime_Block_JE2_BE3.png?57b93", 5), new CraftingMaterial("Copper Block", "https://minecraft.wiki/images/Copper_Block_JE1_BE1.png?b75fe&format=original", 7)], "https://files.catbox.moe/79e5kv.png"),
      new Weapon("Copper Sword", "copper_sword", "An early game weapon", "Common", "20 Damage", [new CraftingMaterial("Slime Block", "https://minecraft.wiki/images/Slime_Block_JE2_BE3.png?57b93",6 )], "https://files.catbox.moe/nw9hm5.png"),
  ]