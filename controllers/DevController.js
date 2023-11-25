const Developer = require("../models/Dev");
const Game = require("../models/Game");

exports.GetDeveloperList = (req, res, next) => {
    Developer.findAll().then(result => {
        const developer = result.map((result) => result.dataValues);

        res.render("devs/developers-list",{
                pageTitle: "Developer Lists",
                DeveloperActive: true,
                developer: developer,
                hasDevelopers: developer.length > 0
        })
    

    }).catch((err) =>{
        console.log(err);
    })
       
}

exports.GetCreateDeveloper = (req, res, next) => {

    Developer.findAll()
    .then(result =>{
        const developer = result.map((result) => result.dataValues);
            res.render("devs/save-developers", {
                pageTitle: "Add a new Developer",
                editMode: false,
                developer: developer,
            })
    })
    .catch((err) => {
        console.log(err);
    });

}

exports.PostCreateDeveloper = (req, res, next) => {
    const developerId= req.body.developerId;
    const DeveloperName = req.body.Name;
    const DeveloperEmail = req.body.Email;
    const DeveloperLocation = req.body.Location;

    Developer.create({
        id: developerId,
        name: DeveloperName, 
        email: DeveloperEmail,
        location: DeveloperLocation,
    })
    .then(result =>{
        res.redirect("/developers")
    })
    .catch((err) => {
        console.log(err);
    });

}
exports.GetEditDeveloper = (req, res, next) => {
    const edit = req.query.edit;
    const developerId = req.body.developerId;
 
    if(!edit){
         return res.redirect("/developers")
    }
    Developer.findOne({ where: { id: developerId } })
     .then((result) => {
       const developer = result.dataValues;   
 
       if (!developer) {
         return res.redirect("/developers");
       }   
 
         res.render("devs/save-developers",{
                pageTitle: "Edit Developer",
                editMode: edit,
                DeveloperActive: true,
                developer: developer,         
                });
             })
             .catch((err) => {
                 console.log(err);
             });
 }
 exports.PostEditDeveloper = (req, res, next) => {
    const developerId= req.body.developerId;
    const DeveloperName = req.body.Name;
    const DeveloperEmail = req.body.Email;
    const DeveloperLocation = req.body.Location;


   Developer.update({
        id: developerId,
        name: DeveloperName, 
        email: DeveloperEmail,
        location: DeveloperLocation,
    }, 
        {where: {id: developerId}}
    ).then(result =>{
        return res.redirect("/developers")
    }).catch(err =>{
        console.log(err);
    })
  
}

exports.PostDeleteDeveloper = (req, res, next) => {
    const developerId = req.params.developerId;
 
    Developer.destroy({where: {id: developerId}})
    .then(result =>{
     return res.redirect("/developers")
     }).catch(err =>{
         console.log(err);
     })
     
 }
