
class MyMap<T> {
    
    private map: {[key: string]: T} = {};

    setItem(key: string, item: T) {
        this.map[key] = item;
    }

    getItem(key: string): T {
        return this.map[key];
    }

    clear() {
        this.map = {};
    }

    printMap() {
        for (let key in this.map) {
            console.log(key, this.map[key]);
        }
    }
}

const numberMap = new MyMap<number>();

numberMap.setItem("Apples", 10);
numberMap.setItem("Bananas", 2);

console.log(numberMap.getItem("Apples"));
numberMap.printMap();
numberMap.clear();
numberMap.printMap();
