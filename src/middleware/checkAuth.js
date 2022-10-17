import jwt from "jsonwebtoken"

/**
 * @param  {} req
 * @param  {} res
 * @param  {} next
 */

export default (req, res, next)=>{
    const token = (req.headers.authorization || "").replace(/Bearer\s?/, "")

    if(token){
        try {
            const decoded = jwt.verify(token, "qwerty")

            req.userId = decoded._id

            next()
        } catch (err) {
            return res.status(403).json({
                message: "Нет доступа 1"
            })
        }
    } else{
        return res.status(403).json({
            message: "Нет доступа 2"
        })
    }
} 