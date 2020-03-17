const express = require('express');
const router = express.Router();
const monk = require('monk');
 const db = monk('localhost/pro');
const mews = db.get('mews');


router.post('/', (req, res, next) => {
    
			const user = {
				Name: req.body.Name,
				Age: req.body.Age,
				Gender: req.body.Gender,
				Mob_no: req.body.Mob_no
			};
			
    		mews.find({Name : req.body.Name}).then(u => {
    			if(u.length >= 1){
    				return res.status(409).json({
    					message: 'userID already exist ....use some other userID'
    				});
    			}
    			else{
    				console.log(user);
			mews.insert(user).then(createdMew => {
            res.json(createdMew);
        });
    			}
    		
			});
			
			
});
router.get('/', (req, res, next) => {
    
			
			mews.find().then( n => {
				res.json(n);

			});
			
			
});

router.delete("/:_id", (req, res, next) => {

  mews.remove({ _id: req.params._id})
    .then(result => {
      res.status(200).json({
        message: "user deleted"
      });
    });
    
});
router.put("/:_id", (req, res, next) => {

  mews.update({ _id: req.params._id} ,{
  	$set :{
  		Name: req.body.Name,
				Age: req.body.Age,
				Gender: req.body.Gender,
				Mob_no: req.body.Mob_no
  	}
  })
    .then(result => {
      res.status(200).json({
        message: "user updated(if not....then try again with correct username)"
      });
    });
    
});
module.exports = router;