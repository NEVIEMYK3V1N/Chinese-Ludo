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
        this.numbers_on_faces = numbers_on_faces;
    }

    // by default - standard dice with 1-6 on 6 faces
    constructor() {
        this.num_of_faces = 6;
        const nums = [];
        for (i = 0; i < this.num_of_faces; i++) {
            nums[i] = i + 1;
        }
        this.numbers_on_faces = nums;
    }

    get n_o_faces() {
        return this.num_of_faces;
    }

    set n_o_faces(new_num_of_faces) { 
        this.num_of_faces = new_num_of_faces;
    }

    get nums_o_fcs() {
        return this.numbers_on_faces;
    }

    set nums_o_fcs(new_numbers_on_faces) {
        this.numbers_on_faces = new_numbers_on_faces;
    }

    roll() {
        index = Math.floor(Math.random() * this.num_of_faces);
        return this.numbers_on_faces[index];
    }
}