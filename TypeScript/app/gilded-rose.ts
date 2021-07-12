export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateAgedBrie = (i) => {
        if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
        }
        this.items[i].sellIn = this.items[i].sellIn - 1;
        if (this.items[i].sellIn < 0) {
            if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
            }
        }
    }

    updateBackstagePasses = (i) => {
        if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
            if (this.items[i].sellIn < 11) {
                if (this.items[i].quality < 50) {
                    this.items[i].quality = this.items[i].quality + 1
                }
            }
            if (this.items[i].sellIn < 6) {
                if (this.items[i].quality < 50) {
                    this.items[i].quality = this.items[i].quality + 1
                }
            }
        }
        this.items[i].sellIn = this.items[i].sellIn - 1;
        if (this.items[i].sellIn < 0) {
            this.items[i].quality = this.items[i].quality - this.items[i].quality
        }
    }

    updateConjured = (i) => {
        if (this.items[i].quality > 0) {
            this.items[i].quality = this.items[i].quality - 1;
            this.items[i].quality = this.items[i].quality - 1;
        }
        this.items[i].sellIn = this.items[i].sellIn - 1;
        if (this.items[i].sellIn < 0) {
            if (this.items[i].quality > 0) {
                this.items[i].quality = this.items[i].quality - 1
                this.items[i].quality = this.items[i].quality - 1;
            }
        }
    };

    updateDefaultItem = (i) => {
        if (this.items[i].quality > 0) {
            this.items[i].quality = this.items[i].quality - 1;
        }
        this.items[i].sellIn = this.items[i].sellIn - 1;
        if (this.items[i].sellIn < 0) {
            if (this.items[i].quality > 0) {
                this.items[i].quality = this.items[i].quality - 1;
            }
        }
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            const currentItem = this.items[i];
            switch(currentItem.name) {
                case 'Aged Brie': this.updateAgedBrie(i); break;
                case 'Backstage passes to a TAFKAL80ETC concert': this.updateBackstagePasses(i); break;
                case 'Sulfuras, Hand of Ragnaros': break;
                case 'Conjured Mana Cake': this.updateConjured(i); break;
                default: this.updateDefaultItem(i);
            }
        }

        return this.items;
    }
}
