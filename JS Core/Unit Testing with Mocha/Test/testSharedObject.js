let expect = require("chai").expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

//let sharedObject = require("../04.Shared Object").sharedObject;


let sharedObject = {
    name: null,
    income: null,
    changeName: function (name) {
        if (name.length === 0) {
            return;
        }
        this.name = name;
        let newName = $('#name');
        newName.val(this.name);
    },
    changeIncome: function (income) {
        if (!Number.isInteger(income) || income <= 0) {
            return;
        }
        this.income = income;
        let newIncome = $('#income');
        newIncome.val(this.income);
    },
    updateName: function () {
        let newName = $('#name').val();
        if (newName.length === 0) {
            return;
        }
        this.name = newName;
    },
    updateIncome: function () {
        let newIncome = $('#income').val();
        if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
            return;
        }
        this.income = Number(newIncome);
    }
};


describe("sharedObject", function () {
    beforeEach('init the object', function () {
        document.body.innerHTML = `<div id="wrapper">
                <input type="text" id="name">
                <input type="text" id="income">
            </div>`;
    });

    describe("changeName", function () {
        it("with invalid parameters, should not change name property", function () {
            sharedObject.changeName("");
            expect(sharedObject.name).to.equal(null);
        });

        it("with invalid parameters, should not change name property", function () {
            sharedObject.name = "Pesho";
            sharedObject.changeName("");
            expect(sharedObject.name).to.equal("Pesho");
        });

        it("with invalid parameters with preexisting value, should not change name property", function () {
            let nameTextBox = $('#name');
            nameTextBox.val("Ivan");
            sharedObject.changeName("");
            expect(nameTextBox.val()).to.equal("Ivan");
        });

        it("with valid name, should change name property", function () {
            sharedObject.changeName("Joro");
            expect(sharedObject.name).to.equal("Joro");
        });

        it("with valid name, should change name textBox property", function () {
            sharedObject.changeName("Stamat");
            let nameTextBox = $('#name');
            expect(nameTextBox.val()).to.equal("Stamat");
        });
    });
    describe("changeIncome", function () {
        it("with invalid parameters, should not change income property", function () {
            sharedObject.income = 130;
            sharedObject.changeIncome({Name: "pesho"});
            expect(sharedObject.income).to.equal(130);
        });

        it("with floating point number, should not change income property", function () {
            sharedObject.income = 13;
            sharedObject.changeIncome(245.24);
            expect(sharedObject.income).to.equal(13);
        });

        it("with negative integer, should not change income property", function () {
            sharedObject.income = 13;
            sharedObject.changeIncome(-10);
            expect(sharedObject.income).to.equal(13);
        });

        it("with zero, should not change income property", function () {
            sharedObject.income = 13;
            sharedObject.changeIncome(0);
            expect(sharedObject.income).to.equal(13);
        });

        it("with valid integer, should change income property", function () {
            sharedObject.changeIncome(56);
            expect(sharedObject.income).to.equal(56);
        });

        it("with invalid parameters, should not change income textbox", function () {
            let incomeTextBox = $('#income');
            incomeTextBox.val('5');
            sharedObject.changeIncome({Name: "pesho"});
            expect(incomeTextBox.val()).to.equal('5');
        });

        it("with floating point number, should not change income textbox", function () {
            let incomeTextBox = $('#income');
            incomeTextBox.val('5');
            sharedObject.changeIncome(24.55);
            expect(incomeTextBox.val()).to.equal('5');
        });

        it("with negative integer, should not change income textbox", function () {
            let incomeTextBox = $('#income');
            incomeTextBox.val('5');
            sharedObject.changeIncome(-15);
            expect(incomeTextBox.val()).to.equal('5');
        });

        it("with zero, should not change income textbox", function () {
            let incomeTextBox = $('#income');
            incomeTextBox.val('5');
            sharedObject.changeIncome(0);
            expect(incomeTextBox.val()).to.equal('5');
        });

        it("with zero, should not change income textbox", function () {
            sharedObject.changeIncome(56);
            expect(sharedObject.income).to.equal(56);
        });

        it("with zero, should not change income textbox", function () {
            sharedObject.changeIncome(56);
            let incomeTextBox = $('#income');
            expect(incomeTextBox.val()).to.equal('56');
        });
    });

    describe("updateName", function () {
        it("with invalid parameters, should not change name property", function () {
            sharedObject.name = "test";
            let nameTextBox = $('#name');
            nameTextBox.val("");
            sharedObject.updateName();
            expect(sharedObject.name).to.equal("test");
        });

        it("with valid name, should change name property", function () {
            let nameTextBox = $('#name');
            nameTextBox.val("testing");
            sharedObject.updateName();
            expect(sharedObject.name).to.equal("testing");
        });
    });

    describe("updateIncome", function () {
        it("with non numbers string, should not change income property", function () {
            sharedObject.income = 55;
            let incomeTextBox = $('#income');
            incomeTextBox.val("pesho");
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(55);
        });

        it("with a floating point string, should not change income property", function () {
            sharedObject.income = 55;
            let incomeTextBox = $('#income');
            incomeTextBox.val("23.17");
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(55);
        });

        it("with a negative numbers string, should not change income property", function () {
            sharedObject.income = 55;
            let incomeTextBox = $('#income');
            incomeTextBox.val("-20");
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(55);
        });

        it("with a empty string, should not change income property", function () {
            sharedObject.income = 55;
            let incomeTextBox = $('#income');
            incomeTextBox.val("");
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(55);
        });

        it("with a valid numbers string, should change income property", function () {
            let incomeTextBox = $('#income');
            incomeTextBox.val("177");
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(177);
        });
    });

});
