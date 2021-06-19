

module.exports = (req, res) => {
    console.log("reading from api", process.env.TESTAPI)

    try {
        res.json({
            body: req.body,
            query: req.query,
            cookies: req.cookies,
            testapi: process.env.TESTAPI
        })
    } catch (e) {

        if (e instanceof TypeError) {
            console.log('error calling api trying manal call',req)

            return "you are a method"
        }

        res.json({
            type: "error",

        })
    }
}
