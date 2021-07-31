import Item from '../../models/item.model'

function postCart(req: any, res: any) {
    const newItem =  new Item(req.body)
    Item.create(newItem, function(err:any, item:any){
        if (err) {
            res.sendStatus(err)
        } else {
            res.send(item);
        }
    })
};

function getCart(req: any, res: any) {
    Item.findAll(function(err:any, item:any){
        if (err) {
            res.send(err);
        } else {
            res.send(item);
        }
    })
};


function getCartUserById(req: any, res: any) {
    Item.findById(req.params.userId, function(err:any, item:any){
        if (err) {
            res.send(err);
        } else {
            res.send(item);
        }
    })
};


export default{
    postCart,
    getCart,
    getCartUserById
} ;
  

