//my thisertation.


console.log(this)

////////////

function globalThis() {
    console.log(this)
}
globalThis()

////////////

const stillGlobal = function () {
    console.log(this)
}
stillGlobal()

////////////

const thisIsAnObject = {
    is: "method this",
    thisIsAMethod: function () { console.log(this.is) }
}

thisIsAnObject.thisIsAMethod()

////////////

class NowThisIsClassy {
    constructor() {
        this.is = "classy this"
    }
    whoThis() {
        console.log(this.is)
    }
}

const classy = new NowThisIsClassy
classy.whoThis()

////////////

function NewThisWhoThis() {
    this.is = "new this"
}
NewThisWhoThis.prototype.thisIsWhoThis = function () {
    console.log(this.is)
}
const newThis = new NewThisWhoThis()
newThis.thisIsWhoThis()


////////////

function noNewThis() {
    const tHiS = Object.create(thisIsTheMethods)
    tHiS.is = '__proto__ this'
    return tHiS
}
const thisIsTheMethods = {
    doThis: function () {
        console.log(this.is)
    }
}

const whyWouldYou = noNewThis()
whyWouldYou.doThis()

////////////

const oneBindableBoi = { is: "bound this" }

function bindMe() {
    console.log(this.is)
}

const bound = bindMe.bind(oneBindableBoi)

bound()

////////////

const thisIsWhatWeCallThis = {
    is: undefined
}

function whatDoWeCallThis(whatWeCallThis) {
    this.is = whatWeCallThis
    console.log(this.is)
}

whatDoWeCallThis.call(thisIsWhatWeCallThis, "call this")

////////////

const whatAboutArrowFunctions = {
    is: 'arrow this',
    nowItsGlobalAgain: () => console.log(this),
    butIfYouDoThis: function () {
        console.log(this.is)
    },
    thisShouldWorkRight: function () {
        console.log(this.is)
    },
    orEvenThis: function () {
        const nowItsJustGettingRedicuThis = () => { console.log(this.is) }
        nowItsJustGettingRedicuThis()
    }
}

whatAboutArrowFunctions.nowItsGlobalAgain()     // T_T
whatAboutArrowFunctions.butIfYouDoThis()        // Okay?
whatAboutArrowFunctions.orEvenThis()            // w.... what?
const butNowIfYouDoThis = whatAboutArrowFunctions.thisShouldWorkRight
butNowIfYouDoThis()
const soYouHaveToDoThis = whatAboutArrowFunctions.thisShouldWorkRight.bind(whatAboutArrowFunctions)  // lol
soYouHaveToDoThis()     //But it works.

console.log(this.isBullshit)









window.isBullshit = "I agree."
