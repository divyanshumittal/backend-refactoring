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

    hasSellByPassed = (i) => this.items[i].sellIn < 0;

    isQualityGood = (i) => this.items[i].quality > 0;

    updateAgedBrie = (i) => {
        if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
        }
        this.items[i].sellIn = this.items[i].sellIn - 1;
        if (this.hasSellByPassed(i) && this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
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
        if (this.hasSellByPassed(i)) {
            this.items[i].quality = this.items[i].quality - this.items[i].quality
        }
    }

    updateConjured = (i) => {
        if (this.isQualityGood(i)) {
            this.items[i].quality = this.items[i].quality - 2;
        }
        this.items[i].sellIn = this.items[i].sellIn - 1;
        if (this.hasSellByPassed(i)) {
            if (this.isQualityGood(i)) {
                this.items[i].quality = this.items[i].quality - 2;
            }
        }
    };

    updateDefaultItem = (i) => {
        if (this.isQualityGood(i)) {
            this.items[i].quality = this.items[i].quality - 1;
        }
        this.items[i].sellIn = this.items[i].sellIn - 1;
        if (this.hasSellByPassed(i)) {
            if (this.isQualityGood(i)) {
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
