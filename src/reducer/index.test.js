const rewire = require("rewire")
const index = rewire("./index")
const updateLocalStorage = index.__get__("updateLocalStorage")
// @ponicode
describe("updateLocalStorage", () => {
    test("0", () => {
        let callFunction = () => {
            updateLocalStorage("Mon Aug 03 12:45:00")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            updateLocalStorage("2017-09-29T19:01:00.000")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            updateLocalStorage("2017-09-29T23:01:00.000Z")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            updateLocalStorage("01:04:03")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            updateLocalStorage(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
