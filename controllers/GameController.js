const Game = require("../models/Game");

exports.GetIndex = (req, res, next) => {
        // res.render("games/index", {
        //     pageTitle: "PixelOps",
        //     bookActive: true,
        // })
        Game.findAll().then(result =>{
            const game = result.map((result) => result.dataValues);
            res.render("games/index", {
                pageTitle: "PixelOps",
                homeActive: true,
                game: game,
        
            })
        }).catch((err) =>{
            console.log(err);
        })
}

exports.GetGamesList = (req, res, next) => {

    Game.findAll().then(result =>{
        const game = result.map((result) => result.dataValues); 
        res.render("games/game-list", {
            pageTitle: "Games Lists",
            GameActive: true,
            game: game,
            hasGame: game.length > 0
        })
    }).catch((err) =>{
        console.log(err);
    })
   
}
exports.GetCreateGame = (req, res, next) => {
            Game.findAll()
            .then(result =>{
                const game = result.map((result) => result.dataValues);
                    res.render("games/save-game", {
                        pageTitle: "Add a new game",
                        editMode: false,
                        game: game,
                    })
            })
            .catch((err) => {
                console.log(err);
            });
   
}

exports.PostCreateGame = (req, res, next) => {
    const gameId= req.body.gameId;
    const GameName = req.body.Name;
    const GamePublication = req.body.Publication;
    const GameImageUrl = req.body.ImgUrl;

    Game.create({
        id: gameId,
        gameName: GameName, 
        publication: GamePublication,
        imgUrl: GameImageUrl,
    })
    .then(result =>{
        res.redirect("/games")
    })
    .catch((err) => {
        console.log(err);
    });

}
exports.GetEditGame = (req, res, next) => {
    const edit = req.query.edit;
    const gameId = req.body.gameId;
 
    if(!edit){
         return res.redirect("/games")
    }
    Game.findOne({ where: { id: gameId } })
     .then((result) => {
       const game = result.dataValues;   
 
       if (!game) {
         return res.redirect("/games");
       }   
         res.render("games/save-game",{
                pageTitle: "Edit Game",
                editMode: edit,
                GameActive: true,
                game: game,         
                });
             })
             .catch((err) => {
                 console.log(err);
             });
    

 }
 exports.PostEditGame = (req, res, next) => {
    const gameId= req.body.gameId;
    const GameName = req.body.Name;
    const GamePublication = req.body.Publication;
    const GameImageUrl = req.body.ImgUrl;


   Game.update({
        name: GameName, 
        publication: GamePublication,
        imgUrl: GameImageUrl,
    }, 
        {where: {id: gameId}}
    ).then(result =>{
        return res.redirect("/games")
    }).catch(err =>{
        console.log(err);
    })
  
}

exports.PostDeleteGame = (req, res, next) => {
    const gameId = req.body.gameId;
 
    Game.destroy({where: {id: gameId}})
    .then(result =>{
     return res.redirect("/games")
     }).catch(err =>{
         console.log(err);
     })
     
 }