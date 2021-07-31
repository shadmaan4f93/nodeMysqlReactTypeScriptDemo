import Menu from '../../models/menu.model'

function postMenu(req: any, res: any) {
    const newMenu =  new Menu(req.body)
    Menu.create(newMenu, function(err:any, menu:any){
        if (err) {
            res.sendStatus(err)
        } else {
            res.send(menu);
        }
    })
};

function getMenu(req: any, res: any) {
    Menu.findAll(function(err:any, menu:any){
        if (err) {
            res.send(err);
        } else {
            res.send(menu);
        }
    })
};


function getMenuById(req: any, res: any) {
    Menu.findById(req.params.id, function(err:any, menu:any){
        if (err) {
            res.send(err);
        } else {
            res.send(menu);
        }
    })
};


export default{
    postMenu,
    getMenu,
    getMenuById
} ;
  

