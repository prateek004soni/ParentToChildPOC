import { LightningElement,api } from 'lwc';

export default class ChildPOC extends LightningElement {

    className = "greenBar";
    className2 = "greenBar";
    className3 = "greenBar";
    className4 = "greenBar";
    
    @api changeBarColor() {

        this.className = "redBar";
    }

    @api changeBarColor2() {

        this.className2 = "redBar";
    }

    @api changeBarColor3() {

        this.className3 = "redBar";
    }

    @api changeBarColor4() {

        this.className4= "redBar";
    }

    

    handleButtonClick1(){

        this.dispatchEvent(new CustomEvent('close1'));
    }
}