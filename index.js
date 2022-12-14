require('dotenv').config()
// const mainRouter = require("./config/mainRoutes")
// const Api404Error = require('./erorrHandle/api404Error')
// const { logErrorMiddleware, returnError } = require('./erorrHandle/errorHandler.js')
// const swaggerFile = require("./swagger/swaggerOutput.json"),
    // swaggerUi = require("swagger-ui-express")

const express = require("express")

const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

PORT = process.env.PORT || 5000




app.use("/", mainRouter)



require("./data/db").connect()

app.use(logErrorMiddleware)
app.use(returnError)

const check = () => {
    try {
        throw new Api404Error("hhh")//,user:req.user
    } catch (err) {
        console.log(err)
        logger.error({ e: err })
    }

}


app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));


app.listen(PORT, () => console.log(`Server is running at Port ${PORT}`))