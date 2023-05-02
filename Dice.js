/**
* Dice.js
* @author Kevin Yang
* @since April 30, 2023
* This class defines dice objects with specific functions and properties
*/

class Dice {
    num_of_faces;
    numbers_on_faces;

    constructor(num_of_faces, numbers_on_faces) {
        this.num_of_faces = num_of_faces;
        this.numbers_on_faces = new Array();
        for (let i = 0; i < num_of_faces; i++) {
            this.numbers_on_faces[i] = numbers_on_faces[i];
        }
    }

    /*
    get num_of_faces() {
        return this.num_of_faces;
    }

    set num_of_faces(new_num_of_faces) { 
        this.num_of_faces = new_num_of_faces;
    }
    */

    get_number_at_index(index) {
        return this.numbers_on_faces[index];
    }

    set_number_at_index(index, new_num) {
        this.numbers_on_faces[index] = new_num;
    }

    roll() {
        let index = Math.floor(Math.random() * this.num_of_faces);
        return this.numbers_on_faces[index];
    }
}