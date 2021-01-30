const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator')


router.post('/validate_rule', (req, res) => {
    check('name', 'Name is required').not().isEmpty().isLength({min: 5}).withMessage('Name must have more than 5 characters'),
    check('crew',  "Crew is required").not().isEmpty().isLength({ min: 5}).withMessage('Crew must have more than 5 characters'),
    check('age', "Age is required").isNumeric().not().isEmpty().withMessage('Please provide your age').isLength({ min: 3 }),
    check('position', "Kindly state your position").not().isEmpty().withMessage("Please provide your position"),
    check('missions', "Kindly state your missions value in number").isNumeric().not().isEmpty().withMessage("Kindly provide a numerical value").isLength({ min: 3 }),
    check("field", "Kindly state your field").not().isEmpty().isLength({ min: 5}).withMessage('Field is required'),
    check("condition", "Kindly state the condition").not().isEmpty().isNumeric(),
    check("condition_value", "Kindly state the numerical conditional value").not().isEmpty().withMessage("Kindly provide a numerical value").isNumeric()
}, (req, res) => {
    // const SecondSchema = req.body;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        throw new HttpError ("Please kindly fill empty field", 400)
    }   else if (condition !== condition_value ){
        res.status(400).json ({ 
            message: "Error, Condition must be greater than or equal to condition_value"
        })
    } else if (condition <= condition_value){
        res.status(400).json({
            message: "Error, Condition must be greater than or equal to condition_values"
        })
    }  return res.status(200).json({
            message: "Success" 
        })

})




module.exports = router;