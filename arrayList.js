class ArrayList {
    _list = {};

    length = 0;

    push(item) {
        this._list[this.length] = item;
        this.length++;
    }

    pop() {
        if (this.length > 0) {
            const lastItem = this._list[this.length - 1];
            delete this._list[this.length - 1];
            this.length--;

            return lastItem;
        }

        return void 0;
    }

    get(index) {
        if (this._list[index]) {
            return this._list[index];
        }

        return void 0;
    }

    delete(index) {
        if (this._list[index]) {
            let returnedValue = this._list[index];
            
            if (index == this.length - 1) {
                this.pop();
            }

            else {
                const newList = {};

                for (let key in this._list) {
                    if (key != index) {
                        let keyNumber = Number(key);

                        if (keyNumber < index) {
                            newList[key] = this._list[key];
                        } 
                        
                        if (keyNumber > index) {
                            const currentItem = this._list[key];
                            keyNumber -= 1;
                            newList[keyNumber] = currentItem;
                        }
                    }
                }

                this._list = newList;
                this.length -= 1;
            }

            return returnedValue;
        }

        return void 0;
    }

    serialize() {
        return this._list;
    }
}

const arrayListInstance = new ArrayList();

arrayListInstance.push('test');
arrayListInstance.push('another test');
arrayListInstance.push(1);
arrayListInstance.push(500);
arrayListInstance.push([1, 2, 3]);

console.log(arrayListInstance);

arrayListInstance.delete(0);

console.log(arrayListInstance);

/*
  ArrayList
  
  We are going to approximate an implementation of ArrayList. In JavaScript terms, that means we are
  going to implement an array using objects. You should not use arrays at all in this exercise, just
  objects. Make a class (or constructor function; something you can call new on) called ArrayList.
  ArrayList should have the following properties (in addition to whatever properties you create):
  
  length - integer  - How many elements in the array
  push   - function - accepts a value and adds to the end of the list
  pop    - function - removes the last value in the list and returns it
  get    - function - accepts an index and returns the value at that position
  delete - function - accepts an index, removes value from list, collapses, 
                      and returns removed value

  As always, you can change describe to xdescribe to prevent the unit tests from running while
  you work
*/

