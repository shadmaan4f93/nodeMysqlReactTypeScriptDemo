import Item from '../../models/item.model'

function postItem(req: any, res: any) {
    const newItem =  new Item(req.body)
    Item.create(newItem, function(err:any, item:any){
        if (err) {
            res.sendStatus(err)
        } else {
            res.send(item);
        }
    })
};

function getItem(req: any, res: any) {
    Item.findAll(function(err:any, item:any){
        if (err) {
            res.send(err);
        } else {
            res.send(item);
        }
    })
};


function getItemById(req: any, res: any) {
    Item.findById(req.params.id, function(err:any, item:any){
        if (err) {
            res.send(err);
        } else {
            res.send(item);
        }
    })
};


export default{
    postItem,
    getItem,
    getItemById
} ;
  

