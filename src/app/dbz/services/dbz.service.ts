import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 } from 'uuid';



@Injectable({
    providedIn: 'root'
})
export class DbzService {

    public characters : Character[] = [{
        id: v4(),
        name: 'krillin',
        power:1000
    },{
        id: v4(),
        name: 'Goku',
        power: 10000
    },{
        id: v4(),
        name: 'Vegeta',
        power: 9900
    }];

    AddCharacter(character: Character): void{


        const newCharacter: Character = {id: v4(), ...character };

        this.characters.push(newCharacter);

    }

    // onDeleteCharacter(index:number){
    //     this.characters.splice(index,1);
    // }
deleteCharacterById(id:string){
    this.characters = this.characters.filter(character => character.id !== id);
}


    
}