'use strict';
 class Shape {
     constructor(div) {
         this.div = div;
     }
     set name(name) {
         this._name = name;
     }
     get name() {
         return this._name;
     }
     set colorName(colorName) {
         this._colorName = colorName;
         
     }
     get colorName() {
         return this._colorName;
     }
     set colorValue(colorValue) {
         this._colorValue = colorValue;     
         this.div.style.backgroundColor =colorValue;
     }
     get colorValue() {
         return this._colorValue;
     }
    
     getInfo() {
         return `${this._colorName} ${this._name}`;
     }
     
     
}
export { Shape }