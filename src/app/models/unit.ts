import { Rune } from './rune';
import { WeaponAbility } from './weaponAbility';
export class Unit {
    constructor(
        public name:string,
        public life:number,
        public speed:number,
        public imageURL:string,
        public affinity:string,
        public number:number,
        public uuid:string,
        public kernel: Rune,
        public runes: WeaponAbility,
        public captureDate:Date,
        public createdDate:Date
    ) { }
}
