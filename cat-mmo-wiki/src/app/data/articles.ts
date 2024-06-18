export class Article {
    public id: string;
    public title: string;
    public image?: string;
    public sections: Section[];

    constructor(id: string, title: string, sections: Section[], image?: string) {
        this.id = id;
        this.title = title;
        this.image = image;
        this.sections = sections;
    }
}

export class Section {
    public sectionTitle: string;
    public sectionText: string;

    constructor(sectionTitle: string, sectionText: string) {
        this.sectionTitle = sectionTitle;
        this.sectionText = sectionText;
    }
}


export const articleArray: Article[] = [
    new Article(
        "copper_sword",
        "Copper Sword",
        [
            new Section("Introduction", "The Copper Sword is a weapon crafted from copper ingots, known for its unique properties."),
            new Section("Obtaining", "The Copper Sword is crafted using two copper ingots and a stick, following the standard sword recipe in the crafting table."),
            new Section("Uses", "The Copper Sword is used as a melee weapon to deal damage to mobs and other players. It has slightly lower durability compared to iron swords but offers a unique aesthetic."),
            new Section("Special Properties", "Over time, the Copper Sword will develop a patina, changing its appearance. This can be prevented by using a honeycomb to wax the sword, similar to copper blocks.")
        ],
        "https://files.catbox.moe/nw9hm5.png"
    ),
    new Article(
        "slime_sword",
        "Slime Sword",
        [
            new Section("Introduction", "The Slime Sword is a unique weapon crafted from slimeballs and sticks, offering special properties."),
            new Section("Obtaining", "The Slime Sword is crafted using two slimeballs and a stick. The slimeballs can be obtained by defeating slimes."),
            new Section("Uses", "The Slime Sword deals damage to mobs and players and has the added effect of causing slight knockback, making it useful for keeping enemies at a distance."),
            new Section("Special Properties", "When hitting an enemy, the Slime Sword has a chance to apply a slowing effect, reducing the target's movement speed temporarily. This makes it particularly useful in combat scenarios.")
        ],
        "https://files.catbox.moe/79e5kv.png"
    ),
 
    new Article(
        "copper_block",
        "Copper Block",
        [
            new Section("Introduction", "Copper blocks are decorative and can be used for various crafting recipes."),
            new Section("Obtaining", "Copper blocks are crafted from copper ingots, which are obtained by smelting raw copper."),
            new Section("Uses", "Copper blocks can be used for building, crafting cut copper, and creating lightning rods and spyglasses."),
            new Section("Oxidation", "Copper blocks gradually oxidize over time, changing their appearance from orange to green. This can be prevented by waxing the block using a honeycomb.")
        ],
        "https://minecraft.wiki/images/Copper_Block_JE1_BE1.png?b75fe&format=original"
    ),
    new Article(
        "slime_block",
        "Slime Block",
        [
            new Section("Introduction", "Slime blocks are bouncy blocks that can be used in redstone contraptions."),
            new Section("Obtaining", "Slime blocks are crafted from nine slimeballs, which are dropped by slimes."),
            new Section("Uses", "Slime blocks can be used to create bouncy surfaces, move blocks in redstone contraptions, and reduce fall damage."),
            new Section("Mechanics", "Entities that land on a slime block will bounce, and slime blocks can move other blocks when pushed or pulled by pistons.")
        ],
        "https://minecraft.wiki/images/Slime_Block_JE2_BE3.png?57b93"
    )
];
