import UserModel from "../models/User.js"

export const getAll = async (req, res) =>{
    try {
        const users = await UserModel.find()
        res.json(users)
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Не получить людей"
        })
    }
}

export const getOne = async (req, res) =>{
    try {
        const userId = req.params.id
        
        UserModel.findById({
            _id: userId,
        },
        (err, doc)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    message: "Не получить юзера"
                })
            }

            if(!doc){
                return res.status(404).json({
                    message: "Юзер не найдена"
                })
            }
            res.json(doc)
        }

        )

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Не получить статью"
        })
    }
}  

export const Сreate = async (req, res) =>{
    try {
        const doc = new UserModel({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        })

        const user = await doc.save()

        res.json(user)
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Не удалось создать юзера"
        })
    }
}    

export const Remove = async (req, res) =>{
    try {
        const userId = req.params.id
        
        UserModel.findByIdAndDelete({
            _id: userId,
        }, (err, doc) =>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    message: "Не удалить юхера"
                })
            }
            if(!doc){
                console.log(err);
                return res.status(404).json({
                    message: "Не найдена юзера"
                })
            }
        })

        res.json({
            sucess: true,
        })
        
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Не получить юзера"
        })
    }
}  

export const Update = async(req, res) =>{
    try {
        const userId = req.params.id

        await UserModel.updateOne({
            _id: userId,
        },{
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        })

        res.json({
            sucess: true
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Не обновить юзера"
        })
    }
}