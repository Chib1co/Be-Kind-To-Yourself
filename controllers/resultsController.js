const dbResult = require('../models/Result');

module.exports = {
    //find all saved results by id
    findByID: async (req, res) => {
        try {
            const results = await dbResult.find(req.params.id);
            return res.json(results)
        }
        catch (error) {
            return res.status(422).json(error)
        }
    },

    //create, save new result in db
    create: async (req, res) => {
        try {
            const result = await dbResult.create(req.body);
            return res.json(result)
        } catch (error) {
            return res.status(500).json({error})
        }
    },

    update: async (req, res) => {
        
           dbResult.findByIdAndUpdate(req.params.id, {
                $push: req.body
            },
            {new: true},
            )
            .then((updated) => {
                res.json({
                    data: updated,
                });
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                })
            }) 
        
    },
    delete: async (req, res) => {
        dbResult.findByIdAndDelete(req.params.id)
        .then((deleted) => {
            res.json({
                data: deleted,
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        }) 
    },

    //finding newest added result
    getNewest: async (req, res) => {
        try {
            const result = await dbResult.findOne().sort({_id: -1});
                return res.json(result)
        } catch(error) {
            console.log(error)
                return res.status(500).json()
            }
             
        }
        
};