const dbActivity = require("../models/activity");

module.exports = {
    findAll: async(req, res) => {
        dbActivity.find({})
        .then((results) => {
            res.json({
                data: results
            })
        })
    },
    currentUserActivity: async (req, res) => {
        const userId = req.user._id;
    
        dbActivity.find({
            user_id: userId,
        }).then( (results) => {
            res.json({
                data:results
            })
        }) 
        
        
    },

    findByID: async (req, res) => {
        try {
            const results = await dbActivity.find(req.params.id);
            return res.json(results)
        }
        catch (error) {
            return res.status(422).json(error)
        }
    },
    //create, save new result in db
    create: async (req, res) => {
        try {
            const result = await dbActivity.create({
                ...req.body,
                user_id: req.user._id
            });
            return res.json(result)
        } catch (error) {
            return res.status(422).json(error)
        }
    },
 
    update: async (req, res) => {
        
        dbActivity.findByIdAndUpdate(req.params.id, {
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
    dbActivity.findByIdAndDelete(req.params.id)
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
};