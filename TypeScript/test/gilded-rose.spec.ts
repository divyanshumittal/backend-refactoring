import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

const expectedOutputAfter1Day = [
    { name: '+5 Dexterity Vest', sellIn: 9, quality: 19 },
    { name: 'Aged Brie', sellIn: 1, quality: 1 },
    { name: 'Elixir of the Mongoose', sellIn: 4, quality: 6 },
    { name: 'Sulfuras, Hand of Ragnaros', sellIn: 0, quality: 80 },
    { name: 'Sulfuras, Hand of Ragnaros', sellIn: -1, quality: 80 },
    {
      name: 'Backstage passes to a TAFKAL80ETC concert',
      sellIn: 14,
      quality: 21
    },
    {
      name: 'Backstage passes to a TAFKAL80ETC concert',
      sellIn: 9,
      quality: 50
    },
    {
      name: 'Backstage passes to a TAFKAL80ETC concert',
      sellIn: 4,
      quality: 50
    },
    { name: 'Conjured Mana Cake', sellIn: 2, quality: 4 },
    { name: 'Random Item', sellIn: 0, quality: 0 }
];

const expectedOutputAfter2Days = [
    { name: '+5 Dexterity Vest', sellIn: 8, quality: 18 },
    { name: 'Aged Brie', sellIn: 0, quality: 2 },
    { name: 'Elixir of the Mongoose', sellIn: 3, quality: 5 },
    { name: 'Sulfuras, Hand of Ragnaros', sellIn: 0, quality: 80 },
    { name: 'Sulfuras, Hand of Ragnaros', sellIn: -1, quality: 80 },
    {
      name: 'Backstage passes to a TAFKAL80ETC concert',
      sellIn: 13,
      quality: 22
    },
    {
      name: 'Backstage passes to a TAFKAL80ETC concert',
      sellIn: 8,
      quality: 50
    },
    {
      name: 'Backstage passes to a TAFKAL80ETC concert',
      sellIn: 3,
      quality: 50
    },
    { name: 'Conjured Mana Cake', sellIn: 1, quality: 2 },
    { name: 'Random Item', sellIn: -1, quality: 0 }
];

const expectedOutputAfter3Days = [
    { name: '+5 Dexterity Vest', sellIn: 7, quality: 17 },
    { name: 'Aged Brie', sellIn: -1, quality: 4 },
    { name: 'Elixir of the Mongoose', sellIn: 2, quality: 4 },
    { name: 'Sulfuras, Hand of Ragnaros', sellIn: 0, quality: 80 },
    { name: 'Sulfuras, Hand of Ragnaros', sellIn: -1, quality: 80 },
    {
      name: 'Backstage passes to a TAFKAL80ETC concert',
      sellIn: 12,
      quality: 23
    },
    {
      name: 'Backstage passes to a TAFKAL80ETC concert',
      sellIn: 7,
      quality: 50
    },
    {
      name: 'Backstage passes to a TAFKAL80ETC concert',
      sellIn: 2,
      quality: 50
    },
    { name: 'Conjured Mana Cake', sellIn: 0, quality: 0 },
    { name: 'Random Item', sellIn: -2, quality: 0 }
];

const calculateQuality = (days) => {
    const items = [
        new Item("+5 Dexterity Vest", 10, 20), //
        new Item("Aged Brie", 2, 0), //
        new Item("Elixir of the Mongoose", 5, 7), //
        new Item("Sulfuras, Hand of Ragnaros", 0, 80), //
        new Item("Sulfuras, Hand of Ragnaros", -1, 80),
        new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
        new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
        new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
        new Item("Conjured Mana Cake", 3, 6),
        new Item("Random item", 1, 1)];
    const gildedRose = new GildedRose(items);
    let output;
    for (let i = 0; i < days; i++) {
        // console.log("-------- day " + i + " --------");
        // console.log("name, sellIn, quality");
        items.forEach(element => {
            console.log(element.name + ' ' + element.sellIn + ' ' + element.quality);
    
        });
        // console.log();
        output = gildedRose.updateQuality();
    }

    return output;
}


describe('Gilded Rose', function () {
    describe('+5 Dexterity Vest', function() {
        it('test +5 Dexterity Vest after 1 day', function() {
            const output = calculateQuality(1);
            expect(output[0].name).to.equal('+5 Dexterity Vest');
            expect(output[0].sellIn).to.equal(expectedOutputAfter1Day[0].sellIn);
            expect(output[0].quality).to.equal(expectedOutputAfter1Day[0].quality);
        });
    
        it('test +5 Dexterity Vest after 2 days', function() {
            const output = calculateQuality(2);
            expect(output[0].name).to.equal('+5 Dexterity Vest');
            expect(output[0].sellIn).to.equal(expectedOutputAfter2Days[0].sellIn);
            expect(output[0].quality).to.equal(expectedOutputAfter2Days[0].quality);
        });
    
        it('test +5 Dexterity Vest after 3 days', function() {
            const output = calculateQuality(3);
            expect(output[0].name).to.equal('+5 Dexterity Vest');
            expect(output[0].sellIn).to.equal(expectedOutputAfter3Days[0].sellIn);
            expect(output[0].quality).to.equal(expectedOutputAfter3Days[0].quality);
        });
    });

    describe('Aged Brie', function() {
        it('test Aged Brie after 1 day', function() {
            const output = calculateQuality(1);
            expect(output[1].name).to.equal('Aged Brie');
            expect(output[1].sellIn).to.equal(expectedOutputAfter1Day[1].sellIn);
            expect(output[1].quality).to.equal(expectedOutputAfter1Day[1].quality);
        });
    
        it('test Aged Brie after 2 days', function() {
            const output = calculateQuality(2);
            expect(output[1].name).to.equal('Aged Brie');
            expect(output[1].sellIn).to.equal(expectedOutputAfter2Days[1].sellIn);
            expect(output[1].quality).to.equal(expectedOutputAfter2Days[1].quality);
        });
    
        it('test Aged Brie after 3 days', function() {
            const output = calculateQuality(3);
            expect(output[1].name).to.equal('Aged Brie');
            expect(output[1].sellIn).to.equal(expectedOutputAfter3Days[1].sellIn);
            expect(output[1].quality).to.equal(expectedOutputAfter3Days[1].quality);
        });
    });

    describe('Elixir of the Mongoose', function() {
        it('test Elixir of the Mongoose after 1 day', function() {
            const output = calculateQuality(1);
            expect(output[2].name).to.equal('Elixir of the Mongoose');
            expect(output[2].sellIn).to.equal(expectedOutputAfter1Day[2].sellIn);
            expect(output[2].quality).to.equal(expectedOutputAfter1Day[2].quality);
        });
    
        it('test Elixir of the Mongoose after 2 days', function() {
            const output = calculateQuality(2);
            expect(output[2].name).to.equal('Elixir of the Mongoose');
            expect(output[2].sellIn).to.equal(expectedOutputAfter2Days[2].sellIn);
            expect(output[2].quality).to.equal(expectedOutputAfter2Days[2].quality);
        });
    
        it('test Elixir of the Mongoose after 3 days', function() {
            const output = calculateQuality(3);
            expect(output[2].name).to.equal('Elixir of the Mongoose');
            expect(output[2].sellIn).to.equal(expectedOutputAfter3Days[2].sellIn);
            expect(output[2].quality).to.equal(expectedOutputAfter3Days[2].quality);
        });
    });

    describe('Sulfuras, Hand of Ragnaros test set 1', function() {
        it('test Sulfuras, Hand of Ragnaros after 1 day', function() {
            const output = calculateQuality(1);
            expect(output[3].name).to.equal('Sulfuras, Hand of Ragnaros');
            expect(output[3].sellIn).to.equal(expectedOutputAfter1Day[3].sellIn);
            expect(output[3].quality).to.equal(expectedOutputAfter1Day[3].quality);
        });
    
        it('test Sulfuras, Hand of Ragnaros after 2 days', function() {
            const output = calculateQuality(2);
            expect(output[3].name).to.equal('Sulfuras, Hand of Ragnaros');
            expect(output[3].sellIn).to.equal(expectedOutputAfter2Days[3].sellIn);
            expect(output[3].quality).to.equal(expectedOutputAfter2Days[3].quality);
        });
    
        it('test Sulfuras, Hand of Ragnaros after 3 days', function() {
            const output = calculateQuality(3);
            expect(output[3].name).to.equal('Sulfuras, Hand of Ragnaros');
            expect(output[3].sellIn).to.equal(expectedOutputAfter3Days[3].sellIn);
            expect(output[3].quality).to.equal(expectedOutputAfter3Days[3].quality);
        });
    });

    describe('Sulfuras, Hand of Ragnaros test set 2', function() {
        it('test Sulfuras, Hand of Ragnaros after 1 day', function() {
            const output = calculateQuality(1);
            expect(output[4].name).to.equal('Sulfuras, Hand of Ragnaros');
            expect(output[4].sellIn).to.equal(expectedOutputAfter1Day[4].sellIn);
            expect(output[4].quality).to.equal(expectedOutputAfter1Day[4].quality);
        });
    
        it('test Sulfuras, Hand of Ragnaros after 2 days', function() {
            const output = calculateQuality(2);
            expect(output[4].name).to.equal('Sulfuras, Hand of Ragnaros');
            expect(output[4].sellIn).to.equal(expectedOutputAfter2Days[4].sellIn);
            expect(output[4].quality).to.equal(expectedOutputAfter2Days[4].quality);
        });
    
        it('test Sulfuras, Hand of Ragnaros after 3 days', function() {
            const output = calculateQuality(3);
            expect(output[4].name).to.equal('Sulfuras, Hand of Ragnaros');
            expect(output[4].sellIn).to.equal(expectedOutputAfter3Days[4].sellIn);
            expect(output[4].quality).to.equal(expectedOutputAfter3Days[4].quality);
        });
    });

    describe('Backstage passes to a TAFKAL80ETC concert test set 1', function() {
        it('test Backstage passes to a TAFKAL80ETC concert after 1 day', function() {
            const output = calculateQuality(1);
            expect(output[5].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
            expect(output[5].sellIn).to.equal(expectedOutputAfter1Day[5].sellIn);
            expect(output[5].quality).to.equal(expectedOutputAfter1Day[5].quality);
        });
    
        it('test Backstage passes to a TAFKAL80ETC concert after 2 days', function() {
            const output = calculateQuality(2);
            expect(output[5].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
            expect(output[5].sellIn).to.equal(expectedOutputAfter2Days[5].sellIn);
            expect(output[5].quality).to.equal(expectedOutputAfter2Days[5].quality);
        });
    
        it('test Backstage passes to a TAFKAL80ETC concert after 3 days', function() {
            const output = calculateQuality(3);
            expect(output[5].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
            expect(output[5].sellIn).to.equal(expectedOutputAfter3Days[5].sellIn);
            expect(output[5].quality).to.equal(expectedOutputAfter3Days[5].quality);
        });
    });

    describe('Backstage passes to a TAFKAL80ETC concert test set 2', function() {
        it('test Backstage passes to a TAFKAL80ETC concert after 1 day', function() {
            const output = calculateQuality(1);
            expect(output[6].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
            expect(output[6].sellIn).to.equal(expectedOutputAfter1Day[6].sellIn);
            expect(output[6].quality).to.equal(expectedOutputAfter1Day[6].quality);
        });
    
        it('test Backstage passes to a TAFKAL80ETC concert after 2 days', function() {
            const output = calculateQuality(2);
            expect(output[6].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
            expect(output[6].sellIn).to.equal(expectedOutputAfter2Days[6].sellIn);
            expect(output[6].quality).to.equal(expectedOutputAfter2Days[6].quality);
        });
    
        it('test Backstage passes to a TAFKAL80ETC concert after 3 days', function() {
            const output = calculateQuality(3);
            expect(output[6].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
            expect(output[6].sellIn).to.equal(expectedOutputAfter3Days[6].sellIn);
            expect(output[6].quality).to.equal(expectedOutputAfter3Days[6].quality);
        });
    });

    describe('Backstage passes to a TAFKAL80ETC concert test set 3', function() {
        it('test Backstage passes to a TAFKAL80ETC concert after 1 day', function() {
            const output = calculateQuality(1);
            expect(output[7].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
            expect(output[7].sellIn).to.equal(expectedOutputAfter1Day[7].sellIn);
            expect(output[7].quality).to.equal(expectedOutputAfter1Day[7].quality);
        });
    
        it('test Backstage passes to a TAFKAL80ETC concert after 2 days', function() {
            const output = calculateQuality(2);
            expect(output[7].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
            expect(output[7].sellIn).to.equal(expectedOutputAfter2Days[7].sellIn);
            expect(output[7].quality).to.equal(expectedOutputAfter2Days[7].quality);
        });
    
        it('test Backstage passes to a TAFKAL80ETC concert after 3 days', function() {
            const output = calculateQuality(3);
            expect(output[7].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
            expect(output[7].sellIn).to.equal(expectedOutputAfter3Days[7].sellIn);
            expect(output[7].quality).to.equal(expectedOutputAfter3Days[7].quality);
        });
    });

    describe('Conjured Mana Cake', function() {
        it('test Conjured Mana Cake after 1 day', function() {
            const output = calculateQuality(1);
            expect(output[8].name).to.equal('Conjured Mana Cake');
            expect(output[8].sellIn).to.equal(expectedOutputAfter1Day[8].sellIn);
            expect(output[8].quality).to.equal(expectedOutputAfter1Day[8].quality);
        });
    
        it('test Conjured Mana Cake after 2 days', function() {
            const output = calculateQuality(2);
            expect(output[8].name).to.equal('Conjured Mana Cake');
            expect(output[8].sellIn).to.equal(expectedOutputAfter2Days[8].sellIn);
            expect(output[8].quality).to.equal(expectedOutputAfter2Days[8].quality);
        });
    
        it('test Conjured Mana Cake after 3 days', function() {
            const output = calculateQuality(3);
            expect(output[8].name).to.equal('Conjured Mana Cake');
            expect(output[8].sellIn).to.equal(expectedOutputAfter3Days[8].sellIn);
            expect(output[8].quality).to.equal(expectedOutputAfter3Days[8].quality);
        });
    });

    describe('Random item', function() {
        it('test Random item after 1 day', function() {
            const output = calculateQuality(1);
            expect(output[9].name).to.equal('Random item');
            expect(output[9].sellIn).to.equal(expectedOutputAfter1Day[9].sellIn);
            expect(output[9].quality).to.equal(expectedOutputAfter1Day[9].quality);
        });
    
        it('test Random item after 2 days', function() {
            const output = calculateQuality(2);
            expect(output[9].name).to.equal('Random item');
            expect(output[9].sellIn).to.equal(expectedOutputAfter2Days[9].sellIn);
            expect(output[9].quality).to.equal(expectedOutputAfter2Days[9].quality);
        });
    
        it('test Random item after 3 days', function() {
            const output = calculateQuality(3);
            expect(output[9].name).to.equal('Random item');
            expect(output[9].sellIn).to.equal(expectedOutputAfter3Days[9].sellIn);
            expect(output[9].quality).to.equal(expectedOutputAfter3Days[9].quality);
        });
    });

});
